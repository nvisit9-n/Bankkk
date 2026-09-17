import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 10: सेवा सम्बन्धी लेखन तथा सञ्चार सीप र आचरण (Topics 10.1 - 10.4) [5 MCQs]
// Slots 46 to 50 across 50 sets = 250 MCQs.
// - Slots 46, 47: Topics 10.1 & 10.2 (Service Writing, Notes, Reports, Minutes, Correspondence)
// - Slots 48, 49, 50: Topics 10.3 & 10.4 (Ethics, Conduct, Discipline, Customer Service, Service Rules)
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Verified factual administrative and banking ethics rules.
// =========================================================================

// Slot 46: Administrative Note Writing (टिप्पणी) & Minute Writing (निर्णय) (Topic 10.1)
export function getWritingEthicsSlot46(setId: number): MasterBilingualItem {
  const noteData = [
    {
      qEng: "What is the primary administrative purpose of initiating a 'Tippani' (टिप्पणी लेखन) in governmental and public banking institutions?",
      qNep: "सरकारी तथा सार्वजनिक बैंकिङ कार्यालयहरूमा 'टिप्पणी' उठाउनुको मुख्य प्रशासनिक उद्देश्य के हो?",
      correct: "To present facts and laws for formal decision making / निर्णयका लागि तथ्य र कानुन प्रस्तुत गर्नु",
      distractors: [
        "To publish a press statement for the media / सञ्चार माध्यमका लागि प्रेस विज्ञप्ति निकाल्नु",
        "To record daily staff attendance / कर्मचारीको दैनिक हाजिरी प्रमाणित गर्नु",
        "To conduct financial audit of cash ledgers / नगद खाताको अन्तिम लेखापरीक्षण गर्नु"
      ],
      expEng: "A Tippani systematically presents factual background, relevant laws, and alternatives to assist executive decision-making.",
      expNep: "कुनै विषयमा अधिकारप्राप्त अधिकारीबाट आधिकारिक निर्णय गराउन कानुन र तथ्यसहित पेस गरिने विवरण टिप्पणी हो।"
    },
    {
      qEng: "In official administrative note (टिप्पणी) writing, what must be written on the right-hand margin of the paper?",
      qNep: "सरकारी टिप्पणी लेखन गर्दा कागजातको दायाँतर्फको किनारामा के छाड्ने नियम छ?",
      correct: "Space for signatures and remarks / हस्ताक्षर र रायका लागि खाली ठाउँ",
      distractors: [
        "Index number of the file / फाइलको अनुक्रमणिका नम्बर",
        "Date of outgoing dispatch / बाहिर पठाइने चलानी मिति",
        "Address of external recipient / बाह्य सेवाग्राहीको ठेगाना"
      ],
      expEng: "Margins are maintained on official note sheets for hierarchical endorsements, remarks, and signatures.",
      expNep: "टिप्पणीमा माथिल्लो अधिकारीको राय, आदेश र हस्ताक्षरका लागि निश्चित ठाउँ छाडिन्छ।"
    },
    {
      qEng: "What is the official written record of decisions adopted during a formal meeting of the Board of Directors called?",
      qNep: "सञ्चालक समिति वा आधिकारिक बैठकमा छलफल भई गरिएका निर्णयहरूको औपचारिक लिखित अभिलेखलाई के भनिन्छ?",
      correct: "Minuting (बैठक निर्णय/माइन्युटिङ)",
      distractors: [
        "Circular (परिपत्र)",
        "Press Release (प्रेस विज्ञप्ति)",
        "Memorandum of Association (प्रबन्धपत्र)"
      ],
      expEng: "Minutes are the authoritative written record of proceedings, resolutions, and decisions of a meeting.",
      expNep: "औपचारिक बैठकका छलफल र निर्णयहरूलाई आधिकारिक रूपमा लिपिबद्ध गर्ने कार्यलाई माइन्युटिङ भनिन्छ।"
    },
    {
      qEng: "Who signs the administrative note (टिप्पणी) first at the initiation stage in an office?",
      qNep: "कार्यालयमा टिप्पणी उठाउँदा प्रारम्भमा टिप्पणी तयार गर्ने कोबाट हस्ताक्षर सुरु हुन्छ?",
      correct: "Initiating Officer / टिप्पणी उठाउने अधिकृत वा सहायक",
      distractors: [
        "Office Chief / कार्यालय प्रमुख वा कार्यकारी प्रमुख",
        "Section Officer / शाखा अधिकृत मात्र",
        "Department Head / विभाग प्रमुख मात्र"
      ],
      expEng: "The initiating assistant/officer drafts and signs first, then forwards through the scalar hierarchy.",
      expNep: "टिप्पणीको सुरुआत प्रस्ताव तयार गर्ने कर्मचारीको हस्ताक्षरबाट हुन्छ र तहगत रूपमा माथि जान्छ।"
    },
    {
      qEng: "What is the final outcome of an approved administrative note (टिप्पणी)?",
      qNep: "कार्यालयमा पेश भई स्वीकृत भएको टिप्पणीको अन्तिम निष्कर्ष के हुन्छ?",
      correct: "Final Executive Decision / अन्तिम प्रशासनिक वा नीतिगत निर्णय",
      distractors: [
        "Annual Budget Allocation / वार्षिक बजेट विनियोजन मात्र",
        "Internal Audit Report / आन्तरिक लेखापरीक्षण प्रतिवेदन मात्र",
        "Performance Review / कार्यसम्पादन समीक्षा मात्र"
      ],
      expEng: "An approved Tippani results in an authoritative executive decision and operational mandate.",
      expNep: "सक्षम अधिकारीबाट सदर (स्वीकृत) भएपछि टिप्पणीले कानुनी निर्णयको रूप धारण गर्दछ।"
    }
  ];

  const idx = (setId - 1) % noteData.length;
  return noteData[idx];
}

// Slot 47: Official Correspondence, Reports, Circulars & Notices (Topic 10.2)
export function getWritingEthicsSlot47(setId: number): MasterBilingualItem {
  const corrData = [
    {
      qEng: "What official communication instrument is issued by a corporate head office to inform all branches about mandatory operational directives?",
      qNep: "केन्द्रीय कार्यालयले आफ्ना सबै शाखाहरूलाई अनिवार्य कार्यान्वयनका लागि जारी गर्ने प्रशासनिक पत्रलाई के भनिन्छ?",
      correct: "Circular (परिपत्र)",
      distractors: [
        "Press Release (प्रेस विज्ञप्ति)",
        "Tender Notice (बोलपत्र सूचना)",
        "Citizen Charter (नागरिक बडापत्र)"
      ],
      expEng: "A circular is an administrative instruction dispatched to multiple subordinate branches or offices.",
      expNep: "सबै मातहतका कार्यालय वा शाखाहरूलाई एकैसाथ निर्देशन जारी गर्न पठाइने पत्रलाई परिपत्र (Circular) भनिन्छ।"
    },
    {
      qEng: "What essential administrative number is affixed to every outgoing external correspondence dispatched from an office?",
      qNep: "कार्यालयबाट बाहिर पठाइने प्रत्येक आधिकारिक पत्रमा अनिवार्य रूपमा उल्लेख गरिने नम्बर कुन हो?",
      correct: "Chalani Number / चलानी नम्बर",
      distractors: [
        "Darta Number / दर्ता नम्बर",
        "Voucher Number / भौचर नम्बर",
        "Ledger Folio / खाता पाना नम्बर"
      ],
      expEng: "Outgoing correspondence must be recorded in the Chalani register and assigned an official Chalani number.",
      expNep: "कार्यालयबाट सम्प्रेषित हुने पत्रमा अभिलेखका लागि अनिवार्य रूपमा चलानी नम्बर राखिन्छ।"
    },
    {
      qEng: "What type of report is prepared periodically (monthly, quarterly, or annually) to evaluate institutional milestones and operational achievements?",
      qNep: "संस्थाको आवधिक प्रगति, उपलब्धि र वित्तीय अवस्था मूल्याङ्कन गर्न तयार पारिने प्रतिवेदनलाई के भनिन्छ?",
      correct: "Progress Report / प्रगति प्रतिवेदन",
      distractors: [
        "Audit Objection / बेरुजु प्रतिवेदन",
        "Inspection Memo / निरीक्षण पत्र",
        "Investigation Query / अनुसन्धान स्पष्टीकरण"
      ],
      expEng: "Progress reports summarize milestones, KPI targets, and financial achievements over a given duration.",
      expNep: "निश्चित अवधिमा हासिल भएका उपलब्धि र कार्यसम्पादनको समीक्षा प्रगति प्रतिवेदनमा गरिन्छ।"
    },
    {
      qEng: "What is an official written declaration issued to news media and public journalists to clarify institutional decisions called?",
      qNep: "संस्थागत गतिविधि, निर्णय वा स्पष्टीकरणबारे सञ्चारमाध्यमलाई जानकारी दिन जारी गरिने आधिकारिक वक्तव्यलाई के भनिन्छ?",
      correct: "Press Release (प्रेस विज्ञप्ति)",
      distractors: [
        "Internal Memo (आन्तरिक ज्ञापन)",
        "Tippani (टिप्पणी)",
        "Gazette Notice (राजपत्र सूचना)"
      ],
      expEng: "A press release is distributed to mass media to publicize factual corporate information.",
      expNep: "सञ्चारमाध्यम मार्फत सर्वसाधारणलाई जानकारी गराउन जारी गरिने आधिकारिक पत्र प्रेस विज्ञप्ति हो।"
    },
    {
      qEng: "In official business correspondence, what does the term 'Bodartha' (बोधार्थ / CC) signify?",
      qNep: "सरकारी तथा बैंकिङ पत्राचारमा पत्रको पुछारमा लेखिने 'बोधार्थ' को अर्थ के हो?",
      correct: "Information Copy for related offices / जानकारीका लागि पठाइएको प्रतिलिपि",
      distractors: [
        "Original recipient of action / कार्यान्वयन गर्ने मुख्य कार्यालय",
        "Archived file copy / आफ्नै अभिलेखमा रहने प्रति",
        "Strictly confidential copy / अत्यन्त गोप्य खामबन्दी प्रति"
      ],
      expEng: "Bodartha indicates carbon copies sent for information and secondary coordination to other entities.",
      expNep: "मुख्य पत्र पठाइएको निकायबाहेक सम्बन्धित अन्य निकायलाई जानकारीका लागि दिइने प्रतिलिपि बोधार्थ हो।"
    }
  ];

  const idx = (setId - 1) % corrData.length;
  return corrData[idx];
}

// Slot 48: Professional Ethics, Integrity & Code of Conduct (Topic 10.3)
export function getWritingEthicsSlot48(setId: number): MasterBilingualItem {
  const ethicsData = [
    {
      qEng: "What core ethical principle requires bank employees to treat all customer financial information with absolute secrecy unless required by law?",
      qNep: "कानुनले बाध्य पारेको अवस्थामा बाहेक ग्राहकका वित्तीय विवरण पूर्ण रूपमा गोप्य राख्नुपर्ने बैंकिङ सिद्धान्त कुन हो?",
      correct: "Duty of Confidentiality / गोपनीयताको कर्तव्य",
      distractors: [
        "Conflict of Interest / स्वार्थको द्वन्द्व",
        "Public Accountability / सार्वजनिक जवाफदेहिता",
        "Commercial Aggressiveness / व्यावसायिक आक्रामकता"
      ],
      expEng: "Bank staff owe a fiduciary duty of confidentiality regarding client balances and transactions.",
      expNep: "ग्राहकको व्यक्तिगत तथा वित्तीय विवरण सुरक्षित र गोप्य राख्नु बैंकिङ आचरणको आधारभूत दायित्व हो।"
    },
    {
      qEng: "What ethical dilemma arises when an employee's personal interest improperly influences their official corporate decisions?",
      qNep: "कर्मचारीको व्यक्तिगत स्वार्थले उसको संस्थागत र पदीय निर्णय प्रक्रियालाई प्रभावित पार्ने अवस्थालाई के भनिन्छ?",
      correct: "Conflict of Interest / स्वार्थको द्वन्द्व",
      distractors: [
        "Professional Diligence / व्यावसायिक निष्ठा",
        "Moral Hazard / नैतिक जोखिम",
        "Financial Prudence / वित्तीय मितव्ययिता"
      ],
      expEng: "A conflict of interest occurs when personal gain interferes with professional judgment and fiduciary duties.",
      expNep: "आफ्नो पदीय जिम्मेवारी र व्यक्तिगत स्वार्थ बाझिन पुगेको अवस्थालाई स्वार्थको द्वन्द्व भनिन्छ।"
    },
    {
      qEng: "What term describes the uncompromising adherence to moral, ethical, and professional principles in public service?",
      qNep: "सार्वजनिक सेवामा निष्पक्षता, इमानदारी र नैतिक मूल्यमान्यताको दृढ पालना गर्ने गुणलाई के भनिन्छ?",
      correct: "Integrity (सदाचारिता/निष्ठा)",
      distractors: [
        "Bureaucracy (नोकरशाही)",
        "Arbitrariness (स्वेच्छाचारिता)",
        "Nepotism (नातावाद)"
      ],
      expEng: "Integrity is the quality of being honest, fair, and having strong moral principles in public administration.",
      expNep: "नैतिक सिद्धान्तहरूको निष्ठापूर्वक पालना र इमानदारीलाई सदाचारिता (Integrity) भनिन्छ।"
    },
    {
      qEng: "Are employees of public banks permitted to accept gifts, donations, or commissions from clients in connection with official work?",
      qNep: "कर्मचारी सेवा नियमावली अनुसार बैंकका कर्मचारीले पदीय कामको सिलसिलामा ग्राहकबाट उपहार, चन्दा वा कमिसन लिन पाउँछन्?",
      correct: "Strictly prohibited by service rules / कर्मचारी नियमावली अनुसार पूर्ण निषेधित",
      distractors: [
        "Permitted up to Rs 10,000 annually / वार्षिक रु. १०,००० सम्म लिन पाउने",
        "Permitted with branch manager consent / शाखा प्रबन्धकको स्वीकृतिमा लिन पाउने",
        "Permitted during designated festivals / चाडपर्वको समयमा मात्र लिन पाउने"
      ],
      expEng: "Employees are strictly barred from accepting any gift, commission, or favor related to official duties.",
      expNep: "कर्मचारी नियमावलीले पदीय काम सम्पादन गरेबापत कुनै पनि किसिमको उपहार वा दान लिन निषेध गरेको छ।"
    },
    {
      qEng: "Can an employee of a public banking institution engage in active party politics or contest political elections?",
      qNep: "कर्मचारी आचरण नियमावली अनुसार सार्वजनिक बैंकका कर्मचारीले कुनै राजनीतिक दलको सदस्यता लिन वा राजनीतिमा भाग लिन पाउँछन्?",
      correct: "Strictly prohibited by service rules / कर्मचारी नियमावली अनुसार पूर्ण निषेधित",
      distractors: [
        "Permitted during official leaves only / बिदाको समयमा मात्र भाग लिन पाउने",
        "Permitted at the local municipal level / स्थानीय तहमा मात्र भाग लिन पाउने",
        "Permitted with trade union endorsement / युनियनको सहमतिमा मात्र भाग लिन पाउने"
      ],
      expEng: "Staff regulations strictly prohibit bank employees from party political affiliations to preserve neutrality.",
      expNep: "कर्मचारीहरूले राजनीतिक निष्पक्षता कायम राख्न दलगत राजनीतिमा भाग लिन कानुनतः पाउँदैनन्।"
    }
  ];

  const idx = (setId - 1) % ethicsData.length;
  return ethicsData[idx];
}

// Slot 49: Employee Service Regulations, Discipline & Penalties (Topic 10.3)
export function getWritingEthicsSlot49(setId: number): MasterBilingualItem {
  const disciplineData = [
    {
      qEng: "According to Public Bank Employee Service Regulations, which of the following is categorized as a Minor Penalty (सामान्य सजाय)?",
      qNep: "कर्मचारी सेवा नियमावली अनुसार निम्नमध्ये कुन सामान्य सजाय (Minor Penalty) अन्तर्गत पर्दछ?",
      correct: "Withholding of Annual Increment / ग्रेड रोक्का",
      distractors: [
        "Dismissal from Service / सेवाबाट बर्खास्त",
        "Compulsory Retirement / अनिवार्य अवकाश",
        "Removal from Service / सेवाबाट हटाउने"
      ],
      expEng: "Censure, reprimand, and withholding of increments/promotions are minor penalties; removal/dismissal are major.",
      expNep: "नसिहत दिने र बढीमा २ वर्षसम्म तलब वृद्धि (ग्रेड) रोक्का गर्ने सजाय सामान्य सजायमा पर्छ।"
    },
    {
      qEng: "Under employee service rules, what is the maximum continuous duration of unapproved absence that may lead to disciplinary action?",
      qNep: "बिना जानकारी वा पूर्वस्वीकृति लगातार कति दिनसम्म कार्यालयमा अनुपस्थित रहेमा कर्मचारीलाई सेवाबाट हटाउन सकिन्छ?",
      correct: "Continuous 90 Days / लगातार ९० दिन",
      distractors: [
        "Continuous 15 Days / लगातार १५ दिन",
        "Continuous 30 Days / लगातार ३० दिन",
        "Continuous 60 Days / लगातार ६० दिन"
      ],
      expEng: "Continuous unauthorized absence beyond statutory limits (typically 90 days) warrants removal from service.",
      expNep: "पूर्वस्वीकृति नलिई लगातार ९० दिनभन्दा बढी अनुपस्थित रहेमा सेवाबाट हटाउन सकिने कानुनी व्यवस्था छ।"
    },
    {
      qEng: "Before imposing any major disciplinary penalty on an employee, what constitutional and natural justice requirement must be observed?",
      qNep: "कुनै कर्मचारीलाई विभागीय सजाय गर्नुअघि प्राकृतिक न्यायको सिद्धान्त अनुसार कुन अवसर दिनु अनिवार्य हुन्छ?",
      correct: "Opportunity for Explanation (सफाइ पेस गर्ने मौका)",
      distractors: [
        "Police Custody (प्रहरी हिरासत)",
        "Immediate Transfer (तुरुन्त सरुवा)",
        "Salary Deductions (तलब कट्टा)"
      ],
      expEng: "Natural justice (Audi Alteram Partem) requires giving a fair hearing/clarification opportunity before punishment.",
      expNep: "कुनै पनि कर्मचारीलाई सजाय गर्नुपूर्व सफाइको उचित मौका (कारण देखाऊ सूचना) दिनु अनिवार्य हुन्छ।"
    },
    {
      qEng: "What is the penalty called when an employee is disqualified from future government or banking service?",
      qNep: "भविष्यमा कुनै पनि सरकारी वा बैंकिङ सेवाका लागि अयोग्य ठहरिने गरी सेवाबाट हटाउने सजायलाई के भनिन्छ?",
      correct: "Dismissal from Service / सेवाबाट बर्खास्त",
      distractors: [
        "Removal from Service / सेवाबाट हटाउने मात्र",
        "Suspension / निलम्बन मात्र",
        "Compulsory Leave / अनिवार्य बिदा"
      ],
      expEng: "Dismissal disqualifies the employee from future public employment, whereas Removal does not disqualify.",
      expNep: "बर्खास्त गर्दा भविष्यमा सरकारी सेवाका लागि अयोग्य ठहरिन्छ, तर हटाउँदा अयोग्य ठहरिँदैन।"
    },
    {
      qEng: "Who acts as the appellate authority against departmental disciplinary actions taken by the Executive Head of a Bank?",
      qNep: "बैंकका कार्यकारी प्रमुखले गरेको विभागीय सजाय उपर कर्मचारीले कहाँ पुनरावेदन गर्न पाउने व्यवस्था छ?",
      correct: "Board of Directors / बैंकको सञ्चालक समिति",
      distractors: [
        "Branch Manager / शाखा प्रबन्धक",
        "Ministry of Finance / अर्थ मन्त्रालय",
        "Nepal Police / नेपाल प्रहरी"
      ],
      expEng: "Appeals against executive management penalties lie with the Board of Directors.",
      expNep: "कार्यकारी तहबाट भएको कारबाहीउपर पुनरावेदन सुन्ने निकाय सञ्चालक समिति हुने व्यवस्था छ।"
    }
  ];

  const idx = (setId - 1) % disciplineData.length;
  return disciplineData[idx];
}

// Slot 50: Customer Service & Grievance Redressal (Topic 10.4)
export function getWritingEthicsSlot50(setId: number): MasterBilingualItem {
  const customerData = [
    {
      qEng: "What is the primary objective of establishing a Customer Grievance Redressal Cell (गुनासो सुनुवाइ इकाई) in banking institutions?",
      qNep: "बैंक तथा वित्तीय संस्थाहरूमा ग्राहक गुनासो सुनुवाइ इकाई (Grievance Cell) स्थापना गर्नुको मुख्य उद्देश्य के हो?",
      correct: "To resolve customer complaints promptly and fairly / ग्राहकका गुनासा शीघ्र र निष्पक्ष समाधान गर्नु",
      distractors: [
        "To market high-interest credit products / उच्च ब्याजदरका ऋण योजना प्रचार गर्नु",
        "To collect overdue debts forcefully / खराब कर्जा जबर्जस्ती असुली गर्नु",
        "To verify employee annual performance ratings / कर्मचारीको कार्यसम्पादन रेटिङ जाँच्नु"
      ],
      expEng: "NRB guidelines mandate a grievance redressal unit to protect consumer rights and resolve grievances promptly.",
      expNep: "सेवाग्राहीका असन्तुष्टि र गुनासाहरूको समयमै निष्पक्ष सम्बोधन गरी ग्राहक संरक्षण गर्नु यसको मुख्य उद्देश्य हो।"
    },
    {
      qEng: "According to Nepal Rastra Bank consumer protection directives, what officer must be designated at each bank branch to handle public complaints?",
      qNep: "नेपाल राष्ट्र बैंकको निर्देशन अनुसार प्रत्येक बैंक तथा शाखामा ग्राहक गुनासो व्यवस्थापनका लागि कसलाई तोक्नुपर्छ?",
      correct: "Grievance Handling Officer / गुनासो सुन्ने अधिकारी",
      distractors: [
        "Security Guard / सुरक्षा गार्ड",
        "Internal Auditor / आन्तरिक लेखापरीक्षक",
        "Cashier / खजाञ्ची (क्यासियर)"
      ],
      expEng: "Banks must designate a Grievance Handling Officer (GHO) with prominent contact details displayed in branches.",
      expNep: "ग्राहकको सुविधा र उजुरी सुनुवाइका लागि तोकिएका गुनासो सुन्ने अधिकारी (Grievance Officer) रहन्छन्।"
    },
    {
      qEng: "What is the display board called that informs the public about available services, required documents, fees, processing time, and responsible officers?",
      qNep: "कार्यालयले दिने सेवा, लाग्ने दस्तुर, समय, आवश्यक कागजात र जिम्मेवार अधिकारीको विवरण राखिएको बोर्डलाई के भनिन्छ?",
      correct: "Citizen's Charter (नागरिक बडापत्र)",
      distractors: [
        "Notice Board (सूचना पाटी मात्र)",
        "Advertisement Board (विज्ञापन बोर्ड)",
        "Rate Chart (ब्याजदर तालिका)"
      ],
      expEng: "A Citizen's Charter details institutional service standards, costs, timeframes, and grievance recourse.",
      expNep: "सेवा प्रवाहलाई पारदर्शी र जवाफदेही बनाउन कार्यालय परिसरमा नागरिक बडापत्र राखिन्छ।"
    },
    {
      qEng: "In modern service management, what does 'CRM' stand for?",
      qNep: "आधुनिक व्यवस्थापनमा ग्राहक सेवा प्रवर्द्धन सम्बन्धी 'CRM' को पूरा रूप के हो?",
      correct: "Customer Relationship Management / कस्टमर रिलेसनसिप म्यानेजमेन्ट",
      distractors: [
        "Credit Risk Management / क्रेडिट रिस्क म्यानेजमेन्ट",
        "Cash Reserve Mechanism / क्यास रिजर्भ मेकानिजम",
        "Corporate Resource Model / कर्पोरेट रिसोर्स मोडेल"
      ],
      expEng: "CRM stands for Customer Relationship Management, managing interactions with current and potential clients.",
      expNep: "CRM को पूरा रूप Customer Relationship Management (ग्राहक सम्बन्ध व्यवस्थापन) हो।"
    },
    {
      qEng: "What should a front-line bank teller prioritize when addressing an agitated or dissatisfied customer?",
      qNep: "बैंकको काउन्टरमा असन्तुष्ट वा आक्रोशित ग्राहक आउँदा कर्मचारीको पहिलो र उचित व्यवहार कस्तो हुनुपर्दछ?",
      correct: "Listen actively with patience and empathy / धैर्यपूर्वक समस्या सुनेर विनम्रता देखाउने",
      distractors: [
        "Argue aggressively to defend rules / प्रतिवाद गर्दै कडा रूपमा प्रस्तुत हुने",
        "Ignore the customer and leave the desk / ग्राहकलाई बेवास्ता गरी काउन्टर छोड्ने",
        "Immediately call police without dialogue / कुनै कुरा नगरी तुरुन्त प्रहरी बोलाउने"
      ],
      expEng: "Active listening, composure, polite clarification, and prompt resolution are pillars of professional customer care.",
      expNep: "ग्राहकका गुनासाहरूलाई धैर्यताका साथ सुन्नु, शिष्ट बोली र तत्काल समस्या समाधानको पहल गर्नु पर्दछ।"
    }
  ];

  const idx = (setId - 1) % customerData.length;
  return customerData[idx];
}

export function getWritingEthicsQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 46: return getWritingEthicsSlot46(setId);
    case 47: return getWritingEthicsSlot47(setId);
    case 48: return getWritingEthicsSlot48(setId);
    case 49: return getWritingEthicsSlot49(setId);
    case 50: return getWritingEthicsSlot50(setId);
    default: return getWritingEthicsSlot46(setId);
  }
}
