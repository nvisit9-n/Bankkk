export interface OfficialSyllabus {
  id: string;
  title: string;
  titleNepali: string;
  institution: string;
  institutionNepali: string;
  level: string;
  post: string;
  totalMarks: number;
  passMarks: number;
  examType: string;
  pdfFileName: string;
  description: string;
  papers: {
    paperNumber: number;
    title: string;
    fullMarks: number;
    passMarks: number;
    timeMinutes: number;
    examFormat: string;
    sections: {
      sectionName: string;
      weightageMarks: number;
      topics: string[];
    }[];
  }[];
  eligibility: string;
  selectionProcess: string[];
}

export const OFFICIAL_SYLLABI: OfficialSyllabus[] = [
  {
    id: 'syl-nrb-level-6',
    title: 'NRB Assistant Director (Officer Level 3) Syllabus',
    titleNepali: 'नेपाल राष्ट्र बैंक सहायक निर्देशक (अधिकृत तृतीय) खुला प्रतियोगितात्मक पाठ्यक्रम',
    institution: 'Nepal Rastra Bank (नेपाल राष्ट्र बैंक)',
    institutionNepali: 'नेपाल राष्ट्र बैंक',
    level: 'अधिकृत तृतीय (Level 6)',
    post: 'सहायक निर्देशक (Assistant Director - Administration)',
    totalMarks: 300,
    passMarks: 120,
    examType: 'लिखित परीक्षा तथा अन्तर्वार्ता (Written & Interview)',
    pdfFileName: 'NRB_Assistant_Director_Level6_Syllabus_2081.pdf',
    description: 'नेपाल राष्ट्र बैंकको अधिकृत तृतीय (सहायक निर्देशक) पदको खुला तथा समावेशी प्रतियोगितात्मक लिखित परीक्षाको आधिकारिक एवं अद्यावधिक पाठ्यक्रम।',
    eligibility: 'मान्यता प्राप्त विश्वविद्यालयबाट अर्थशास्त्र, वाणिज्यशास्त्र, व्यवस्थापन वा जनप्रशासन विषयमा स्नातकोत्तर (Master Degree) तह उत्तीर्ण।',
    selectionProcess: [
      'प्रथम चरण: पूर्वयोग्यता परीक्षा (Pre-qualifying Examination - MCQs)',
      'दोस्रो चरण: मुख्य लिखित परीक्षा (विषयगत द्वितीय र तृतीय पत्र)',
      'तेस्रो चरण: प्रयोगात्मक परीक्षा र व्यक्तिगत अन्तर्वार्ता (Interview)'
    ],
    papers: [
      {
        paperNumber: 1,
        title: 'प्रथम पत्र: सामान्य ज्ञान, समसामयिक, गणित तथा कम्प्युटर (General Studies)',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 90,
        examFormat: 'वस्तुगत बहुवैकल्पिक (100 MCQs × 1 Mark)',
        sections: [
          {
            sectionName: 'खण्ड (क): सामान्य ज्ञान तथा नेपालको भूगोल/इतिहास',
            weightageMarks: 30,
            topics: [
              'नेपालको भौगोलिक अवस्था, प्राकृतिक स्रोत तथा जलस्रोत',
              'नेपालको आर्थिक विकासका सूचकहरू, योजनाबद्ध विकास तथा बजेट',
              'नेपालको संविधान (भाग ३ मौलिक हक, भाग १० संघीय आर्थिक कार्यप्रणाली)'
            ]
          },
          {
            sectionName: 'खण्ड (ख): बैंकिङ, मौद्रिक तथा समसामयिक मामिला',
            weightageMarks: 40,
            topics: [
              'नेपाल राष्ट्र बैंक ऐन २०५८, BAFIA २०७३ र बैंकिङ कसूर ऐन २०६४',
              'मौद्रिक नीति, विदेशी विनिमय व्यवस्थापन, शोधनान्तर स्थिति (BOP)',
              'डिजिटल बैंकिङ, वित्तीय समावेशीकरण र अन्तर्राष्ट्रिय वित्तीय संस्थाहरू'
            ]
          },
          {
            sectionName: 'खण्ड (ग): आधारभूत गणित तथा कम्प्युटर ज्ञान',
            weightageMarks: 30,
            topics: [
              'प्रतिशत, नाफा-नोक्सान, ब्याज, अनुपात, तथ्यांक विश्लेषण',
              'कम्प्युटर फन्डामेन्टल्स, MS-Office, साइबर सुरक्षा र इन्टरनेट प्रविधि'
            ]
          }
        ]
      },
      {
        paperNumber: 2,
        title: 'द्वितीय पत्र: अर्थशास्त्र, बैंकिङ तथा वित्तीय प्रणाली (Economics & Financial System)',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 180,
        examFormat: 'विषयगत विश्लेषणात्मक (१० प्रश्न × १० अंक)',
        sections: [
          {
            sectionName: 'खण्ड (क): समष्टिगत अर्थशास्त्र (Macroeconomics)',
            weightageMarks: 50,
            topics: [
              'राष्ट्रिय आम्दानीको गणना, कुल गार्हस्थ्य उत्पादन (GDP)',
              'मुद्रास्फीति (Inflation) का कारणहरू, प्रभाव र नियन्त्रणका उपायहरू',
              'मुद्राको माग र आपूर्ति, मौद्रिक प्रसारण संयन्त्र (Monetary Transmission)'
            ]
          },
          {
            sectionName: 'खण्ड (ख): बैंकिङ व्यवस्थापन तथा वित्तीय स्थायित्व',
            weightageMarks: 50,
            topics: [
              'केन्द्रीय बैंकका कार्यहरू, स्वायत्तता र सुपरिवेक्षकीय भूमिका',
              'जोखिम व्यवस्थापन (Credit, Market, Operational Risk) र Basel III',
              'विदेशी मुद्रा सञ्चिति व्यवस्थापन र विनिमय दर प्रणाली'
            ]
          }
        ]
      },
      {
        paperNumber: 3,
        title: 'तृतीय पत्र: व्यवस्थापन, लेखा तथा सूचना प्रविधि (Management & Accounting)',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 180,
        examFormat: 'विषयगत विश्लेषणात्मक (१० प्रश्न × १० अंक)',
        sections: [
          {
            sectionName: 'खण्ड (क): संगठन तथा मानव संसाधन व्यवस्थापन',
            weightageMarks: 50,
            topics: [
              'व्यवस्थापनका सिद्धान्त, नेतृत्व, उत्प्रेरणा र संगठनात्मक संस्कृति',
              'सार्वजनिक प्रशासनमा सुशासन, सदाचारिता र पारदर्शिता',
              'रणनीतिक योजना तर्जुमा र द्वन्द्व व्यवस्थापन'
            ]
          },
          {
            sectionName: 'खण्ड (ख): वित्तीय लेखा तथा विश्लेषण',
            weightageMarks: 50,
            topics: [
              'वित्तीय विवरणहरू (वासलात, नाफा-नोक्सान, नगद प्रवाह)',
              'वित्तीय अनुपात विश्लेषण (Ratio Analysis) र जोखिम मूल्यांकन',
              'लेखापरीक्षण (Internal & External Audit) र NFRS'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'syl-nrb-level-4',
    title: 'NRB Assistant (Level 4) Official Syllabus',
    titleNepali: 'नेपाल राष्ट्र बैंक सहायक (सहायक द्वितीय) खुला प्रतियोगितात्मक पाठ्यक्रम',
    institution: 'Nepal Rastra Bank (नेपाल राष्ट्र बैंक)',
    institutionNepali: 'नेपाल राष्ट्र बैंक',
    level: 'सहायक द्वितीय (Level 4)',
    post: 'सहायक (Assistant - Administration)',
    totalMarks: 200,
    passMarks: 80,
    examType: 'लिखित परीक्षा (MCQ + Subjective)',
    pdfFileName: 'NRB_Assistant_Level4_Syllabus_2081.pdf',
    description: 'नेपाल राष्ट्र बैंकको सहायक द्वितीय पदका लागि तोकिएको योग्यता, परीक्षा संरचना तथा विस्तृत विषयगत पाठ्यक्रम।',
    eligibility: 'मान्यता प्राप्त शिक्षण संस्थाबाट १०+२ (वा सो सरह) उत्तीर्ण।',
    selectionProcess: [
      'प्रथम चरण: सामान्य ज्ञान तथा आधारभूत बौद्धिक परीक्षण (MCQs)',
      'दोस्रो चरण: विषयगत लिखित परीक्षा (बैंकिङ, लेखा, गणित र कम्प्युटर)',
      'तेस्रो चरण: अन्तर्वार्ता'
    ],
    papers: [
      {
        paperNumber: 1,
        title: 'प्रथम पत्र: सामान्य ज्ञान, गणित तथा बौद्धिक परीक्षण',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 90,
        examFormat: '५० वस्तुगत प्रश्नहरू (MCQ × २ अंक)',
        sections: [
          {
            sectionName: 'खण्ड (क): सामान्य ज्ञान (General Knowledge)',
            weightageMarks: 50,
            topics: [
              'नेपालको भूगोल, ऐतिहासिक घटनाक्रम र प्रशासनिक विभाजन',
              'नेपाल राष्ट्र बैंकको इतिहास र प्रमुख वित्तीय सूचकहरू',
              'हालका समसामयिक राष्ट्रिय तथा अन्तर्राष्ट्रिय घटनाहरू'
            ]
          },
          {
            sectionName: 'खण्ड (ख): आधारभूत गणित (Elementary Mathematics)',
            weightageMarks: 30,
            topics: [
              'एकात्मक नियम, प्रतिशत, साधारण तथा चक्रवर्ती ब्याज',
              'नाफा र नोक्सान, अनुपात र समानुपात, औसत'
            ]
          },
          {
            sectionName: 'खण्ड (ग): कम्प्युटर ज्ञान (Computer Awareness)',
            weightageMarks: 20,
            topics: ['MS Word, Excel, PowerPoint, Web Browsing र इमेल']
          }
        ]
      },
      {
        paperNumber: 2,
        title: 'द्वितीय पत्र: बैंकिङ, लेखा, व्यवस्थापन तथा ऐन नियम',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 180,
        examFormat: '१० प्रश्नहरू (प्रत्येक १० अंकका दरले)',
        sections: [
          {
            sectionName: 'खण्ड (क): बैंकिङ तथा कानुन',
            weightageMarks: 50,
            topics: [
              'नेपाल राष्ट्र बैंक ऐन २०५८ का मुख्य व्यवस्थाहरू',
              'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन २०७३ (BAFIA)',
              'ग्राहक पहिचान (KYC) तथा सम्पत्ति शुद्धीकरण निवारण (AML/CFT)'
            ]
          },
          {
            sectionName: 'खण्ड (ख): लेखा तथा कार्यालय व्यवस्थापन',
            weightageMarks: 50,
            topics: [
              'दोहोरो लेखा प्रणाली, गोश्वारा भौचर, खाता र सन्तुलन परीक्षण',
              'बैंक हिसाब मिलान विवरण (BRS), कार्यालय सञ्चालन र अभिलेख'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'syl-rbb-level-5',
    title: 'RBB Senior Assistant (Level 5) Syllabus',
    titleNepali: 'राष्ट्रिय वाणिज्य बैंक लिमिटेड वरिष्ठ सहायक (तह ५) पाठ्यक्रम',
    institution: 'Rastriya Banijya Bank (राष्ट्रिय वाणिज्य बैंक)',
    institutionNepali: 'राष्ट्रिय वाणिज्य बैंक लिमिटेड',
    level: 'वरिष्ठ सहायक (Level 5)',
    post: 'वरिष्ठ सहायक (Senior Assistant - Cash & Administration)',
    totalMarks: 200,
    passMarks: 80,
    examType: 'लिखित परीक्षा (MCQ + विषयगत)',
    pdfFileName: 'RBB_Senior_Assistant_Level5_Syllabus.pdf',
    description: 'नेपालको सबैभन्दा ठूलो सरकारी स्वामित्वको वाणिज्य बैंक राष्ट्रिय वाणिज्य बैंक (RBB) को तह ५ खुला प्रतिस्पर्धाको पाठ्यक्रम।',
    eligibility: 'मान्यता प्राप्त विश्वविद्यालयबाट स्नातक तह (Bachelor Degree) उत्तीर्ण।',
    selectionProcess: [
      'प्रथम चरण: प्रि-क्वालिफाइङ वस्तुगत परीक्षा (MCQ)',
      'दोस्रो चरण: मुख्य लिखित परीक्षा (बैंकिङ व्यवस्थापन तथा लेखा प्रणाली)',
      'तेस्रो चरण: कम्प्युटर सीप परीक्षण तथा अन्तर्वार्ता'
    ],
    papers: [
      {
        paperNumber: 1,
        title: 'प्रथम पत्र: व्यवस्थापन, बैंकिङ, लेखा तथा सूचना प्रविधि',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 180,
        examFormat: 'विषयगत प्रश्नोत्तर (१० प्रश्न × १० अंक)',
        sections: [
          {
            sectionName: 'बैंकिङ कारोबार तथा कानुन',
            weightageMarks: 50,
            topics: [
              'निक्षेप संकलन, कर्जा प्रवाह, प्रतीतपत्र (LC) र बैंक ग्यारेन्टी',
              'नेपाल राष्ट्र बैंकका एकीकृत निर्देशनहरू र ब्याजदर निर्धारण',
              'वाणिज्य बैंकहरूको सामाजिक उत्तरदायित्व र विपन्न वर्ग कर्जा'
            ]
          },
          {
            sectionName: 'लेखा तथा अडिट प्रणाली',
            weightageMarks: 50,
            topics: [
              'अन्तिम लेखा, वासलात, नाफा नोक्सान हिसाब, ह्रासकट्टी',
              'आन्तरिक नियन्त्रण प्रणाली र जोखिम व्यवस्थापन'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'syl-loksewa-kharidar-subba',
    title: 'Lok Sewa Kharidar & Nayab Subba Banking Paper Syllabus',
    titleNepali: 'लोक सेवा आयोग खरिदार तथा नायब सुब्बा (प्रशासन सेवा) पाठ्यक्रम',
    institution: 'Public Service Commission (लोक सेवा आयोग)',
    institutionNepali: 'लोक सेवा आयोग नेपाल',
    level: 'रा.प.अनं. प्रथम र द्वितीय श्रेणी',
    post: 'नायब सुब्बा / खरिदार',
    totalMarks: 200,
    passMarks: 80,
    examType: 'लिखित परीक्षा (प्रथम चरण वस्तुगत र द्वितीय चरण विषयगत)',
    pdfFileName: 'LokSewa_NayabSubba_Banking_Syllabus.pdf',
    description: 'लोक सेवा आयोगद्वारा सञ्चालन हुने नायब सुब्बा तथा खरिदार तहको सामान्य ज्ञान, बौद्धिक परीक्षण र बैंकिङ-आर्थिक प्रशासन सम्बन्धी आधिकारिक पाठ्यक्रम।',
    eligibility: 'नायब सुब्बा: १०+२ वा सो सरह उत्तीर्ण। खरिदार: एसईई (SEE) वा एसएलसी उत्तीर्ण।',
    selectionProcess: [
      'प्रथम चरण: सामान्य ज्ञान र सामान्य बौद्धिक परीक्षण (GK & IQ)',
      'दोस्रो चरण: समसामयिक मामिला तथा सार्वजनिक प्रशासन',
      'तेस्रो चरण: सेवा सम्बन्धी विषय (बैंकिङ, लेखा र कानुन)'
    ],
    papers: [
      {
        paperNumber: 1,
        title: 'प्रथम पत्र: सामान्य ज्ञान तथा सामान्य बौद्धिक परीक्षण (GK & IQ)',
        fullMarks: 100,
        passMarks: 40,
        timeMinutes: 45,
        examFormat: '५० प्रश्नहरू (MCQ × २ अंक)',
        sections: [
          {
            sectionName: 'खण्ड (क): सामान्य ज्ञान (General Knowledge)',
            weightageMarks: 60,
            topics: [
              'सौर्यमण्डल र भूगोल, नेपालको भौगोलिक अवस्था र हावापानी',
              'नेपालको इतिहास, धर्म, संस्कृति र सामाजिक प्रथा',
              'नेपालको शासन प्रणाली, संविधान र स्थानीय सरकार सञ्चालन'
            ]
          },
          {
            sectionName: 'खण्ड (ख): सामान्य बौद्धिक परीक्षण (General Mental Ability)',
            weightageMarks: 40,
            topics: [
              'शाब्दिक तथा अशाब्दिक तार्किक परीक्षण (Verbal & Non-verbal IQ)',
              'संख्या श्रेणी, कोडिङ-डिकोडिङ, म्याट्रिक्स र दिशा ज्ञान'
            ]
          }
        ]
      }
    ]
  }
];
