import type { AppState, AppMode, PhonemeCategory } from '../types';

const DEFAULT_STATE: AppState = {
  mode: 'atlas',
  category: 'consonants',
  selectedLanguageId: 'ipa',
  activePhonemeId: null,
};

let state: AppState = { ...DEFAULT_STATE };
const listeners: Array<(s: AppState) => void> = [];

export function getState(): AppState {
  return state;
}

export function subscribe(fn: (s: AppState) => void): void {
  listeners.push(fn);
}

function notify(): void {
  for (const fn of listeners) fn(state);
}

export function setMode(mode: AppMode): void {
  if (state.mode !== mode) { state = { ...state, mode }; notify(); }
}

export function setCategory(category: PhonemeCategory): void {
  if (state.category !== category) { state = { ...state, category }; notify(); }
}

export function setSelectedLanguage(id: string): void {
  if (state.selectedLanguageId !== id) { state = { ...state, selectedLanguageId: id, activePhonemeId: null }; notify(); }
}

export function setActivePhoneme(id: string | null): void {
  if (state.activePhonemeId !== id) { state = { ...state, activePhonemeId: id }; notify(); }
}
