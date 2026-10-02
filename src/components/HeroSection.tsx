import React from 'react';
import { ArrowUpRight, ShieldCheck, BookOpen, Compass, FileText, CheckCircle2 } from 'lucide-react';
import { ChamberLogo } from './ChamberLogo';

interface HeroSectionProps {
  onOpenDisclaimer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDisclaimer }) => {
  return (
    <section id="chambers" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      
      {/* Artisanal Graphic Background: Guilloché Legal Stamp & Watermark Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-40 dark:opacity-20">
        <svg
          className="absolute top-0 right-0 w-[600px] h-[600px] text-amber-900/10 dark:text-amber-400/10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M20,200 H380 M200,20 V380" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Statutory Strip: Quiet, unboxed, distinguished */}
        <div className="mb-8 p-3 sm:p-4 rounded-xl bg-amber-50/80 dark:bg-slate-900/80 border border-amber-200/80 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950 dark:text-amber-200 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
            <span className="font-semibold tracking-wide">
              Bar Council of India Rule 36 Statutory Chamber Profile
            </span>
            <span className="hidden md:inline text-amber-600/40 dark:text-amber-400/40">·</span>
            <span className="hidden md:inline text-slate-600 dark:text-slate-400 font-normal">
              Direct and indirect solicitation strictly prohibited. Static informational repository.
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenDisclaimer}
            className="self-start sm:self-auto inline-flex items-center gap-1 font-semibold text-amber-800 dark:text-amber-400 hover:underline cursor-pointer"
          >
            <span>Statutory Declaration</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hero Grid with Editorial Court Docket Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Left Editorial Text Block */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Docket File Index Number (Bespoke Court Filing Aesthetic) */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
              <span className="text-amber-900 dark:text-amber-400 font-semibold bg-amber-100/70 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200/80 dark:border-amber-800/60">
                REG: SLC/SCI-1998/2026
              </span>
              <span aria-hidden="true">·</span>
              <span>Supreme Court of India (AoR)</span>
              <span aria-hidden="true">·</span>
              <span>High Courts of Delhi &amp; Bombay</span>
            </div>

            {/* Marquee Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight leading-[1.12] text-balance">
              Advocacy, Jurisprudence &amp; Appellate Chambers
            </h1>

            {/* Dignified Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-light">
              Professional law chambers of senior advocates, solicitors, and advocates-on-record admitted to the Bar Council of Delhi and Maharashtra. Founded in 1998, regularly appearing before constitutional courts, the National Company Law Appellate Tribunal, and commercial arbitration tribunals.
            </p>

            {/* Statutory Compliance Note */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Maintained strictly as a non-solicitation, static factual profile under the proviso to Rule 36 of the Bar Council of India Rules. Excludes past client rosters, case compensation outcomes, and subjective ratings.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#practice-areas"
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Approved Practice Areas</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#advocates"
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg hover:border-slate-400 dark:hover:border-slate-700 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Advocates &amp; Enrolment Particulars</span>
              </a>

              <a
                href="#geo-locator"
                className="px-4 py-2.5 sm:py-3 text-xs font-semibold text-amber-900 dark:text-amber-300 hover:underline inline-flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4" />
                <span>Court Coordinates</span>
              </a>
            </div>

            {/* Factual Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700 dark:text-slate-300">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 tabular-nums">
                  1998
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Chambers Founded
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 tabular-nums">
                  SCBA / DHCBA
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Bar Associations
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 tabular-nums">
                  AoR
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Supreme Court Enrolled
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 tabular-nums">
                  Rule 36
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  BCI Static Profile
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Court Registry Seal Docket Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-lg space-y-5">
              
              {/* Top Legal Seal Ornament */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/80 dark:border-slate-700">
                    <ChamberLogo size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-semibold">
                      Chambers of Advocates
                    </div>
                    <div className="text-sm font-serif font-bold text-slate-900 dark:text-slate-100">
                      Supreme Court of India
                    </div>
                  </div>
                </div>
              </div>

              {/* Factual Judicial Data */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-0.5">
                    Principal Judicial Forums
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                    Supreme Court of India (Tilak Marg, New Delhi)
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                    Delhi High Court &amp; High Court of Bombay
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-0.5">
                    Enrolled Bar Councils
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 block">
                    Bar Council of Delhi (BCD) · Bar Council of Maharashtra &amp; Goa
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-0.5">
                    Apex Appellate Tribunals
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 block font-mono text-[11px]">
                    NCLAT · NGT · ITAT · CESTAT · CCI
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1">
                    Chamber Conference Terms:
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    By confirmed appointment only. Transmitting queries does not establish an attorney-client relationship.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#offices"
                className="w-full py-2.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                <span>Chamber Addresses &amp; Booking</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
