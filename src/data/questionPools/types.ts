export interface MasterBilingualItem {
  qEng: string;
  qNep: string;
  correct: string;
  distractors: string[] | [string, string, string];
  expEng: string;
  expNep: string;
  actSection?: string;
}

export interface MasterSingleLanguageItem {
  question: string;
  correct: string;
  distractors: string[] | [string, string, string];
  explanation: string;
}
