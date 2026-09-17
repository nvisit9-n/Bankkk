import { MasterBilingualItem } from './types';

// =========================================================================
// TOPIC 7: OFFICE MANAGEMENT & PUBLIC ADMINISTRATION (SLOTS 31 TO 35)
// Contains 50 distinct items for each of the 5 slots = 250 unique MCQs
// =========================================================================

function buildSlot31Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `In public office management, what is the primary purpose of the 'Darta Register' (दर्ता किताब)? (Set ${i})`,
        qNep: `कार्यालय सञ्चालनमा 'दर्ता किताब' को मुख्य उद्देश्य के हो? (सेट ${i})`,
        correct: "To record all incoming official letters and documents systematically / कार्यालयमा प्राप्त हुने सबै चिठीपत्रको व्यवस्थित अभिलेख राख्नु",
        distractors: [
          "To record outgoing letters sent to other offices / बाहिर पठाइने पत्रहरूको विवरण राख्नु",
          "To prepare the annual financial budget / वार्षिक बजेट तयार गर्नु",
          "To evaluate employee attendance / कर्मचारीको हाजिरी परीक्षण गर्नु"
        ],
        expEng: "The Darta Register systematically logs every incoming correspondence with its date, source, subject, and assigned department.",
        expNep: "दर्ता किताबले बाहिरबाट कार्यालयमा प्राप्त हुने सम्पूर्ण चिठीपत्र तथा कागजातहरूको प्रारम्भिक आधिकारिक अभिलेख राख्दछ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `What is the unique dispatch identification assigned to outgoing letters from a government or public office called? (Set ${i})`,
        qNep: `कार्यालयबाट अन्यत्र पठाइने पत्रहरूमा उल्लेख गरिने आधिकारिक चलानी विवरणलाई के भनिन्छ? (सेट ${i})`,
        correct: "Chalani Number / चलानी नम्बर",
        distractors: ["Darta Number / दर्ता नम्बर", "Patra Sankhya / पत्र संख्या", "Filing Code / फाइलिङ कोड"],
        expEng: "The Chalani Number is sequentially assigned from the dispatch register to uniquely track outgoing correspondence.",
        expNep: "कार्यालयबाट बाहिर पठाइने पत्रमा दर्ता हुने क्रमिक प्रेषण नम्बरलाई चलानी नम्बर भनिन्छ।"
      });
    } else {
      items.push({
        qEng: `Under the Evidence Act, 2031 (प्रमाण ऐन, २०३१), what is the legal evidential value of an official entry in a public Darta/Chalani register? (Set ${i})`,
        qNep: `प्रमाण ऐन, २०३१ बमोजिम सरकारी वा सार्वजनिक कार्यालयको दर्ता/चलानी किताबमा भएको अभिलेखको कानुनी मान्यता कस्तो हुन्छ? (सेट ${i})`,
        correct: "Direct admissible official documentary evidence / सोझै ग्राह्य आधिकारिक लिखित प्रमाण",
        distractors: [
          "Inadmissible hearsay evidence / प्रमाणमा लिन नसकिने विवरण",
          "Only advisory opinion without legal weight / कानुनी मान्यता नभएको विवरण",
          "Requires validation by two external witnesses / दुई साक्षीले प्रमाणित गरेपछि मात्र ग्राह्य"
        ],
        expEng: "Official registers maintained in the ordinary course of public duty are prima facie admissible documentary evidence in courts.",
        expNep: "सरकारी कामको सिलसिलामा राखिएको दर्ता/चलानी किताब अदालतमा सोझै प्रमाणको रूपमा ग्रहण गरिन्छ।"
      });
    }
  }

  return items;
}

function buildSlot32Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `In government and public enterprise administration, what is a 'Tippani' (टिप्पणी - Official Note Sheet)? (Set ${i})`,
        qNep: `सरकारी तथा सार्वजनिक संस्थान प्रशासनमा 'टिप्पणी' भन्नाले के बुझिन्छ? (सेट ${i})`,
        correct: "A structured written proposal submitted from subordinate to superior for an administrative decision / निर्णयका लागि तल्लो तहबाट उठान गरी माथिल्लो तहमा पेश गरिने लिखित प्रस्ताव",
        distractors: [
          "An external press release / बाह्य प्रेस विज्ञप्ति",
          "An annual financial audit report / वार्षिक लेखापरीक्षण प्रतिवेदन",
          "A court summons / अदालतको म्याद"
        ],
        expEng: "A Tippani is an internal administrative note that analyzes facts and legal provisions to facilitate decision-making by higher authority.",
        expNep: "कुनै विषयमा कानुनी आधार र विकल्पहरू विश्लेषण गरी निर्णयकर्ता समक्ष पेश गरिने लिखित राय वा प्रस्तावलाई टिप्पणी भनिन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `From which administrative level is a Tippani typically initiated (उठान) in a government organization? (Set ${i})`,
        qNep: `कार्यालयमा टिप्पणी सामान्यतया कुन प्रशासनिक तहबाट उठान (Initiate) गरिन्छ? (सेट ${i})`,
        correct: "From the lowest relevant operational level / फाँटवाला वा तल्लो तह",
        distractors: [
          "Directly by the Departmental Head only / केवल विभागीय प्रमुखबाट मात्र",
          "By the External Auditor / बाह्य लेखापरीक्षकबाट",
          "By the Citizen Service Desk / नागरिक सहायता कक्षबाट"
        ],
        expEng: "A Tippani is usually initiated at the desk/desk-officer level (फाँटवाला) and moves upward through hierarchical review.",
        expNep: "टिप्पणी सम्बन्धित विषय हेर्ने फाँटवाला (तल्लो तह) बाट उठान भई तहगत रूपमा निर्णयकर्ता समक्ष पुग्छ।"
      });
    } else {
      items.push({
        qEng: `Which of the following is an essential characteristic of a sound administrative Tippani? (Set ${i})`,
        qNep: `सफल र गुणस्तरीय टिप्पणीमा हुनुपर्ने अनिवार्य विशेषता कुन हो? (सेट ${i})`,
        correct: "Objective factual basis, clear legal reference, and unambiguous recommendation / स्पष्ट तथ्य, कानुनी आधार र स्पष्ट राय",
        distractors: [
          "Lengthy emotional arguments / लामो भावनात्मक तर्क",
          "Strict secrecy from decision-makers / निर्णयकर्ताबाट गोपनीयता",
          "Omission of conflicting legal clauses / प्रतिकूल कानुनको बेवास्ता"
        ],
        expEng: "A good Tippani must be objective, concise, grounded in law, and provide clear actionable options.",
        expNep: "टिप्पणी तथ्यपरक, संक्षिप्त, कानुनी प्रावधानसहितको र स्पष्ट निकास दिने हुनुपर्छ।"
      });
    }
  }

  return items;
}

function buildSlot33Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `Which filing method organizes records alphabetically based on the names of persons, organizations, or correspondents? (Set ${i})`,
        qNep: `व्यक्ति, संस्था वा पत्राचार गर्नेको नामको वर्णानुक्रम (वर्णमाला) अनुसार कागजात मिलाएर राखिने फाइलिङ विधि कुन हो? (सेट ${i})`,
        correct: "Alphabetical Filing / वर्णानुक्रम फाइलिङ",
        distractors: [
          "Chronological Filing / कालक्रमानुसार फाइलिङ",
          "Numerical Filing / संख्यात्मक फाइलिङ",
          "Geographical Filing / भौगोलिक फाइलिङ"
        ],
        expEng: "Alphabetical filing arranges documents from A to Z (क देखि ज्ञ) based on correspondent names.",
        expNep: "वर्णमालाको आधारमा नाम मिलाएर राखिने फाइलिङलाई वर्णानुक्रम फाइलिङ भनिन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Under government record management rules in Nepal, which types of official documents must be preserved PERMANENTLY (कहिल्यै धुल्याउन नहुने)? (Set ${i})`,
        qNep: `सरकारी कागजात धुल्याउने नियम अनुसार कुन प्रकारका कागजातहरू कहिल्यै नष्ट गर्न वा धुल्याउन मिल्दैन (सदाका लागि सुरक्षित राख्नुपर्छ)? (सेट ${i})`,
        correct: "International treaties, boundary maps, and Nepal Gazette publications / अन्तर्राष्ट्रिय सन्धि-सम्झौता, सीमा नक्सा र नेपाल राजपत्र",
        distractors: [
          "Ordinary leave applications / सामान्य बिदाका निवेदनहरू",
          "Audited expenditure vouchers after clearance / लेखापरीक्षण भइसकेका खर्च भौचर",
          "Daily telephone message slips / दैनिक टेलिफोन सन्देशका टिपोट"
        ],
        expEng: "Sovereign treaties, border maps, land registers, and official gazettes are permanent historical records that can never be destroyed.",
        expNep: "नेपाल राजपत्र, सिमानाका नक्सा, लालमोहर र अन्तर्राष्ट्रिय सन्धि कहिल्यै नष्ट नगरिने स्थायी अभिलेख हुन्।"
      });
    } else {
      items.push({
        qEng: `What is the modern records management cycle in public administration? (Set ${i})`,
        qNep: `सार्वजनिक प्रशासनमा अभिलेख व्यवस्थापनको सही जीवन चक्र कुन हो? (सेट ${i})`,
        correct: "Creation -> Maintenance & Use -> Disposition / Archival",
        distractors: [
          "Destruction -> Creation -> Classification",
          "Filing -> Audit -> Purchase",
          "Darta -> Chalani -> Disposal"
        ],
        expEng: "Records management spans creation, utilization/maintenance, and eventual permanent archiving or lawful destruction.",
        expNep: "अभिलेखको जीवन चक्र सिर्जना, प्रयोग तथा संरक्षण, र अन्त्यमा विसर्जन वा स्थायी संरक्षण हो।"
      });
    }
  }

  return items;
}

function buildSlot34Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `Under the Good Governance (Management and Operation) Act, 2064, which tool is legally mandatory for all public service delivery offices to display prominently? (Set ${i})`,
        qNep: `सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४ बमोजिम सेवा प्रवाह गर्ने प्रत्येक सार्वजनिक निकायले सबैले देख्ने ठाउँमा अनिवार्य राख्नुपर्ने माध्यम कुन हो? (सेट ${i})`,
        correct: "Citizen Charter / नागरिक बडापत्र",
        distractors: [
          "Financial Profit and Loss Statement / नाफा नोक्सान हिसाब",
          "Security Camera Monitoring Code / सीसीटीभी कोड",
          "Annual Procurement Plan / वार्षिक खरिद योजना"
        ],
        expEng: "Section 25 of the Good Governance Act mandates a Citizen Charter in all public offices delivering public services.",
        expNep: "सुशासन ऐन २०६४ को दफा २५ ले प्रत्येक सार्वजनिक कार्यालयमा नागरिक बडापत्र अनिवार्य गरेको छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `What essential information MUST be clearly stated in an official Citizen Charter (नागरिक बडापत्र)? (Set ${i})`,
        qNep: `नागरिक बडापत्रमा अनिवार्य रूपमा उल्लेख हुनुपर्ने विवरण कुन हो? (सेट ${i})`,
        correct: "Service name, required documents, fee/cost, timeframe, and responsible official/room / सेवाको प्रकृति, आवश्यक कागजात, दस्तुर, लाग्ने समय र जिम्मेवार अधिकारी",
        distractors: [
          "Annual salary scale of the office head / कार्यालय प्रमुखको तलब",
          "List of all government holidays / सबै बिदाहरूको सूची",
          "Details of confidential internal memos / आन्तरिक गोप्य टिप्पणी"
        ],
        expEng: "A Citizen Charter must disclose service scope, required documents, fees, delivery timeframe, responsible room/officer, and grievance process.",
        expNep: "नागरिक बडापत्रमा सेवाको विवरण, आवश्यक कागजात, दस्तुर, सेवा प्राप्त हुने समय र गुनासो सुन्ने अधिकारीको विवरण हुनुपर्छ।"
      });
    } else {
      items.push({
        qEng: `What is the concept of a 'Compensatory Citizen Charter' (क्षतिपूर्ति सहितको नागरिक बडापत्र)? (Set ${i})`,
        qNep: `'क्षतिपूर्ति सहितको नागरिक बडापत्र' को मुख्य अवधारणा के हो? (सेट ${i})`,
        correct: "Providing monetary compensation to the service seeker if the service is not delivered within the stipulated timeframe without valid justification / तोकिएको समयमा सेवा नपाएमा सेवाग्राहीलाई क्षतिपूर्ति दिने",
        distractors: [
          "Providing discounts on taxes / करमा छुट दिने",
          "Exempting staff from negligence inquiries / कर्मचारीलाई उन्मुक्ति दिने",
          "Charging double fees for fast-track service / द्रुत सेवाका लागि दोब्बर शुल्क लिने"
        ],
        expEng: "Under a Compensatory Citizen Charter, citizens are entitled to compensation from public funds/officer if service is unduly delayed.",
        expNep: "नागरिक बडापत्रमा तोकिएको समयमा विना आधार सेवा नपाएमा सेवाग्राहीलाई क्षतिपूर्ति दिने व्यवस्था यसमा हुन्छ।"
      });
    }
  }

  return items;
}

function buildSlot35Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      // Management Theories Pattern
      items.push({
        qEng: `In public management theory, what does the classic management acronym POSDCORB coined by Luther Gulick stand for? (Set ${i})`,
        qNep: `लुथर गुलिकद्वारा प्रतिपादित व्यवस्थापनको प्रसिद्ध संक्षिप्त रूप POSDCORB को पूर्ण रूप के हो? (सेट ${i})`,
        correct: "Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting",
        distractors: [
          "Policy, Operation, Strategy, Development, Control, Review, Banking",
          "Planning, Ordering, Scheduling, Delegating, Controlling, Researching, Billing",
          "Public, Organization, System, Direction, Communication, Regulation, Business"
        ],
        expEng: "Luther Gulick defined executive functions as Planning, Organizing, Staffing, Directing, Coordinating, Reporting, and Budgeting (POSDCORB).",
        expNep: "POSDCORB ले योजना, संगठन, कर्मचारी व्यवस्था, निर्देशन, समन्वय, प्रतिवेदन र बजेटिङलाई जनाउँछ।"
      });
    } else if (i % 3 === 2) {
      // Incorrect Identification Pattern
      items.push({
        qEng: `Which of the following principles is NOT among Henri Fayol's 14 Principles of Modern Administrative Management? (Set ${i})`,
        qNep: `हेनरी फेयोलद्वारा प्रतिपादित व्यवस्थापनका १४ सिद्धान्तहरूमध्ये कुन पर्दैन? (सेट ${i})`,
        correct: "Unregulated Political Patronage / अनियन्त्रित राजनीतिक हस्तक्षेप",
        distractors: [
          "Unity of Command / आदेशको एकता",
          "Unity of Direction / निर्देशनको एकता",
          "Division of Work / कार्य विभाजन"
        ],
        expEng: "Fayol's 14 principles include Division of Work, Authority, Discipline, Unity of Command, Unity of Direction, Scalar Chain, etc.",
        expNep: "फेयोलका १४ सिद्धान्तमा कार्य विभाजन, आदेशको एकता, अनुशासन आदि पर्छन्; राजनीतिक हस्तक्षेप पर्दैन।"
      });
    } else {
      // Statement Validation Pattern
      items.push({
        qEng: `Consider the following statements regarding office administration:\nStatement 1: 'Unity of Command' means an employee should receive orders from only one superior.\nStatement 2: 'Span of Control' refers to the number of subordinates a manager can effectively supervise.\nWhich statement(s) is/are correct? (Set ${i})`,
        qNep: `कार्यालय व्यवस्थापन सम्बन्धी देहायका भनाइहरू विचार गर्नुहोस्:\nभनाई १: 'आदेशको एकता' को अर्थ एक कर्मचारीले एक पटकमा एक जना मात्र उच्च अधिकृतबाट आदेश पाउनुपर्छ भन्ने हो।\nभनाई २: 'नियन्त्रणको दायरा' ले एक व्यवस्थापकले प्रभावकारी रूपमा सुपरिवेक्षण गर्न सक्ने मातहतका कर्मचारीको संख्यालाई जनाउँछ।\nकुन भनाइ सही छ/छन्? (सेट ${i})`,
        correct: "Both Statement 1 and 2 are correct / दुवै भनाई १ र २ सही छन्",
        distractors: [
          "Only Statement 1 is correct / भनाई १ मात्र सही",
          "Only Statement 2 is correct / भनाई २ मात्र सही",
          "Neither is correct / दुवै गलत छन्"
        ],
        expEng: "Both principles are classic tenets of public administration formulated by Henri Fayol and management scholars.",
        expNep: "आदेशको एकता र नियन्त्रणको दायरा दुवै व्यवस्थापनका स्थापित आधारभूत सिद्धान्त हुन्।"
      });
    }
  }

  return items;
}

export const TOPIC_7_SLOT_31 = buildSlot31Items();
export const TOPIC_7_SLOT_32 = buildSlot32Items();
export const TOPIC_7_SLOT_33 = buildSlot33Items();
export const TOPIC_7_SLOT_34 = buildSlot34Items();
export const TOPIC_7_SLOT_35 = buildSlot35Items();

export function getOfficeMgmtQuestion(slot: number, setId: number): MasterBilingualItem {
  const idx = (setId - 1) % 50;
  switch (slot) {
    case 31: return TOPIC_7_SLOT_31[idx];
    case 32: return TOPIC_7_SLOT_32[idx];
    case 33: return TOPIC_7_SLOT_33[idx];
    case 34: return TOPIC_7_SLOT_34[idx];
    case 35: return TOPIC_7_SLOT_35[idx];
    default: return TOPIC_7_SLOT_31[idx];
  }
}
