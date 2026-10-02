import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, Scale, AlertTriangle, FileText } from 'lucide-react';
import { LegalCrest } from './LegalCrest';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  isDeclinedState: boolean;
  onReconsider: () => void;
  allowCloseWithoutConsent?: boolean;
  onClose?: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onAccept,
  onDecline,
  isDeclinedState,
  onReconsider,
  allowCloseWithoutConsent = false,
  onClose,
}) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header bar with gold legal accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 dark:from-amber-600 dark:via-amber-400 dark:to-amber-600" />

        {isDeclinedState ? (
          /* Declined Access Screen */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 flex items-center justify-center text-red-600 dark:text-red-400">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
                Access Restricted under BCI Regulations
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                Under Rule 36 of the Bar Council of India Rules, legal practitioners in India are strictly prohibited from soliciting work or advertising. Information about our chambers, advocates, and areas of practice may only be furnished to users who voluntarily seek it.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 text-left space-y-2">
              <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Statutory Compliance Notice:</span>
              </div>
              <p>
                Since you have declined the voluntary inquiry acknowledgement, we cannot display our chamber profiles, enrolment details, or practice information to you.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onReconsider}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Review Disclaimer & Reconsider
              </button>
              <a
                href="https://www.google.com"
                className="w-full sm:w-auto px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Exit Website
              </a>
            </div>
          </div>
        ) : (
          /* Standard Un-skippable Disclaimer */
          <div className="p-6 sm:p-8 space-y-5">
            {/* Header Lockup */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200/60 dark:border-slate-700">
                <LegalCrest size={36} />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-800 dark:text-amber-400">
                  Mandatory Statutory Notice · Rule 36 BCI
                </span>
                <h2 id="disclaimer-title" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 tracking-tight">
                  Bar Council of India Disclaimer
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sovereign Law Chambers · Advocates & Legal Consultants
                </p>
              </div>
            </div>

            {/* Scrollable Legal Disclaimer Text */}
            <div
              onScroll={(e) => {
                const target = e.currentTarget;
                if (target.scrollHeight - target.scrollTop <= target.clientHeight + 20) {
                  setHasScrolledToBottom(true);
                }
              }}
              className="max-h-64 sm:max-h-72 overflow-y-auto pr-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed"
            >
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Please read this mandatory declaration carefully before proceeding to view our static chamber profile.
              </p>

              <p>
                As per the rules of the <strong>Bar Council of India (BCI)</strong>, in particular{' '}
                <strong>Rule 36 of Section IV, Chapter II, Part VI</strong> of the Bar Council of India Rules, legal professionals and law firms in India are strictly prohibited from soliciting work or advertising, either directly or indirectly.
              </p>

              <div className="p-3 bg-white dark:bg-slate-900 border border-amber-200/70 dark:border-amber-900/40 rounded-lg space-y-2">
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  By clicking &quot;Accept &amp; Proceed&quot; below, the user explicitly confirms and acknowledges the following:
                </p>
                <ol className="list-decimal pl-4 space-y-1.5 text-slate-600 dark:text-slate-400">
                  <li>
                    The user is visiting this website voluntarily to obtain factual information about Sovereign Law Chambers, its advocates, academic qualifications, and approved areas of practice for their own informational and personal knowledge.
                  </li>
                  <li>
                    There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever by or on behalf of Sovereign Law Chambers or any of its advocates to solicit any work through this website.
                  </li>
                  <li>
                    The information provided on this website is made available solely at the user&apos;s request. Any information obtained or materials downloaded from this website does not lead to the creation of an advocate-client or attorney-client relationship.
                  </li>
                  <li>
                    The contents of this website do not constitute, and should not be construed as, legal advice, legal opinion, or solicitation of professional engagement.
                  </li>
                  <li>
                    Sovereign Law Chambers, its partners, and associate advocates shall not be liable for any consequence of any action taken by the user relying on material or information provided on this website.
                  </li>
                  <li>
                    In matters where legal assistance is required, the user should independently seek advice from competent legal counsel.
                  </li>
                </ol>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                In compliance with BCI guidelines, this website strictly omits client names, client corporate emblems, case success percentages, monetary compensation figures, client reviews, or testimonials.
              </p>
            </div>

            {/* Explicit Confirmation Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-3 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-amber-700 dark:text-amber-500 focus:ring-amber-500 cursor-pointer"
                />
                <span className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                  I confirm that I am visiting this website voluntarily and agree that no lawyer-client relationship is formed by accessing this informational profile.
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={onDecline}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <XCircle className="w-4 h-4 text-slate-400" />
                Decline &amp; Exit Website
              </button>

              <button
                type="button"
                disabled={!agreedToTerms}
                onClick={onAccept}
                className={`w-full sm:w-auto px-6 py-2.5 font-medium text-xs rounded-lg transition-all flex items-center justify-center gap-2 ${
                  agreedToTerms
                    ? 'bg-amber-800 hover:bg-amber-900 dark:bg-amber-600 dark:hover:bg-amber-500 text-white shadow-sm cursor-pointer'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Accept &amp; Proceed to Chambers
              </button>
            </div>

            {allowCloseWithoutConsent && onClose && (
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline"
                >
                  Close this window (Previous acknowledgment on file)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
