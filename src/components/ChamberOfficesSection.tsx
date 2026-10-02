import React, { useState } from 'react';
import { CHAMBER_LOCATIONS, FIRM_DETAILS } from '../data/lawFirmData';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, AlertTriangle, Send, Building2 } from 'lucide-react';

export const ChamberOfficesSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredChamber: 'sc-chamber',
    inquiryArea: 'Constitutional Law & Writs',
    details: '',
    acknowledgedNoRetainer: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (!formData.acknowledgedNoRetainer) {
      setErrorMessage('You must acknowledge the non-retainer notice to proceed.');
      return;
    }

    // Static simulation compliant with scope
    const randomRef = `SLC-APP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceNumber(randomRef);
    setFormSubmitted(true);
    setErrorMessage('');
  };

  return (
    <section id="offices" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <span>Chamber Registry &amp; Locations</span>
            <span aria-hidden="true">·</span>
            <span>By Prior Appointment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-950 dark:text-slate-100 tracking-tight">
            Chamber Offices &amp; Registry
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Chamber conferences and judicial meetings are conducted strictly by prior appointment during specified chamber hours.
          </p>
        </div>

        {/* 2-Column Layout: Chamber Addresses & Interactive Appointment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Physical Chamber Addresses */}
          <div className="lg:col-span-5 space-y-6">
            {CHAMBER_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-serif font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>{loc.chamberName}</span>
                  </h3>
                  <span className="text-[11px] font-medium text-slate-400">
                    {loc.city}
                  </span>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <p>{loc.addressLine1}</p>
                  <p>{loc.addressLine2}, {loc.city} - {loc.postalCode}</p>
                  {loc.courtRegistryDistance && (
                    <p className="text-[11px] text-amber-800 dark:text-amber-400 font-medium pt-1">
                      {loc.courtRegistryDistance}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a href={`tel:${loc.phone}`} className="hover:text-amber-800 dark:hover:text-amber-300">
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="hover:text-amber-800 dark:hover:text-amber-300">
                      {loc.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{loc.visitingHours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Chamber Appointment Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md">
              
              <div className="mb-6 space-y-1 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Chamber Calendar
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-slate-100">
                  Appointment &amp; Conference Request
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Submit factual details to request a scheduled chamber conference with an advocate.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-slate-100">
                      Appointment Request Registered
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Your enquiry has been assigned reference number{' '}
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                        {referenceNumber}
                      </span>
                      . The chamber registry clerk will verify schedule availability and communicate via email/telephone.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-lg text-xs text-amber-900 dark:text-amber-300 max-w-md mx-auto text-left">
                    <div className="font-semibold flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Reminder regarding formal engagement:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      Submission of this appointment request does not constitute legal retention or filing of appearance before any court until formal Vakalatnama / engagement agreement is executed.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        preferredChamber: 'sc-chamber',
                        inquiryArea: 'Constitutional Law & Writs',
                        details: '',
                        acknowledgedNoRetainer: false,
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Advocate / Litigant Name"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                        Official Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="counsel@example.com"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                        Telephone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                        Preferred Chamber Venue
                      </label>
                      <select
                        value={formData.preferredChamber}
                        onChange={(e) => setFormData({ ...formData, preferredChamber: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
                      >
                        <option value="sc-chamber">Supreme Court Chamber (Tilak Marg, New Delhi)</option>
                        <option value="principal-office">Central Chambers (Connaught Place, New Delhi)</option>
                        <option value="mumbai-chamber">Regional Chambers (Nariman Point, Mumbai)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                      Substantive Area of Practice
                    </label>
                    <select
                      value={formData.inquiryArea}
                      onChange={(e) => setFormData({ ...formData, inquiryArea: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100"
                    >
                      <option value="Constitutional Law & Writs">Constitutional Law &amp; Writs (Art. 32 / 226 / 136)</option>
                      <option value="Corporate Insolvency (IBC)">Corporate Insolvency &amp; Restructuring (IBC / NCLAT)</option>
                      <option value="Commercial Arbitration">Commercial Arbitration &amp; Mediation</option>
                      <option value="Criminal Defense & Appellate">Criminal Defense &amp; Special Leave (BNSS / PMLA)</option>
                      <option value="Civil & Property">Civil Litigation &amp; Commercial Suits</option>
                      <option value="Intellectual Property">Intellectual Property &amp; Technology</option>
                      <option value="Taxation & Customs">Direct &amp; Indirect Taxation (ITAT / High Court)</option>
                      <option value="Environmental Law">Environmental Regulatory Matters (NGT)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                      Brief Factual Summary of Enquiry
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Please mention court/tribunal forum and nature of proceedings without confidential case files..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100 resize-none"
                    />
                  </div>

                  {/* Mandatory Non-Retainer Checkbox */}
                  <div className="pt-2 p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acknowledgedNoRetainer}
                        onChange={(e) => setFormData({ ...formData, acknowledgedNoRetainer: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-amber-700 dark:text-amber-500 focus:ring-amber-500 cursor-pointer"
                      />
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        <strong>Mandatory Acknowledgment:</strong> I confirm that requesting an appointment does not establish an advocate-client relationship and no confidential papers should be shared until formal engagement is finalized.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Chamber Appointment Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
