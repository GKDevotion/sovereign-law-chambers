import {
  AdvocateProfile,
  PracticeArea,
  JudicialForum,
  LegalArticle,
  ChamberLocation,
  ConcordanceItem,
  LimitationItem,
} from '../types';

export const FIRM_DETAILS = {
  name: 'Sovereign Law Chambers',
  legalStyle: 'Advocates & Legal Consultants',
  establishedYear: 1998,
  principalCity: 'New Delhi',
  telephone: '+91 11 2338 4910',
  secondaryTelephone: '+91 11 2307 8821',
  email: 'chambers@sovereignlaw.in',
  clerkEmail: 'registry@sovereignlaw.in',
  bciRegistrationNotice:
    'Profile maintained in strict compliance with the Proviso to Rule 36, Chapter II, Part VI of the Bar Council of India Rules.',
};

export const ADVOCATES: AdvocateProfile[] = [
  {
    id: 'rajiv-sharma',
    fullName: 'Rajiv N. Sharma',
    designation: 'Senior Partner & Advocate-on-Record',
    barCouncil: 'Bar Council of Delhi',
    enrolmentNumber: 'D/842/1998',
    enrolmentYear: 1998,
    qualifications: [
      {
        degree: 'Master of Laws (LL.M.) in International Law',
        institution: 'Faculty of Law, University of Cambridge',
        year: 2000,
        honors: 'Commonwealth Scholar',
      },
      {
        degree: 'B.A. LL.B. (Hons.)',
        institution: 'National Law School of India University (NLSIU), Bangalore',
        year: 1998,
        honors: 'Gold Medalist in Constitutional Law',
      },
    ],
    primaryCourts: [
      'Supreme Court of India (Advocate-on-Record)',
      'High Court of Delhi',
      'National Company Law Appellate Tribunal (NCLAT)',
    ],
    barMemberships: [
      'Supreme Court Bar Association (SCBA) - Life Member',
      'Supreme Court Advocates-on-Record Association (SCAORA)',
      'Delhi High Court Bar Association (DHCBA)',
      'Chartered Institute of Arbitrators (MCIArb)',
    ],
    areasOfFocus: [
      'Constitutional Law & Special Leave Petitions (Art. 136)',
      'Commercial & Corporate Litigation under IBC & Companies Act',
      'Domestic & International Commercial Arbitration',
    ],
    academicPublications: [
      'The Jurisprudence of Section 9 of the Insolvency and Bankruptcy Code (Indian Law Review, 2021)',
      'Judicial Review of Arbitral Awards under Section 34: An Indian Perspective (Journal of International Arbitration, 2019)',
    ],
    languagesSpoken: ['English', 'Hindi', 'Punjabi'],
    chamberOffice: 'Chamber 124, Supreme Court of India & Connaught Place Chambers',
  },
  {
    id: 'priya-deshmukh',
    fullName: 'Priya K. Deshmukh',
    designation: 'Partner - Corporate & Regulatory Disputes',
    barCouncil: 'Bar Council of Maharashtra & Goa',
    enrolmentNumber: 'MAH/2145/2004',
    enrolmentYear: 2004,
    qualifications: [
      {
        degree: 'Bachelor of Civil Law (B.C.L.)',
        institution: 'University of Oxford',
        year: 2006,
      },
      {
        degree: 'LL.B.',
        institution: 'Government Law College (GLC), Mumbai',
        year: 2004,
      },
      {
        degree: 'B.Com (Honours)',
        institution: 'Sydenham College of Commerce and Economics, Mumbai',
        year: 2001,
      },
    ],
    primaryCourts: [
      'High Court of Judicature at Bombay',
      'High Court of Delhi',
      'National Green Tribunal (Principal Bench, New Delhi)',
      'Competition Commission of India (CCI)',
    ],
    barMemberships: [
      'Bombay Bar Association (BBA)',
      'Delhi High Court Bar Association (DHCBA)',
      'International Bar Association (IBA)',
    ],
    areasOfFocus: [
      'Antitrust & Competition Law Compliance',
      'Environmental Regulatory Litigation before NGT',
      'Intellectual Property Disputes & Trademark Opposition',
    ],
    academicPublications: [
      'Standard of Proof in Cartel Enforcement in India (Competition Policy International, 2022)',
      'Extended Producer Responsibility under E-Waste Rules: Legal Analysis (NLSIU Environmental Journal, 2020)',
    ],
    languagesSpoken: ['English', 'Marathi', 'Hindi', 'Gujarati'],
    chamberOffice: 'Nariman Point Chambers, Mumbai & New Delhi Office',
  },
  {
    id: 'arun-venkatesh',
    fullName: 'Arun M. Venkatesh',
    designation: 'Partner - Criminal Defense & Appellate Practice',
    barCouncil: 'Bar Council of Delhi',
    enrolmentNumber: 'D/1590/2007',
    enrolmentYear: 2007,
    qualifications: [
      {
        degree: 'LL.M. in Criminal Justice & Human Rights',
        institution: 'London School of Economics and Political Science (LSE)',
        year: 2009,
      },
      {
        degree: 'B.A. LL.B. (Hons.)',
        institution: 'NALSAR University of Law, Hyderabad',
        year: 2007,
      },
    ],
    primaryCourts: [
      'Supreme Court of India',
      'High Court of Delhi',
      'Special PMLA & CBI Courts (Rouse Avenue District Courts)',
    ],
    barMemberships: [
      'Supreme Court Bar Association (SCBA)',
      'Delhi High Court Bar Association (DHCBA)',
      'New Delhi Bar Association (NDBA)',
    ],
    areasOfFocus: [
      'White-Collar Crime & Prevention of Money Laundering Act (PMLA)',
      'Appellate Criminal Writs & Habeas Corpus Petitions',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS) Transition Procedures',
    ],
    academicPublications: [
      'Twin Conditions for Bail under Section 45 PMLA: Constitutional Dimensions (Supreme Court Cases Journal, 2023)',
      'Transition from CrPC to BNSS: Key Procedural Changes for Trial Courts (National Law School Bulletin, 2024)',
    ],
    languagesSpoken: ['English', 'Hindi', 'Tamil'],
    chamberOffice: 'Connaught Place Chambers & Supreme Court Chamber Block',
  },
  {
    id: 'meenakshi-sundaram',
    fullName: 'Meenakshi Sundaram',
    designation: 'Counsel - Taxation, Customs & Indirect Levies',
    barCouncil: 'Bar Council of Tamil Nadu and Puducherry',
    enrolmentNumber: 'MS/672/2012',
    enrolmentYear: 2012,
    qualifications: [
      {
        degree: 'Chartered Accountant (FCA)',
        institution: 'Institute of Chartered Accountants of India (ICAI)',
        year: 2011,
      },
      {
        degree: 'LL.B.',
        institution: 'Faculty of Law, University of Delhi (Campus Law Centre)',
        year: 2012,
      },
      {
        degree: 'B.Sc. (Mathematics)',
        institution: 'Loyola College, Chennai',
        year: 2008,
      },
    ],
    primaryCourts: [
      'Supreme Court of India',
      'High Court of Delhi',
      'Income Tax Appellate Tribunal (ITAT, New Delhi Bench)',
      'Customs, Excise and Service Tax Appellate Tribunal (CESTAT)',
    ],
    barMemberships: [
      'Delhi High Court Bar Association (DHCBA)',
      'ITAT Bar Association, New Delhi',
      'Madras High Court Advocates Association (MHAA)',
    ],
    areasOfFocus: [
      'Corporate Income Tax & Transfer Pricing Controversies',
      'Goods & Services Tax (GST) Classification & Input Tax Credit Writs',
      'Customs Tariff Classification and DGFT Regulatory Inquiries',
    ],
    academicPublications: [
      'Input Tax Credit Inversion under the Indian GST Code: A Statutory Critique (Tax Law Quarterly, 2022)',
    ],
    languagesSpoken: ['English', 'Tamil', 'Hindi'],
    chamberOffice: 'Barakhamba Road Chambers, New Delhi',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'constitutional-writ',
    title: 'Constitutional Law & Writ Jurisdiction',
    category: 'Appellate & Constitutional',
    statutoryFramework: [
      'Constitution of India (Articles 32, 136, 141, 142 & 226)',
      'Supreme Court Rules, 2013',
      'High Court Rules & Orders',
    ],
    forumsHandled: [
      'Supreme Court of India (Writ Petitions & Special Leave Petitions)',
      'High Court of Delhi (Civil & Criminal Writ Benches)',
      'Various State High Courts',
    ],
    description:
      'Advocacy in fundamental rights enforcement, challenges to legislative competency, administrative action review, and Special Leave Petitions (SLPs) before the Supreme Court of India.',
    keyAspects: [
      'Special Leave Petitions (Civil & Criminal) under Article 136',
      'Writ Petitions (Mandamus, Certiorari, Prohibition, Quo Warranto)',
      'Judicial review of administrative decisions and subordinate legislation',
      'Constitutional references and interpretation before Division & Constitution Benches',
    ],
  },
  {
    id: 'corporate-insolvency',
    title: 'Corporate Insolvency & Bankruptcy (IBC)',
    category: 'Corporate & Commercial',
    statutoryFramework: [
      'Insolvency and Bankruptcy Code, 2016 (IBC)',
      'Companies Act, 2013',
      'IBBI (Insolvency Resolution Process for Corporate Persons) Regulations',
    ],
    forumsHandled: [
      'National Company Law Tribunal (NCLT Benches - Delhi, Mumbai, Chennai)',
      'National Company Law Appellate Tribunal (NCLAT, New Delhi & Chennai)',
      'Supreme Court of India (Appeals under Section 62 IBC)',
    ],
    description:
      'Chamber representation in corporate insolvency resolution processes (CIRP), liquidation proceedings, creditor rights, and restructuring litigation.',
    keyAspects: [
      'Initiation of CIRP under Sections 7, 9 & 10 of IBC 2016',
      'Resolution plan approvals, challenges, and objections before the Adjudicating Authority',
      'Liquidation applications and avoidance transactions (PUFE applications)',
      'Appellate advocacy before NCLAT and the Supreme Court under Section 62',
    ],
  },
  {
    id: 'commercial-arbitration',
    title: 'Arbitration & Alternative Dispute Resolution',
    category: 'Dispute Resolution',
    statutoryFramework: [
      'Arbitration and Conciliation Act, 1996 (as amended in 2015, 2019 & 2021)',
      'Commercial Courts Act, 2015',
      'UNCITRAL Model Law & New York Convention, 1958',
    ],
    forumsHandled: [
      'Domestic Arbitral Tribunals across India',
      'International Commercial Arbitrations (SIAC, LCIA, ICC, DIAC)',
      'High Court of Delhi (Sections 9, 11, 34 & 37 applications)',
      'Supreme Court of India (Section 11 appointments in international arbitrations)',
    ],
    description:
      'Conducting ad-hoc and institutional arbitrations, court proceedings for interim relief (Section 9), appointment of arbitrators (Section 11), and award challenges (Section 34).',
    keyAspects: [
      'Applications for interim protective measures under Section 9 of the Act',
      'Petitions for appointment of sole arbitrators / arbitral tribunals under Section 11',
      'Representation in evidentiary arbitral hearings and pleadings',
      'Statutory challenges to arbitral awards under Section 34 and appeals under Section 37',
    ],
  },
  {
    id: 'criminal-defense',
    title: 'Criminal Defense, Bail & Appellate Advocacy',
    category: 'Appellate & Constitutional',
    statutoryFramework: [
      'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) / CrPC, 1973',
      'Bharatiya Nyaya Sanhita, 2023 (BNS) / Indian Penal Code, 1860',
      'Prevention of Money Laundering Act, 2002 (PMLA)',
      'Prevention of Corruption Act, 1988 (PC Act)',
    ],
    forumsHandled: [
      'Supreme Court of India (Criminal SLPs & Bail Petitions)',
      'High Court of Delhi (Criminal Appeals, Revisions & Bail Petitions)',
      'Special CBI & PMLA Courts (Rouse Avenue / Sessions Courts)',
    ],
    description:
      'Chamber advocacy in complex criminal proceedings, economic offences, statutory bail applications, revision petitions, and appeals against conviction or acquittal.',
    keyAspects: [
      'Anticipatory bail applications and regular bail advocacy under BNSS / CrPC',
      'Litigation regarding economic offences, PMLA inquiries, and SFIO matters',
      'Petitions under Section 482 CrPC / Section 528 BNSS for quashing of FIRs',
      'Criminal appellate advocacy before the High Court and the Supreme Court',
    ],
  },
  {
    id: 'civil-property',
    title: 'Civil Litigation & Real Property Disputes',
    category: 'Dispute Resolution',
    statutoryFramework: [
      'Code of Civil Procedure, 1908 (CPC)',
      'Specific Relief Act, 1963',
      'Transfer of Property Act, 1882',
      'Indian Succession Act, 1925',
    ],
    forumsHandled: [
      'High Court of Delhi (Original Jurisdiction for high-value suits)',
      'District Courts of Delhi & National Capital Region',
      'RERA Authorities & Appellate Tribunals',
    ],
    description:
      'Substantive civil trial and appellate representation concerning title, boundary determinations, specific performance of contracts, partition, probate, and succession.',
    keyAspects: [
      'Original civil suits for declaration, injunction, and specific performance',
      'Commercial suits before designated Commercial Courts under Commercial Courts Act 2015',
      'Probate petitions, letters of administration, and testamentary partition suits',
      'Appellate advocacy in First Appeals (RFA) and Second Appeals (RSA) before High Courts',
    ],
  },
  {
    id: 'ip-technology',
    title: 'Intellectual Property & Technology Law',
    category: 'Specialized Regulatory',
    statutoryFramework: [
      'Trade Marks Act, 1999',
      'The Patents Act, 1970',
      'The Copyright Act, 1957',
      'Digital Personal Data Protection Act, 2023 (DPDP Act)',
      'Information Technology Act, 2000',
    ],
    forumsHandled: [
      'Intellectual Property Division (IPD) of Delhi High Court',
      'Trade Marks Registry & Patent Office',
      'Appellate Courts and Commercial Division Benches',
    ],
    description:
      'Litigation and contentious proceedings concerning trademark infringement, patent validity challenges, copyright enforcement, and regulatory compliance under data protection statutes.',
    keyAspects: [
      'Injunction suits for trademark infringement and passing off before the IPD',
      'Patent revocation petitions and pre-grant/post-grant opposition proceedings',
      'Copyright dispute advocacy in media, software, and literary publishing',
      'Factual statutory advisory regarding DPDP Act 2023 requirements',
    ],
  },
  {
    id: 'taxation-customs',
    title: 'Direct & Indirect Taxation / Customs',
    category: 'Specialized Regulatory',
    statutoryFramework: [
      'Income-tax Act, 1961',
      'Central Goods and Services Tax Act, 2017 (CGST Act)',
      'Customs Act, 1962 & Foreign Trade (Development and Regulation) Act',
    ],
    forumsHandled: [
      'Supreme Court of India (Tax Appeals & Special Leave Petitions)',
      'High Court of Delhi (Tax Appeals under Section 260A)',
      'Income Tax Appellate Tribunal (ITAT)',
      'Customs, Excise and Service Tax Appellate Tribunal (CESTAT)',
    ],
    description:
      'Representation in statutory tax appeals, constitutional challenges to tax assessments, input tax credit disallowances, transfer pricing adjustments, and customs valuation disputes.',
    keyAspects: [
      'Substantive tax appeals before the High Court under Section 260A on substantial questions of law',
      'Tribunal advocacy before ITAT and CESTAT benches across India',
      'Writ petitions challenging reassessment notices (Sections 148 / 148A)',
      'Customs classification and advance ruling proceedings',
    ],
  },
  {
    id: 'environment-regulatory',
    title: 'Environmental Law & Administrative Regulations',
    category: 'Specialized Regulatory',
    statutoryFramework: [
      'National Green Tribunal Act, 2010',
      'Environment (Protection) Act, 1986',
      'Water (Prevention and Control of Pollution) Act, 1974',
      'Air (Prevention and Control of Pollution) Act, 1981',
    ],
    forumsHandled: [
      'National Green Tribunal (Principal Bench, New Delhi & Zonal Benches)',
      'Supreme Court of India (Appeals under Section 22 of NGT Act)',
      'State Pollution Control Boards & Central Pollution Control Board (CPCB)',
    ],
    description:
      'Chamber representation in environmental litigation, environmental clearances (EC) challenges, forest clearance issues, pollution control compliance orders, and tribunal appeals.',
    keyAspects: [
      'Original Applications and Appeals under Sections 14, 15, 16 & 18 of NGT Act 2010',
      'Challenges to Environmental Impact Assessment (EIA) clearance decisions',
      'Advocacy regarding industrial effluent compliance and closure directions under Section 33A/31A',
      'Appeals to the Supreme Court of India under Section 22 of the NGT Act',
    ],
  },
];

export const JUDICIAL_FORUMS: JudicialForum[] = [
  {
    id: 'supreme-court',
    name: 'Supreme Court of India',
    shortCode: 'SCI',
    type: 'Constitutional Court',
    location: 'Tilak Marg, New Delhi',
    address: 'Tilak Marg, Mandi House, New Delhi, Delhi 110001',
    jurisdictionScope:
      'Apex judicial forum of India; Original jurisdiction under Art. 32; Appellate jurisdiction under Arts. 132, 133, 134; Discretionary review under Art. 136.',
    regularBenchDays: 'Monday to Friday (Miscellaneous on Mon/Fri, Regular on Tue/Wed/Thu)',
  },
  {
    id: 'delhi-high-court',
    name: 'High Court of Delhi',
    shortCode: 'DHC',
    type: 'Constitutional Court',
    location: 'Sher Shah Road, New Delhi',
    address: 'Sher Shah Road, Near India Gate, New Delhi, Delhi 110503',
    jurisdictionScope:
      'Territorial jurisdiction over the National Capital Territory of Delhi; Original Civil Jurisdiction (suits exceeding Rs. 2 Crores); Commercial Division & Appellate Benches.',
    regularBenchDays: 'Monday to Friday (10:30 AM to 4:30 PM)',
  },
  {
    id: 'nclat',
    name: 'National Company Law Appellate Tribunal',
    shortCode: 'NCLAT',
    type: 'Appellate Tribunal',
    location: 'B-4 Wing, 3rd Floor, Pt. Deendayal Antyodaya Bhawan, CGO Complex, New Delhi',
    address: 'Lodhi Road, New Delhi, Delhi 110003',
    jurisdictionScope:
      'Appellate forum hearing orders passed by NCLT benches under the Insolvency and Bankruptcy Code (IBC) 2016 and Companies Act 2013, as well as orders of the CCI.',
    regularBenchDays: 'Monday to Friday',
  },
  {
    id: 'ngt',
    name: 'National Green Tribunal (Principal Bench)',
    shortCode: 'NGT',
    type: 'Appellate Tribunal',
    location: 'Faridkot House, Copernicus Marg, New Delhi',
    address: 'Copernicus Marg, New Delhi, Delhi 110001',
    jurisdictionScope:
      'Specialized judicial body established under NGT Act 2010 for effective and expeditious disposal of cases relating to environmental protection and conservation.',
    regularBenchDays: 'Monday to Friday',
  },
  {
    id: 'bombay-high-court',
    name: 'High Court of Judicature at Bombay',
    shortCode: 'BHC',
    type: 'Constitutional Court',
    location: 'Fort, Mumbai',
    address: 'Dr. Kane Road, Fort, Mumbai, Maharashtra 400032',
    jurisdictionScope:
      'Chartered High Court with original and appellate jurisdiction over Maharashtra and Goa, Union Territories of Daman and Diu and Dadra and Nagar Haveli.',
    regularBenchDays: 'Monday to Friday',
  },
  {
    id: 'itat-delhi',
    name: 'Income Tax Appellate Tribunal (Delhi Benches)',
    shortCode: 'ITAT',
    type: 'Appellate Tribunal',
    location: 'Lok Nayak Bhawan, Khan Market, New Delhi',
    address: 'Khan Market, New Delhi, Delhi 110003',
    jurisdictionScope:
      'Final fact-finding authority in statutory appeals concerning direct taxes under the Income-tax Act, 1961.',
    regularBenchDays: 'Monday to Friday',
  },
];

export const CHAMBER_LOCATIONS: ChamberLocation[] = [
  {
    id: 'sc-chamber',
    chamberName: 'Supreme Court Chamber',
    type: 'Supreme Court Chamber',
    addressLine1: 'Chamber No. 124, M.C. Setalvad Lawyers Chamber Block',
    addressLine2: 'Supreme Court of India, Tilak Marg',
    city: 'New Delhi',
    postalCode: '110001',
    state: 'Delhi',
    phone: '+91 11 2338 4910',
    alternatePhone: '+91 11 2307 8821',
    email: 'sc.chamber@sovereignlaw.in',
    courtRegistryDistance: 'Inside Supreme Court Complex (2 mins walk to Court Rooms 1-17)',
    visitingHours: '4:00 PM - 7:00 PM (By prior judicial appointment only; court working days)',
  },
  {
    id: 'principal-office',
    chamberName: 'Principal Central Chambers',
    type: 'Principal Office',
    addressLine1: 'Suite 402, 4th Floor, Statesman House',
    addressLine2: 'Barakhamba Road, Connaught Place',
    city: 'New Delhi',
    postalCode: '110001',
    state: 'Delhi',
    phone: '+91 11 4152 7980',
    email: 'chambers@sovereignlaw.in',
    courtRegistryDistance: '10 mins drive to Supreme Court & Delhi High Court',
    visitingHours: '10:00 AM - 7:00 PM (Monday to Saturday, strictly by confirmed appointment)',
  },
  {
    id: 'mumbai-chamber',
    chamberName: 'Mumbai Regional Chambers',
    type: 'Regional Chamber',
    addressLine1: 'Office 71, 7th Floor, Mittal Chambers',
    addressLine2: 'Barrister Rajni Patel Marg, Nariman Point',
    city: 'Mumbai',
    postalCode: '400021',
    state: 'Maharashtra',
    phone: '+91 22 2288 3410',
    email: 'mumbai@sovereignlaw.in',
    courtRegistryDistance: '15 mins to High Court of Bombay & NCLT Mumbai Benches',
    visitingHours: '10:00 AM - 6:30 PM (Monday to Friday, by confirmed appointment)',
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'bnss-crpc-transition',
    title: 'Procedural Transition from CrPC 1973 to BNSS 2023 in Trial & Appellate Courts',
    statute: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
    date: 'August 2024',
    readingTime: '6 min read',
    summary:
      'A factual examination of transitional provisions under Section 531 of the BNSS 2023, clarifying the continuity of pending trials, appeals, and revision applications instituted under the 1973 Code.',
    keyPoints: [
      'Section 531 of BNSS preserves pending proceedings instituted prior to July 1, 2024 under the former Code.',
      'Mandatory videography provisions during search and seizure operations under Section 105 BNSS.',
      'Revised statutory framework for preliminary enquiry in cognizable offences punishable between 3 to 7 years.',
      'Formal statutory recognition of electronic summons and trials in absentia under Section 356.',
    ],
    fullText:
      'With the notification of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 coming into effect on July 1, 2024, judicial courts and legal practitioners across India navigate procedural continuity. Section 531 explicitly serves as the saving clause, mandating that any appeal, application, trial, inquiry, or investigation pending on the date of commencement shall be disposed of, continued, held or conducted in accordance with the provisions of the Code of Criminal Procedure, 1973. However, newly instituted complaints and investigations commenced on or after July 1, 2024 fall squarely under the statutory provisions of BNSS. Advocates and trial courts are adjusting registries to manage twin procedural regimes during this transitional period.',
  },
  {
    id: 'ibc-pufe-jurisprudence',
    title: 'Avoidance Transactions under the IBC: The Requirement of Independent Forensic Verification',
    statute: 'Insolvency and Bankruptcy Code, 2016',
    date: 'June 2024',
    readingTime: '5 min read',
    summary:
      'Analysis of statutory standards governing preferential, undervalued, fraudulent, and extortionate (PUFE) transactions under Sections 43, 45, 49 and 66 before the NCLT and NCLAT.',
    keyPoints: [
      'Look-back period distinctions between related parties (2 years) and non-related entities (1 year) under Section 43.',
      'The evidentiary threshold required to substantiate "intent to defraud" under Section 66.',
      'Jurisprudence regarding whether an avoidance application survives the approval of a Resolution Plan.',
      'Admissibility of transaction audit reports as expert evidence under Section 45 of the Indian Evidence Act.',
    ],
    fullText:
      'Under the Insolvency and Bankruptcy Code, 2016, avoidance applications under Sections 43, 45, 49, and 66 constitute a critical component of the resolution professional\'s statutory mandate. Recent appellate decisions from the Supreme Court and NCLAT have reinforced that the Resolution Professional must form an independent opinion regarding whether transactions fall within the statutory criteria, rather than mechanically appending forensic audit conclusions. Furthermore, the timing of avoidance filings and their treatment post-resolution plan approval continue to be defined by landmark judicial pronouncements.',
  },
  {
    id: 'dpdp-act-readiness',
    title: 'Key Compliance Mandates under the Digital Personal Data Protection Act, 2023',
    statute: 'Digital Personal Data Protection Act, 2023',
    date: 'April 2024',
    readingTime: '5 min read',
    summary:
      'Overview of obligations imposed on Data Fiduciaries, Consent Managers, and mechanisms established for the adjudication of personal data breaches.',
    keyPoints: [
      'Requirement of unconditional, specific, informed, and unambiguous consent notices.',
      'Statutory obligations of Significant Data Fiduciaries (SDFs) including Data Protection Officers.',
      'Penal structure up to Rs. 250 Crores for failure to take reasonable security safeguards.',
      'Establishment and appellate mechanism of the Data Protection Board of India.',
    ],
    fullText:
      'The Digital Personal Data Protection Act, 2023 introduces a comprehensive statutory framework regulating the processing of digital personal data within India and extraterritorially when offering goods or services to data principals in India. The Act streamlines lawful grounds for processing primarily into consent and legitimate uses, eliminating complex legacy categories while establishing stringent penalties for non-compliance.',
  },
];

export const CONCORDANCE_DATA: ConcordanceItem[] = [
  {
    ipcSection: 'Section 420 IPC',
    ipcTitle: 'Cheating and dishonestly inducing delivery of property',
    bnsSection: 'Section 318(4) BNS',
    bnsTitle: 'Cheating',
    keyChange: 'Structured into clear subsections with enhanced fine provisions.',
  },
  {
    ipcSection: 'Section 302 IPC',
    ipcTitle: 'Punishment for murder',
    bnsSection: 'Section 103(1) BNS',
    bnsTitle: 'Punishment for murder',
    keyChange: 'Section 103(2) introduces statutory classification for mob lynching.',
  },
  {
    ipcSection: 'Section 307 IPC',
    ipcTitle: 'Attempt to murder',
    bnsSection: 'Section 109 BNS',
    bnsTitle: 'Attempt to murder',
    keyChange: 'Retains substantive provisions with streamlined drafting.',
  },
  {
    ipcSection: 'Section 375 / 376 IPC',
    ipcTitle: 'Rape and punishment for rape',
    bnsSection: 'Section 63 / 64 BNS',
    bnsTitle: 'Rape and punishment for rape',
    keyChange: 'Relocated into a dedicated opening chapter concerning crimes against women and children.',
  },
  {
    ipcSection: 'Section 124A IPC',
    ipcTitle: 'Sedition',
    bnsSection: 'Section 152 BNS',
    bnsTitle: 'Act endangering sovereignty, unity and integrity of India',
    keyChange: 'Sedition repealed; substituted by defined offences against national sovereignty.',
  },
  {
    ipcSection: 'Section 304A IPC',
    ipcTitle: 'Causing death by negligence (Rash and negligent driving)',
    bnsSection: 'Section 106 BNS',
    bnsTitle: 'Causing death by negligence',
    keyChange: 'Section 106(2) provides graded punishment for failing to report motor accidents to police.',
  },
  {
    ipcSection: 'Section 498A IPC',
    ipcTitle: 'Husband or relative of husband of a woman subjecting her to cruelty',
    bnsSection: 'Section 85 BNS',
    bnsTitle: 'Husband or relative subjecting a woman to cruelty',
    keyChange: 'Substantive definition retained under Chapter V of BNS.',
  },
  {
    ipcSection: 'Section 500 IPC',
    ipcTitle: 'Punishment for defamation',
    bnsSection: 'Section 356 BNS',
    bnsTitle: 'Defamation',
    keyChange: 'Addition of community service as an alternative statutory punishment.',
  },
];

export const LIMITATION_PERIODS: LimitationItem[] = [
  {
    matterType: 'Suit for Specific Performance of a Contract',
    limitationPeriod: '3 Years',
    timeBegins: 'The date fixed for the performance, or, if no such date is fixed, when the plaintiff has notice that performance is refused.',
    governingArticle: 'Article 54, Limitation Act 1963',
    court: 'Designated Commercial / Civil Court',
  },
  {
    matterType: 'Suit for Recovery of Money / Debt',
    limitationPeriod: '3 Years',
    timeBegins: 'When the loan is made, or when the debt becomes payable.',
    governingArticle: 'Articles 19 - 22, Limitation Act 1963',
    court: 'Civil / Commercial Court',
  },
  {
    matterType: 'Appeal to High Court from a decree or order of a subordinate court',
    limitationPeriod: '90 Days',
    timeBegins: 'The date of the decree or order appealed from.',
    governingArticle: 'Article 116(a), Limitation Act 1963',
    court: 'High Court',
  },
  {
    matterType: 'Appeal under the Code of Civil Procedure to any other court',
    limitationPeriod: '30 Days',
    timeBegins: 'The date of the decree or order.',
    governingArticle: 'Article 116(b), Limitation Act 1963',
    court: 'District Judge / Senior Civil Judge',
  },
  {
    matterType: 'Special Leave Petition (SLP) to Supreme Court (Civil / Criminal)',
    limitationPeriod: '90 Days (60 Days if certificate refused)',
    timeBegins: 'The date of the judgment, decree or final order of the High Court.',
    governingArticle: 'Order XXI / XXII, Supreme Court Rules 2013 & Art. 133 Limitation Act',
    court: 'Supreme Court of India',
  },
  {
    matterType: 'Application for setting aside an Arbitral Award (Section 34)',
    limitationPeriod: '3 Months (+ 30 days condonable on sufficient cause)',
    timeBegins: 'The date on which the party received the arbitral award.',
    governingArticle: 'Section 34(3), Arbitration & Conciliation Act 1996',
    court: 'High Court / Principal Civil Court',
  },
  {
    matterType: 'Appeal to NCLAT against NCLT order under IBC',
    limitationPeriod: '30 Days (+ 15 days condonable)',
    timeBegins: 'The date of receipt of the order of the Adjudicating Authority.',
    governingArticle: 'Section 61(2), Insolvency and Bankruptcy Code 2016',
    court: 'NCLAT',
  },
];
