import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 10: भाषा सक्षमता (Language Competence: English & Nepali)
// Official Syllabus Weightage: English (10.1) [2.5 MCQs] & Nepali (10.2) [2.5 MCQs]
// Slots 46 to 50 across 50 sets = 250 MCQs.
// - Slot 46: English Grammar & Syntax (Prepositions, Tenses, Subject-Verb Agreement, Conditionals)
// - Slot 47: English Vocabulary, Idioms, Spelling & Synonyms/Antonyms
// - Slot 48: English & Nepali Language Competence (Translation, Voice, Direct/Indirect Speech, पदवर्ग)
// - Slot 49: Nepali Grammar & Spelling (शुद्ध/अशुद्ध शब्द, वर्णविन्यास, हिज्जे)
// - Slot 50: Nepali Vocabulary, Idioms & Semantics (उखान, टुक्का, सन्धि-समास, विपरीतार्थक र पर्यायवाची)
// Strict Option Uniformity: Identical length, format, detail, and structure.
// =========================================================================

// Slot 46: English Grammar & Syntax (Topic 10.1)
export function getLanguageSlot46(setId: number): MasterBilingualItem {
  const grammarData: MasterBilingualItem[] = [
    {
      qEng: "Select the correct preposition to fill in the blank: 'The senior auditor insisted ______ inspecting all original cash vouchers.'",
      qNep: "खाली ठाउँ भर्नका लागि उपयुक्त Preposition छान्नुहोस्: 'The senior auditor insisted ______ inspecting all original cash vouchers.'",
      correct: "on",
      distractors: ["in", "at", "for"],
      expEng: "The verb 'insist' is strictly followed by the preposition 'on' ('insist on doing something').",
      expNep: "अंग्रेजी व्याकरणमा 'insist' क्रियापछि सधैँ 'on' preposition प्रयोग हुन्छ।"
    },
    {
      qEng: "Complete the sentence with the correct verb agreement: 'Neither the managing director nor the board members ______ present at the emergency briefing.'",
      qNep: "सही क्रियापद छान्नुहोस्: 'Neither the managing director nor the board members ______ present at the emergency briefing.'",
      correct: "were",
      distractors: ["was", "is", "has been"],
      expEng: "When subjects are joined by 'neither...nor', the verb agrees with the subject closest to it ('board members' is plural).",
      expNep: "'Neither...nor' ले जोडिएका कर्ताहरूमा क्रियापद सबैभन्दा नजिकको कर्ता अनुसार बहुवचन (were) हुनुपर्दछ।"
    },
    {
      qEng: "Choose the correct conditional form: 'If the central bank ______ the policy rate, commercial borrowing will increase.'",
      qNep: "सही क्रियापद छान्नुहोस्: 'If the central bank ______ the policy rate, commercial borrowing will increase.'",
      correct: "lowers",
      distractors: ["lowered", "will lower", "had lowered"],
      expEng: "In a first conditional sentence (real future condition), the if-clause uses the simple present tense.",
      expNep: "पहिलो सर्तयुक्त वाक्यमा If-clause मा Simple Present Tense (lowers) प्रयोग हुन्छ।"
    },
    {
      qEng: "Identify the correct passive voice: 'The loan committee approved the credit facility yesterday.'",
      qNep: "सही Passive Voice छान्नुहोस्: 'The loan committee approved the credit facility yesterday.'",
      correct: "The credit facility was approved yesterday / कर्जा सुविधा हिजो स्वीकृत गरियो",
      distractors: [
        "The credit facility is approved yesterday / कर्जा सुविधा हिजो स्वीकृत गरिन्छ",
        "The credit facility had approved yesterday / कर्जा सुविधा हिजो स्वीकृत भएको थियो",
        "The credit facility has been approved yesterday / कर्जा सुविधा हिजो स्वीकृत गरिएको छ"
      ],
      expEng: "Simple past tense passive is formed using 'was/were + past participle' (was approved).",
      expNep: "Simple Past Tense को Passive Voice बनाउँदा 'was/were + V3' (was approved) को प्रयोग हुन्छ।"
    },
    {
      qEng: "Select the correct tag question: 'You have not submitted the loan application yet, ______?'",
      qNep: "उपयुक्त Tag Question छान्नुहोस्: 'You have not submitted the loan application yet, ______?'",
      correct: "have you",
      distractors: ["haven't you", "did you", "didn't you"],
      expEng: "A negative statement takes a positive question tag with the same auxiliary verb ('have you').",
      expNep: "नकारात्मक वाक्यमा उही सहायक क्रियापद प्रयोग गरी सकारात्मक प्रश्न पुच्छर (have you) जोडिन्छ।"
    }
  ];

  const idx = (setId - 1) % grammarData.length;
  return grammarData[idx];
}

// Slot 47: English Vocabulary, Idioms & Spelling (Topic 10.1)
export function getLanguageSlot47(setId: number): MasterBilingualItem {
  const vocabData: MasterBilingualItem[] = [
    {
      qEng: "Choose the correct Synonym for the financial verb 'MITIGATE':",
      qNep: "'MITIGATE' (न्यूनीकरण गर्नु) शब्दको सही समानार्थी (Synonym) शब्द कुन हो?",
      correct: "Alleviate",
      distractors: ["Aggravate", "Intensify", "Fabricate"],
      expEng: "'Mitigate' means to make less severe or serious; 'Alleviate' has the identical meaning.",
      expNep: "'Mitigate' को अर्थ कुनै जोखिम वा पीडा कम गर्नु हो, जसको समानार्थी शब्द 'Alleviate' हुन्छ।"
    },
    {
      qEng: "Choose the correct Antonym for the word 'TRANSPARENT':",
      qNep: "'TRANSPARENT' (पारदर्शी) शब्दको सही विपरीतार्थक (Antonym) शब्द कुन हो?",
      correct: "Opaque",
      distractors: ["Pellucid", "Lucid", "Luminous"],
      expEng: "'Transparent' means allowing light to pass through clearly; its antonym is 'Opaque' (not transparent).",
      expNep: "'Transparent' (पारदर्शी) को ठिक उल्टो शब्द 'Opaque' (अपारदर्शी) हुन्छ।"
    },
    {
      qEng: "What is the true figurative meaning of the English idiom 'To read between the lines'?",
      qNep: "अंग्रेजी उखान 'To read between the lines' को सही अर्थ कुन हो?",
      correct: "To understand hidden meaning / लुकेको भित्री अर्थ बुझ्नु",
      distractors: [
        "To read very quickly / छिटो छिटो पढ्नु",
        "To skip difficult lines / गाह्रा पङ्क्तिहरू छाड्नु",
        "To correct typing errors / हिज्जेका गल्तीहरू सच्याउनु"
      ],
      expEng: "'To read between the lines' means to perceive or discover an implicit, unstated meaning.",
      expNep: "यस उखानको अर्थ बाहिर नभनिएको वा लुकेको भित्री आशय पत्ता लगाउनु हो।"
    },
    {
      qEng: "Identify the word with the correct official spelling:",
      qNep: "सही हिज्जे (Spelling) भएको अंग्रेजी शब्द पहिचान गर्नुहोस्:",
      correct: "Bureaucracy",
      distractors: ["Burocracy", "Beurocracy", "Bureaucrasy"],
      expEng: "The standard authoritative spelling is 'Bureaucracy' (b-u-r-e-a-u-c-r-a-c-y).",
      expNep: "अंग्रेजीमा कर्मचारीतन्त्रलाई बुझाउने आधिकारिक शुद्ध हिज्जे 'Bureaucracy' हो।"
    },
    {
      qEng: "Choose the word closest in meaning to 'DILIGENT':",
      qNep: "'DILIGENT' (मेहनती/लगनशील) शब्दको नजिकको अर्थ दिने शब्द कुन हो?",
      correct: "Industrious",
      distractors: ["Negligent", "Indolent", "Lethargic"],
      expEng: "'Diligent' means showing care and conscientiousness in one's work; 'Industrious' is its synonym.",
      expNep: "'Diligent' को अर्थ लगनशील र मेहनती हुनु हो, जसको समानार्थी शब्द 'Industrious' हो।"
    }
  ];

  const idx = (setId - 1) % vocabData.length;
  return vocabData[idx];
}

// Slot 48: English & Nepali Language Competence (Topic 10.1 & 10.2)
export function getLanguageSlot48(setId: number): MasterBilingualItem {
  const mixedData: MasterBilingualItem[] = [
    {
      qEng: "Choose the correct English translation for the official term 'परिपत्र':",
      qNep: "प्रशासनिक शब्द 'परिपत्र' को सही अंग्रेजी अनुवाद कुन हो?",
      correct: "Circular",
      distractors: ["Memorandum", "Notification", "Press Release"],
      expEng: "'Circular' is the standard official translation for 'परिपत्र' in governmental correspondence.",
      expNep: "प्रशासनिक तथा बैंकिङ कार्यमा सबै मातहतका निकायलाई पठाइने 'परिपत्र' लाई अंग्रेजीमा 'Circular' भनिन्छ।"
    },
    {
      qEng: "Identify the part of speech of the underlined word: 'The bank gave an immediate reply.'",
      qNep: "वाक्यमा 'immediate' शब्द कुन पदवर्ग (Part of Speech) अन्तर्गत पर्दछ: 'The bank gave an immediate reply.'",
      correct: "Adjective / विशेषण",
      distractors: ["Noun / नाम", "Adverb / क्रियाविशेषण", "Verb / क्रिया"],
      expEng: "'Immediate' qualifies the noun 'reply', functioning as an adjective.",
      expNep: "'Immediate' ले नाम 'reply' को विशेषता बुझाएको हुनाले यो Adjective (विशेषण) हो।"
    },
    {
      qEng: "Choose the correct Indirect Speech: He said, 'I work at a commercial bank.'",
      qNep: "सही अप्रत्यक्ष कथन (Indirect Speech) छान्नुहोस्: He said, 'I work at a commercial bank.'",
      correct: "He said that he worked at a commercial bank / उसले वाणिज्य बैंकमा काम गरेको बतायो",
      distractors: [
        "He said that he works at a commercial bank / उसले वाणिज्य बैंकमा काम गर्छ भन्यो",
        "He said that he had worked at a commercial bank / उसले वाणिज्य बैंकमा काम गरेको थियो भन्यो",
        "He said that he will work at a commercial bank / उसले वाणिज्य बैंकमा काम गर्नेछ भन्यो"
      ],
      expEng: "When reporting speech in past tense, simple present shifts to simple past ('worked').",
      expNep: "Reporting verb भूतकालमा हुँदा Simple Present Tense, Simple Past Tense मा परिवर्तन हुन्छ।"
    },
    {
      qEng: "Which suffix can be added to the word 'MANAGE' to convert it into a noun?",
      qNep: "'MANAGE' शब्दलाई भाववाचक नाम बनाउन कुन Suffix (प्रत्यय) थपिन्छ?",
      correct: "-ment",
      distractors: ["-tion", "-ness", "-ful"],
      expEng: "Adding the suffix '-ment' to the verb 'manage' forms the abstract noun 'management'.",
      expNep: "'Manage' धातुमा '-ment' प्रत्यय लागेर 'Management' (व्यवस्थापन) नाम शब्द बन्दछ।"
    },
    {
      qEng: "Choose the correct English translation of: 'नेपालको अर्थतन्त्र रेमिट्यान्समा निर्भर छ।'",
      qNep: "'नेपालको अर्थतन्त्र रेमिट्यान्समा निर्भर छ।' को सही अंग्रेजी अनुवाद कुन हो?",
      correct: "Nepal's economy depends on remittance",
      distractors: [
        "Nepal's economy is depending by remittance",
        "Nepal's economy depended for remittance",
        "Nepal's economy will depend on remittance"
      ],
      expEng: "General facts use the simple present tense with the preposition 'on' ('depends on remittance').",
      expNep: "सामान्य सत्य बुझाउन Simple Present Tense र 'depends on' को प्रयोग गरिन्छ।"
    }
  ];

  const idx = (setId - 1) % mixedData.length;
  return mixedData[idx];
}

// Slot 49: Nepali Grammar & Spelling (Topic 10.2)
export function getLanguageSlot49(setId: number): MasterBilingualItem {
  const nepaliGrammarData: MasterBilingualItem[] = [
    {
      qEng: "Which of the following words is grammatically correct in Nepali orthography (शुद्ध हिज्जे)?",
      qNep: "तल दिइएका शब्दहरूमध्ये कुन शब्दको हिज्जे (वर्तनी) व्याकरणिक रूपमा शुद्ध छ?",
      correct: "समसामयिक",
      distractors: ["समसामहिक", "समासामयिक", "समसामयीक"],
      expEng: "The correct standard Nepali spelling is 'समसामयिक' (current affairs/contemporary).",
      expNep: "'समय + समय + इक' मिलेर बनेको मानक शुद्ध रूप 'समसामयिक' हो।"
    },
    {
      qEng: "Identify the correct feminine form of the poet 'कवि' in Nepali grammar:",
      qNep: "नेपाली व्याकरण अनुसार 'कवि' शब्दको शुद्ध स्त्रीलिंगी रूप कुन हो?",
      correct: "कवयित्री",
      distractors: ["कवियित्री", "कविइत्री", "कवयत्री"],
      expEng: "The authoritative feminine form of 'कवि' is 'कवयित्री' in standard grammar.",
      expNep: "'कवि' को मानक स्त्रीलिंगी रूप 'कवयित्री' (क + व + यि + त्री) शुद्ध मानिन्छ।"
    },
    {
      qEng: "Which of the following represents the correct spelling of the word meaning brilliant/radiant?",
      qNep: "'उज्ज्वल' शब्दको शुद्ध हिज्जे (वर्तनी) कुन हो?",
      correct: "उज्ज्वल",
      distractors: ["उज्वल", "उज्जवल", "उज्वल्य"],
      expEng: "The word 'उज्ज्वल' is derived from Sanskrit 'उत् + ज्वल', possessing two half 'j' consonants.",
      expNep: "'उत् + ज्वल' सन्धि भई दुईवटा आधा 'ज्' (ज् + ज् + व + ल) मिलेर 'उज्ज्वल' बन्दछ।"
    },
    {
      qEng: "In Nepali grammar, what type of noun (नाम) is the word 'पानी' (water)?",
      qNep: "नेपाली व्याकरणमा 'पानी' शब्द कुन नाम अन्तर्गत पर्दछ?",
      correct: "द्रव्यवाचक नाम",
      distractors: ["व्यक्तिवाचक नाम", "जातिवाचक नाम", "भाववाचक नाम"],
      expEng: "Liquid substances that can be measured but not individually counted are material nouns (द्रव्यवाचक).",
      expNep: "गन्न नसकिने, नाप्न वा जोख्न सकिने तरल पदार्थ द्रव्यवाचक नाम अन्तर्गत पर्दछ।"
    },
    {
      qEng: "Identify the sentence that is grammatically pure (शुद्ध वाक्य):",
      qNep: "तलका मध्ये व्याकरणिक रूपमा पूर्ण शुद्ध वाक्य कुन हो?",
      correct: "उनीहरू परीक्षा दिन गए",
      distractors: [
        "उनीहरू परीक्षा दिन गयो",
        "उनीहरूले परीक्षा दिन गए",
        "उनीहरू परीक्षा दिन गईन्"
      ],
      expEng: "Plural third-person subject 'उनीहरू' agrees with the plural verb 'गए'.",
      expNep: "बहुवचन कर्ता 'उनीहरू' सँग बहुवचन क्रियापद 'गए' को सङ्गति हुनुपर्दछ।"
    }
  ];

  const idx = (setId - 1) % nepaliGrammarData.length;
  return nepaliGrammarData[idx];
}

// Slot 50: Nepali Vocabulary, Idioms & Semantics (Topic 10.2)
export function getLanguageSlot50(setId: number): MasterBilingualItem {
  const nepaliVocabData: MasterBilingualItem[] = [
    {
      qEng: "What is the exact antonym (विपरीतार्थक शब्द) of the Nepali word 'कृतज्ञ' (grateful)?",
      qNep: "नेपाली व्याकरण अनुसार 'कृतज्ञ' (उपकार मान्ने) शब्दको ठिक विपरीतार्थक शब्द कुन हो?",
      correct: "कृतघ्न",
      distractors: ["अकृतज्ञ", "विश्वासघाती", "अपराधी"],
      expEng: "'कृतज्ञ' (one who acknowledges favors) has the exact antonym 'कृतघ्न' (one who forgets favors).",
      expNep: "कृतज्ञ (अरूले गरेको उपकार सम्झने) को ठिक उल्टो वा विपरीतार्थक शब्द 'कृतघ्न' (उपकार नमान्ने) हुन्छ।"
    },
    {
      qEng: "What is the real figurative meaning of the Nepali idiom 'आँखामा छारो हाल्नु'?",
      qNep: "'आँखामा छारो हाल्नु' भन्ने टुक्काको वास्तविक अर्थ के हो?",
      correct: "धोका दिनु वा छल्नु",
      distractors: ["आँखा सफा गर्नु", "आँखा दुखाउनु", "सत्य कुरा बोल्नु"],
      expEng: "The idiom 'आँखामा छारो हाल्नु' means to deceive or hoodwink someone.",
      expNep: "'आँखामा छारो हाल्नु' भन्नाले कसैलाई भ्रममा पारी झुक्याउनु वा धोका दिनु भन्ने बुझाउँछ।"
    },
    {
      qEng: "Which compound word is an example of Tatpurush Samas (तत्पुरुष समास) in Nepali grammar?",
      qNep: "तलका मध्ये कुन शब्द 'तत्पुरुष समास' को उदाहरण हो?",
      correct: "राजपुत्र",
      distractors: [
        "दशानन",
        "प्रत्येक",
        "रातदिन"
      ],
      expEng: "'राजपुत्र' (राजाको पुत्र) is Tatpurush Samas as the case marker 'को' is elided.",
      expNep: "पूर्वपदको सम्बन्ध विभक्ति लोप भई उत्तरपदको अर्थ प्रधान हुने समास तत्पुरुष समास (राजाको पुत्र = राजपुत्र) हो।"
    },
    {
      qEng: "What is the antonym of the Nepali word 'शाश्वत' (eternal/everlasting)?",
      qNep: "'शाश्वत' (सधैँ रहिरहने) शब्दको ठिक विपरीतार्थक शब्द कुन हो?",
      correct: "नश्वर",
      distractors: ["अमर", "स्थायी", "अनन्त"],
      expEng: "'शाश्वत' (eternal) has the direct antonym 'नश्वर' (perishable/mortal).",
      expNep: "शाश्वत (सदाकाल कायम रहने) को विपरीतार्थक शब्द 'नश्वर' (नाश भएर जाने) हुन्छ।"
    },
    {
      qEng: "What is the meaning of the Nepali proverb 'आकाशको फल आँखा तरी मर'?",
      qNep: "'आकाशको फल आँखा तरी मर' भन्ने नेपाली उखानको सही अर्थ कुन हो?",
      correct: "प्राप्त गर्न असम्भव कुराको व्यर्थ आशा गर्नु",
      distractors: [
        "परिश्रम नगरी धनी बन्नु",
        "फलफूलको बगैँचा हेर्नु",
        "सधैँ आशावादी बन्नु"
      ],
      expEng: "The proverb expresses futile yearning for something that is impossible to achieve.",
      expNep: "आफ्नो पहुँच वा क्षमताभन्दा निकै टाढा रहेको असम्भव वस्तु पाउने व्यर्थ आशामा समय खेर फाल्नुलाई यो उखानले जनाउँछ।"
    }
  ];

  const idx = (setId - 1) % nepaliVocabData.length;
  return nepaliVocabData[idx];
}

// Master selector for Section 10
export function getLanguageQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 46: return getLanguageSlot46(setId);
    case 47: return getLanguageSlot47(setId);
    case 48: return getLanguageSlot48(setId);
    case 49: return getLanguageSlot49(setId);
    case 50: return getLanguageSlot50(setId);
    default: return getLanguageSlot46(setId);
  }
}
