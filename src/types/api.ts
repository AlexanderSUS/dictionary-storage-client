export type Definition = {
  definition: string;
  example?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type PublicWord = {
  word: string;
  phonetic: string;
  audio: string;
  partOfSpeech: string[];
  meaning: Meaning[];
};
