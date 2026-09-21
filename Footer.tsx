import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { PrivacyTermsModal } from './PrivacyTermsModal';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenBooking }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About ProBrush', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Before & After Work', href: '#our-work' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Service Coverage', href: '#service-area' },
    { label: 'Frequently Asked Questions', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pre-Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#home" className="inline-block focus:outline-hidden group">
              <div className="bg-white px-3.5 py-2.5 rounded-xl inline-block shadow-md group-hover:opacity-95 transition-opacity">
                <img
                  src="/logo.svg"
                  alt="ProBrush Premium Painting"
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              ProBrush Premium Painting delivers professional painting and surface-cleaning services for residential homeowners and commercial businesses. Built on premium workmanship, rigorous surface preparation, and customer trust.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Fully Licensed, Bonded & Insured</span>
              </div>
              <div className="text-slate-500">EPA Lead-Safe Certified • Free Written Estimates</div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-[#0b2c63] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="ProBrush Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="ProBrush Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-[#0b2c63] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="ProBrush LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((serv) => (
                <li key={serv.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll('#services');
                    }}
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>{serv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="hover:text-red-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Primary Action (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact ProBrush
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 text-slate-200 hover:text-red-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="font-bold">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 text-slate-200 hover:text-red-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.serviceArea}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hours.weekdays}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-xs transition-colors cursor-pointer"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ProBrush Premium Painting. All rights reserved. “Premium Quality that you can Trust!”
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Privacy & Terms Dialog */}
      <PrivacyTermsModal
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
};
