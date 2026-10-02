/**
 * Extended Factual Legal Data
 * In strict compliance with Bar Council of India Rule 36 (Factual, educational, regulatory).
 */

export interface CourtFeeScheduleItem {
  proceedingType: string;
  statutoryForum: string;
  courtFeeAmount: string;
  governingAct: string;
  filingParticulars: string;
}

export interface LegalGlossaryTerm {
  term: string;
  pronunciation?: string;
  literalMeaning: string;
  legalDefinition: string;
  statutoryContext: string;
}

export interface LandmarkEthicalRuling {
  caseTitle: string;
  citation: string;
  court: string;
  year: number;
  principleEstablished: string;
}

export const COURT_FEE_SCHEDULE: CourtFeeScheduleItem[] = [
  {
    proceedingType: 'Special Leave Petition (Civil) under Art. 136',
    statutoryForum: 'Supreme Court of India',
    courtFeeAmount: '₹ 2,500 (plus ₹ 250 per additional respondent)',
    governingAct: 'Supreme Court Rules, 2013 (Third Schedule)',
    filingParticulars: 'Payable via Court Fee Stamp / e-Court Fee Receipt through SCAORA portal.',
  },
  {
    proceedingType: 'Special Leave Petition (Criminal) / Bail Petition',
    statutoryForum: 'Supreme Court of India',
    courtFeeAmount: 'Exempt / Nominal ₹ 100 for miscellaneous petitions',
    governingAct: 'Supreme Court Rules, 2013 (Order XXI / XXII)',
    filingParticulars: 'Nil court fee on criminal matters involving liberty of person; process fee extra.',
  },
  {
    proceedingType: 'Writ Petition (Civil) under Article 226',
    statutoryForum: 'High Court of Delhi',
    courtFeeAmount: '₹ 50 - ₹ 500 (depending on nature of relief)',
    governingAct: 'Court Fees Act, 1870 (Delhi Amendment)',
    filingParticulars: 'Affixed with Delhi Advocates Welfare Stamp (₹ 25) & Bar Association Stamp.',
  },
  {
    proceedingType: 'Commercial Suit for Recovery / Damages',
    statutoryForum: 'Commercial Court / High Court Original Side',
    courtFeeAmount: 'Ad-valorem scale (graded up to max slab prescribed by State Schedule)',
    governingAct: 'Court Fees Act, 1870 & Commercial Courts Act, 2015',
    filingParticulars: 'Mandatory pre-institution mediation certificate required under Section 12A.',
  },
  {
    proceedingType: 'Arbitration Petition under Section 9 (Interim Relief)',
    statutoryForum: 'High Court / Principal Civil Court',
    courtFeeAmount: 'Fixed Schedule (₹ 200 - ₹ 1,000 as per High Court Rules)',
    governingAct: 'Arbitration and Conciliation Act, 1996 & High Court Rules',
    filingParticulars: 'Notice copy to counter-party and proof of dispatch required.',
  },
  {
    proceedingType: 'Caveat Petition under Section 148A CPC / SC Rules',
    statutoryForum: 'Supreme Court / High Courts',
    courtFeeAmount: '₹ 250 (Supreme Court) / ₹ 50 - ₹ 100 (High Courts)',
    governingAct: 'Section 148A, Code of Civil Procedure, 1908',
    filingParticulars: 'Valid for 90 days from the date of lodging in the registry.',
  },
];

export const LEGAL_GLOSSARY: LegalGlossaryTerm[] = [
  {
    term: 'Advocate-on-Record (AoR)',
    literalMeaning: 'Counsel entitled to act and plead',
    legalDefinition:
      'An advocate who is entitled under Order IV of the Supreme Court Rules, 2013 to act as well as to plead for a party in the Supreme Court of India. No advocate other than an AoR is permitted to file an appearance or act for a litigant in the Apex Court.',
    statutoryContext: 'Supreme Court Rules, 2013 & Section 30, Advocates Act, 1961',
  },
  {
    term: 'Vakalatnama',
    literalMeaning: 'Letter of authorization or power',
    legalDefinition:
      'A formal written document signed by a litigant appointing and authorizing an advocate to represent, plead, and act on their behalf in a judicial court or tribunal. It constitutes the statutory proof of representation.',
    statutoryContext: 'Order III, Rule 4 of Code of Civil Procedure, 1908',
  },
  {
    term: 'Caveat Petition',
    literalMeaning: 'Let him beware (Latin)',
    legalDefinition:
      'A formal notice lodged in a judicial court by a party expecting a suit or application against them, requesting that no adverse or ex-parte interim order be passed without giving prior notice and an opportunity to be heard.',
    statutoryContext: 'Section 148A, Code of Civil Procedure, 1908 & Supreme Court Rules',
  },
  {
    term: 'Special Leave Petition (SLP)',
    literalMeaning: 'Petition seeking extraordinary discretion',
    legalDefinition:
      'An extraordinary constitutional appeal filed under Article 136 of the Constitution of India seeking special permission of the Supreme Court to appeal against any judgment, decree, determination, sentence or order in any cause or matter passed by any court or tribunal in India.',
    statutoryContext: 'Article 136, Constitution of India, 1950',
  },
  {
    term: 'Writ of Mandamus',
    literalMeaning: 'We command (Latin)',
    legalDefinition:
      'A judicial writ issued by the Supreme Court (Art. 32) or a High Court (Art. 226) commanding a public authority, inferior court, or corporation to perform a mandatory statutory duty that they have failed or refused to execute.',
    statutoryContext: 'Articles 32 and 226, Constitution of India',
  },
  {
    term: 'Section 11 Arbitration Petition',
    literalMeaning: 'Statutory appointment of arbitrator',
    legalDefinition:
      'A judicial petition filed before the High Court (for domestic arbitrations) or the Supreme Court (for international commercial arbitrations) for the appointment of an arbitrator when the agreed appointment procedure fails.',
    statutoryContext: 'Section 11, Arbitration and Conciliation Act, 1996 (as amended)',
  },
];

export const LANDMARK_ETHICAL_RULINGS: LandmarkEthicalRuling[] = [
  {
    caseTitle: 'Bar Council of Maharashtra v. M.V. Dabholkar',
    citation: '(1976) 2 SCC 291',
    court: 'Supreme Court of India (Constitution Bench)',
    year: 1976,
    principleEstablished:
      'The Supreme Court held that the legal profession is not a commercial business or trade. Advocates are officers of justice assisting in the administration of the law; commercial solicitation, touting, or advertising degrades the dignity and nobility of the Bar.',
  },
  {
    caseTitle: 'V.B. Joshi v. Union of India',
    citation: 'W.P. (C) No. 532 of 2000',
    court: 'High Court of Delhi / Bar Council of India Review',
    year: 2008,
    principleEstablished:
      'Challenged the absolute ban on internet profiles for lawyers. Led directly to the 2008 Resolution of the Bar Council of India inserting the Proviso to Rule 36, permitting static factual websites listing basic qualifications, enrolment particulars, and practice areas.',
  },
  {
    caseTitle: 'Indian Council of Legal Aid & Advice v. Bar Council of India',
    citation: '(1995) 1 SCC 732',
    court: 'Supreme Court of India',
    year: 1995,
    principleEstablished:
      'Affirmed the regulatory competence of the Bar Council of India under Section 49(1)(ah) of the Advocates Act, 1961 to lay down conditions and standards of professional conduct and etiquette to preserve the independence and integrity of the Bar.',
  },
];

export const JUDICIAL_CALENDAR_TERMS = [
  {
    termName: 'Opening Term (January - May)',
    sittings: 'First Monday of January to Friday preceding third week of May',
    benchDays: 'Full Benches: Monday to Friday. Miscellaneous days on Mon & Fri.',
    registryHours: 'Filing: 10:00 AM – 4:00 PM; Registry: 10:00 AM – 5:00 PM',
  },
  {
    termName: 'Summer Vacation & Vacation Benches (May - July)',
    sittings: 'Late May through early July (~7 weeks)',
    benchDays: 'Vacation Benches sit on designated days (Urgent bail, stay, and personal liberty matters only).',
    registryHours: 'Vacation Registry counters open 10:00 AM – 1:00 PM for urgent matters.',
  },
  {
    termName: 'Post-Recess Term (July - December)',
    sittings: 'First Monday of July to third Friday of December',
    benchDays: 'Regular Constitution and Appellate Benches sit daily.',
    registryHours: 'Full operational registry; Advance lists published 3 days prior.',
  },
  {
    termName: 'Winter Recess (Late December)',
    sittings: 'Last two weeks of December',
    benchDays: 'Vacation Officer available for extraordinary habeas corpus and urgent mentioning.',
    registryHours: 'Emergency filing through e-filing portal (Supreme Court / High Court).',
  },
];
