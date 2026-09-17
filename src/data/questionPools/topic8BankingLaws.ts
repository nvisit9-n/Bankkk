import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 8: बैंकिङ, लेखा र सम्बन्धित कानुनहरू (Topics 8.1 - 8.5) [5 MCQs]
// Slots 36 to 40 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 36: Nepal Rastra Bank Act 2058 (Topic 8.1)
export function getBankingLawsSlot36(setId: number): MasterBilingualItem {
  const nrbActData = [
    {
      qEng: "According to the Nepal Rastra Bank Act 2058, how many members constitute the Board of Directors of Nepal Rastra Bank?",
      qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ अनुसार नेपाल राष्ट्र बैंकको सञ्चालक समितिमा कति जना सदस्यहरू रहने व्यवस्था छ?",
      correct: "7 Members / ७ जना",
      distractors: [
        "5 Members / ५ जना",
        "9 Members / ९ जना",
        "11 Members / ११ जना"
      ],
      expEng: "Under Section 14, the Board has 7 members: Governor (Chair), Finance Secretary, 2 Deputy Governors, and 3 appointed directors.",
      expNep: "दफा १४ अनुसार गभर्नर, अर्थ मन्त्रालयका सचिव, २ जना डेपुटी गभर्नर र ३ जना विज्ञ सञ्चालक गरी ७ जना सदस्य हुन्छन्।"
    },
    {
      qEng: "According to Section 4 of the NRB Act 2058, which of the following is the primary objective of Nepal Rastra Bank?",
      qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ को दफा ४ अनुसार नेपाल राष्ट्र बैंकको मुख्य उद्देश्य कुन हो?",
      correct: "To maintain price and balance of payments stability / मूल्य र शोधनान्तर स्थिरता कायम गर्नु",
      distractors: [
        "To maximize commercial profits of banks / बैंकहरूको मुनाफा अधिकतम गर्नु",
        "To collect direct taxes for the government / सरकारका लागि प्रत्यक्ष कर असुली गर्नु",
        "To issue trade licenses to exporters / निर्यातकर्तालाई व्यापार इजाजत दिनु"
      ],
      expEng: "The foremost objectives are to maintain price and balance of payments stability and financial stability.",
      expNep: "दफा ४ अनुसार मूल्य तथा शोधनान्तर स्थिरता र समग्र वित्तीय क्षेत्रको स्थायित्व कायम गर्नु प्रमुख उद्देश्य हो।"
    },
    {
      qEng: "Under Section 52 of the NRB Act 2058, who possesses the exclusive legal monopoly to issue currency notes and coins in Nepal?",
      qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ को दफा ५२ बमोजिम नेपालमा बैंक नोट तथा सिक्का निष्कासन गर्ने एकाधिकार कसलाई छ?",
      correct: "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
      distractors: [
        "Ministry of Finance / अर्थ मन्त्रालय",
        "Rastriya Banijya Bank / राष्ट्रिय वाणिज्य बैंक",
        "Department of Mint / टक्सार विभाग"
      ],
      expEng: "Nepal Rastra Bank holds the exclusive statutory right to issue currency in Nepal.",
      expNep: "नेपालमा बैंक नोट तथा सिक्का निष्कासन गर्ने एकलौटी अधिकार नेपाल राष्ट्र बैंकलाई मात्र छ।"
    },
    {
      qEng: "According to Section 15 of the NRB Act 2058, who appoints the Governor of Nepal Rastra Bank?",
      qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ को दफा १५ बमोजिम नेपाल राष्ट्र बैंकको गभर्नरको नियुक्ति कसले गर्दछ?",
      correct: "Government of Nepal, Council of Ministers / नेपाल सरकार, मन्त्रिपरिषद्",
      distractors: [
        "President of Nepal / राष्ट्रपति",
        "Finance Minister / अर्थमन्त्री",
        "Parliamentary Hearing Committee / संसदीय सुनुवाइ समिति"
      ],
      expEng: "The Government of Nepal (Council of Ministers) appoints the Governor upon recommendation of a 3-member committee.",
      expNep: "सिफारिस समितिको सिफारिसमा नेपाल सरकार (मन्त्रिपरिषद्) ले गभर्नरको नियुक्ति गर्दछ।"
    },
    {
      qEng: "According to Section 16 of the NRB Act 2058, who chairs the recommendation committee for the appointment of the Governor?",
      qNep: "नेपाल राष्ट्र बैंक ऐन २०५८ अनुसार गभर्नर नियुक्तिको सिफारिस गर्ने समितिको संयोजक को हुने व्यवस्था छ?",
      correct: "Finance Minister / अर्थमन्त्री",
      distractors: [
        "Prime Minister / प्रधानमन्त्री",
        "Chief Justice / प्रधानन्यायाधीश",
        "Auditor General / महालेखा परीक्षक"
      ],
      expEng: "The committee is chaired by the Finance Minister and includes a former Governor and a renowned expert.",
      expNep: "अर्थमन्त्रीको संयोजकत्वमा पूर्व गभर्नर र एक जना विज्ञ सदस्य रहेको ३ सदस्यीय सिफारिस समिति हुन्छ।"
    }
  ];

  const idx = (setId - 1) % nrbActData.length;
  return nrbActData[idx];
}

// Slot 37: Bank and Financial Institutions Act (BAFIA) 2073 (Topic 8.2)
export function getBankingLawsSlot37(setId: number): MasterBilingualItem {
  const bafiaData = [
    {
      qEng: "According to BAFIA 2073, what is the minimum and maximum number of Directors on the Board of a licensed bank or financial institution?",
      qNep: "बैंक तथा वित्तीय संस्था सम्बन्धी ऐन २०७३ अनुसार बैंक तथा वित्तीय संस्थाको सञ्चालक समितिमा कम्तीमा कति र बढीमा कति जना सञ्चालक रहन सक्ने व्यवस्था छ?",
      correct: "Minimum 5, Maximum 7 / कम्तीमा ५, बढीमा ७ जना",
      distractors: [
        "Minimum 3, Maximum 9 / कम्तीमा ३, बढीमा ९ जना",
        "Minimum 5, Maximum 11 / कम्तीमा ५, बढीमा ११ जना",
        "Minimum 7, Maximum 9 / कम्तीमा ७, बढीमा ९ जना"
      ],
      expEng: "BAFIA Section 14 mandates a minimum of 5 and a maximum of 7 directors.",
      expNep: "दफा १४ बमोजिम सञ्चालक समितिमा कम्तीमा ५ र बढीमा ७ जना सञ्चालक रहने व्यवस्था छ।"
    },
    {
      qEng: "According to Section 14 of BAFIA 2073, how many Independent Directors (स्वतन्त्र सञ्चालक) must be appointed on the Board?",
      qNep: "BAFIA २०७३ को दफा १४ अनुसार सञ्चालक समितिमा कम्तीमा कति जना स्वतन्त्र सञ्चालक नियुक्त गर्नुपर्छ?",
      correct: "At least 1 / कम्तीमा १ जना",
      distractors: [
        "At least 2 / कम्तीमा २ जना",
        "At least 3 / कम्तीमा ३ जना",
        "Exactly 2 / ठ्याक्कै २ जना"
      ],
      expEng: "Section 14 requires at least one independent director with professional expertise.",
      expNep: "बैंक तथा वित्तीय संस्थाको सञ्चालक समितिमा कम्तीमा एक जना स्वतन्त्र सञ्चालक नियुक्त गर्नुपर्छ।"
    },
    {
      qEng: "According to BAFIA 2073, what is the tenure of a Director of a bank or financial institution?",
      qNep: "बैंक तथा वित्तीय संस्था सम्बन्धी ऐन २०७३ अनुसार सञ्चालकको पदावधि बढीमा कति वर्षको हुन्छ?",
      correct: "4 Years / ४ वर्ष",
      distractors: [
        "3 Years / ३ वर्ष",
        "5 Years / ५ वर्ष",
        "2 Years / २ वर्ष"
      ],
      expEng: "Section 15 provides that a Director's term of office shall be a maximum of 4 years.",
      expNep: "दफा १५ अनुसार सञ्चालकको पदावधि बढीमा ४ वर्षको हुनेछ र पुनः नियुक्त/मनोनीत हुन सक्नेछ।"
    },
    {
      qEng: "According to BAFIA 2073, how many consecutive terms can the Chief Executive Officer (CEO) of a bank serve?",
      qNep: "BAFIA २०७३ अनुसार बैंक तथा वित्तीय संस्थाको प्रमुख कार्यकारी अधिकृत (CEO) बढीमा कति कार्यकालसम्म बहाल रहन सक्दछ?",
      correct: "2 Terms / २ कार्यकाल",
      distractors: [
        "1 Term / १ कार्यकाल",
        "3 Terms / ३ कार्यकाल",
        "No limit / कुनै सीमा छैन"
      ],
      expEng: "Section 29 limits a CEO to a maximum of two consecutive terms (each term up to 4 years).",
      expNep: "दफा २९ अनुसार प्रमुख कार्यकारी अधिकृत बढीमा २ कार्यकालका लागि मात्र नियुक्त हुन सक्दछ।"
    },
    {
      qEng: "According to BAFIA 2073, what percentage of total issued capital must a bank or financial institution allocate for public issuance (IPO)?",
      qNep: "BAFIA २०७३ बमोजिम बैंक तथा वित्तीय संस्थाले आफ्नो कुल जारी पूँजीको कम्तीमा कति प्रतिशत सेयर सर्वसाधारणलाई बिक्री वितरण गर्नुपर्छ?",
      correct: "At least 30% / कम्तीमा ३० प्रतिशत",
      distractors: [
        "At least 20% / कम्तीमा २० प्रतिशत",
        "At least 25% / कम्तीमा २५ प्रतिशत",
        "At least 49% / कम्तीमा ४९ प्रतिशत"
      ],
      expEng: "Section 9 mandates allocating at least 30% of total shares for general public issuance.",
      expNep: "दफा ९ अनुसार कुल जारी पूँजीको कम्तीमा ३० प्रतिशत सेयर सर्वसाधारणलाई निष्कासन गर्नुपर्छ।"
    }
  ];

  const idx = (setId - 1) % bafiaData.length;
  return bafiaData[idx];
}

// Slot 38: Anti-Money Laundering Act (AMLA) 2064 (Topic 8.3)
export function getBankingLawsSlot38(setId: number): MasterBilingualItem {
  const amlData = [
    {
      qEng: "Where is the Financial Information Unit (FIU) established under the Anti-Money Laundering Act 2064?",
      qNep: "सम्पत्ति शुद्धीकरण (मनी लाउन्डरिङ) निवारण ऐन २०६४ बमोजिम वित्तीय जानकारी इकाई (FIU) कहाँ स्थापना गरिएको छ?",
      correct: "Nepal Rastra Bank / नेपाल राष्ट्र बैंकमा",
      distractors: [
        "Ministry of Finance / अर्थ मन्त्रालयमा",
        "Department of Money Laundering Investigation / सम्पत्ति शुद्धीकरण अनुसन्धान विभागमा",
        "Office of the Prime Minister / प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालयमा"
      ],
      expEng: "Under Section 9, the autonomous FIU is established within Nepal Rastra Bank.",
      expNep: "दफा ९ बमोजिम नेपाल राष्ट्र बैंकभित्र स्वायत्त राष्ट्रिय वित्तीय जानकारी इकाई (FIU) रहने व्यवस्था छ।"
    },
    {
      qEng: "What does 'KYC' stand for in banking compliance and anti-money laundering regulations?",
      qNep: "बैंकिङ कारोबारमा ग्राहक पहिचान सम्बन्धी 'KYC' को पूरा रूप के हो?",
      correct: "Know Your Customer / नो योर कस्टमर",
      distractors: [
        "Keep Your Cash / किप योर क्यास",
        "Know Your Company / नो योर कम्पनी",
        "Key Yield Calculation / कि यिल्ड क्यालकुलेसन"
      ],
      expEng: "KYC stands for Know Your Customer, the primary due diligence mechanism in banking.",
      expNep: "KYC को पूरा रूप Know Your Customer (ग्राहक पहिचान) हो।"
    },
    {
      qEng: "Under NRB Directives and AML guidelines, what is the mandatory threshold for filing a Currency Transaction Report (CTR) for cash transactions in a single day?",
      qNep: "सम्पत्ति शुद्धीकरण निवारण निर्देशन अनुसार एक दिनमा कति वा सोभन्दा बढीको नगद कारोबार भएमा सीमा कारोबार प्रतिवेदन (CTR) बुझाउनुपर्छ?",
      correct: "Rs. 1 Million or more / रु. १० लाख वा सोभन्दा बढी",
      distractors: [
        "Rs. 500,000 or more / रु. ५ लाख वा सोभन्दा बढी",
        "Rs. 2 Million or more / रु. २० लाख वा सोभन्दा बढी",
        "Rs. 5 Million or more / रु. ५० लाख वा सोभन्दा बढी"
      ],
      expEng: "Cash transactions of Rs. 1,000,000 or above must be reported to the FIU under CTR.",
      expNep: "एक पटक वा एक दिनमा रु. १० लाख वा सोभन्दा बढीको नगद कारोबार भएमा CTR प्रतिवेदन पेश गर्नुपर्छ।"
    },
    {
      qEng: "What report must a reporting entity submit to the FIU whenever there is reasonable ground to suspect funds are proceeds of crime?",
      qNep: "कारोबार शंकास्पद लागेमा बैंक तथा वित्तीय संस्थाले वित्तीय जानकारी इकाई (FIU) मा कुन प्रतिवेदन पेस गर्नुपर्छ?",
      correct: "Suspicious Transaction Report (STR) / शंकास्पद कारोबार प्रतिवेदन",
      distractors: [
        "Currency Transaction Report (CTR) / सीमा कारोबार प्रतिवेदन",
        "Audit Report / लेखापरीक्षण प्रतिवेदन",
        "Annual Financial Statement / वार्षिक वित्तीय विवरण"
      ],
      expEng: "Reporting entities must file an STR whenever suspicious activities are identified.",
      expNep: "शंकास्पद कारोबार भएको ३ दिनभित्र वित्तीय जानकारी इकाईमा STR प्रतिवेदन बुझाउनुपर्छ।"
    },
    {
      qEng: "Which international intergovernmental body sets global standards for combating money laundering and terrorist financing?",
      qNep: "सम्पत्ति शुद्धीकरण तथा आतंकवादी कार्यमा वित्तीय लगानी निवारण सम्बन्धी विश्वव्यापी मापदण्ड निर्धारण गर्ने अन्तर्राष्ट्रिय निकाय कुन हो?",
      correct: "Financial Action Task Force / फाइनान्सियल एक्सन टास्क फोर्स",
      distractors: [
        "International Monetary Fund / अन्तर्राष्ट्रिय मुद्रा कोष",
        "World Bank / विश्व बैंक",
        "Interpol / इन्टरपोल"
      ],
      expEng: "The Financial Action Task Force (FATF) sets the global 40 recommendations on AML/CFT.",
      expNep: "FATF ले सम्पत्ति शुद्धीकरण निवारण सम्बन्धी विश्वव्यापी मापदण्ड तय गर्दछ।"
    }
  ];

  const idx = (setId - 1) % amlData.length;
  return amlData[idx];
}

// Slot 39: Banking Offence and Punishment Act 2064 (Topic 8.4)
export function getBankingLawsSlot39(setId: number): MasterBilingualItem {
  const offenceData = [
    {
      qEng: "Under the Banking Offence and Punishment Act 2064, issuing a cheque knowingly without sufficient funds in the bank account is an offence of:",
      qNep: "बैंकिङ कसूर तथा सजाय ऐन २०६४ अनुसार खातामा पर्याप्त मौज्दात नभएको जानी-जानी चेक जारी गर्नु कुन कसूर मानिन्छ?",
      correct: "Cheque Dishonor / चेक अनादर",
      distractors: [
        "Money Laundering / सम्पत्ति शुद्धीकरण",
        "Unauthorized Audit / अनाधिकृत लेखापरीक्षण",
        "Insider Trading / भित्री कारोबार"
      ],
      expEng: "Section 3(c) makes issuing a cheque knowing there are insufficient funds a punishable banking offence.",
      expNep: "खातामा रकम नभएको जानीजानी चेक काट्नु बैंकिङ कसूर ऐनको दफा ३(ग) अनुसार दण्डनीय अपराध हो।"
    },
    {
      qEng: "According to the Banking Offence and Punishment Act 2064, who conducts the primary investigation of banking offences in Nepal?",
      qNep: "बैंकिङ कसूर तथा सजाय ऐन २०६४ बमोजिम बैंकिङ कसूर सम्बन्धी मुद्दाहरूको अनुसन्धान गर्ने निकाय कुन हो?",
      correct: "Nepal Police / नेपाल प्रहरी",
      distractors: [
        "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
        "Office of the Auditor General / महालेखा परीक्षकको कार्यालय",
        "Ministry of Law / कानुन मन्त्रालय"
      ],
      expEng: "Nepal Police (specifically the Central Investigation Bureau - CIB) investigates banking offences.",
      expNep: "बैंकिङ कसूरका मुद्दा नेपाल प्रहरी (विशेषगरी केन्द्रीय अनुसन्धान ब्युरो CIB) ले अनुसन्धान गर्छ।"
    },
    {
      qEng: "In which court are cases filed and tried under the Banking Offence and Punishment Act 2064?",
      qNep: "बैंकिङ कसूर तथा सजाय ऐन २०६४ अनुसार बैंकिङ कसूर सम्बन्धी मुद्दाको सुरु कारबाही र किनारा कुन अदालतले गर्दछ?",
      correct: "High Court / उच्च अदालत",
      distractors: [
        "District Court / जिल्ला अदालत",
        "Supreme Court / सर्वोच्च अदालत",
        "Debt Recovery Tribunal / ऋण असुली न्यायाधिकरण"
      ],
      expEng: "Banking offences are tried originally in the High Court (Commercial Bench) as per Section 17.",
      expNep: "ऐनको दफा १७ अनुसार बैंकिङ कसूर सम्बन्धी मुद्दाको सुरु कारबाही उच्च अदालतले गर्दछ।"
    },
    {
      qEng: "Under the Banking Offence and Punishment Act 2064, what is the consequence when an offence involves an ascertainable disputed amount (विगो)?",
      qNep: "बैंकिङ कसूर तथा सजाय ऐन २०६४ बमोजिम विगो खुलेको बैंकिङ कसूरमा कसूरदारलाई के सजाय हुन्छ?",
      correct: "विगो असुल गरी सोही विगो बराबर जरिवाना र कैद / Recovery of amount, equal fine and imprisonment",
      distractors: [
        "विगो मात्र असुल गरिने / Only recovery of amount",
        "कैद सजाय मात्र हुने / Only imprisonment",
        "विगोको दोब्बर जरिवाना मात्र हुने / Only double fine"
      ],
      expEng: "Section 15 prescribes confiscation/recovery of the claimed amount, an equivalent fine, and imprisonment.",
      expNep: "विगो असुलउपर गरी विगो बमोजिम जरिवाना र विगोको परिमाण हेरी कैद सजाय हुने व्यवस्था छ।"
    },
    {
      qEng: "According to the Banking Offence and Punishment Act 2064, what is the limitation period (हदम्याद) for filing a complaint after knowing about a banking offence?",
      qNep: "बैंकिङ कसूर तथा सजाय ऐन २०६४ अनुसार कसूर भएको थाहा पाएको मितिले कति समयभित्र जाहेरी दिनुपर्छ?",
      correct: "Within 1 Year / १ वर्षभित्र",
      distractors: [
        "Within 6 Months / ६ महिनाभित्र",
        "Within 3 Months / ३ महिनाभित्र",
        "Within 2 Years / २ वर्षभित्र"
      ],
      expEng: "Section 28 provides that complaints must be lodged within 1 year from the date of knowing the offence.",
      expNep: "ऐनको दफा २८ अनुसार कसूर भएको थाहा पाएको मितिले १ वर्षभित्र जाहेरी दिनुपर्दछ।"
    }
  ];

  const idx = (setId - 1) % offenceData.length;
  return offenceData[idx];
}

// Slot 40: Accounting Principles, NFRS, Auditing & Financial Statements (Topic 8.5)
export function getBankingLawsSlot40(setId: number): MasterBilingualItem {
  const accData = [
    {
      qEng: "Which fundamental accounting concept assumes that an enterprise will continue its operational business in the foreseeable future without liquidation?",
      qNep: "कुनै व्यावसायिक संस्था निकट भविष्यमा बन्द नभई निरन्तर सञ्चालन भइरहनेछ भन्ने आधारभूत लेखा अवधारणा कुन हो?",
      correct: "Going Concern Concept / निरन्तरताको अवधारणा",
      distractors: [
        "Money Measurement Concept / मुद्रा मापन अवधारणा",
        "Accounting Period Concept / लेखा अवधि अवधारणा",
        "Conservatism Concept / रूढिवादी अवधारणा"
      ],
      expEng: "Going Concern Concept assumes that business operations will continue indefinitely.",
      expNep: "व्यवसाय दीर्घकालसम्म निरन्तर चलिरहन्छ भन्ने मान्यता Going Concern (निरन्तरता) को अवधारणा हो।"
    },
    {
      qEng: "Which fundamental accounting equation is universally observed in double-entry bookkeeping and Balance Sheet preparation?",
      qNep: "दोहोरो लेखा प्रणाली र वासलातमा सर्वमान्य रूपमा लागू हुने आधारभूत लेखा समीकरण कुन हो?",
      correct: "Assets = Liabilities + Equity / सम्पत्ति = दायित्व + पूँजी",
      distractors: [
        "Assets = Liabilities - Equity / सम्पत्ति = दायित्व - पूँजी",
        "Equity = Assets + Liabilities / पूँजी = सम्पत्ति + दायित्व",
        "Liabilities = Assets + Equity / दायित्व = सम्पत्ति + पूँजी"
      ],
      expEng: "The balance sheet equation is Assets = Liabilities + Owners' Equity.",
      expNep: "आधारभूत लेखा समीकरण: कुल सम्पत्ति = बाह्य दायित्व + शेयरधनीको पूँजी (Assets = Liabilities + Equity)।"
    },
    {
      qEng: "What does 'NFRS' stand for in Nepalese corporate accounting and financial reporting standards?",
      qNep: "नेपालमा वित्तीय विवरण तयारी गर्दा प्रयोग गरिने 'NFRS' को पूरा रूप के हो?",
      correct: "Nepal Financial Reporting Standards / नेपाल फाइनान्सियल रिपोर्टिङ स्ट्यान्डर्ड्स",
      distractors: [
        "National Financial Record System / नेसनल फाइनान्सियल रेकर्ड सिस्टम",
        "Nepal Fiscal Revenue Standards / नेपाल फिस्कल रेभिन्यु स्ट्यान्डर्ड्स",
        "Nepal Fund Reporting System / नेपाल फन्ड रिपोर्टिङ सिस्टम"
      ],
      expEng: "NFRS stands for Nepal Financial Reporting Standards, aligned with international IFRS.",
      expNep: "NFRS को पूरा रूप Nepal Financial Reporting Standards (नेपाल वित्तीय प्रतिवेदन मानहरू) हो।"
    },
    {
      qEng: "Which institution is legally authorized to formulate and issue Accounting Standards (NFRS/NAS) in Nepal?",
      qNep: "नेपालमा लेखा मानहरू (NFRS/NAS) तर्जुमा र जारी गर्ने वैधानिक निकाय कुन हो?",
      correct: "Accounting Standards Board / लेखा मान बोर्ड",
      distractors: [
        "Institute of Chartered Accountants of Nepal / आईक्यान",
        "Nepal Rastra Bank / नेपाल राष्ट्र बैंक",
        "Ministry of Finance / अर्थ मन्त्रालय"
      ],
      expEng: "The Accounting Standards Board (ASB) of Nepal formulates accounting standards.",
      expNep: "नेपाल चार्टर्ड एकाउन्टेन्ट्स ऐन २०५३ अन्तर्गत गठित लेखा मान बोर्ड (ASB) ले लेखा मान तर्जुमा गर्दछ।"
    },
    {
      qEng: "Which financial statement provides information regarding the operating, investing, and financing cash inflows and outflows of an enterprise?",
      qNep: "कुनै संस्थाको सञ्चालन, लगानी र वित्तीय गतिविधिबाट हुने नगद प्रवाहको यथार्थ विवरण कुन वित्तीय विवरणले दिन्छ?",
      correct: "Cash Flow Statement / नगद प्रवाह विवरण",
      distractors: [
        "Balance Sheet / वासलात",
        "Income Statement / नाफा-नोक्सान हिसाब",
        "Trial Balance / सन्तुलन परीक्षण"
      ],
      expEng: "The Cash Flow Statement categorizes cash inflows and outflows into operating, investing, and financing activities.",
      expNep: "नगद प्रवाह विवरण (Cash Flow Statement) ले सञ्चालन, लगानी र वित्तीय क्रियाकलापको नगद स्थिति देखाउँछ।"
    }
  ];

  const idx = (setId - 1) % accData.length;
  return accData[idx];
}

export function getBankingLawsQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 36: return getBankingLawsSlot36(setId);
    case 37: return getBankingLawsSlot37(setId);
    case 38: return getBankingLawsSlot38(setId);
    case 39: return getBankingLawsSlot39(setId);
    case 40: return getBankingLawsSlot40(setId);
    default: return getBankingLawsSlot36(setId);
  }
}
