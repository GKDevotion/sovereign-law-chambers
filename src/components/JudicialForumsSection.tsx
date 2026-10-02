import React from 'react';
import { JUDICIAL_FORUMS } from '../data/lawFirmData';
import { Landmark, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';

export const JudicialForumsSection: React.FC = () => {
  return (
    <section id="judicial-forums" className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <span>Jurisdictions &amp; Tribunals</span>
            <span aria-hidden="true">·</span>
            <span>Courts of Practice</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Judicial Forums &amp; Appellate Benches
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Chamber advocates are registered practitioners regularly appearing before constitutional courts and specialized judicial tribunals across the National Capital Region and Mumbai.
          </p>
        </div>

        {/* Forums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JUDICIAL_FORUMS.map((forum) => (
            <div
              key={forum.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-400/80 dark:hover:border-amber-500/60 transition-all shadow-xs"
            >
              <div className="space-y-4">
                
                {/* Header Lockup */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200/60 dark:border-amber-900/60">
                    {forum.shortCode}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {forum.type}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-slate-100">
                  {forum.name}
                </h3>

                {/* Location */}
                <div className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>{forum.address}</span>
                </div>

                {/* Jurisdiction */}
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">
                    Statutory Jurisdiction:
                  </span>
                  {forum.jurisdictionScope}
                </div>
              </div>

              {/* Bench Timings */}
              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{forum.regularBenchDays}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
