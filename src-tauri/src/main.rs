use serde::{Deserialize, Serialize};
use std::fs;
use std::io::Write;
use std::path::PathBuf;
use std::time::SystemTime;
use tauri::{AppHandle, Manager};

// Schema 版本：未来字段演进时在此升级 + 在加载处追加迁移逻辑
const TASKS_SCHEMA_VERSION: u32 = 1;
const MATRIX_SCHEMA_VERSION: u32 = 1;

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
struct Task {
    id: String,
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: u32,
    subtasks_total: u32,
    subtasks_done: u32,
    due_date: Option<String>,
    completed: bool,
    completed_at: Option<String>,
    created_at: String,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
struct TaskData {
    // 旧文件无此字段时按当前版本处理（serde default）
    #[serde(default = "default_tasks_schema_version")]
    schema_version: u32,
    tasks: Vec<Task>,
}

fn default_tasks_schema_version() -> u32 {
    TASKS_SCHEMA_VERSION
}

fn app_data_root(app: &AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir)
}

fn data_file_path(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_data_root(app)?.join("tasks.json"))
}

fn matrix_file_path(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_data_root(app)?.join("matrix.json"))
}

fn log_file_path(app: &AppHandle) -> Result<PathBuf, String> {
    let log_dir = app_data_root(app)?.join("logs");
    fs::create_dir_all(&log_dir).map_err(|e| e.to_string())?;
    Ok(log_dir.join("error.log"))
}

// 全局错误日志：所有 command 失败路径都落盘到 logs/error.log
fn log_error(app: &AppHandle, msg: &str) {
    let log_path = match log_file_path(app) {
        Ok(p) => p,
        Err(_) => return,
    };
    let ts = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .map(|d| d.as_secs())
        .unwrap_or(0);
    let line = format!("[ts={}] ERROR {}\n", ts, msg);
    if let Ok(mut f) = fs::OpenOptions::new().create(true).append(true).open(&log_path) {
        let _ = f.write_all(line.as_bytes());
    }
}

/// 原子写入：先写 .tmp 再 rename，防止崩溃导致半写入损坏文件
fn atomic_write(path: &PathBuf, content: &str) -> Result<(), String> {
    let tmp = path.with_extension("json.tmp");
    fs::write(&tmp, content).map_err(|e| format!("write tmp failed: {}", e))?;
    fs::rename(&tmp, path).map_err(|e| {
        // rename 失败时清理临时文件，避免残留
        let _ = fs::remove_file(&tmp);
        format!("rename failed: {}", e)
    })
}

/// 读取并解析文件；解析失败时把损坏文件备份为 .corrupt-{ts}.json，避免数据被静默丢弃
fn read_or_backup<F, T>(app: &AppHandle, path: &PathBuf, parse: F) -> Result<T, String>
where
    F: FnOnce(&str) -> Result<T, String>,
{
    if !path.exists() {
        return Err("file not found".into());
    }
    let content = fs::read_to_string(path).map_err(|e| {
        let msg = format!("read {:?} failed: {}", path, e);
        log_error(app, &msg);
        msg
    })?;
    match parse(&content) {
        Ok(v) => Ok(v),
        Err(parse_err) => {
            let ts = SystemTime::now()
                .duration_since(SystemTime::UNIX_EPOCH)
                .map(|d| d.as_secs())
                .unwrap_or(0);
            let backup = path.with_extension(format!("corrupt-{}.json", ts));
            let backup_msg = match fs::rename(path, &backup) {
                Ok(_) => format!("backed up to {:?}", backup),
                Err(_) => "backup failed".to_string(),
            };
            let msg = format!("parse {:?} failed ({}): {}", path, backup_msg, parse_err);
            log_error(app, &msg);
            Err(parse_err)
        }
    }
}

#[tauri::command]
fn load_tasks(app: AppHandle) -> Result<TaskData, String> {
    let path = data_file_path(&app)?;
    if !path.exists() {
        return Ok(TaskData {
            schema_version: TASKS_SCHEMA_VERSION,
            tasks: default_tasks(),
        });
    }
    let result = read_or_backup(&app, &path, |content| {
        let mut val: serde_json::Value =
            serde_json::from_str(content).map_err(|e| e.to_string())?;
        // 兼容旧文件：缺 schemaVersion 时注入当前版本
        if val.get("schemaVersion").is_none() {
            val["schemaVersion"] = serde_json::json!(TASKS_SCHEMA_VERSION);
        }
        // 当前仅 v1，无需迁移；后续升级在此处追加 v1→v2 迁移逻辑
        let data: TaskData = serde_json::from_value(val).map_err(|e| e.to_string())?;
        Ok(data)
    });
    // 损坏文件已备份，返回默认数据避免前端崩溃
    result.or_else(|_| {
        Ok(TaskData {
            schema_version: TASKS_SCHEMA_VERSION,
            tasks: default_tasks(),
        })
    })
}

#[tauri::command]
fn save_tasks(app: AppHandle, mut data: TaskData) -> Result<(), String> {
    let path = data_file_path(&app)?;
    // 强制注入 schemaVersion，确保未来可迁移
    data.schema_version = TASKS_SCHEMA_VERSION;
    let content = serde_json::to_string_pretty(&data).map_err(|e| {
        let msg = format!("serialize tasks failed: {}", e);
        log_error(&app, &msg);
        e.to_string()
    })?;
    atomic_write(&path, &content).map_err(|e| {
        let msg = format!("save tasks failed: {}", e);
        log_error(&app, &msg);
        msg
    })
}

#[tauri::command]
fn load_matrix(app: AppHandle) -> Result<serde_json::Value, String> {
    let path = matrix_file_path(&app)?;
    if !path.exists() {
        return Ok(serde_json::json!({
            "schemaVersion": MATRIX_SCHEMA_VERSION,
            "columns": []
        }));
    }
    let result = read_or_backup(&app, &path, |content| {
        let mut val: serde_json::Value =
            serde_json::from_str(content).map_err(|e| e.to_string())?;
        if val.get("schemaVersion").is_none() {
            val["schemaVersion"] = serde_json::json!(MATRIX_SCHEMA_VERSION);
        }
        Ok(val)
    });
    // 损坏文件已备份，返回空矩阵避免前端崩溃
    result.or_else(|_| {
        Ok(serde_json::json!({
            "schemaVersion": MATRIX_SCHEMA_VERSION,
            "columns": []
        }))
    })
}

#[tauri::command]
fn save_matrix(app: AppHandle, mut data: serde_json::Value) -> Result<(), String> {
    let path = matrix_file_path(&app)?;
    // 强制注入 schemaVersion（防御性：前端未传时补齐）
    if !data.is_object() {
        data = serde_json::json!({});
    }
    if let Some(obj) = data.as_object_mut() {
        obj.insert("schemaVersion".into(), serde_json::json!(MATRIX_SCHEMA_VERSION));
    }
    let content = serde_json::to_string_pretty(&data).map_err(|e| {
        let msg = format!("serialize matrix failed: {}", e);
        log_error(&app, &msg);
        e.to_string()
    })?;
    atomic_write(&path, &content).map_err(|e| {
        let msg = format!("save matrix failed: {}", e);
        log_error(&app, &msg);
        msg
    })
}

fn default_tasks() -> Vec<Task> {
    vec![
        Task {
            id: "t1".into(),
            title: "完成 Q3 季度复盘报告".into(),
            description: "梳理本季度成果与下季度规划".into(),
            category: "工作".into(),
            priority: "high".into(),
            progress: 75,
            subtasks_total: 4,
            subtasks_done: 3,
            due_date: Some("2026-07-21".into()),
            completed: false,
            completed_at: None,
            created_at: "2026-07-15".into(),
        },
        Task {
            id: "t2".into(),
            title: "准备产品发布会演示稿".into(),
            description: "8 月 6 日发布会主视觉与讲稿".into(),
            category: "工作".into(),
            priority: "high".into(),
            progress: 60,
            subtasks_total: 5,
            subtasks_done: 2,
            due_date: Some("2026-07-22".into()),
            completed: false,
            completed_at: None,
            created_at: "2026-07-10".into(),
        },
        Task {
            id: "t3".into(),
            title: "阅读《深度工作》第 3 章".into(),
            description: "记录要点并写读书笔记".into(),
            category: "学习".into(),
            priority: "medium".into(),
            progress: 40,
            subtasks_total: 2,
            subtasks_done: 1,
            due_date: Some("2026-07-25".into()),
            completed: false,
            completed_at: None,
            created_at: "2026-07-18".into(),
        },
        Task {
            id: "t4".into(),
            title: "学习 TypeScript 进阶课程".into(),
            description: "泛型、类型体操与工程实践".into(),
            category: "学习".into(),
            priority: "medium".into(),
            progress: 30,
            subtasks_total: 10,
            subtasks_done: 4,
            due_date: None,
            completed: false,
            completed_at: None,
            created_at: "2026-07-01".into(),
        },
        Task {
            id: "t5".into(),
            title: "健身房力量训练".into(),
            description: "下肢日：深蹲 + 硬拉 4 组".into(),
            category: "健康".into(),
            priority: "medium".into(),
            progress: 0,
            subtasks_total: 1,
            subtasks_done: 0,
            due_date: Some("2026-07-21".into()),
            completed: false,
            completed_at: None,
            created_at: "2026-07-21".into(),
        },
        Task {
            id: "t6".into(),
            title: "整理本周家庭开支".into(),
            description: "记账并复盘本周预算".into(),
            category: "生活".into(),
            priority: "low".into(),
            progress: 100,
            subtasks_total: 5,
            subtasks_done: 5,
            due_date: Some("2026-07-20".into()),
            completed: true,
            completed_at: Some("2026-07-20".into()),
            created_at: "2026-07-19".into(),
        },
    ]
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![load_tasks, save_tasks, load_matrix, save_matrix])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
