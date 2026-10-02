import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Scale, FileText } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Regulatory & BCI Rule 36',
    question: 'How does Sovereign Law Chambers comply with Bar Council of India Rule 36?',
    answer:
      'Under Rule 36 of Chapter II, Part VI of the Bar Council of India Rules, advocates in India are strictly prohibited from advertising or soliciting work. In strict compliance, this website functions solely as a static informational profile containing factual particulars: names, academic qualifications, State Bar Council enrolment numbers, approved practice areas, and physical chamber addresses. It strictly excludes client names, logos, case success rates, monetary compensation claims, and testimonials.',
  },
  {
    category: 'Courts & Jurisdictions',
    question: 'Which courts and judicial forums do the chamber advocates appear before?',
    answer:
      'Chamber advocates and partners regularly appear before the Supreme Court of India (including enrolled Advocates-on-Record), the High Court of Delhi, the High Court of Judicature at Bombay, the National Company Law Appellate Tribunal (NCLAT), the National Green Tribunal (NGT), the Income Tax Appellate Tribunal (ITAT), the Competition Commission of India (CCI), and specialized commercial arbitration tribunals.',
  },
  {
    category: 'Chambers & Geolocation',
    question: 'Where are the physical chambers and registry offices located?',
    answer:
      'The chambers maintain three physical offices: (1) Chamber 124, M.C. Setalvad Lawyers Chamber Block, Supreme Court of India, Tilak Marg, New Delhi 110001 (Lat 28.6186° N, Lng 77.2404° E); (2) Suite 402, Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001; and (3) Office 71, Mittal Chambers, Nariman Point, Mumbai 400021 (Lat 18.9282° N, Lng 72.8258° E).',
  },
  {
    category: 'Conferences & Appointments',
    question: 'How can an advocate or litigant schedule a chamber conference?',
    answer:
      'In accordance with judicial decorum and ethical standards, all chamber meetings and legal conferences are scheduled strictly by prior appointment during specified chamber hours (4:00 PM – 7:00 PM on court working days at the Supreme Court chamber). An appointment request may be submitted through the chamber registry form. Note that requesting an appointment does not establish an advocate-client relationship until formal engagement is confirmed.',
  },
  {
    category: 'Areas of Practice',
    question: 'What are the approved substantive areas of practice?',
    answer:
      'Approved practice areas include Constitutional Law & Writ Jurisdiction (Articles 32, 136, 226), Corporate Insolvency & Bankruptcy (IBC 2016), Domestic & International Commercial Arbitration (Arbitration Act 1996), Criminal Defense & Appellate Advocacy (BNSS 2023, PMLA), Civil Litigation & Commercial Suits, Direct & Indirect Taxation, and Environmental Law before the National Green Tribunal.',
  },
];

export const AeoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <HelpCircle className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>AEO Structured Knowledge Base</span>
            <span aria-hidden="true">·</span>
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Chamber Information &amp; Regulatory Inquiries
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Verified factual responses addressing judicial scope, bar enrolment verification, chamber appointment policies, and Bar Council of India compliance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold font-serif text-slate-900 dark:text-slate-100 leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-lg bg-white dark:bg-slate-800 text-slate-500 shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/70 dark:border-slate-800/70 pt-3 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            These answers are formatted in compliance with Schema.org FAQPage structured data to provide clear, factual answers for search engines and informational research without promotional language.
          </p>
        </div>

      </div>
    </section>
  );
};
