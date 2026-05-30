import type { Language } from '../../types';

export const grassic: Language = {
  id: 'grassic',
  name: 'Central Grassic',
  nativeName: 'Vel-Auwel',
  family: 'Grassic (Azhoran — no known relatives)',
  region: 'The Plains — the geographical center of Azhora',
  type: 'conlang',
  script: {
    name: 'No script — Caull cord notation',
    direction: 'other',
    type: 'other',
    description: 'Grassic has no indigenous script. This absence is old enough and consistent enough to be architectural rather than accidental. What Grassic has instead: the caull (knotted cord records) and the Memory Grass network. A caull encodes legal claims and route descriptions through knot position, type, and subsidiary cord configuration — but it cannot encode free speech, only predicates in legal formula format. Memory Grass sites retain impressions of events, readable by trained observers and cross-referenced against oral tradition. The oral tradition holds the index; the land holds the archive. The academic romanization (Vel-Auwel rendered in Cael-derived letters) is the only standardized written form.',
  },
  consonants: [
    { ipaId: 'p', romanization: 'p', examples: [{ word: 'pael', gloss: 'to lift; that-which-rises', highlight: 'p' }] },
    { ipaId: 'b', romanization: 'b', examples: [{ word: 'baul', gloss: 'to sink; that-which-settles', highlight: 'b' }] },
    { ipaId: 't', romanization: 't', examples: [{ word: 'thraun', gloss: 'that-which-is-traveled-in-established-pattern (= route)', highlight: 't' }] },
    { ipaId: 'd', romanization: 'd', examples: [{ word: 'daul', gloss: 'to witness; land-witness form', highlight: 'd' }] },
    { ipaId: 'k', romanization: 'k', examples: [{ word: 'kaul', gloss: 'that-which-retains; Memory Grass (the caull knot name)', highlight: 'k' }] },
    { ipaId: 'g', romanization: 'g', examples: [{ word: 'gaul', gloss: 'the lateral; off-route; border context', highlight: 'g' }] },
    { ipaId: 's', romanization: 's', examples: [{ word: 'sor', gloss: 'to practice; sor-practice (oral transmission)', highlight: 's' }] },
    { ipaId: 'h', romanization: 'h', examples: [{ word: 'hael', gloss: 'breath; sky', highlight: 'h' }] },
    { ipaId: 'n', romanization: 'n', examples: [{ word: 'nell', gloss: 'wintering; the cold season', highlight: 'n' }] },
    { ipaId: 'm', romanization: 'm', examples: [{ word: 'maun', gloss: 'elder; that-which-has-accumulated-time', highlight: 'm' }] },
    { ipaId: 'ng', romanization: 'ng', examples: [{ word: 'ngaul', gloss: 'the land\'s memory; permanent retention', highlight: 'ng' }] },
    { ipaId: 'alveolar_tap', romanization: 'r', examples: [{ word: 'raun', gloss: 'to-move-following-water; a river', highlight: 'r' }] },
    { ipaId: 'l', romanization: 'l', examples: [{ word: 'lael', gloss: 'to carry forward; an obligation', highlight: 'l' }] },
    { ipaId: 'w', romanization: 'w', examples: [{ word: 'wol', gloss: 'that-which-flows-seasonally (= a river)', highlight: 'w' }] },
    { ipaId: 'j', romanization: 'y', examples: [{ word: 'yael', gloss: 'to speak toward; to address', highlight: 'y' }] },
  ],
  vowels: [
    // Front group (vel-auwel — "bright-speech")
    { ipaId: 'close_mid_front_unrounded', romanization: 'e (front group)', examples: [{ word: 'vel', gloss: 'fast-movement; that-which-runs', highlight: 'e' }, { word: '(vel-auwel = "route-speech" — front vowel harmony class)', gloss: '' }] },
    { ipaId: 'close_front_unrounded', romanization: 'i (front group)', examples: [{ word: 'ishi', gloss: 'that-which-holds-position; a stone', highlight: 'i' }] },
    // Back group (au-auwel — "dark-speech")
    { ipaId: 'open_front_unrounded', romanization: 'a (back group)', examples: [{ word: 'aul', gloss: 'the land-witness; land memory', highlight: 'a' }, { word: '(au-auwel = "dark-speech" — back vowel harmony class)', gloss: '' }] },
    { ipaId: 'close_mid_back_rounded', romanization: 'o (back group)', examples: [{ word: 'sor', gloss: 'practice; transmission', highlight: 'o' }] },
    { ipaId: 'close_back_rounded', romanization: 'u (back group)', examples: [{ word: 'auuwel', gloss: 'land-speech; the Grassic language (Auwel)', highlight: 'u' }] },
  ],
  specialFeatures: [
    {
      title: 'Vowel harmony — bright speech and dark speech',
      description: 'Every multi-morpheme Grassic word draws its vowels from one of two sets: front group (e, i — called vel-auwel, "bright-speech": current experience, direct knowing) or back group (a, o, u — called au-auwel, "dark-speech": received tradition, older knowledge, the land\'s register). A word with a front-group root takes front-group variants of all grammatical suffixes; a back-group root takes back-group variants. The exception: the land-witness evidential suffix -aul is always dark vowels regardless of root — land memory is always ancient.',
    },
    {
      title: 'No noun-verb distinction',
      description: 'Every Grassic root is a predicate — something that can be asserted, that takes subjects, objects, and temporal and evidential marking. There is no separate morphological class of nouns. "The horse" = vel- (that-which-runs). "The river" = wol- (that-which-flows-seasonally) or tel- (that-which-is-crossed) depending on context. A route is not a thing that exists; it is a thing that is done. Outside scholars find this profoundly disorienting. Plains peoples find it unremarkable because they have no alternative grammar to compare it to.',
    },
    {
      title: 'Five evidentials',
      description: 'Grassic grammatically encodes the speaker\'s source of knowledge for every assertion. Five evidentials, from weakest to strongest: hearsay (-yel: "I was told"); personal inference (-thel: "I conclude from evidence"); direct sensory (-vel: "I perceived this"); participatory (-kel: "I was part of this"); and the highest — land-witness (-aul: "the land itself confirms this," from a Memory Grass reading). The land-witness evidential carries the most legal weight in dispute resolution. It does not harmonize with vowel harmony — it is always -aul.',
    },
    {
      title: 'Polysynthetic verb structure',
      description: 'Grassic verbs encode subject, object, spatial prefix, temporal suffix, and evidential marker in a single word. A single predicate root surrounded by its affixes can constitute a grammatically complete utterance that would take a full English sentence to express. The words are short roots with long chains of affixes rather than multi-syllable roots.',
    },
    {
      title: 'Minimal consonant inventory — accessible surface, alien structure',
      description: 'Seventeen consonants — smaller than any other documented Azhoran family. No pharyngeals, no uvulars, no retroflex, no unfamiliar fricatives (only s and h). A Mittoli scholar hearing Grassic for the first time can usually produce a recognizable approximation of any word. This accessibility has repeatedly misled outside scholars into thinking Grassic is simple. It is not. The strangeness is in the grammar.',
    },
  ],
  worldContext: 'The Grassic family has no documented relatives anywhere on Azhora or in any explored territory. Every comparative linguistics survey of the past three centuries notes this. None has resolved it. The standard hypothesis — that the Plains peoples are the oldest population on the continent, predating all others, and that Grassic is a remnant of what was spoken across Azhora before the western and desert families arrived — is consistent with the evidence. The Academy notes that the evidence is "consistent with multiple interpretations." Plains elders find this statement technically accurate and diplomatically transparent in equal measure.',
};
