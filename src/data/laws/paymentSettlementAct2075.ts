import { BankingActData } from '../../types';

export const PAYMENT_SETTLEMENT_ACT_2075_DATA: BankingActData = {
  actId: 'note-payment-settlement-act-bare-act',
  actTitleNepali: 'भुक्तानी तथा फर्स्यौट ऐन, २०७५ (प्रमाणिकरण: २०७५ फागुन ०२)',
  actTitleEnglish: 'Payment and Settlement Act, 2075 (2019)',
  shortName: 'Payment and Settlement Act 2075',
  promulgationDate: '२०७५/११/०२ (14 February 2019)',
  amendments: [],
  totalChapters: 9,
  totalSections: 50,
  preambleNepali: `मुलुकमा सुरक्षित, स्वस्थ, भरपर्दो र सक्षम भुक्तानी तथा फर्स्यौट प्रणालीको विकास, प्रवर्द्धन र सञ्चालन गर्न, भुक्तानी प्रणाली सञ्चालक (PSO) र भुक्तानी सेवा प्रदायक (PSP) संस्थाको स्थापना, अनुमति तथा नियमन गर्न, फर्स्यौट अन्तिमता (Settlement Finality) तथा खुद फर्स्यौट (Net Settlement) को कानुनी सुनिश्चितता प्रदान गर्न यो ऐन जारी गरिएको छ।`,
  preambleEnglish: `An Act to provide for the development, regulation and supervision of a secure, healthy and efficient payment and settlement system, licensing of payment service providers and operators, and ensuring legal finality of electronic settlements.`,
  chapters: [
    {
      chapterNumber: 1,
      chapterTitleNepali: 'परिच्छेद १: प्रारम्भिक र भुक्तानी प्रणालीको संरचना (Preliminary & System Structure)',
      chapterTitleEnglish: 'Chapter 1: Preliminary & Definitions',
      description: 'भुक्तानी प्रणाली सञ्चालक (PSO), भुक्तानी सेवा प्रदायक (PSP), विद्युतीय भुक्तानी, राफसाफ (Clearing), र फर्स्यौट (Settlement)।',
      sections: [
        {
          id: 'psa-sec-2',
          sectionNumber: 'दफा २',
          titleNepali: 'परिभाषा र भुक्तानी उपकरणहरू (Key Definitions)',
          bareLawText: `यस ऐनमा विषय वा प्रसङ्गले अर्को अर्थ नलागेमा:-
(क) "भुक्तानी प्रणाली सञ्चालक" (Payment System Operator - PSO) भन्नाले भुक्तानी राफसाफ, नेटवर्क सञ्चालन, स्विच वा क्लियरिङ हाउस सञ्चालन गर्न राष्ट्र बैंकबाट अनुमतिप्राप्त संस्था सम्झनु पर्छ (जस्तै NCHL, SmartChoice, NepalPay)।
(ख) "भुक्तानी सेवा प्रदायक" (Payment Service Provider - PSP) भन्नाले वालेट, डिजिटल भुक्तानी, वा मोबाइल मनी सञ्चालन गर्न राष्ट्र बैंकबाट अनुमतिप्राप्त संस्था सम्झनु पर्छ (जस्तै eSewa, Khalti, IME Pay)।
(ग) "फर्स्यौट" (Settlement) भन्नाले दुई वा दुईभन्दा बढी पक्षहरू बीच भएको भुक्तानी दायित्वको अन्तिम हस्तान्तरण सम्झनु पर्छ।
(घ) "राफसाफ" (Clearing) भन्नाले भुक्तानी आदेशहरूको हिसाब मिलान गरी खुद रकम निकाल्ने प्रक्रिया सम्झनु पर्छ।`,
          subSections: [
            '(क) PSO: नेटवर्क, स्विच र क्लियरीङ पूर्वाधार सञ्चालन गर्ने संस्था।',
            '(ख) PSP: डिजिटल वालेट, मोबाइल पेमेन्ट र कार्ड जारी गर्ने सेवा प्रदायक।',
            '(ग)-(घ) राफसाफ (Clearing) र फर्स्यौट (Settlement) को कानुनी भिन्नता।'
          ],
          commentary: `नेपालमा डिजिटल बैंकिङ, क्युआर कोड (QR Code), मोबाइल वालेट, र कनेक्ट आईपीएस (ConnectIPS) को विस्फोटन भएपछि यसलाई परम्परागत बैंकिङ कानुनले समेट्न नसक्दा २०७५ मा यो विशेष ऐन ल्याइएको हो। यसले डिजिटल मुद्रा र कारोबारलाई वैधानिक सुरक्षा प्रदान गरेको छ।`,
          practicalApplication: 'नेपालमा फिनटेक (FinTech) उद्योगको मुख्य वैधानिक ढाँचा।',
          keyTakeaways: [
            'PSO: क्लियरीङ हाउस/स्विच (NCHL आदि)।',
            'PSP: डिजिटल वालेट (eSewa, Khalti आदि)।'
          ]
        }
      ]
    },
    {
      chapterNumber: 2,
      chapterTitleNepali: 'परिच्छेद २: अनुमतिपत्र र नियमन (Licensing & Regulation of PSO/PSP)',
      chapterTitleEnglish: 'Chapter 2: Licensing & Capital Criteria',
      description: 'राष्ट्र बैंकबाट अनुमतिपत्र लिने सर्तहरू, संस्थागत सुशासन, र साइबर सुरक्षा मापदण्ड।',
      sections: [
        {
          id: 'psa-sec-3-7',
          sectionNumber: 'दफा ३ देखि ७',
          titleNepali: 'अनुमतिपत्र अनिवार्य र सञ्चालन सर्तहरू (Licensing Mandate)',
          bareLawText: `दफा ३: अनुमतिपत्र लिनुपर्ने:
राष्ट्र बैंकको अनुमतिपत्र नलिई कसैले पनि भुक्तानी प्रणाली सञ्चालक (PSO) वा भुक्तानी सेवा प्रदायक (PSP) को रूपमा कार्य गर्न पाउने छैन।

दफा ५: पुँजी र पूर्वाधार मापदण्ड:
PSO र PSP ले राष्ट्र बैंकले तोकेको न्यूनतम चुक्ता पुँजी, सर्भर पूर्वाधार, डेटा सेन्टर (Data Center in Nepal), साइबर सुरक्षा प्रणाली, र ग्राहक संरक्षण कोष कायम गर्नुपर्नेछ।`,
          subSections: [
            'दफा ३: अनुमतिपत्र विना डिजिटल वालेट वा स्विच सञ्चालन पूर्ण गैरकानुनी।',
            'दफा ५: न्यूनतम पुँजी, नेपालभित्रै अनिवार्य डाटा सेन्टर, र साइबर सुरक्षा।'
          ],
          commentary: `यस दफाले ग्राहकको वित्तीय डेटा नेपाल बाहिर जानबाट रोक्न नेपालभित्रै प्राथमिक वा ब्याकअप डाटा सेन्टर अनिवार्य गरेको छ। साथै अनलाइन ह्याकिङ र डाटा चोरीबाट ग्राहकको पैसा जोगाउन साइबर सुरक्षा मापदण्ड बाध्यात्मक छ।`,
          practicalApplication: 'फिनटेक कम्पनीहरूको दर्ता र सञ्चालन अनुमति।',
          keyTakeaways: [
            'राष्ट्र बैंकको अनुमति अनिवार्य।',
            'डेटा सेन्टर नेपालमै हुनुपर्ने।'
          ]
        }
      ]
    },
    {
      chapterNumber: 3,
      chapterTitleNepali: 'परिच्छेद ३: फर्स्यौट अन्तिमता र खुद फर्स्यौट (Settlement Finality & Netting)',
      chapterTitleEnglish: 'Chapter 3: Settlement Finality & Net Settlement (Sec 15-18)',
      description: 'फर्स्यौट अन्तिमता (Settlement Finality) को कानुनी सुरक्षा, संस्था दामासाहीमा परे पनि क्लियरिङ आदेश रद्द नहुने (Zero-hour Rule खारेज)।',
      sections: [
        {
          id: 'psa-sec-15-18',
          sectionNumber: 'दफा १५ देखि १८',
          titleNepali: 'फर्स्यौट अन्तिमता र खुद फर्स्यौट (Settlement Finality Doctrine)',
          bareLawText: `दफा १५: खुद फर्स्यौट (Net Settlement):
भुक्तानी प्रणालीमा प्रविष्ट भएका सम्पूर्ण भुक्तानी आदेशहरूलाई हिसाब मिलान (Netting) गरी निकालिएको खुद रकम फर्स्यौट योग्य कानुनी दायित्व मानिनेछ।

दफा १६: फर्स्यौट अन्तिमता (Settlement Finality):
(१) भुक्तानी प्रणाली सञ्चालकको प्रणालीमा प्रविष्ट भई फर्स्यौट (Settlement) भइसकेको कुनै पनि भुक्तानी आदेश अन्तिम र अपरिवर्तनीय (Final and Irrevocable) हुनेछ।
(२) कुनै बैंक वा वित्तीय संस्था दामासाही (Insolvency) मा परेको अवस्थामा समेत सो संस्थाले दामासाहीमा पर्नु अघि वा सोही दिन फर्स्यौट प्रणालीमा पठाएको भुक्तानी आदेशलाई कुनै पनि अदालत वा कानुनले बदर वा रोक्का गर्न सक्ने छैन।`,
          subSections: [
            'दफा १५: Netting को वैधानिक मान्यता।',
            'दफा १६(१): एकपटक फर्स्यौट भएको भुक्तानी कुनै पनि हालतमा फिर्ता वा रद्द नहुने (Finality)।',
            'दफा १६(२): संस्था टाट पल्टिए पनि क्लियरिङ भइसकेको भुक्तानी सुरक्षित रहने (Zero-Hour Rule Immunity)।'
          ],
          commentary: `Settlement Finality अन्तर्राष्ट्रिय भुक्तानी प्रणाली (BIS Core Principles) को सबैभन्दा महत्वपूर्ण सिद्धान्त हो। यदि कुनै बैंक दिउँसो २ बजे टाट पल्टियो भने बिहान १० बजे उसले गरेको करोडौंको क्लियरिङ रद्द हुनु हुँदैन, अन्यथा सम्पूर्ण वित्तीय प्रणाली नै ठप्प हुन सक्छ। यो दफाले सोही प्रणालीगत सुरक्षा (Systemic Immunity) प्रदान गर्दछ।`,
          practicalApplication: 'RTGS र NCHL फर्स्यौटको कानुनी चट्टान।',
          keyTakeaways: [
            'फर्स्यौट अन्तिम र अपरिवर्तनीय हुन्छ।',
            'बैंक टाट पल्टिँदा पनि क्लियरिङ रोकिँदैन।'
          ]
        }
      ]
    },
    {
      chapterNumber: 4,
      chapterTitleNepali: 'परिच्छेद ४: कसूर र सजाय (Offences & Penalties)',
      chapterTitleEnglish: 'Chapter 4: Digital Fraud Penalties & Revocation',
      description: 'अनधिकृत विद्युतीय कारोबार, सर्भर ह्याकिङ, डाटा चोरी, बिगो जफत, जरिवाना र ५ वर्षसम्म कैद।',
      sections: [
        {
          id: 'psa-sec-30-34',
          sectionNumber: 'दफा ३० देखि ३४',
          titleNepali: 'कसूर तथा सजाय (Penalties for Digital Fraud & Unlicensed Operation)',
          bareLawText: `दफा ३०: अनुमतिपत्र नलिई सञ्चालन गरेमा:
अनुमतिपत्र नलिई भुक्तानी प्रणाली सञ्चालन गरेमा बिगो जफत गरी बिगो बराबर जरिवाना वा पाँच वर्षसम्म कैद वा दुवै सजाय हुनेछ।

दफा ३२: विद्युतीय प्रणालीमा अनधिकृत पहुँच वा छेडछाड गरेमा:
कसैले भुक्तानी प्रणालीको सफ्टवेयर, सर्भर वा नेटवर्कमा अनधिकृत पहुँच (Hacking) गरी रकम रकमान्तर गरेमा वा प्रणाली नष्ट गरेमा बिगो जफत गरी बिगोको दोब्बर जरिवाना र सात वर्षसम्म कैद हुनेछ।`,
          subSections: [
            'दफा ३०: अनुमति विना वालेट सञ्चालनमा बिगो जफत र ५ वर्ष कैद।',
            'दफा ३२: पेमेन्ट गेटवे ह्याकिङ र डेटा चोरीमा बिगोको दोब्बर जरिवाना र ७ वर्ष कैद।'
          ],
          commentary: `डिजिटल पेमेन्टमा एक सेकेन्डमै करोडौं रकम हिनामिना हुन सक्ने हुनाले यस ऐनले साइबर अपराध र बैंकिङ ठगीलाई कडा दण्डको दायरामा ल्याएको छ।`,
          practicalApplication: 'डिजिटल भुक्तानी अपराधमा नेपाल प्रहरीको साइबर ब्युरो र उच्च अदालतको कारबाही।',
          keyTakeaways: ['ह्याकिङमा बिगोको दोब्बर जरिवाना र ७ वर्ष जेल।', 'इजाजत नलिई काम गरे ५ वर्ष जेल।']
        }
      ]
    }
  ]
};
