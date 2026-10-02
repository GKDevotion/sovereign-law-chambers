import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ShieldCheck, Calendar, Phone, MapPin } from 'lucide-react';
import { ChamberLogo } from './ChamberLogo';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenDisclaimer: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenDisclaimer,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('chambers');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['chambers', 'practice-areas', 'advocates', 'geo-locator', 'statutory-hub', 'faq', 'offices'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Chambers', href: '#chambers', id: 'chambers' },
    { label: 'Practice Areas', href: '#practice-areas', id: 'practice-areas' },
    { label: 'Advocates', href: '#advocates', id: 'advocates' },
    { label: 'Court Locations', href: '#geo-locator', id: 'geo-locator' },
    { label: 'Statutory Hub', href: '#statutory-hub', id: 'statutory-hub' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-2.5 sm:py-3'
          : 'bg-white/95 dark:bg-slate-950/95 border-b border-slate-100 dark:border-slate-800/50 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Pure Logo Base (No full name in header as requested) */}
          <a
            href="#chambers"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 shrink-0"
            aria-label="SLC Chambers Home"
          >
            <ChamberLogo variant="monogram" size={38} />
          </a>

          {/* Zone 2: Optimized Sleek Menu Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-xs text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-amber-900 dark:text-amber-300 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions + Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* BCI Rule 36 Button (Opens on click; no default popup) */}
            <button
              type="button"
              onClick={onOpenDisclaimer}
              title="Bar Council of India Rule 36 Compliance Notice"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-amber-900 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors whitespace-nowrap cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
              <span className="hidden sm:inline">BCI Rule 36</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Chamber Consultation Button */}
            <a
              href="#offices"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-700 dark:hover:bg-amber-600 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Chamber Booking</span>
            </a>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-xs font-medium rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-amber-50 dark:bg-slate-800/80 text-amber-900 dark:text-amber-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDisclaimer();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/70 rounded-lg"
            >
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>View BCI Rule 36 Disclaimer</span>
            </button>

            <a
              href="#offices"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-700 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Chamber Appointment</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
