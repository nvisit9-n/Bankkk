import fs from 'fs';
import path from 'path';

console.log('=== CREATING COMPLETE MODULAR QUESTION POOLS ===');

// Helper to write file safely
function writeFile(filename: string, content: string) {
  const fullPath = path.join(process.cwd(), 'src', 'data', 'questionPools', filename);
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log(`Created: ${filename} (${content.length} bytes)`);
}

console.log('Building Topic 1: Geography...');
// We will write the generator for Topic 1: Geography (Slots 1 to 5 for Set 1 to 50 = 250 distinct MCQs)
