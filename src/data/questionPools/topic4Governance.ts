import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 4: संविधान र शासन व्यवस्था (Topics 4.1 - 4.5) [5 MCQs]
// Slots 16 to 20 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 16: Constitution of Nepal, Fundamental Rights & Duties (Topic 4.1)
export function getGovernanceSlot16(setId: number): MasterBilingualItem {
  const constData = [
    {
      qEng: "How many Fundamental Rights are enshrined in Part 3 of the Constitution of Nepal?",
      qNep: "नेपालको संविधानको भाग ३ मा कतिवटा मौलिक हकहरूको व्यवस्था गरिएको छ?",
      correct: "31 / ३१ वटा",
      distractors: [
        "21 / २१ वटा",
        "25 / २५ वटा",
        "35 / ३५ वटा"
      ],
      expEng: "The Constitution provides 31 Fundamental Rights from Article 16 to Article 46.",
      expNep: "नेपालको संविधानको भाग ३, धारा १६ देखि ४६ सम्म कुल ३१ वटा मौलिक हकहरू रहेका छन्।"
    },
    {
      qEng: "Under which Article of the Constitution of Nepal are the duties of citizens specified?",
      qNep: "नेपालको संविधानको कुन धारामा नागरिकका कर्तव्यहरू उल्लेख गरिएको छ?",
      correct: "Article 48 / धारा ४८",
      distractors: [
        "Article 46 / धारा ४६",
        "Article 47 / धारा ४७",
        "Article 49 / धारा ४९"
      ],
      expEng: "Article 48 defines the duties of every citizen toward the nation.",
      expNep: "धारा ४८ मा राष्ट्रप्रति निष्ठावान हुनु, संविधान पालना गर्नु लगायतका नागरिक कर्तव्यहरू छन्।"
    },
    {
      qEng: "Under which Article of the Constitution of Nepal is the Right to Information guaranteed?",
      qNep: "नेपालको संविधानको कुन धारामा सूचनाको हकको व्यवस्था गरिएको छ?",
      correct: "Article 27 / धारा २७",
      distractors: [
        "Article 25 / धारा २५",
        "Article 28 / धारा २८",
        "Article 29 / धारा २९"
      ],
      expEng: "Article 27 of the Constitution guarantees the Right to Information.",
      expNep: "धारा २७ मा प्रत्येक नागरिकलाई आफ्नो वा सार्वजनिक सरोकारको कुनै पनि विषयको सूचना माग्ने र पाउने हक छ।"
    },
    {
      qEng: "Under which Article of the Constitution of Nepal is the Right to Employment guaranteed?",
      qNep: "नेपालको संविधानको कुन धारामा रोजगारीको हक सम्बन्धी व्यवस्था छ?",
      correct: "Article 33 / धारा ३३",
      distractors: [
        "Article 31 / धारा ३१",
        "Article 34 / धारा ३४",
        "Article 35 / धारा ३५"
      ],
      expEng: "Article 33 guarantees the Right to Employment to every citizen.",
      expNep: "धारा ३३ मा प्रत्येक नागरिकलाई रोजगारीको हक हुनेछ भनी उल्लेख छ।"
    },
    {
      qEng: "How many Parts, Articles, and Schedules are there in the Constitution of Nepal?",
      qNep: "नेपालको संविधानमा कति भाग, धारा र अनुसूचीहरू रहेका छन्?",
      correct: "35 Parts, 308 Articles, 9 Schedules / ३५ भाग, ३०८ धारा, ९ अनुसूची",
      distractors: [
        "30 Parts, 250 Articles, 7 Schedules / ३० भाग, २५० धारा, ७ अनुसूची",
        "35 Parts, 315 Articles, 9 Schedules / ३५ भाग, ३१५ धारा, ९ अनुसूची",
        "32 Parts, 305 Articles, 8 Schedules / ३२ भाग, ३०५ धारा, ८ अनुसूची"
      ],
      expEng: "The Constitution of Nepal has 35 Parts, 308 Articles, and 9 Schedules.",
      expNep: "नेपालको संविधानमा ३५ भाग, ३०८ धारा र ९ अनुसूचीहरू रहेका छन्।"
    }
  ];

  const idx = (setId - 1) % constData.length;
  return constData[idx];
}

// Slot 17: Directive Principles, Policies & State Responsibilities (Topic 4.2)
export function getGovernanceSlot17(setId: number): MasterBilingualItem {
  const directiveData = [
    {
      qEng: "In which Part of the Constitution of Nepal are the Directive Principles, Policies and Responsibilities of the State laid down?",
      qNep: "नेपालको संविधानको कुन भागमा राज्यका निर्देशक सिद्धान्त, नीति तथा दायित्वहरू उल्लेख छन्?",
      correct: "Part 4 / भाग ४",
      distractors: [
        "Part 3 / भाग ३",
        "Part 5 / भाग ५",
        "Part 6 / भाग ६"
      ],
      expEng: "Part 4 (Articles 49 to 55) specifies the Directive Principles and Policies.",
      expNep: "संविधानको भाग ४, धारा ४९ देखि ५५ सम्म राज्यका निर्देशक सिद्धान्त तथा नीतिहरू छन्।"
    },
    {
      qEng: "How many state policies (राज्यका नीतिहरू) are categorized under Article 51 of the Constitution of Nepal?",
      qNep: "नेपालको संविधानको धारा ५१ अन्तर्गत राज्यका कतिवटा नीतिहरू रहेका छन्?",
      correct: "13 Policies / १३ वटा",
      distractors: [
        "10 Policies / १० वटा",
        "12 Policies / १२ वटा",
        "15 Policies / १५ वटा"
      ],
      expEng: "Article 51 enumerates 13 distinct state policies (from national unity to tourism).",
      expNep: "धारा ५१ अन्तर्गत (क) देखि (ड) सम्म गरी कुल १३ वटा राज्यका नीतिहरू व्यवस्थित छन्।"
    },
    {
      qEng: "According to Article 54 of the Constitution, to whom must the Government submit the annual report on implementation of Directive Principles?",
      qNep: "संविधानको धारा ५४ बमोजिम राज्यका निर्देशक सिद्धान्त कार्यान्वयन सम्बन्धी वार्षिक प्रतिवेदन सरकारले कहाँ पेस गर्नुपर्छ?",
      correct: "President of Nepal / राष्ट्रपति समक्ष",
      distractors: [
        "Speaker of House / सभामुख समक्ष",
        "Chief Justice / प्रधानन्यायाधीश समक्ष",
        "Prime Minister / प्रधानमन्त्री समक्ष"
      ],
      expEng: "Article 54 mandates submitting the report annually to the President.",
      expNep: "धारा ५४ बमोजिम नेपाल सरकारले हरेक वर्ष राष्ट्रपति समक्ष प्रतिवेदन पेस गर्दछ।"
    },
    {
      qEng: "According to Article 55, can any court question whether any directive principle or policy has been implemented?",
      qNep: "संविधानको धारा ५५ अनुसार राज्यका निर्देशक सिद्धान्त र नीतिहरू कार्यान्वयन भए नभएको विषय अदालतमा उठाउन पाइन्छ?",
      correct: "No / अदालतमा प्रश्न उठाउन पाइँदैन",
      distractors: [
        "Yes / सर्वोच्च अदालतमा मात्र उठाउन पाइन्छ",
        "Yes / उच्च अदालतमा मात्र उठाउन पाइन्छ",
        "Yes / संसद्को अनुमति लिई उठाउन पाइन्छ"
      ],
      expEng: "Article 55 makes Directive Principles non-justiciable in court.",
      expNep: "धारा ५५ अनुसार यस भागमा उल्लिखित कुनै विषय कार्यान्वयन भए वा नभएको सम्बन्धमा कुनै अदालतमा प्रश्न उठाउन पाइने छैन।"
    },
    {
      qEng: "What is the primary economic objective of the State as per Article 50(3) of the Constitution of Nepal?",
      qNep: "नेपालको संविधानको धारा ५०(३) अनुसार राज्यको मुख्य आर्थिक उद्देश्य के हुनेछ?",
      correct: "समाजवाद उन्मुख स्वतन्त्र र समृद्ध अर्थतन्त्र / Socialism-oriented independent economy",
      distractors: [
        "पुँजीवादी खुला बजार अर्थतन्त्र / Capitalist free market economy",
        "पूर्ण नियन्त्रित राज्य अर्थतन्त्र / Centrally controlled state economy",
        "कल्याणकारी निजीकरण अर्थतन्त्र / Welfare privatization economy"
      ],
      expEng: "The economic objective is to build a socialism-oriented, independent, and self-reliant economy.",
      expNep: "सार्वजनिक, निजी र सहकारी क्षेत्रको सहभागितामा समाजवाद उन्मुख स्वतन्त्र अर्थतन्त्र विकास गर्ने उद्देश्य छ।"
    }
  ];

  const idx = (setId - 1) % directiveData.length;
  return directiveData[idx];
}

// Slot 18: Federal Structure & Schedules (Topic 4.3)
export function getGovernanceSlot18(setId: number): MasterBilingualItem {
  const scheduleData = [
    {
      qEng: "Which Schedule of the Constitution of Nepal enumerates the List of Federal Powers (सङ्घको अधिकार सूची)?",
      qNep: "नेपालको संविधानको कुन अनुसूचीमा सङ्घको अधिकार सूची (List of Federal Powers) उल्लेख गरिएको छ?",
      correct: "Schedule 5 / अनुसूची ५",
      distractors: [
        "Schedule 6 / अनुसूची ६",
        "Schedule 7 / अनुसूची ७",
        "Schedule 8 / अनुसूची ८"
      ],
      expEng: "Schedule 5 lists 35 subjects under the exclusive jurisdiction of the Federation.",
      expNep: "अनुसूची ५ मा सङ्घको अधिकार सम्बन्धी ३५ वटा विषयहरू उल्लेख गरिएका छन्।"
    },
    {
      qEng: "Which Schedule of the Constitution of Nepal enumerates the List of Local Level Powers (स्थानीय तहको अधिकार सूची)?",
      qNep: "नेपालको संविधानको कुन अनुसूचीमा स्थानीय तहको एकल अधिकार सूची उल्लेख गरिएको छ?",
      correct: "Schedule 8 / अनुसूची ८",
      distractors: [
        "Schedule 6 / अनुसूची ६",
        "Schedule 7 / अनुसूची ७",
        "Schedule 9 / अनुसूची ९"
      ],
      expEng: "Schedule 8 contains 22 subjects under the exclusive power of Local Levels.",
      expNep: "अनुसूची ८ मा स्थानीय तहको एकल अधिकार सम्बन्धी २२ वटा विषयहरू समावेश छन्।"
    },
    {
      qEng: "Which Schedule of the Constitution of Nepal contains the Concurrent Powers of Federation, Province, and Local Level?",
      qNep: "सङ्घ, प्रदेश र स्थानीय तहको साझा अधिकारको सूची संविधानको कुन अनुसूचीमा रहेको छ?",
      correct: "Schedule 9 / अनुसूची ९",
      distractors: [
        "Schedule 7 / अनुसूची ७",
        "Schedule 8 / अनुसूची ८",
        "Schedule 6 / अनुसूची ६"
      ],
      expEng: "Schedule 9 contains 15 concurrent subjects for all three levels of government.",
      expNep: "अनुसूची ९ मा सङ्घ, प्रदेश र स्थानीय तहको साझा अधिकार सूची (१५ वटा विषय) छ।"
    },
    {
      qEng: "Which Schedule of the Constitution contains the List of Provincial Powers (प्रदेशको अधिकार सूची)?",
      qNep: "नेपालको संविधानको कुन अनुसूचीमा प्रदेशको एकल अधिकार सूची समावेश छ?",
      correct: "Schedule 6 / अनुसूची ६",
      distractors: [
        "Schedule 5 / अनुसूची ५",
        "Schedule 7 / अनुसूची ७",
        "Schedule 8 / अनुसूची ८"
      ],
      expEng: "Schedule 6 contains 21 subjects exclusively assigned to the Provinces.",
      expNep: "अनुसूची ६ मा प्रदेशको एकल अधिकार सूची अन्तर्गत २१ वटा विषयहरू छन्।"
    },
    {
      qEng: "How many subjects are listed in the Concurrent List of Federation and Province (Schedule 7)?",
      qNep: "सङ्घ र प्रदेशको साझा अधिकारको सूची (अनुसूची ७) मा कतिवटा विषयहरू रहेका छन्?",
      correct: "25 Subjects / २५ वटा",
      distractors: [
        "21 Subjects / २१ वटा",
        "22 Subjects / २२ वटा",
        "35 Subjects / ३५ वटा"
      ],
      expEng: "Schedule 7 contains 25 concurrent subjects shared between Federation and Provinces.",
      expNep: "अनुसूची ७ मा सङ्घ र प्रदेशको साझा अधिकारका २५ वटा विषयहरू उल्लेख छन्।"
    }
  ];

  const idx = (setId - 1) % scheduleData.length;
  return scheduleData[idx];
}

// Slot 19: Organs of State & Constitutional Bodies (Topic 4.4)
export function getGovernanceSlot19(setId: number): MasterBilingualItem {
  const organsData = [
    {
      qEng: "According to the Constitution of Nepal, what is the total number of members in the House of Representatives (प्रतिनिधि सभा)?",
      qNep: "नेपालको संविधान बमोजिम प्रतिनिधि सभामा कुल कति जना सदस्यहरू रहने व्यवस्था छ?",
      correct: "275 Members / २७५ जना",
      distractors: [
        "205 Members / २०५ जना",
        "250 Members / २५० जना",
        "334 Members / ३३४ जना"
      ],
      expEng: "House of Representatives consists of 275 members (165 FPTP + 110 PR).",
      expNep: "प्रतिनिधि सभामा प्रत्यक्ष निर्वाचित १६५ र समानुपातिक ११० गरी कुल २७५ सदस्य हुन्छन्।"
    },
    {
      qEng: "What is the total number of members in the National Assembly (राष्ट्रिय सभा)?",
      qNep: "नेपालको संविधान अनुसार राष्ट्रिय सभामा कुल कति जना सदस्यहरू रहने व्यवस्था छ?",
      correct: "59 Members / ५९ जना",
      distractors: [
        "60 Members / ६० जना",
        "56 Members / ५६ जना",
        "75 Members / ७५ जना"
      ],
      expEng: "National Assembly consists of 59 members (56 elected from 7 provinces + 3 nominated by President).",
      expNep: "राष्ट्रिय सभामा प्रत्येक प्रदेशबाट ८ जनाका दरले ५६ जना र राष्ट्रपतिबाट मनोनीत ३ गरी ५९ सदस्य हुन्छन्।"
    },
    {
      qEng: "According to the Constitution of Nepal, what is the maximum number of ministers allowed in the Federal Council of Ministers including the Prime Minister?",
      qNep: "नेपालको संविधान अनुसार प्रधानमन्त्री सहित संघीय मन्त्रिपरिषद्मा बढीमा कति जना मन्त्रीहरू रहन सक्ने व्यवस्था छ?",
      correct: "25 Ministers / २५ जना",
      distractors: [
        "20 Ministers / २० जना",
        "30 Ministers / ३० जना",
        "15 Ministers / १५ जना"
      ],
      expEng: "Article 76(9) limits the Federal Council of Ministers to a maximum of 25 ministers.",
      expNep: "संविधानको धारा ७६(९) अनुसार प्रधानमन्त्रीसहित बढीमा २५ जना मन्त्रीहरू रहन सक्छन्।"
    },
    {
      qEng: "What is the retirement age of the Chief Justice and Justices of the Supreme Court of Nepal?",
      qNep: "नेपालको सर्वोच्च अदालतका प्रधानन्यायाधीश र न्यायाधीशहरूको उमेरको हद कति वर्ष रहेको छ?",
      correct: "65 Years / ६५ वर्ष",
      distractors: [
        "58 Years / ५८ वर्ष",
        "60 Years / ६० वर्ष",
        "63 Years / ६३ वर्ष"
      ],
      expEng: "Article 129(3) stipulates 65 years as the retirement age for Supreme Court judges.",
      expNep: "नेपालको संविधानको धारा १२९ अनुसार सर्वोच्च अदालतका न्यायाधीशको उमेर हद ६५ वर्ष हो।"
    },
    {
      qEng: "Who heads the Constitutional Council (संवैधानिक परिषद्) that recommends appointments of chiefs of constitutional bodies?",
      qNep: "संवैधानिक निकायका प्रमुख र पदाधिकारीहरूको नियुक्तिको सिफारिस गर्ने संवैधानिक परिषद्को अध्यक्ष को हुने व्यवस्था छ?",
      correct: "Prime Minister / प्रधानमन्त्री",
      distractors: [
        "Chief Justice / प्रधानन्यायाधीश",
        "Speaker of House / सभामुख",
        "President / राष्ट्रपति"
      ],
      expEng: "Article 284 designates the Prime Minister as Chairperson of the Constitutional Council.",
      expNep: "संविधानको धारा २८४ बमोजिम संवैधानिक परिषद्को अध्यक्ष प्रधानमन्त्री रहने व्यवस्था छ।"
    }
  ];

  const idx = (setId - 1) % organsData.length;
  return organsData[idx];
}

// Slot 20: Governance Laws - Good Governance, RTI & Anticorruption (Topic 4.5)
export function getGovernanceSlot20(setId: number): MasterBilingualItem {
  const lawsData = [
    {
      qEng: "According to the Right to Information Act 2064, within how many days must an Information Officer provide requested information?",
      qNep: "सूचनाको हक सम्बन्धी ऐन २०६४ अनुसार सूचना अधिकारीले माग गरिएको सूचना कति दिनभित्र उपलब्ध गराउनुपर्छ?",
      correct: "Within 15 Days / १५ दिनभित्र",
      distractors: [
        "Within 7 Days / ७ दिनभित्र",
        "Within 30 Days / ३० दिनभित्र",
        "Within 24 Hours / २४ घण्टाभित्र"
      ],
      expEng: "Section 7 mandates providing information within 15 days, or immediately if related to life/liberty.",
      expNep: "दफा ७ अनुसार सामान्य सूचना १५ दिनभित्र र व्यक्तिको जीउज्यान सम्बन्धी २४ घण्टाभित्र दिनुपर्छ।"
    },
    {
      qEng: "Under the Good Governance (Management and Operation) Act 2064, who acts as the Chief Executive Officer of a Ministry?",
      qNep: "सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन २०६४ बमोजिम मन्त्रालयको प्रशासनिक प्रमुख (मुख्य प्रशासकीय अधिकृत) को हुने व्यवस्था छ?",
      correct: "Secretary of the Ministry / मन्त्रालयको सचिव",
      distractors: [
        "Minister / मन्त्री",
        "Joint Secretary / सहसचिव",
        "Chief Secretary / मुख्य सचिव"
      ],
      expEng: "The Ministry Secretary is the administrative head under Good Governance Act Section 14.",
      expNep: "सुशासन ऐन अनुसार मन्त्रालयको प्रशासनिक नेतृत्व सचिवले गर्दछ।"
    },
    {
      qEng: "According to the Prevention of Corruption Act 2059, within how many days must a public post-holder submit property details after the end of each fiscal year?",
      qNep: "भ्रष्टाचार निवारण ऐन २०५९ बमोजिम सार्वजनिक पद धारण गरेको व्यक्तिले आर्थिक वर्ष समाप्त भएको कति दिनभित्र सम्पत्ति विवरण पेस गर्नुपर्छ?",
      correct: "Within 60 Days / ६० दिनभित्र",
      distractors: [
        "Within 30 Days / ३० दिनभित्र",
        "Within 45 Days / ४५ दिनभित्र",
        "Within 90 Days / ९० दिनभित्र"
      ],
      expEng: "Section 50 requires submitting property details within 60 days of the fiscal year close.",
      expNep: "दफा ५० बमोजिम आर्थिक वर्ष सकिएको ६० दिनभित्र तोकिएको निकायमा सम्पत्ति विवरण बुझाउनुपर्छ।"
    },
    {
      qEng: "Which constitutional body is legally empowered to investigate corruption and abuse of authority by public post-holders in Nepal?",
      qNep: "नेपालमा सार्वजनिक पद धारण गरेका व्यक्तिहरूको भ्रष्टाचार र अख्तियार दुरुपयोगको अनुसन्धान गर्ने संवैधानिक निकाय कुन हो?",
      correct: "Commission for the Investigation of Abuse of Authority / अख्तियार दुरुपयोग अनुसन्धान आयोग",
      distractors: [
        "National Vigilance Center / राष्ट्रिय सतर्कता केन्द्र",
        "Judicial Council / न्याय परिषद्",
        "Office of Auditor General / महालेखा परीक्षकको कार्यालय"
      ],
      expEng: "Part 21, Articles 238-239 of the Constitution establishes the CIAA for corruption investigations.",
      expNep: "संविधानको भाग २१ अनुसार अख्तियार दुरुपयोग अनुसन्धान आयोगले अनुसन्धान र अभियोजन गर्छ।"
    },
    {
      qEng: "Which body conducts independent financial audits of all federal, provincial, and local government offices in Nepal?",
      qNep: "नेपालमा सङ्घ, प्रदेश र स्थानीय तहका सबै सरकारी कार्यालयहरूको अन्तिम लेखापरीक्षण कुन संवैधानिक निकायले गर्दछ?",
      correct: "Office of the Auditor General / महालेखा परीक्षकको कार्यालय",
      distractors: [
        "Financial Comptroller General Office / महालेखा नियन्त्रक कार्यालय",
        "Public Accounts Committee / सार्वजनिक लेखा समिति",
        "Ministry of Finance / अर्थ मन्त्रालय"
      ],
      expEng: "Article 241 empowers the Auditor General to conduct statutory final audits of government accounts.",
      expNep: "संविधानको धारा २४१ अनुसार महालेखा परीक्षकले सरकारी निकायहरूको अन्तिम लेखापरीक्षण गर्दछ।"
    }
  ];

  const idx = (setId - 1) % lawsData.length;
  return lawsData[idx];
}

export function getGovernanceQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 16: return getGovernanceSlot16(setId);
    case 17: return getGovernanceSlot17(setId);
    case 18: return getGovernanceSlot18(setId);
    case 19: return getGovernanceSlot19(setId);
    case 20: return getGovernanceSlot20(setId);
    default: return getGovernanceSlot16(setId);
  }
}
