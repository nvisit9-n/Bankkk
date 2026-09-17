import { StudyNote } from '../types';

export const COMPREHENSIVE_EXAM_NOTES: StudyNote[] = [
  // =========================================================================
  // 1. BANKING & MONETARY: CREDIT RISK MANAGEMENT & BASEL III ACCORD
  // =========================================================================
  {
    id: 'banking-credit-risk-basel-iii',
    title: 'कर्जा जोखिम व्यवस्थापन तथा बासेल III फ्रेमवर्क (Credit Risk Management & Basel III Accord)',
    subject: 'Banking',
    category: 'Banking',
    readTime: '22 min read',
    sections: [
      {
        heading: '१. परिचय तथा सैद्धान्तिक पृष्ठभूमि (Introduction & Theoretical Background)',
        content: `कर्जा जोखिम (Credit Risk) भनेको ऋणी वा प्रतिपक्ष (Counterparty) ले सम्झौता अनुसार साँवा वा ब्याज समयमै भुक्तानी गर्न नसक्दा वा असफल हुँदा बैंकलाई हुने सम्भावित वित्तीय नोक्सानी हो। वाणिज्य बैंकहरूको सम्पत्ति संरचनाको ७०% देखि ८०% हिस्सा कर्जाले ओगटेको हुनाले बैंकको स्थायित्व र नाफामा कर्जा जोखिमको व्यवस्थापनले सबैभन्दा निर्णायक भूमिका खेल्छ।

[5-Mark Model Opening]:
"Credit risk is the potential that a bank borrower or counterparty will fail to meet its obligations in accordance with agreed terms, leading to financial distress. Basel III provides an internationally agreed set of measures developed by the Basel Committee on Banking Supervision (BCBS) to strengthen regulation, supervision, and risk management of banks."`,
        bulletPoints: [
          'नेपाल राष्ट्र बैंक ऐन २०५८ र बाफिया २०७३ ले कर्जा जोखिम नियन्त्रण गर्न केन्द्रीय बैंकलाई प्रत्यक्ष निर्देशन जारी गर्ने अधिकार दिएको छ।',
          'NRB Unified Directive No. 2: कर्जा वर्गीकरण (Classification) र कर्जा नोक्सानी व्यवस्था (Loan Loss Provisioning)।',
          'NRB Unified Directive No. 3: एकल ग्राहक कर्जा सीमा (Single Obligor Limit - SOL)।'
        ]
      },
      {
        heading: '२. बासेल III का तीन स्तम्भहरू (The Three Pillars of Basel III)',
        content: `नेपाल राष्ट्र बैंकले 'क' वर्गका वाणिज्य बैंकहरूमा बासेल III पूर्ण रूपमा लागू गरेको छ भने 'ख' र 'ग' वर्गका लागि राष्ट्रिय पूँजी फ्रेमवर्क लागू गरेको छ। बासेल III ले तीनवटा प्रमुख स्तम्भहरू (Pillars) निर्दिष्ट गरेको छ:

स्तम्भ १: न्यूनतम पूँजी आवश्यकता (Pillar 1: Minimum Capital Requirements)
- जोखिम भारित सम्पत्ति (Risk Weighted Assets - RWA) को आधारमा पूँजी कायम गर्नुपर्ने।
- नेपालमा न्यूनतम Total Capital Adequacy Ratio (CAR) = ११% (बासेलको ८% भन्दा कडा)।
- न्यूनतम Common Equity Tier 1 (CET-1) = ६% र Tier 1 Capital = ८.५%।
- पूँजी संरक्षण बफर (Capital Conservation Buffer - CCB) = २.५% (CET-1 बाटै व्यहोर्नुपर्ने)।
- काउन्टर साइक्लिकल बफर (Countercyclical Buffer) = ०% देखि २.५% सम्म।

स्तम्भ २: सुपरिवेक्षकीय पुनरावलोकन प्रक्रिया (Pillar 2: Supervisory Review Process - SRP)
- आन्तरिक पूँजी पर्याप्तता मूल्याङ्कन प्रक्रिया (ICAAP) बैंकहरूले आफैं तयार गर्नुपर्ने।
- ब्याजदर जोखिम, तरलता जोखिम, साख जोखिम र प्रतिष्ठा जोखिम (Reputational Risk) को मूल्याङ्कन।
- राष्ट्र बैंकद्वारा सुपरिवेक्षकीय मूल्याङ्कन (Supervisory Review and Evaluation Process - SREP)।

स्तम्भ ३: बजार अनुशासन तथा पारदर्शिता (Pillar 3: Market Discipline)
- बैंकहरूले त्रैमासिक तथा वार्षिक रूपमा पूँजी संरचना, जोखिम एक्सपोजर र खराब कर्जा (NPL) को सार्वजनिक विवरण प्रकाशित गर्नुपर्ने।`,
        bulletPoints: [
          'Pillar 1: Capital to Risk-Weighted Assets Ratio (CRAR) >= 11% (Tier 1 >= 8.5%, Tier 2 <= 2.5%)।',
          'Pillar 2: ICAAP Framework mandated by NRB for comprehensive risk assessment.',
          'Pillar 3: Mandatory quarterly public disclosures on bank websites for market transparency.'
        ]
      },
      {
        heading: '३. कर्जा वर्गीकरण र नोक्सानी व्यवस्था - निर्देशिका नं. २ (Asset Classification & LLP Formula)',
        content: `नेपाल राष्ट्र बैंकको एकीकृत निर्देशिका नं. २ बमोजिम बैंक तथा वित्तीय संस्थाले प्रवाह गरेको सम्पूर्ण कर्जालाई देहायबमोजिम वर्गीकरण गरी कर्जा नोक्सानी व्यवस्था (LLP) गर्नुपर्दछ:

क. सक्रिय कर्जा (Performing Loans):
१. असल कर्जा (Pass Loan): भाखा ननाघेको वा १ महिनासम्म भाखा नाघेको - १.२०% नोक्सानी व्यवस्था (LLP)।
२. सूक्ष्म निगरानी (Watchlist Loan): १ देखि ३ महिनासम्म भाखा नाघेको, लगातार २ वर्ष घाटामा रहेका ऋणी, वा चालु पुँजी कर्जा नवीकरण नभएको - ५% नोक्सानी व्यवस्था।

ख. निष्क्रिय कर्जा (Non-Performing Loans - NPL):
३. कमसल कर्जा (Substandard Loan): ३ देखि ६ महिनासम्म भाखा नाघेको - २५% नोक्सानी व्यवस्था।
४. शंकास्पद कर्जा (Doubtful Loan): ६ महिनादेखि १ वर्षसम्म भाखा नाघेको - ५०% नोक्सानी व्यवस्था।
५. खराब कर्जा (Loss Loan): १ वर्षभन्दा बढी भाखा नाघेको, ऋणी बेपत्ता भएको, वा धितो लिलाम हुन नसकेको - १००% नोक्सानी व्यवस्था।`,
        bulletPoints: [
          'Pass Loan (0 - 1 Month): 1.20% General Provisioning.',
          'Watchlist (1 - 3 Months): 5.0% General Provisioning.',
          'Substandard (3 - 6 Months): 25% Specific Provisioning.',
          'Doubtful (6 - 12 Months): 50% Specific Provisioning.',
          'Loss Loan (> 1 Year overdue): 100% Specific Provisioning.',
          'Evergreening Prevention: Working capital guidelines prohibit unauthorized loan restructuring.'
        ]
      },
      {
        heading: '४. विद्यमान चुनौती र समाधानका उपायहरू (Challenges & Strategic Recommendations)',
        content: `नेपाली बैंकिङ प्रणालीमा कर्जा जोखिमका प्रमुख चुनौतीहरू:
१. निष्क्रिय कर्जा (NPL) मा तीव्र वृद्धि: निर्माण, घरजग्गा र साना तथा मझौला व्यवसायमा शिथिलताका कारण औसत NPL ४% भन्दा माथि पुगेको छ।
२. कर्जाको अति-केन्द्रीकरण: केही सिमित ठूला व्यापारिक घराना र बागमती प्रदेशमा मात्र कर्जा केन्द्रित हुनु।
३. चालू पुँजी कर्जा दुरुपयोग: अल्पकालीन कर्जा लिएर दीर्घकालीन घरजग्गा वा सेयर बजारमा लगानी गर्ने प्रवृत्ति।
४. धितो केन्द्रित कर्जा प्रवाह: परियोजनाको नगद प्रवाह (Cash Flow) को साटो जग्गा-जमिनको मूल्याङ्कनलाई मात्र आधार मान्नु।

समाधानका मार्गचित्र:
- Cash flow based lending र Project financing लाई प्राथमिकता दिने।
- Early Warning Signal (EWS) प्रणाली लागु गरी जोखिमयुक्त कर्जाको पहिल्यै पहिचान गर्ने।
- Asset Reconstruction Company (सम्पत्ति व्यवस्थापन कम्पनी) को तत्काल स्थापना गरी खराब कर्जा व्यवस्थापन गर्ने।
- क्रेडिट ब्युरो (CIB) को क्षमता विस्तार गरी डिजिटल रेटिङ लागु गर्ने।`,
        bulletPoints: [
          'Challenge 1: High concentration risk in real estate and trading sector.',
          'Challenge 2: Rising NPL exceeding NRB comfortable benchmark (5%).',
          'Solution: Shift from collateral-based lending to cash-flow and project viability lending.',
          'Solution: Formation of dedicated Asset Reconstruction Company (ARC).'
        ]
      },
      {
        heading: '५. १० अङ्कको नमुना परीक्षा उत्तर (10-Mark Model Question & Answer)',
        content: `प्रश्न: "कर्जा जोखिम भनेको के हो? नेपाल राष्ट्र बैंकको एकीकृत निर्देशिका बमोजिम कर्जा वर्गीकरण र नोक्सानी व्यवस्थाको विश्लेषण गर्दै खराब कर्जा नियन्त्रण गर्ने उपायहरू प्रस्तुत गर्नुहोस्।" (४+३+३ = १० अङ्क)

[नमुना उत्तर संरचना]:
१. परिचय: कर्जा जोखिमको परिभाषा, वाणिज्य बैंकहरूमा यसको संवेदनशीलता र NRB Act 2058 / BAFIA 2073 को कानुनी व्यवस्था।
२. वर्गीकरण र तालिका: असल (१.२०%), सूक्ष्म निगरानी (५%), कमसल (२५%), शंकास्पद (५०%), र खराब (१००%) को स्पष्ट समयावधि र प्रोभिजनिङ प्रतिशत।
३. खराब कर्जा नियन्त्रणका ६ सूत्र:
   - कर्जा प्रवाह पूर्व 5Cs of Credit (Character, Capacity, Capital, Collateral, Condition) को सूक्ष्म विश्लेषण।
   - CIB (कर्जा सूचना केन्द्र) को कालोसूची र कर्जा विवरणको कडा परीक्षण।
   - Single Obligor Limit (SOL: Fund-based 25%, Non-fund 50%) को कडा पालना।
   - नियमित कर्जा अनुगमन र Post-disbursement inspection।
   - कर्जा जोखिम न्यूनीकरण (Credit Risk Mitigation) का लागि बिमा तथा प्रत्याभूति।
   - धितो लिलामी तथा गैरबैंकिङ सम्पत्ति (Non-Banking Assets - NBA) व्यवस्थापन कार्यविधि।
४. निष्कर्ष: "स्वच्छ, पारदर्शी र उत्पादनशील क्षेत्रमा प्रवाहित कर्जा नै दिगो बैंकिङको आधारशिला हो। बासेल III को कडा परिपालनाले नै बैंकलाई बाह्य झट्काबाट जोगाउँछ।"`
      }
    ],
    comparisonTable: {
      title: 'बासेल II र बासेल III फ्रेमवर्क बीचको भिन्नता',
      headers: ['आधार (Parameter)', 'बासेल II (Basel II)', 'बासेल III (Basel III)'],
      rows: [
        {
          attribute: 'पूँजीको गुणस्तर (Capital Quality)',
          traditional: 'कुल पूँजी (Tier 1 + Tier 2) मा जोड',
          reengineering: 'Common Equity Tier 1 (CET-1) लाई उच्चतम प्राथमिकता'
        },
        {
          attribute: 'न्यूनतम CAR (Capital Adequacy Ratio)',
          traditional: '८% अन्तर्राष्ट्रिय मापदण्ड (नेपालमा १०%)',
          reengineering: 'नेपालमा ११% + २.५% Capital Conservation Buffer'
        },
        {
          attribute: 'तरलता मापदण्ड (Liquidity Standards)',
          traditional: 'कुनै स्पष्ट तरलता अनुपात थिएन',
          reengineering: 'LCR (Liquidity Coverage Ratio) र NSFR अनिवार्य'
        },
        {
          attribute: 'उत्तोलन अनुपात (Leverage Ratio)',
          traditional: 'लागू नगरिएको',
          reengineering: 'Tier 1 Capital / Total Exposure >= ४% (नेपालमा)'
        }
      ]
    },
    examTip: '💡 बासेल ३ का तीनवटा खम्बा (Three Pillars) र निर्देशिका नं. २ को कर्जा वर्गीकरण तालिका NRB Level 4/6 र RBB Level 4/5 मा अनिवार्य आउने १० अङ्कको प्रश्न हो।',
    relatedQuizId: 'b-01',
    relatedQuestionsCount: 15
  },

  // =========================================================================
  // 2. LEGAL FRAMEWORK: BANKING OFFENCE & PUNISHMENT ACT, 2064
  // =========================================================================
  {
    id: 'banking-offence-act-2064',
    title: 'बैंकिङ कसूर तथा सजाय ऐन, २०६४ (Banking Offence & Punishment Act, 2064) - दफागत विश्लेषण',
    subject: 'Law',
    category: 'Banking',
    readTime: '20 min read',
    sections: [
      {
        heading: '१. पृष्ठभूमि र ऐनको उद्देश्य (Background & Legislative Intent)',
        content: `बैंकिङ कसूर तथा सजाय ऐन, २०६४ वि.सं. २०६४ माघ २३ गते (Feb 6, 2008) मा प्रमाणीकरण भई लागू भएको हो। यस ऐनको दोस्रो संशोधन वि.सं. २०७३ मा भएको हो।

ऐनको मूल उद्देश्य (Preamble):
बैंक तथा वित्तीय प्रणालीको कारोबारमा हुनसक्ने सम्भावित कसूरहरूलाई रोक्न, कसूर गर्नेलाई कडा दण्ड सजाय गर्न र सर्वसाधारणको निक्षेप तथा बैंकिङ प्रणालीको विश्वसनीयता अक्षुण्ण राख्न यो ऐन जारी गरिएको हो।`,
        bulletPoints: [
          'ऐनको प्रकृति: विशेष फौजदारी कानुन (Special Criminal Banking Legislation)।',
          'वादी: नेपाल सरकार वादी हुने मुद्दा (अनुसूची १ अन्तर्गतका मुद्दाहरू)।',
          'मुद्दा हेर्ने निकाय: उच्च अदालत (High Court) को वाणिज्य इजलास (Commercial Bench)।'
        ]
      },
      {
        heading: '२. ऐन अन्तर्गत परिभाषित प्रमुख बैंकिङ कसूरहरू (Core Banking Offences: Sec 3 to 14)',
        content: `ऐनको परिच्छेद २ (दफा ३ देखि १४) मा बैंकिङ कसूरहरूलाई विस्तृत रूपमा परिभाषित गरिएको छ:

१. दफा ३: अनधिकृत रूपमा खाता खोल्ने वा रकम झिक्ने:
- अरूको नाममा नक्कली खाता खोल्ने वा झुक्याएर कसैको खाताबाट रकम झिक्ने।
- खातामा पर्याप्त मौज्दात नभएको जानीजानी चेक काटी दिने (Dishonor of Cheque / Cheque Bounce)।

२. दफा ४: अनधिकृत रूपमा चेक, चेकबुक वा ड्राफ्ट प्राप्त गर्ने वा उपलब्ध गराउने।

३. दफा ५: अनधिकृत रूपमा कर्जा लिन वा दिन नहुने:
- गलत वा झुट्टा वित्तीय विवरण (Fake Balance Sheet) पेस गरी कर्जा लिने वा दिने।
- कमसल धितोलाई बढी मूल्याङ्कन (Overvaluation of Collateral) गरी कर्जा प्रवाह गर्ने।
- धितो नै नराखी वा अपुग धितोमा मिलेमतो गरी कर्जा प्रवाह गर्ने।

४. दफा ६: कर्जाको दुरुपयोग गर्न नहुने (Misuse of Credit):
- जुन प्रयोजनका लागि कर्जा लिइएको हो सो काममा नलगाई अन्यत्र (घरजग्गा, सेयर वा व्यक्तिगत खर्चमा) प्रयोग गर्ने।

५. दफा ७: बैंकको सम्पत्ति वा स्रोत साधनको दुरुपयोग वा हिनामिना (Embezzlement)।

६. दफा ८: विद्युतीय माध्यम (ATM, Internet, Mobile Banking) को दुरुपयोग गरी रकम चोरी वा ठगी गर्ने।

७. दफा ९: बैंकिङ कागजात सच्याउने, किर्ते गर्ने वा नष्ट गर्ने।`,
        bulletPoints: [
          'Section 3: Unauthorized account opening, withdrawal, and cheque bounce without adequate funds.',
          'Section 5: Unauthorized lending through fabricated balance sheets or overvalued collaterals.',
          'Section 6: Diversion and misuse of loan proceeds to unapproved speculative sectors.',
          'Section 8: Cyber banking fraud, ATM cloning, unauthorized electronic fund transfers.'
        ]
      },
      {
        heading: '३. दण्ड तथा सजाय सम्बन्धी व्यवस्था - दफा १५ (Penalties & Punishment Hierarchy)',
        content: `ऐनको दफा १५ मा बिगो (Amount Involved in Offence) को आधारमा कैद र जरिवानाको स्पष्ट व्यवस्था गरिएको छ:

बिगो भराउने र बिगो बमोजिम जरिवाना:
- कसूरदारबाट बिगो (Embezzled Amount) असुलउपर गरिनेछ र बिगो बराबरको जरिवाना (१००% Fine) हुनेछ।

कैद सजायको तालिका (Imprisonment Scale):
१. रु. १० लाखसम्म बिगो भएमा: १ वर्षसम्म कैद।
२. रु. १० लाखदेखि रु. ५० लाखसम्म बिगो भएमा: २ देखि ३ वर्षसम्म कैद।
३. रु. ५० लाखदेखि रु. १ करोडसम्म बिगो भएमा: ३ देखि ४ वर्षसम्म कैद।
४. रु. १ करोडदेखि रु. १० करोडसम्म बिगो भएमा: ४ देखि ६ वर्षसम्म कैद।
५. रु. १० करोडदेखि रु. ५० करोडसम्म बिगो भएमा: ६ देखि ८ वर्षसम्म कैद।
६. रु. ५० करोडभन्दा माथि जतिसुकै बिगो भएमा: ८ देखि १२ वर्षसम्म कैद।

चेक अनादर (Cheque Bounce) को विशेष व्यवस्था:
- चेक अनादर भएको प्रमाणित भएमा बिगो भराई बिगोको ५ प्रतिशत जरिवाना र ३ महिनासम्म कैद हुन सक्ने व्यवस्था छ।`,
        bulletPoints: [
          'Up to 10 Lakhs: Up to 1 year imprisonment.',
          '10 Lakhs to 50 Lakhs: 2 to 3 years imprisonment.',
          '50 Lakhs to 1 Crore: 3 to 4 years imprisonment.',
          '1 Crore to 10 Crore: 4 to 6 years imprisonment.',
          '10 Crore to 50 Crore: 6 to 8 years imprisonment.',
          'Above 50 Crore: 8 to 12 years imprisonment.',
          'Mandatory Recovery: Full recovery of embezzled amount (Bigo) plus equivalent penalty.'
        ]
      },
      {
        heading: '४. हदम्याद र कानुनी प्रक्रिया (Limitation Period & Legal Process)',
        content: `१. जाहेरी दिने हदम्याद (Statute of Limitations):
- कसूर भएको कुरा थाहा पाएको मितिले १ वर्षभित्र जाहेरी दिनुपर्नेछ (दफा १७)।
- तर सरकारी वा बैंकको रकम हिनामिना गरेको मुद्दामा हदम्याद लाग्दैन (दफा १७ को प्रतिबन्धात्मक वाक्यांश)।

२. अनुसन्धान अधिकारी (Investigating Authority):
- नेपाल प्रहरीको केन्द्रीय अनुसन्धान ब्युरो (CIB - Central Investigation Bureau) ले अनुसन्धान गर्दछ।

३. विशेष संरक्षण (Whistleblower Protection):
- बैंकिङ कसूरको अनुसन्धानमा सहयोग पुर्याउने सुराकी वा सहयोगीलाई उचित संरक्षण दिने व्यवस्था छ।`,
        bulletPoints: [
          'General Limitation: 1 year from the date of discovery of offence.',
          'Public/Bank Embezzlement Exception: No statute of limitations applies to government or institutional fund misappropriation.',
          'Investigating Agency: Central Investigation Bureau (CIB) of Nepal Police.'
        ]
      }
    ],
    comparisonTable: {
      title: 'बैंकिङ कसूर ऐन २०६४ र विनिमेय अधिकारपत्र ऐन २०३४ बीच तुलना (Cheque Bounce Cases)',
      headers: ['आधार (Feature)', 'बैंकिङ कसूर तथा सजाय ऐन, २०६४', 'विनिमेय अधिकारपत्र ऐन, २०३४ (Negotiable Instruments Act)'],
      rows: [
        {
          attribute: 'मुद्दाको प्रकृति (Nature of Case)',
          traditional: 'फौजदारी मुद्दा (Government Party Criminal Case)',
          reengineering: 'देवानी/व्यक्तिगत मुद्दा (Civil Dispute between parties)'
        },
        {
          attribute: 'जाहेरी र अनुसन्धान',
          traditional: 'नेपाल प्रहरी (CIB) मार्फत अनुसन्धान र सरकारी वकिलबाट अभियोजन',
          reengineering: 'सम्बन्धित व्यक्तिले सिधै जिल्ला अदालतमा फिराद पत्र दायर गर्ने'
        },
        {
          attribute: 'सजायको दायरा',
          traditional: 'बिगो, बिगो बमोजिम जरिवाना र ३ महिनासम्म कैद',
          reengineering: 'बिगो र बिगो बराबर जरिवाना वा ३ महिनासम्म कैद वा दुवै'
        },
        {
          attribute: 'अधिकार क्षेत्र (Court Jurisdiction)',
          traditional: 'उच्च अदालत (वाणिज्य इजलास)',
          reengineering: 'सम्बन्धित जिल्ला अदालत (District Court)'
        }
      ]
    },
    examTip: '💡 दफा ३, ५, ६ का कसूरहरू र दफा १५ को बिगो बमोजिम कैदको स्ल्याब (Slabbing) परीक्षामा धेरै पटक सोधिएको प्रश्न हो।',
    relatedQuizId: 'b-02',
    relatedQuestionsCount: 12
  },

  // =========================================================================
  // 3. FINANCIAL MANAGEMENT: CAPITAL BUDGETING DECISION FRAMEWORK
  // =========================================================================
  {
    id: 'financial-mgmt-capital-budgeting',
    title: 'पूँजीगत बजेटिङ तथा लगानी निर्णय (Capital Budgeting & Corporate Investment Decisions)',
    subject: 'Accounting',
    category: 'General',
    readTime: '24 min read',
    sections: [
      {
        heading: '१. पूँजीगत बजेटिङको अवधारणा (Concept & Importance of Capital Budgeting)',
        content: `पूँजीगत बजेटिङ (Capital Budgeting) दीर्घकालीन सम्पत्ति वा परियोजनाहरूमा लगानी गर्ने योजना बनाउने र मूल्याङ्कन गर्ने व्यवस्थित वित्तीय प्रक्रिया हो। यस अन्तर्गत गरिएको लगानीले संस्थाको भविष्यको नाफा, जोखिम र दिगो अस्तित्वलाई प्रत्यक्ष असर गर्दछ।

[Theoretical Significance for MBS/BBA/Banking Officer]:
"Capital budgeting is the process of identifying, evaluating, and selecting long-term investment projects whose cash flows are expected to extend beyond one operating cycle. It embodies the wealth maximization objective of modern corporate finance."

प्रमुख विशेषताहरू:
१. ठूलो पूँजीको लगानी (Substantial Outlay): प्रारम्भिक चरणमा ठूलो रकम खर्च हुन्छ।
२. अपरिवर्तनीय निर्णय (Irreversible Decisions): एकपटक लगानी गरेपछि ठूलो नोक्सानी बिना फिर्ता लिन असम्भव हुन्छ।
३. दीर्घकालीन प्रभाव (Long-term Impact): प्रतिफल ५, १० वा २० वर्षसम्म फैलिएको हुन्छ।
४. अनिश्चितता र जोखिम (High Risk & Uncertainty): भविष्यको नगद प्रवाह अनुमानमा आधारित हुन्छ।`,
        bulletPoints: [
          'Objective: Maximizing shareholder wealth by selecting projects where Return > Cost of Capital (k).',
          'Time Value of Money (TVM): Recognition that a Rupee received today is worth more than a Rupee in the future.',
          'Cash Flow Orientation: Decisions are based on Incremental After-Tax Operating Cash Flows (CFAT), not accounting profits.'
        ]
      },
      {
        heading: '२. पूँजीगत बजेटिङका मूल्याङ्कन विधिहरू (Project Evaluation Techniques)',
        content: `पूँजीगत बजेटिङका प्रविधिहरूलाई दुई समूहमा विभाजन गरिन्छ:

क. गैर-बट्टा प्रविधिहरू (Traditional / Non-Discounted Cash Flow Techniques):
१. भुक्तानी अवधि (Payback Period - PBP):
   - लगानी गरिएको प्रारम्भिक रकम (Initial Outlay) कति वर्षमा फिर्ता आउँछ भनी गणना गरिन्छ।
   - सूत्र (समान नगद प्रवाह भएमा): PBP = Initial Investment / Annual Cash Inflow
   - निर्णय नियम: तोकिएको अधिकतम समयभन्दा कम भए स्वीकार (Accept if PBP < Target Period)।
   - कमजोरी: मुद्राको समय मूल्य (TVM) र PBP पछिको नगद प्रवाहलाई बेवास्ता गर्दछ।

२. लेखा प्रतिफल दर (Accounting Rate of Return - ARR):
   - सूत्र: ARR = Average Annual Profit After Tax / Average Investment
   - निर्णय नियम: ARR > Required Rate of Return भएमा स्वीकार।

ख. बट्टा प्रविधिहरू (Modern / Discounted Cash Flow Techniques):
३. खुद वर्तमान मूल्य (Net Present Value - NPV):
   - सम्पूर्ण भविष्यका नगद प्रवाहको वर्तमान मूल्यबाट प्रारम्भिक लगानी घटाएर निकालिन्छ।
   - सूत्र: NPV = Σ [ CF_t / (1 + k)^t ] - CF_0
   - निर्णय नियम: यदि NPV > ० भएमा परियोजना स्वीकार, NPV < ० भए अस्वीकार।
   - सैद्धान्तिक श्रेष्ठता: NPV लाई पूँजीगत बजेटिङको सर्वोत्कृष्ट विधि मानिन्छ किनभने यसले शेयरधनीको सम्पत्तिमा हुने प्रत्यक्ष वृद्धि नाप्दछ।

४. आन्तरिक प्रतिफल दर (Internal Rate of Return - IRR):
   - त्यो बट्टा दर (Discount Rate) जहाँ परियोजनाको NPV शून्य (०) हुन्छ।
   - सूत्र: NPV at IRR = ०
   - निर्णय नियम: यदि IRR > पूँजीको लागत (Cost of Capital - k) भए स्वीकार।

५. नाफा सूचकांक (Profitability Index - PI / Benefit-Cost Ratio):
   - सूत्र: PI = Present Value of Future Cash Inflows / Initial Outlay
   - निर्णय नियम: यदि PI > १.० भए स्वीकार (विशेष गरी Capital Rationing को अवस्थामा उपयोगी)।`,
        bulletPoints: [
          'PBP Formula: Cash recovery timeline. Ignores cash flows beyond payback threshold.',
          'NPV Rule: Golden rule in corporate finance. Directly measures net addition to shareholder wealth.',
          'IRR Rule: The breakeven discount rate. Sensitive to unconventional cash flows and multiple IRRs.',
          'Profitability Index (PI): Ideal for ranking mutually exclusive projects under capital rationing constraints.'
        ]
      },
      {
        heading: '३. NPV र IRR बीचको विरोधाभास (NPV vs IRR Conflict in Mutually Exclusive Projects)',
        content: `जब दुईवटा परस्पर विरोधी (Mutually Exclusive) परियोजनाहरू मूल्याङ्कन गरिन्छ, NPV र IRR ले फरक-फरक निष्कर्ष दिन सक्छन्। यसको प्रमुख कारणहरू:

१. लगानी आकारको भिन्नता (Scale of Investment): एउटा परियोजना रु. १ करोडको र अर्को रु. १० करोडको हुनु।
२. नगद प्रवाहको समय भिन्नता (Cash Flow Timing): एउटा परियोजनाले सुरुका वर्षमा धेरै रकम दिने, अर्कोले पछिल्ला वर्षमा धेरै रकम दिने।
३. पुनर्गानी दरको मान्यता (Reinvestment Rate Assumption):
   - NPV विधिले मध्यवर्ती नगद प्रवाहहरूलाई 'पूँजीको लागत' (Cost of Capital - k) मा पुनः लगानी गर्न सकिन्छ भन्ने व्यावहारिक मान्यता राख्छ।
   - IRR विधिले नगद प्रवाहलाई अस्वाभाविक रूपमा उच्च 'IRR दर' मै पुनः लगानी गर्न सकिन्छ भन्ने अवास्तविक मान्यता राख्छ।

निर्णय मापदण्ड:
जब NPV र IRR बीच द्वन्द्व उत्पन्न हुन्छ, तब सधैं NPV विधिलाई नै अन्तिम निर्णयको आधार मानिन्छ किनभने यसले सेयरधनीको सम्पत्ति अधिकतम बनाउने मूल उद्देश्यलाई प्रतिनिधित्व गर्दछ।`,
        bulletPoints: [
          'Conflict Sources: Disparity in project scale, cash flow pattern, and project life span.',
          'Reinvestment Assumption: NPV assumes reinvestment at Cost of Capital (k); IRR assumes reinvestment at IRR itself.',
          'Resolution: Always prioritize NPV over IRR in mutually exclusive corporate decisions.'
        ]
      },
      {
        heading: '४. १० अङ्कको व्यावहारिक समस्या र समाधान ढाँचा (10-Mark Practical Framework)',
        content: `परीक्षामा सोधिने व्यावहारिक प्रश्नको समाधान रणनीति:

दिएको जानकारी:
प्रारम्भिक लगानी (CF_0) = रु. १०,००,०००
परियोजना आयु = ५ वर्ष
पूँजीको लागत (k) = १०%
वार्षिक करपछिको नगद प्रवाह (CFAT):
वर्ष १: रु. ३,००,०००
वर्ष २: रु. ४,००,०००
वर्ष ३: रु. ४,००,०००
वर्ष ४: रु. ३,००,०००
वर्ष ५: रु. २,००,०००

PV Factors (10% मा):
Yr 1: 0.909 | Yr 2: 0.826 | Yr 3: 0.751 | Yr 4: 0.683 | Yr 5: 0.621

वर्तमान मूल्य (PV) गणना:
Yr 1: 3,00,000 * 0.909 = 2,72,700
Yr 2: 4,00,000 * 0.826 = 3,30,400
Yr 3: 4,00,000 * 0.751 = 3,00,400
Yr 4: 3,00,000 * 0.683 = 2,04,900
Yr 5: 2,00,000 * 0.621 = 1,24,200
कुल वर्तमान मूल्य (Total PV) = रु. १२,३२,६००

खुद वर्तमान मूल्य (NPV):
NPV = Total PV - Initial Outlay = रु. १२,३२,६०० - रु. १०,००,००० = रु. २,३२,६००

निर्णय:
चूँकि NPV धनात्मक (Positive, Rs. 2,32,600 > 0) छ, त्यसैले कम्पनीले यो परियोजना स्वीकार गर्नुपर्दछ किनभने यसले शेयरधनीको सम्पत्तिमा २ लाख ३२ हजार ६ सय रुपैयाँले वृद्धि गर्दछ।`
      }
    ],
    comparisonTable: {
      title: 'पूँजीगत बजेटिङका प्रमुख मूल्याङ्कन प्रविधिहरूको तुलना',
      headers: ['विधि (Method)', 'मुद्राको समय मूल्य (TVM)', 'निर्णयको आधार (Decision Metric)'],
      rows: [
        {
          attribute: 'भुक्तानी अवधि (Payback Period)',
          traditional: 'बेवास्ता गर्दछ (No)',
          reengineering: 'लगानी फिर्ता हुने समय (Years to break even)'
        },
        {
          attribute: 'खुद वर्तमान मूल्य (NPV)',
          traditional: 'पूर्ण रूपमा समावेश गर्दछ (Yes)',
          reengineering: 'सम्पत्तिमा खुद वृद्धि (Absolute Net Wealth Increase in Rs.)'
        },
        {
          attribute: 'आन्तरिक प्रतिफल दर (IRR)',
          traditional: 'पूर्ण रूपमा समावेश गर्दछ (Yes)',
          reengineering: 'प्रतिशत प्रतिफल (Rate of Return %)'
        },
        {
          attribute: 'नाफा सूचकांक (PI)',
          traditional: 'पूर्ण रूपमा समावेश गर्दछ (Yes)',
          reengineering: 'प्रति एक रुपैयाँ लगानीको प्रतिफल अनुपात (Ratio: PV / Outlay)'
        }
      ]
    },
    examTip: '💡 MBS, BBA तथा NRB Level 6 / RBB Level 5 को लेखा तथा वित्तीय व्यवस्थापन खण्डमा NPV, IRR र PBP को सैद्धान्तिक र व्यावहारिक समस्या नियमित रूपमा १० अङ्कमा सोधिन्छ।',
    relatedQuizId: 'act-01',
    relatedQuestionsCount: 10
  },

  // =========================================================================
  // 4. MACROECONOMICS: FISCAL & MONETARY POLICY TRANSMISSION IN NEPAL
  // =========================================================================
  {
    id: 'macroeconomics-monetary-fiscal-policy',
    title: 'मौद्रिक तथा वित्तीय नीति र तिनको अन्तरसम्बन्ध (Monetary & Fiscal Policy Framework of Nepal)',
    subject: 'Economics',
    category: 'NRB',
    readTime: '25 min read',
    sections: [
      {
        heading: '१. मौद्रिक नीतिको सैद्धान्तिक आधार र उद्देश्य (Monetary Policy: Concept & Objectives)',
        content: `मौद्रिक नीति (Monetary Policy) अर्थतन्त्रमा मुद्रा प्रदाय (Money Supply), कर्जाको उपलब्धता (Credit Availability) र ब्याजदर (Interest Rate) लाई व्यवस्थित गर्न केन्द्रीय बैंकले तर्जुमा र कार्यान्वयन गर्ने समष्टिगत आर्थिक नीति हो।

नेपाल राष्ट्र बैंक ऐन, २०५८ को दफा ४ बमोजिम मौद्रिक नीतिका प्रमुख उद्देश्यहरू:
१. मूल्य स्थिरता (Price Stability): मुद्रास्फीति (Inflation) लाई तोकिएको वाञ्छित सीमा (प्रायः ५% देखि ६.५%) भित्र राख्ने।
२. शोधनान्तर स्थिरता (Balance of Payments Stability): बाह्य क्षेत्रको सन्तुलन र पर्याप्त विदेशी मुद्रा सञ्चिति (कम्तीमा ७ महिनाको आयात धान्न सक्ने) कायम गर्ने।
३. आर्थिक वृद्धिमा सहयोग (Economic Growth): उत्पादनशील र प्राथमिकता प्राप्त क्षेत्रहरूमा कर्जा प्रवाह बढाई ६% देखि ७% को आर्थिक वृद्धि हासिल गर्न सघाउने।
४. वित्तीय स्थायित्व (Financial Stability): बैंक तथा वित्तीय संस्थाहरूको सबलीकरण र सुशासन प्रवर्द्धन गर्ने।`,
        bulletPoints: [
          'Formulation Body: Nepal Rastra Bank (Governor chaired Board of Directors).',
          'Legal Mandate: Sections 4 & 5 of NRB Act 2058.',
          'Operating Target: Interbank Interest Rate (अन्तरबैंक ब्याजदर).',
          'Intermediate Target: Broad Money Supply (M2 - विस्तृत मुद्राप्रदाय) and Domestic Credit.'
        ]
      },
      {
        heading: '२. मौद्रिक नीतिका उपकरणहरू (Instruments of Monetary Policy in Nepal)',
        content: `नेपाल राष्ट्र बैंकले मौद्रिक नीति कार्यान्वयन गर्न दुई प्रकारका उपकरणहरू प्रयोग गर्दछ:

क. परिमाणात्मक वा परम्परागत उपकरणहरू (Quantitative Instruments):
१. अनिवार्य नगद मौज्दात अनुपात (Cash Reserve Ratio - CRR):
   - वाणिज्य बैंकहरूले आफ्नो कुल निक्षेपको ४% रकम राष्ट्र बैंकमा अनिवार्य खातामा राख्नुपर्दछ (हाल ४.०% कायम)।
२. वैधानिक तरलता अनुपात (Statutory Liquidity Ratio - SLR):
   - बैंकहरूले सरकारी ऋणपत्र, ट्रेजरी बिल्स र नगदमा कायम गर्नुपर्ने न्यूनतम अनुपात:
   - 'क' वर्गका वाणिज्य बैंक: १२.०%
   - 'ख' र 'ग' वर्गका वित्तीय संस्था: १०.०%
३. ब्याजदर करिडोर (Interest Rate Corridor - IRC):
   - अल्पकालीन ब्याजदरमा हुने उतारचढाव नियन्त्रण गर्न IRC को प्रयोग गरिन्छ:
   - माथिल्लो सीमा (Upper Bound / Ceiling): बैंक दर (Bank Rate) = ६.५% (अन्तिम ऋणदाता सुविधा दर)।
   - नीतिगत दर (Policy Rate / Repo Rate): ५.५% (केन्द्रीय बैंकले तरलता प्रवाह गर्ने दर)।
   - तल्लो सीमा (Lower Bound / Floor): निक्षेप संकलन दर (Deposit Collection Rate) = ३.०%।
४. खुला बजार कारोबार (Open Market Operations - OMO):
   - ट्रेजरी बिल्स र विकास ऋणपत्रको खरिद-बिक्री, रिपो (Repo) र रिभर्स रिपो (Reverse Repo)।
५. कर्जा-निक्षेप अनुपात (Credit-Deposit Ratio - CD Ratio):
   - बैंकहरूले कुल प्राथमिक पूँजी र निक्षेपको बढीमा ९०% सम्म मात्र कर्जा प्रवाह गर्न पाउँछन् (हाल ९०% को सीमा कायम)।

ख. गुणात्मक वा छनौटपूर्ण उपकरणहरू (Qualitative Instruments):
१. विपन्न वर्ग कर्जा (Deprived Sector Lending - DSL): कुल कर्जाको न्यूनतम ५% विपन्न वर्गमा प्रवाह गर्नुपर्ने।
२. प्राथमिकता प्राप्त क्षेत्र कर्जा (Productive Sector Lending): कृषि (१५%), ऊर्जा (१०%), र साना मझौला उद्यम (१५%) मा तोकिएको न्यूनतम सीमा।
३. मार्जिन लेन्डिङ सीमा (Margin Lending Capping) र घरजग्गा कर्जामा LTV Ratio (Loan to Value Ratio)।`,
        bulletPoints: [
          'CRR: 4.0% for all Class A, B, C banks.',
          'SLR: 12% for Commercial Banks; 10% for Development Banks and Finance Companies.',
          'CD Ratio Ceiling: Maximum 90% (Replaced earlier 80% CCD ratio).',
          'Interest Rate Corridor: Bank Rate (6.5%), Policy Rate (5.5%), Deposit Collection Rate (3.0%).'
        ]
      },
      {
        heading: '३. नेपालको विनिमय दर प्रणाली र मुद्रास्फीति प्रसारण (Exchange Rate Regime & Inflation Transmission)',
        content: `नेपालको मौद्रिक नीतिको एक विशिष्ट विशेषता भनेको भारतीय रुपैयाँसँगको स्थिर विनिमय दर (Fixed Peg System: 1 INR = 1.60 NPR) हो। यो दर वि.सं. २०४९ (सन् १९९३) देखि यथावत् छ।

स्थिर विनिमय दरको प्रभाव:
१. मुद्रास्फीतिको आयात (Imported Inflation): नेपालको कुल व्यापारको करिब दुई-तिहाइ (६५%) हिस्सा भारतसँग हुने भएकाले भारतको मुद्रास्फीति सिधै नेपालमा सर्दछ।
२. स्वायत्त मौद्रिक नीतिको अभाव (Monetary Policy Trilemma / Impossible Trinity):
   - स्थिर विनिमय दर र खुला पूँजी खाता (खुला सीमा) का कारण नेपालले पूर्ण रूपमा स्वतन्त्र आन्तरिक ब्याजदर नीति सञ्चालन गर्न सक्दैन।
   - भारतको रिजर्भ बैंक (RBI) ले रिपो दर बढाउँदा नेपालले पनि पूँजी पलायन रोक्न ब्याजदर बढाउनुपर्ने बाध्यता रहन्छ।`,
        bulletPoints: [
          'Fixed Exchange Rate Peg: 1 INR = 1.60 NPR serves as the nominal monetary anchor of Nepal.',
          'Impossible Trinity: A nation cannot have Fixed FX, Free Capital Flow, and Independent Monetary Policy simultaneously.',
          'Inflation Dynamics: Domestic prices are structurally linked to Indian food and fuel inflation.'
        ]
      },
      {
        heading: '४. मौद्रिक नीति र वित्तीय नीति बीचको समन्वय (Coordination between Monetary & Fiscal Policy)',
        content: `वित्तीय नीति (Fiscal Policy) अर्थ मन्त्रालयद्वारा बजेटमार्फत सार्वजनिक खर्च, राजस्व संकलन र सार्वजनिक ऋण परिचालनका लागि तर्जुमा गरिन्छ।

अन्तरसम्बन्ध र द्वन्द्व (Policy Synergy & Trade-off):
१. बजेट विस्तार र मुद्रास्फीति: सरकारले अत्यधिक घाटा बजेट ल्याउँदा र आन्तरिक ऋण बढी उठाउँदा बजारमा तरलता संकुचन (Crowding-out effect) भई ब्याजदर बढ्छ र मुद्रास्फीति दबाब सिर्जना हुन्छ।
२. मौद्रिक नीतिको सन्तुलन: राष्ट्र बैंकले बजेटले लिएको आर्थिक वृद्धिको लक्ष्यलाई सहयोग पुर्याउँदै मूल्य र शोधनान्तर स्थायित्व कायम गर्न सन्तुलित मौद्रिक उपाय अवलम्बन गर्नुपर्दछ।
३. उच्चस्तरीय वित्तीय क्षेत्र समन्वय समिति: अर्थमन्त्री, गभर्नर र सम्बद्ध निकायबीच नीतिगत तालमेल मिलाउन समन्वय समितिको बैठक बस्ने कानुनी प्रावधान छ।`,
        bulletPoints: [
          'Fiscal Expansion vs Monetary Tightening: Unchecked fiscal deficit triggers inflation and pressures FX reserves.',
          'Crowding Out: Excessive government internal borrowing dries up commercial credit for the private sector.',
          'Coordination Mechanism: Joint committee under Section 111 of NRB Act ensures harmonic macroeconomic execution.'
        ]
      }
    ],
    comparisonTable: {
      title: 'मौद्रिक नीति र वित्तीय नीति बीचको तुलना',
      headers: ['आधार (Dimension)', 'मौद्रिक नीति (Monetary Policy)', 'वित्तीय नीति (Fiscal Policy)'],
      rows: [
        {
          attribute: 'निर्माण गर्ने निकाय (Formulating Body)',
          traditional: 'नेपाल राष्ट्र बैंक (Central Bank)',
          reengineering: 'अर्थ मन्त्रालय / नेपाल सरकार (Ministry of Finance)'
        },
        {
          attribute: 'मूल उपकरण (Primary Tools)',
          traditional: 'ब्याजदर, CRR, SLR, रिपो, खुला बजार कारोबार',
          reengineering: 'सरकारी खर्च, कर (राजस्व), र आन्तरिक/बाह्य ऋण'
        },
        {
          attribute: 'प्रमुख उद्देश्य (Core Focus)',
          traditional: 'मूल्य स्थिरता र वित्तीय स्थायित्व',
          reengineering: 'सामाजिक न्याय, पूर्वाधार विकास र रोजगारी सिर्जना'
        },
        {
          attribute: 'लागू हुने समय (Implementation Lag)',
          traditional: 'निर्णय छिटो तर प्रभाव देखिन समय लाग्ने',
          reengineering: 'बजेट संसदबाट पारित हुन लामो समय लाग्ने'
        }
      ]
    },
    examTip: '💡 "मौद्रिक नीति र वित्तीय नीति एकै सिक्काका दुई पाटा हुन्।" भन्ने भनाइलाई पुष्टि गर्दै नेपालमा यी दुई नीति बीचको अन्तरसम्बन्ध विश्लेषण गर्नुहोस् भन्ने प्रश्न परीक्षामा बारम्बार १० अङ्कमा आउने प्रश्न हो।',
    relatedQuizId: 'eco-01',
    relatedQuestionsCount: 14
  },

  // =========================================================================
  // 5. FINANCIAL STATEMENT & RATIO ANALYSIS
  // =========================================================================
  {
    id: 'financial-statement-ratio-analysis',
    title: 'वित्तीय विवरण विश्लेषण तथा अनुपात विश्लेषण (Financial Statement & Ratio Analysis Framework)',
    subject: 'Accounting',
    category: 'General',
    readTime: '21 min read',
    sections: [
      {
        heading: '१. वित्तीय विवरणको परिचय र उद्देश्य (Introduction to Financial Statements)',
        content: `वित्तीय विवरण (Financial Statements) कुनै पनि संस्थाको वित्तीय अवस्था, नाफा-नोक्सान र नगद प्रवाहको यथार्थ चित्रण प्रस्तुत गर्ने औपचारिक अभिलेख हो। नेपाल वित्तीय प्रतिवेदन मान (NFRS - Nepal Financial Reporting Standards) बमोजिम पूर्ण वित्तीय विवरणमा देहायका ५ वटा अङ्गहरू समावेश हुन्छन्:

१. वित्तीय अवस्थाको विवरण (Statement of Financial Position / Balance Sheet)
२. नाफा-नोक्सान तथा अन्य विस्तृत आयको विवरण (Statement of Profit or Loss and Other Comprehensive Income)
३. नगद प्रवाह विवरण (Statement of Cash Flows - NAS 07)
४. शेयरधनीको कोषमा भएको परिवर्तनको विवरण (Statement of Changes in Equity)
५. लेखा सम्बन्धी महत्वपूर्ण नीतिहरू र व्याख्यात्मक टिप्पणीहरू (Notes to Accounts / Significant Accounting Policies)`,
        bulletPoints: [
          'Compliance: Mandatory adherence to NFRS (Nepal Financial Reporting Standards) issued by ASB Nepal.',
          'Audit Requirement: Annual statutory audit by certified Chartered Accountants (ICAN licensed).',
          'Users: Regulators (NRB, SEBON), shareholders, depositors, lenders, and tax authorities (IRD).'
        ]
      },
      {
        heading: '२. अनुपात विश्लेषणका प्रमुख वर्गहरू (Key Categories of Financial Ratios)',
        content: `अनुपात विश्लेषण (Ratio Analysis) दुई वा दुईभन्दा बढी वित्तीय तथ्याङ्कहरू बीचको गणितीय सम्बन्ध स्थापना गरी संस्थाको सबल र दुर्बल पक्षको मूल्याङ्कन गर्ने प्रमुख औजार हो:

१. तरलता अनुपात (Liquidity Ratios):
- चालू अनुपात (Current Ratio): Current Assets / Current Liabilities (आदर्श मान = २:१)।
- शीघ्र अनुपात (Quick / Acid-Test Ratio): (Current Assets - Inventory - Prepaid) / Current Liabilities (आदर्श मान = १:१)।
- बैंकिङ तरलता अनुपात: तरल सम्पत्ति / कुल निक्षेप (NRB न्यूनतम २०% सिफारिस)।

२. ऋण वा उत्तोलन अनुपात (Leverage / Solvency Ratios):
- ऋण-स्वपूँजी अनुपात (Debt-to-Equity Ratio): Total Debt / Shareholders' Equity
- ब्याज भुक्तानी क्षमता अनुपात (Interest Coverage Ratio - ICR): EBIT / Interest Expense (ICR > २ हुनु राम्रो मानिन्छ)।

३. कार्यकुशलता वा कारोबार अनुपात (Activity / Efficiency Ratios):
- आसामी संकलन अवधि (Debtors Collection Period / DSO): (Accounts Receivable / Credit Sales) * ३६५ दिन
- मौज्दात कारोबार अनुपात (Inventory Turnover Ratio): Cost of Goods Sold / Average Inventory
- कुल सम्पत्ति कारोबार अनुपात (Total Asset Turnover): Sales / Total Assets

४. नाफामूलकता अनुपात (Profitability Ratios):
- खुद नाफा अनुपात (Net Profit Margin): (Net Profit After Tax / Revenue) * १००
- सम्पत्तिमा प्रतिफल (Return on Assets - ROA): Net Profit / Total Assets (बैंकिङमा १% भन्दा माथि राम्रो मानिन्छ)।
- स्वपूँजीमा प्रतिफल (Return on Equity - ROE): Net Profit / Shareholders' Equity (बैंकिङमा १२% देखि १५% सन्तोषजनक)।
- खुद ब्याज आम्दानी अनुपात (Net Interest Margin - NIM): (Interest Income - Interest Expense) / Earning Assets (NRB ले ४% को स्प्रेड सीमा तोकेको छ)।`,
        bulletPoints: [
          'Current Ratio Formula: CA / CL (Ideal 2:1 for non-banks).',
          'Quick Ratio Formula: QA / CL (Ideal 1:1).',
          'ROA & ROE: Primary measures of managerial and equity efficiency.',
          'Net Interest Margin (NIM): Vital measure of banking operational profitability.'
        ]
      },
      {
        heading: '३. डुपोन्ट विश्लेषण (Du-Pont System of Financial Analysis)',
        content: `डुपोन्ट विश्लेषण (Du-Pont Analysis) ले संस्थाको स्वपूँजीमा प्रतिफल (ROE) लाई तीनवटा प्रमुख तत्वहरूमा टुक्र्याएर विश्लेषण गर्दछ:

ROE = Net Profit Margin * Asset Turnover * Equity Multiplier

विस्तृत सूत्र:
ROE = (Net Profit / Sales) * (Sales / Total Assets) * (Total Assets / Equity)

यसका तीन चालकहरू (Three Drivers of ROE):
१. सञ्चालन कार्यकुशलता (Operating Efficiency): Net Profit Margin ले लागत नियन्त्रणको अवस्था देखाउँछ।
२. सम्पत्ति उपयोग क्षमता (Asset Utilization): Asset Turnover ले लगानी गरिएको सम्पत्तिबाट कति बिक्री भयो भन्ने देखाउँछ।
३. वित्तीय उत्तोलन (Financial Leverage): Equity Multiplier ले कम्पनीले कति ऋण पूँजी प्रयोग गरेको छ भन्ने नाप्दछ।`,
        bulletPoints: [
          'DuPont Formula: ROE = Net Margin x Total Asset Turnover x Equity Multiplier.',
          'Diagnostic Power: Helps management pinpoint whether ROE changes stem from profit margins, asset speed, or financial leverage.'
        ]
      }
    ],
    comparisonTable: {
      title: 'चालू अनुपात (Current Ratio) र शीघ्र अनुपात (Quick Ratio) बीच भिन्नता',
      headers: ['आधार (Parameter)', 'चालू अनुपात (Current Ratio)', 'शीघ्र अनुपात (Quick Ratio)'],
      rows: [
        {
          attribute: 'गणना विधि (Formula)',
          traditional: 'Current Assets / Current Liabilities',
          reengineering: '(Current Assets - Inventory - Prepaids) / Current Liabilities'
        },
        {
          attribute: 'आदर्श मान (Benchmark)',
          traditional: '२:१ (2.0)',
          reengineering: '१:१ (1.0)'
        },
        {
          attribute: 'कडाइपन (Strictness)',
          traditional: 'सामान्य तरलता मापन गर्दछ',
          reengineering: 'अति-तत्काल भुक्तानी गर्न सक्ने क्षमता मापन गर्दछ'
        },
        {
          attribute: 'मौज्दातको समावेश (Inclusion of Stock)',
          traditional: 'मौज्दात (Inventory) समावेश हुन्छ',
          reengineering: 'बजारमा तुरुन्त नगदमा परिणत गर्न नसकिने हुनाले मौज्दात हटाइन्छ'
        }
      ]
    },
    examTip: '💡 अनुपात विश्लेषणमा गणितीय सूत्र लेख्नुका साथै निकालेको अनुपातको व्यावहारिक व्याख्या (Interpretation) र सुझाव लेख्नु अनिवार्य हुन्छ।',
    relatedQuizId: 'act-01',
    relatedQuestionsCount: 12
  },

  // =========================================================================
  // 6. PUBLIC GOVERNANCE & MANAGEMENT
  // =========================================================================
  {
    id: 'public-governance-civil-service',
    title: 'सुशासन, सार्वजनिक व्यवस्थापन तथा नागरिक बडापत्र (Good Governance & Public Management)',
    subject: 'Management',
    category: 'Loksewa',
    readTime: '19 min read',
    sections: [
      {
        heading: '१. सुशासनको अवधारणा र कानुनी आधार (Good Governance Concept & Legal Mandate)',
        content: `सुशासन (Good Governance) भनेको जनतालाई केन्द्रबिन्दुमा राखी विधिको शासन, पारदर्शिता, जवाफदेहिता र सहभागितामूलक ढंगले राज्यका स्रोत र साधनको कुशल परिचालन गर्ने शासन प्रणाली हो।

नेपालमा सुशासनको कानुनी आधार:
१. नेपालको संविधान: प्रस्तावनामा विधिको शासन र धारा ५१ मा राज्यका नीतिहरू।
२. सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४ र नियमावली, २०६५।
३. सूचनाको हक सम्बन्धी ऐन, २०६४ (Right to Information Act)।
४. भ्रष्टाचार निवारण ऐन, २०५९।

सुशासनका चार आधारस्तम्भहरू (World Bank Framework):
१. पारदर्शिता (Transparency): निर्णय प्रक्रिया र बजेट खर्चको खुलापन।
२. जवाफदेहिता (Accountability): आफ्ना काम र निर्णयप्रति जनता र कानुनप्रति उत्तरदायी हुनु।
३. सहभागिता (Participation): नीति निर्माण र कार्यान्वयनमा सरोकारवालाको संलग्नता।
४. कानुनको शासन (Rule of Law): कानुनभन्दा माथि कोही नहुने र विधिको निष्पक्ष पालना।`,
        bulletPoints: [
          'Core Act: Good Governance (Management & Operation) Act, 2064.',
          'Four Pillars: Transparency, Accountability, Participation, Rule of Law.',
          'Right to Information: Article 27 of Constitution & RTI Act 2064.'
        ]
      },
      {
        heading: '२. नागरिक बडापत्र र क्षतिपूर्ति सहितको बडापत्र (Citizen Charter & Compensation Mechanism)',
        content: `नागरिक बडापत्र (Citizen Charter) सार्वजनिक निकायले नागरिकलाई प्रदान गर्ने सेवाको प्रकार, गुणस्तर, समयसीमा, दस्तुर र जिम्मेवार अधिकृतको बारेमा सार्वजनिक रूपमा गरेको लिखित प्रतिबद्धता हो।

नागरिक बडापत्रमा खुल्नुपर्ने विवरण (सुशासन ऐन दफा २५):
१. कार्यालयले दिने सेवाको विवरण र प्रकृति।
२. सेवा प्राप्त गर्न सेवाग्राहीले पेस गर्नुपर्ने आवश्यक कागजात।
३. सेवा प्राप्त गर्न लाग्ने समय (Time-frame)।
४. सेवा शुल्क वा दस्तुर (यदि लाग्ने भए)।
५. सेवा प्रदान गर्ने सम्बन्धित कोठा नम्बर र जिम्मेवार अधिकारीको नाम र पद।
६. सेवा प्राप्त हुन नसकेमा वा गुनासो भएमा उजुरी सुन्ने अधिकारी र प्रक्रिया।

क्षतिपूर्ति सहितको नागरिक बडापत्र:
वि.सं. २०६९ वैशाख २ गतेदेखि नेपालमा तोकिएको समयमा सेवा नदिएमा सेवाग्राहीलाई दैनिक क्षतिपूर्ति (रु. १०० देखि रु. ५०० सम्म) दिने प्रणाली सुरु गरिएको हो।`,
        bulletPoints: [
          'Mandatory Notice: Displayed at the entrance of all public offices and banks.',
          'Key Disclosures: Required documents, processing timeline, fee structure, designated officer.',
          'Grievance Handling: Designated Complaint Officer (गुनासो सुन्ने अधिकारी) and complaint box.'
        ]
      },
      {
        heading: '३. सार्वजनिक व्यवस्थापनका आधुनिक अवधारणाहरू (New Public Management - NPM)',
        content: `परम्परागत कर्मचारीतन्त्र (Bureaucracy) को ढिलासुस्ती र प्रक्रियामुखी शैलीलाई विस्थापित गरी निजी क्षेत्रको कार्यकुशलता सार्वजनिक सेवामा भित्र्याउन नवीन सार्वजनिक व्यवस्थापन (New Public Management - NPM) को विकास भएको हो:

NPM का प्रमुख विशेषताहरू:
१. नतिजामुखी व्यवस्थापन (Results-Oriented Management): प्रक्रिया भन्दा नतिजा र उत्पादनलाई प्राथमिकता।
२. सेवाग्राहीलाई ग्राहक (Citizen as Customer): नागरिकलाई दयाको पात्र नभई अधिकार सम्पन्न ग्राहक मान्ने।
३. विकेन्द्रीकरण र सशक्तिकरण (Decentralization & Empowerment)।
४. कार्यसम्पादन सम्झौता (Performance Contracting)।
५. सूचना प्रविधिको अधिकतम् उपयोग (E-Governance): अनलाइन फारम, डिजिटल भुक्तानी र नागरिक एप।`,
        bulletPoints: [
          'Shift from Rule-bound Bureaucracy to Performance and Customer-Centric Management.',
          'Digital Governance: Implementation of Nagarik App, Electronic Fund Transfers, and online verification.'
        ]
      }
    ],
    comparisonTable: {
      title: 'परम्परागत सार्वजनिक प्रशासन र नवीन सार्वजनिक व्यवस्थापन (NPM) बीच भिन्नता',
      headers: ['आधार (Aspect)', 'परम्परागत प्रशासन (Traditional Administration)', 'नवीन सार्वजनिक व्यवस्थापन (New Public Management)'],
      rows: [
        {
          attribute: 'केन्द्रबिन्दु (Primary Focus)',
          traditional: 'नियम, प्रक्रिया र कानुनको अक्षरशः पालना',
          reengineering: 'सेवा प्रवाह, गुणस्तर र अन्तिम नतिजा (Outcome)'
        },
        {
          attribute: 'नागरिकको हैसियत (Status of Citizen)',
          traditional: 'आज्ञाकारी प्रजा वा सेवाग्राही',
          reengineering: 'मूल्यवान ग्राहक (Empowered Customer)'
        },
        {
          attribute: 'सञ्चालन शैली (Operational Style)',
          traditional: 'कडा सोपानतन्त्र (Hierarchical & Bureaucratic)',
          reengineering: 'लचिलो, विकेन्द्रित र प्रतिस्पर्धी (Flexible & Market-driven)'
        },
        {
          attribute: 'मूल्याङ्कनको आधार (Evaluation Metric)',
          traditional: 'नियम अनुसार काम भयो कि भएन',
          reengineering: 'लागत, गुणस्तर र ग्राहक सन्तुष्टिको स्तर'
        }
      ]
    },
    examTip: '💡 लोकसेवा र बैंकिङ परीक्षाको द्वितीय पत्रमा सुशासनका आधारस्तम्भ, नागरिक बडापत्रको महत्व र परम्परागत प्रशासन विरुद्ध NPM को तुलनात्मक विश्लेषण नियमित १० अङ्कको प्रश्न हो।',
    relatedQuizId: 'mgt-01',
    relatedQuestionsCount: 12
  }
];
