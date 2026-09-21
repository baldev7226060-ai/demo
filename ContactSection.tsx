import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question / Estimate Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        email: '',
        subject: 'General Question / Estimate Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2c63] tracking-tight">
            Contact ProBrush Premium Painting
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Ready to get started or have questions? Reach out directly by phone, send a quick message, or submit an online quote request.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info, Hours, and Service Map */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Quick Contact Cards */}
            <div className="space-y-3">
              {/* Clickable Phone */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-300 hover:bg-red-50/20 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 fill-red-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone (Click to Call)</div>
                  <div className="text-lg font-black text-[#0b2c63] group-hover:text-red-600 transition-colors">{COMPANY_INFO.phone}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Direct estimating dispatch & client service</div>
                </div>
              </a>

              {/* Clickable Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0b2c63] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-sm sm:text-base font-bold text-[#0b2c63] group-hover:text-blue-700 transition-colors break-all">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Send blueprints, RFP specs, or inquiries</div>
                </div>
              </a>

              {/* Service Area */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-[#0b2c63] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Area</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{COMPANY_INFO.serviceArea}</div>
                  <div className="text-xs text-slate-500 mt-0.5">35-mile operating perimeter</div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-[#0b2c63] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Operating Hours</div>
                  <div className="font-semibold text-slate-800">{COMPANY_INFO.hours.weekdays}</div>
                  <div className="font-semibold text-slate-800">{COMPANY_INFO.hours.saturday}</div>
                  <div className="text-slate-500 italic">{COMPANY_INFO.hours.sunday}</div>
                </div>
              </div>
            </div>

            {/* Prominent Lead Quote Trigger */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b2c63] to-[#082046] text-white shadow-xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                Fast Track Your Project
              </span>
              <h3 className="text-xl font-bold">Prefer a full detailed project quote?</h3>
              <p className="text-xs text-slate-200">
                Use our dedicated estimate request form to select services, choose timelines, and upload photos.
              </p>
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Placeholder Card & Direct Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Contact Form */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg text-left">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-xl font-black text-[#0b2c63]">Send Us a Message</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question about scheduling, paint brands, or specialized commercial specs? We reply within a few hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900">Message Delivered!</h4>
                  <p className="text-xs text-slate-500">Thank you for reaching out. A ProBrush specialist will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can our painting & surface-cleaning specialists help you today?..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>We respect your privacy. No spam ever.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#0b2c63] hover:bg-[#082046] text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 text-red-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Maps Card with Realistic Map Embed Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <div className="relative h-64 w-full bg-slate-200">
                {/* Embed Map Iframe or High-Fidelity Interactive Map Preview */}
                <iframe
                  title="ProBrush Painting Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105628.79018428803!2d-118.43455338167883!3d34.10886532454562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-25 contrast-105"
                />
                
                {/* Map Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-slate-200 flex items-center gap-2 text-xs font-bold text-[#0b2c63]">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>ProBrush Service Territory</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
