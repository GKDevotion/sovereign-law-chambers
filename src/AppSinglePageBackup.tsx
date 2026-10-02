/**
 * BACKUP of Single-Page Variation of Sovereign Law Chambers
 * Saved before building the multi-page graphical variation.
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PracticeAreas } from './components/PracticeAreas';
import { AdvocatesSection } from './components/AdvocatesSection';
import { JudicialGeoSection } from './components/JudicialGeoSection';
import { StatutoryKnowledgeSection } from './components/StatutoryKnowledgeSection';
import { AeoFaqSection } from './components/AeoFaqSection';
import { ChamberOfficesSection } from './components/ChamberOfficesSection';
import { Footer } from './components/Footer';
import { DisclaimerModal } from './components/DisclaimerModal';

export default function AppSinglePageBackup() {
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

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);
  const [isDeclinedState, setIsDeclinedState] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors font-sans selection:bg-amber-700/20 selection:text-amber-900 dark:selection:text-amber-200">
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onAccept={handleAcceptDisclaimer}
        onDecline={handleDeclineDisclaimer}
        isDeclinedState={isDeclinedState}
        onReconsider={handleReconsider}
        allowCloseWithoutConsent={true}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenDisclaimer={handleOpenDisclaimer}
        onOpenContact={() => {
          const el = document.getElementById('offices');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main id="main-content">
        <HeroSection onOpenDisclaimer={handleOpenDisclaimer} />
        <PracticeAreas />
        <AdvocatesSection />
        <JudicialGeoSection />
        <StatutoryKnowledgeSection />
        <AeoFaqSection />
        <ChamberOfficesSection />
      </main>

      <Footer onOpenDisclaimer={handleOpenDisclaimer} />
    </div>
  );
}
