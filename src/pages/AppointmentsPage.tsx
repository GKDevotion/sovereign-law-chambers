import React from 'react';
import { ChamberOfficesSection } from '../components/ChamberOfficesSection';
import { ArrowLeft, Calendar, Building2, Phone, Mail, CheckCircle2, FileCheck, ShieldAlert, Clock, AlertTriangle } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';

interface AppointmentsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AppointmentsPage: React.FC<AppointmentsPageProps> = ({ onNavigate }) => {
  const preparationChecklist = [
    {
      step: '01. Certified Judgment Copy',
      description: 'Clear, legible certified copy of the impugned order/judgment passed by the High Court, District Court, or Tribunal.',
    },
    {
      step: '02. Chronology of Events',
      description: 'A structured list of chronological dates, hearings, notices, and communications relevant to the controversy.',
    },
    {
      step: '03. Lower Court Pleadings',
      description: 'Complete petition/suit, written statement, counter affidavit, rejoinder, and marked evidentiary exhibits.',
    },
    {
      step: '04. Statutory Limitation Check',
      description: 'Date on which certified copy was applied for and delivered to calculate period of limitation under Limitation Act 1963.',
    },
  ];

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
            <span>Chamber Offices &amp; Registry</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Chamber Conferences &amp; Registry Booking
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
            In accordance with judicial decorum and ethical standards, all chamber meetings are scheduled strictly by prior appointment during specified chamber hours.
          </p>
        </div>
      </div>

      {/* Main Chamber Offices & Booking Content */}
      <ChamberOfficesSection />

      {/* NEW SECTION 1: Chamber Conference Preparation Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Briefing Protocol
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <span>Preparation Checklist for Instructing Counsel &amp; Litigants</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              To ensure productive examination of facts, counsel request the following materials during initial conference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {preparationChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2"
              >
                <div className="font-serif font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {item.step}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Ethical Conflict of Interest Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 space-y-2">
            <div className="font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Mandatory Conflict-of-Interest Verification Protocol:</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Upon receiving an inquiry, chamber clerks conduct a routine conflict-of-interest check against past appearances and opposing parties. The chamber reserves the right to decline conferences where prior engagements create a professional or ethical conflict under Bar Council of India Rules.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
