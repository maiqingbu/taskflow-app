/* ===== SVG Icons ===== */
const ICONS = {
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/><path d="M5 3v4M3 5h4"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  'calendar-clock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 2v4M8 2v4M3 10h5"/><circle cx="17" cy="17" r="5"/><path d="M17 14v3l2 1"/></svg>',
  'layout-list': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11M3 12h11M3 18h11M16 6h5M16 12h5M16 18h5"/></svg>',
  'check-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>',
  'alert-triangle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4M12 17h.01"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5v14"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  'more-horizontal': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
  'hard-drive': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>',
  'list-todo': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4h10M11 12h10M11 20h10"/><path d="M3 4l2 2 3-3M3 12l2 2 3-3M3 20l2 2 3-3"/></svg>',
  'trending-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  'circle-check-big': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
  'arrow-up-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16"/></svg>',
  'layout-grid': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  'chevron-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>',
  'check-square': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  'inbox': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
};

/* ===== Config ===== */
const CATEGORIES = {
  '工作': { gradient: 'linear-gradient(135deg,#7C3AED,#DB2777)', color: '#7C3AED' },
  '学习': { gradient: 'linear-gradient(135deg,#06B6D4,#3B82F6)', color: '#06B6D4' },
  '健康': { gradient: 'linear-gradient(135deg,#10B981,#14B8A6)', color: '#10B981' },
  '生活': { gradient: 'linear-gradient(135deg,#F59E0B,#F97316)', color: '#F59E0B' },
};
const PRIORITIES = {
  high: { label: '高', class: 'high' },
  medium: { label: '中', class: 'medium' },
  low: { label: '低', class: 'low' },
};

/* ===== State ===== */
const state = {
  tasks: [],
  matrix: null,
  matrixMonth: null, // { year, month }
  filter: 'today',
  search: '',
  sortMode: 'dueDate',
  quickCategory: '工作',
  categoryFilter: null, // 点击侧边栏分类时设置，null 表示不按分类过滤
};

/* ===== Default Matrix ===== */
function monthKey(y, m) { return y + '-' + m; }
function currentMonthKey() {
  const m = state.matrixMonth || (() => { const d = new Date(); state.matrixMonth = { year: d.getFullYear(), month: d.getMonth() + 1 }; return state.matrixMonth; })();
  return monthKey(m.year, m.month);
}
function emptySchedule() { return {}; }

const DEFAULT_MATRIX = {
  columns: [
    {
      id: 'mc1', name: '视频',
      gradient: 'linear-gradient(135deg, #7C3AED, #DB2777)',
      modules: [
        { id: 'mm1', name: '抖音', schedules: {} },
        { id: 'mm2', name: '快手', schedules: {} },
        { id: 'mm3', name: '支付宝', schedules: {} },
      ],
    },
    {
      id: 'mc2', name: '音频',
      gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
      modules: [
        { id: 'mm4', name: '喜马拉雅', schedules: {} },
        { id: 'mm5', name: '酷狗', schedules: {} },
      ],
    },
    {
      id: 'mc3', name: '图文',
      gradient: 'linear-gradient(135deg, #10B981, #14B8A6)',
      modules: [
        { id: 'mm6', name: '公众号', schedules: {} },
        { id: 'mm7', name: '今日头条', schedules: {} },
      ],
    },
  ],
};
const DAY_LABELS = ['一', '二', '三', '四', '五', '六', '日'];

/* ===== Data Layer ===== */
// 兼容 Tauri v2 不同版本的 __TAURI__ 全局对象结构
const tauriObj = (typeof window.__TAURI__ !== 'undefined') ? window.__TAURI__ : null;
const tauriInvoke = tauriObj?.core?.invoke || tauriObj?.invoke || (typeof tauriObj === 'function' ? tauriObj : null);
const tfIsTauri = !!tauriInvoke;
console.log('[TaskFlow] Tauri detect:', { hasTauriObj: !!tauriObj, hasCore: !!tauriObj?.core, hasInvoke: !!tauriObj?.core?.invoke, tauriInvokeFound: tfIsTauri });

// invoke 带超时，防止 hang 住导致界面无响应
// 首次启动时 app_data_dir 创建 + 文件读取可能较慢，超时放宽到 8s
function invokeWithTimeout(cmd, args, ms = 8000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('invoke timeout: ' + cmd)), ms);
    Promise.resolve(tauriInvoke(cmd, args)).then(r => { clearTimeout(timer); resolve(r); }).catch(e => { clearTimeout(timer); reject(e); });
  });
}

// 保存失败时通知用户（写入侧边栏 storage-sub + 顶部 toast），不静默吞错
function notifySaveFailed(scope) {
  const subEl = document.getElementById('storage-sub');
  if (subEl) {
    subEl.textContent = '⚠ 保存失败（' + scope + '）';
    subEl.style.color = 'var(--danger)';
  }
  showToast('保存失败：' + scope + '，请重试或检查磁盘空间', 'danger');
}

// 顶部非阻塞 toast：渲染到最上层（z-index 高于弹窗），避免被弹窗阻挡
let toastTimer = null;
function showToast(text, type) {
  let el = document.getElementById('app-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app-toast';
    el.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:99999;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:500;box-shadow:0 8px 24px rgba(23,24,48,.18);transition:opacity .2s;pointer-events:none;max-width:80vw;';
    document.body.appendChild(el);
  }
  el.textContent = text;
  if (type === 'danger') {
    el.style.background = 'linear-gradient(135deg,#EF4444,#DC2626)';
    el.style.color = '#fff';
  } else if (type === 'success') {
    el.style.background = 'linear-gradient(135deg,#10B981,#14B8A6)';
    el.style.color = '#fff';
  } else {
    el.style.background = 'var(--card)';
    el.style.color = 'var(--fg)';
    el.style.border = '1px solid var(--border)';
  }
  el.style.opacity = '1';
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.style.opacity = '0'; }, 2600);
}

async function loadData() {
  if (tauriInvoke) {
    try {
      const data = await invokeWithTimeout('load_tasks');
      console.log('[TaskFlow] load_tasks OK:', (data?.tasks || []).length, 'tasks');
      return data.tasks || [];
    } catch (e) {
      console.error('[TaskFlow] Tauri load failed:', e);
      showToast('本地数据加载失败，已临时回退浏览器存储', 'danger');
      return loadFromStorage();
    }
  }
  console.log('[TaskFlow] No Tauri, using localStorage');
  return loadFromStorage();
}
function loadFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem('taskflow-tasks') || '[]');
    return data.length > 0 ? data : DEFAULT_TASKS.slice();
  }
  catch { return DEFAULT_TASKS.slice(); }
}

// saveData 防抖：避免高频 toggle 导致频繁写盘
let saveDataTimer = null;
let saveDataFlushing = false;
async function saveData() {
  if (saveDataTimer) clearTimeout(saveDataTimer);
  return new Promise(resolve => {
    saveDataTimer = setTimeout(async () => {
      saveDataTimer = null;
      saveDataFlushing = true;
      try {
        if (tauriInvoke) {
          try { await invokeWithTimeout('save_tasks', { data: { tasks: state.tasks } }); resolve(); return; }
          catch (e) {
            console.error('[TaskFlow] Tauri save failed:', e);
            notifySaveFailed('tasks');
            // 降级到 localStorage 兜底
          }
        }
        try { localStorage.setItem('taskflow-tasks', JSON.stringify(state.tasks)); } catch (e2) {
          notifySaveFailed('tasks(localStorage)');
        }
      } finally {
        saveDataFlushing = false;
      }
      resolve();
    }, 300);
  });
}

/* ===== Matrix Data Layer ===== */
async function loadMatrixData() {
  if (tauriInvoke) {
    try {
      const data = await invokeWithTimeout('load_matrix');
      if (data && data.columns && data.columns.length > 0) return data;
      return JSON.parse(JSON.stringify(DEFAULT_MATRIX));
    } catch (e) {
      console.error('[TaskFlow] matrix load failed:', e);
      return JSON.parse(JSON.stringify(DEFAULT_MATRIX));
    }
  }
  try {
    const saved = JSON.parse(localStorage.getItem('taskflow-matrix') || 'null');
    return saved || JSON.parse(JSON.stringify(DEFAULT_MATRIX));
  } catch { return JSON.parse(JSON.stringify(DEFAULT_MATRIX)); }
}
async function saveMatrixData() {
  if (!state.matrix) return;
  if (tauriInvoke) {
    try { await invokeWithTimeout('save_matrix', { data: state.matrix }); return; }
    catch (e) {
      console.error('[TaskFlow] matrix save failed:', e);
      notifySaveFailed('matrix');
      // 降级到 localStorage 兜底
    }
  }
  try { localStorage.setItem('taskflow-matrix', JSON.stringify(state.matrix)); } catch (e2) {
    notifySaveFailed('matrix(localStorage)');
  }
}

/* ===== Utilities ===== */
function escapeHtml(s) { const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML; }
function generateId() { return 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function todayStr() { return new Date().toISOString().slice(0, 10); }
function isTodayDate(ds) { return ds === todayStr(); }
function isPast(ds) { return ds < todayStr(); }
function daysUntil(ds) { return Math.round((new Date(ds) - new Date(todayStr())) / 86400000); }

function formatDate(ds) {
  if (!ds) return '';
  const diff = daysUntil(ds);
  if (diff === 0) return '今天';
  if (diff === 1) return '明天';
  if (diff === -1) return '昨天';
  if (diff > 0 && diff < 7) return diff + '天后';
  if (diff < 0 && diff > -7) return Math.abs(diff) + '天前';
  const d = new Date(ds);
  return (d.getMonth() + 1) + '月' + d.getDate() + '日';
}
function getGreetingSub() {
  const now = new Date();
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  return '今天是 ' + (now.getMonth() + 1) + '月' + now.getDate() + '日 周' + days[now.getDay()] + '，专注最重要的事';
}

/* ===== Filtering ===== */
function getFilteredTasks() {
  let tasks = state.tasks.slice();
  if (state.search) {
    const q = state.search.toLowerCase();
    tasks = tasks.filter(t => t.title.toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q));
  }
  // 分类筛选（点击侧边栏分类项时生效）
  if (state.categoryFilter) {
    tasks = tasks.filter(t => t.category === state.categoryFilter);
  }
  switch (state.filter) {
    case 'today': tasks = tasks.filter(t => t.dueDate === todayStr() && !t.completed); break;
    case 'upcoming':
      // 即将到期：未来 0-3 天且未完成（与 sidebar 计数口径一致）
      tasks = tasks.filter(t => t.dueDate && !t.completed && daysUntil(t.dueDate) >= 0 && daysUntil(t.dueDate) <= 3);
      break;
    case 'active': tasks = tasks.filter(t => !t.completed && t.progress > 0); break;
    case 'completed': tasks = tasks.filter(t => t.completed); break;
    case 'overdue':
      // 已逾期：截止日期早于今天且未完成
      tasks = tasks.filter(t => t.dueDate && !t.completed && isPast(t.dueDate));
      break;
    case 'all': default: break;
  }
  tasks.sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    if (state.sortMode === 'dueDate') {
      const da = a.dueDate || '9999-12-31';
      const db = b.dueDate || '9999-12-31';
      return da < db ? -1 : da > db ? 1 : 0;
    }
    if (state.sortMode === 'priority') {
      const order = { high: 0, medium: 1, low: 2 };
      const pa = order[a.priority] ?? 3;
      const pb = order[b.priority] ?? 3;
      return pa - pb;
    }
    return 0;
  });
  return tasks;
}

/* ===== CRUD ===== */
function addTask(task) {
  task.id = generateId();
  task.createdAt = todayStr();
  task.completed = false;
  task.completedAt = null;
  state.tasks.unshift(task);
  saveData(); renderAll();
}
function updateTask(id, updates) {
  const t = state.tasks.find(x => x.id === id);
  if (!t) return;
  Object.assign(t, updates);
  if (updates.completed === true) { t.completedAt = todayStr(); t.progress = 100; t.subtasksDone = t.subtasksTotal; }
  if (updates.completed === false) { t.completedAt = null; }
  saveData(); renderAll();
}
function deleteTask(id) {
  state.tasks = state.tasks.filter(t => t.id !== id);
  saveData(); renderAll();
}
function toggleComplete(id) {
  const t = state.tasks.find(x => x.id === id);
  if (!t) return;
  updateTask(id, { completed: !t.completed });
}

/* ===== Rendering ===== */
function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = ICONS[el.dataset.icon] || ''; });
}

function renderNav() {
  const today = state.tasks.filter(t => t.dueDate === todayStr() && !t.completed).length;
  const upcoming = state.tasks.filter(t => t.dueDate && !t.completed && daysUntil(t.dueDate) >= 0 && daysUntil(t.dueDate) <= 3).length;
  const all = state.tasks.length;
  const completed = state.tasks.filter(t => t.completed).length;
  const overdue = state.tasks.filter(t => t.dueDate && !t.completed && isPast(t.dueDate)).length;

  const items = [
    { key: 'today', icon: 'sun', label: '今日', count: today },
    { key: 'upcoming', icon: 'calendar-clock', label: '即将到期', count: upcoming },
    { key: 'all', icon: 'layout-list', label: '全部任务', count: all },
    { key: 'completed', icon: 'check-check', label: '已完成', count: completed },
    { key: 'overdue', icon: 'alert-triangle', label: '已逾期', count: overdue, danger: true },
  ];
  document.getElementById('nav-items').innerHTML = items.map(it => `
    <button class="nav-item ${it.key === state.filter ? 'active' : ''} ${it.danger ? 'danger' : ''}" data-filter="${it.key}">
      <i data-icon="${it.icon}"></i>
      <span class="nav-label">${it.label}</span>
      <span class="nav-badge">${it.count}</span>
    </button>`).join('');
  renderIcons();
}

function renderProjects() {
  const cats = Object.keys(CATEGORIES);
  document.getElementById('projects-list').innerHTML = cats.map(cat => {
    const count = state.tasks.filter(t => t.category === cat && !t.completed).length;
    return `<div class="project-item" data-cat="${cat}"><span class="project-dot" style="background:${CATEGORIES[cat].color}"></span><span>${escapeHtml(cat)}</span><span class="project-count">${count}</span></div>`;
  }).join('') + '<div class="project-item add-project-btn" data-action="add-project" style="color:var(--muted-fg);cursor:pointer"><span class="project-dot" style="background:var(--border)"></span><span>+ 新建项目</span></div>';
}

function renderProgressHero() {
  const todayTasks = state.tasks.filter(t => t.dueDate === todayStr());
  const total = todayTasks.length;
  const done = todayTasks.filter(t => t.completed).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  const remaining = total - done;

  const r = 40, circ = 2 * Math.PI * r, offset = circ * (1 - pct / 100);
  document.getElementById('progress-hero').innerHTML = `
    <div>
      <div class="progress-label">今日进度</div>
      <div class="progress-number">${pct}%</div>
      <div class="progress-subtext">已完成 ${done} / ${total} 项${remaining > 0 ? ' · 再完成 ' + remaining + ' 项就搞定今天啦' : ' · 全部搞定！'}</div>
    </div>
    <div class="progress-ring-wrap">
      <svg width="96" height="96" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="${r}" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="8"/>
        <circle cx="48" cy="48" r="${r}" fill="none" stroke="white" stroke-width="8" stroke-linecap="round"
          stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 48 48)"
          style="transition:stroke-dashoffset .4s"/>
      </svg>
      <div class="progress-ring-text">${done}/${total}</div>
    </div>`;
}

function renderStats() {
  const todayTodo = state.tasks.filter(t => t.dueDate === todayStr() && !t.completed).length;
  const active = state.tasks.filter(t => !t.completed && t.progress > 0).length;
  const completedWeek = state.tasks.filter(t => t.completed).length;
  const overdue = state.tasks.filter(t => t.dueDate && !t.completed && isPast(t.dueDate)).length;

  const stats = [
    { icon: 'list-todo', label: '今日待办', num: todayTodo, delta: '今天要完成', grad: 'linear-gradient(135deg,#06B6D4,#3B82F6)' },
    { icon: 'trending-up', label: '进行中', num: active, delta: '持续推动中', grad: 'linear-gradient(135deg,#7C3AED,#DB2777)' },
    { icon: 'circle-check-big', label: '已完成', num: completedWeek, delta: '累计完成', grad: 'linear-gradient(135deg,#10B981,#14B8A6)' },
    { icon: 'alert-triangle', label: '已逾期', num: overdue, delta: '需尽快处理', grad: 'linear-gradient(135deg,#F59E0B,#F97316)', danger: true },
  ];
  document.getElementById('stats-row').innerHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-icon" style="background:${s.grad}"><i data-icon="${s.icon}"></i></div>
      <div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-number">${s.num}</div>
        <div class="stat-delta ${s.danger && s.num > 0 ? 'danger' : ''}">${s.delta}</div>
      </div>
    </div>`).join('');
  renderIcons();
}

function renderTaskGrid() {
  const tasks = getFilteredTasks();
  const grid = document.getElementById('task-grid');
  if (tasks.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i data-icon="inbox"></i><p>暂无任务，点击"新建任务"开始规划吧</p></div>`;
    renderIcons(); return;
  }
  grid.innerHTML = tasks.map(t => {
    const cat = CATEGORIES[t.category] || CATEGORIES['工作'];
    const pri = PRIORITIES[t.priority] || PRIORITIES['medium'];
    const overdue = t.dueDate && !t.completed && isPast(t.dueDate);
    return `
    <div class="task-card ${t.completed ? 'completed' : ''}" data-id="${t.id}">
      <div class="task-accent" style="background:${cat.gradient}"></div>
      <div class="task-header">
        <button class="task-checkbox ${t.completed ? 'checked' : ''}" data-action="toggle" data-id="${t.id}">${t.completed ? ICONS.check : ''}</button>
        <span class="task-title">${escapeHtml(t.title)}</span>
        <span class="priority-pill ${pri.class}">${pri.label}</span>
      </div>
      ${t.description ? `<p class="task-desc">${escapeHtml(t.description)}</p>` : ''}
      <div class="task-progress">
        <span class="progress-label">进度 ${t.progress}%</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${t.progress}%;background:${cat.gradient}"></div></div>
      </div>
      <div class="task-footer">
        <div class="task-meta">
          <span class="category-pill"><span class="cat-dot" style="background:${cat.color}"></span>${t.category}</span>
          ${t.dueDate ? `<span class="date-chip ${overdue ? 'overdue' : ''}"><i data-icon="calendar"></i>${formatDate(t.dueDate)}</span>` : ''}
          ${t.subtasksTotal > 0 ? `<span class="subtask-chip"><i data-icon="check-square"></i>${t.subtasksDone}/${t.subtasksTotal}</span>` : ''}
        </div>
        <button class="task-more" data-action="edit" data-id="${t.id}"><i data-icon="more-horizontal"></i></button>
      </div>
    </div>`;
  }).join('');
  renderIcons();
}

function renderFocusPanel() {
  const todayTasks = state.tasks.filter(t => t.dueDate === todayStr() && !t.completed);
  const focus = todayTasks.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.priority] - order[b.priority];
  })[0];

  // Weekly bars
  const now = new Date();
  const dayIdx = (now.getDay() + 6) % 7; // Mon=0
  const labels = ['一', '二', '三', '四', '五', '六', '日'];
  const bars = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now); d.setDate(now.getDate() - dayIdx + i);
    const ds = d.toISOString().slice(0, 10);
    const count = state.tasks.filter(t => t.completed && t.completedAt === ds).length;
    bars.push({ label: labels[i], count, h: count > 0 ? Math.min(95, count * 20 + 15) : 0, today: i === dayIdx });
  }

  const focusHtml = focus ? `
    <div class="focus-card">
      <div class="focus-label">今日聚焦</div>
      <div class="focus-title">${escapeHtml(focus.title)}</div>
      <div class="focus-progress-bar"><div class="focus-progress-fill" style="width:${focus.progress}%"></div></div>
      <div class="focus-meta">${formatDate(focus.dueDate)} · ${focus.subtasksDone}/${focus.subtasksTotal} 子任务</div>
      <button class="focus-btn" data-action="edit" data-id="${focus.id}">继续推进 <i data-icon="chevron-right"></i></button>
    </div>` : `
    <div class="focus-card">
      <div class="focus-label">今日聚焦</div>
      <div class="focus-title">今天没有待办任务</div>
      <div class="focus-meta">享受空闲时光，或规划明天</div>
    </div>`;

  const weeklyHtml = `
    <div class="panel-card">
      <div class="panel-title">本周进度</div>
      <div class="panel-sub">完成 ${state.tasks.filter(t => t.completed).length} 项</div>
      <div class="weekly-bars">
        ${bars.map(b => `
          <div class="weekly-bar-col">
            <div class="weekly-bar ${b.count > 0 ? 'fill' : ''} ${b.today ? 'today' : ''}" style="height:${b.h}%"></div>
            <span class="weekly-label ${b.today ? 'today' : ''}">${b.label}</span>
          </div>`).join('')}
      </div>
    </div>`;

  const quickAddHtml = `
    <div class="panel-card">
      <div class="panel-title">快速添加</div>
      <div class="quick-add-row">
        <input type="text" class="quick-input" id="quick-input" placeholder="添加新事项…" autocomplete="off">
        <button class="quick-btn" id="quick-btn"><i data-icon="plus"></i></button>
      </div>
      <div class="quick-chips" id="quick-chips">
        ${Object.keys(CATEGORIES).map(c => `<span class="quick-chip ${c === state.quickCategory ? 'active' : ''}" data-cat="${c}">${c}</span>`).join('')}
      </div>
    </div>`;

  document.getElementById('focus-panel').innerHTML = focusHtml + weeklyHtml + quickAddHtml;

  // Quick add events
  const qi = document.getElementById('quick-input');
  document.getElementById('quick-btn').addEventListener('click', () => {
    const val = qi.value.trim();
    if (!val) return;
    addTask({ title: val, description: '', category: state.quickCategory, priority: 'medium', progress: 0, subtasksTotal: 0, subtasksDone: 0, dueDate: todayStr() });
    qi.value = '';
  });
  qi.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('quick-btn').click(); });
  document.getElementById('quick-chips').addEventListener('click', e => {
    const chip = e.target.closest('.quick-chip'); if (!chip) return;
    state.quickCategory = chip.dataset.cat;
    document.querySelectorAll('.quick-chip').forEach(c => c.classList.toggle('active', c.dataset.cat === state.quickCategory));
  });
  renderIcons();
}

/* ===== Matrix Render ===== */
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function getFirstDayWeekday(year, month) {
  const d = new Date(year, month - 1, 1).getDay();
  return d === 0 ? 6 : d - 1; // 周一=0
}
function isCurrentMonth() {
  const now = new Date();
  return state.matrixMonth.year === now.getFullYear() && state.matrixMonth.month === now.getMonth() + 1;
}
function getMarkedDays(mod) {
  const key = currentMonthKey();
  return mod.schedules && mod.schedules[key] ? mod.schedules[key] : [];
}

function renderMatrixMonthSelector() {
  const sel = document.getElementById('matrix-month-select');
  if (!sel) return;
  const { year, month } = state.matrixMonth;
  const baseDate = new Date(year, month - 1, 1);
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth() + 1;
  let options = '';
  for (let i = -12; i <= 12; i++) {
    const d = new Date(baseDate.getFullYear(), baseDate.getMonth() + i, 1);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const val = y + '-' + m;
    const isCur = (i === 0);
    const isToday = (y === todayY && m === todayM);
    options += `<option value="${val}"${isCur ? ' selected' : ''}>${y}年${m}月${isToday ? ' · 本月' : ''}</option>`;
  }
  sel.innerHTML = options;
}

function renderMatrix() {
  if (!state.matrix) return;
  const container = document.getElementById('matrix-table');
  if (!container) return;
  renderMatrixMonthSelector();

  const { year, month } = state.matrixMonth;
  const daysInMonth = getDaysInMonth(year, month);
  const firstWeekday = getFirstDayWeekday(year, month);
  const showToday = isCurrentMonth();
  const todayDate = new Date().getDate();
  const mk = currentMonthKey();

  const html = state.matrix.columns.map(col => {
    const modulesHtml = col.modules.map(mod => {
      const marked = getMarkedDays(mod);
      // 生成日历格：前导空格 + 日期格
      const blanks = Array.from({ length: firstWeekday }, () => '<div class="cal-cell blank"></div>').join('');
      let cells = '';
      for (let day = 1; day <= daysInMonth; day++) {
        const active = marked.includes(day);
        const isToday = showToday && day === todayDate;
        const cls = ['cal-cell'];
        if (active) cls.push('active');
        if (isToday) cls.push('today');
        // 标记后仍显示日期数字（保证可读性），active 状态用背景高亮 + 数字加粗白色区分
        cells += `<div class="${cls.join(' ')}" data-col="${col.id}" data-mod="${mod.id}" data-day="${day}"><span class="cal-num">${day}</span></div>`;
      }
      return `
        <div class="matrix-module">
          <div class="module-header">
            <span class="module-name">${escapeHtml(mod.name)}</span>
            <button class="module-del" data-action="del-module" data-col="${col.id}" data-mod="${mod.id}">${ICONS['x']}</button>
          </div>
          <div class="module-calendar">
            <div class="cal-labels">${DAY_LABELS.map(l => `<div class="cal-label">${l}</div>`).join('')}</div>
            <div class="cal-grid">${blanks}${cells}</div>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="matrix-col">
        <div class="matrix-col-header" style="background:${col.gradient}">
          <span class="col-dot"></span>
          <span class="col-name">${escapeHtml(col.name)}</span>
          <button class="col-del" data-action="del-col" data-col="${col.id}" title="删除分类">${ICONS['x']}</button>
        </div>
        ${modulesHtml}
        <button class="add-module-btn" data-action="add-module" data-col="${col.id}">
          ${ICONS['plus']}<span>添加模块</span>
        </button>
      </div>`;
  }).join('');
  container.innerHTML = html;
  renderIcons();
}

function renderAll() {
  renderNav();
  renderProjects();
  renderProgressHero();
  renderStats();
  renderMatrix();
  renderTaskGrid();
  renderFocusPanel();
  document.getElementById('greeting-sub').textContent = getGreetingSub();
}

/* ===== Modal ===== */
function openModal(task) {
  const overlay = document.getElementById('modal-overlay');
  const title = document.getElementById('modal-title');
  const delBtn = document.getElementById('modal-delete');

  if (task) {
    title.textContent = '编辑任务';
    delBtn.style.display = 'inline-flex';
    document.getElementById('editing-task-id').value = task.id;
    document.getElementById('form-title').value = task.title;
    document.getElementById('form-description').value = task.description || '';
    document.getElementById('form-category').value = task.category;
    document.getElementById('form-priority').value = task.priority;
    document.getElementById('form-due-date').value = task.dueDate || '';
    document.getElementById('form-progress').value = task.progress;
    document.getElementById('progress-display').textContent = task.progress + '%';
    document.getElementById('form-subtasks-done').value = task.subtasksDone;
    document.getElementById('form-subtasks-total').value = task.subtasksTotal;
  } else {
    title.textContent = '新建任务';
    delBtn.style.display = 'none';
    document.getElementById('task-form').reset();
    document.getElementById('editing-task-id').value = '';
    document.getElementById('form-priority').value = 'medium';
    document.getElementById('form-progress').value = 0;
    document.getElementById('progress-display').textContent = '0%';
  }
  overlay.classList.add('show');
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('show'); }

function handleSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('editing-task-id').value;
  let progress = parseInt(document.getElementById('form-progress').value) || 0;
  let subtasksDone = parseInt(document.getElementById('form-subtasks-done').value) || 0;
  let subtasksTotal = parseInt(document.getElementById('form-subtasks-total').value) || 0;
  // 校验：done 不能大于 total（避免渲染 10/3 等异常状态）
  if (subtasksTotal > 0 && subtasksDone > subtasksTotal) subtasksDone = subtasksTotal;
  if (subtasksTotal === 0) subtasksDone = 0;
  // 进度边界钳制
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;
  const taskData = {
    title: document.getElementById('form-title').value.trim(),
    description: document.getElementById('form-description').value.trim(),
    category: document.getElementById('form-category').value,
    priority: document.getElementById('form-priority').value,
    dueDate: document.getElementById('form-due-date').value || null,
    progress,
    subtasksDone,
    subtasksTotal,
  };
  if (!taskData.title) return;
  // completed / progress 双向同步：
  // - 进度 100 自动标记完成
  // - 编辑现有已完成任务时保持完成状态（updateTask 在 completed=true 时会强制 progress=100）
  if (progress === 100) taskData.completed = true;
  if (id) {
    const existing = state.tasks.find(t => t.id === id);
    if (existing && existing.completed && progress < 100) {
      // 已完成任务改回未完成态
      taskData.completed = false;
    } else if (existing && existing.completed) {
      taskData.completed = true;
    }
    updateTask(id, taskData);
  } else {
    addTask(taskData);
  }
  closeModal();
}

/* ===== Events ===== */
function bindEvents() {
  // New task
  document.getElementById('new-task-btn').addEventListener('click', () => openModal(null));

  // Filter tabs
  document.getElementById('filter-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.tab'); if (!tab) return;
    state.filter = tab.dataset.filter;
    state.categoryFilter = null; // 切换 filter 时清空分类筛选
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
    renderTaskGrid();
  });

  // Nav items (sidebar filter)
  document.getElementById('nav-items').addEventListener('click', e => {
    const item = e.target.closest('.nav-item'); if (!item) return;
    state.filter = item.dataset.filter;
    state.categoryFilter = null; // 切换 nav 时清空分类筛选
    renderAll();
    // Sync filter tabs：sidebar 的 upcoming/overdue 在 filter tabs 中无对应项，全部取消高亮
    const tabMap = { today: 'today', upcoming: null, all: 'all', completed: 'completed', overdue: null };
    const target = tabMap[state.filter];
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', target !== null && t.dataset.filter === target));
  });

  // Search
  document.getElementById('search-input').addEventListener('input', e => {
    state.search = e.target.value;
    renderTaskGrid();
  });

  // Sort toggle
  document.getElementById('sort-btn').addEventListener('click', () => {
    state.sortMode = state.sortMode === 'dueDate' ? 'priority' : 'dueDate';
    document.getElementById('sort-btn').innerHTML = ICONS['arrow-up-down'] + (state.sortMode === 'dueDate' ? '按截止时间' : '按优先级');
    renderIcons();
    renderTaskGrid();
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b === btn));
      document.getElementById('task-grid').classList.toggle('list-view', btn.dataset.view === 'list');
    });
  });

  // Task grid (event delegation)
  document.getElementById('task-grid').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]'); if (!btn) return;
    const id = btn.dataset.id;
    if (btn.dataset.action === 'toggle') toggleComplete(id);
    if (btn.dataset.action === 'edit') {
      const task = state.tasks.find(t => t.id === id);
      if (task) openModal(task);
    }
  });

  // Focus panel (event delegation for focus button)
  document.getElementById('focus-panel').addEventListener('click', e => {
    const btn = e.target.closest('[data-action="edit"]'); if (!btn) return;
    const task = state.tasks.find(t => t.id === btn.dataset.id);
    if (task) openModal(task);
  });

  // Modal
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
  document.getElementById('task-form').addEventListener('submit', handleSubmit);
  document.getElementById('modal-delete').addEventListener('click', async () => {
    const id = document.getElementById('editing-task-id').value;
    if (!id) return;
    // 删除前确认，避免误删（与删除分类一致）
    const ok = await showConfirmModal('确定删除此任务吗？删除后无法恢复。');
    if (!ok) return;
    deleteTask(id);
    closeModal();
  });

  // Progress slider
  document.getElementById('form-progress').addEventListener('input', e => {
    document.getElementById('progress-display').textContent = e.target.value + '%';
  });

  // ===== Matrix Events =====

  // 自定义输入弹窗
  let inputModalResolve = null;
  function showInputModal(label, placeholder) {
    return new Promise(resolve => {
      inputModalResolve = resolve;
      document.getElementById('input-modal-label').textContent = label;
      const field = document.getElementById('input-modal-field');
      field.value = '';
      field.placeholder = placeholder || '输入名称…';
      document.getElementById('input-modal-overlay').classList.add('show');
      setTimeout(() => field.focus(), 50);
    });
  }
  function closeInputModal(val) {
    document.getElementById('input-modal-overlay').classList.remove('show');
    if (inputModalResolve) { inputModalResolve(val); inputModalResolve = null; }
  }
  document.getElementById('input-modal-cancel').addEventListener('click', () => closeInputModal(null));
  document.getElementById('input-modal-confirm').addEventListener('click', () => {
    closeInputModal(document.getElementById('input-modal-field').value.trim());
  });
  document.getElementById('input-modal-field').addEventListener('keydown', e => {
    if (e.key === 'Enter') closeInputModal(document.getElementById('input-modal-field').value.trim());
    if (e.key === 'Escape') closeInputModal(null);
  });
  document.getElementById('input-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeInputModal(null);
  });

  // 自定义确认弹窗
  let confirmModalResolve = null;
  function showConfirmModal(text) {
    return new Promise(resolve => {
      confirmModalResolve = resolve;
      document.getElementById('confirm-modal-text').textContent = text;
      document.getElementById('confirm-modal-overlay').classList.add('show');
    });
  }
  function closeConfirmModal(val) {
    document.getElementById('confirm-modal-overlay').classList.remove('show');
    if (confirmModalResolve) { confirmModalResolve(val); confirmModalResolve = null; }
  }
  document.getElementById('confirm-modal-cancel').addEventListener('click', () => closeConfirmModal(false));
  document.getElementById('confirm-modal-confirm').addEventListener('click', () => closeConfirmModal(true));
  document.getElementById('confirm-modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeConfirmModal(false);
  });

  // 月份下拉选择
  document.getElementById('matrix-month-select').addEventListener('change', e => {
    const parts = e.target.value.split('-');
    state.matrixMonth = { year: parseInt(parts[0]), month: parseInt(parts[1]) };
    renderMatrix();
  });

  // 月份导航
  document.getElementById('matrix-prev-month').addEventListener('click', () => {
    let { year, month } = state.matrixMonth;
    month--; if (month < 1) { month = 12; year--; }
    state.matrixMonth = { year, month };
    renderMatrix();
  });
  document.getElementById('matrix-next-month').addEventListener('click', () => {
    let { year, month } = state.matrixMonth;
    month++; if (month > 12) { month = 1; year++; }
    state.matrixMonth = { year, month };
    renderMatrix();
  });
  document.getElementById('matrix-today').addEventListener('click', () => {
    const d = new Date();
    state.matrixMonth = { year: d.getFullYear(), month: d.getMonth() + 1 };
    renderMatrix();
  });

  // 添加分类
  document.getElementById('add-matrix-col').addEventListener('click', async () => {
    const name = await showInputModal('请输入分类名称', '如：视频、音频、图文');
    if (!name) return;
    const gradients = [
      'linear-gradient(135deg, #7C3AED, #DB2777)',
      'linear-gradient(135deg, #06B6D4, #3B82F6)',
      'linear-gradient(135deg, #10B981, #14B8A6)',
      'linear-gradient(135deg, #F59E0B, #F97316)',
      'linear-gradient(135deg, #6366F1, #06B6D4)',
      'linear-gradient(135deg, #DB2777, #F59E0B)',
    ];
    const idx = state.matrix.columns.length;
    state.matrix.columns.push({
      id: 'mc' + Date.now(),
      name: name,
      gradient: gradients[idx % gradients.length],
      modules: [],
    });
    saveMatrixData();
    renderMatrix();
  });

  // 项目列表事件委托：点击分类筛选 + 新建项目
  document.getElementById('projects-list').addEventListener('click', async e => {
    const addBtn = e.target.closest('[data-action="add-project"]');
    if (addBtn) {
      // 新建项目分类：复用 inputModal
      const name = await showInputModal('请输入项目分类名称', '如：工作、学习、健康');
      if (!name) return;
      if (CATEGORIES[name]) {
        showToast('该分类已存在', 'danger');
        return;
      }
      const palette = [
        { gradient: 'linear-gradient(135deg,#7C3AED,#DB2777)', color: '#7C3AED' },
        { gradient: 'linear-gradient(135deg,#06B6D4,#3B82F6)', color: '#06B6D4' },
        { gradient: 'linear-gradient(135deg,#10B981,#14B8A6)', color: '#10B981' },
        { gradient: 'linear-gradient(135deg,#F59E0B,#F97316)', color: '#F59E0B' },
        { gradient: 'linear-gradient(135deg,#6366F1,#06B6D4)', color: '#6366F1' },
        { gradient: 'linear-gradient(135deg,#DB2777,#F59E0B)', color: '#DB2777' },
      ];
      CATEGORIES[name] = palette[Object.keys(CATEGORIES).length % palette.length];
      // 同步表单分类下拉选项
      const sel = document.getElementById('form-category');
      if (sel) {
        const opt = document.createElement('option');
        opt.value = name; opt.textContent = name;
        sel.appendChild(opt);
      }
      renderProjects();
      showToast('已新增分类：' + name, 'success');
      return;
    }
    // 点击已有分类：按分类筛选
    const item = e.target.closest('.project-item[data-cat]');
    if (item) {
      state.categoryFilter = item.dataset.cat;
      state.filter = 'all';
      // 清空搜索框，避免叠加干扰
      state.search = '';
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      // 同步高亮：取消 nav/filter tabs
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
      renderTaskGrid();
    }
  });

  // 矩阵事件委托（点击日历格、添加模块、删除）
  document.getElementById('matrix-table').addEventListener('click', async e => {
    // 点击日历格
    const cell = e.target.closest('.cal-cell:not(.blank)');
    if (cell) {
      const colId = cell.dataset.col;
      const modId = cell.dataset.mod;
      const day = parseInt(cell.dataset.day);
      const col = state.matrix.columns.find(c => c.id === colId);
      if (!col) return;
      const mod = col.modules.find(m => m.id === modId);
      if (!mod) return;
      const mk = currentMonthKey();
      if (!mod.schedules) mod.schedules = {};
      if (!mod.schedules[mk]) mod.schedules[mk] = [];
      const arr = mod.schedules[mk];
      const idx = arr.indexOf(day);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(day);
      saveMatrixData();
      renderMatrix();
      return;
    }
    // 添加模块
    const addBtn = e.target.closest('[data-action="add-module"]');
    if (addBtn) {
      const colId = addBtn.dataset.col;
      const col = state.matrix.columns.find(c => c.id === colId);
      if (!col) return;
      const name = await showInputModal('请输入模块名称', '如：抖音、公众号');
      if (!name) return;
      col.modules.push({
        id: 'mm' + Date.now(),
        name: name,
        schedules: {},
      });
      saveMatrixData();
      renderMatrix();
      return;
    }
    // 删除模块
    const delMod = e.target.closest('[data-action="del-module"]');
    if (delMod) {
      const colId = delMod.dataset.col;
      const modId = delMod.dataset.mod;
      const col = state.matrix.columns.find(c => c.id === colId);
      if (!col) return;
      const mod = col.modules.find(m => m.id === modId);
      const modName = mod ? mod.name : '该模块';
      const ok = await showConfirmModal('确定删除模块「' + modName + '」吗？所有标记记录将一并清除。');
      if (!ok) return;
      col.modules = col.modules.filter(m => m.id !== modId);
      saveMatrixData();
      renderMatrix();
      return;
    }
    // 删除分类
    const delCol = e.target.closest('[data-action="del-col"]');
    if (delCol) {
      const colId = delCol.dataset.col;
      const col = state.matrix.columns.find(c => c.id === colId);
      if (!col) return;
      const colName = col.name;
      const modCount = col.modules.length;
      const ok = await showConfirmModal('确定删除分类「' + colName + '」吗？' + (modCount > 0 ? '该分类下 ' + modCount + ' 个模块将一并删除。' : ''));
      if (!ok) return;
      state.matrix.columns = state.matrix.columns.filter(c => c.id !== colId);
      saveMatrixData();
      renderMatrix();
      return;
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if ((e.metaKey || e.ctrlKey) && e.key === 'n') { e.preventDefault(); openModal(null); }
  });
}

/* ===== Default Tasks (fallback) ===== */
const DEFAULT_TASKS = [
  { id: 't1', title: '完成 Q3 季度复盘报告', description: '梳理本季度成果与下季度规划', category: '工作', priority: 'high', progress: 75, subtasksTotal: 4, subtasksDone: 3, dueDate: '2026-07-21', completed: false, completedAt: null, createdAt: '2026-07-15' },
  { id: 't2', title: '准备产品发布会演示稿', description: '8 月 6 日发布会主视觉与讲稿', category: '工作', priority: 'high', progress: 60, subtasksTotal: 5, subtasksDone: 2, dueDate: '2026-07-22', completed: false, completedAt: null, createdAt: '2026-07-10' },
  { id: 't3', title: '阅读《深度工作》第 3 章', description: '记录要点并写读书笔记', category: '学习', priority: 'medium', progress: 40, subtasksTotal: 2, subtasksDone: 1, dueDate: '2026-07-25', completed: false, completedAt: null, createdAt: '2026-07-18' },
  { id: 't4', title: '学习 TypeScript 进阶课程', description: '泛型、类型体操与工程实践', category: '学习', priority: 'medium', progress: 30, subtasksTotal: 10, subtasksDone: 4, dueDate: null, completed: false, completedAt: null, createdAt: '2026-07-01' },
  { id: 't5', title: '健身房力量训练', description: '下肢日：深蹲 + 硬拉 4 组', category: '健康', priority: 'medium', progress: 0, subtasksTotal: 1, subtasksDone: 0, dueDate: '2026-07-21', completed: false, completedAt: null, createdAt: '2026-07-21' },
  { id: 't6', title: '整理本周家庭开支', description: '记账并复盘本周预算', category: '生活', priority: 'low', progress: 100, subtasksTotal: 5, subtasksDone: 5, dueDate: '2026-07-20', completed: true, completedAt: '2026-07-20', createdAt: '2026-07-19' },
];

/* ===== Init ===== */
async function init() {
  bindEvents();
  try {
    state.tasks = await loadData();
    console.log('[TaskFlow] loaded', state.tasks.length, 'tasks, isTauri=' + tfIsTauri);
  } catch (e) {
    console.error('[TaskFlow] loadData error:', e);
    state.tasks = DEFAULT_TASKS.slice();
  }
  try {
    state.matrix = await loadMatrixData();
    console.log('[TaskFlow] matrix loaded:', state.matrix.columns.length, 'columns');
  } catch (e) {
    console.error('[TaskFlow] matrix load error:', e);
    state.matrix = JSON.parse(JSON.stringify(DEFAULT_MATRIX));
  }
  // 初始化当前月份
  if (!state.matrixMonth) {
    const d = new Date();
    state.matrixMonth = { year: d.getFullYear(), month: d.getMonth() + 1 };
  }
  renderAll();
  const subEl = document.getElementById('storage-sub');
  if (subEl) subEl.textContent = tfIsTauri ? '本地文件已同步' : '本地同步失败，已用浏览器存储';
}
init();
