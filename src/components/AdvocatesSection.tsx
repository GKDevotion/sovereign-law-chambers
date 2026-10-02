import React, { useState } from 'react';
import { ADVOCATES } from '../data/lawFirmData';
import { AdvocateProfile } from '../types';
import { Award, BookOpen, GraduationCap, Scale, ChevronRight, X, Building, CheckCircle2, Shield } from 'lucide-react';

export const AdvocatesSection: React.FC = () => {
  const [selectedAdvocate, setSelectedAdvocate] = useState<AdvocateProfile | null>(null);

  return (
    <section id="advocates" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <span>Bar Council Enrolment Particulars</span>
            <span aria-hidden="true">·</span>
            <span>Statutory Verification</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Advocates &amp; Chamber Partners
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            In adherence with Rule 36 of the Bar Council of India, our static profile records factual academic degrees, university honors, State Bar Council enrolment numbers, and bar association memberships.
          </p>
        </div>

        {/* Advocates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVOCATES.map((advocate) => (
            <div
              key={advocate.id}
              className="bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-amber-400/70 dark:hover:border-amber-500/50 transition-all shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Official Bar Enrolment Badge / Line */}
                <div className="pb-3 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-amber-900 dark:text-amber-300 font-semibold bg-amber-100/60 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200/80 dark:border-amber-800/80">
                    {advocate.enrolmentNumber}
                  </span>
                  <span className="text-slate-400">Enr. {advocate.enrolmentYear}</span>
                </div>

                {/* Name & Title */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-slate-100">
                    {advocate.fullName}
                  </h3>
                  <p className="text-xs font-medium text-amber-800 dark:text-amber-400">
                    {advocate.designation}
                  </p>
                </div>

                {/* Bar Council */}
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{advocate.barCouncil}</span>
                </div>

                {/* Primary Qualifications */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider block">
                    Education &amp; Degrees
                  </span>
                  <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {advocate.qualifications.slice(0, 2).map((q, idx) => (
                      <div key={idx} className="line-clamp-2 leading-tight">
                        <span className="font-medium text-slate-900 dark:text-slate-200">{q.degree}</span>
                        <span className="text-[11px] text-slate-500 block">{q.institution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Courts */}
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider block">
                    Courts of Practice
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-snug">
                    {advocate.primaryCourts.join(' · ')}
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setSelectedAdvocate(advocate)}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-900 dark:hover:text-amber-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-300 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Verified Credentials</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Advocate Detailed Qualifications Modal */}
      {selectedAdvocate && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-auto animate-in fade-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-900 dark:text-amber-300">
                  <span>Enrolment ID: {selectedAdvocate.enrolmentNumber}</span>
                  <span>·</span>
                  <span>{selectedAdvocate.barCouncil}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
                  {selectedAdvocate.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-400 font-medium">
                  {selectedAdvocate.designation}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAdvocate(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Academic Degrees & Qualifications */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Academic &amp; Professional Qualifications</span>
              </h4>
              <div className="space-y-2.5">
                {selectedAdvocate.qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg text-xs space-y-0.5"
                  >
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {q.degree} {q.year && <span className="font-normal text-slate-400">({q.year})</span>}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">{q.institution}</div>
                    {q.honors && (
                      <div className="text-amber-800 dark:text-amber-400 font-medium pt-0.5">
                        Honors: {q.honors}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bar Memberships */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-700" />
                <span>Bar Association Memberships</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {selectedAdvocate.barMemberships.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/60 rounded border border-slate-200/70 dark:border-slate-700/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courts Admitted & Regular Appearance */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-amber-700" />
                <span>Forums of Regular Practice</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedAdvocate.primaryCourts.map((court, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded border border-slate-200 dark:border-slate-700"
                  >
                    {court}
                  </span>
                ))}
              </div>
            </div>

            {/* Publications */}
            {selectedAdvocate.academicPublications.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span>Academic Publications &amp; Treatises</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {selectedAdvocate.academicPublications.map((pub, idx) => (
                    <li key={idx} className="italic border-l-2 border-amber-600 pl-2.5">
                      &quot;{pub}&quot;
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Chambers Office Location & Languages */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Chamber: </span>
                {selectedAdvocate.chamberOffice}
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Languages: </span>
                {selectedAdvocate.languagesSpoken.join(', ')}
              </div>
            </div>

            {/* Close button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAdvocate(null)}
                className="px-5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white rounded-lg transition-colors cursor-pointer"
              >
                Close Particulars
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
