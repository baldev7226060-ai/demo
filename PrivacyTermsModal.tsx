import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <h3 className="text-xl font-bold text-[#0b2c63]">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Text */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed pr-2">
          {isPrivacy ? (
            <>
              <p>
                <strong>Last Updated: January 2026</strong>
              </p>
              <p>
                At <strong>ProBrush Premium Painting</strong>, we respect and safeguard the privacy of every client, visitor, and property owner who contacts us or submits estimate inquiries.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Information Collection</h4>
              <p>
                When you request a quote or schedule a consultation, we collect basic project and contact details: full name, telephone number, email address, physical property address, project specifications, and any uploaded project photography.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Use of Information</h4>
              <p>
                Collected data is used solely to generate comprehensive written estimates, communicate project scheduling, coordinate crew arrival times, and provide requested painting and surface-cleaning services. We do not sell, license, or distribute your personal details to third-party telemarketers.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Photo Security</h4>
              <p>
                Photos uploaded for estimating purposes are stored securely and reviewed exclusively by authorized estimators for scope evaluation and coating requirements.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: January 2026</strong>
              </p>
              <p>
                Welcome to <strong>ProBrush Premium Painting</strong>. By using this website, requesting quotes, or engaging our residential and commercial painting and cleaning services, you agree to these terms:
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Written Estimates & Scope</h4>
              <p>
                All project proposals, labor, materials, and payment schedules are governed by our written scope of work provided prior to job commencement. Preliminary online estimates are based on customer descriptions and subject to in-person surface verification.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Workmanship & Standards</h4>
              <p>
                ProBrush executes work in a professional, clean, and workmanlike manner using premium architectural paints. Surface preparation is performed according to industry standards for optimal adhesion and finish longevity.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Insurance & Protection</h4>
              <p>
                ProBrush maintains valid general liability insurance and workers' compensation coverage to protect homeowners and commercial clients throughout project execution.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0b2c63] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#082046]"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
