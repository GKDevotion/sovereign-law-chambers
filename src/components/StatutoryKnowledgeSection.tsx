import React, { useState } from 'react';
import { LEGAL_ARTICLES, CONCORDANCE_DATA, LIMITATION_PERIODS } from '../data/lawFirmData';
import { LegalArticle } from '../types';
import { BookOpen, Search, Clock, FileText, ChevronRight, X, AlertCircle, ArrowRight, Calculator, Calendar } from 'lucide-react';

export const StatutoryKnowledgeSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);
  const [activeTab, setActiveTab] = useState<'articles' | 'concordance' | 'limitation'>('articles');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConcordance = CONCORDANCE_DATA.filter(
    (item) =>
      item.ipcSection.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ipcTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bnsSection.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bnsTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="statutory-hub" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <span>Jurisprudential Notes &amp; Statutory Utilities</span>
            <span aria-hidden="true">·</span>
            <span>Educational Repository</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Statutory Commentary &amp; Legal Reference
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Informational updates on statutory amendments and procedural concordance. Provided solely for public legal literacy in compliance with Bar Council of India guidelines.
          </p>
        </div>

        {/* Tab Controls (Segmented button control) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-fit mb-8 border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Statutory Articles
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('concordance')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'concordance'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>IPC ➔ BNS Concordance</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('limitation')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'limitation'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Limitation Act Schedule</span>
          </button>
        </div>

        {/* TAB 1: ARTICLES */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEGAL_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-400/80 dark:hover:border-amber-500/60 transition-all shadow-xs"
              >
                <div className="space-y-4">
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-amber-800 dark:text-amber-400">{article.statute}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-slate-100 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                    <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                      Key Takeaways:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {article.keyPoints.slice(0, 2).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-700 dark:text-amber-400">•</span>
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Read Full Note</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: IPC TO BNS CONCORDANCE TABLE & SEARCH */}
        {activeTab === 'concordance' && (
          <div className="space-y-4">
            {/* Search filter bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Section (e.g. 420, 302, Cheating, Defamation, Bail)..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400">
                Bharatiya Nyaya Sanhita, 2023 Concordance Schedule
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Former IPC Section</th>
                    <th className="py-3 px-4">Subject Offence</th>
                    <th className="py-3 px-4">New BNS (2023) Section</th>
                    <th className="py-3 px-4">Key Legislative Amendment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {filteredConcordance.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-mono font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        {item.ipcSection}
                      </td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300 font-medium">
                        {item.ipcTitle}
                      </td>
                      <td className="py-3 px-4 font-mono font-semibold text-amber-800 dark:text-amber-400 whitespace-nowrap">
                        {item.bnsSection}
                      </td>
                      <td className="py-3 px-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.keyChange}
                      </td>
                    </tr>
                  ))}
                  {filteredConcordance.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-slate-400">
                        No concordance sections matched your query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: LIMITATION ACT SCHEDULE */}
        {activeTab === 'limitation' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 rounded-xl text-xs text-amber-950 dark:text-amber-200">
              <strong>Statutory Note:</strong> Limitation periods under the Limitation Act 1963 are jurisdictional. Sections 4 to 24 govern exclusions, legal disability, and condonation of delay (Section 5 does not apply to original suits or execution petitions).
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Nature of Suit / Appeal</th>
                    <th className="py-3 px-4">Limitation Period</th>
                    <th className="py-3 px-4">When Period Begins to Run</th>
                    <th className="py-3 px-4">Governing Article / Statute</th>
                    <th className="py-3 px-4">Jurisdictional Forum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {LIMITATION_PERIODS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-100">
                        {item.matterType}
                      </td>
                      <td className="py-3 px-4 font-semibold text-amber-800 dark:text-amber-400 whitespace-nowrap">
                        {item.limitationPeriod}
                      </td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.timeBegins}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">
                        {item.governingArticle}
                      </td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                        {item.court}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Article Full View Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-amber-800 dark:text-amber-400">{selectedArticle.statute}</span>
                  <span>·</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-slate-100 border-l-2 border-amber-600 pl-3">
                {selectedArticle.summary}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Substantive Analysis &amp; Legislative Intent
                </h4>
                <p>{selectedArticle.fullText}</p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg space-y-2">
                <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Summary Findings:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {selectedArticle.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 dark:text-amber-400 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50/60 dark:bg-amber-950/30 rounded-lg border border-amber-200/80 dark:border-amber-900/30 text-xs text-amber-900 dark:text-amber-300">
                <strong>Disclaimer:</strong> This statutory analysis is prepared for general academic and informational understanding. Specific matters require formal examination of statutory text and judicial precedents by retained counsel.
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white rounded-lg transition-colors cursor-pointer"
              >
                Close Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
