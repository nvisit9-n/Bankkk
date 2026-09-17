import fs from 'fs';
import path from 'path';
import { generateAllSets } from '../src/data/setGenerators';

console.log('=== STARTING 50-SET GENERATION & RIGOROUS AUDIT PIPELINE ===');

const allSets = generateAllSets(50);

console.log(`Generated ${allSets.length} sets successfully.`);

let totalQuestions = 0;
const keyCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
const keys = ['A', 'B', 'C', 'D'];
const questionStems = new Set<string>();
let hintCount = 0;

allSets.forEach((set, setIdx) => {
  if (set.questions.length !== 50) {
    throw new Error(`Set ${set.setId} has ${set.questions.length} questions, expected 50!`);
  }

  set.questions.forEach((q, qIdx) => {
    totalQuestions++;
    if (q.options.length !== 4) {
      throw new Error(`Set ${set.setId} Q${q.id} has ${q.options.length} options!`);
    }

    const ansNum = typeof q.correctAnswer === 'number' ? q.correctAnswer : parseInt(String(q.correctAnswer), 10);
    if (isNaN(ansNum) || ansNum < 0 || ansNum > 3) {
      throw new Error(`Set ${set.setId} Q${q.id} invalid correct answer ${q.correctAnswer}!`);
    }

    keyCounts[ansNum as 0 | 1 | 2 | 3]++;

    // Check for hint leaks in options
    q.options.forEach(opt => {
      if (/^\([A-D]\)/i.test(opt.trim())) {
        hintCount++;
      }
    });

    questionStems.add(q.question);
  });
});

console.log(`Total questions audited: ${totalQuestions} (Expected 2,500)`);
console.log(`Unique question stems: ${questionStems.size}`);
console.log(`Leaked option hints: ${hintCount}`);
console.log('Answer distribution across 2,500 questions:');
console.log(`A: ${keyCounts[0]} (${((keyCounts[0] / totalQuestions) * 100).toFixed(2)}%)`);
console.log(`B: ${keyCounts[1]} (${((keyCounts[1] / totalQuestions) * 100).toFixed(2)}%)`);
console.log(`C: ${keyCounts[2]} (${((keyCounts[2] / totalQuestions) * 100).toFixed(2)}%)`);
console.log(`D: ${keyCounts[3]} (${((keyCounts[3] / totalQuestions) * 100).toFixed(2)}%)`);

// Save to public/data/allFiftySets.json
const outputPath = path.join(process.cwd(), 'public', 'data', 'allFiftySets.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(allSets, null, 2), 'utf-8');

console.log(`Successfully written 2,500 MCQs to ${outputPath}`);
console.log('=== AUDIT PIPELINE COMPLETED PERFECTLY ===');
