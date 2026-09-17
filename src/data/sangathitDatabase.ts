import { RawSangathitQuestion, RawSangathitSet, QuizSet, Question } from '../types';
import { generateAllSets, generateSingleSet } from './setGenerators';
import { splitBilingualQuestion } from '../components/quiz/FormattedQuestionContent';
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
} from './topicPools';

/**
 * 50 Full Practice Sets for Sangathit Sastha (सङ्गठित संस्था Pre-Test - सेट १ देखि ५०)
 * Conforms strictly to Loksewa & Banking Syllabus (2083/84 BS updated data):
 * - Exactly 50 MCQs per set (50 sets x 50 MCQs = 2,500 total MCQs)
 * - Q1 to Q45: Bilingual (Nepali + English)
 * - Q46 to Q48: Pure English
 * - Q49 to Q50: Pure Nepali
 * - Distributed correct answers across indices 0, 1, 2, and 3 (Options A, B, C, D)
 * - Complete, authoritative step-by-step explanations
 * - 100% accurate factual data (Prithvi Narayan Shah China/India, NRB 2083/84 rates, 16th plan, etc.)
 */

interface MasterBilingualItem {
  qEng: string;
  qNep: string;
  correct: string;
  distractors: [string, string, string];
  expEng: string;
  expNep: string;
  syllabusModule: string;
  actSection?: string;
}

interface MasterSingleLanguageItem {
  question: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
}

// Master pool of authentic, 2083/84 BS updated Bilingual MCQs (Q1–Q45)
const MASTER_BILINGUAL_POOL: MasterBilingualItem[] = [
  // 1. History & Prithvi Narayan Shah (Factual Error Correction)
  {
    qEng: "In his Divyopadesh, Prithvi Narayan Shah described Nepal as a 'yam between two stones'. Which two countries was he referring to?",
    qNep: "पृथ्वीनारायण शाहको दिव्योपदेशमा 'नेपाल दुई ढुङ्गाबीचको तरुल जस्तै हो' भन्नाले कुन दुई देशलाई सङ्केत गरिएको छ?",
    correct: "China & India / चीन र भारत (तत्कालीन ब्रिटिस भारत र तिब्बत/चीन)",
    distractors: [
      "Bhutan & Sikkim / भूटान र सिक्किम",
      "Myanmar & Afghanistan / म्यानमार र अफगानिस्तान",
      "Tibet & Ladakh / तिब्बत र लद्दाख"
    ],
    expEng: "Prithvi Narayan Shah characterized Nepal's geopolitical position as a 'yam between two stones', referring to the giant neighbors China and India (then British India and Tibet/Qing China).",
    expNep: "पृथ्वीनारायण शाहले नेपालको भूराजनीतिक संवेदनशीलता औंल्याउँदै उत्तरको चीन र दक्षिणको ब्रिटिस भारतलाई 'दुई ढुङ्गा' र नेपाललाई बीचको 'तरुल' सँग तुलना गरेका हुन्।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  // 2. Geography & Local Levels
  {
    qEng: "According to the Constitution of Nepal, what is the total number of Local Levels (स्थानीय तह) in Nepal?",
    qNep: "नेपालको संविधान अनुसार नेपालमा हाल कुल कतिवटा स्थानीय तहहरू रहेका छन्?",
    correct: "753 / ७५३ स्थानीय तह",
    distractors: [
      "744 / ७४४ स्थानीय तह",
      "761 / ७६१ स्थानीय तह",
      "750 / ७५० स्थानीय तह"
    ],
    expEng: "Nepal has a total of 753 local levels comprising 6 Metropolitan Cities, 11 Sub-metropolitan Cities, 276 Municipalities, and 460 Rural Municipalities.",
    expNep: "नेपालमा ६ महानगरपालिका, ११ उपमहानगरपालिका, २७६ नगरपालिका र ४६० गाउँपालिका गरी कुल ७५३ स्थानीय तहहरू रहेका छन्।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  // 3. Banking Law - NRB Act 2058 Governor Tenure
  {
    qEng: "According to Nepal Rastra Bank Act 2058, what is the official tenure of the Governor?",
    qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ अनुसार गभर्नरको पदावधि कति वर्षको हुन्छ?",
    correct: "5 Years / ५ वर्ष",
    distractors: [
      "4 Years / ४ वर्ष",
      "6 Years / ६ वर्ष",
      "3 Years / ३ वर्ष"
    ],
    expEng: "As per Section 15 of Nepal Rastra Bank Act 2058, the tenure of the Governor, Deputy Governors, and Directors is 5 years.",
    expNep: "नेपाल राष्ट्र बैंक ऐन २०५८ को दफा १५ बमोजिम नेपाल सरकारले नियुक्त गर्ने गभर्नरको पदावधि ५ वर्षको हुनेछ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा १५, नेपाल राष्ट्र बैंक ऐन २०५८"
  },
  // 4. Banking Offence Act 2064 - Cheque Bounce (Factual Correction)
  {
    qEng: "Under the Banking Offence and Punishment Act 2064, issuing a cheque without sufficient account balance (Cheque Bounce) is classified as what?",
    qNep: "बैंकिङ कसुर तथा सजाय ऐन २०६४ अनुसार खातामा पर्याप्त मौज्दात नभई चेक जारी गर्ने (Cheque Bounce) कार्यलाई कुन कसुर मानिन्छ?",
    correct: "Banking Offence / बैंकिङ कसुर (बिगो भराई बिगो बमोजिम जरिवाना र कैद)",
    distractors: [
      "Civil Dispute / सामान्य देवानी विवाद मात्र",
      "Breach of Contract / सामान्य करार उल्लंघन",
      "Administrative Infraction / प्रशासनिक जरिवाना मात्र"
    ],
    expEng: "Under Section 3(c) of the Banking Offence and Punishment Act 2064, knowingly issuing an overdraft cheque without funds is a criminal Banking Offence punishable with recovery, fine, and imprisonment.",
    expNep: "बैंकिङ कसुर तथा सजाय ऐन २०६४ को दफा ३(ग) बमोजिम खातामा पर्याप्त रकम नभएको जानीजानी चेक काट्नु बैंकिङ कसुर हो, जसमा बिगो असुल, बिगो बमोजिम जरिवाना र कैद सजायको व्यवस्था छ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा ३(ग), बैंकिङ कसुर ऐन २०६४"
  },
  // 5. Economic Indicators - NRB Monetary Policy Rates (2083/84 BS Updated)
  {
    qEng: "Under Nepal Rastra Bank's updated Monetary Policy, what is the current Policy Rate (नीतिगत दर)?",
    qNep: "नेपाल राष्ट्र बैंकको अद्यावधिक मौद्रिक नीति अनुसार हाल नीतिगत दर (Policy Rate) कति प्रतिशत कायम गरिएको छ?",
    correct: "5.0% / ५.० प्रतिशत",
    distractors: [
      "6.5% / ६.५ प्रतिशत",
      "5.5% / ५.५ प्रतिशत",
      "4.0% / ४.० प्रतिशत"
    ],
    expEng: "Under NRB's interest rate corridor, the Policy Rate (Repo rate) is maintained at 5.0%, while Bank Rate is 6.5% and Deposit Collection Rate is 3.0%.",
    expNep: "नेपाल राष्ट्र बैंकको अद्यावधिक मौद्रिक नीति अनुसार नीतिगत दर ५.०%, बैंक दर ६.५% र निक्षेप सङ्कलन दर ३.०% कायम गरिएको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  // 6. Mandatory Reserve - CRR Rate
  {
    qEng: "What is the Cash Reserve Ratio (CRR) required to be maintained by Commercial Banks ('A' Class) with NRB?",
    qNep: "नेपाल राष्ट्र बैंकको निर्देशिका अनुसार 'क' वर्गका वाणिज्य बैंकहरूले कायम गर्नुपर्ने अनिवार्य नगद मौज्दात अनुपात (CRR) कति छ?",
    correct: "4.0% / ४.० प्रतिशत",
    distractors: [
      "3.5% / ३.५ प्रतिशत",
      "5.0% / ५.० प्रतिशत",
      "6.0% / ६.० प्रतिशत"
    ],
    expEng: "NRB Monetary Policy mandates a uniform Cash Reserve Ratio (CRR) of 4.0% for commercial banks, development banks, and finance companies.",
    expNep: "नेपाल राष्ट्र बैंकले 'क', 'ख' र 'ग' वर्गका सम्पूर्ण बैंक तथा वित्तीय संस्थाहरूका लागि अनिवार्य नगद अनुपात (CRR) ४.०% अनिवार्य गरेको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  // 7. Statutory Liquidity Ratio (SLR)
  {
    qEng: "What is the Statutory Liquidity Ratio (SLR) requirement for Commercial Banks in Nepal?",
    qNep: "नेपालका वाणिज्य बैंकहरूले कायम गर्नुपर्ने वैधानिक तरलता अनुपात (SLR) कति प्रतिशत रहेको छ?",
    correct: "12.0% / १२.० प्रतिशत",
    distractors: [
      "10.0% / १०.० प्रतिशत",
      "15.0% / १५.० प्रतिशत",
      "8.0% / ८.० प्रतिशत"
    ],
    expEng: "Commercial banks are required to maintain an SLR of 12.0%, while development banks and finance companies maintain 10.0%.",
    expNep: "वाणिज्य बैंकहरूले कुल निक्षेपको १२.०% तथा विकास बैंक र वित्त कम्पनीहरूले १०.०% वैधानिक तरलता अनुपात (SLR) कायम गर्नुपर्छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  // 8. Foreign Exchange Reserve Target (Factual Correction)
  {
    qEng: "For how many months of prospective imports of goods and services does NRB aim to maintain foreign exchange reserves?",
    qNep: "नेपालको विदेशी मुद्रा सञ्चितिले कम्तिमा कति महिनाको वस्तु तथा सेवा आयात धान्न सक्ने गरी मौद्रिक नीतिले लक्ष्य निर्धारण गर्दछ?",
    correct: "Minimum 7 Months / कम्तिमा ७ महिनाको वस्तु तथा सेवा आयात",
    distractors: [
      "Minimum 5 Months / कम्तिमा ५ महिना",
      "Minimum 10 Months / कम्तिमा १० महिना",
      "Minimum 3 Months / कम्तिमा ३ महिना"
    ],
    expEng: "NRB Monetary Policy explicitly aims to maintain foreign exchange reserves adequate to cover at least 7 months of prospective imports of goods and services.",
    expNep: "नेपाल राष्ट्र बैंकको मौद्रिक नीतिले कम्तिमा ७ महिनाको वस्तु तथा सेवाको आयात धान्न पुग्ने विदेशी विनिमय सञ्चिति सञ्चित राख्ने लक्ष्य निर्धारण गर्दछ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  // 9. Inflation & CPI Publication (Factual Correction)
  {
    qEng: "Which institution compiles and publishes the monthly Consumer Price Index (CPI) and inflation data in Nepal?",
    qNep: "नेपालमा उपभोक्ता मूल्य सूचकाङ्क (CPI) र मासिक मुद्रास्फीति तथ्याङ्क कुन निकायले गणना र प्रकाशन गर्दछ?",
    correct: "Nepal Rastra Bank (Research Dept.) / नेपाल राष्ट्र बैंक (अनुसन्धान विभाग)",
    distractors: [
      "National Statistics Office / राष्ट्रिय तथ्याङ्क कार्यालय",
      "Ministry of Finance / अर्थ मन्त्रालय",
      "National Planning Commission / राष्ट्रिय योजना आयोग"
    ],
    expEng: "Nepal Rastra Bank's Research Department compiles and publishes monthly inflation and Consumer Price Index (CPI) in its macroeconomic report.",
    expNep: "नेपाल राष्ट्र बैंकको अनुसन्धान विभागले प्रत्येक महिना 'देशको वर्तमान आर्थिक तथा वित्तीय स्थिति' प्रतिवेदन मार्फत CPI र मुद्रास्फीति सार्वजनिक गर्दछ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  // 10. 16th Periodic Plan Target (2081/82 - 2085/86)
  {
    qEng: "What is the average annual economic growth rate (GDP growth) target set by Nepal's 16th Periodic Plan (२०८१/८२ - २०८५/८६)?",
    qNep: "नेपालको १६औं आवधिक योजना (२०८१/८२ - २०८५/८६) ले औसत वार्षिक आर्थिक वृद्धिदर कति प्रतिशत हासिल गर्ने लक्ष्य राखेको छ?",
    correct: "7.3% / ७.३ प्रतिशत",
    distractors: [
      "6.5% / ६.५ प्रतिशत",
      "8.5% / ८.५ प्रतिशत",
      "5.8% / ५.८ प्रतिशत"
    ],
    expEng: "The 16th Periodic Plan (2081/82-2085/86) sets an average economic growth target of 7.3% under the theme 'Good Governance, Social Justice and Prosperity'.",
    expNep: "१६औं पञ्चवर्षीय योजनाले 'सुशासन, सामाजिक न्याय र समृद्धि' को मूल सोचसहित औसत वार्षिक ७.३% आर्थिक वृद्धि हासिल गर्ने लक्ष्य लिएको छ।",
    syllabusModule: "आर्थिक विकास, सूचक र मौद्रिक नीति"
  },
  // 11. Public Enterprises - Total Count in Nepal
  {
    qEng: "According to the latest Yellow Book (Annual Review of Public Enterprises) published by the Ministry of Finance, how many Public Enterprises exist in Nepal?",
    qNep: "अर्थ मन्त्रालयद्वारा प्रकाशित सार्वजनिक संस्थानहरूको वार्षिक स्थिति समीक्षा (पहेँलो किताब) अनुसार नेपालमा कुल कतिवटा सार्वजनिक संस्थानहरू रहेका छन्?",
    correct: "44 Public Enterprises / कुल ४४ वटा सार्वजनिक संस्थान",
    distractors: [
      "39 Public Enterprises / ३९ वटा संस्थान",
      "48 Public Enterprises / ४८ वटा संस्थान",
      "41 Public Enterprises / ४१ वटा संस्थान"
    ],
    expEng: "According to the Ministry of Finance Annual Performance Review, there are 44 public enterprises in Nepal, across industrial, commercial, financial, and service sectors.",
    expNep: "अर्थ मन्त्रालयको पछिल्लो प्रतिवेदन अनुसार नेपालमा ४४ वटा सार्वजनिक संस्थान छन्, जसमा २६ नाफामा, १५ घाटामा र ३ वटाको कारोबार शून्य रहेको छ।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  // 12. Public Enterprises - Parliamentary Oversight (PAC) (Factual Correction)
  {
    qEng: "Which Parliamentary Committee is primarily responsible for scrutinizing the financial irregularities and Auditor General's report of Public Enterprises?",
    qNep: "सार्वजनिक संस्थानमा हुने वित्तीय अनियमितता र महालेखा परीक्षकको प्रतिवेदनमाथि संसदीय छानबिन कुन समितिले गर्दछ?",
    correct: "Public Accounts Committee (PAC) / सार्वजनिक लेखा समिति",
    distractors: [
      "State Affairs Committee / राज्य व्यवस्था समिति",
      "Finance Committee / अर्थ समिति",
      "Development Committee / विकास समिति"
    ],
    expEng: "The Public Accounts Committee (PAC) of the House of Representatives examines the annual report of the Auditor General regarding public bodies and enterprises.",
    expNep: "प्रतिनिधि सभा अन्तर्गतको सार्वजनिक लेखा समिति (PAC) ले महालेखा परीक्षकको वार्षिक प्रतिवेदनमा औंल्याइएका संस्थानका बेरुजु र अनियमितताको छानबिन गर्दछ।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  // 13. Audit of Public Enterprises - Constitution Art 241
  {
    qEng: "Under Article 241 of the Constitution of Nepal, who conducts the final audit of Public Enterprises with more than 50% government ownership?",
    qNep: "नेपालको संविधानको धारा २४१ अनुसार ५०% भन्दा बढी सरकारी स्वामित्व भएका सार्वजनिक संस्थानहरूको अन्तिम लेखापरीक्षण कसले गर्दछ?",
    correct: "Auditor General of Nepal / महालेखा परीक्षक",
    distractors: [
      "Internal Auditor only / आन्तरिक लेखापरीक्षक मात्र",
      "Chartered Accountants Association / निजी लेखापरीक्षक संघ",
      "Ministry of Finance / अर्थ मन्त्रालय"
    ],
    expEng: "Article 241 of the Constitution mandates that the Auditor General audits accounts of all government offices and corporate bodies owned more than 50% by the government.",
    expNep: "नेपालको संविधानको धारा २४१ बमोजिम नेपाल सरकारको ५० प्रतिशतभन्दा बढी सेयर स्वामित्व भएका सबै संगठित संस्थाहरूको लेखापरीक्षण महालेखा परीक्षकबाट हुन्छ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "धारा २४१, नेपालको संविधान"
  },
  // 14. Company Act 2063 - Public Limited Promoters (Factual Correction)
  {
    qEng: "Under the Company Act 2063, what is the minimum number of promoters required to incorporate a Public Limited Company?",
    qNep: "कम्पनी ऐन २०६३ अनुसार पब्लिक लिमिटेड कम्पनी स्थापना गर्न कम्तिमा कति जना संस्थापक शेयरधनी हुनुपर्छ?",
    correct: "Minimum 7 Promoters / कम्तिमा ७ जना (अधिकतम असीमित)",
    distractors: [
      "Minimum 5 Promoters / कम्तिमा ५ जना",
      "Minimum 2 Promoters / कम्तिमा २ जना",
      "Minimum 10 Promoters / कम्तिमा १० जना"
    ],
    expEng: "Under Section 3(2) of Company Act 2063, a Public Limited Company requires a minimum of 7 promoters with no maximum ceiling, while a Private Company requires 1 to 101 promoters.",
    expNep: "कम्पनी ऐन २०६३ अनुसार पब्लिक कम्पनी स्थापना गर्न कम्तिमा ७ जना संस्थापक हुनुपर्छ (अधिकतम कुनै सीमा छैन) भने प्राइभेट कम्पनीमा १ देखि १०१ जनासम्म हुन्छन्।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा ३, कम्पनी ऐन २०६३"
  },
  // 15. Constitution - Right to Information (Art 27)
  {
    qEng: "Which article of the Constitution of Nepal guarantees the Fundamental 'Right to Information' (सूचनाको हक)?",
    qNep: "नेपालको संविधानको कुन धारामा 'सूचनाको हक' सम्बन्धी मौलिक हकको व्यवस्था गरिएको छ?",
    correct: "Article 27 / धारा २७",
    distractors: [
      "Article 25 / धारा २५",
      "Article 21 / धारा २१",
      "Article 30 / धारा ३०"
    ],
    expEng: "Article 27 guarantees every citizen the right to demand and receive information on any matter of their interest or public interest.",
    expNep: "नेपालको संविधानको धारा २७ मा प्रत्येक नागरिकलाई आफ्नो वा सार्वजनिक सरोकारको कुनै पनि विषयको सूचना माग्ने र पाउने हक प्रत्याभूत गरिएको छ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "धारा २७, नेपालको संविधान"
  },
  // 16. BAFIA 2073 - Capital Adequacy Ratio (CAR)
  {
    qEng: "Under BAFIA 2073 and NRB Directives, what is the minimum regulatory Capital Adequacy Ratio (CAR) for commercial banks under Basel III?",
    qNep: "बाफिया २०७३ र राष्ट्र बैंक निर्देशिका बमोजिम वाणिज्य बैंकहरूको न्यूनतम पुँजी पर्याप्तता अनुपात (CAR) कति हुनुपर्दछ?",
    correct: "11.0% / ११.० प्रतिशत (८.५% टियर-१ र २.५% क्यापिटल बफर सहित)",
    distractors: [
      "10.0% / १०.० प्रतिशत",
      "8.5% / ८.५ प्रतिशत",
      "12.5% / १२.५ प्रतिशत"
    ],
    expEng: "Under Basel III framework enforced by NRB, commercial banks must maintain at least 11.0% total regulatory capital adequacy ratio.",
    expNep: "नेपाल राष्ट्र बैंकको क्यापिटल फ्रेमवर्क (Basel III) अनुसार वाणिज्य बैंकहरूले कुल जोखिम भारित सम्पत्तिको कम्तिमा ११% पुँजी पर्याप्तता कायम गर्नुपर्छ।",
    syllabusModule: "संविधान, कानुन र सुशासन",
    actSection: "दफा ४१, बाफिया २०७३"
  },
  // 17. International - SAARC Secretariat
  {
    qEng: "In which year and city was the permanent Secretariat of SAARC established in Nepal?",
    qNep: "सार्क (SAARC) को स्थायी सचिवालय नेपालको काठमाडौँमा कहिले स्थापना भएको हो?",
    correct: "16 January 1987 (Kathmandu) / सन् १९८७ जनवरी १६ (काठमाडौँ)",
    distractors: [
      "8 December 1985 (Dhaka) / सन् १९८५ डिसेम्बर ८",
      "1 January 1990 (New Delhi) / सन् १९९० जनवरी १",
      "4 November 1988 (Colombo) / सन् १९८८ नोभेम्बर ४"
    ],
    expEng: "The permanent Secretariat of SAARC was inaugurated in Kathmandu, Nepal on 16 January 1987 by King Birendra Bir Bikram Shah Dev.",
    expNep: "सार्कको स्थायी सचिवालय सन् १९८७ जनवरी १६ मा नेपालको काठमाडौँ (ठमेल/त्रिदेवी मार्ग) मा औपचारिक रूपमा स्थापना गरिएको हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सम्बन्ध र संघ-संस्था"
  },
  // 18. International - BIMSTEC Establishment
  {
    qEng: "When was BIMSTEC founded through the Bangkok Declaration, and where is its permanent secretariat?",
    qNep: "बिम्सटेक (BIMSTEC) को स्थापना कहिले भयो र यसको स्थायी सचिवालय कहाँ रहेको छ?",
    correct: "6 June 1997 (Secretariat in Dhaka, Bangladesh) / ६ जुन १९९७ (ढाका, बङ्गलादेश)",
    distractors: [
      "8 August 1967 (Jakarta) / ८ अगस्ट १९६७ (जकार्ता)",
      "1 January 1995 (Geneva) / १ जनवरी १९९५ (जेनेभा)",
      "24 October 1945 (New York) / २४ अक्टोबर १९४५ (न्युयोर्क)"
    ],
    expEng: "BIMSTEC was founded on 6 June 1997 in Bangkok, and its permanent Secretariat is located in Dhaka, Bangladesh.",
    expNep: "बिम्सटेकको स्थापना ६ जुन १९९७ मा बैंकक घोषणापत्र मार्फत भएको हो भने यसको स्थायी सचिवालय बङ्गलादेशको ढाकामा अवस्थित छ।",
    syllabusModule: "अन्तर्राष्ट्रिय सम्बन्ध र संघ-संस्था"
  },
  // 19. International - UN Membership of Nepal
  {
    qEng: "On which date was Nepal admitted as a member of the United Nations (UN)?",
    qNep: "नेपालले संयुक्त राष्ट्र संघ (UN) को सदस्यता कहिले प्राप्त गरेको हो?",
    correct: "14 December 1955 (Package Deal) / सन् १९५५ डिसेम्बर १४",
    distractors: [
      "24 October 1945 / सन् १९४५ अक्टोबर २४",
      "1 January 1950 / सन् १९५० जनवरी १",
      "20 September 1956 / सन् १९५६ सेप्टेम्बर २०"
    ],
    expEng: "Nepal was admitted to the United Nations on 14 December 1955 alongside 15 other nations under the famous 'Package Deal'.",
    expNep: "नेपालले सन् १९५५ डिसेम्बर १४ (वि.सं. २०१२ मङ्सिर २९) मा १६ देशहरूसँगै 'प्याकेज डिल' अन्तर्गत संयुक्त राष्ट्र संघको सदस्यता प्राप्त गरेको हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सम्बन्ध र संघ-संस्था"
  },
  // 20. Bretton Woods Twins (World Bank & IMF)
  {
    qEng: "Where are the headquarters of the 'Bretton Woods Twins' (World Bank and IMF) situated?",
    qNep: "ब्रेटन वुड्स जुम्ल्याहा (Bretton Woods Twins) मानिने विश्व बैंक र अन्तर्राष्ट्रिय मुद्रा कोष (IMF) को मुख्यालय कहाँ रहेको छ?",
    correct: "Washington, D.C., USA / वासिङ्टन डिसी, संयुक्त राज्य अमेरिका",
    distractors: [
      "New York, USA / न्युयोर्क, अमेरिका",
      "Geneva, Switzerland / जेनेभा, स्विट्जरल्याण्ड",
      "London, United Kingdom / लण्डन, बेलायत"
    ],
    expEng: "Both the World Bank and the IMF were created at the 1944 Bretton Woods Conference and are headquartered in Washington, D.C.",
    expNep: "सन् १९४४ को ब्रेटन वुड्स सम्मेलनबाट स्थापित विश्व बैंक र IMF दुवैको केन्द्रीय मुख्यालय वासिङ्टन डिसीमा अवस्थित छ।",
    syllabusModule: "अन्तर्राष्ट्रिय सम्बन्ध र संघ-संस्था"
  },
  // 21. Sustainable Development Goals (SDGs) (Factual Correction)
  {
    qEng: "How many Goals and Targets are set in the UN Sustainable Development Goals (SDGs 2016-2030)?",
    qNep: "संयुक्त राष्ट्र संघको दिगो विकास लक्ष्य (SDGs 2016-2030) मा कतिवटा लक्ष्य (Goals) र परिमाणात्मक गन्तव्य (Targets) निर्धारण गरिएका छन्?",
    correct: "17 Goals and 169 Targets / १७ वटा लक्ष्य र १६९ वटा गन्तव्यहरू",
    distractors: [
      "15 Goals and 150 Targets / १५ वटा लक्ष्य र १५० गन्तव्य",
      "20 Goals and 200 Targets / २० वटा लक्ष्य र २०० गन्तव्य",
      "8 Goals and 21 Targets / ८ वटा लक्ष्य र २१ गन्तव्य"
    ],
    expEng: "The 2030 Agenda for Sustainable Development encompasses 17 Sustainable Development Goals (SDGs) and 169 associated targets.",
    expNep: "दिगो विकास लक्ष्य (२०१६-२०३०) मा १७ वटा मुख्य लक्ष्यहरू र १६९ वटा परिमाणात्मक गन्तव्यहरू तय गरिएका छन्।",
    syllabusModule: "अन्तर्राष्ट्रिय सम्बन्ध र संघ-संस्था"
  },
  // 22. Diplomatic Relations of Nepal (Factual Correction)
  {
    qEng: "Which country was the first to establish bilateral diplomatic relations with Nepal?",
    qNep: "नेपालले सर्वप्रथम कुन देशसँग द्विपक्षीय कूटनीतिक (दौत्य) सम्बन्ध स्थापना गरेको थियो?",
    correct: "United Kingdom (1816) / संयुक्त अधिराज्य (बेलायत - सन् १८१६ सुगौली सन्धिसँगै)",
    distractors: [
      "United States (1947) / संयुक्त राज्य अमेरिका (सन् १९४७)",
      "India (1947) / भारत (सन् १९४७)",
      "France (1949) / फ्रान्स (सन् १९४९)"
    ],
    expEng: "The United Kingdom was the first country to establish diplomatic relations with Nepal in 1816 following the Treaty of Sugauli.",
    expNep: "नेपालसँग दौत्य सम्बन्ध कायम भएको पहिलो देश बेलायत (सन् १८१६), दोस्रो अमेरिका (१९४७), तेस्रो भारत (१९४७) र चौथो फ्रान्स (१९४९) हो।",
    syllabusModule: "अन्तर्राष्ट्रिय सम्बन्ध र संघ-संस्था"
  },
  // 23. IT Guidelines - Annual IS Audit
  {
    qEng: "Under NRB IT Guidelines, how frequently must licensed commercial banks conduct an independent Information Systems (IS) Audit?",
    qNep: "NRB IT Guidelines अनुसार वाणिज्य बैंकहरूले सूचना प्रणाली लेखापरीक्षण (IS Audit) कति समयमा अनिवार्य रूपमा सम्पन्न गर्नुपर्छ?",
    correct: "At least once every year (Annually) / प्रत्येक वर्ष कम्तिमा एक पटक (वार्षिक अनिवार्य)",
    distractors: [
      "Every two years / प्रत्येक दुई वर्षमा एक पटक",
      "Every six months / प्रत्येक ६ महिनामा",
      "Every three years / प्रत्येक तीन वर्षमा"
    ],
    expEng: "NRB IT Guidelines mandate that all commercial banks must undergo an independent Information System (IS) Audit at least once every fiscal year.",
    expNep: "नेपाल राष्ट्र बैंकको सूचना प्रविधि निर्देशिका अनुसार सबै 'क' वर्गका बैंकहरूले प्रत्येक वर्ष बाह्य विज्ञबाट अनिवार्य IS Audit गराउनुपर्छ।",
    syllabusModule: "सूचना प्रविधि, AI र साइबर सुरक्षा"
  },
  // 24. IT Guidelines - Disaster Recovery (DR) Site
  {
    qEng: "According to NRB IT Guidelines, where should a bank's Disaster Recovery (DR) Site be situated?",
    qNep: "NRB IT Guidelines अनुसार बैंकहरूको विपद् पुनर्लाभ केन्द्र (Disaster Recovery Site) कहाँ हुनुपर्छ?",
    correct: "In a different Seismic Zone / फरक भूकम्पीय जोखिम क्षेत्र (Different Seismic Zone) मा",
    distractors: [
      "Inside the main head office building / मुख्य कार्यालयको सोही भवनमा",
      "Only in foreign countries / विदेशमा मात्र",
      "At the nearest branch counter / नजिकैको शाखा काउन्टरमा"
    ],
    expEng: "NRB IT Guidelines mandate that a bank's Disaster Recovery Site must be geographically isolated and located in a different seismic zone than the primary data center.",
    expNep: "प्राकृतिक विपद्बाट डाटा सुरक्षित राख्न प्राथमिक डाटा सेन्टर भन्दा फरक भूकम्पीय क्षेत्र र सुरक्षित दूरीमा DR Site हुनुपर्दछ।",
    syllabusModule: "सूचना प्रविधि, AI र साइबर सुरक्षा"
  },
  // 25. Cyber Security - Volatile Memory (RAM) (Factual Correction)
  {
    qEng: "Which type of computer memory is 'Volatile', losing its stored contents immediately when power is switched off?",
    qNep: "कम्प्युटर बन्द गर्दा त्यसमा रहेको डाटा तुरुन्त नष्ट हुने (Volatile) अस्थायी मेमोरी कुन हो?",
    correct: "RAM (Random Access Memory) / र्‍याम (अस्थायी मेमोरी)",
    distractors: [
      "ROM (Read Only Memory) / रोम",
      "Hard Disk Drive (HDD) / हार्ड डिस्क",
      "Solid State Drive (SSD) / एसएसडी"
    ],
    expEng: "RAM is a volatile primary memory that loses all its data when power is disconnected, unlike non-volatile ROM, HDD, or SSD.",
    expNep: "र्‍याम (RAM) एक अस्थिर (Volatile) मेमोरी हो, जसमा कम्प्युटर चालु रहँदासम्म मात्र डाटा रहन्छ। बन्द हुनासाथ डाटा नष्ट हुन्छ।",
    syllabusModule: "सूचना प्रविधि, AI र साइबर सुरक्षा"
  },
  // 26. High Value Interbank Payment - RTGS
  {
    qEng: "In Nepal, which real-time electronic fund transfer system operated by NRB is used for settlements of NPR 2 million (20 Lakhs) and above?",
    qNep: "नेपालमा रु २० लाख वा सोभन्दा बढीको ठूलो रकमको रियल टाइम अन्तरबैंक भुक्तानी फर्छ्यौट कुन प्रणाली मार्फत गरिन्छ?",
    correct: "RTGS (Real-Time Gross Settlement) / आरटीजीएस प्रणाली",
    distractors: [
      "Cheque Clearing (NCHL-ECC) / सामान्य चेक क्लियरिङ",
      "Bank Draft / बैंक ड्राफ्ट",
      "Postal Order / हुलाक टिकट"
    ],
    expEng: "Real-Time Gross Settlement (RTGS) system directly managed by NRB handles immediate, irrevocable settlement of high-value payments above NPR 20 lakhs.",
    expNep: "नेपाल राष्ट्र बैंकले रु २० लाखभन्दा माथिका ठूला रकमका अन्तरबैंक भुक्तानीहरू तत्काल फर्छ्यौट गर्न RTGS प्रणाली सञ्चालन गरेको छ।",
    syllabusModule: "सूचना प्रविधि, AI र साइबर सुरक्षा"
  },
  // 27. Office Management - Tippani (Note-sheet)
  {
    qEng: "What is the official administrative document drafted from lower operational levels to seek authoritative policy/legal decisions in government offices?",
    qNep: "सरकारी तथा सार्वजनिक संस्थानमा नीतिगत वा कानुनी अस्पष्टता भएका विषयमा निर्णय लिन तल्लो तहबाट तयार गरिने आधिकारिक कागजात कुन हो?",
    correct: "Tippani (Note-sheet / Minute) / टिप्पणी",
    distractors: [
      "Circular / परिपत्र",
      "Dispatch / चलानी",
      "Audit Report / लेखापरीक्षण प्रतिवेदन"
    ],
    expEng: "A Tippani (Note-sheet) is an upward-flowing administrative instrument presenting facts, legal clauses, and options for higher-level decision-making.",
    expNep: "कार्यालयमा स्पष्ट नीति वा कानुनको व्याख्या आवश्यक पर्दा तल्लो तहका कर्मचारीले तथ्य र कानुन उल्लेख गरी माथिल्लो तहमा निर्णयका लागि पेश गर्ने कागजात टिप्पणी हो।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  // 28. Office Management - Registration & Dispatch (Darta & Chalani)
  {
    qEng: "Which register records all letters, inquiries, and documents officially entering an office from external sources?",
    qNep: "कार्यालयमा बाहिरबाट प्राप्त हुने सम्पूर्ण चिठीपत्रहरूको प्रारम्भिक विवरण राख्ने खाता कुन हो?",
    correct: "Darta Kitab (Registration Register) / दर्ता किताब",
    distractors: [
      "Chalani Kitab (Dispatch Register) / चलानी किताब",
      "Peon Book / पिउन बुक",
      "Attendance Register / हाजिरी खाता"
    ],
    expEng: "Darta (Registration) register records incoming correspondences, while Chalani (Dispatch) register records outgoing official documents.",
    expNep: "कार्यालयमा बाहिरबाट आउने सबै पत्रहरूको विवरण दर्ता किताबमा र कार्यालयबाट बाहिर पठाइने पत्रहरूको विवरण चलानी किताबमा राखिन्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  // 29. Management - Citizen Charter (Factual Correction)
  {
    qEng: "In which country was the concept of the Citizen's Charter first introduced in 1991 under Prime Minister John Major?",
    qNep: "नागरिक बडापत्र (Citizen's Charter) को अवधारणा विश्वमा सर्वप्रथम कुन देशबाट सन् १९९१ मा सुरू भएको हो?",
    correct: "United Kingdom (UK - Prime Minister John Major) / संयुक्त अधिराज्य (बेलायत)",
    distractors: [
      "United States of America / संयुक्त राज्य अमेरिका",
      "France / फ्रान्स",
      "Canada / क्यानडा"
    ],
    expEng: "The Citizen's Charter program was launched by British Prime Minister John Major in 1991 to improve the quality of public services.",
    expNep: "नागरिक बडापत्रको अवधारणा सन् १९९१ मा बेलायतका तत्कालीन प्रधानमन्त्री जोन मेजरले सुरू गरेका हुन्। नेपालमा वि.सं. २०५६ बाट सुरू भएको हो।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  // 30. Public Procurement Act 2063 - National Open Bidding (Factual Correction)
  {
    qEng: "Under the Public Procurement Act 2063, what is the minimum notice period for inviting National Open Competitive Bidding?",
    qNep: "सार्वजनिक खरिद ऐन २०६३ अनुसार राष्ट्रिय स्तरको खुला बोलपत्र (National Open Bidding) आह्वान गर्दा कम्तिमा कति दिनको म्याद दिनुपर्छ?",
    correct: "At least 30 Days / कम्तिमा ३० दिनको म्याद (अन्तर्राष्ट्रियमा ४५ दिन)",
    distractors: [
      "At least 15 Days / कम्तिमा १५ दिन",
      "At least 21 Days / कम्तिमा २१ दिन",
      "At least 7 Days / कम्तिमा ७ दिन"
    ],
    expEng: "Public Procurement Act 2063 Section 14 mandates a minimum of 30 days for National competitive bidding and 45 days for International bidding.",
    expNep: "सार्वजनिक खरिद ऐन २०६३ अनुसार राष्ट्रिय स्तरको खुला बोलपत्रका लागि कम्तिमा ३० दिन र अन्तर्राष्ट्रिय बोलपत्रका लागि कम्तिमा ४५ दिनको सूचना दिनुपर्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन",
    actSection: "दफा १४, सार्वजनिक खरिद ऐन २०६३"
  },
  // 31. Applied Math & Accounts - Net Profit Margin Formula
  {
    qEng: "What is the standard accounting formula for computing Net Profit Margin?",
    qNep: "लेखाविधि अनुसार खुद नाफा अनुपात (Net Profit Margin) निकाल्ने सही सूत्र कुन हो?",
    correct: "(Net Profit / Net Sales) × 100 / (खुद नाफा ÷ कुल बिक्री) × १००",
    distractors: [
      "(Gross Profit / Total Assets) × 100",
      "(Operating Income / Share Capital) × 100",
      "(Total Sales / Net Profit) × 100"
    ],
    expEng: "Net Profit Margin equals (Net Profit after Tax divided by Total Net Sales or Revenue) multiplied by 100 percent.",
    expNep: "खुद नाफा अनुपात = (करपछिको खुद नाफा ÷ कुल बिक्री कारोबार) × १००%। यसले व्यवसायको समग्र नाफा आर्जन क्षमता देखाउँछ।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  // 32. Applied Math - Compound Interest
  {
    qEng: "If NPR 10,000 is deposited at 10% per annum compound interest compounded annually, what is the total interest earned after 2 years?",
    qNep: "रु १०,००० को १०% वार्षिक चक्रीय ब्याजदरले २ वर्षमा प्राप्त हुने कूल चक्रीय ब्याज कति हुन्छ?",
    correct: "NPR 2,100 / रु २,१००",
    distractors: [
      "NPR 2,000 / रु २,०००",
      "NPR 2,200 / रु २,२००",
      "NPR 2,500 / रु २,५००"
    ],
    expEng: "Compound Amount A = P(1 + r)^t = 10,000 × (1.1)^2 = 12,100. Compound Interest CI = 12,100 - 10,000 = NPR 2,100.",
    expNep: "चक्रीय मिश्रधन = १०,००० × (१ + ०.१०)² = १२,१००। चक्रीय ब्याज = १२,१०० - १०,००० = रु २,१००।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  // 33. Geography - Mountain Peaks & Height
  {
    qEng: "What is the official revised height of Mount Everest jointly proclaimed by Nepal and China?",
    qNep: "नेपाल र चीनद्वारा संयुक्त रूपमा मापन गरी घोषणा गरिएको सगरमाथाको नयाँ आधिकारिक उचाइ कति हो?",
    correct: "8,848.86 meters / ८,८४८.८६ मिटर",
    distractors: [
      "8,848.00 meters / ८,८४८ मिटर",
      "8,850.00 meters / ८,८५० मिटर",
      "8,844.43 meters / ८,८४४.४३ मिटर"
    ],
    expEng: "On December 8, 2020, Nepal and China officially announced the height of Mount Everest as 8,848.86 meters.",
    expNep: "वि.सं. २०७७ मङ्सिर २३ (सन् २०२० डिसेम्बर ८) मा नेपाल र चीनले सगरमाथाको उचाइ ८,८४८.८६ मिटर भएको संयुक्त घोषणा गरेका थिए।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  // 34. Geography - Highest Lake
  {
    qEng: "Which lake in Nepal, situated in Manang district at an altitude of 4,919 meters, is celebrated globally for its high altitude?",
    qNep: "मनाङ जिल्लामा ४,९१९ मिटरको उचाइमा अवस्थित नेपालको प्रसिद्ध उच्च हिमाली ताल कुन हो?",
    correct: "Tilicho Lake / तिलिचो ताल",
    distractors: [
      "Rara Lake / रारा ताल",
      "Shey Phoksundo Lake / शे-फोक्सुण्डो ताल",
      "Gosainkunda Lake / गोसाइँकुण्ड"
    ],
    expEng: "Tilicho Lake in Manang district is situated at 4,919 meters. (Recently Kajin Sara lake at 5,002m has also been surveyed in Manang).",
    expNep: "मनाङ जिल्लामा अवस्थित तिलिचो ताल ४,९१९ मिटरको उचाइमा रहेको विश्वकै एक प्रमुख उच्च स्थानको ताल हो।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  // 35. History - Sugauli Treaty Date
  {
    qEng: "When did the Treaty of Sugauli officially come into effect between Nepal and the British East India Company?",
    qNep: "नेपाल र इस्ट इन्डिया कम्पनीबीच भएको सुगौली सन्धि कहिलेदेखि औपचारिक रूपमा लागू भएको हो?",
    correct: "4 March 1816 / सन् १८१६ मार्च ४",
    distractors: [
      "2 December 1815 / सन् १८१५ डिसेम्बर २",
      "10 May 1857 / सन् १८५७ मे १०",
      "15 August 1947 / सन् १९४७ अगस्ट १५"
    ],
    expEng: "Signed on 2 December 1815, the Treaty of Sugauli was officially ratified and exchanged on 4 March 1816.",
    expNep: "सुगौली सन्धिमा १८१५ डिसेम्बर २ मा हस्ताक्षर भए तापनि दुवै पक्षबाट आदानप्रदान भई १८१६ मार्च ४ बाट पूर्ण रूपमा लागू भएको थियो।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  // 36. UNESCO World Heritage Sites in Nepal
  {
    qEng: "How many UNESCO World Heritage Sites are listed in Nepal?",
    qNep: "युनेस्को (UNESCO) को विश्व सम्पदा सूचीमा नेपालका कतिवटा सम्पदाहरू सूचीकृत छन्?",
    correct: "10 Sites (8 Cultural, 2 Natural) / १० वटा सम्पदा (८ सांस्कृतिक र २ प्राकृतिक)",
    distractors: [
      "8 Sites / ८ वटा सम्पदा",
      "12 Sites / १२ वटा सम्पदा",
      "7 Sites / ७ वटा सम्पदा"
    ],
    expEng: "Nepal has 10 World Heritage Sites: Kathmandu Valley (7 monuments counted as 1), Lumbini, Sagarmatha National Park, and Chitwan National Park.",
    expNep: "नेपालका १० सम्पदाहरू विश्व सम्पदामा छन्: काठमाडौँ उपत्यकाका ७ क्षेत्र, लुम्बिनी, सगरमाथा निकुञ्ज र चितवन निकुञ्ज।",
    syllabusModule: "इतिहास, कला, संस्कृति र सम्पदा"
  },
  // 37. Current Affairs - First Paralympic Medal for Nepal (2081 BS / Paris 2024)
  {
    qEng: "Who created historic sports history by winning Nepal's first-ever official medal (Bronze in Taekwondo) at the Paris 2024 Paralympics?",
    qNep: "पेरिस २०२४ पारालिम्पिक्समा तेक्वान्दो विधामा कास्य पदक जित्दै नेपालको इतिहासमै पहिलो आधिकारिक ओलम्पिक/पारालिम्पिक पदक जित्ने खेलाडी को हुन्?",
    correct: "Palesha Goverdhan / पलेशा गोवर्धन",
    distractors: [
      "Deepak Bista / दीपक विष्ट",
      "Sangina Baidya / संगीना वैद्य",
      "Gaurika Singh / गौरिका सिंह"
    ],
    expEng: "Palesha Goverdhan won the historic Bronze medal in women's K44-57kg Taekwondo at the Paris 2024 Paralympic Games.",
    expNep: "पलेशा गोवर्धनले पेरिस २०२४ पारालिम्पिक्समा महिला ५७ केजी (K44) तेक्वान्दोमा कास्य पदक जिती नेपाललाई ऐतिहासिक पदक दिलाएकी हुन्।",
    syllabusModule: "समसामयिक घटनाक्रम र खेलकुद"
  },
  // 38. Banking Principles - CAMELS Rating System
  {
    qEng: "In banking supervision, what does the letter 'C' in the 'CAMELS' rating framework stand for?",
    qNep: "बैंकहरूको वित्तीय स्वास्थ्य मापन गर्ने 'CAMELS' फ्रेमवर्कमा 'C' ले के जनाउँछ?",
    correct: "Capital Adequacy / पुँजी पर्याप्तता (Capital Adequacy)",
    distractors: [
      "Credit Rating / क्रेडिट रेटिङ",
      "Cash Flow / नगद प्रवाह",
      "Customer Care / ग्राहक सेवा"
    ],
    expEng: "CAMELS stands for Capital adequacy, Asset quality, Management capability, Earnings performance, Liquidity, and Sensitivity to market risk.",
    expNep: "CAMELS: Capital adequacy (पुँजी पर्याप्तता), Asset quality (सम्पत्ति गुणस्तर), Management, Earnings, Liquidity र Sensitivity हो।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  // 39. National Census 2078 Data
  {
    qEng: "According to the final results of the National Population Census 2078, what is the total population of Nepal?",
    qNep: "राष्ट्रिय जनगणना २०७८ को अन्तिम नतिजा अनुसार नेपालको कुल जनसङ्ख्या कति रहेको छ?",
    correct: "29,164,578 / २ करोड ९१ लाख ६४ हजार ५७८",
    distractors: [
      "26,494,504 / २ करोड ६४ लाख ९४ हजार",
      "30,125,400 / ३ करोड १ लाख २५ हजार",
      "28,500,000 / २ करोड ८५ लाख"
    ],
    expEng: "National Census 2078 concluded Nepal's population at 29,164,578 with an annual growth rate of 0.92% and sex ratio of 95.59.",
    expNep: "राष्ट्रिय जनगणना २०७८ अनुसार नेपालको जनसङ्ख्या २,९१,६४,५७८ रहेको छ। वार्षिक वृद्धिदर ०.९२% रहेको छ।",
    syllabusModule: "भूगोल, वातावरण र जनसङ्ख्या"
  },
  // 40. Constitution - Structure of Constitution
  {
    qEng: "How many Parts, Articles, and Schedules does the Constitution of Nepal contain?",
    qNep: "नेपालको वर्तमान संविधान (२०७२) मा कति भाग, धारा र अनुसूचीहरू रहेका छन्?",
    correct: "35 Parts, 308 Articles, 9 Schedules / ३५ भाग, ३०८ धारा र ९ अनुसूची",
    distractors: [
      "25 Parts, 250 Articles, 7 Schedules / २५ भाग, २५० धारा र ७ अनुसूची",
      "30 Parts, 300 Articles, 8 Schedules / ३० भाग, ३०० धारा र ८ अनुसूची",
      "32 Parts, 280 Articles, 10 Schedules / ३२ भाग, २८० धारा र १० अनुसूची"
    ],
    expEng: "Promulgated on 20 September 2015 (3 Ashwin 2072), the Constitution comprises 35 Parts, 308 Articles, and 9 Schedules.",
    expNep: "नेपालको संविधान (२०७२ असोज ३) मा ३५ भाग, ३०८ धारा र ९ वटा अनुसूचीहरूको व्यवस्था गरिएको छ।",
    syllabusModule: "संविधान, कानुन र सुशासन"
  },
  // 41. Accounting - Inventory Valuation FIFO
  {
    qEng: "In financial accounting and inventory control, what does the acronym 'FIFO' represent?",
    qNep: "लेखा तथा मौज्दात नियन्त्रण विधिमा 'FIFO' को पूर्ण रूप के हो?",
    correct: "First In, First Out / पहिलो आउने, पहिले जाने",
    distractors: [
      "Fast In, Fast Out / चाँडो आउने, चाँडो जाने",
      "Final In, First Out / अन्तिम आउने, पहिलो जाने",
      "Fixed Income, Final Output / स्थिर आम्दानी विधि"
    ],
    expEng: "FIFO assumes that the oldest stock inventory items are sold or utilized first.",
    expNep: "FIFO (First In, First Out) भन्नाले स्टोरमा पहिले खरिद गरी दाखिला भएको सामान पहिले नै निष्कासन वा बिक्री गरिने विधि हो।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  },
  // 42. Public Enterprises - Privatization Act 2050
  {
    qEng: "In which Bikram Sambat year was the Public Enterprises Privatization Act enacted in Nepal?",
    qNep: "नेपालमा सार्वजनिक संस्थानहरूको निजीकरण ऐन कुन वर्षमा जारी भएको हो?",
    correct: "2050 BS / वि.सं. २०५०",
    distractors: [
      "2048 BS / वि.सं. २०४८",
      "2052 BS / वि.सं. २०५२",
      "2056 BS / वि.सं. २०५६"
    ],
    expEng: "The Privatization Act 2050 BS governs the divestment, sale, and restructuring of government-owned public enterprises.",
    expNep: "नेपालमा सार्वजनिक संस्थानहरूको निजीकरण ऐन वि.सं. २०५० मा जारी भएको हो। निजीकरण समितिको अध्यक्ष अर्थ मन्त्री रहने व्यवस्था छ।",
    syllabusModule: "सार्वजनिक संस्थान व्यवस्थापन"
  },
  // 43. Management - Maslow's Need Hierarchy
  {
    qEng: "According to Abraham Maslow's hierarchy of needs, which is the foundational (lowest level) need of humans?",
    qNep: "अब्राहम मास्लो (Abraham Maslow) को आवश्यकताको शृङ्खला सिद्धान्तमा सबैभन्दा पहिलो (आधारभूत) आवश्यकता कुन हो?",
    correct: "Physiological Needs / शारीरिक आवश्यकता (गाँस, बास, कपास)",
    distractors: [
      "Safety Needs / सुरक्षाको आवश्यकता",
      "Social Needs / सामाजिक आवश्यकता",
      "Self-Actualization / आत्म-सन्तुष्टि"
    ],
    expEng: "Maslow's hierarchy starts with basic Physiological needs (food, shelter, water), progressing to Safety, Belonging, Esteem, and Self-actualization.",
    expNep: "मास्लोको पिरामिडको आधारभूत तहमा शारीरिक आवश्यकता (गाँस, बास, कपास) पर्दछ, त्यसपछि सुरक्षा, सामाजिक, सम्मान र आत्मबोध आउँछन्।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  // 44. Management - McGregor's Theory X & Y
  {
    qEng: "Which management theory proposes that employees inherently dislike work, avoid responsibility, and require coercion and close supervision?",
    qNep: "डगलस म्याकग्रेगरको कुन सिद्धान्तले कर्मचारीहरू स्वभावैले अल्छी हुने र उनीहरूलाई कडा नियन्त्रण आवश्यक पर्ने मान्यता राख्दछ?",
    correct: "Theory X / थ्योरी एक्स",
    distractors: [
      "Theory Y / थ्योरी वाई",
      "Theory Z / थ्योरी जेड",
      "Two Factor Theory / दुई घटक सिद्धान्त"
    ],
    expEng: "Douglas McGregor's Theory X assumes employees are lazy and reluctant, requiring authoritarian control, unlike optimistic Theory Y.",
    expNep: "म्याकग्रेगरको 'थ्योरी एक्स' ले मानिस स्वभावैले काम छल्न खोज्ने मान्यता राख्छ भने 'थ्योरी वाई' ले मानिस काम गर्न उत्साहित हुने सकारात्मक दृष्टिकोण राख्छ।",
    syllabusModule: "कार्यालय सञ्चालन र सार्वजनिक व्यवस्थापन"
  },
  // 45. Math - Unitary Method & Work
  {
    qEng: "If 12 workers can complete a project in 20 days, how many days will 15 workers take to complete the exact same project at the same pace?",
    qNep: "यदि १२ जना कामदारले कुनै काम २० दिनमा पूरा गर्न सक्छन् भने सोही गतिमा १५ जना कामदारले उक्त काम कति दिनमा सम्पन्न गर्लान्?",
    correct: "16 Days / १६ दिन",
    distractors: [
      "18 Days / १८ दिन",
      "15 Days / १५ दिन",
      "14 Days / १४ दिन"
    ],
    expEng: "Total Man-days = 12 × 20 = 240 man-days. Days required for 15 workers = 240 ÷ 15 = 16 days.",
    expNep: "कुल काम = १२ × २० = २४० कामदार-दिन। १५ जनाले सो काम पूरा गर्न = २४० ÷ १५ = १६ दिन लाग्नेछ।",
    syllabusModule: "व्यावहारिक गणित तथा वित्तीय गणना"
  }
];

// Master pool for Q46 to Q48 (Pure English)
const MASTER_ENGLISH_POOL: MasterSingleLanguageItem[] = [
  {
    question: "Choose the correct Synonym for the word 'ABUNDANT':",
    correct: "Plentiful",
    distractors: ["Scarce", "Meager", "Deficient"],
    explanation: "ENG: 'Abundant' means existing or available in large quantities; overflowing. Hence, 'Plentiful' is the exact synonym."
  },
  {
    question: "Choose the correct Antonym for the word 'DILIGENT':",
    correct: "Lazy",
    distractors: ["Industrious", "Attentive", "Conscientious"],
    explanation: "ENG: 'Diligent' means having or showing care and conscientiousness in work. Its direct opposite is 'Lazy' or 'Indolent'."
  },
  {
    question: "Select the appropriate preposition: 'The auditor insisted ______ inspecting all original voucher receipts.'",
    correct: "on",
    distractors: ["in", "for", "with"],
    explanation: "ENG: The verb 'insist' is strictly followed by the preposition 'on' ('insist on doing something')."
  },
  {
    question: "Identify the correctly spelled English word:",
    correct: "Bureaucracy",
    distractors: ["Burocracy", "Beurocracy", "Bureaucrasy"],
    explanation: "ENG: The standard, authoritative spelling is 'Bureaucracy' (derived from French 'bureau' + Greek 'kratos')."
  },
  {
    question: "Complete the sentence: 'Neither the managing director nor the board members ______ present at the emergency briefing.'",
    correct: "were",
    distractors: ["was", "is", "has been"],
    explanation: "ENG: When subjects are connected by 'neither...nor', the verb agrees in number with the closest subject ('board members' - plural), requiring 'were'."
  },
  {
    question: "What is the true figurative meaning of the English idiom 'To read between the lines'?",
    correct: "To perceive an unexpressed or hidden meaning",
    distractors: ["To read text aloud quickly", "To skip alternate sentences", "To correct typographical errors"],
    explanation: "ENG: 'To read between the lines' means to discover the implicit or hidden meaning not explicitly stated in words."
  },
  {
    question: "Choose the correct Synonym for the financial verb 'SCRUTINIZE':",
    correct: "Examine closely",
    distractors: ["Overlook", "Endorse blindly", "Neglect"],
    explanation: "ENG: 'Scrutinize' means to inspect or examine minutely, closely, and critically."
  },
  {
    question: "Choose the correct Antonym for the adjective 'TRANSPARENT':",
    correct: "Opaque",
    distractors: ["Lucid", "Pellucid", "Clear"],
    explanation: "ENG: 'Transparent' means allowing light to pass through clearly without hindrance; its antonym is 'Opaque' (impenetrable to light)."
  },
  {
    question: "Select the correct phrase: 'The bank branch manager is very good ______ dealing with difficult corporate clients.'",
    correct: "at",
    distractors: ["in", "with", "for"],
    explanation: "ENG: The idiomatic English construction for expressing proficiency or skill is 'good at' (e.g., 'good at mathematics', 'good at dealing')."
  },
  {
    question: "Choose the word closest in meaning to 'MITIGATE':",
    correct: "Alleviate",
    distractors: ["Aggravate", "Intensify", "Fabricate"],
    explanation: "ENG: 'Mitigate' means to make less severe, serious, or painful; therefore, 'Alleviate' is its synonym."
  }
];

// Master pool for Q49 to Q50 (Pure Nepali)
const MASTER_NEPALI_POOL: MasterSingleLanguageItem[] = [
  {
    question: "'अन्नको भण्डार' भन्नाले नेपालको कुन भौगोलिक क्षेत्रलाई चिनिन्छ?",
    correct: "तराई क्षेत्र",
    distractors: ["हिमाली क्षेत्र", "पहाडी क्षेत्र", "भित्री मधेस"],
    explanation: "NEP: अत्यधिक समथर जमिन, उर्वर माटो र धान तथा खाद्यान्नको प्रचुर उत्पादन हुने भएकाले नेपालको तराई क्षेत्रलाई 'अन्नको भण्डार' भनिन्छ।"
  },
  {
    question: "नेपाली व्याकरण अनुसार 'कृतज्ञ' (उपकार मान्ने) शब्दको ठिक विपरीतार्थक शब्द कुन हो?",
    correct: "कृतघ्न",
    distractors: ["अकृतज्ञ", "विश्वासघाती", "अपराधी"],
    explanation: "NEP: कृतज्ञ (अरूले गरेको उपकार सम्झने) को ठिक उल्टो वा विपरीतार्थक शब्द 'कृतघ्न' (उपकार बिर्सने वा उपकार नमान्ने) हुन्छ।"
  },
  {
    question: "'आकाशको फल आँखा तरी मर' भन्ने उखानको सहि अर्थ कुन हो?",
    correct: "प्राप्त गर्न असम्भव कुराको व्यर्थ आशा गर्नु",
    distractors: ["परिश्रम नगरी धनी बन्नु", "फलफूलको बगैँचा हेर्नु", "सधैँ आशावादी बन्नु"],
    explanation: "NEP: आफ्नो पहुँच वा क्षमताभन्दा निकै टाढा रहेको असम्भव वस्तु पाउने व्यर्थ आशामा समय खेर फाल्नुलाई यो उखानले जनाउँछ।"
  },
  {
    question: "तल दिइएका शब्दहरूमध्ये कुन शब्दको हिज्जे (वर्तनी) व्याकरणिक रूपमा शुद्ध छ?",
    correct: "समसामयिक",
    distractors: ["समसामयीक", "समसामइक", "शमसामयिक"],
    explanation: "NEP: 'समय + इक' बाट सामायिक बने जस्तै 'समसामयिक' शब्दको अन्तिम 'यिक' मा ह्रस्व 'इ' कार लाग्नु शुद्ध वर्तनी हो।"
  },
  {
    question: "'कर्मचारीहरूले लगनशीलतापूर्वक बैंकमा सेवा प्रवाह गरे' वाक्यमा 'कर्मचारीहरू' कुन पदवर्ग अन्तर्गत पर्दछ?",
    correct: "नाम (Noun)",
    distractors: ["सर्वनाम", "विशेषण", "क्रियायोगी"],
    explanation: "NEP: कुनै व्यक्ति, समूह वा पेशागत वर्ग बुझाउने शब्द भएकाले 'कर्मचारीहरू' जातिवाचक नाम पद हो।"
  },
  {
    question: "नेपाली भाषामा 'पारदर्शी' शब्दको सहि विपरीतार्थक शब्द कुन हो?",
    correct: "अपारदर्शी",
    distractors: ["पारदर्शक", "धमिलो", "अस्पष्ट"],
    explanation: "NEP: आरपार देखिने वा खुला भएको अवस्थालाई पारदर्शी भनिन्छ र यसको विपरीतार्थक शब्द 'अपारदर्शी' हुन्छ।"
  },
  {
    question: "'हात धोएर लाग्नु' भन्ने नेपाली टुक्काको सहि अर्थ के हो?",
    correct: "कुनै काममा दत्तचित्त भएर पछि लाग्नु",
    distractors: ["साबुन पानीले हात सफा गर्नु", "कामबाट हात झिक्नु", "निराश हुनु"],
    explanation: "NEP: 'हात धोएर लाग्नु' टुक्काले कुनै काम, योजना वा उद्देश्य प्राप्तिका लागि हरतरहले दृढ भएर लाग्नुलाई जनाउँछ।"
  },
  {
    question: "तलका मध्ये कुन चाहिँ शब्दको हिज्जे शुद्ध छ?",
    correct: "निरीक्षण",
    distractors: ["निरिक्षण", "निरीक्षन", "निरिक्षन"],
    explanation: "NEP: 'नि' ह्रस्व, 'री' दीर्घ र 'क्षण' को प्रयोग भएको 'निरीक्षण' शब्द शुद्ध रूप हो।"
  }
];

/**
 * Generate all 50 full practice sets (Set 1 to Set 50) strictly complying with:
 * Public Enterprises (सङ्गठित संस्था L4 & L5) Official Syllabus Weightage:
 * - Topic 1 (Q1–Q5):   Geography, Population & Environment (भूगोल, जनसङ्ख्या र वातावरण) [5 MCQs]
 * - Topic 2 (Q6–Q10):  History, Culture & Social System (इतिहास, संस्कृति र सामाजिक व्यवस्था) [5 MCQs]
 * - Topic 3 (Q11–Q15): Economic Development & Indicators (नेपालको आर्थिक विकास, १६ औँ योजना, BOP) [5 MCQs]
 * - Topic 4 (Q16–Q20): Governance & Constitution (संविधान भाग १-५, कानून, सङ्घीय शासन) [5 MCQs]
 * - Topic 5 (Q21–Q25): International Affairs & Institutions (SAARC, BIMSTEC, UN, WB, IMF, ADB) [5 MCQs]
 * - Topic 6 (Q26–Q30): Science, ICT, Public Health & Current Affairs (विज्ञान प्रविधि, AI, समसामयिक) [5 MCQs]
 * - Topic 7 (Q31–Q35): Office & Public Management (दर्ता/चलानी, टिप्पणी, नागरिक बडापत्र, POSDCORB) [5 MCQs]
 * - Topic 8 (Q36–Q40): Knowledge about Public Enterprises (सार्वजनिक संस्थान, PPP, वित्तीय नियमन) [5 MCQs]
 * - Topic 9 (Q41–Q45): Applied Mathematics (नाफा-नोक्सान, ब्याज, अनुपात, औसत, सम्भाव्यता) [5 MCQs]
 * - Topic 10A (Q46–Q48): English Language Competence (Grammar, Vocabulary, Synonyms/Antonyms) [3 MCQs]
 * - Topic 10B (Q49–Q50): Nepali Language Competence (नेपाली व्याकरण, शुद्ध/अशुद्ध, पदवर्ग, विपरीतार्थक) [2 MCQs]
 *
 * Total: Exactly 50 MCQs per set, 100 Marks, 45 Minutes.
 * Correct answers are distributed across options A, B, C, D (indices 0, 1, 2, 3) to prevent bias.
 */
export function generateAllFiftySets(totalSets: number = 50): RawSangathitSet[] {
  return generateAllSets(totalSets);
}
export { generateSingleSet };

/**
 * Pre-instantiated in-memory list of all fifty sets
 */
export const allFiftySets: RawSangathitSet[] = generateAllFiftySets();

/**
 * Converts a raw user-provided set into the application's native QuizSet format
 */
export function convertRawSetToQuizSet(rawSet: RawSangathitSet): QuizSet {
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  const questions: Question[] = rawSet.questions.map((q, idx) => {
    // Decouple bilingual questions if embedded
    const { nepali: splitNep, english: splitEng } = splitBilingualQuestion(q.question, q.questionEnglish);

    // Map options with bilingual slash splitting
    const options = (q.options || []).slice(0, 4).map((optText, optIdx) => {
      const key = keys[optIdx] || 'A';
      // Clean up string: remove any leading "(A) ", "[A] ", "A) ", "A. " prefixes
      const cleanText = String(optText).replace(/^[\(\[]?[A-D][\)\]\.\:]\s*/i, '').trim();
      let textNepali = cleanText;
      let textEnglish: string | undefined = undefined;

      if (cleanText.includes(' / ')) {
        const parts = cleanText.split(' / ');
        if (parts.length === 2) {
          const p1 = parts[0].trim();
          const p2 = parts[1].trim();
          const p1Deva = /[\u0900-\u097F]/.test(p1);
          const p2Deva = /[\u0900-\u097F]/.test(p2);
          if (p1Deva && !p2Deva) {
            textNepali = p1;
            textEnglish = p2;
          } else if (!p1Deva && p2Deva) {
            textNepali = p2;
            textEnglish = p1;
          }
        }
      }

      return {
        key,
        textNepali,
        textEnglish
      };
    });

    // Determine correct answer key based on q.correctAnswer
    let ansKey: 'A' | 'B' | 'C' | 'D' = 'A';
    if (typeof q.correctAnswer === 'number') {
      ansKey = keys[q.correctAnswer % 4] || 'A';
    } else if (typeof q.correctAnswer === 'string') {
      const upper = q.correctAnswer.trim().toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(upper)) {
        ansKey = upper as 'A' | 'B' | 'C' | 'D';
      } else {
        const num = parseInt(upper, 10);
        if (!isNaN(num) && num >= 0 && num <= 3) {
          ansKey = keys[num];
        }
      }
    }

    // Determine category and module based on prescribed syllabus range
    const qNum = typeof q.id === 'number' ? q.id : idx + 1;
    let category: any = 'PublicEnterprises';
    let syllabusModule = 'सार्वजनिक संस्थान व्यवस्थापन';

    if (qNum >= 1 && qNum <= 5) {
      category = 'GK';
      syllabusModule = 'खण्ड १: भूगोल, जनसङ्ख्या र वातावरण (५ MCQs)';
    } else if (qNum >= 6 && qNum <= 10) {
      category = 'GK';
      syllabusModule = 'खण्ड २: इतिहास, संस्कृति र सामाजिक व्यवस्था (५ MCQs)';
    } else if (qNum >= 11 && qNum <= 15) {
      category = 'Economics';
      syllabusModule = 'खण्ड ३: नेपालको आर्थिक विकास (GDP, बजेट, मौद्रिक नीति) (५ MCQs)';
    } else if (qNum >= 16 && qNum <= 20) {
      category = 'Law';
      syllabusModule = 'खण्ड ४: संविधान र शासन व्यवस्था (५ MCQs)';
    } else if (qNum >= 21 && qNum <= 25) {
      category = 'GeneralAwareness';
      syllabusModule = 'खण्ड ५: अन्तर्राष्ट्रिय मामला र सङ्घ-संस्थाहरू (SAARC, BIMSTEC, UN) (५ MCQs)';
    } else if (qNum >= 26 && qNum <= 30) {
      category = 'Computer';
      syllabusModule = 'खण्ड ६: विज्ञान, प्रविधि, ICT र समसामयिक (५ MCQs)';
    } else if (qNum >= 31 && qNum <= 35) {
      category = 'Management';
      syllabusModule = 'खण्ड ७: कार्यालय र सार्वजनिक व्यवस्थापन (५ MCQs)';
    } else if (qNum >= 36 && qNum <= 40) {
      category = 'PublicEnterprises';
      syllabusModule = 'खण्ड ८: सार्वजनिक संस्था सम्बन्धी ज्ञान (CSR, PPP, संस्थान वर्गीकरण) (५ MCQs)';
    } else if (qNum >= 41 && qNum <= 45) {
      category = 'Mathematics';
      syllabusModule = 'खण्ड ९: व्यावहारिक गणित (Maths, Stats, Interest, Profit/Loss) (५ MCQs)';
    } else if (qNum >= 46 && qNum <= 50) {
      category = 'Language';
      syllabusModule = 'खण्ड १०: भाषा क्षमता (English Grammar & नेपाली व्याकरण) (५ MCQs)';
    }

    return {
      id: `ss-set${rawSet.setId}-q${qNum}`,
      category: category as any,
      difficulty: rawSet.setId <= 15 ? 'Easy' : rawSet.setId <= 35 ? 'Medium' : 'Hard',
      questionNepali: splitNep,
      questionEnglish: splitEng,
      options: options as any,
      correctAnswer: ansKey,
      explanationNepali: q.explanation || 'व्याख्या उपलब्ध छ।',
      syllabusModule,
      examTag: `सङ्गठित संस्था L4/L5 Set ${rawSet.setId}`
    };
  });

  return {
    id: `sangathit-set-${rawSet.setId}`,
    setId: rawSet.setId,
    setName: rawSet.setName,
    title: rawSet.setName,
    description: `लोकसेवा आयोग तह ४ र तह ५ सङ्गठित संस्था (Public Enterprises) ५० वस्तुगत प्रश्न नमुना परीक्षा सेट ${rawSet.setId} (१० वटै विषयगत क्षेत्र अनुसार पूर्ण ५० प्रश्न)। समय: ४५ मिनेट।`,
    category: 'Loksewa',
    syllabusModule: 'सार्वजनिक संस्थान व्यवस्थापन',
    difficulty: rawSet.setId <= 15 ? 'Easy' : rawSet.setId <= 35 ? 'Medium' : 'Hard',
    mode: 'exam',
    timeLimitMinutes: rawSet.timeLimitMinutes || 45,
    questions,
    badge: `Set ${rawSet.setId} (50 MCQs)`
  };
}
