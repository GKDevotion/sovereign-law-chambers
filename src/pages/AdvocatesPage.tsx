import React from 'react';
import { AdvocatesSection } from '../components/AdvocatesSection';
import { LEGAL_IMAGES } from '../data/assetConstants';
import { ArrowLeft, ShieldCheck, GraduationCap, Building2, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';

interface AdvocatesPageProps {
  onNavigate: (page: PageId) => void;
}

export const AdvocatesPage: React.FC<AdvocatesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 animate-in fade-in duration-200">
      
      {/* Editorial Header Banner with Advocate Chamber Visual */}
      <div className="relative h-64 sm:h-80 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <img
          src={LEGAL_IMAGES.advocateChamber}
          alt="Advocate chamber conference room"
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
            <span>Advocates Roll &amp; Credentials</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Advocates, Partners &amp; Counsel
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
            Verified academic degrees, university honors, Bar Council enrolment numbers, and Supreme Court Bar Association credentials under Rule 36 proviso.
          </p>
        </div>
      </div>

      {/* Main Advocates Roll Section */}
      <AdvocatesSection />

      {/* NEW SECTION 1: Advocate-on-Record (AoR) Statutory Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Supreme Court Rules 2013 · Order IV
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100">
              Statutory Role of the Advocate-on-Record (AoR)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              In the Supreme Court of India, only an enrolled Advocate-on-Record is legally permitted to institute, draw petitions, and file appearances on behalf of litigants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <div className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                1. Four-Paper Examination
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Qualified advocates with 5+ years bar standing must complete 1 year training under a recognized Senior AoR and pass rigorous papers in Supreme Court Practice &amp; Procedure, Drafting, Advocacy &amp; Professional Ethics, and Leading Cases.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <div className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                2. Mandatory Registered Office
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Under Supreme Court regulations, every AoR must maintain a bona-fide registered law chamber within a 16-kilometer radius of the Supreme Court Building in New Delhi, staffed by an authorized clerk.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <div className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                3. Exclusive Court Competency
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                No non-AoR advocate or Senior Counsel may file an appeal, caveat, or application without the formal sponsorship, vakalatnama, and signature of an Advocate-on-Record.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION 2: Chamber Research Infrastructure & Legal Archives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-slate-900 border border-amber-200 dark:border-slate-800 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Jurisprudential Research Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-950 dark:text-slate-100">
              Research Infrastructure &amp; Archival Law Reports
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Chamber drafting is supported by an in-house team of judicial law researchers and clerks trained in citation cross-referencing across full archival sets of Supreme Court Cases (SCC 1969–Present), All India Reporter (AIR 1914–Present), Delhi Law Times (DLT), and digital repositories (SCC Online, Manupatra).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Full SCC Archive</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Supreme Court Judges Library Access</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
              <span>SCBA Library Membership</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
