import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Building, ExternalLink, ShieldCheck, Clock, Phone } from 'lucide-react';

interface GeoLocationData {
  id: string;
  name: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
    formatted: string;
  };
  address: string;
  postalCode: string;
  judicialProximity: {
    target: string;
    distance: string;
    travelTime: string;
  }[];
  benchHours: string;
  securityGateNotice: string;
  googleMapsUrl: string;
}

const GEO_LOCATIONS: GeoLocationData[] = [
  {
    id: 'delhi-supreme-court',
    name: 'Supreme Court Chamber & Registry',
    city: 'New Delhi (NCR)',
    coordinates: {
      lat: 28.6186,
      lng: 77.2404,
      formatted: '28° 37\' 07" N, 77° 14\' 25" E',
    },
    address: 'Chamber 124, M.C. Setalvad Block, Supreme Court of India, Tilak Marg',
    postalCode: '110001',
    judicialProximity: [
      { target: 'Supreme Court Courtrooms 1 - 17', distance: '120 meters', travelTime: '2 min walk' },
      { target: 'Supreme Court Filing Counter & Registry', distance: '80 meters', travelTime: '1 min walk' },
      { target: 'High Court of Delhi (Sher Shah Road)', distance: '1.8 km', travelTime: '5 min drive' },
      { target: 'National Green Tribunal (Faridkot House)', distance: '1.2 km', travelTime: '4 min drive' },
    ],
    benchHours: '4:00 PM – 7:00 PM (Monday to Friday, by prior appointment)',
    securityGateNotice: 'Entry via Gate No. 2 (Advocates/Litigants with Supreme Court Pass)',
    googleMapsUrl: 'https://maps.google.com/?q=28.6186,77.2404',
  },
  {
    id: 'delhi-central',
    name: 'Central Chambers (Connaught Place)',
    city: 'New Delhi (Central)',
    coordinates: {
      lat: 28.6297,
      lng: 77.2289,
      formatted: '28° 37\' 47" N, 77° 13\' 44" E',
    },
    address: 'Suite 402, 4th Floor, Statesman House, Barakhamba Road, Connaught Place',
    postalCode: '110001',
    judicialProximity: [
      { target: 'Supreme Court of India', distance: '1.4 km', travelTime: '4 min drive' },
      { target: 'Delhi High Court', distance: '2.5 km', travelTime: '7 min drive' },
      { target: 'Patiala House District Courts', distance: '1.9 km', travelTime: '6 min drive' },
      { target: 'NCLAT (CGO Complex, Lodhi Road)', distance: '4.8 km', travelTime: '12 min drive' },
    ],
    benchHours: '10:00 AM – 7:00 PM (Monday to Saturday)',
    securityGateNotice: 'Visitor parking available in basement; entry via Statesman House Reception',
    googleMapsUrl: 'https://maps.google.com/?q=28.6297,77.2289',
  },
  {
    id: 'mumbai-nariman',
    name: 'Mumbai Regional Chambers',
    city: 'Mumbai (South)',
    coordinates: {
      lat: 18.9282,
      lng: 72.8258,
      formatted: '18° 55\' 41" N, 72° 49\' 33" E',
    },
    address: 'Office 71, 7th Floor, Mittal Chambers, Barrister Rajni Patel Marg, Nariman Point',
    postalCode: '400021',
    judicialProximity: [
      { target: 'High Court of Judicature at Bombay (Fort)', distance: '2.1 km', travelTime: '7 min drive' },
      { target: 'NCLT Mumbai Bench (Old CGO Building)', distance: '2.4 km', travelTime: '8 min drive' },
      { target: 'City Civil & Sessions Court (Kala Ghoda)', distance: '1.9 km', travelTime: '6 min drive' },
      { target: 'Securities Appellate Tribunal (SAT)', distance: '2.2 km', travelTime: '7 min drive' },
    ],
    benchHours: '10:00 AM – 6:30 PM (Monday to Friday)',
    securityGateNotice: 'Direct elevator access from Nariman Point Mittal Chambers lobby',
    googleMapsUrl: 'https://maps.google.com/?q=18.9282,72.8258',
  },
];

export const JudicialGeoSection: React.FC = () => {
  const [selectedGeo, setSelectedGeo] = useState<GeoLocationData>(GEO_LOCATIONS[0]);

  return (
    <section id="geo-locator" className="py-16 sm:py-20 bg-slate-50/80 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with GEO trust indicator */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <Compass className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>GEO Judicial Locator</span>
            <span aria-hidden="true">·</span>
            <span>Court Proximity Index</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Chamber Coordinates &amp; Judicial Distance
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Strategically located physical chambers situated within immediate walking and vehicular distance of the Supreme Court of India, Delhi High Court, and Bombay High Court registries.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {GEO_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelectedGeo(loc)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                selectedGeo.id === loc.id
                  ? 'bg-slate-900 text-white dark:bg-amber-600 dark:text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{loc.name}</span>
              <span className="text-[10px] opacity-75 font-normal">({loc.city})</span>
            </button>
          ))}
        </div>

        {/* Detailed GEO Location Showcase Card (Editorial Legal Graphic) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Coordinates & Address */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-amber-800 dark:text-amber-400">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GPS: {selectedGeo.coordinates.formatted}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
                  {selectedGeo.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {selectedGeo.city} · Postal Code {selectedGeo.postalCode}
                </p>
              </div>

              {/* Address Block */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Physical Registry Address:
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {selectedGeo.address}
                </p>
              </div>

              {/* Bench Timings & Security Protocol */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-800 dark:text-slate-200">
                      Chamber Conference Hours:
                    </span>
                    <span>{selectedGeo.benchHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-800 dark:text-slate-200">
                      Security &amp; Registry Access:
                    </span>
                    <span>{selectedGeo.securityGateNotice}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Direction Link */}
              <div className="pt-2">
                <a
                  href={selectedGeo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Coordinates in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right Col: Judicial Proximity & Radius Matrix */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Proximity to Principal Judicial Benches &amp; Registries
                </h4>
              </div>

              <div className="space-y-3">
                {selectedGeo.judicialProximity.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        {item.target}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Registry Sector
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono font-semibold text-amber-800 dark:text-amber-400">
                        {item.distance}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {item.travelTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Graphic Stamp / Seal of Verification */}
              <div className="p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 text-[11px] text-amber-950 dark:text-amber-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  All chamber locations registered with Bar Council of Delhi and Supreme Court Bar Association Registry.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
