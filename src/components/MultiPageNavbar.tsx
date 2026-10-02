import React, { useState } from 'react';
import { Moon, Sun, Menu, X, ShieldCheck, Calendar } from 'lucide-react';
import { ChamberLogo } from './ChamberLogo';

export type PageId =
  | 'home'
  | 'practice-areas'
  | 'advocates'
  | 'geo-courts'
  | 'statutory-hub'
  | 'appointments'
  | 'bci-declaration';

interface MultiPageNavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenDisclaimer: () => void;
}

export const MultiPageNavbar: React.FC<MultiPageNavbarProps> = ({
  currentPage,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  onOpenDisclaimer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'advocates', label: 'Advocates Roll' },
    { id: 'geo-courts', label: 'Courts & GEO' },
    { id: 'statutory-hub', label: 'Statutory Hub' },
    { id: 'appointments', label: 'Chambers' },
  ];

  const handlePageClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 transition-colors shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Pure Logo Base */}
          <button
            type="button"
            onClick={() => handlePageClick('home')}
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 shrink-0 cursor-pointer"
            aria-label="SLC Chambers Home"
          >
            <ChamberLogo variant="monogram" size={38} />
          </button>

          {/* Zone 2: Multi-Page Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-xs font-medium">
            {pages.map((p) => {
              const isActive = currentPage === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handlePageClick(p.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-amber-900 dark:text-amber-300 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: BCI Notice, Theme Toggle & Appointments Action */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* BCI Notice Button */}
            <button
              type="button"
              onClick={onOpenDisclaimer}
              title="Bar Council of India Rule 36 Declaration"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-amber-900 dark:text-amber-300 bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors whitespace-nowrap cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
              <span className="hidden sm:inline">BCI Rule 36</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Chamber Consultation Button */}
            <button
              type="button"
              onClick={() => handlePageClick('appointments')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-700 dark:hover:bg-amber-600 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Appointments</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {pages.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handlePageClick(p.id)}
                className={`w-full text-left px-3 py-2.5 text-xs font-medium rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === p.id
                    ? 'bg-amber-50 dark:bg-slate-800/80 text-amber-900 dark:text-amber-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <span>{p.label}</span>
                {currentPage === p.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDisclaimer();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/70 rounded-lg cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>View BCI Rule 36 Disclaimer</span>
            </button>

            <button
              type="button"
              onClick={() => handlePageClick('appointments')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-700 rounded-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Chamber Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
