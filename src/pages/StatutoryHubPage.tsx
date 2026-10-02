import React, { useState } from 'react';
import { StatutoryKnowledgeSection } from '../components/StatutoryKnowledgeSection';
import { AeoFaqSection } from '../components/AeoFaqSection';
import { ArrowLeft, BookOpen, Search, Scale, Coins, Bookmark, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';
import { COURT_FEE_SCHEDULE, LEGAL_GLOSSARY } from '../data/extendedLegalData';

interface StatutoryHubPageProps {
  onNavigate: (page: PageId) => void;
}

export const StatutoryHubPage: React.FC<StatutoryHubPageProps> = ({ onNavigate }) => {
  const [glossaryFilter, setGlossaryFilter] = useState('');

  const filteredGlossary = LEGAL_GLOSSARY.filter(
    (g) =>
      g.term.toLowerCase().includes(glossaryFilter.toLowerCase()) ||
      g.legalDefinition.toLowerCase().includes(glossaryFilter.toLowerCase())
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 animate-in fade-in duration-200">
      
      {/* Editorial Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:underline inline-flex items-center gap-1 text-slate-300 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Chambers Overview</span>
            </button>
            <span>/</span>
            <span>Statutory Knowledge Hub</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Statutory Repository &amp; Legal Utilities
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
            Public legal literacy tools including the Bharatiya Nyaya Sanhita (BNS) vs. IPC concordance lookup, Limitation Act schedules, court fee benchmarks, and legal glossary.
          </p>
        </div>
      </div>

      {/* Main Statutory Tools & Articles (Concordance Table, Limitation Schedule, Articles) */}
      <StatutoryKnowledgeSection />

      {/* NEW SECTION 1: Standard Court Fee Schedule & Registry Stamp Benchmarks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Statutory Tariffs &amp; Levies
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100 flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <span>Court Fees Act Schedule &amp; Registry Stamp Benchmarks</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Prescribed statutory fees for initiating appeals, extraordinary writs, caveat notices, and commercial suits under the Court Fees Act, 1870 and Supreme Court Rules, 2013.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Nature of Proceeding</th>
                  <th className="py-3 px-4">Jurisdictional Forum</th>
                  <th className="py-3 px-4">Prescribed Court Fee</th>
                  <th className="py-3 px-4">Governing Act &amp; Schedule</th>
                  <th className="py-3 px-4">Filing Particulars</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
                {COURT_FEE_SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 px-4 font-medium text-slate-900 dark:text-slate-100">
                      {item.proceedingType}
                    </td>
                    <td className="py-3.5 px-4 font-serif text-slate-700 dark:text-slate-300 whitespace-nowrap">
                      {item.statutoryForum}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-amber-800 dark:text-amber-400 whitespace-nowrap">
                      {item.courtFeeAmount}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                      {item.governingAct}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                      {item.filingParticulars}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            *Note: Court fees are subject to State amendments and specific High Court Original Side Fee Schedules. Electronic court fees are generated through verified portals (e-Courts / Stock Holding Corporation).
          </div>

        </div>
      </section>

      {/* NEW SECTION 2: Judicial Glossary of Common Terminology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Legal Literacy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <span>Glossary of Essential Legal &amp; Judicial Terminology</span>
            </h3>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={glossaryFilter}
              onChange={(e) => setGlossaryFilter(e.target.value)}
              placeholder="Search term (e.g. AoR, Caveat)..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGlossary.map((term, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 uppercase tracking-wider block">
                  {term.literalMeaning}
                </span>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100">
                  {term.term}
                </h4>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {term.legalDefinition}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400">
                Statute: {term.statutoryContext}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* AEO FAQ Section */}
      <AeoFaqSection />

    </div>
  );
};
