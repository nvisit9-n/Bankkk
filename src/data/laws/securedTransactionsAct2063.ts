import { BankingActData } from '../../types';

export const SECURED_TRANSACTIONS_ACT_2063_DATA: BankingActData = {
  actId: 'note-secured-transactions-act-bare-act',
  actTitleNepali: 'सुरक्षित कारोबार ऐन, २०६३ (प्रमाणिकरण: २०६३ मंसिर ०६)',
  actTitleEnglish: 'Secured Transactions Act, 2063 (2006)',
  shortName: 'Secured Transactions Act 2063',
  promulgationDate: '२०६३/०८/०६ (22 November 2006)',
  amendments: [
    'सुरक्षित कारोबार (पहिलो संशोधन) ऐन, २०८०'
  ],
  totalChapters: 8,
  totalSections: 42,
  preambleNepali: `चल सम्पत्ति (Movable Property), बौद्धिक सम्पत्ति (Intellectual Property), कृषि बाली, पशुधन, खाताको प्राप्य रकम (Accounts Receivable), र भावी सम्पत्तिहरूलाई समेत ऋणको सुरक्षण (Collateral) को रूपमा धितो राखी कर्जा प्रवाह गर्ने वातावरण सिर्जना गर्न, सुरक्षित अधिकारको दर्ता प्रणाली स्थापना गर्न र ऋण असुलीलाई द्रुत बनाउन यो ऐन जारी गरिएको छ।`,
  preambleEnglish: `An Act to facilitate secured credit by allowing the use of movable, intangible, and future property as collateral, establishing a Secured Transactions Registration Office (STRO), and simplifying the enforcement of security rights.`,
  chapters: [
    {
      chapterNumber: 1,
      chapterTitleNepali: 'परिच्छेद १: प्रारम्भिक र सुरक्षण हितको सिर्जना (Creation of Security Interest)',
      chapterTitleEnglish: 'Chapter 1: Scope & Security Interest Creation',
      description: 'चल सम्पत्ति, अभौतिक सम्पत्ति, र भावी सम्पत्तिमा सुरक्षण अधिकारको स्थापना।',
      sections: [
        {
          id: 'sta-sec-2-3',
          sectionNumber: 'दफा २ र ३',
          titleNepali: 'चल सम्पत्तिमा सुरक्षण अधिकारको सिर्जना (Security Interest in Movables)',
          bareLawText: `दफा ३: सुरक्षण हित (Security Interest) को सिर्जना:
(१) कुनै पनि व्यक्तिले ऋण वा दायित्वको भुक्तानी सुनिश्चित गर्न आफ्नो कुनै पनि चल सम्पत्ति, अमूर्त सम्पत्ति (Intangible Property), खाता प्राप्य (Receivables), सवारी साधन, यन्त्र उपकरण, मौज्दात (Inventory), वा बालीनालीमा धितोदाताको हैसियतले सुरक्षण हित सिर्जना गर्न सक्नेछ।
(२) यस्तो सम्झौता लिखित हुनुपर्नेछ र सो सम्झौतामा सुरक्षण सम्पत्तिको पर्याप्त विवरण खुलाउनु पर्नेछ।`,
          subSections: [
            'चल सम्पत्तिमा बैंकको कानुनी धितो अधिकार।',
            'भविष्यमा आर्जन हुने सम्पत्ति वा आगामी वर्षको धान/गहुँ बालीमा समेत धितो सिर्जना गर्न सकिने।',
            'स्टक, कच्चा पदार्थ र फ्याक्ट्रीका मेसिनहरूमा फ्लोटिङ चार्ज (Floating Charge)।'
          ],
          commentary: `नेपालमा विगतमा जग्गा र घर (अचल सम्पत्ति) मात्र धितो स्वीकार गरिन्थ्यो। यस ऐनले साना किसान र उद्योगीहरूलाई आफ्नो मौज्दात, मेसिन, बाख्रा, गाई वा भविष्यमा उठ्नुपर्ने बिल (Receivables) धितो राखेर बैंकबाट ऋण लिने बाटो खोलेको हो।`,
          practicalApplication: 'कृषि कर्जा, हायर पर्चेज र साना तथा मझौला उद्योग (SME) कर्जा प्रवाह।',
          keyTakeaways: [
            'चल र अमूर्त सम्पत्तिमा ऋणको धितो सिर्जना।',
            'घरजग्गा नहुनेले पनि उद्यम धितो राखी ऋण पाउन सक्ने।'
          ]
        }
      ]
    },
    {
      chapterNumber: 2,
      chapterTitleNepali: 'परिच्छेद २: सुरक्षित कारोबार दर्ता कार्यालय र प्राथमिकता (Registration & Perfection - STRO)',
      chapterTitleEnglish: 'Chapter 2: STRO Registration & Priority Rules',
      description: 'सुरक्षित कारोबार दर्ता कार्यालय (STRO - CIB/STRO), सूचना दर्ता (Notice Filing), र प्राथमिकताको नियम (First to File Rule)।',
      sections: [
        {
          id: 'sta-sec-10-18',
          sectionNumber: 'दफा १० देखि १८',
          titleNepali: 'दर्ता र प्राथमिकताको नियम (Notice Registration & Priority)',
          bareLawText: `दफा १०: सुरक्षित कारोबार दर्ता कार्यालय (Secured Transactions Registration Office - STRO):
(१) चल सम्पत्तिको सुरक्षण सम्बन्धी सूचना दर्ता गर्न एक सुरक्षित कारोबार दर्ता कार्यालय (कर्जा सूचना केन्द्र मातहत) रहनेछ।
(२) बैंक वा ऋणदाताले ऋणीसँग सम्झौता भएको सूचना विद्युतीय माध्यमबाट यस कार्यालयमा दर्ता गर्नुपर्नेछ।

दफा १५: प्राथमिकताको नियम (Rule of Priority - First to File):
(१) एउटै चल सम्पत्तिमा एकभन्दा बढी ऋणदाताहरूको सुरक्षण हित भएमा जुन ऋणदाताले पहिले सुरक्षित कारोबार दर्ता कार्यालयमा आफ्नो सूचना दर्ता गराएको छ, सोही ऋणदाताले सो सम्पत्तिमा पहिलो प्राथमिकता (First Priority) पाउनेछ।
(२) दर्ता नभएको सुरक्षणभन्दा दर्ता भएको सुरक्षणको अधिकार सदैव उच्च हुनेछ।`,
          subSections: [
            'दफा १०: अनलाइन STRO पोर्टलमा धितो सूचना दर्ता।',
            'दफा १५: First-in-Time, First-in-Right सिद्धान्त: जसको दर्ता पहिले, उसको हक पहिले।',
            'एउटै मेसिन वा गाडी दुईवटा बैंकमा धितो राखेर ठग्ने प्रवृत्ति पूर्ण नियन्त्रण।'
          ],
          commentary: `जग्गाको धितो मालपोतमा रोक्का गरे जस्तै चल सम्पत्तिको धितो STRO (Secured Transactions Registration Office) मा अनलाइन रोक्का गरिन्छ। यसले बैंकहरूलाई दोहोरो धितोको जोखिमबाट पूर्ण सुरक्षा दिन्छ।`,
          practicalApplication: 'बैंकको क्रेडिट एडमिनिस्ट्रेसन विभाग (CAD) ले गर्ने अनिवार्य अनलाइन दर्ता।',
          keyTakeaways: [
            'STRO मा दर्ता अनिवार्य।',
            'पहिले दर्ता गर्ने ऋणदाताले पहिलो प्राथमिकता पाउने।'
          ]
        }
      ]
    },
    {
      chapterNumber: 3,
      chapterTitleNepali: 'परिच्छेद ३: धितो सम्पत्ति कब्जा र असुली (Enforcement of Security Interest)',
      chapterTitleEnglish: 'Chapter 3: Extra-judicial Possession & Sale',
      description: 'ऋण नतिरेमा अदालत नगई चल सम्पत्ति कब्जा गर्ने (Extra-judicial Repossession) र बिक्री गर्ने अधिकार।',
      sections: [
        {
          id: 'sta-sec-25-30',
          sectionNumber: 'दफा २५ देखि ३०',
          titleNepali: 'अदालत बिना धितो कब्जा र बिक्री (Extra-judicial Enforcement)',
          bareLawText: `दफा २५: धितो सम्पत्ति कब्जा गर्न सक्ने:
(१) ऋणीले सम्झौता बमोजिम ऋण चुक्ता नगरेमा सुरक्षित ऋणदाताले अदालत नगईकनै शान्तिपूर्ण तवरले धितोमा रहेको चल सम्पत्ति (जस्तै गाडी, मेसिनरी, स्टक) आफ्नो कब्जामा (Possession) लिन सक्नेछ।
(२) यदि ऋणीले अवरोध गरेमा ऋणदाताले स्थानीय प्रहरी प्रशासनको सहयोग माग्न सक्नेछ र प्रहरीले सहयोग गर्नुपर्नेछ।

दफा २८: सम्पत्ति बिक्री र हिसाब मिलान:
ऋणदाताले कब्जामा लिएको सम्पत्ति सार्वजनिक लिलाम वा प्रचलित बजार मूल्यमा बिक्री गरी आफ्नो सम्पूर्ण साँवा, ब्याज र असुली खर्च कट्टा गरी बाँकी रहेको रकम ऋणीलाई फिर्ता गरिदिनु पर्नेछ।`,
          subSections: [
            'दफा २५: अदालत नगई शान्तिपूर्ण रूपमा गाडी वा मेसिन कब्जा गर्न पाउने असाधारण अधिकार।',
            'प्रहरी प्रशासनको अनिवार्य सहयोग।',
            'बिक्री गरी ऋण असुल गर्ने र बढी भएको रकम ऋणीलाई फिर्ता गर्ने।'
          ],
          commentary: `यो ऐनको सबैभन्दा शक्तिशाली पक्ष अदालतको लामो प्रक्रिया बिना नै बैंकले ऋणीको गाडी वा फ्याक्ट्रीको मेसिन ताला लगाएर सिधै नियन्त्रणमा लिन सक्नु हो।`,
          practicalApplication: 'हायर पर्चेज गाडी सिज गर्ने र स्टक जफत गर्ने कानुनी प्रक्रिया।',
          keyTakeaways: [
            'अदालत बिना चल सम्पत्ति सिधै कब्जा गर्न सकिने।',
            'प्रहरीको सहयोग लिन पाइने।'
          ]
        }
      ]
    }
  ]
};
