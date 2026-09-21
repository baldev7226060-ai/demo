import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, CheckCircle2, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { PropertyType } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationBookingProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessPromptQuote?: () => void;
}

export const ConsultationBooking: React.FC<ConsultationBookingProps> = ({
  isOpen,
  onClose,
  onSuccessPromptQuote,
}) => {
  const [consultType, setConsultType] = useState<'On-Site' | 'Virtual'>('On-Site');
  
  // Available upcoming dates
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays (0)
      if (d.getDay() !== 0) {
        dates.push(d);
      }
    }
    return dates;
  };

  const availableDates = generateDates();
  const [selectedDate, setSelectedDate] = useState<Date>(availableDates[0]);
  const [selectedTime, setSelectedTime] = useState<string>('09:00 AM - 10:30 AM');
  
  const timeSlots = [
    '08:00 AM - 09:30 AM',
    '10:00 AM - 11:30 AM',
    '01:00 PM - 02:30 PM',
    '03:30 PM - 05:00 PM',
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    propertyType: 'Residential' as PropertyType,
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'PB-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden text-left">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#0b2c63] to-[#143d78] p-6 text-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-black tracking-widest text-red-400 uppercase">
              ProBrush Scheduling Center
            </span>
            <h3 className="text-2xl font-black text-white">Book a Free Consultation</h3>
            <p className="text-xs text-blue-100">
              Zero obligation • On-site measurement or 15-minute virtual video walkthrough
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold tracking-wider uppercase">
                Consultation Confirmed
              </span>
              <h4 className="text-2xl font-black text-[#0b2c63]">
                We Look Forward to Meeting You!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your appointment has been scheduled for{' '}
                <strong className="text-slate-900">{formatDate(selectedDate)}</strong> at{' '}
                <strong className="text-slate-900">{selectedTime}</strong>.
              </p>
            </div>

            {/* Appointment Summary Card */}
            <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Confirmation Ref:</span>
                <span className="font-mono font-bold text-[#0b2c63]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Type:</span>
                <span className="font-bold text-slate-800">{consultType} Consultation</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Contact:</span>
                <span className="font-bold text-slate-800">{formData.fullName} ({formData.phone})</span>
              </div>
              {formData.address && (
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Address:</span>
                  <span className="font-bold text-slate-800">{formData.address}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              A calendar confirmation and SMS reminder will be sent to <strong>{formData.phone}</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close & Return to Site
              </button>
              {onSuccessPromptQuote && (
                <button
                  onClick={() => {
                    onClose();
                    onSuccessPromptQuote();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Also Upload Project Photos for Immediate Estimate
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Format Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Step 1: Choose Consultation Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConsultType('On-Site')}
                  className={`p-4 rounded-xl border-2 text-left flex items-start gap-3 transition-all cursor-pointer ${
                    consultType === 'On-Site'
                      ? 'border-[#0b2c63] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${consultType === 'On-Site' ? 'bg-[#0b2c63] text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">On-Site Estimate</h5>
                    <p className="text-xs text-slate-500 mt-0.5">We visit your property, inspect surfaces, take laser measurements, and discuss color swatches.</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultType('Virtual')}
                  className={`p-4 rounded-xl border-2 text-left flex items-start gap-3 transition-all cursor-pointer ${
                    consultType === 'Virtual'
                      ? 'border-[#0b2c63] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${consultType === 'Virtual' ? 'bg-[#0b2c63] text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Virtual Video Consultation</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Fast 15-minute video call via smartphone. Walk us through the space for preliminary pricing.</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Date Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-600" />
                Step 2: Select Date
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {availableDates.map((date, idx) => {
                  const isSelected = selectedDate.toDateString() === date.toDateString();
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`min-w-24 p-2.5 rounded-xl border text-center transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? 'border-[#0b2c63] bg-[#0b2c63] text-white shadow-md'
                          : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-700'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="text-base font-extrabold">
                        {date.getDate()}
                      </div>
                      <div className="text-[10px] font-semibold opacity-90">
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Time Slot */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                Step 3: Select Arrival Window
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-red-600 bg-red-600 text-white shadow-sm'
                          : 'border-slate-200 hover:border-[#0b2c63] text-slate-700 bg-white'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact & Location */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 4: Your Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-1 focus:ring-[#0b2c63]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-1 focus:ring-[#0b2c63]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63] focus:ring-1 focus:ring-[#0b2c63]"
                  />
                </div>
                <div>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as PropertyType })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-[#0b2c63]"
                  >
                    <option value="Residential">Residential Property</option>
                    <option value="Commercial">Commercial Property</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    required={consultType === 'On-Site'}
                    placeholder={consultType === 'On-Site' ? "Street Address, City & Zip Code *" : "Street Address / City (Optional)"}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    rows={2}
                    placeholder="Brief notes about the project (e.g., 3 bedrooms, exterior siding, pressure washing patio)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0b2c63]"
                  />
                </div>
              </div>
            </div>

            {/* Submission CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>No cancellation fees • Reschedule anytime</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>CONFIRM FREE APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
