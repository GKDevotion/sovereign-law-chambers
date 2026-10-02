import React from 'react';
import { ArrowLeft, ShieldCheck, Scale, FileText, CheckCircle2, AlertTriangle, BookOpen, Landmark, Clock } from 'lucide-react';
import { PageId } from '../components/MultiPageNavbar';
import { LANDMARK_ETHICAL_RULINGS } from '../data/extendedLegalData';

interface BciRuleDeclarationPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDisclaimerModal: () => void;
}

export const BciRuleDeclarationPage: React.FC<BciRuleDeclarationPageProps> = ({
  onNavigate,
  onOpenDisclaimerModal,
}) => {
  const evolutionMilestones = [
    {
      year: '1961',
      title: 'Enactment of the Advocates Act',
      description: 'Parliament unified the Indian Bar and constituted the Bar Council of India, vesting it with disciplinary and regulatory authority under Section 49.',
    },
    {
      year: '1975',
      title: 'Codification of Rule 36',
      description: 'Strict prohibition enacted banning direct or indirect advertising, touting, and solicitation to protect the dignity of the profession.',
    },
    {
      year: '2008',
      title: 'The Proviso Amendment',
      description: 'Following representations in V.B. Joshi and Bar Council resolutions, a proviso was added permitting static profiles with basic factual information.',
    },
    {
      year: 'Present',
      title: 'Digital & Social Media Directives',
      description: 'Strict advisories reiterating prohibitions against promotional court reels, courtroom recording, and misleading claims of guaranteed outcome.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
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
            <span>Statutory Declaration</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Bar Council of India Rule 36 Declaration
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl">
            Statutory disclosure regarding the ethical constraints, permissible factual content, and strict prohibitions governing legal practitioner websites under Indian law.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Statutory Rule Text Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/80 dark:bg-slate-900 border border-amber-200 dark:border-amber-900/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 dark:text-amber-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Rule 36, Chapter II, Part VI · Bar Council of India Rules</span>
          </div>

          <blockquote className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-serif italic border-l-3 border-amber-600 pl-4 py-1 leading-relaxed">
            &quot;An advocate shall not solicit work or advertise, either directly or indirectly, whether by circulars, advertisements, touts, personal communications, interviews not warranted by personal relations, furnishing or inspiring newspaper comments or producing his photograph to be published in connection with cases in which he has been engaged or concerned.&quot;
          </blockquote>

          <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
            <p>
              By a resolution passed in 2008, the Bar Council of India amended Rule 36 to add a proviso permitting advocates to maintain websites as static information repositories under strict guidelines.
            </p>
          </div>
        </div>

        {/* Permissible vs Strictly Prohibited Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Permissible Content */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-950/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Permissible Factual Information</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Name, address, contact telephone, and email addresses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Academic qualifications and recognized law degrees (LL.B., LL.M., B.C.L.).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Enrolment particulars (State Bar Council and Year of Enrolment).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Approved, substantive areas of legal practice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Names of courts and appellate tribunals where the advocate regularly practices.</span>
              </li>
            </ul>
          </div>

          {/* Strictly Prohibited Content */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-950/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-red-800 dark:text-red-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Strictly Prohibited Under Law</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Publishing client names, client logos, or corporate roster lists.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Case success rates, percentages of victories, or acquittal statistics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Monetary amounts of compensation, recovery sums, or damages claimed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Client testimonials, public endorsements, or star rating widgets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Promotional court video reels or clickbait lines such as &quot;guaranteed bail&quot;.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* NEW SECTION 1: Landmark Judicial Precedents on Legal Ethics */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Judicial Authorities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <span>Landmark Judgments Defining Legal Advertising in India</span>
            </h3>
          </div>

          <div className="space-y-4">
            {LANDMARK_ETHICAL_RULINGS.map((ruling, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="font-serif font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {ruling.caseTitle}
                  </span>
                  <span className="font-mono text-amber-800 dark:text-amber-400 font-semibold">
                    {ruling.citation} ({ruling.year})
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {ruling.court}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {ruling.principleEstablished}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW SECTION 2: Timeline of Legal Evolution */}
        <section className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Historical Context
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <span>Evolution of Indian Legal Practice Regulations</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {evolutionMilestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
                <span className="font-mono font-bold text-amber-800 dark:text-amber-400 text-sm">
                  {m.year}
                </span>
                <h4 className="font-serif font-bold text-slate-900 dark:text-slate-100 text-xs">
                  {m.title}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Voluntary Access Declaration */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100">
            Voluntary Access &amp; Non-Retainer Commitment
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            By browsing this website, the user confirms that they have accessed the material voluntarily for factual research and that no advocate-client or attorney-client relationship is created. No legal advice is rendered through this platform.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenDisclaimerModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors cursor-pointer"
            >
              Open Interactive Disclaimer Modal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
