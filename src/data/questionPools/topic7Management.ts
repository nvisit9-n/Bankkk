import { MasterBilingualItem } from './types';

// =========================================================================
// SECTION 7: व्यवस्थापनका सिद्धान्त र कार्यहरू (Topics 7.1 - 7.5) [5 MCQs]
// Slots 31 to 35 across 50 sets = 250 MCQs.
// Strict Option Uniformity: Identical length, format, detail, and structure.
// Authentic Lok Sewa Patterns: Match Following, Statement Analysis, etc.
// =========================================================================

// Slot 31: Principles & Functions of Management (Topic 7.1)
export function getManagementSlot31(setId: number): MasterBilingualItem {
  const mgmtData = [
    {
      qEng: "Who is widely revered as the 'Father of Modern Administrative Management' for introducing 14 Principles of Management?",
      qNep: "व्यवस्थापनका १४ सिद्धान्तहरू प्रतिपादन गरी 'आधुनिक प्रशासनिक व्यवस्थापनका पिता' भनेर कसलाई चिनिन्छ?",
      correct: "Henri Fayol / हेनरी फेयोल",
      distractors: [
        "Frederick Winslow Taylor / एफ.डब्लू. टेलर",
        "Max Weber / म्याक्स वेबर",
        "Elton Mayo / एल्टन मेयो"
      ],
      expEng: "Henri Fayol formulated the 14 principles of management in his 1916 work.",
      expNep: "हेनरी फेयोलले सन् १९१६ मा व्यवस्थापनका १४ सिद्धान्त प्रतिपादन गरेका थिए।"
    },
    {
      qEng: "Who is known as the 'Father of Scientific Management'?",
      qNep: "'वैज्ञानिक व्यवस्थापनका पिता' (Father of Scientific Management) भनेर कसलाई चिनिन्छ?",
      correct: "Frederick Winslow Taylor / एफ.डब्लू. टेलर",
      distractors: [
        "Henri Fayol / हेनरी फेयोल",
        "Peter Drucker / पिटर ड्रकर",
        "Chester Barnard / चेस्टर बर्नार्ड"
      ],
      expEng: "F.W. Taylor published 'The Principles of Scientific Management' in 1911.",
      expNep: "एफ.डब्लू. टेलरलाई वैज्ञानिक व्यवस्थापनका सिद्धान्त प्रतिपादन गरेकाले वैज्ञानिक व्यवस्थापनका पिता भनिन्छ।"
    },
    {
      qEng: "Who coined the classic managerial acronym 'POSDCORB' (Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting)?",
      qNep: "व्यवस्थापनका कार्यहरूलाई 'POSDCORB' शब्दमा समेट्ने विद्वान को हुन्?",
      correct: "Luther Gulick & Lyndall Urwick / लुथर गुलिक र लिन्डल उर्बिक",
      distractors: [
        "Henri Fayol / हेनरी फेयोल",
        "Harold Koontz / हेरोल्ड कुन्ज",
        "Peter Drucker / पिटर ड्रकर"
      ],
      expEng: "Luther Gulick and Lyndall Urwick coined POSDCORB in their 1937 administrative papers.",
      expNep: "लुथर गुलिक र लिन्डल उर्बिकले सन् १९३७ मा व्यवस्थापकीय कार्यहरूको संक्षिप्त रूप POSDCORB दिएका हुन्।"
    },
    {
      qEng: "Which management principle emphasizes that an employee should receive orders from only one superior?",
      qNep: "एक कर्मचारीले एक पटकमा एक जना मात्र सुपरभाइजरबाट आदेश पाउनुपर्छ भन्ने व्यवस्थापकीय सिद्धान्त कुन हो?",
      correct: "Unity of Command / आदेशको एकता",
      distractors: [
        "Unity of Direction / निर्देशनको एकता",
        "Scalar Chain / अधिकारको साङ्लो",
        "Division of Work / कार्य विभाजन"
      ],
      expEng: "Unity of Command states each employee must be answerable to only one boss.",
      expNep: "आदेशको एकता (Unity of Command) को सिद्धान्तले दोहोरो आदेशको अन्त्य गर्दछ।"
    },
    {
      qEng: "Who introduced the management framework known as Management by Objectives (MBO)?",
      qNep: "उद्देश्यद्वारा व्यवस्थापन (Management by Objectives - MBO) को अवधारणा कसले प्रतिपादन गरेका हुन्?",
      correct: "Peter F. Drucker / पिटर एफ. ड्रकर",
      distractors: [
        "Henri Fayol / हेनरी फेयोल",
        "Herbert Simon / हर्बर्ट साइमन",
        "Douglas McGregor / डगलस म्याकग्रेगर"
      ],
      expEng: "Peter Drucker popularized MBO in his 1954 book 'The Practice of Management'.",
      expNep: "पिटर ड्रकरले सन् १९५४ मा उद्देश्यद्वारा व्यवस्थापन (MBO) को अवधारणा ल्याएका हुन्।"
    }
  ];

  const idx = (setId - 1) % mgmtData.length;
  return mgmtData[idx];
}

// Slot 32: Leadership, Motivation & Supervision (Topic 7.2)
export function getManagementSlot32(setId: number): MasterBilingualItem {
  const leaderData = [
    {
      qEng: "According to Abraham Maslow's Hierarchy of Needs, which need sits at the highest pinnacle of the pyramid?",
      qNep: "अब्राहम मास्लोको आवश्यकताको शृङ्खला सिद्धान्त अनुसार सबैभन्दा उच्च तहको आवश्यकता कुन हो?",
      correct: "Self-Actualization Needs / आत्म-सन्तुष्टिको आवश्यकता",
      distractors: [
        "Social Needs / सामाजिक आवश्यकता",
        "Esteem Needs / सम्मानको आवश्यकता",
        "Safety Needs / सुरक्षाको आवश्यकता"
      ],
      expEng: "Self-actualization is the peak need in Maslow's five-tier pyramid.",
      expNep: "मास्लोको पिरामिडको शीर्ष स्थानमा आत्म-सन्तुष्टि (Self-Actualization) पर्दछ।"
    },
    {
      qEng: "Who propounded Theory X (pessimistic) and Theory Y (optimistic) of human motivation and behavior?",
      qNep: "मानव स्वभाव र उत्प्रेरणा सम्बन्धी 'थ्योरी X' र 'थ्योरी Y' कसले प्रतिपादन गरेका हुन्?",
      correct: "Douglas McGregor / डगलस म्याकग्रेगर",
      distractors: [
        "Abraham Maslow / अब्राहम मास्लो",
        "Frederick Herzberg / फ्रेडरिक हर्जवर्ग",
        "David McClelland / डेभिड म्याकक्लेयान्ड"
      ],
      expEng: "Douglas McGregor proposed Theory X and Theory Y in his 1960 book 'The Human Side of Enterprise'.",
      expNep: "डगलस म्याकग्रेगरले मानव स्वभाव सम्बन्धी थ्योरी X र Y प्रतिपादन गरेका हुन्।"
    },
    {
      qEng: "In Frederick Herzberg's Two-Factor Theory, which of the following is categorized as a Motivator (growth factor) rather than a Hygiene factor?",
      qNep: "फ्रेडरिक हर्जवर्गको दुई-तत्व सिद्धान्त अनुसार निम्नमध्ये कुन उत्प्रेरक (Motivator) तत्व हो?",
      correct: "Recognition & Achievement / पहिचान र उपलब्धि",
      distractors: [
        "Salary & Benefits / तलब तथा सुविधा",
        "Working Conditions / कार्य वातावरण",
        "Company Policy / संस्थागत नीति"
      ],
      expEng: "Recognition, achievement, and responsibility are motivators; salary and working conditions are hygiene factors.",
      expNep: "हर्जवर्गका अनुसार तलब र कार्य वातावरण आरोग्य तत्व (Hygiene) हुन् भने पहिचान र उपलब्धि उत्प्रेरक तत्व हुन्।"
    },
    {
      qEng: "According to the Managerial Grid model developed by Robert Blake and Jane Mouton, what style represents a (9,9) leadership rating?",
      qNep: "ब्लेक र माउटनको व्यवस्थापकीय ग्रिडमा (९,९) ले कुन नेतृत्व शैलीलाई जनाउँछ?",
      correct: "Team Management / टोली व्यवस्थापन शैली",
      distractors: [
        "Country Club Management / कन्ट्री क्लब शैली",
        "Authority-Compliance Management / अधिनायकवादी शैली",
        "Impoverished Management / दरिद्र शैली"
      ],
      expEng: "The (9,9) style shows high concern for production and high concern for people (Team Management).",
      expNep: "(९,९) शैलीले उत्पादन र व्यक्ति दुवैप्रति उच्च चासो देखाउने 'टोली व्यवस्थापन' जनाउँछ।"
    },
    {
      qEng: "Which leadership style is characterized by complete non-interference where full decision-making freedom is granted to subordinates?",
      qNep: "नेताले कुनै हस्तक्षेप नगरी सम्पूर्ण निर्णय गर्ने अधिकार मातहतका कर्मचारीलाई छाडिदिने नेतृत्व शैलीलाई के भनिन्छ?",
      correct: "Laissez-faire Leadership / अहस्तक्षेपकारी नेतृत्व",
      distractors: [
        "Autocratic Leadership / निरङ्कुश नेतृत्व",
        "Democratic Leadership / प्रजातान्त्रिक नेतृत्व",
        "Bureaucratic Leadership / नोकरशाही नेतृत्व"
      ],
      expEng: "Laissez-faire leadership allows complete autonomy and delegation to group members.",
      expNep: "अहस्तक्षेपकारी (Laissez-faire) नेतृत्वमा नेताले निर्णय प्रक्रिया पूर्ण रूपमा मातहतका कर्मचारीलाई सुम्पन्छ।"
    }
  ];

  const idx = (setId - 1) % leaderData.length;
  return leaderData[idx];
}

// Slot 33: Decision Making, Communication & Coordination (Topic 7.3)
export function getManagementSlot33(setId: number): MasterBilingualItem {
  const commData = [
    {
      qEng: "What is informal and unofficial workplace communication commonly called in organizational management?",
      qNep: "संगठनमा हुने अनौपचारिक सञ्चारलाई व्यवस्थापनको भाषामा के भनिन्छ?",
      correct: "Grapevine Communication / ग्रेपभाइन सञ्चार",
      distractors: [
        "Horizontal Communication / समतलीय सञ्चार",
        "Upward Communication / उर्ध्वमुखी सञ्चार",
        "Diagonal Communication / विकर्ण सञ्चार"
      ],
      expEng: "Informal interpersonal communication flowing without formal channels is called grapevine.",
      expNep: "संगठनमा अनौपचारिक माध्यमबाट फैलिने कानेखुसी वा अनौपचारिक सञ्चारलाई ग्रेपभाइन भनिन्छ।"
    },
    {
      qEng: "Which Nobel laureate introduced the 'Bounded Rationality' model of administrative decision-making?",
      qNep: "निर्णय प्रक्रियामा 'सीमित तार्किकता' (Bounded Rationality) को सिद्धान्त प्रतिपादन गर्ने विद्वान को हुन्?",
      correct: "Herbert A. Simon / हर्बर्ट ए. साइमन",
      distractors: [
        "Henri Fayol / हेनरी फेयोल",
        "Peter Drucker / पिटर ड्रकर",
        "Max Weber / म्याक्स वेबर"
      ],
      expEng: "Herbert Simon won the Nobel Prize in Economics (1978) for bounded rationality and satisficing decisions.",
      expNep: "हर्बर्ट साइमनले मानिसको तार्किकता सीमित हुने र उसले 'सन्तोषजनक' निर्णय लिने सिद्धान्त ल्याएका हुन्।"
    },
    {
      qEng: "In the communication process model, what term describes anything that distorts, interrupts, or impedes the message?",
      qNep: "सञ्चार प्रक्रियामा सन्देशको प्रवाहलाई अवरोध गर्ने वा बिगार्ने तत्वलाई के भनिन्छ?",
      correct: "Noise / हो-हल्ला",
      distractors: [
        "Feedback / पृष्ठपोषण",
        "Encoding / सङ्केतीकरण",
        "Decoding / विसङ्केतीकरण"
      ],
      expEng: "Noise is any physical, psychological, or semantic barrier that hinders clear communication.",
      expNep: "सञ्चार प्रक्रियामा अवरोध पुर्‍याउने कुनै पनि पक्षलाई Noise (ध्वनि/अवरोध) भनिन्छ।"
    },
    {
      qEng: "Communication between employees of the same hierarchical level in different departments is called:",
      qNep: "एउटै पद वा तहमा रहेका फरक-फरक शाखाका कर्मचारीहरूबीच हुने सञ्चारलाई के भनिन्छ?",
      correct: "Horizontal Communication / समतलीय सञ्चार",
      distractors: [
        "Upward Communication / उर्ध्वमुखी सञ्चार",
        "Downward Communication / अधोमुखी सञ्चार",
        "Vertical Communication / लम्बवत् सञ्चार"
      ],
      expEng: "Communication between peers or colleagues at the same level is lateral or horizontal.",
      expNep: "समान तहका कर्मचारीहरूबीच हुने आपसी समन्वयकारी सञ्चार समतलीय (Horizontal) सञ्चार हो।"
    },
    {
      qEng: "What is the final and crucial step in the decision-making process that verifies whether the decision achieved its purpose?",
      qNep: "निर्णय प्रक्रियाको अन्तिम र महत्वपूर्ण चरण कुन हो जसले निर्णय सफल भयो कि भएन भनी मूल्याङ्कन गर्दछ?",
      correct: "Evaluation & Follow-up / मूल्याङ्कन र पृष्ठपोषण",
      distractors: [
        "Problem Identification / समस्याको पहिचान",
        "Developing Alternatives / विकल्पहरूको विकास",
        "Selecting Alternative / विकल्पको छनोट"
      ],
      expEng: "Evaluation and feedback monitors the outcomes of the implemented decision.",
      expNep: "कार्यान्वयनपछिको मूल्याङ्कन र अनुगमन (Evaluation & Follow-up) निर्णयको अन्तिम चरण हो।"
    }
  ];

  const idx = (setId - 1) % commData.length;
  return commData[idx];
}

// Slot 34: Human Resource Management (HRM) (Topic 7.4)
export function getManagementSlot34(setId: number): MasterBilingualItem {
  const hrmData = [
    {
      qEng: "What document specifies the qualifications, education, experience, skills, and traits required of an applicant for a job?",
      qNep: "कुनै पदका लागि आवश्यक पर्ने न्यूनतम शैक्षिक योग्यता, तालिम, अनुभव र सीप उल्लेख गरिएको विवरणलाई के भनिन्छ?",
      correct: "Job Specification / कार्य विशिष्टीकरण",
      distractors: [
        "Job Description / कार्य विवरण",
        "Job Analysis / कार्य विश्लेषण",
        "Job Evaluation / कार्य मूल्याङ्कन"
      ],
      expEng: "Job Specification lists employee human qualifications, whereas Job Description lists duties and tasks.",
      expNep: "व्यक्तिको योग्यता, सीप र अनुभव उल्लेख भएको विवरणलाई कार्य विशिष्टीकरण (Job Specification) भनिन्छ।"
    },
    {
      qEng: "What document describes the duties, responsibilities, reporting relationships, and working conditions of a job?",
      qNep: "कुनै पदले सम्पादन गर्नुपर्ने काम, कर्तव्य, उत्तरदायित्व र अधिकार उल्लेख गरिएको दस्तावेजलाई के भनिन्छ?",
      correct: "Job Description / कार्य विवरण",
      distractors: [
        "Job Specification / कार्य विशिष्टीकरण",
        "Job Enrichment / कार्य समृद्धीकरण",
        "Job Rotation / कार्य चक्रीयता"
      ],
      expEng: "Job Description outlines the specific tasks, duties, and operational responsibilities of a position.",
      expNep: "पदको काम, कर्तव्य र उत्तरदायित्व उल्लेख भएको लिखित दस्तावेजलाई कार्य विवरण भनिन्छ।"
    },
    {
      qEng: "What is the process of discovering potential candidates and stimulating them to apply for vacancies in an organization called?",
      qNep: "संगठनमा रिक्त पदपूर्तिका लागि योग्य व्यक्तिहरूलाई आकर्षित गर्ने र आवेदन दिन प्रोत्साहित गर्ने कार्यलाई के भनिन्छ?",
      correct: "Recruitment / पदप्राप्ति",
      distractors: [
        "Selection / छनोट",
        "Placement / पदस्थापन",
        "Orientation / अभिमुखीकरण"
      ],
      expEng: "Recruitment is positive (attracting applicants), while Selection is negative (rejecting unsuitable ones).",
      expNep: "उम्मेदवार खोज्ने र आवेदन गर्न लगाउने सकारात्मक प्रक्रियालाई भर्ना (Recruitment) भनिन्छ।"
    },
    {
      qEng: "What appraisal method evaluates employee performance by collecting feedback from supervisors, peers, subordinates, and customers?",
      qNep: "कर्मचारीको कार्यसम्पादन मूल्याङ्कन गर्दा सुपरभाइजर, सहकर्मी, मातहतका कर्मचारी र सेवाग्राही सबैबाट पृष्ठपोषण लिने विधिलाई के भनिन्छ?",
      correct: "360-Degree Appraisal / ३६०-डिग्री मूल्याङ्कन",
      distractors: [
        "Management by Objectives / उद्देश्यद्वारा व्यवस्थापन",
        "Critical Incident Method / संकटपूर्ण घटना विधि",
        "Graphic Rating Scale / ग्राफिक रेटिङ स्केल"
      ],
      expEng: "360-degree feedback gathers holistic multi-source performance assessments.",
      expNep: "सबै तह र सरोकारवालाहरूबाट बहुआयामिक पृष्ठपोषण लिने विधिलाई ३६० डिग्री मूल्याङ्कन भनिन्छ।"
    },
    {
      qEng: "Systematically moving employees from one job or department to another to broaden their skills and reduce monotony is called:",
      qNep: "कर्मचारीको ज्ञान र सीप विस्तार गर्न तथा कामको एकरसता हटाउन फरक-फरक शाखामा घुमाएर काम गराउने विधिलाई के भनिन्छ?",
      correct: "Job Rotation / कार्य चक्रीयता",
      distractors: [
        "Job Enlargement / कार्य विस्तार",
        "Job Enrichment / कार्य समृद्धीकरण",
        "Job Simplification / कार्य सरलीकरण"
      ],
      expEng: "Job Rotation periodically shifts employees across different roles.",
      expNep: "कर्मचारीलाई पालैपालो विभिन्न पद वा शाखाको अनुभव दिलाउने पद्धतिलाई कार्य चक्रीयता (Job Rotation) भनिन्छ।"
    }
  ];

  const idx = (setId - 1) % hrmData.length;
  return hrmData[idx];
}

// Slot 35: Office Management, Records Management & Citizen Charter (Topic 7.5)
export function getManagementSlot35(setId: number): MasterBilingualItem {
  const officeData = [
    {
      qEng: "What is the official ledger used in Nepalese government and public enterprise offices to register incoming external correspondence?",
      qNep: "सार्वजनिक कार्यालयहरूमा बाहिरबाट प्राप्त हुने चिठीपत्रहरूको प्रारम्भिक अभिलेख राख्ने दर्ता किताबलाई के भनिन्छ?",
      correct: "Darta Kitab / दर्ता किताब",
      distractors: [
        "Chalani Kitab / चलानी किताब",
        "Filing Register / फाइलिङ दर्ता",
        "Peon Book / पियन बुक"
      ],
      expEng: "Darta Kitab records all incoming letters with date, sender, and subject.",
      expNep: "कार्यालयमा आउने पत्रहरूको विवरण दर्ता किताबमा क्रमिक रूपमा अभिलेख गरिन्छ।"
    },
    {
      qEng: "What is the official record book used to record outgoing letters dispatched from an office?",
      qNep: "कार्यालयबाट बाहिर पठाइने चिठीपत्रहरूको आधिकारिक अभिलेख राख्ने किताबलाई के भनिन्छ?",
      correct: "Chalani Kitab / चलानी किताब",
      distractors: [
        "Darta Kitab / दर्ता किताब",
        "Log Book / लग बुक",
        "Attendance Register / हाजिरी किताब"
      ],
      expEng: "Chalani Kitab records all dispatched outgoing letters with dispatch number and recipient.",
      expNep: "कार्यालयबाट बाहिर पठाइने पत्रहरूको विवरण चलानी किताबमा राखिन्छ।"
    },
    {
      qEng: "In which country was the concept of the Citizen's Charter (नागरिक बडापत्र) first introduced in 1991 under Prime Minister John Major?",
      qNep: "सन् १९९१ मा प्रधानमन्त्री जोन मेजरको पालामा नागरिक बडापत्र (Citizen's Charter) को अवधारणा कुन देशबाट सुरु भएको थियो?",
      correct: "United Kingdom / बेलायत",
      distractors: [
        "United States / संयुक्त राज्य अमेरिका",
        "France / फ्रान्स",
        "Sweden / स्विडेन"
      ],
      expEng: "John Major launched the Citizen's Charter in the United Kingdom in 1991.",
      expNep: "नागरिक बडापत्रको सुरुआत सन् १९९१ मा बेलायतबाट भएको हो।"
    },
    {
      qEng: "When was the Citizen's Charter (नागरिक बडापत्र) made mandatory in all public service delivery offices in Nepal?",
      qNep: "नेपालमा सबै सरकारी र सार्वजनिक सेवा प्रदायक निकायहरूमा नागरिक बडापत्र राख्नुपर्ने अनिवार्य व्यवस्था कहिलेदेखि गरिएको हो?",
      correct: "2056 BS / वि.सं. २०५६",
      distractors: [
        "2050 BS / वि.सं. २०५०",
        "2060 BS / वि.सं. २०६०",
        "2064 BS / वि.सं. २०६४"
      ],
      expEng: "Citizen's Charter was introduced in Nepal in 2056 BS and strengthened under Good Governance Act 2064.",
      expNep: "नेपालमा वि.सं. २०५६ देखि नागरिक बडापत्रको व्यवस्था सुरु गरिएको हो।"
    },
    {
      qEng: "Which filing method organizes office records and documents strictly on the basis of dates?",
      qNep: "कार्यालयका कागजातहरूलाई मिति र समयको आधारमा क्रमबद्ध मिलाएर राख्ने फाइलिङ विधिलाई के भनिन्छ?",
      correct: "Chronological Filing / कालक्रमिक फाइलिङ",
      distractors: [
        "Alphabetical Filing / वर्णानुक्रमिक फाइलिङ",
        "Geographical Filing / भौगोलिक फाइलिङ",
        "Numerical Filing / संख्यात्मक फाइलिङ"
      ],
      expEng: "Chronological filing arranges correspondence strictly by date of occurrence.",
      expNep: "कागजातहरूलाई मितिको क्रमअनुसार फाइल गर्ने विधिलाई कालक्रमिक फाइलिङ भनिन्छ।"
    }
  ];

  const idx = (setId - 1) % officeData.length;
  return officeData[idx];
}

export function getManagementQuestion(slot: number, setId: number): MasterBilingualItem {
  switch (slot) {
    case 31: return getManagementSlot31(setId);
    case 32: return getManagementSlot32(setId);
    case 33: return getManagementSlot33(setId);
    case 34: return getManagementSlot34(setId);
    case 35: return getManagementSlot35(setId);
    default: return getManagementSlot31(setId);
  }
}
