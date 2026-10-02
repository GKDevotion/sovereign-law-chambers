/**
 * Sovereign Law Chambers - Static Professional Profile
 * Fully compliant with Bar Council of India (BCI) Rule 36
 * Dedicated Multi-Page Architecture with AEO, SEO & GEO Optimization
 */

import React, { useState, useEffect } from 'react';
import { MultiPageNavbar, PageId } from './components/MultiPageNavbar';
import { HomePage } from './pages/HomePage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { AdvocatesPage } from './pages/AdvocatesPage';
import { CourtsGeoPage } from './pages/CourtsGeoPage';
import { StatutoryHubPage } from './pages/StatutoryHubPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { BciRuleDeclarationPage } from './pages/BciRuleDeclarationPage';
import { Footer } from './components/Footer';
import { DisclaimerModal } from './components/DisclaimerModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('slc_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Dedicated Multi-page routing state
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // BCI Rule 36 Modal state (no default popup)
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);
  const [isDeclinedState, setIsDeclinedState] = useState<boolean>(false);

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('slc_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('slc_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenDisclaimer = () => {
    setIsDeclinedState(false);
    setIsDisclaimerOpen(true);
  };

  const handleAcceptDisclaimer = () => {
    setIsDisclaimerOpen(false);
    setIsDeclinedState(false);
  };

  const handleDeclineDisclaimer = () => {
    setIsDeclinedState(true);
  };

  const handleReconsider = () => {
    setIsDeclinedState(false);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors font-sans selection:bg-amber-700/20 selection:text-amber-900 dark:selection:text-amber-200 flex flex-col justify-between">
      
      {/* On-demand Bar Council of India Disclaimer Modal (Does NOT popup by default) */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onAccept={handleAcceptDisclaimer}
        onDecline={handleDeclineDisclaimer}
        isDeclinedState={isDeclinedState}
        onReconsider={handleReconsider}
        allowCloseWithoutConsent={true}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Persistent Glassmorphic Multi-Page Navbar */}
      <MultiPageNavbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenDisclaimer={handleOpenDisclaimer}
      />

      {/* Dedicated Multi-Page View Render */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDisclaimer={handleOpenDisclaimer}
          />
        )}
        {currentPage === 'practice-areas' && (
          <PracticeAreasPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'advocates' && (
          <AdvocatesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'geo-courts' && (
          <CourtsGeoPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'statutory-hub' && (
          <StatutoryHubPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'appointments' && (
          <AppointmentsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'bci-declaration' && (
          <BciRuleDeclarationPage
            onNavigate={handleNavigate}
            onOpenDisclaimerModal={handleOpenDisclaimer}
          />
        )}
      </main>

      {/* Logo-Based Quiet BCI Compliant Footer */}
      <Footer onOpenDisclaimer={handleOpenDisclaimer} onNavigate={handleNavigate} />

    </div>
  );
}
