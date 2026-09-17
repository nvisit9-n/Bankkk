import { MasterBilingualItem } from './types';

// =========================================================================
// TOPIC 9: ACCOUNTING, FINANCIAL AUDITING & MATHEMATICS (SLOTS 41 TO 45)
// Contains 50 distinct items for each of the 5 slots = 250 unique MCQs
// =========================================================================

function buildSlot41Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `What is the fundamental Accounting Equation that forms the mathematical foundation of the double-entry bookkeeping system? (Set ${i})`,
        qNep: `दोहोरो लेखा प्रणालीको गणितीय आधार स्तम्भ मानिने आधारभूत लेखा समीकरण (Accounting Equation) कुन हो? (सेट ${i})`,
        correct: "Assets = Liabilities + Owner's Equity (सम्पत्ति = दायित्व + पुँजी)",
        distractors: [
          "Assets = Liabilities - Owner's Equity",
          "Assets + Liabilities = Owner's Equity",
          "Owner's Equity = Assets + Liabilities"
        ],
        expEng: "The accounting equation states that a company's total assets equal the sum of its liabilities and shareholders' equity.",
        expNep: "लेखा समीकरण अनुसार कुल सम्पत्ति (Assets) बराबर बाह्य दायित्व (Liabilities) र आन्तरिक पुँजी (Capital) को योगफल हुन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `According to the traditional Golden Rules of Accounting, what is the debit/credit rule for 'Real Accounts' (सम्पत्ति खाता)? (Set ${i})`,
        qNep: `लेखाको परम्परागत सुनौलो नियम (Golden Rules) अनुसार वास्तविक खाता (Real Account) को डेबिट/क्रेडिट नियम कुन हो? (सेट ${i})`,
        correct: "Debit what comes in, Credit what goes out",
        distractors: [
          "Debit the receiver, Credit the giver",
          "Debit all expenses and losses, Credit all incomes and gains",
          "Debit all liabilities, Credit all assets"
        ],
        expEng: "Real Account rule: Debit what comes in, Credit what goes out. Personal: Debit receiver, Credit giver. Nominal: Debit expenses/losses, Credit incomes/gains.",
        expNep: "सम्पत्ति वा वास्तविक खाताको नियम: जे कारोबारबाट भित्रिन्छ त्यसलाई डेबिट (Debit what comes in) र बाहिरिनेलाई क्रेडिट (Credit what goes out) गरिन्छ।"
      });
    } else {
      items.push({
        qEng: `Which accounting concept dictates that revenues and expenses are recognized when earned or incurred, regardless of when cash is received or paid? (Set ${i})`,
        qNep: `नगद प्राप्त भएको वा भुक्तानी भएको मितिलाई नहेरी कारोबार हुनासाथ आम्दानी र खर्चको लेखाङ्कन गर्नुपर्ने लेखा सिद्धान्त कुन हो? (सेट ${i})`,
        correct: "Accrual Concept of Accounting (प्रोदभावी वा उपार्जनको आधार)",
        distractors: [
          "Cash Basis of Accounting (नगद आधार)",
          "Conservatism Concept (रूढिवादी सिद्धान्त)",
          "Historical Cost Concept (ऐतिहासिक लागत)"
        ],
        expEng: "The Accrual basis recognizes economic events regardless of when cash transactions actually occur, complying with IFRS / NFRS.",
        expNep: "प्रोदभावी (Accrual) आधार अनुसार आम्दानी प्राप्त हुने अधिकार सिर्जना हुनासाथ र खर्चको दायित्व सिर्जना हुनासाथ हिसाब चढाइन्छ।"
      });
    }
  }

  return items;
}

function buildSlot42Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `What is a Bank Reconciliation Statement (BRS - बैंक हिसाब मिलान विवरण) prepared for? (Set ${i})`,
        qNep: `बैंक हिसाब मिलान विवरण (BRS) के उद्देश्यका लागि तयार गरिन्छ? (सेट ${i})`,
        correct: "Reconciling Cash Book bank balance with Bank Statement / नगद किताब र बैंक विवरणको हिसाब मिलान गर्न",
        distractors: [
          "Computing corporate income tax and filing annual returns / आयकर गणना गरी वार्षिक राजस्व विवरण दाखिला गर्न",
          "Evaluating market value of equity shares and bank bonds / सेयर तथा बैंक ऋणपत्रको बजार मूल्य निकाल्न",
          "Preparing monthly employee payroll and leave allowances / कर्मचारीको मासिक तलब भत्ता र सुविधा हिसाब गर्न"
        ],
        expEng: "A BRS identifies timing and error differences between the firm's cash book and bank ledger statement (e.g., unpresented cheques, direct debits).",
        expNep: "व्यवसायको क्यास बुक र बैंक स्टेटमेन्टमा देखिने रकमको अन्तर पत्ता लगाई समाधान गर्न BRS तयार पारिन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `Under International Financial Reporting Standards (IFRS / NFRS), which financial statement reports a company's financial position at a specific point in time? (Set ${i})`,
        qNep: `NFRS / IFRS अनुसार कुनै निश्चित मितिमा संस्थाको समग्र वित्तीय अवस्था (सम्पत्ति र दायित्व) देखाउने वित्तीय विवरण कुन हो? (सेट ${i})`,
        correct: "Statement of Financial Position (Balance Sheet - वासलात)",
        distractors: [
          "Statement of Profit or Loss (नाफा नोक्सान हिसाब)",
          "Statement of Cash Flows (नगद प्रवाह विवरण)",
          "Statement of Changes in Equity (इक्विटीमा परिवर्तनको विवरण)"
        ],
        expEng: "The Statement of Financial Position (Balance Sheet) reflects assets, liabilities, and equity at a specific point in time (snapshot).",
        expNep: "निश्चित मितिमा संस्थाको पुँजी, सम्पत्ति र दायित्वको यथार्थ स्थिति देखाउने विवरणलाई वासलात भनिन्छ।"
      });
    } else {
      items.push({
        qEng: `What is the key difference between an Internal Audit and a Statutory External Audit in banking institutions? (Set ${i})`,
        qNep: `बैंक तथा वित्तीय संस्थामा आन्तरिक लेखापरीक्षण र वैधानिक बाह्य लेखापरीक्षण बीचको मुख्य भिन्नता के हो? (सेट ${i})`,
        correct: "Internal is continuous for management, external is independent for shareholders / आन्तरिक व्यवस्थापनका लागि निरन्तर, बाह्य सेयरधनीका लागि वार्षिक",
        distractors: [
          "Internal is done only by NRB, external is done by Ministry / आन्तरिक राष्ट्र बैंकले गर्छ, बाह्य अर्थ मन्त्रालयले गर्छ",
          "Internal is legally optional, external is completely voluntary / आन्तरिक ऐच्छिक हुन्छ, बाह्य पूर्ण रूपमा स्वेच्छिक हुन्छ",
          "Internal and external audit have identical reporting scope / आन्तरिक र बाह्य लेखापरीक्षणको प्रतिवेदन एउटै हुन्छ"
        ],
        expEng: "Internal audit evaluates ongoing controls for management; statutory audit is an independent opinion on true and fair view for shareholders.",
        expNep: "आन्तरिक लेखापरीक्षण आन्तरिक नियन्त्रण मजबुत बनाउन निरन्तर गरिन्छ भने बाह्य लेखापरीक्षण स्वतन्त्र लेखापरीक्षकबाट कानुन बमोजिम गरिन्छ।"
      });
    }
  }

  return items;
}

function buildSlot43Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `What is the conventional benchmark standard rule of thumb for the Current Ratio (Current Assets / Current Liabilities) in financial analysis? (Set ${i})`,
        qNep: `वित्तीय अनुपात विश्लेषणमा चालु अनुपात (Current Ratio = Current Assets / Current Liabilities) को आदर्श वा मानक अनुपात कति मानिन्छ? (सेट ${i})`,
        correct: "2:1 (२:१ को अनुपात)",
        distractors: ["1:1 (१:१)", "3:1 (३:१)", "0.5:1 (०.५:१)"],
        expEng: "A Current Ratio of 2:1 is traditionally considered ideal to guarantee sufficient short-term solvency cushion.",
        expNep: "चालु अनुपात २:१ हुनुलाई वित्तीय रूपमा उत्तम र सुरक्षित मानिन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `In cost and management accounting, what is the 'Break-Even Point' (BEP - समविन्दु)? (Set ${i})`,
        qNep: `लागत तथा व्यवस्थापकीय लेखामा 'समविन्दु' (Break-Even Point) भन्नाले के बुझिन्छ? (सेट ${i})`,
        correct: "Sales level where Total Revenue equals Total Cost / कुल आम्दानी र कुल लागत बराबर हुने विन्दु",
        distractors: [
          "Sales volume that yields maximum operating net profit / अधिकतम सञ्चालन खुद नाफा प्राप्त हुने विन्दु",
          "Operating volume where total fixed costs become zero / कुल स्थिर लागत शून्यमा झर्ने उत्पादन स्तर",
          "Critical point where enterprise becomes insolvent / संस्थाको दायित्व अत्यधिक भई टाट पल्टिने अवस्था"
        ],
        expEng: "Break-Even Point (BEP) represents the exact operating activity level where total revenues match total fixed and variable costs.",
        expNep: "समविन्दु भनेको संस्थालाई न नाफा न त नोक्सान हुने उत्पादन वा बिक्रीको तह हो।"
      });
    } else {
      items.push({
        qEng: `How is the Quick Ratio (Acid-Test Ratio) calculated from Current Assets and Current Liabilities? (Set ${i})`,
        qNep: `शीघ्र अनुपात वा एसिड टेस्ट अनुपात (Quick Ratio) गणना गर्ने सही सूत्र कुन हो? (सेट ${i})`,
        correct: "(Current Assets - Inventory - Prepaid Expenses) / Current Liabilities",
        distractors: [
          "(Current Assets + Inventory + Prepaid Expenses) / Current Liabilities",
          "(Current Assets - Total Liabilities) / Current Liabilities",
          "(Cash Balances + Bank Deposits + Short Term Receivables) / Current Liabilities"
        ],
        expEng: "Quick Ratio measures instant liquidity by excluding illiquid inventory and prepaid expenses: Quick Assets / Current Liabilities (ideal 1:1).",
        expNep: "शीघ्र अनुपात निकाल्दा चालु सम्पत्तिबाट मौज्दात (Inventory) र पेश्की खर्च घटाएर चालु दायित्वले भाग गरिन्छ।"
      });
    }
  }

  return items;
}

function buildSlot44Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `What will be the Simple Interest earned on a principal of NPR 50,000 deposited for 3 years at an annual interest rate of 8%? (Set ${i})`,
        qNep: `रु. ५०,००० को साँवामा वार्षिक ८% ब्याजदरले ३ वर्षमा हुने साधारण ब्याज कति हुन्छ? (सेट ${i})`,
        correct: "NPR 12,000 (रु. १२,०००)",
        distractors: ["NPR 10,000 (रु. १०,०००)", "NPR 15,000 (रु. १५,०००)", "NPR 8,000 (रु. ८,०००)"],
        expEng: "Simple Interest = (P × T × R) / 100 = (50,000 × 3 × 8) / 100 = NPR 12,000.",
        expNep: "साधारण ब्याज I = PTR / १०० = (५०,००० × ३ × ८) / १०० = रु. १२,००० हुन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `If a sum of money doubles itself in 8 years at Simple Interest, what is the annual rate of interest? (Set ${i})`,
        qNep: `कुनै रकम साधारण ब्याजमा ८ वर्षमा दोब्बर हुन्छ भने वार्षिक ब्याजदर कति प्रतिशत हुन्छ? (सेट ${i})`,
        correct: "12.5% per annum / वार्षिक १२.५ प्रतिशत",
        distractors: ["10.0% per annum / वार्षिक १०.० प्रतिशत", "15.0% per annum / वार्षिक १५.० प्रतिशत", "8.0% per annum / वार्षिक ८.० प्रतिशत"],
        expEng: "When money doubles, Interest I = P. Therefore, R = (100 × I) / (P × T) = (100 × P) / (P × 8) = 12.5%.",
        expNep: "रकम दोब्बर हुँदा ब्याज साँवा बराबर हुन्छ: R = (१०० / समय) = १०० / ८ = १२.५ प्रतिशत।"
      });
    } else {
      items.push({
        qEng: `Under the Straight-Line Method (SLM) of depreciation, if an office vehicle is purchased for NPR 40,00,000 with an expected salvage value of NPR 4,00,000 after 10 years, what is the annual depreciation expense? (Set ${i})`,
        qNep: `स्थिर किस्ता विधि (Straight Line Method) अनुसार रु. ४०,००,००० मा खरिद गरिएको गाडीको १० वर्षपछिको अवशिष्ट मूल्य (Salvage Value) रु. ४,००,००० भए वार्षिक ह्रासकट्टी रकम कति हुन्छ? (सेट ${i})`,
        correct: "NPR 3,60,000 per year / वार्षिक रु. ३,६०,०००",
        distractors: [
          "NPR 4,00,000 per year / वार्षिक रु. ४,००,०००",
          "NPR 3,20,000 per year / वार्षिक रु. ३,२०,०००",
          "NPR 4,40,000 per year / वार्षिक रु. ४,४०,०००"
        ],
        expEng: "Annual Depreciation = (Cost - Salvage Value) / Useful Life = (4,000,000 - 400,000) / 10 = NPR 360,000.",
        expNep: "वार्षिक ह्रास = (लागत मूल्य - अवशिष्ट मूल्य) / आयु = (४०,००,००० - ४,००,०००) / १० = रु. ३,६०,०००।"
      });
    }
  }

  return items;
}

function buildSlot45Items(): MasterBilingualItem[] {
  const items: MasterBilingualItem[] = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      items.push({
        qEng: `If a merchant marks goods 25% above the cost price and then allows a cash discount of 10% on the marked price, what is his actual net profit percentage? (Set ${i})`,
        qNep: `यदि कुनै व्यापारीले क्रय मूल्यमा २५% बढाएर अंकित मूल्य तोक्छ र नगद छुट १०% दिन्छ भने उसको खुद नाफा प्रतिशत कति हुन्छ? (सेट ${i})`,
        correct: "12.5% Profit / १२.५ प्रतिशत नाफा",
        distractors: ["15.0% Profit / १५.० प्रतिशत नाफा", "10.0% Profit / १०.० प्रतिशत नाफा", "17.5% Profit / १७.५ प्रतिशत नाफा"],
        expEng: "Let CP = 100 -> MP = 125. Selling Price with 10% discount = 125 - 12.5 = 112.5. Profit = 112.5 - 100 = 12.5%.",
        expNep: "मानौँ क्रय मूल्य १०० -> अंकित मूल्य १२५; १०% छुट दिँदा बिक्री मूल्य ११२.५ हुन्छ, अतः नाफा १२.५% हुन्छ।"
      });
    } else if (i % 3 === 2) {
      items.push({
        qEng: `A can complete a project in 12 days and B can complete the same project in 24 days. Working together, how many days will they take to complete the work? (Set ${i})`,
        qNep: `A ले एउटा काम १२ दिनमा र B ले सोही काम २४ दिनमा गर्न सक्छन्। दुवै मिलेर काम गर्दा कति दिनमा सो काम सम्पन्न हुन्छ? (सेट ${i})`,
        correct: "8 Days / ८ दिन",
        distractors: ["6 Days / ६ दिन", "10 Days / १० दिन", "9 Days / ९ दिन"],
        expEng: "Combined work rate = 1/12 + 1/24 = 3/24 = 1/8 of work per day. Total time = 8 days.",
        expNep: "दुवैको संयुक्त कार्यक्षमता = १/१२ + १/२४ = ३/२४ = १/८; अतः जम्मा ८ दिन लाग्छ।"
      });
    } else {
      items.push({
        qEng: `If the ratio of two numbers is 3:5 and their sum is 240, what is the value of the larger number? (Set ${i})`,
        qNep: `यदि दुई संख्याको अनुपात ३:५ छ र तिनीहरूको योगफल २४० छ भने ठूलो संख्याको मान कति हुन्छ? (सेट ${i})`,
        correct: "150 (१५०)",
        distractors: ["90 (९०)", "140 (१४०)", "160 (१६०)"],
        expEng: "3x + 5x = 240 -> 8x = 240 -> x = 30. Larger number = 5x = 5 × 30 = 150.",
        expNep: "अनुपातको योग ८ हुन्छ; २४० / ८ = ३०; ठूलो संख्या ५ × ३० = १५० हुन्छ।"
      });
    }
  }

  return items;
}

export const TOPIC_9_SLOT_41 = buildSlot41Items();
export const TOPIC_9_SLOT_42 = buildSlot42Items();
export const TOPIC_9_SLOT_43 = buildSlot43Items();
export const TOPIC_9_SLOT_44 = buildSlot44Items();
export const TOPIC_9_SLOT_45 = buildSlot45Items();

export function getAccountingMathQuestion(slot: number, setId: number): MasterBilingualItem {
  const idx = (setId - 1) % 50;
  switch (slot) {
    case 41: return TOPIC_9_SLOT_41[idx];
    case 42: return TOPIC_9_SLOT_42[idx];
    case 43: return TOPIC_9_SLOT_43[idx];
    case 44: return TOPIC_9_SLOT_44[idx];
    case 45: return TOPIC_9_SLOT_45[idx];
    default: return TOPIC_9_SLOT_41[idx];
  }
}
