// ── Consonant taxonomy ────────────────────────────────────────────────────────

export type ConsonantPlace =
  | 'bilabial' | 'labiodental' | 'dental' | 'alveolar'
  | 'postalveolar' | 'retroflex' | 'palatal' | 'velar'
  | 'uvular' | 'pharyngeal' | 'glottal';

export type ConsonantManner =
  | 'plosive' | 'nasal' | 'trill' | 'tap_flap'
  | 'fricative' | 'lateral_fricative' | 'approximant' | 'lateral_approximant';

// ── Vowel taxonomy ────────────────────────────────────────────────────────────

export type VowelHeight =
  | 'close' | 'near_close' | 'close_mid' | 'mid'
  | 'open_mid' | 'near_open' | 'open';

export type VowelBackness =
  | 'front' | 'near_front' | 'central' | 'near_back' | 'back';

// ── IPA phoneme ───────────────────────────────────────────────────────────────

export interface Phoneme {
  id: string;
  symbol: string;
  category: 'consonant' | 'vowel';
  description: string;
  audioFile?: string;
  // Consonant
  place?: ConsonantPlace;
  manner?: ConsonantManner;
  voiced?: boolean;
  isAffricate?: boolean;   // displayed in plosive row, but flagged separately
  // Vowel
  height?: VowelHeight;
  backness?: VowelBackness;
  rounded?: boolean;
  isNasal?: boolean;       // nasal vowels (French, Boueni)
}

// ── Language data ─────────────────────────────────────────────────────────────

export interface PhonemeExample {
  word: string;
  gloss?: string;       // English translation / meaning
  highlight?: string;   // substring of word to bold
}

export interface LanguagePhoneme {
  ipaId: string;
  romanization: string;
  nativeScript?: string;  // character in the language's native script
  examples?: PhonemeExample[];
}

export interface CharacterEntry {
  character: string;   // romanisation placeholder when no Unicode exists
  represents: string;  // phoneme described (IPA or description)
  notes?: string;
}

export interface ScriptInfo {
  name: string;
  direction: 'ltr' | 'rtl' | 'other';
  type: 'alphabet' | 'abjad' | 'abugida' | 'syllabary' | 'logographic' | 'other';
  description: string;
  characterTable?: CharacterEntry[];
}

export interface SpecialFeature {
  title: string;
  description: string;
}

export interface Language {
  id: string;
  name: string;
  nativeName?: string;
  family: string;
  region?: string;
  type: 'real' | 'conlang';
  script?: ScriptInfo;
  consonants: LanguagePhoneme[];
  vowels: LanguagePhoneme[];
  specialFeatures?: SpecialFeature[];
  worldContext?: string;  // in-universe note for conlangs
}

// ── App state ─────────────────────────────────────────────────────────────────

export type AppMode = 'atlas' | 'phonology';
export type PhonemeCategory = 'consonants' | 'vowels';

export interface AppState {
  mode: AppMode;
  category: PhonemeCategory;
  selectedLanguageId: string;  // 'ipa' = IPA atlas mode, no language overlay
  activePhonemeId: string | null;
}
