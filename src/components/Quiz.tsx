import React from 'react';
import { Question } from '../types';
import { QuizEngine, QuizEngineProps } from './QuizEngine';

/**
 * Dynamic Option Shuffler (Fisher-Yates)
 * Randomly shuffles options A, B, C, D on runtime without breaking the evaluation logic
 * or the official Loksewa -20% negative marking scoring.
 */
export function shuffleQuestionOptions(question: Question): Question {
  if (!question || !question.options || question.options.length <= 1) {
    return question;
  }

  const originalCorrectKey = question.correctAnswer;

  // Clone options and retain their original key
  const cloned = question.options.map(opt => ({
    ...opt,
    _origKey: opt.key
  }));

  // Fisher-Yates shuffle
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cloned[i];
    cloned[i] = cloned[j];
    cloned[j] = temp;
  }

  // Re-assign keys A, B, C, D and recalculate new correctAnswer position
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  let newCorrectKey: 'A' | 'B' | 'C' | 'D' = 'A';

  const rekeyedOptions = cloned.map((opt, index) => {
    const assignedKey = keys[index] || 'A';
    if (opt._origKey === originalCorrectKey) {
      newCorrectKey = assignedKey;
    }
    // Clean any accidental (A)/(B)/[A] prefix from text to ensure NO hints
    const cleanNepali = opt.textNepali ? opt.textNepali.replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim() : '';
    const cleanEnglish = opt.textEnglish ? opt.textEnglish.replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim() : undefined;

    return {
      key: assignedKey,
      textNepali: cleanNepali,
      textEnglish: cleanEnglish
    };
  });

  return {
    ...question,
    options: rekeyedOptions,
    correctAnswer: newCorrectKey
  };
}

/**
 * Precise Loksewa -20% Negative Marking Evaluation Math
 * For 50-Question Pre-Test (100 full marks, 2 marks/question): -0.4 marks per incorrect answer.
 * For standard 1-mark questions: -0.2 marks per incorrect answer.
 */
export function calculateLoksewaScore(correctCount: number, incorrectCount: number, isFiftyQuestionExam: boolean = true) {
  const markPerCorrect = isFiftyQuestionExam ? 2 : 1;
  const penaltyPerIncorrect = isFiftyQuestionExam ? 0.4 : 0.2;
  const rawScore = (correctCount * markPerCorrect) - (incorrectCount * penaltyPerIncorrect);
  const netScore = Math.max(0, Number(rawScore.toFixed(2)));
  return {
    correctCount,
    incorrectCount,
    markPerCorrect,
    penaltyPerIncorrect,
    negativeDeductions: Number((incorrectCount * penaltyPerIncorrect).toFixed(2)),
    netScore
  };
}

/**
 * Shuffles all options across an entire list of questions for a quiz set.
 */
export function shuffleQuizQuestions(questions: Question[]): Question[] {
  if (!questions || questions.length === 0) return [];
  return questions.map(q => shuffleQuestionOptions(q));
}

export { QuizEngine };
export type { QuizEngineProps };
export const shuffleOptions = shuffleQuestionOptions;
export const Quiz: React.FC<QuizEngineProps> = QuizEngine;
export default Quiz;
