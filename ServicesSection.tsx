import React, { useState } from 'react';
import { 
  Paintbrush, 
  Home, 
  Sparkles, 
  Users, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  PhoneCall
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenQuoteWithService: (serviceTitle: string) => void;
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenQuoteWithService,
  onOpenQuote
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-red-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-red-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-red-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-600" />;
      default:
        return <Paintbrush className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0b2c63] text-xs font-extrabold uppercase tracking-widest">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Our Professional Services
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Delivering clean lines, durable coatings, and meticulous surface preparation for both residential homes and commercial properties.
          </p>
        </div>

        {/* Services Grid (6 Core Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge Number */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#0b2c63]/90 text-white text-xs font-black tracking-wider uppercase backdrop-blur-xs">
                  0{service.number}
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0b2c63] group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Quick Highlights */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-slate-200 hover:border-[#0b2c63] text-slate-700 hover:text-[#0b2c63] font-bold text-xs transition-colors text-center cursor-pointer"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="py-2.5 px-4 rounded-lg bg-[#0b2c63] hover:bg-[#082046] text-white font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Conversion CTA after Services - Strictly Mandated */}
        <div className="mt-16 bg-gradient-to-r from-[#0b2c63] via-[#0e3575] to-[#0b2c63] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-red-600/10 skew-x-12 pointer-events-none" />
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
              Personalized Project Estimates
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Have a unique painting or surface cleaning project in mind?
            </h3>
            <p className="text-sm text-slate-200">
              We provide upfront itemized pricing with zero hidden fees. Call our team directly or request a free quote online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-red-600/40 transition-all cursor-pointer"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all border border-white/20"
            >
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Learn More Modal Dialog */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(title) => {
          setSelectedService(null);
          onOpenQuoteWithService(title);
        }}
      />
    </section>
  );
};
