import type { Language } from '../types';
import { english } from './languages/english';
import { spanish } from './languages/spanish';
import { arabic } from './languages/arabic';
import { japanese } from './languages/japanese';
import { hindi } from './languages/hindi';
import { russian } from './languages/russian';
import { german } from './languages/german';
import { french } from './languages/french';
import { chinese } from './languages/chinese';
import { mittoli } from './languages/mittoli';
import { moreshi } from './languages/moreshi';
import { boueni } from './languages/boueni';
import { pyrosi } from './languages/pyrosi';
import { grassic } from './languages/grassic';

export const LANGUAGES: Language[] = [
  english, spanish, arabic, japanese, hindi, russian, german, french, chinese,
  mittoli, moreshi, boueni, pyrosi, grassic,
];

export const LANGUAGE_MAP: Map<string, Language> = new Map(
  LANGUAGES.map(l => [l.id, l])
);

export const LANGUAGE_GROUPS = [
  {
    label: 'Real Languages',
    ids: ['english', 'spanish', 'arabic', 'japanese', 'hindi', 'russian', 'german', 'french', 'chinese'],
  },
  {
    label: 'Azhoran Conlangs',
    ids: ['mittoli', 'moreshi', 'boueni', 'pyrosi', 'grassic'],
  },
];
