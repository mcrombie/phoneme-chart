import type { Language, LanguagePhoneme, SpecialFeature } from '../types';
import { PHONEME_MAP } from '../data/phonemes';

function playAudio(file: string): void {
  new Audio(`audio/${file}`).play().catch(() => {});
}

// ── Individual phoneme card ───────────────────────────────────────────────────

function phonemeCard(lp: LanguagePhoneme): HTMLElement {
  const phoneme = PHONEME_MAP.get(lp.ipaId);
  const card = document.createElement('div');
  card.className = 'phon-card';

  // IPA symbol
  const sym = document.createElement('div');
  sym.className = 'phon-ipa';
  sym.textContent = phoneme ? phoneme.symbol : lp.ipaId;
  card.appendChild(sym);

  // Romanization
  const rom = document.createElement('div');
  rom.className = 'phon-rom';
  rom.textContent = lp.romanization;
  card.appendChild(rom);

  // Native script
  if (lp.nativeScript) {
    const ns = document.createElement('div');
    ns.className = 'phon-native';
    ns.textContent = lp.nativeScript;
    card.appendChild(ns);
  }

  // Example
  if (lp.examples && lp.examples.length > 0) {
    const ex = lp.examples[0];
    if (ex.word) {
      const exDiv = document.createElement('div');
      exDiv.className = 'phon-example';
      exDiv.textContent = ex.word;
      if (ex.gloss) {
        const gloss = document.createElement('span');
        gloss.className = 'phon-gloss';
        gloss.textContent = `"${ex.gloss}"`;
        exDiv.appendChild(gloss);
      }
      card.appendChild(exDiv);
    }
  }

  // Click to play
  if (phoneme?.audioFile) {
    card.classList.add('has-audio');
    card.title = `▶ ${phoneme.description}`;
    card.addEventListener('click', () => playAudio(phoneme.audioFile!));
  } else if (phoneme) {
    card.title = phoneme.description;
  }

  return card;
}

// ── Script information panel ──────────────────────────────────────────────────

function scriptPanel(lang: Language): HTMLElement {
  const sc = lang.script!;
  const section = document.createElement('section');
  section.className = 'phon-section script-section';

  const h = document.createElement('h3');
  h.textContent = sc.name;
  section.appendChild(h);

  const meta = document.createElement('p');
  meta.className = 'script-meta';
  const typeLabel: Record<string, string> = {
    alphabet: 'Alphabet', abjad: 'Abjad (consonants only)',
    abugida: 'Abugida (consonant + inherent vowel)',
    syllabary: 'Syllabary', logographic: 'Logographic', other: 'Other notation',
  };
  const dirLabel: Record<string, string> = { ltr: 'Left-to-right', rtl: 'Right-to-left', other: 'Non-linear' };
  meta.innerHTML = `<strong>${typeLabel[sc.type] || sc.type}</strong> &nbsp;·&nbsp; ${dirLabel[sc.direction] || sc.direction}`;
  section.appendChild(meta);

  const desc = document.createElement('p');
  desc.className = 'script-desc';
  desc.textContent = sc.description;
  section.appendChild(desc);

  if (sc.characterTable && sc.characterTable.length > 0) {
    const details = document.createElement('details');
    details.className = 'char-table-details';
    const summary = document.createElement('summary');
    summary.textContent = `Character inventory (${sc.characterTable.length} entries)`;
    details.appendChild(summary);

    const table = document.createElement('table');
    table.className = 'char-table';
    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Character</th><th>Represents</th><th>Notes</th></tr>';
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    for (const entry of sc.characterTable) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="char-glyph">${entry.character}</td><td>${entry.represents}</td><td>${entry.notes || ''}</td>`;
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    details.appendChild(table);
    section.appendChild(details);
  }

  return section;
}

// ── Special features ──────────────────────────────────────────────────────────

function specialFeaturesSection(features: SpecialFeature[]): HTMLElement {
  const section = document.createElement('section');
  section.className = 'phon-section features-section';
  const h = document.createElement('h3');
  h.textContent = 'Phonological Features';
  section.appendChild(h);
  for (const feat of features) {
    const item = document.createElement('div');
    item.className = 'feature-item';
    const title = document.createElement('strong');
    title.textContent = feat.title;
    item.appendChild(title);
    const desc = document.createElement('p');
    desc.textContent = feat.description;
    item.appendChild(desc);
    section.appendChild(item);
  }
  return section;
}

// ── Main renderer ─────────────────────────────────────────────────────────────

export function renderPhonologyView(lang: Language): HTMLElement {
  const view = document.createElement('div');
  view.className = 'phonology-view';

  // Header
  const header = document.createElement('div');
  header.className = 'phon-header';
  const nameRow = document.createElement('div');
  nameRow.className = 'phon-name-row';
  const name = document.createElement('h2');
  name.textContent = lang.name;
  nameRow.appendChild(name);
  if (lang.nativeName) {
    const native = document.createElement('span');
    native.className = 'phon-native-name';
    native.textContent = lang.nativeName;
    nameRow.appendChild(native);
  }
  if (lang.type === 'conlang') {
    const badge = document.createElement('span');
    badge.className = 'conlang-badge';
    badge.textContent = 'Conlang';
    nameRow.appendChild(badge);
  }
  header.appendChild(nameRow);
  const family = document.createElement('p');
  family.className = 'phon-family';
  family.textContent = `${lang.family}${lang.region ? ` · ${lang.region}` : ''}`;
  header.appendChild(family);
  view.appendChild(header);

  // Script section
  if (lang.script) {
    view.appendChild(scriptPanel(lang));
  }

  // Consonants
  if (lang.consonants.length > 0) {
    const section = document.createElement('section');
    section.className = 'phon-section';
    const h = document.createElement('h3');
    h.textContent = `Consonants (${lang.consonants.length})`;
    section.appendChild(h);
    const grid = document.createElement('div');
    grid.className = 'phon-grid';
    for (const lp of lang.consonants) {
      grid.appendChild(phonemeCard(lp));
    }
    section.appendChild(grid);
    view.appendChild(section);
  }

  // Vowels
  if (lang.vowels.length > 0) {
    const section = document.createElement('section');
    section.className = 'phon-section';
    const h = document.createElement('h3');
    const nasalCount = lang.vowels.filter(v => {
      const p = PHONEME_MAP.get(v.ipaId);
      return p?.isNasal;
    }).length;
    h.textContent = `Vowels (${lang.vowels.length}${nasalCount > 0 ? `, incl. ${nasalCount} nasal` : ''})`;
    section.appendChild(h);
    const grid = document.createElement('div');
    grid.className = 'phon-grid';
    for (const lp of lang.vowels) {
      grid.appendChild(phonemeCard(lp));
    }
    section.appendChild(grid);
    view.appendChild(section);
  }

  // Special features
  if (lang.specialFeatures && lang.specialFeatures.length > 0) {
    view.appendChild(specialFeaturesSection(lang.specialFeatures));
  }

  // Historical context (real languages only)
  if (lang.historicalContext) {
    const section = document.createElement('section');
    section.className = 'phon-section context-section';
    const h = document.createElement('h3');
    h.textContent = 'Historical Context';
    section.appendChild(h);
    const p = document.createElement('p');
    p.textContent = lang.historicalContext;
    section.appendChild(p);
    view.appendChild(section);
  }

  // World context (conlangs only)
  if (lang.worldContext) {
    const section = document.createElement('section');
    section.className = 'phon-section context-section';
    const h = document.createElement('h3');
    h.textContent = 'World Context';
    section.appendChild(h);
    const p = document.createElement('p');
    p.textContent = lang.worldContext;
    section.appendChild(p);
    view.appendChild(section);
  }

  return view;
}
