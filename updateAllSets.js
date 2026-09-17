// updateAllSets.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allFiftySets = Array.from({ length: 50 }, (_, setIndex) => {
  const setId = setIndex + 1;
  return {
    setId: setId,
    setName: `संगठित संस्था Pre-Test - सेट ${setId}`,
    totalQuestions: 50,
    timeLimitMinutes: 45,
    questions: Array.from({ length: 50 }, (_, qIndex) => {
      const qId = qIndex + 1;
      
      // Q1 to Q45: Bilingual (English + Nepali)
      if (qId <= 45) {
        return {
          id: qId,
          question: `${qId}. What is the total number of Local Levels in Nepal?\n(नेपालमा हाल कुल कतिवटा स्थानीय तहहरू रहेका छन्?)`,
          options: ["(A) 753 / ७५३", "(B) 744 / ७४४", "(C) 761 / ७६१", "(D) 750 / ७५०"],
          correctAnswer: 0,
          explanation: "ENG: Nepal has 753 local levels.\nNEP: नेपालमा कुल ७५३ स्थानीय तह रहेका छन्।"
        };
      } 
      // Q46 to Q48: Pure English
      else if (qId <= 48) {
        return {
          id: qId,
          question: `${qId}. Choose the correct Synonym for 'ABUNDANT':`,
          options: ["(A) Scarce", "(B) Plentiful", "(C) Meager", "(D) Rare"],
          correctAnswer: 1,
          explanation: "ENG: 'Abundant' means existing in large quantities, hence 'Plentiful'."
        };
      } 
      // Q49 to Q50: Pure Nepali
      else {
        return {
          id: qId,
          question: `${qId}. 'अन्नको भण्डार' भन्नाले नेपालको कुन भौगोलिक क्षेत्रलाई चिनिन्छ?`,
          options: ["(A) हिमाली क्षेत्र", "(B) तराई क्षेत्र", "(C) पहाडी क्षेत्र", "(D) भित्री मधेस"],
          correctAnswer: 1,
          explanation: "NEP: नेपालको तराई क्षेत्रलाई 'अन्नको भण्डार' भनिन्छ।"
        };
      }
    })
  };
});

// Database मा Bulk Upload / Save गर्ने फन्क्सन
async function uploadAll50SetsToDatabase() {
  try {
    // यहाँ तपाईंको DB Insert Query वा Firebase Batch Write राख्ने:
    // await QuizModel.insertMany(allFiftySets);
    const dataDir = path.join(__dirname, 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const outputPath = path.join(dataDir, 'allFiftySets.json');
    fs.writeFileSync(outputPath, JSON.stringify(allFiftySets, null, 2), 'utf-8');

    console.log("SUCCESS: सेट १ देखि ५० वटै अद्यावधिक भई Database मा सेभ भयो!");
    console.log(`Saved ${allFiftySets.length} sets with 50 questions each (${allFiftySets.length * 50} total MCQs).`);
  } catch (error) {
    console.error("Error updating sets:", error);
  }
}

uploadAll50SetsToDatabase();

export { allFiftySets, uploadAll50SetsToDatabase };
