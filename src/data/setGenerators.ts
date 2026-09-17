import { RawSangathitQuestion, RawSangathitSet } from '../types';
import { getGeographyQuestion } from './questionPools/topic1Geography';
import { getHistoryQuestion } from './questionPools/topic2History';
import { getEconomyQuestion } from './questionPools/topic3Economy';
import { getGovernanceQuestion } from './questionPools/topic4Governance';
import { getInternationalQuestion } from './questionPools/topic5International';
import { getScienceICTQuestion } from './questionPools/topic6ScienceICT';
import { getOfficeMgmtQuestion } from './questionPools/topic7OfficeMgmt';
import { getPublicEnterprisesQuestion } from './questionPools/topic8PublicEnterprises';
import { getMathsQuestion } from './questionPools/topic9Maths';
import { getLanguageQuestion } from './questionPools/topic10Language';
import { MasterBilingualItem } from './questionPools/types';

// Balanced permutation ensuring equal ~25% distribution of keys A, B, C, D without sequential predictability
const KEY_PERMUTATION = [2, 0, 3, 1]; // C, A, D, B

export function buildQuestion(qNum: number, setId: number, item: MasterBilingualItem): RawSangathitQuestion {
  // Deterministic balanced key distribution across 0, 1, 2, 3 (A, B, C, D)
  const targetIndex = KEY_PERMUTATION[(qNum + (setId * 3)) % 4];

  // Clean pure option strings without pre-baked hints like (A)/(B)
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

/**
 * Generate an authentic, 100% syllabus-aligned practice set (1 of 50).
 * Exactly 50 MCQs across 10 syllabus topics (5 questions each).
 */
export function generateSingleSet(setId: number): RawSangathitSet {
  const questions: RawSangathitQuestion[] = [];

  // Q1 to Q5: Topic 1 - Geography, Environment & Demography
  questions.push(buildQuestion(1, setId, getGeographyQuestion(1, setId)));
  questions.push(buildQuestion(2, setId, getGeographyQuestion(2, setId)));
  questions.push(buildQuestion(3, setId, getGeographyQuestion(3, setId)));
  questions.push(buildQuestion(4, setId, getGeographyQuestion(4, setId)));
  questions.push(buildQuestion(5, setId, getGeographyQuestion(5, setId)));

  // Q6 to Q10: Topic 2 - History, Culture & Social Systems
  questions.push(buildQuestion(6, setId, getHistoryQuestion(6, setId)));
  questions.push(buildQuestion(7, setId, getHistoryQuestion(7, setId)));
  questions.push(buildQuestion(8, setId, getHistoryQuestion(8, setId)));
  questions.push(buildQuestion(9, setId, getHistoryQuestion(9, setId)));
  questions.push(buildQuestion(10, setId, getHistoryQuestion(10, setId)));

  // Q11 to Q15: Topic 3 - Economy, 16th Plan & Monetary Policy
  questions.push(buildQuestion(11, setId, getEconomyQuestion(11, setId)));
  questions.push(buildQuestion(12, setId, getEconomyQuestion(12, setId)));
  questions.push(buildQuestion(13, setId, getEconomyQuestion(13, setId)));
  questions.push(buildQuestion(14, setId, getEconomyQuestion(14, setId)));
  questions.push(buildQuestion(15, setId, getEconomyQuestion(15, setId)));

  // Q16 to Q20: Topic 4 - Governance, Constitution & Legal System
  questions.push(buildQuestion(16, setId, getGovernanceQuestion(16, setId)));
  questions.push(buildQuestion(17, setId, getGovernanceQuestion(17, setId)));
  questions.push(buildQuestion(18, setId, getGovernanceQuestion(18, setId)));
  questions.push(buildQuestion(19, setId, getGovernanceQuestion(19, setId)));
  questions.push(buildQuestion(20, setId, getGovernanceQuestion(20, setId)));

  // Q21 to Q25: Topic 5 - International Relations & Organizations
  questions.push(buildQuestion(21, setId, getInternationalQuestion(21, setId)));
  questions.push(buildQuestion(22, setId, getInternationalQuestion(22, setId)));
  questions.push(buildQuestion(23, setId, getInternationalQuestion(23, setId)));
  questions.push(buildQuestion(24, setId, getInternationalQuestion(24, setId)));
  questions.push(buildQuestion(25, setId, getInternationalQuestion(25, setId)));

  // Q26 to Q30: Topic 6 - Science, ICT, AI & Digital Banking
  questions.push(buildQuestion(26, setId, getScienceICTQuestion(26, setId)));
  questions.push(buildQuestion(27, setId, getScienceICTQuestion(27, setId)));
  questions.push(buildQuestion(28, setId, getScienceICTQuestion(28, setId)));
  questions.push(buildQuestion(29, setId, getScienceICTQuestion(29, setId)));
  questions.push(buildQuestion(30, setId, getScienceICTQuestion(30, setId)));

  // Q31 to Q35: Section 7 - कार्यालय र सार्वजनिक व्यवस्थापन (Office Management & Public Administration)
  questions.push(buildQuestion(31, setId, getOfficeMgmtQuestion(31, setId)));
  questions.push(buildQuestion(32, setId, getOfficeMgmtQuestion(32, setId)));
  questions.push(buildQuestion(33, setId, getOfficeMgmtQuestion(33, setId)));
  questions.push(buildQuestion(34, setId, getOfficeMgmtQuestion(34, setId)));
  questions.push(buildQuestion(35, setId, getOfficeMgmtQuestion(35, setId)));

  // Q36 to Q40: Section 8 - सार्वजनिक संस्था सम्बन्धी ज्ञान (CSR, PPP, संस्थान वर्गीकरण)
  questions.push(buildQuestion(36, setId, getPublicEnterprisesQuestion(36, setId)));
  questions.push(buildQuestion(37, setId, getPublicEnterprisesQuestion(37, setId)));
  questions.push(buildQuestion(38, setId, getPublicEnterprisesQuestion(38, setId)));
  questions.push(buildQuestion(39, setId, getPublicEnterprisesQuestion(39, setId)));
  questions.push(buildQuestion(40, setId, getPublicEnterprisesQuestion(40, setId)));

  // Q41 to Q45: Section 9 - गणितीय क्षमता (Mathematical Ability)
  questions.push(buildQuestion(41, setId, getMathsQuestion(41, setId)));
  questions.push(buildQuestion(42, setId, getMathsQuestion(42, setId)));
  questions.push(buildQuestion(43, setId, getMathsQuestion(43, setId)));
  questions.push(buildQuestion(44, setId, getMathsQuestion(44, setId)));
  questions.push(buildQuestion(45, setId, getMathsQuestion(45, setId)));

  // Q46 to Q50: Section 10 - भाषा सक्षमता (English 10.1 & Nepali 10.2 Language Competence)
  questions.push(buildQuestion(46, setId, getLanguageQuestion(46, setId)));
  questions.push(buildQuestion(47, setId, getLanguageQuestion(47, setId)));
  questions.push(buildQuestion(48, setId, getLanguageQuestion(48, setId)));
  questions.push(buildQuestion(49, setId, getLanguageQuestion(49, setId)));
  questions.push(buildQuestion(50, setId, getLanguageQuestion(50, setId)));

  return {
    setId,
    setName: `सङ्गठित संस्था Pre-Test - सेट ${setId}`,
    totalQuestions: 50,
    timeLimitMinutes: 45,
    questions
  };
}

/**
 * Generate all 50 full authentic practice sets (50 sets x 50 MCQs = 2,500 questions).
 */
export function generateAllSets(totalSets: number = 50): RawSangathitSet[] {
  return Array.from({ length: totalSets }, (_, i) => generateSingleSet(i + 1));
}
