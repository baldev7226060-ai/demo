import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Paintbrush } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden text-left">
        
        {/* Header Image with Gradient */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
              Service #{service.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{service.title}</h3>
            <p className="text-sm text-slate-300 mt-1">{service.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Service Overview</h4>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0b2c63] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              What's Included & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step Protocol */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <h4 className="text-sm font-bold text-[#0b2c63] mb-3 flex items-center gap-2">
              <Paintbrush className="w-4 h-4 text-red-600" />
              ProBrush Execution Steps
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
              {service.processSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0b2c63] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Best Suited For */}
          <div className="text-xs text-slate-500">
            <strong className="text-slate-700">Ideal For:</strong> {service.idealFor}
          </div>

          {/* Footer Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Close Details
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>REQUEST QUOTE FOR THIS SERVICE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
