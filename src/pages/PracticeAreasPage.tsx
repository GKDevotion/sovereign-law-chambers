import React from 'react';
import { PracticeAreas } from '../components/PracticeAreas';
import { LEGAL_IMAGES } from '../data/assetConstants';
import { ShieldCheck, BookOpen, ArrowLeft, Scale, FileText, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';

interface PracticeAreasPageProps {
  onNavigate: (page: PageId) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({ onNavigate }) => {
  const writMatrix = [
    {
      forum: 'Supreme Court of India (Article 32)',
      jurisdiction: 'Fundamental Rights Enforcement (Part III)',
      scope: 'Original writ jurisdiction directly to the Apex Court; strictly for violation of guaranteed fundamental rights.',
      prerogativeWrits: 'Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari',
    },
    {
      forum: 'High Court of Delhi (Article 226)',
      jurisdiction: 'Fundamental Rights & Any Other Legal Right',
      scope: 'Wider territorial writ jurisdiction covering fundamental rights as well as ordinary legal and statutory rights.',
      prerogativeWrits: 'Orders, directions, and writs against state authorities and statutory bodies',
    },
    {
      forum: 'Supreme Court of India (Article 136)',
      jurisdiction: 'Special Leave Petitions (SLP)',
      scope: 'Discretionary plenary appellate jurisdiction against any judgment, decree, sentence or order of any Indian court or tribunal.',
      prerogativeWrits: 'Substantial questions of law, gross miscarriage of justice, constitutional interpretation',
    },
    {
      forum: 'Commercial Division (Arbitration Act)',
      jurisdiction: 'Sections 9, 11, 34 & 37',
      scope: 'Interim protective orders (Sec 9), appointment of arbitral tribunals (Sec 11), statutory challenges to awards (Sec 34).',
      prerogativeWrits: 'Ad-hoc and institutional commercial arbitrations (domestic & international)',
    },
  ];

  const coreStatutes = [
    { title: 'The Constitution of India, 1950', domain: 'Appellate & Constitutional', role: 'Supreme law governing judicial review, writs, and appellate hierarchy.' },
    { title: 'Insolvency and Bankruptcy Code, 2016', domain: 'Commercial & Insolvency', role: 'CIRP, liquidation, avoidance applications, and Section 62 appeals.' },
    { title: 'Arbitration and Conciliation Act, 1996', domain: 'Dispute Resolution', role: 'Domestic & international arbitrations, Section 34 award challenges.' },
    { title: 'Bharatiya Nagarik Suraksha Sanhita, 2023', domain: 'Criminal Defense', role: 'Governing criminal procedure, bail, electronic summons, and trial stages.' },
    { title: 'Commercial Courts Act, 2015', domain: 'Commercial Litigation', role: 'Expedited summary judgments, case management, and pre-institution mediation.' },
    { title: 'Digital Personal Data Protection Act, 2023', domain: 'Regulatory & Tech', role: 'Data fiduciary obligations, data breach adjudication, and appellate appeals.' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 animate-in fade-in duration-200">
      
      {/* Editorial Header Banner with Jurisprudence Visual */}
      <div className="relative h-64 sm:h-80 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <img
          src={LEGAL_IMAGES.jurisprudence}
          alt="Constitutional and legal jurisprudence documents"
          className="w-full h-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-10 space-y-3 text-white">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:underline inline-flex items-center gap-1 text-slate-300 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Chambers Overview</span>
            </button>
            <span>/</span>
            <span>Statutory Practice Schedule</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Approved Areas of Legal Practice
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
            In compliance with Rule 36 of the Bar Council of India, our chambers record authorized fields of litigation, appellate practice, and regulatory compliance.
          </p>
        </div>
      </div>

      {/* Main Practice Areas Component */}
      <PracticeAreas />

      {/* NEW SECTION 1: Constitutional & Appellate Jurisdictional Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Judicial Framework
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100">
              Constitutional Writs &amp; Appellate Jurisdiction Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Comparative analysis of primary appellate remedies available before the Supreme Court of India and High Courts.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Jurisdictional Forum &amp; Article</th>
                  <th className="py-3 px-4">Subject Matter Jurisdiction</th>
                  <th className="py-3 px-4">Procedural Scope &amp; Limitations</th>
                  <th className="py-3 px-4">Prerogative Remedies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
                {writMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 px-4 font-serif font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {item.forum}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-amber-900 dark:text-amber-400">
                      {item.jurisdiction}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.scope}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 dark:text-slate-300">
                      {item.prerogativeWrits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* NEW SECTION 2: Core Governing Statutes Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            Statutory Compendium
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100">
            Principal Governing Acts &amp; Codes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreStatutes.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-2xs"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-amber-800 dark:text-amber-400">{stat.domain}</span>
                <span className="text-slate-400 font-mono">Act Index</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                {stat.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {stat.role}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
