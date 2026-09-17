import { BankingActData, StudyNote } from '../../types';
import { NRB_ACT_2058_DATA } from './nrbAct2058';
import { BAFIA_2073_DATA } from './bafia2073';
import { NEGOTIABLE_INSTRUMENTS_ACT_2034_DATA } from './negotiableInstrumentsAct2034';
import { BANKING_OFFENCE_ACT_2064_DATA } from './bankingOffenceAct2064';
import { AML_ACT_2064_DATA } from './amlAct2064';
import { PAYMENT_SETTLEMENT_ACT_2075_DATA } from './paymentSettlementAct2075';
import { SECURED_TRANSACTIONS_ACT_2063_DATA } from './securedTransactionsAct2063';
import { DEBT_RECOVERY_ACT_2058_DATA } from './debtRecoveryAct2058';
import { FOREX_REGULATION_ACT_2019_DATA } from './forexRegulationAct2019';
import { COMPANY_ACT_2063_DATA } from './companyAct2063';
import { NRB_UNIFIED_DIRECTIVES_DATA, NRB_STAFF_BYLAWS_DATA } from './nrbDirectivesAndBylaws';

export {
  NRB_ACT_2058_DATA,
  BAFIA_2073_DATA,
  NEGOTIABLE_INSTRUMENTS_ACT_2034_DATA,
  BANKING_OFFENCE_ACT_2064_DATA,
  AML_ACT_2064_DATA,
  PAYMENT_SETTLEMENT_ACT_2075_DATA,
  SECURED_TRANSACTIONS_ACT_2063_DATA,
  DEBT_RECOVERY_ACT_2058_DATA,
  FOREX_REGULATION_ACT_2019_DATA,
  COMPANY_ACT_2063_DATA,
  NRB_UNIFIED_DIRECTIVES_DATA,
  NRB_STAFF_BYLAWS_DATA
};

export const ALL_BANKING_LAWS_DATA: BankingActData[] = [
  NRB_ACT_2058_DATA,
  BAFIA_2073_DATA,
  NEGOTIABLE_INSTRUMENTS_ACT_2034_DATA,
  BANKING_OFFENCE_ACT_2064_DATA,
  AML_ACT_2064_DATA,
  PAYMENT_SETTLEMENT_ACT_2075_DATA,
  SECURED_TRANSACTIONS_ACT_2063_DATA,
  DEBT_RECOVERY_ACT_2058_DATA,
  FOREX_REGULATION_ACT_2019_DATA,
  COMPANY_ACT_2063_DATA,
  NRB_UNIFIED_DIRECTIVES_DATA,
  NRB_STAFF_BYLAWS_DATA
];

/**
 * Converts rich BankingActData into a fully compatible StudyNote object
 * with both flat sections and structured actData.
 */
export function actDataToStudyNote(act: BankingActData): StudyNote {
  const flatSections: { heading: string; content: string; bulletPoints?: string[] }[] = [];

  // Preamble section
  flatSections.push({
    heading: `प्रस्तावना (Preamble) & परिचय`,
    content: act.preambleNepali,
    bulletPoints: [
      `प्रमाणीकरण मिति: ${act.promulgationDate}`,
      `कुल परिच्छेद: ${act.totalChapters} | कुल दफाहरू: ${act.totalSections}`,
      ...(act.amendments || [])
    ]
  });

  // Chapter sections
  act.chapters.forEach(ch => {
    ch.sections.forEach(sec => {
      flatSections.push({
        heading: `${ch.chapterTitleNepali} - ${sec.sectionNumber}: ${sec.titleNepali}`,
        content: sec.bareLawText,
        bulletPoints: [
          ...(sec.subSections || []),
          `कानुनी विश्लेषण र परीक्षा महत्व: ${sec.commentary}`,
          ...(sec.practicalApplication ? [`व्यावहारिक प्रयोग: ${sec.practicalApplication}`] : []),
          ...(sec.keyTakeaways || [])
        ]
      });
    });
  });

  return {
    id: act.actId,
    title: act.actTitleNepali,
    subject: 'Law',
    category: 'Banking',
    readTime: `${act.totalChapters * 4 + 10} मिनेट (Bare Act)`,
    examTip: `यस ऐनबाट लोकसेवा र बैंकिङ परीक्षामा दफागत प्रश्नहरू, परिभाषा, काम कर्तव्य र कानुनी दण्ड जरिवानाहरू सोधिने हुनाले परिच्छेद र दफा नम्बर कण्ठस्थ गर्नुहोस्।`,
    sections: flatSections,
    actData: act
  };
}

export const ALL_BANKING_LAWS_NOTES: StudyNote[] = ALL_BANKING_LAWS_DATA.map(actDataToStudyNote);

export function getBankingActById(actId: string): BankingActData | undefined {
  return ALL_BANKING_LAWS_DATA.find(a => a.actId === actId);
}
