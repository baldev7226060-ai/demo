import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="max-w-md mx-auto flex items-center gap-3">
        {/* Clickable Phone Number */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl border-2 border-[#0b2c63] text-[#0b2c63] font-bold text-xs flex items-center justify-center gap-1.5 active:bg-blue-50 transition-colors uppercase tracking-wider"
          aria-label={`Call ProBrush at ${COMPANY_INFO.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-red-600 fill-red-600" />
          <span>CALL NOW</span>
        </a>

        {/* Sticky GET A FREE QUOTE Button */}
        <button
          onClick={onOpenQuote}
          className="flex-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all uppercase tracking-wider cursor-pointer"
        >
          <span>GET A FREE QUOTE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
