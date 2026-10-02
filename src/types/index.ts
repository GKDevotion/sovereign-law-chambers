/**
 * Bar Council of India (BCI) Compliant Data Models
 * Adheres strictly to Rule 36, Chapter II, Part VI of the Bar Council of India Rules.
 */

export interface AdvocateProfile {
  id: string;
  fullName: string;
  designation: string;
  barCouncil: string;
  enrolmentNumber: string;
  enrolmentYear: number;
  qualifications: {
    degree: string;
    institution: string;
    year?: number;
    honors?: string;
  }[];
  primaryCourts: string[];
  barMemberships: string[];
  areasOfFocus: string[];
  academicPublications: string[];
  languagesSpoken: string[];
  chamberOffice: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  category: 'Appellate & Constitutional' | 'Corporate & Commercial' | 'Dispute Resolution' | 'Specialized Regulatory';
  statutoryFramework: string[];
  forumsHandled: string[];
  description: string;
  keyAspects: string[];
}

export interface JudicialForum {
  id: string;
  name: string;
  shortCode: string;
  type: 'Constitutional Court' | 'Appellate Tribunal' | 'Regulatory Authority';
  location: string;
  address: string;
  jurisdictionScope: string;
  regularBenchDays: string;
}

export interface LegalArticle {
  id: string;
  title: string;
  statute: string;
  date: string;
  readingTime: string;
  summary: string;
  keyPoints: string[];
  fullText: string;
}

export interface ChamberLocation {
  id: string;
  chamberName: string;
  type: 'Supreme Court Chamber' | 'Principal Office' | 'Regional Chamber';
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  state: string;
  phone: string;
  alternatePhone?: string;
  email: string;
  courtRegistryDistance?: string;
  visitingHours: string;
}

export interface ConcordanceItem {
  ipcSection: string;
  ipcTitle: string;
  bnsSection: string;
  bnsTitle: string;
  keyChange: string;
}

export interface LimitationItem {
  matterType: string;
  limitationPeriod: string;
  timeBegins: string;
  governingArticle: string;
  court: string;
}
