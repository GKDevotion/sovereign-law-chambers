import React from 'react';
import { ArrowUpRight, BookOpen, Compass, ShieldCheck, FileText, Scale, Calendar, MapPin, Building2, CheckCircle2, Clock, Landmark, Layers } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';
import { LEGAL_IMAGES } from '../data/assetConstants';
import { JUDICIAL_CALENDAR_TERMS } from '../data/extendedLegalData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDisclaimer: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDisclaimer }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 animate-in fade-in duration-200">
      
      {/* Marquee Visual Hero Section with Generated Photographic Asset */}
      <section className="relative min-h-[540px] sm:min-h-[620px] flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        
        {/* Background Chamber Photography with High-Contrast Editorial Scrim */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={LEGAL_IMAGES.heroChambers}
            alt="Law Chambers Library with classical bookshelves and antique brass scales of justice"
            className="w-full h-full object-cover object-center transform scale-102 filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />
        </div>

        {/* Hero Content on Pristine Scrim */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full text-white space-y-6">
          
          {/* Regulatory Docket Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-300">
            <span className="bg-amber-950/80 border border-amber-500/50 px-2.5 py-0.5 rounded-full font-semibold">
              BAR COUNCIL OF INDIA RULE 36
            </span>
            <span aria-hidden="true" className="text-amber-400/50">·</span>
            <span className="text-slate-300 font-sans">STATIC CHAMBER PROFILE</span>
            <span aria-hidden="true" className="text-amber-400/50">·</span>
            <span className="text-slate-300 font-sans">ESTD. 1998</span>
          </div>

          {/* Marquee Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.12] max-w-4xl text-balance">
            Advocates, Solicitors &amp; Legal Consultants
          </h1>

          {/* Substantive Narrative */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
            Sovereign Law Chambers is a professional collective practicing before the Supreme Court of India, Delhi High Court, Bombay High Court, and specialized appellate tribunals.
          </p>

          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
            In compliance with Rule 36 of the Bar Council of India Rules, direct or indirect solicitation is strictly prohibited. This website is a static factual index of academic qualifications, bar enrolment numbers, approved practice areas, and court coordinates.
          </p>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('practice-areas')}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore Practice Areas</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('advocates')}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-900 border border-white/20 rounded-lg backdrop-blur-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Advocates Roll &amp; Credentials</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('geo-courts')}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-amber-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Court Coordinates</span>
            </button>
          </div>

          {/* Institutional Factual Trust Markers */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-200">
            <div>
              <div className="text-2xl font-bold font-serif tabular-nums text-white">1998</div>
              <div className="text-xs text-slate-400 mt-0.5">Founded in New Delhi</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-serif text-white">SCBA / DHCBA</div>
              <div className="text-xs text-slate-400 mt-0.5">Bar Association Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-serif text-white">AoR</div>
              <div className="text-xs text-slate-400 mt-0.5">Supreme Court of India</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-serif text-white">Rule 36</div>
              <div className="text-xs text-slate-400 mt-0.5">BCI Compliant Profile</div>
            </div>
          </div>

        </div>
      </section>

      {/* Narrative Section: Apex Court Architectural Presence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Court Architecture Image Asset */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
            <img
              src={LEGAL_IMAGES.supremeCourt}
              alt="Neoclassical Supreme Court monumental colonnade architecture"
              className="w-full h-80 sm:h-96 object-cover object-center hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-white text-xs space-y-1">
              <span className="font-mono text-amber-400 text-[11px] font-semibold uppercase">
                Apex Judicial Presence
              </span>
              <p className="font-serif font-bold text-sm text-slate-100">
                Supreme Court of India &amp; High Court Appellate Practice
              </p>
            </div>
          </div>

          {/* Right Column: Chambers Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                Chambers Profile &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight leading-tight">
                Grounded in Judicial Precedent &amp; Strict Professional Ethics
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Under the Advocates Act, 1961 and the statutory framework overseen by the Bar Council of India, legal practice is an honorable calling rather than a commercial enterprise.
            </p>

            <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-slate-100">Supreme Court Advocates-on-Record</strong>
                  <span>Authorized to institute, plead, and act in petitions before the Apex Court under Order IV of Supreme Court Rules, 2013.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-slate-100">National Appellate Tribunal Advocacy</strong>
                  <span>Regular appearances before the NCLAT, National Green Tribunal, Competition Commission, and CESTAT.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('bci-declaration')}
                className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Rule 36 Statutory Declaration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Four Foundational Pillars of Chamber Practice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Ethical Foundations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 dark:text-slate-100">
              Canons of Chamber Advocacy &amp; Jurisprudence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every proceeding undertaken by chamber counsel is guided by statutory duties codified in the Bar Council of India Rules and Indian Evidence Act.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                01
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                Officer of the Court
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Prioritizing truth and the administration of justice as an officer of the judicial court under Section 30 of the Advocates Act, 1961.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                02
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                Privilege &amp; Secrecy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Absolute confidentiality and professional privilege guaranteed under Section 126 and Section 129 of the Indian Evidence Act, 1872.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                03
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                Exacting Research
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Exhaustive statutory indexing, tracking Constitutional bench precedents, and analytical vetting before drafting petitions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                04
              </div>
              <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-slate-100">
                Ethical Non-Solicitation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strict preservation of Rule 36 norms: no commercial advertisements, outcome guarantees, or competitive touting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* NEW SECTION 2: Supreme Court & High Court Institution Stages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            Procedural Mechanics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 dark:text-slate-100">
            Procedural Lifecycle of an Appellate Filing
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Factual step-by-step roadmap for instituting Special Leave Petitions (SLPs) and Writ Petitions before the Supreme Court of India and High Court.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400">STAGE 01</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
              Record Review &amp; Chronology
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Examination of certified judgment, lower court pleadings, and formulating substantial questions of law.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400">STAGE 02</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
              AoR Drafting &amp; Caveat Check
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Drafting under Supreme Court Rules 2013, affidavit execution, caveat registry clearance, and service of advance copy.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400">STAGE 03</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
              Registry Scrutiny &amp; Defects
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Filing through e-Filing portal, curing registry defects within 28 days, and obtaining regular Diary / Case Number.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400">STAGE 04</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
              Listing &amp; Preliminary Hearing
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Appearance before Hon&apos;ble Division Bench on Miscellaneous day (Monday/Friday) for admission and interim relief.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400">STAGE 05</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
              Notice / Final Adjudication
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Issuance of notice to respondents, completion of counter &amp; rejoinder affidavits, and listing on Regular Hearing board.
            </p>
          </div>

        </div>

      </section>

      {/* Bento Grid: Multipage Directory Cards with Bespoke Graphics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            Chambers Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 dark:text-slate-100">
            Comprehensive Chamber Index
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Select a dedicated section to examine verified qualifications, court jurisdiction maps, statutory concordances, and chamber registries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Practice Areas with Jurisprudence Image */}
          <div
            onClick={() => onNavigate('practice-areas')}
            className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400/80 dark:hover:border-amber-500/60 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="h-44 overflow-hidden relative">
                <img
                  src={LEGAL_IMAGES.jurisprudence}
                  alt="Constitutional and legal jurisprudence documents"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono font-semibold text-amber-300">
                  8 APPROVED FIELDS
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  Approved Practice Areas
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Constitutional law, corporate insolvency (IBC), commercial arbitration, criminal defense &amp; BNSS, tax appeals, and environmental litigation.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold text-amber-800 dark:text-amber-400">
              <span>View Practice Scopes</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: Advocates Roll with Advocate Chamber Image */}
          <div
            onClick={() => onNavigate('advocates')}
            className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400/80 dark:hover:border-amber-500/60 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="h-44 overflow-hidden relative">
                <img
                  src={LEGAL_IMAGES.advocateChamber}
                  alt="Senior advocate chamber conference room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono font-semibold text-amber-300">
                  ENROLLED PARTICULARS
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  Advocates &amp; Chamber Partners
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Academic qualifications from Cambridge, Oxford, NLSIU Bangalore, and Delhi University, paired with verified Bar Council enrolment numbers.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold text-amber-800 dark:text-amber-400">
              <span>View Advocates Roll</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: GEO Proximity & Courts */}
          <div
            onClick={() => onNavigate('geo-courts')}
            className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400/80 dark:hover:border-amber-500/60 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-5 flex flex-col justify-between text-white relative">
                <div className="flex items-center justify-between">
                  <Compass className="w-6 h-6 text-amber-400" />
                  <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-slate-200">
                    GPS COORDINATES
                  </span>
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-300 font-semibold">
                    28° 37' 07" N, 77° 14' 25" E
                  </div>
                  <div className="text-sm font-serif font-bold text-white">
                    Supreme Court Chambers Block
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  Court Proximity &amp; GEO Coordinates
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Interactive radius matrix measuring distance to Supreme Court filing counters, Delhi High Court, and Bombay High Court registries.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold text-amber-800 dark:text-amber-400">
              <span>Explore Locations</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>

      </section>

      {/* NEW SECTION 3: Judicial Calendar & Court Sittings Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                Judicial Sitting Calendar
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 dark:text-slate-100">
                Supreme Court &amp; High Court Sessional Terms
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Court Timings: 10:30 AM – 4:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {JUDICIAL_CALENDAR_TERMS.map((term, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="font-serif font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {term.termName}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block">Sittings:</span>
                  {term.sittings}
                </div>
                <div className="text-slate-500 text-[11px] pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                  {term.registryHours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Chamber Contact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/80 dark:bg-slate-900 border border-amber-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Chamber Registry &amp; Appointments
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
              Arrange a Formal Chamber Conference
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
              Chamber meetings with Senior Advocates &amp; Advocates-on-Record are held by prior confirmation. Submit basic proceeding details through the registry desk.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('appointments')}
            className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Open Appointment Registry</span>
          </button>
        </div>
      </section>

    </div>
  );
};
