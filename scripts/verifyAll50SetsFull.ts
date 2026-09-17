import { getSangathitSasthaSet, getAllSangathitSasthaSetMetas } from '../src/data/questionBank';
import { shuffleQuestionOptions } from '../src/components/Quiz';

console.log('=== VERIFYING ALL 50 SETS INTEGRITY ===');

const metas = getAllSangathitSasthaSetMetas();
if (metas.length !== 50) {
  throw new Error(`Expected 50 metas, got ${metas.length}`);
}
console.log(`Verified 50 set metas.`);

let totalQuestionsAudited = 0;
const keyCounts = { A: 0, B: 0, C: 0, D: 0 };
const shuffledKeyCounts = { A: 0, B: 0, C: 0, D: 0 };

for (let sNum = 1; sNum <= 50; sNum++) {
  const quizSet = getSangathitSasthaSet(sNum);
  
  if (quizSet.questions.length !== 50) {
    throw new Error(`Set ${sNum} has ${quizSet.questions.length} questions, expected 50`);
  }
  
  quizSet.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    totalQuestionsAudited++;
    
    if (q.options.length !== 4) {
      throw new Error(`Set ${sNum} Q${qNum} has ${q.options.length} options, expected 4`);
    }

    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      throw new Error(`Set ${sNum} Q${qNum} has invalid correctAnswer: ${q.correctAnswer}`);
    }

    keyCounts[q.correctAnswer as 'A'|'B'|'C'|'D']++;

    // Test shuffleQuestionOptions to ensure correct answer evaluation remains identical
    const origCorrectText = q.options.find(o => o.key === q.correctAnswer)?.textNepali;
    const shuffled = shuffleQuestionOptions(q);
    const newCorrectText = shuffled.options.find(o => o.key === shuffled.correctAnswer)?.textNepali;

    if (origCorrectText !== newCorrectText) {
      throw new Error(`Shuffle mismatch in Set ${sNum} Q${qNum}: "${origCorrectText}" !== "${newCorrectText}"`);
    }

    shuffledKeyCounts[shuffled.correctAnswer as 'A'|'B'|'C'|'D']++;
  });
}

console.log(`Audited ${totalQuestionsAudited} questions across 50 sets.`);
console.log('Original database key distribution:', keyCounts);
console.log('Post-shuffle key distribution sample:', shuffledKeyCounts);

// Check if distribution is healthy
Object.entries(keyCounts).forEach(([k, count]) => {
  const pct = ((count / totalQuestionsAudited) * 100).toFixed(1);
  console.log(`Option ${k}: ${count} (${pct}%)`);
  if (count < 400 || count > 800) {
    throw new Error(`Distribution for ${k} is out of healthy balance: ${count}`);
  }
});

console.log('=== ALL 50 SETS PASSED ZERO-ERROR AUDIT WITH 100% SUCCESS ===');
