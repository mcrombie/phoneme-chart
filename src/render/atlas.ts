import type { Phoneme, Language } from '../types';
import {
  ALL_PHONEMES, PHONEME_MAP,
  CONSONANT_MANNERS, CONSONANT_PLACES,
  VOWEL_HEIGHTS, VOWEL_BACKNESSES,
  MANNER_LABELS, PLACE_LABELS, HEIGHT_LABELS, BACKNESS_LABELS,
} from '../data/phonemes';

// ── Atlas state ───────────────────────────────────────────────────────────────

let onPhonemeClick: (id: string) => void = () => {};

export function setPhonemeClickHandler(fn: (id: string) => void): void {
  onPhonemeClick = fn;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function audioPath(file: string): string {
  return `audio/${file}`;
}

function playAudio(audioFile: string): void {
  const audio = new Audio(audioPath(audioFile));
  audio.play().catch(() => { /* user hasn't interacted yet — silent fail */ });
}

/** Cells a language actually uses — set of ipaIds */
function languageIpaSet(lang: Language | null): Set<string> | null {
  if (!lang) return null;
  const ids = new Set<string>();
  for (const p of lang.consonants) ids.add(p.ipaId);
  for (const p of lang.vowels) ids.add(p.ipaId);
  return ids;
}

// ── Phoneme cell ──────────────────────────────────────────────────────────────

function phonemeCell(phoneme: Phoneme, langSet: Set<string> | null, lang: Language | null): HTMLElement {
  const div = document.createElement('div');
  div.className = 'phoneme-token';
  div.dataset.id = phoneme.id;

  // Highlight state for atlas language mode
  if (langSet) {
    if (langSet.has(phoneme.id)) {
      div.classList.add('lang-active');
    } else {
      div.classList.add('lang-dim');
    }
  }

  // Symbol
  const sym = document.createElement('span');
  sym.className = 'ipa-symbol';
  sym.textContent = phoneme.symbol;
  div.appendChild(sym);

  // Language romanization overlay
  if (lang && langSet && langSet.has(phoneme.id)) {
    const allPhonemes = [...lang.consonants, ...lang.vowels];
    const lp = allPhonemes.find(p => p.ipaId === phoneme.id);
    if (lp) {
      const rom = document.createElement('span');
      rom.className = 'rom-label';
      rom.textContent = lp.romanization;
      div.appendChild(rom);
    }
  }

  // Click
  if (phoneme.isAffricate) div.classList.add('is-affricate');

  div.addEventListener('click', () => {
    if (phoneme.audioFile) playAudio(phoneme.audioFile);
    onPhonemeClick(phoneme.id);
  });

  return div;
}

// ── Consonant chart ───────────────────────────────────────────────────────────

export function renderConsonantChart(lang: Language | null): HTMLElement {
  const langSet = languageIpaSet(lang);
  const wrap = document.createElement('div');
  wrap.className = 'chart-scroll';

  const table = document.createElement('table');
  table.className = 'phoneme-table consonant-table';

  // Header row
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('th'));
  for (const place of CONSONANT_PLACES) {
    const th = document.createElement('th');
    th.textContent = PLACE_LABELS[place];
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Body rows
  const tbody = document.createElement('tbody');
  for (const manner of CONSONANT_MANNERS) {
    const row = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.textContent = MANNER_LABELS[manner];
    row.appendChild(rowHeader);

    for (const place of CONSONANT_PLACES) {
      const td = document.createElement('td');
      const phonemes = ALL_PHONEMES.filter(
        p => p.category === 'consonant' && p.manner === manner && p.place === place
      );
      // Sort: voiceless first, voiced second; affricates last within each
      phonemes.sort((a, b) => {
        if (a.isAffricate !== b.isAffricate) return a.isAffricate ? 1 : -1;
        if (a.voiced !== b.voiced) return a.voiced ? 1 : -1;
        return 0;
      });
      for (const p of phonemes) {
        td.appendChild(phonemeCell(p, langSet, lang));
      }
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

// ── Vowel chart ───────────────────────────────────────────────────────────────

export function renderVowelChart(lang: Language | null): HTMLElement {
  const langSet = languageIpaSet(lang);
  const wrap = document.createElement('div');
  wrap.className = 'chart-scroll';

  const table = document.createElement('table');
  table.className = 'phoneme-table vowel-table';

  // Header row
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('th'));
  for (const back of VOWEL_BACKNESSES) {
    const th = document.createElement('th');
    th.textContent = BACKNESS_LABELS[back];
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Body rows — only non-nasal vowels in atlas view
  const tbody = document.createElement('tbody');
  for (const height of VOWEL_HEIGHTS) {
    const row = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.textContent = HEIGHT_LABELS[height];
    row.appendChild(rowHeader);

    for (const back of VOWEL_BACKNESSES) {
      const td = document.createElement('td');
      const phonemes = ALL_PHONEMES.filter(
        p => p.category === 'vowel' && p.height === height && p.backness === back && !p.isNasal
      );
      // Sort: unrounded first, rounded second
      phonemes.sort((a, b) => (a.rounded ? 1 : 0) - (b.rounded ? 1 : 0));
      for (const p of phonemes) {
        td.appendChild(phonemeCell(p, langSet, lang));
      }
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

// ── Phoneme description panel ─────────────────────────────────────────────────

export function renderPhonemeDescription(phonemeId: string, lang: Language | null): HTMLElement {
  const phoneme = PHONEME_MAP.get(phonemeId);
  const panel = document.createElement('div');
  panel.className = 'description-panel';

  if (!phoneme) {
    panel.innerHTML = '<p class="hint">Select a phoneme to see details</p>';
    return panel;
  }

  // Big IPA symbol
  const symBig = document.createElement('div');
  symBig.className = 'desc-symbol';
  symBig.textContent = phoneme.symbol;
  panel.appendChild(symBig);

  // Description
  const desc = document.createElement('div');
  desc.className = 'desc-name';
  desc.textContent = phoneme.description;
  panel.appendChild(desc);

  // Audio button
  if (phoneme.audioFile) {
    const audioBtn = document.createElement('button');
    audioBtn.className = 'audio-btn';
    audioBtn.innerHTML = '&#9654; Listen';
    audioBtn.addEventListener('click', () => playAudio(phoneme.audioFile!));
    panel.appendChild(audioBtn);
  }

  // Language-specific info
  if (lang) {
    const allLangPhonemes = [...lang.consonants, ...lang.vowels];
    const lp = allLangPhonemes.find(p => p.ipaId === phonemeId);
    if (lp) {
      const langSection = document.createElement('div');
      langSection.className = 'desc-lang-section';

      const romLine = document.createElement('p');
      romLine.innerHTML = `<span class="desc-label">In ${lang.name}:</span> <strong>${lp.romanization}</strong>`;
      langSection.appendChild(romLine);

      if (lp.nativeScript) {
        const scriptLine = document.createElement('p');
        scriptLine.innerHTML = `<span class="desc-label">Written:</span> <span class="native-script">${lp.nativeScript}</span>`;
        langSection.appendChild(scriptLine);
      }

      if (lp.examples && lp.examples.length > 0) {
        const exDiv = document.createElement('div');
        exDiv.className = 'desc-examples';
        for (const ex of lp.examples) {
          const item = document.createElement('div');
          item.className = 'example-item';
          let html = `<span class="example-word">${ex.word}</span>`;
          if (ex.gloss) html += ` <span class="example-gloss">"${ex.gloss}"</span>`;
          item.innerHTML = html;
          exDiv.appendChild(item);
        }
        langSection.appendChild(exDiv);
      }

      panel.appendChild(langSection);
    } else {
      const absent = document.createElement('p');
      absent.className = 'desc-absent';
      absent.textContent = `Not used in ${lang.name}`;
      panel.appendChild(absent);
    }
  }

  // Attribution
  const attr = document.createElement('p');
  attr.className = 'audio-attr';
  if (phoneme.audioFile) {
    attr.innerHTML = 'Audio: <a href="https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2" target="_blank">Free Software Foundation</a>';
  }
  panel.appendChild(attr);

  return panel;
}
