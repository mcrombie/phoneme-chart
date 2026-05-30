import type { Phoneme } from '../types';

// ── Vowels ────────────────────────────────────────────────────────────────────

const VOWELS: Phoneme[] = [
  // CLOSE
  { id: 'close_front_unrounded', symbol: 'i', category: 'vowel', height: 'close', backness: 'front', rounded: false, description: 'Close Front Unrounded Vowel', audioFile: 'Close_front_unrounded_vowel.ogg' },
  { id: 'close_front_rounded', symbol: 'y', category: 'vowel', height: 'close', backness: 'front', rounded: true, description: 'Close Front Rounded Vowel', audioFile: 'Close_front_rounded_vowel.ogg' },
  { id: 'close_central_unrounded', symbol: 'ɨ', category: 'vowel', height: 'close', backness: 'central', rounded: false, description: 'Close Central Unrounded Vowel', audioFile: 'Close_central_unrounded_vowel.ogg' },
  { id: 'close_central_rounded', symbol: 'ʉ', category: 'vowel', height: 'close', backness: 'central', rounded: true, description: 'Close Central Rounded Vowel', audioFile: 'Close_central_rounded_vowel.ogg' },
  { id: 'close_back_unrounded', symbol: 'ɯ', category: 'vowel', height: 'close', backness: 'back', rounded: false, description: 'Close Back Unrounded Vowel', audioFile: 'Close_back_unrounded_vowel.ogg' },
  { id: 'close_back_rounded', symbol: 'u', category: 'vowel', height: 'close', backness: 'back', rounded: true, description: 'Close Back Rounded Vowel', audioFile: 'Close_back_rounded_vowel.ogg' },
  // NEAR-CLOSE
  { id: 'near_close_front_unrounded', symbol: 'ɪ', category: 'vowel', height: 'near_close', backness: 'near_front', rounded: false, description: 'Near-close Near-front Unrounded Vowel', audioFile: 'Near-close_near-front_unrounded_vowel.ogg' },
  { id: 'near_close_front_rounded', symbol: 'ʏ', category: 'vowel', height: 'near_close', backness: 'near_front', rounded: true, description: 'Near-close Near-front Rounded Vowel', audioFile: 'Near-close_near-front_rounded_vowel.ogg' },
  { id: 'near_close_back_rounded', symbol: 'ʊ', category: 'vowel', height: 'near_close', backness: 'near_back', rounded: true, description: 'Near-close Near-back Rounded Vowel', audioFile: 'Near-close_near-back_rounded_vowel.ogg' },
  // CLOSE-MID
  { id: 'close_mid_front_unrounded', symbol: 'e', category: 'vowel', height: 'close_mid', backness: 'front', rounded: false, description: 'Close-mid Front Unrounded Vowel', audioFile: 'Close-mid_front_unrounded_vowel.ogg' },
  { id: 'close_mid_front_rounded', symbol: 'ø', category: 'vowel', height: 'close_mid', backness: 'front', rounded: true, description: 'Close-mid Front Rounded Vowel', audioFile: 'Close-mid_front_rounded_vowel.ogg' },
  { id: 'close_mid_central_unrounded', symbol: 'ɘ', category: 'vowel', height: 'close_mid', backness: 'central', rounded: false, description: 'Close-mid Central Unrounded Vowel', audioFile: 'Close-mid_central_unrounded_vowel.ogg' },
  { id: 'close_mid_central_rounded', symbol: 'ɵ', category: 'vowel', height: 'close_mid', backness: 'central', rounded: true, description: 'Close-mid Central Rounded Vowel', audioFile: 'Close-mid_central_rounded_vowel.ogg' },
  { id: 'close_mid_back_unrounded', symbol: 'ɤ', category: 'vowel', height: 'close_mid', backness: 'back', rounded: false, description: 'Close-mid Back Unrounded Vowel', audioFile: 'Close-mid_back_unrounded_vowel.ogg' },
  { id: 'close_mid_back_rounded', symbol: 'o', category: 'vowel', height: 'close_mid', backness: 'back', rounded: true, description: 'Close-mid Back Rounded Vowel', audioFile: 'Close-mid_back_rounded_vowel.ogg' },
  // MID
  { id: 'mid_central', symbol: 'ə', category: 'vowel', height: 'mid', backness: 'central', rounded: false, description: 'Mid Central Vowel (Schwa)', audioFile: 'Mid-central_vowel.ogg' },
  // OPEN-MID
  { id: 'open_mid_front_unrounded', symbol: 'ɛ', category: 'vowel', height: 'open_mid', backness: 'front', rounded: false, description: 'Open-mid Front Unrounded Vowel', audioFile: 'Open-mid_front_unrounded_vowel.ogg' },
  { id: 'open_mid_front_rounded', symbol: 'œ', category: 'vowel', height: 'open_mid', backness: 'front', rounded: true, description: 'Open-mid Front Rounded Vowel', audioFile: 'Open-mid_front_rounded_vowel.ogg' },
  { id: 'open_mid_central_unrounded', symbol: 'ɜ', category: 'vowel', height: 'open_mid', backness: 'central', rounded: false, description: 'Open-mid Central Unrounded Vowel', audioFile: 'Open-mid_central_unrounded_vowel.ogg' },
  { id: 'open_mid_central_rounded', symbol: 'ɞ', category: 'vowel', height: 'open_mid', backness: 'central', rounded: true, description: 'Open-mid Central Rounded Vowel', audioFile: 'Open-mid_central_rounded_vowel.ogg' },
  { id: 'open_mid_back_unrounded', symbol: 'ʌ', category: 'vowel', height: 'open_mid', backness: 'back', rounded: false, description: 'Open-mid Back Unrounded Vowel', audioFile: 'Open-mid_back_unrounded_vowel2.ogg' },
  { id: 'open_mid_back_rounded', symbol: 'ɔ', category: 'vowel', height: 'open_mid', backness: 'back', rounded: true, description: 'Open-mid Back Rounded Vowel', audioFile: 'Open-mid_back_rounded_vowel.ogg' },
  // NEAR-OPEN
  { id: 'near_open_front_unrounded', symbol: 'æ', category: 'vowel', height: 'near_open', backness: 'front', rounded: false, description: 'Near-open Front Unrounded Vowel', audioFile: 'Near-open_front_unrounded_vowel.ogg' },
  { id: 'near_open_central', symbol: 'ɐ', category: 'vowel', height: 'near_open', backness: 'central', rounded: false, description: 'Near-open Central Vowel', audioFile: 'Near-open_central_unrounded_vowel.ogg' },
  // OPEN
  { id: 'open_front_unrounded', symbol: 'a', category: 'vowel', height: 'open', backness: 'front', rounded: false, description: 'Open Front Unrounded Vowel', audioFile: 'Open_front_unrounded_vowel.ogg' },
  { id: 'open_front_rounded', symbol: 'ɶ', category: 'vowel', height: 'open', backness: 'front', rounded: true, description: 'Open Front Rounded Vowel', audioFile: 'Open_front_rounded_vowel.ogg' },
  { id: 'open_back_unrounded', symbol: 'ɑ', category: 'vowel', height: 'open', backness: 'back', rounded: false, description: 'Open Back Unrounded Vowel', audioFile: 'Open_back_unrounded_vowel.ogg' },
  { id: 'open_back_rounded', symbol: 'ɒ', category: 'vowel', height: 'open', backness: 'back', rounded: true, description: 'Open Back Rounded Vowel', audioFile: 'Open_back_rounded_vowel.ogg' },
  // NASAL VOWELS (used by French, Boueni — shown in phonology view only)
  { id: 'nasal_open_front', symbol: 'ɑ̃', category: 'vowel', height: 'open', backness: 'back', rounded: false, isNasal: true, description: 'Nasal Open Back Unrounded Vowel' },
  { id: 'nasal_open_mid_front', symbol: 'ɛ̃', category: 'vowel', height: 'open_mid', backness: 'front', rounded: false, isNasal: true, description: 'Nasal Open-mid Front Unrounded Vowel' },
  { id: 'nasal_open_mid_back', symbol: 'ɔ̃', category: 'vowel', height: 'open_mid', backness: 'back', rounded: true, isNasal: true, description: 'Nasal Open-mid Back Rounded Vowel' },
  { id: 'nasal_open_mid_front_rounded', symbol: 'œ̃', category: 'vowel', height: 'open_mid', backness: 'front', rounded: true, isNasal: true, description: 'Nasal Open-mid Front Rounded Vowel' },
  // Boueni nasal vowels
  { id: 'nasal_open_central', symbol: 'ã', category: 'vowel', height: 'open', backness: 'front', rounded: false, isNasal: true, description: 'Nasal Open Central Vowel' },
  { id: 'nasal_close_mid_front', symbol: 'ẽ', category: 'vowel', height: 'close_mid', backness: 'front', rounded: false, isNasal: true, description: 'Nasal Close-mid Front Unrounded Vowel' },
  { id: 'nasal_close_front', symbol: 'ĩ', category: 'vowel', height: 'close', backness: 'front', rounded: false, isNasal: true, description: 'Nasal Close Front Unrounded Vowel' },
  { id: 'nasal_close_mid_back', symbol: 'õ', category: 'vowel', height: 'close_mid', backness: 'back', rounded: true, isNasal: true, description: 'Nasal Close-mid Back Rounded Vowel' },
  { id: 'nasal_close_back', symbol: 'ũ', category: 'vowel', height: 'close', backness: 'back', rounded: true, isNasal: true, description: 'Nasal Close Back Rounded Vowel' },
];

// ── Consonants ────────────────────────────────────────────────────────────────

const CONSONANTS: Phoneme[] = [
  // PLOSIVES
  { id: 'p', symbol: 'p', category: 'consonant', manner: 'plosive', place: 'bilabial', voiced: false, description: 'Voiceless Bilabial Plosive', audioFile: 'Voiceless_bilabial_plosive.ogg' },
  { id: 'b', symbol: 'b', category: 'consonant', manner: 'plosive', place: 'bilabial', voiced: true, description: 'Voiced Bilabial Plosive', audioFile: 'Voiced_bilabial_plosive.ogg' },
  { id: 't', symbol: 't', category: 'consonant', manner: 'plosive', place: 'alveolar', voiced: false, description: 'Voiceless Alveolar Plosive', audioFile: 'Voiceless_alveolar_plosive.ogg' },
  { id: 'd', symbol: 'd', category: 'consonant', manner: 'plosive', place: 'alveolar', voiced: true, description: 'Voiced Alveolar Plosive', audioFile: 'Voiced_alveolar_plosive.ogg' },
  { id: 'retroflex_stop_vl', symbol: 'ʈ', category: 'consonant', manner: 'plosive', place: 'retroflex', voiced: false, description: 'Voiceless Retroflex Plosive', audioFile: 'Voiceless_retroflex_stop.oga' },
  { id: 'retroflex_stop_vd', symbol: 'ɖ', category: 'consonant', manner: 'plosive', place: 'retroflex', voiced: true, description: 'Voiced Retroflex Plosive', audioFile: 'Voiced_retroflex_stop.oga' },
  { id: 'palatal_stop_vl', symbol: 'c', category: 'consonant', manner: 'plosive', place: 'palatal', voiced: false, description: 'Voiceless Palatal Plosive', audioFile: 'Voiceless_palatal_plosive.ogg' },
  { id: 'palatal_stop_vd', symbol: 'ɟ', category: 'consonant', manner: 'plosive', place: 'palatal', voiced: true, description: 'Voiced Palatal Plosive', audioFile: 'Voiced_palatal_plosive.ogg' },
  { id: 'k', symbol: 'k', category: 'consonant', manner: 'plosive', place: 'velar', voiced: false, description: 'Voiceless Velar Plosive', audioFile: 'Voiceless_velar_plosive.ogg' },
  { id: 'g', symbol: 'g', category: 'consonant', manner: 'plosive', place: 'velar', voiced: true, description: 'Voiced Velar Plosive', audioFile: 'Voiced_velar_plosive_02.ogg' },
  { id: 'q', symbol: 'q', category: 'consonant', manner: 'plosive', place: 'uvular', voiced: false, description: 'Voiceless Uvular Plosive', audioFile: 'Voiceless_uvular_plosive.ogg' },
  { id: 'uvular_stop_vd', symbol: 'ɢ', category: 'consonant', manner: 'plosive', place: 'uvular', voiced: true, description: 'Voiced Uvular Plosive', audioFile: 'Voiced_uvular_stop.oga' },
  { id: 'pharyngeal_stop', symbol: 'ʡ', category: 'consonant', manner: 'plosive', place: 'pharyngeal', voiced: false, description: 'Pharyngeal Plosive', audioFile: 'Epiglottal_stop.ogg' },
  { id: 'glottal_stop', symbol: 'ʔ', category: 'consonant', manner: 'plosive', place: 'glottal', voiced: false, description: 'Glottal Stop', audioFile: 'Glottal_stop.ogg' },
  // AFFRICATES (flagged, placed in plosive row)
  { id: 'ts_vl', symbol: 'ts', category: 'consonant', manner: 'plosive', place: 'alveolar', voiced: false, isAffricate: true, description: 'Voiceless Alveolar Affricate', audioFile: 'Voiceless_alveolar_sibilant_affricate.oga' },
  { id: 'ts_vd', symbol: 'dz', category: 'consonant', manner: 'plosive', place: 'alveolar', voiced: true, isAffricate: true, description: 'Voiced Alveolar Affricate', audioFile: 'Voiced_alveolar_sibilant_affricate.oga' },
  { id: 'tsh_vl', symbol: 'tʃ', category: 'consonant', manner: 'plosive', place: 'postalveolar', voiced: false, isAffricate: true, description: 'Voiceless Postalveolar Affricate', audioFile: 'Voiceless_palato-alveolar_affricate.ogg' },
  { id: 'tsh_vd', symbol: 'dʒ', category: 'consonant', manner: 'plosive', place: 'postalveolar', voiced: true, isAffricate: true, description: 'Voiced Postalveolar Affricate', audioFile: 'Voiced_palato-alveolar_affricate.ogg' },
  { id: 'retroflex_affricate_vl', symbol: 'ʈʂ', category: 'consonant', manner: 'plosive', place: 'retroflex', voiced: false, isAffricate: true, description: 'Voiceless Retroflex Affricate', audioFile: 'Voiceless_retroflex_affricate.ogg' },
  { id: 'retroflex_affricate_vd', symbol: 'ɖʐ', category: 'consonant', manner: 'plosive', place: 'retroflex', voiced: true, isAffricate: true, description: 'Voiced Retroflex Affricate', audioFile: 'Voiced_retroflex_affricate.ogg' },
  { id: 'alveopalatal_affricate_vl', symbol: 'tɕ', category: 'consonant', manner: 'plosive', place: 'palatal', voiced: false, isAffricate: true, description: 'Voiceless Alveolo-palatal Affricate', audioFile: 'Voiceless_alveolo-palatal_affricate.ogg' },
  { id: 'alveopalatal_affricate_vd', symbol: 'dʑ', category: 'consonant', manner: 'plosive', place: 'palatal', voiced: true, isAffricate: true, description: 'Voiced Alveolo-palatal Affricate', audioFile: 'Voiced_alveolo-palatal_affricate.ogg' },
  // NASALS
  { id: 'm', symbol: 'm', category: 'consonant', manner: 'nasal', place: 'bilabial', voiced: true, description: 'Bilabial Nasal', audioFile: 'Bilabial_nasal.ogg' },
  { id: 'labiodental_nasal', symbol: 'ɱ', category: 'consonant', manner: 'nasal', place: 'labiodental', voiced: true, description: 'Labiodental Nasal', audioFile: 'Labiodental_nasal.ogg' },
  { id: 'n', symbol: 'n', category: 'consonant', manner: 'nasal', place: 'alveolar', voiced: true, description: 'Alveolar Nasal', audioFile: 'Alveolar_nasal.ogg' },
  { id: 'retroflex_nasal', symbol: 'ɳ', category: 'consonant', manner: 'nasal', place: 'retroflex', voiced: true, description: 'Retroflex Nasal', audioFile: 'Retroflex_nasal.ogg' },
  { id: 'palatal_nasal', symbol: 'ɲ', category: 'consonant', manner: 'nasal', place: 'palatal', voiced: true, description: 'Palatal Nasal', audioFile: 'Palatal_nasal.ogg' },
  { id: 'ng', symbol: 'ŋ', category: 'consonant', manner: 'nasal', place: 'velar', voiced: true, description: 'Velar Nasal', audioFile: 'Velar_nasal.ogg' },
  { id: 'uvular_nasal', symbol: 'ɴ', category: 'consonant', manner: 'nasal', place: 'uvular', voiced: true, description: 'Uvular Nasal', audioFile: 'Uvular_nasal.ogg' },
  // TRILLS
  { id: 'bilabial_trill_vl', symbol: 'ʙ̥', category: 'consonant', manner: 'trill', place: 'bilabial', voiced: false, description: 'Voiceless Bilabial Trill', audioFile: 'Voiceless_bilabial_trill_with_aspiration.ogg' },
  { id: 'bilabial_trill', symbol: 'ʙ', category: 'consonant', manner: 'trill', place: 'bilabial', voiced: true, description: 'Voiced Bilabial Trill', audioFile: 'Bilabial_trill.ogg' },
  { id: 'alveolar_trill_vl', symbol: 'r̥', category: 'consonant', manner: 'trill', place: 'alveolar', voiced: false, description: 'Voiceless Alveolar Trill', audioFile: 'Voiceless_alveolar_trill.ogg' },
  { id: 'r', symbol: 'r', category: 'consonant', manner: 'trill', place: 'alveolar', voiced: true, description: 'Voiced Alveolar Trill', audioFile: 'Alveolar_trill.ogg' },
  { id: 'uvular_trill_vl', symbol: 'ʀ̥', category: 'consonant', manner: 'trill', place: 'uvular', voiced: false, description: 'Voiceless Uvular Trill', audioFile: 'Voiceless_uvular_trill.ogg' },
  { id: 'uvular_trill', symbol: 'ʀ', category: 'consonant', manner: 'trill', place: 'uvular', voiced: true, description: 'Voiced Uvular Trill', audioFile: 'Uvular_trill.ogg' },
  { id: 'epiglottal_trill', symbol: 'ʜ', category: 'consonant', manner: 'trill', place: 'pharyngeal', voiced: false, description: 'Voiceless Epiglottal Trill', audioFile: 'Voiceless_epiglottal_trill.ogg' },
  // TAPS & FLAPS
  { id: 'labiodental_flap', symbol: 'ⱱ', category: 'consonant', manner: 'tap_flap', place: 'labiodental', voiced: true, description: 'Labiodental Flap', audioFile: 'Labiodental_flap.ogg' },
  { id: 'alveolar_tap', symbol: 'ɾ', category: 'consonant', manner: 'tap_flap', place: 'alveolar', voiced: true, description: 'Alveolar Tap', audioFile: 'Alveolar_tap.ogg' },
  { id: 'retroflex_flap', symbol: 'ɽ', category: 'consonant', manner: 'tap_flap', place: 'retroflex', voiced: true, description: 'Retroflex Flap', audioFile: 'Retroflex_flap.ogg' },
  { id: 'epiglottal_flap', symbol: 'ʡ̆', category: 'consonant', manner: 'tap_flap', place: 'pharyngeal', voiced: false, description: 'Epiglottal Tap', audioFile: 'Epiglottal_flap.oga' },
  // FRICATIVES
  { id: 'bilabial_fric_vl', symbol: 'ɸ', category: 'consonant', manner: 'fricative', place: 'bilabial', voiced: false, description: 'Voiceless Bilabial Fricative', audioFile: 'Voiceless_bilabial_fricative.ogg' },
  { id: 'bilabial_fric_vd', symbol: 'β', category: 'consonant', manner: 'fricative', place: 'bilabial', voiced: true, description: 'Voiced Bilabial Fricative', audioFile: 'Voiced_bilabial_fricative.ogg' },
  { id: 'f', symbol: 'f', category: 'consonant', manner: 'fricative', place: 'labiodental', voiced: false, description: 'Voiceless Labiodental Fricative', audioFile: 'Voiceless_labiodental_fricative.ogg' },
  { id: 'v', symbol: 'v', category: 'consonant', manner: 'fricative', place: 'labiodental', voiced: true, description: 'Voiced Labiodental Fricative', audioFile: 'Voiced_labiodental_fricative.ogg' },
  { id: 'theta', symbol: 'θ', category: 'consonant', manner: 'fricative', place: 'dental', voiced: false, description: 'Voiceless Dental Fricative', audioFile: 'Voiceless_dental_fricative.ogg' },
  { id: 'eth', symbol: 'ð', category: 'consonant', manner: 'fricative', place: 'dental', voiced: true, description: 'Voiced Dental Fricative', audioFile: 'Voiced_dental_fricative.ogg' },
  { id: 's', symbol: 's', category: 'consonant', manner: 'fricative', place: 'alveolar', voiced: false, description: 'Voiceless Alveolar Fricative', audioFile: 'Voiceless_alveolar_sibilant.ogg' },
  { id: 'z', symbol: 'z', category: 'consonant', manner: 'fricative', place: 'alveolar', voiced: true, description: 'Voiced Alveolar Fricative', audioFile: 'Voiced_alveolar_sibilant.ogg' },
  { id: 'sh', symbol: 'ʃ', category: 'consonant', manner: 'fricative', place: 'postalveolar', voiced: false, description: 'Voiceless Postalveolar Fricative', audioFile: 'Voiceless_palato-alveolar_sibilant.ogg' },
  { id: 'zh', symbol: 'ʒ', category: 'consonant', manner: 'fricative', place: 'postalveolar', voiced: true, description: 'Voiced Postalveolar Fricative', audioFile: 'Voiced_palato-alveolar_sibilant.ogg' },
  { id: 'retroflex_fric_vl', symbol: 'ʂ', category: 'consonant', manner: 'fricative', place: 'retroflex', voiced: false, description: 'Voiceless Retroflex Fricative', audioFile: 'Voiceless_retroflex_sibilant.ogg' },
  { id: 'retroflex_fric_vd', symbol: 'ʐ', category: 'consonant', manner: 'fricative', place: 'retroflex', voiced: true, description: 'Voiced Retroflex Fricative', audioFile: 'Voiced_retroflex_sibilant.ogg' },
  { id: 'palatal_fric_vl', symbol: 'ç', category: 'consonant', manner: 'fricative', place: 'palatal', voiced: false, description: 'Voiceless Palatal Fricative', audioFile: 'Voiceless_palatal_fricative.ogg' },
  { id: 'palatal_fric_vd', symbol: 'ʝ', category: 'consonant', manner: 'fricative', place: 'palatal', voiced: true, description: 'Voiced Palatal Fricative', audioFile: 'Voiced_palatal_fricative.ogg' },
  { id: 'alveopalatal_fric_vl', symbol: 'ɕ', category: 'consonant', manner: 'fricative', place: 'palatal', voiced: false, description: 'Voiceless Alveolo-palatal Fricative', audioFile: 'Voiceless_alveolo-palatal_sibilant.ogg' },
  { id: 'alveopalatal_fric_vd', symbol: 'ʑ', category: 'consonant', manner: 'fricative', place: 'palatal', voiced: true, description: 'Voiced Alveolo-palatal Fricative', audioFile: 'Voiced_alveolo-palatal_sibilant.ogg' },
  { id: 'x', symbol: 'x', category: 'consonant', manner: 'fricative', place: 'velar', voiced: false, description: 'Voiceless Velar Fricative', audioFile: 'Voiceless_velar_fricative.ogg' },
  { id: 'gamma', symbol: 'ɣ', category: 'consonant', manner: 'fricative', place: 'velar', voiced: true, description: 'Voiced Velar Fricative', audioFile: 'Voiced_velar_fricative.ogg' },
  { id: 'uvular_fric_vl', symbol: 'χ', category: 'consonant', manner: 'fricative', place: 'uvular', voiced: false, description: 'Voiceless Uvular Fricative', audioFile: 'Voiceless_uvular_fricative.ogg' },
  { id: 'uvular_fric_vd', symbol: 'ʁ', category: 'consonant', manner: 'fricative', place: 'uvular', voiced: true, description: 'Voiced Uvular Fricative', audioFile: 'Voiced_uvular_fricative.ogg' },
  { id: 'pharyngeal_fric_vl', symbol: 'ħ', category: 'consonant', manner: 'fricative', place: 'pharyngeal', voiced: false, description: 'Voiceless Pharyngeal Fricative', audioFile: 'Voiceless_pharyngeal_fricative.ogg' },
  { id: 'pharyngeal_fric_vd', symbol: 'ʕ', category: 'consonant', manner: 'fricative', place: 'pharyngeal', voiced: true, description: 'Voiced Pharyngeal Fricative', audioFile: 'Voiced_pharyngeal_fricative.ogg' },
  { id: 'h', symbol: 'h', category: 'consonant', manner: 'fricative', place: 'glottal', voiced: false, description: 'Voiceless Glottal Fricative', audioFile: 'Voiceless_glottal_fricative.ogg' },
  { id: 'h_voiced', symbol: 'ɦ', category: 'consonant', manner: 'fricative', place: 'glottal', voiced: true, description: 'Voiced Glottal Fricative', audioFile: 'Voiced_glottal_fricative.ogg' },
  // LATERAL FRICATIVES
  { id: 'alveolar_lat_fric_vl', symbol: 'ɬ', category: 'consonant', manner: 'lateral_fricative', place: 'alveolar', voiced: false, description: 'Voiceless Alveolar Lateral Fricative', audioFile: 'Voiceless_alveolar_lateral_fricative.ogg' },
  { id: 'alveolar_lat_fric_vd', symbol: 'ɮ', category: 'consonant', manner: 'lateral_fricative', place: 'alveolar', voiced: true, description: 'Voiced Alveolar Lateral Fricative', audioFile: 'Voiced_alveolar_lateral_fricative.ogg' },
  { id: 'retroflex_lat_fric_vl', symbol: 'ɭ̊˔', category: 'consonant', manner: 'lateral_fricative', place: 'retroflex', voiced: false, description: 'Voiceless Retroflex Lateral Fricative', audioFile: 'Voiceless_retroflex_lateral_fricative.ogg' },
  { id: 'palatal_lat_fric_vl', symbol: 'ʎ̝̊', category: 'consonant', manner: 'lateral_fricative', place: 'palatal', voiced: false, description: 'Voiceless Palatal Lateral Fricative', audioFile: 'Voiceless_palatal_lateral_fricative.ogg' },
  { id: 'velar_lat_fric_vl', symbol: 'ʟ̝̊', category: 'consonant', manner: 'lateral_fricative', place: 'velar', voiced: false, description: 'Voiceless Velar Lateral Fricative', audioFile: 'Voiced_velar_lateral_fricative.ogg' },
  // APPROXIMANTS
  { id: 'labiodental_approx', symbol: 'ʋ', category: 'consonant', manner: 'approximant', place: 'labiodental', voiced: true, description: 'Labiodental Approximant', audioFile: 'Labiodental_approximant.ogg' },
  { id: 'alveolar_approx', symbol: 'ɹ', category: 'consonant', manner: 'approximant', place: 'alveolar', voiced: true, description: 'Alveolar Approximant', audioFile: 'Alveolar_approximant.ogg' },
  { id: 'retroflex_approx', symbol: 'ɻ', category: 'consonant', manner: 'approximant', place: 'retroflex', voiced: true, description: 'Retroflex Approximant', audioFile: 'Retroflex_approximant.ogg' },
  { id: 'j', symbol: 'j', category: 'consonant', manner: 'approximant', place: 'palatal', voiced: true, description: 'Palatal Approximant', audioFile: 'Palatal_approximant.ogg' },
  { id: 'velar_approx', symbol: 'ɰ', category: 'consonant', manner: 'approximant', place: 'velar', voiced: true, description: 'Velar Approximant', audioFile: 'Voiced_velar_approximant.ogg' },
  { id: 'w', symbol: 'w', category: 'consonant', manner: 'approximant', place: 'velar', voiced: true, description: 'Labio-velar Approximant', audioFile: 'Voiced_labio-velar_approximant.ogg' },
  // LATERAL APPROXIMANTS
  { id: 'l', symbol: 'l', category: 'consonant', manner: 'lateral_approximant', place: 'alveolar', voiced: true, description: 'Alveolar Lateral Approximant', audioFile: 'Alveolar_lateral_approximant.ogg' },
  { id: 'retroflex_lat_approx', symbol: 'ɭ', category: 'consonant', manner: 'lateral_approximant', place: 'retroflex', voiced: true, description: 'Retroflex Lateral Approximant', audioFile: 'Retroflex_lateral_approximant.ogg' },
  { id: 'palatal_lat_approx', symbol: 'ʎ', category: 'consonant', manner: 'lateral_approximant', place: 'palatal', voiced: true, description: 'Palatal Lateral Approximant', audioFile: 'Palatal_lateral_approximant.ogg' },
  { id: 'velar_lat_approx', symbol: 'ʟ', category: 'consonant', manner: 'lateral_approximant', place: 'velar', voiced: true, description: 'Velar Lateral Approximant', audioFile: 'Velar_lateral_approximant.ogg' },
  { id: 'uvular_lat_approx', symbol: 'ʟ̠', category: 'consonant', manner: 'lateral_approximant', place: 'uvular', voiced: true, description: 'Uvular Lateral Approximant', audioFile: 'Uvular_lateral_approximant.ogg' },
];

// ── Public API ────────────────────────────────────────────────────────────────

export const ALL_PHONEMES: Phoneme[] = [...VOWELS, ...CONSONANTS];

export const PHONEME_MAP: Map<string, Phoneme> = new Map(
  ALL_PHONEMES.map(p => [p.id, p])
);

// Ordered sequences used to build chart axes
export const CONSONANT_MANNERS = [
  'plosive', 'nasal', 'trill', 'tap_flap',
  'fricative', 'lateral_fricative', 'approximant', 'lateral_approximant',
] as const;

export const MANNER_LABELS: Record<string, string> = {
  plosive: 'Plosive', nasal: 'Nasal', trill: 'Trill',
  tap_flap: 'Tap / Flap', fricative: 'Fricative',
  lateral_fricative: 'Lateral Fricative', approximant: 'Approximant',
  lateral_approximant: 'Lateral Approximant',
};

export const CONSONANT_PLACES = [
  'bilabial', 'labiodental', 'dental', 'alveolar', 'postalveolar',
  'retroflex', 'palatal', 'velar', 'uvular', 'pharyngeal', 'glottal',
] as const;

export const PLACE_LABELS: Record<string, string> = {
  bilabial: 'Bilabial', labiodental: 'Labiodental', dental: 'Dental',
  alveolar: 'Alveolar', postalveolar: 'Postalveolar', retroflex: 'Retroflex',
  palatal: 'Palatal', velar: 'Velar', uvular: 'Uvular',
  pharyngeal: 'Pharyngeal', glottal: 'Glottal',
};

export const VOWEL_HEIGHTS = [
  'close', 'near_close', 'close_mid', 'mid', 'open_mid', 'near_open', 'open',
] as const;

export const HEIGHT_LABELS: Record<string, string> = {
  close: 'Close', near_close: 'Near-close', close_mid: 'Close-mid',
  mid: 'Mid', open_mid: 'Open-mid', near_open: 'Near-open', open: 'Open',
};

export const VOWEL_BACKNESSES = [
  'front', 'near_front', 'central', 'near_back', 'back',
] as const;

export const BACKNESS_LABELS: Record<string, string> = {
  front: 'Front', near_front: 'Near-front', central: 'Central',
  near_back: 'Near-back', back: 'Back',
};
