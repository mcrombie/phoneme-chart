import { LANGUAGE_GROUPS, LANGUAGE_MAP } from '../data/index';
import { getState, setMode, setCategory, setSelectedLanguage } from './state';
import type { AppState } from '../types';

// ── Mode toggle ───────────────────────────────────────────────────────────────

function buildModeToggle(): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'mode-toggle';

  for (const [id, label] of [['atlas', 'IPA Atlas'], ['phonology', 'Language View']] as const) {
    const btn = document.createElement('button');
    btn.className = 'mode-btn';
    btn.dataset.mode = id;
    btn.textContent = label;
    btn.addEventListener('click', () => setMode(id));
    wrap.appendChild(btn);
  }
  return wrap;
}

// ── Category buttons (atlas only) ────────────────────────────────────────────

function buildCategoryButtons(): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'category-buttons';
  wrap.id = 'category-buttons';
  for (const [id, label] of [['consonants', 'Consonants'], ['vowels', 'Vowels']] as const) {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.dataset.cat = id;
    btn.textContent = label;
    btn.addEventListener('click', () => setCategory(id));
    wrap.appendChild(btn);
  }
  return wrap;
}

// ── Language list ─────────────────────────────────────────────────────────────

function buildLanguageList(): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'lang-list';

  // IPA entry (special)
  const ipaBtn = document.createElement('button');
  ipaBtn.className = 'lang-btn lang-ipa';
  ipaBtn.dataset.langId = 'ipa';
  ipaBtn.textContent = 'IPA (all sounds)';
  ipaBtn.addEventListener('click', () => setSelectedLanguage('ipa'));
  wrap.appendChild(ipaBtn);

  for (const group of LANGUAGE_GROUPS) {
    const groupLabel = document.createElement('div');
    groupLabel.className = 'lang-group-label';
    groupLabel.textContent = group.label;
    wrap.appendChild(groupLabel);

    for (const id of group.ids) {
      const lang = LANGUAGE_MAP.get(id);
      if (!lang) continue;
      const btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.dataset.langId = id;
      if (lang.type === 'conlang') btn.classList.add('is-conlang');

      const nameSpan = document.createElement('span');
      nameSpan.className = 'lang-btn-name';
      nameSpan.textContent = lang.name;
      btn.appendChild(nameSpan);

      if (lang.nativeName) {
        const nativeSpan = document.createElement('span');
        nativeSpan.className = 'lang-btn-native';
        nativeSpan.textContent = lang.nativeName;
        btn.appendChild(nativeSpan);
      }

      btn.addEventListener('click', () => setSelectedLanguage(id));
      wrap.appendChild(btn);
    }
  }

  return wrap;
}

// ── Sidebar assembly ──────────────────────────────────────────────────────────

let sidebarEl: HTMLElement | null = null;

export function buildSidebar(): HTMLElement {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';

  const title = document.createElement('h1');
  title.textContent = 'Phoneme Chart';
  sidebar.appendChild(title);

  sidebar.appendChild(buildModeToggle());
  sidebar.appendChild(buildCategoryButtons());

  const langLabel = document.createElement('div');
  langLabel.className = 'section-label';
  langLabel.textContent = 'Select Language';
  sidebar.appendChild(langLabel);

  sidebar.appendChild(buildLanguageList());

  sidebarEl = sidebar;
  return sidebar;
}

export function updateSidebar(state: AppState): void {
  if (!sidebarEl) return;

  // Mode buttons
  sidebarEl.querySelectorAll('.mode-btn').forEach(btn => {
    (btn as HTMLElement).classList.toggle('active', (btn as HTMLElement).dataset.mode === state.mode);
  });

  // Category buttons — visible only in atlas mode
  const catWrap = sidebarEl.querySelector('#category-buttons') as HTMLElement | null;
  if (catWrap) {
    catWrap.style.display = state.mode === 'atlas' ? '' : 'none';
    catWrap.querySelectorAll('.cat-btn').forEach(btn => {
      (btn as HTMLElement).classList.toggle('active', (btn as HTMLElement).dataset.cat === state.category);
    });
  }

  // Language buttons
  sidebarEl.querySelectorAll('.lang-btn').forEach(btn => {
    (btn as HTMLElement).classList.toggle('active', (btn as HTMLElement).dataset.langId === state.selectedLanguageId);
  });
}
