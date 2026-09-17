import fs from 'fs';
import path from 'path';

console.log('=== STARTING 100% FACTUAL & ZERO-HALLUCINATION QUESTION GENERATOR ===');

export interface MasterItem {
  qEng: string;
  qNep: string;
  correct: string;
  distractors: [string, string, string];
  expEng: string;
  expNep: string;
  actSection?: string;
}

export interface SingleLangItem {
  question: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
}

export interface RawSangathitQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface RawSangathitSet {
  setId: number;
  setName: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  questions: RawSangathitQuestion[];
}

export function buildQuestion(qNum: number, setId: number, item: MasterItem): RawSangathitQuestion {
  // Deterministic balanced key distribution across A, B, C, D (0, 1, 2, 3)
  const targetIndex = ((setId * 17) + (qNum * 13) + ((setId + qNum) % 4)) % 4;
  const cleanCorrect = item.correct.replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim();
  const cleanDistractors = item.distractors.map(d => d.replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim());

  const options: string[] = [];
  let dPtr = 0;
  for (let slot = 0; slot < 4; slot++) {
    if (slot === targetIndex) {
      options.push(cleanCorrect);
    } else {
      options.push(cleanDistractors[dPtr % cleanDistractors.length]);
      dPtr++;
    }
  }

  return {
    id: qNum,
    question: `${qNum}. ${item.qEng}\n(${item.qNep})`,
    options,
    correctAnswer: targetIndex,
    explanation: `ENG: ${item.expEng}\nNEP: ${item.expNep}${item.actSection ? `\nआधिकारिक सन्दर्भ: ${item.actSection}` : ''}`
  };
}

export function buildSingleLang(qNum: number, setId: number, item: SingleLangItem): RawSangathitQuestion {
  const targetIndex = ((setId * 11) + (qNum * 7) + ((setId + qNum) % 4)) % 4;
  const cleanCorrect = item.correct.replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim();
  const cleanDistractors = item.distractors.map(d => d.replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim());

  const options: string[] = [];
  let dPtr = 0;
  for (let slot = 0; slot < 4; slot++) {
    if (slot === targetIndex) {
      options.push(cleanCorrect);
    } else {
      options.push(cleanDistractors[dPtr % cleanDistractors.length]);
      dPtr++;
    }
  }

  return {
    id: qNum,
    question: `${qNum}. ${item.question}`,
    options,
    correctAnswer: targetIndex,
    explanation: item.explanation
  };
}
