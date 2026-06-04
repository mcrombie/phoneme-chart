import type { Language } from '../../types';

export const spanish: Language = {
  id: 'spanish',
  name: 'Spanish',
  nativeName: 'Español',
  family: 'Indo-European › Romance',
  region: 'Latin America, Spain, Equatorial Guinea',
  type: 'real',
  consonants: [
    { ipaId: 'p', romanization: 'p', examples: [{ word: 'padre', gloss: 'father', highlight: 'p' }] },
    { ipaId: 'b', romanization: 'b / v', examples: [{ word: 'boca', gloss: 'mouth', highlight: 'b' }] },
    { ipaId: 't', romanization: 't', examples: [{ word: 'todo', gloss: 'all', highlight: 't' }] },
    { ipaId: 'd', romanization: 'd', examples: [{ word: 'dos', gloss: 'two', highlight: 'd' }] },
    { ipaId: 'tsh_vl', romanization: 'ch', examples: [{ word: 'chico', gloss: 'boy / small', highlight: 'ch' }] },
    { ipaId: 'k', romanization: 'c / qu / k', examples: [{ word: 'casa', gloss: 'house', highlight: 'c' }] },
    { ipaId: 'g', romanization: 'g', examples: [{ word: 'gato', gloss: 'cat', highlight: 'g' }] },
    { ipaId: 'f', romanization: 'f', examples: [{ word: 'fuego', gloss: 'fire', highlight: 'f' }] },
    { ipaId: 'theta', romanization: 'c / z', examples: [{ word: 'ciudad', gloss: 'city', highlight: 'c' }, { word: '(Castilian only)', gloss: '' }] },
    { ipaId: 's', romanization: 's', examples: [{ word: 'sol', gloss: 'sun', highlight: 's' }] },
    { ipaId: 'x', romanization: 'j / g', examples: [{ word: 'mujer', gloss: 'woman', highlight: 'j' }] },
    { ipaId: 'm', romanization: 'm', examples: [{ word: 'madre', gloss: 'mother', highlight: 'm' }] },
    { ipaId: 'n', romanization: 'n', examples: [{ word: 'noche', gloss: 'night', highlight: 'n' }] },
    { ipaId: 'palatal_nasal', romanization: 'ñ', examples: [{ word: 'año', gloss: 'year', highlight: 'ñ' }] },
    { ipaId: 'ng', romanization: 'n (before k/g)', examples: [{ word: 'banco', gloss: 'bank', highlight: 'n' }] },
    { ipaId: 'r', romanization: 'rr', examples: [{ word: 'perro', gloss: 'dog', highlight: 'rr' }] },
    { ipaId: 'alveolar_tap', romanization: 'r', examples: [{ word: 'pero', gloss: 'but', highlight: 'r' }] },
    { ipaId: 'l', romanization: 'l', examples: [{ word: 'luna', gloss: 'moon', highlight: 'l' }] },
    { ipaId: 'j', romanization: 'y / ll', examples: [{ word: 'yo', gloss: 'I', highlight: 'y' }] },
    { ipaId: 'w', romanization: 'u / hu', examples: [{ word: 'agua', gloss: 'water', highlight: 'u' }] },
  ],
  vowels: [
    { ipaId: 'open_front_unrounded', romanization: 'a', examples: [{ word: 'casa', gloss: 'house', highlight: 'a' }] },
    { ipaId: 'close_mid_front_unrounded', romanization: 'e', examples: [{ word: 'mesa', gloss: 'table', highlight: 'e' }] },
    { ipaId: 'close_front_unrounded', romanization: 'i', examples: [{ word: 'sí', gloss: 'yes', highlight: 'i' }] },
    { ipaId: 'close_mid_back_rounded', romanization: 'o', examples: [{ word: 'sol', gloss: 'sun', highlight: 'o' }] },
    { ipaId: 'close_back_rounded', romanization: 'u', examples: [{ word: 'luz', gloss: 'light', highlight: 'u' }] },
  ],
  specialFeatures: [
    {
      title: 'Five pure vowels',
      description: 'Spanish has one of the simplest vowel systems among major world languages — exactly five vowels, each with a single stable quality. No reduced vowels, no schwa, no length distinctions. This is why Spanish-influenced English (and English-influenced Spanish) show characteristic vowel substitution errors.',
    },
    {
      title: 'Rr vs. r contrast',
      description: 'Spanish maintains a phonemic distinction between the alveolar tap /ɾ/ (single "r" in medial position, as in "pero" — but) and the alveolar trill /r/ ("rr" or initial "r", as in "perro" — dog). These minimal pairs are real and lexically contrastive.',
    },
    {
      title: 'Dialectal TH',
      description: 'Castilian Spanish uses the voiceless dental fricative /θ/ for the letters "c" (before e/i) and "z". Latin American and Andalusian Spanish merge these to /s/ — a feature called "seseo." Both are standard in their regions.',
    },
  ],
  historicalContext: 'Spanish descends from Vulgar Latin, brought to the Iberian Peninsula by Roman soldiers and settlers from the 3rd century BC onward. The Visigoths\' Germanic influence was phonologically light, but the Moorish period (711–1492 AD) left a rich Arabic substrate — around 4,000 Spanish words derive from Arabic, including álgebra, alcohol, azúcar, and many place names. The modern standard is based on Castilian, the dialect that emerged from the Christian kingdoms of northern Iberia and spread south with the Reconquista. Spanish also absorbed thousands of words from Nahuatl, Quechua, and other indigenous American languages following the 16th-century colonial expansion.',
};
