import React from 'react';
import { JudicialGeoSection } from '../components/JudicialGeoSection';
import { JudicialForumsSection } from '../components/JudicialForumsSection';
import { LEGAL_IMAGES } from '../data/assetConstants';
import { ArrowLeft, Compass, MapPin, ShieldCheck, Train, Clock, AlertTriangle, KeyRound } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';

interface CourtsGeoPageProps {
  onNavigate: (page: PageId) => void;
}

export const CourtsGeoPage: React.FC<CourtsGeoPageProps> = ({ onNavigate }) => {
  const transitRoutes = [
    {
      court: 'Supreme Court of India (Tilak Marg)',
      nearestMetro: 'Supreme Court Metro Station (Blue Line)',
      walkingTime: '350 meters (4 min walk to Gate No. 2)',
      alternateStation: 'Mandi House Metro Station (Blue / Violet Interchange - 800m)',
      visitorPassCounter: 'Pass Section near Gate No. 1 & 2 (Valid Government Photo ID required)',
    },
    {
      court: 'High Court of Delhi (Sher Shah Road)',
      nearestMetro: 'Khan Market Metro Station (Violet Line)',
      walkingTime: '1.2 km (auto/cab 3 mins to Gate No. 7)',
      alternateStation: 'Pragati Maidan / Supreme Court Metro Station (1.8 km)',
      visitorPassCounter: 'Pass Section at Gate No. 7 (Litigant slips verified against cause list)',
    },
    {
      court: 'NCLAT (CGO Complex, Lodhi Road)',
      nearestMetro: 'JLN Stadium Metro Station (Violet Line)',
      walkingTime: '600 meters (7 min walk to Pt. Deendayal Antyodaya Bhawan)',
      alternateStation: 'Jangpura Metro Station (800m)',
      visitorPassCounter: 'Reception Wing B-4, 3rd Floor CGO Complex',
    },
    {
      court: 'High Court of Judicature at Bombay (Fort)',
      nearestMetro: 'Churchgate Railway Station (Western Railway)',
      walkingTime: '900 meters (10 min walk via Flora Fountain)',
      alternateStation: 'CSMT Railway Station (Central Line - 1.4 km)',
      visitorPassCounter: 'Pass Section at Central Courtyard Entrance',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 animate-in fade-in duration-200">
      
      {/* Editorial Header Banner with Supreme Court Architecture Visual */}
      <div className="relative h-64 sm:h-80 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <img
          src={LEGAL_IMAGES.supremeCourt}
          alt="Supreme Court monumental architecture"
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
            <span>Judicial GEO Coordinates</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Courts of Appearance &amp; Chamber Proximity
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
            Exact GPS coordinates, walking times to court registries, and jurisdictional details for Supreme Court of India, Delhi High Court, and Bombay High Court.
          </p>
        </div>
      </div>

      {/* GEO Proximity Locator */}
      <JudicialGeoSection />

      {/* Judicial Forums Catalog */}
      <JudicialForumsSection />

      {/* NEW SECTION: Court Transit, Security Passes & Registry Protocols */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Judicial Transit &amp; Security Protocol
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100">
              Access Guide for Litigants &amp; Instructing Counsel
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Practical navigation instructions regarding metro stations, security check gates, and registry pass issuance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transitRoutes.map((route, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{route.court}</span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Nearest Metro: </span>
                      {route.nearestMetro} ({route.walkingTime})
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 pl-5.5">
                    <span className="font-semibold">Alternate Transit: </span>
                    {route.alternateStation}
                  </div>

                  <div className="flex items-start gap-2 pt-1 border-t border-slate-200/70 dark:border-slate-800/70">
                    <KeyRound className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-[11px] leading-relaxed">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Security Gate: </span>
                      {route.visitorPassCounter}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              <strong>Security Directives:</strong> Supreme Court High Security Zone prohibits carriage of recording equipment, cameras, and luggage inside courtroom corridors. Litigants must carry physical or verified digital Aadhaar / Voter ID for pass issuance at designated pass counters.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
