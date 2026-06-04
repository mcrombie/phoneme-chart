import type { Language } from '../../types';

export const japanese: Language = {
  id: 'japanese',
  name: 'Japanese',
  nativeName: '日本語',
  family: 'Japonic (isolate)',
  region: 'Japan',
  type: 'real',
  script: {
    name: 'Three-script system',
    direction: 'ltr',
    type: 'syllabary',
    description: 'Japanese uses three scripts simultaneously. Hiragana (ひらがな) is a syllabary of 46 characters for native Japanese words and grammar particles. Katakana (カタカナ) is a parallel syllabary used for foreign loanwords, onomatopoeia, and emphasis. Kanji (漢字) are logographic characters borrowed from Chinese, each representing a morpheme.',
  },
  consonants: [
    { ipaId: 'p', romanization: 'p', nativeScript: 'ぱ', examples: [{ word: 'pan', gloss: 'bread', highlight: 'p' }] },
    { ipaId: 'b', romanization: 'b', nativeScript: 'ば', examples: [{ word: 'bara', gloss: 'rose', highlight: 'b' }] },
    { ipaId: 't', romanization: 't', nativeScript: 'た', examples: [{ word: 'tori', gloss: 'bird', highlight: 't' }] },
    { ipaId: 'd', romanization: 'd', nativeScript: 'だ', examples: [{ word: 'doko', gloss: 'where', highlight: 'd' }] },
    { ipaId: 'ts_vl', romanization: 'ts', nativeScript: 'つ', examples: [{ word: 'tsuki', gloss: 'moon', highlight: 'ts' }] },
    { ipaId: 'tsh_vl', romanization: 'ch', nativeScript: 'ち', examples: [{ word: 'chichi', gloss: 'father', highlight: 'ch' }] },
    { ipaId: 'tsh_vd', romanization: 'j', nativeScript: 'じ', examples: [{ word: 'jikan', gloss: 'time', highlight: 'j' }] },
    { ipaId: 'k', romanization: 'k', nativeScript: 'か', examples: [{ word: 'kaze', gloss: 'wind', highlight: 'k' }] },
    { ipaId: 'g', romanization: 'g', nativeScript: 'が', examples: [{ word: 'gomi', gloss: 'trash', highlight: 'g' }] },
    { ipaId: 'f', romanization: 'f', nativeScript: 'ふ', examples: [{ word: 'fune', gloss: 'boat', highlight: 'f' }] },
    { ipaId: 's', romanization: 's', nativeScript: 'さ', examples: [{ word: 'sakura', gloss: 'cherry blossom', highlight: 's' }] },
    { ipaId: 'sh', romanization: 'sh', nativeScript: 'し', examples: [{ word: 'shima', gloss: 'island', highlight: 'sh' }] },
    { ipaId: 'z', romanization: 'z', nativeScript: 'ざ', examples: [{ word: 'zakura', gloss: '(rare)', highlight: 'z' }] },
    { ipaId: 'h', romanization: 'h', nativeScript: 'は', examples: [{ word: 'hana', gloss: 'flower', highlight: 'h' }] },
    { ipaId: 'm', romanization: 'm', nativeScript: 'ま', examples: [{ word: 'mizu', gloss: 'water', highlight: 'm' }] },
    { ipaId: 'n', romanization: 'n', nativeScript: 'な / ん', examples: [{ word: 'nami', gloss: 'wave', highlight: 'n' }] },
    { ipaId: 'alveolar_tap', romanization: 'r', nativeScript: 'ら', examples: [{ word: 'ringo', gloss: 'apple', highlight: 'r' }] },
    { ipaId: 'j', romanization: 'y', nativeScript: 'や', examples: [{ word: 'yama', gloss: 'mountain', highlight: 'y' }] },
    { ipaId: 'w', romanization: 'w', nativeScript: 'わ', examples: [{ word: 'watashi', gloss: 'I', highlight: 'w' }] },
  ],
  vowels: [
    { ipaId: 'open_front_unrounded', romanization: 'a', nativeScript: 'あ', examples: [{ word: 'ame', gloss: 'rain', highlight: 'a' }] },
    { ipaId: 'close_mid_front_unrounded', romanization: 'e', nativeScript: 'え', examples: [{ word: 'eki', gloss: 'station', highlight: 'e' }] },
    { ipaId: 'close_front_unrounded', romanization: 'i', nativeScript: 'い', examples: [{ word: 'ishi', gloss: 'stone', highlight: 'i' }] },
    { ipaId: 'close_mid_back_rounded', romanization: 'o', nativeScript: 'お', examples: [{ word: 'umi', gloss: 'sea — note: "o" in different context', highlight: 'o' }] },
    { ipaId: 'close_back_rounded', romanization: 'u', nativeScript: 'う', examples: [{ word: 'umi', gloss: 'sea', highlight: 'u' }] },
  ],
  specialFeatures: [
    {
      title: 'Moraic rhythm',
      description: 'Japanese organizes time in moras — roughly syllable-sized units of equal duration. Long vowels (e.g., おかあさん okāsan — mother) take two moras. The syllable-final nasal ん is its own mora. This means pitch, rhythm, and word boundaries all operate on mora counts, not syllable counts.',
    },
    {
      title: 'Pitch accent',
      description: 'Standard Japanese (Tokyo dialect) uses a pitch accent system. Words have a "nucleus" after which pitch drops sharply. The position of this nucleus is lexically distinctive: hashi can mean bridge (HÀshì), chopsticks (HÁshì), or edge (hashÍ) depending on where pitch falls.',
    },
    {
      title: 'Japanese "r"',
      description: 'The Japanese r (ら ri る re ろ ro ら ra れ re) is neither a trill nor an approximant — it is an alveolar tap (ɾ), similar to the "r" in Spanish "pero" or the American English "d/t" in "butter." This is why Japanese speakers substitute it for English /l/ and /r/ both — their language has one sound that partially matches each.',
    },
    {
      title: 'Minimal consonant inventory',
      description: 'Japanese has fewer consonant phonemes than almost any other major language — no voiced fricatives except /z/, no /θ/, no /v/ natively, no /l/. This simplicity is counterbalanced by a complex morphology and the three-script writing system.',
    },
  ],
  historicalContext: 'Japanese belongs to the Japonic family and has no confirmed relatives beyond its close sister Ryukyuan. Sustained contact with China from the 5th century onward brought massive Chinese influence: Chinese characters (kanji) were adopted to write the language, along with thousands of Sino-Japanese vocabulary items that still coexist with native Japanese words. The two syllabaries, hiragana and katakana, were developed in the 9th century as phonetic complements to kanji. A second major wave of foreign borrowing followed Japan\'s opening to the West in the Meiji era (1868), and English loanwords (gairaigo) have continued accumulating through the 20th and 21st centuries, now numbering in the tens of thousands.',
};
