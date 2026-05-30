import { getState, subscribe, setActivePhoneme } from './ui/state';
import { buildSidebar, updateSidebar } from './ui/sidebar';
import { renderConsonantChart, renderVowelChart, renderPhonemeDescription, setPhonemeClickHandler } from './render/atlas';
import { renderPhonologyView } from './render/phonology';
import { LANGUAGE_MAP } from './data/index';
import type { AppState } from './types';

// ── DOM refs ──────────────────────────────────────────────────────────────────

let chartArea: HTMLElement;
let descArea: HTMLElement;

// ── Render ────────────────────────────────────────────────────────────────────

function render(state: AppState): void {
  updateSidebar(state);

  const lang = state.selectedLanguageId !== 'ipa'
    ? LANGUAGE_MAP.get(state.selectedLanguageId) ?? null
    : null;

  if (state.mode === 'phonology') {
    // Language Phonology view
    descArea.style.display = 'none';
    chartArea.innerHTML = '';
    if (!lang) {
      chartArea.innerHTML = '<div class="hint-block"><p>Select a language from the sidebar to view its phoneme inventory.</p></div>';
    } else {
      chartArea.appendChild(renderPhonologyView(lang));
    }
  } else {
    // IPA Atlas view
    descArea.style.display = '';
    chartArea.innerHTML = '';
    const chart = state.category === 'consonants'
      ? renderConsonantChart(lang)
      : renderVowelChart(lang);
    chartArea.appendChild(chart);

    // Phoneme description
    descArea.innerHTML = '';
    descArea.appendChild(renderPhonemeDescription(state.activePhonemeId ?? '', lang));
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────

function init(): void {
  const app = document.getElementById('app')!;

  // Build layout
  const sidebar = buildSidebar();
  app.appendChild(sidebar);

  const main = document.createElement('main');
  main.className = 'main-area';

  chartArea = document.createElement('div');
  chartArea.className = 'chart-area';
  main.appendChild(chartArea);

  descArea = document.createElement('div');
  descArea.className = 'desc-area';
  main.appendChild(descArea);

  app.appendChild(main);

  // Wire up phoneme click
  setPhonemeClickHandler((id: string) => {
    setActivePhoneme(id);
  });

  // Subscribe to state changes
  subscribe(render);

  // Initial render
  render(getState());
}

document.addEventListener('DOMContentLoaded', init);
