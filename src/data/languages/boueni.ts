import type { Language } from '../../types';

export const boueni: Language = {
  id: 'boueni',
  name: 'Bouéni',
  nativeName: 'Bõwel',
  family: 'Proto-Western (Azhoran) — most distant surviving relative of Mittoli',
  region: 'Southern Azhora — the Bouén peninsula and the Azner island chain',
  type: 'conlang',
  script: {
    name: 'Cael Bouéni (adapted Cael Script)',
    direction: 'ltr',
    type: 'alphabet',
    description: 'Bouéni has no indigenous script — its oldest navigational tradition was oral and marked with practical notational symbols on hull-wood and tide-poles. When written Bouéni became necessary for trade with Mittoli speakers, the community adapted the Cael alphabet, adding four characters for sounds Mittoli lacks: the five nasal vowels (treated as modified vowel characters) and an additional character for initial /w/. This adapted system is called Cael Bouéni by speakers. Mittoli scholars find this acknowledgment insufficient. The Bouéni find it an accurate description of a tool they have repurposed.',
  },
  consonants: [
    { ipaId: 'p', romanization: 'p', examples: [{ word: 'pel', gloss: 'sea-route; path through water', highlight: 'p' }] },
    { ipaId: 'b', romanization: 'b', examples: [{ word: 'baell', gloss: 'deep bay; sheltered water', highlight: 'b' }] },
    { ipaId: 't', romanization: 't', examples: [{ word: 'tel', gloss: 'to ford; the crossing place', highlight: 't' }] },
    { ipaId: 'd', romanization: 'd', examples: [{ word: 'dĩ', gloss: 'two (cf. Mittoli dae)', highlight: 'd' }] },
    { ipaId: 'k', romanization: 'k', examples: [{ word: 'kuv', gloss: 'four (cf. Mittoli cov)', highlight: 'k' }] },
    { ipaId: 'g', romanization: 'g', examples: [{ word: 'gael', gloss: 'water-crossing; ford', highlight: 'g' }] },
    { ipaId: 'f', romanization: 'f', examples: [{ word: 'feln', gloss: 'fog; navigational fog specifically', highlight: 'f' }] },
    { ipaId: 'v', romanization: 'v', examples: [{ word: 'vel', gloss: 'current; deep pull', highlight: 'v' }] },
    { ipaId: 's', romanization: 's', examples: [{ word: 'srĩ', gloss: 'three (cf. Mittoli trin — tr- cluster simplified)', highlight: 's' }] },
    { ipaId: 'z', romanization: 'z', examples: [{ word: 'zoth', gloss: 'trade; exchange (proper noun root)', highlight: 'z' }] },
    { ipaId: 'sh', romanization: 'sh', examples: [{ word: 'shael', gloss: 'salt water (marine context)', highlight: 'sh' }] },
    { ipaId: 'zh', romanization: 'zh', examples: [{ word: 'zhael', gloss: 'tide; tidal movement', highlight: 'zh' }] },
    { ipaId: 'm', romanization: 'm', examples: [{ word: 'mael', gloss: 'fog-path; route navigated by feel', highlight: 'm' }] },
    { ipaId: 'n', romanization: 'n', examples: [{ word: 'nael', gloss: 'night-passage', highlight: 'n' }] },
    { ipaId: 'palatal_nasal', romanization: 'ñ', examples: [{ word: 'ñaell', gloss: 'the interior; land away from sea', highlight: 'ñ' }, { word: '(same as Mittoli ny [ɲ] — different romanization convention)', gloss: '' }] },
    { ipaId: 'r', romanization: 'r', examples: [{ word: 'rael', gloss: 'tidal rip; fast current', highlight: 'r' }] },
    { ipaId: 'l', romanization: 'l', examples: [{ word: 'lorn', gloss: 'harbor; sheltered bay', highlight: 'l' }] },
    { ipaId: 'j', romanization: 'y', examples: [{ word: 'yaell', gloss: 'wind-direction', highlight: 'y' }] },
    { ipaId: 'w', romanization: 'w', examples: [{ word: 'wael', gloss: 'deep water; the open sea', highlight: 'w' }, { word: '(note: w word-initial is more prominent in Bouéni than Mittoli permits)', gloss: '' }] },
  ],
  vowels: [
    // Oral vowels — identical quality to Mittoli
    { ipaId: 'open_front_unrounded', romanization: 'a', examples: [{ word: 'auwel', gloss: 'sea-speech; the Bouéni self-name for the language', highlight: 'a' }] },
    { ipaId: 'close_mid_front_unrounded', romanization: 'e', examples: [{ word: 'vel', gloss: 'cold; the cold', highlight: 'e' }] },
    { ipaId: 'close_front_unrounded', romanization: 'i', examples: [{ word: 'ishi', gloss: 'stone anchor; mooring', highlight: 'i' }] },
    { ipaId: 'close_mid_back_rounded', romanization: 'o', examples: [{ word: 'oul', gloss: 'the outer current taking hold of a hull', highlight: 'o' }] },
    { ipaId: 'close_back_rounded', romanization: 'u', examples: [{ word: 'unu', gloss: 'depth; fathomless', highlight: 'u' }] },
    // Nasal vowels — THE defining Bouéni phonological feature
    { ipaId: 'nasal_open_central', romanization: 'ã', examples: [{ word: 'wã', gloss: 'the open sea (nasal context)', highlight: 'ã' }] },
    { ipaId: 'nasal_close_mid_front', romanization: 'ẽ', examples: [{ word: 'ẽtael', gloss: 'verb prospective aspect marker', highlight: 'ẽ' }] },
    { ipaId: 'nasal_close_front', romanization: 'ĩ', examples: [{ word: 'dĩ', gloss: 'two (cf. Mittoli dae — diphthong → nasal vowel)', highlight: 'ĩ' }, { word: 'srĩ', gloss: 'three (cf. Mittoli trin)', highlight: 'ĩ' }] },
    { ipaId: 'nasal_close_mid_back', romanization: 'õ', examples: [{ word: 'vẽl', gloss: 'the current, the deep pull (vs. vel = cold)', highlight: 'õ' }] },
    { ipaId: 'nasal_close_back', romanization: 'ũ', examples: [{ word: 'ũleth', gloss: 'substrate-derived; appears in sea-depth vocabulary', highlight: 'ũ' }] },
  ],
  specialFeatures: [
    {
      title: 'Nasal vowels — the defining feature',
      description: 'Each of Bouéni\'s five oral vowels has a nasal counterpart produced with the soft palate lowered so air passes through the nose simultaneously. Written with a tilde (ã, ẽ, ĩ, õ, ũ). These are fully phonemic: vel (cold) vs. vẽl (the current; the deep pull) is a minimal pair. The nasal vowels developed from Proto-Western vowel + nasal consonant sequences; the final consonant was absorbed. The process is complete and irreversible — there is no rule producing them synchronically.',
    },
    {
      title: 'The Proto-Western connection',
      description: 'Bouéni is the most distant living relative of Mittoli. Systematic correspondences are clear once known but not intuitive: Proto-Western *th [θ] → Bouéni /s/ (so everywhere Mittoli says "th," Bouéni says "s"); Proto-Western *ae diphthong → Bouéni nasal vowel ĩ (so Mittoli dae = two, Bouéni dĩ); word-final *-os → Bouéni *-o (s dropped); penultimate stress → initial stress (Bouéni words launch themselves forward). The number words show the correspondence most cleanly.',
    },
    {
      title: 'Initial stress — words that launch',
      description: 'Bouéni stress falls on the first syllable of every word, without exception. Mittoli has penultimate stress. A Bouéni speaker\'s words sound like they are launching themselves; a Mittoli speaker\'s words sound, to Bouéni ears, like they are thinking about whether to commit. Initial stress also caused unstressed final syllables to erode over time, which is why Bouéni has fewer case endings than the ancestor language.',
    },
    {
      title: 'The substrate mystery',
      description: 'Bouéni contains vocabulary and structural features that cannot be traced to Proto-Western — they come from something else, called the "substrate." The substrate favors open syllables, vowel sequences (VCV forms), and words beginning with /w/ followed by vowels. Its phonological profile differs from the Forest Mittoli substrate. Bouéni linguists say their ancestors came from the sea. Outside linguists have not been able to disprove this.',
    },
  ],
  worldContext: 'Bouéni is the language of a people whose oral tradition centers on navigation, deep water, and the knowledge that the sea itself holds. The navigational marks scratched on hull-wood and cave walls are not a script — they are a record of water, not speech. When the language needed to be written for trade purposes, it borrowed a tool (the Cael alphabet) and made it serve different ends. Whether this flexibility reflects pragmatism or a cultural relationship with knowledge that differs from Mittoli scholarly traditions is a question both communities have formed opinions about.',
};
