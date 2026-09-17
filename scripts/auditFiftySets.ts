import {
  TOPIC_1_GEOGRAPHY_POOL,
  TOPIC_2_HISTORY_POOL,
  TOPIC_3_ECONOMY_POOL,
  TOPIC_4_GOVERNANCE_POOL,
  TOPIC_5_INTERNATIONAL_POOL,
  TOPIC_6_ICT_SCIENCE_POOL,
  TOPIC_7_OFFICE_MGMT_POOL,
  TOPIC_8_PUBLIC_ENTERPRISES_POOL,
  TOPIC_9_APPLIED_MATH_POOL,
  TOPIC_10_ENGLISH_POOL,
  TOPIC_10_NEPALI_POOL
} from '../src/data/topicPools';
import { generateAllFiftySets, convertRawSetToQuizSet } from '../src/data/sangathitDatabase';

console.log('--- STARTING ZERO-ERROR DATASET AUDIT ---');

const pools = [
  { name: 'Topic 1: Geography', pool: TOPIC_1_GEOGRAPHY_POOL, expectedMin: 5 },
  { name: 'Topic 2: History', pool: TOPIC_2_HISTORY_POOL, expectedMin: 5 },
  { name: 'Topic 3: Economy', pool: TOPIC_3_ECONOMY_POOL, expectedMin: 5 },
  { name: 'Topic 4: Governance', pool: TOPIC_4_GOVERNANCE_POOL, expectedMin: 5 },
  { name: 'Topic 5: International', pool: TOPIC_5_INTERNATIONAL_POOL, expectedMin: 5 },
  { name: 'Topic 6: ICT/Science', pool: TOPIC_6_ICT_SCIENCE_POOL, expectedMin: 5 },
  { name: 'Topic 7: Office Mgmt', pool: TOPIC_7_OFFICE_MGMT_POOL, expectedMin: 5 },
  { name: 'Topic 8: Public Enterprises', pool: TOPIC_8_PUBLIC_ENTERPRISES_POOL, expectedMin: 5 },
  { name: 'Topic 9: Applied Math', pool: TOPIC_9_APPLIED_MATH_POOL, expectedMin: 5 },
  { name: 'Topic 10: English', pool: TOPIC_10_ENGLISH_POOL, expectedMin: 3 },
  { name: 'Topic 10: Nepali', pool: TOPIC_10_NEPALI_POOL, expectedMin: 2 },
];

let totalErrors = 0;

for (const p of pools) {
  console.log(`Auditing ${p.name}: count = ${p.pool.length}`);
  if (p.pool.length < p.expectedMin) {
    console.error(`ERROR: Pool ${p.name} has only ${p.pool.length} items, expected at least ${p.expectedMin}`);
    totalErrors++;
  }

  p.pool.forEach((item: any, idx) => {
    if (!item.correct || item.correct.trim() === '') {
      console.error(`ERROR in ${p.name}[${idx}]: Empty correct answer`);
      totalErrors++;
    }
    if (!item.distractors || item.distractors.length !== 3) {
      console.error(`ERROR in ${p.name}[${idx}]: Expected 3 distractors, got ${item.distractors?.length}`);
      totalErrors++;
    }
    const allOpts = [item.correct, ...(item.distractors || [])];
    const uniqueOpts = new Set(allOpts.map((s: string) => s.trim().toLowerCase()));
    if (uniqueOpts.size !== 4) {
      console.error(`ERROR in ${p.name}[${idx}]: Duplicate options found in question: ${item.qEng || item.question}`);
      totalErrors++;
    }
  });
}

console.log(`Pool check complete with ${totalErrors} errors.`);

// Audit Generated Sets
const allSets = generateAllFiftySets();
console.log(`Generated ${allSets.length} sets. Auditing structure...`);

if (allSets.length !== 50) {
  console.error(`ERROR: Expected 50 sets, got ${allSets.length}`);
  totalErrors++;
}

let ansCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let ansIndexCount: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

for (const s of allSets) {
  if (s.questions.length !== 50) {
    console.error(`ERROR: Set ${s.setId} has ${s.questions.length} questions, expected 50`);
    totalErrors++;
  }

  const quizSet = convertRawSetToQuizSet(s);
  if (quizSet.questions.length !== 50) {
    console.error(`ERROR: QuizSet ${quizSet.setId} has ${quizSet.questions.length} questions, expected 50`);
    totalErrors++;
  }

  s.questions.forEach((q, qIdx) => {
    const qNum = qIdx + 1;
    if (q.id !== qNum) {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: id is ${q.id}, expected ${qNum}`);
      totalErrors++;
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Invalid correctAnswer index ${q.correctAnswer}`);
      totalErrors++;
    } else {
      ansIndexCount[q.correctAnswer] = (ansIndexCount[q.correctAnswer] || 0) + 1;
    }

    if (!q.options || q.options.length !== 4) {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: options count is ${q.options?.length}`);
      totalErrors++;
    }

    // Verify QuizSet conversion
    const convertedQ = quizSet.questions[qIdx];
    ansCount[convertedQ.correctAnswer] = (ansCount[convertedQ.correctAnswer] || 0) + 1;

    // Check if the option corresponding to correctAnswer matches the raw option
    const expectedOptIndex = q.correctAnswer;
    const expectedKey = ['A', 'B', 'C', 'D'][expectedOptIndex];
    if (convertedQ.correctAnswer !== expectedKey) {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Mismatch in converted key ${convertedQ.correctAnswer} vs ${expectedKey}`);
      totalErrors++;
    }

    // Verify topic syllabusModule ranges
    if (qNum >= 1 && qNum <= 5 && convertedQ.syllabusModule !== 'भूगोल, जनसङ्ख्या र वातावरण') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 6 && qNum <= 10 && convertedQ.syllabusModule !== 'इतिहास, संस्कृति र सामाजिक व्यवस्था') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 11 && qNum <= 15 && convertedQ.syllabusModule !== 'आर्थिक विकास, १६ औँ योजना र सूचकहरू') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 16 && qNum <= 20 && convertedQ.syllabusModule !== 'संविधान, कानुन र सङ्घीय शासन') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 21 && qNum <= 25 && convertedQ.syllabusModule !== 'अन्तर्राष्ट्रिय सम्बन्ध र सङ्घसंस्थाहरू') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 26 && qNum <= 30 && convertedQ.syllabusModule !== 'विज्ञान, ICT र समसामयिक') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 31 && qNum <= 35 && convertedQ.syllabusModule !== 'कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 36 && qNum <= 40 && convertedQ.syllabusModule !== 'सार्वजनिक संस्थान सम्बन्धी ज्ञान') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 41 && qNum <= 45 && convertedQ.syllabusModule !== 'व्यावहारिक गणित तथा वित्तीय गणना') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 46 && qNum <= 48 && convertedQ.syllabusModule !== 'भाषा परीक्षण (अङ्ग्रेजी)') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
    if (qNum >= 49 && qNum <= 50 && convertedQ.syllabusModule !== 'भाषा परीक्षण (नेपाली)') {
      console.error(`ERROR in Set ${s.setId} Q${qNum}: Wrong module ${convertedQ.syllabusModule}`);
      totalErrors++;
    }
  });
}

console.log('--- CORRECT ANSWER DISTRIBUTION ACROSS ALL 2,500 MCQs ---');
console.log('Raw indices (0, 1, 2, 3):', ansIndexCount);
console.log('Converted Keys (A, B, C, D):', ansCount);

if (ansCount.A === 2500 || ansCount.A === 0 || ansCount.B === 0 || ansCount.C === 0 || ansCount.D === 0) {
  console.error('ERROR: Answer distribution is severely biased!');
  totalErrors++;
}

console.log(`AUDIT FINISHED WITH TOTAL ERRORS: ${totalErrors}`);
