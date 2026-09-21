import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Calendar, ArrowRight, Paintbrush } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification & Trust Bar */}
      <div className="bg-[#0a2656] text-white text-xs py-2 px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-200">
              <Shield className="w-3.5 h-3.5 text-red-500" />
              Licensed & Insured • Free Written Estimates
            </span>
            <span className="hidden md:inline-block text-blue-300/40">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Paintbrush className="w-3 h-3 text-red-400" />
              Residential & Commercial Specialists
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenBooking}
              className="hover:text-red-400 text-slate-200 transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              Book Free Consultation
            </button>
            <span className="text-blue-300/40">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1 font-bold text-white hover:text-red-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-red-500 fill-red-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-hidden"
              aria-label="ProBrush Premium Painting Home"
            >
              <img
                src="/logo.svg"
                alt="ProBrush Premium Painting"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0b2c63] hover:bg-slate-50 rounded-md transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[#0b2c63] hover:text-red-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0b2c63] group-hover:bg-red-50">
                  <Phone className="w-4 h-4 text-red-600" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Call Directly</div>
                  <div className="text-sm font-extrabold text-[#0b2c63]">{COMPANY_INFO.phone}</div>
                </div>
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-extrabold text-white bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#b91c1c] hover:to-[#991b1b] rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer uppercase tracking-wider"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu & Call buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                aria-label="Call ProBrush directly"
              >
                <Phone className="w-5 h-5 fill-red-600" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-[#0b2c63] hover:bg-slate-100 transition-colors focus:outline-hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-1 pt-1 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white text-center font-extrabold uppercase tracking-wider text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-2.5 px-3 rounded-lg border-2 border-[#0b2c63] text-[#0b2c63] font-bold text-center text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  <span>CALL NOW</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="py-2.5 px-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-center text-xs flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0b2c63]" />
                  <span>Book Consult</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
