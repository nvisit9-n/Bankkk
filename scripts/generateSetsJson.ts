import fs from 'fs';
import path from 'path';
import { generateAllFiftySets } from '../src/data/sangathitDatabase';

const sets = generateAllFiftySets();
const targetPath = path.join(process.cwd(), 'public', 'data', 'allFiftySets.json');

fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, JSON.stringify(sets, null, 2), 'utf-8');

console.log(`Generated ${sets.length} sets with ${sets[0]?.questions?.length} questions each at ${targetPath}`);
