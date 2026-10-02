import React from 'react';
import { ChamberLogo } from './ChamberLogo';
import { ShieldCheck, Phone, Mail, ArrowUp } from 'lucide-react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { PageId } from './MultiPageNavbar';

interface FooterProps {
  onOpenDisclaimer: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDisclaimer, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: PageId, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      
      {/* Top Statutory Rule 36 Declaration Banner */}
      <div className="border-b border-slate-800 bg-slate-950/80 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3 max-w-4xl">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-100 uppercase tracking-wider text-[11px]">
                Bar Council of India Rule 36 Compliance Declaration
              </span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Under Rule 36 of the Bar Council of India Rules, direct or indirect advertising and solicitation by advocates are strictly prohibited. This website functions solely as a static profile presenting factual academic credentials, Bar Council enrolment numbers, approved practice areas, and physical chamber addresses. It does not solicit legal work or create an advocate-client relationship.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenDisclaimer}
            className="shrink-0 px-3.5 py-1.5 rounded-lg border border-amber-500/40 text-amber-300 hover:bg-amber-950/40 text-xs font-medium transition-colors cursor-pointer"
          >
            Review BCI Disclaimer
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1-2: Pure Logo Base */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={(e) => handleNavClick('home', e)}
              className="inline-block group focus:outline-none cursor-pointer"
            >
              <ChamberLogo variant="monogram" size={44} />
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Advocates &amp; Legal Consultants admitted to the Bar Council of India. Practicing before the Supreme Court of India, Delhi High Court, Bombay High Court, and Specialized Appellate Tribunals.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Supreme Court Chamber: +91 11 2338 4910</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Official Registry: {FIRM_DETAILS.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Mirror */}
          <div className="space-y-3 text-xs">
            <span className="font-semibold text-slate-100 uppercase tracking-wider block">
              Chambers &amp; Scope
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('home', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Chambers Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('practice-areas', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Approved Practice Areas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('advocates', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Advocates &amp; Enrolments
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('geo-courts', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Court GEO Proximity
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory Repository */}
          <div className="space-y-3 text-xs">
            <span className="font-semibold text-slate-100 uppercase tracking-wider block">
              Statutory Utilities
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('statutory-hub', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  IPC to BNS Concordance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('statutory-hub', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Limitation Act Schedule
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('statutory-hub', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Court Fees &amp; Glossary
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleNavClick('bci-declaration', e)}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  BCI Rule 36 Declaration
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Physical Chambers */}
          <div className="space-y-3 text-xs">
            <span className="font-semibold text-slate-100 uppercase tracking-wider block">
              Physical Registry
            </span>
            <div className="space-y-2 text-slate-400">
              <p>Chamber 124, Setalvad Block, Supreme Court of India, New Delhi</p>
              <p>Statesman House, Barakhamba Road, Connaught Place, New Delhi</p>
              <p>Mittal Chambers, Nariman Point, Mumbai</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={(e) => handleNavClick('appointments', e)}
                className="text-[11px] font-semibold text-amber-400 hover:underline cursor-pointer"
              >
                Schedule Chamber Appointment →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} SLC Chambers.</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Static profile under Rule 36 Bar Council of India.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenDisclaimer}
              className="hover:text-amber-400 transition-colors underline cursor-pointer"
            >
              BCI Disclaimer Notice
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
