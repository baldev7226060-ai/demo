import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ConsultationBooking } from './components/ConsultationBooking';
import { QuoteSection } from './components/QuoteSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Interior Painting');

  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const quoteEl = document.getElementById('quote-section');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Sticky Header with Navigation & Direct Call */}
      <Header
        onOpenQuote={() => scrollToQuote()}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => scrollToQuote()}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 2. Services Section (6 Core Offerings + Modals) */}
        <ServicesSection
          onOpenQuoteWithService={(serv) => scrollToQuote(serv)}
          onOpenQuote={() => scrollToQuote()}
        />

        {/* 3. Why Choose Us (6 Pillars & Badges) */}
        <WhyChooseUs
          onOpenQuote={() => scrollToQuote()}
        />

        {/* 4. Our Work: Before & After Interactive Transformations */}
        <BeforeAfterSection
          onOpenQuote={() => scrollToQuote()}
        />

        {/* 5. Lead Generation Quote Form ("Ready to Transform Your Space?") */}
        <QuoteSection
          preselectedService={preselectedService}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 6. Reviews Section (Customer Testimonials & Placeholders) */}
        <ReviewsSection />

        {/* 7. About Section (ProBrush Quality & Standards) */}
        <AboutSection
          onOpenQuote={() => scrollToQuote()}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 8. Service Area Section ("Proudly Serving Our Local Community") */}
        <ServiceAreaSection
          onOpenQuote={() => scrollToQuote()}
        />

        {/* 9. FAQ Section (7 Core Questions & Answers) */}
        <FaqSection
          onOpenQuote={() => scrollToQuote()}
        />

        {/* 10. Contact Section (Direct Information & Google Maps) */}
        <ContactSection
          onOpenQuote={() => scrollToQuote()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => scrollToQuote()}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Mobile Bottom Sticky CTA Bar */}
      <MobileStickyBar
        onOpenQuote={() => scrollToQuote()}
      />

      {/* Consultation Booking Modal System */}
      <ConsultationBooking
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onSuccessPromptQuote={() => scrollToQuote()}
      />
    </div>
  );
}
