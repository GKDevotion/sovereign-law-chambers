import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data/lawFirmData';
import { PracticeArea } from '../types';
import { BookOpen, Scale, ChevronRight, FileCheck, Layers, X, ShieldAlert } from 'lucide-react';

export const PracticeAreas: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const categories = [
    'All',
    'Appellate & Constitutional',
    'Corporate & Commercial',
    'Dispute Resolution',
    'Specialized Regulatory',
  ];

  const filteredAreas =
    activeCategory === 'All'
      ? PRACTICE_AREAS
      : PRACTICE_AREAS.filter((area) => area.category === activeCategory);

  return (
    <section id="practice-areas" className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <span>Bar Council of India Approved Scope</span>
            <span aria-hidden="true">·</span>
            <span>Rule 36 Schedule</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Approved Areas of Practice
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            In compliance with the Bar Council of India, legal practices may enumerate authorized substantive areas of law. Our chambers provide advocacy and advisory across constitutional, commercial, criminal, and specialized regulatory disciplines.
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons with click handlers as allowed in skill) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-amber-600 dark:text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-amber-400/80 dark:hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Unboxed category metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-amber-800 dark:text-amber-400">
                    {area.category}
                  </span>
                  <span>{area.forumsHandled.length} Forum Levels</span>
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-slate-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {area.description}
                </p>

                {/* Statutory Framework Quick Mention */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">
                    Governing Statutes:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-mono text-[11px] line-clamp-2">
                    {area.statutoryFramework.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Statutory Scope &amp; Forums</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BCI Disclaimer Footer Note */}
        <div className="mt-8 p-3 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            Note: Listing of practice areas is purely factual under Rule 36 proviso and should not be construed as specialization claiming superiority or competitive advantage over other advocates.
          </span>
        </div>

      </div>

      {/* Modal Details for Practice Area */}
      {selectedArea && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-auto animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                  {selectedArea.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
                  {selectedArea.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Substantive Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Chamber Scope &amp; Legal Description
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedArea.description}
              </p>
            </div>

            {/* Key Substantive Aspects */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Core Procedural &amp; Substantive Aspects
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {selectedArea.keyAspects.map((aspect, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 dark:text-amber-400 font-semibold">•</span>
                    <span>{aspect}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Statutory Framework */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Governing Legislation &amp; Acts
              </h4>
              <div className="p-3 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 space-y-1">
                {selectedArea.statutoryFramework.map((statute, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{statute}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forums Handled */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Relevant Judicial Courts &amp; Tribunals
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedArea.forumsHandled.map((forum, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200/80 dark:border-slate-700/80"
                  >
                    {forum}
                  </span>
                ))}
              </div>
            </div>

            {/* Close button */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="px-5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white rounded-lg transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
