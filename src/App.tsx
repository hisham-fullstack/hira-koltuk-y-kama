import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProofBar } from './components/ProofBar';
import { ServicesShowcase } from './components/ServicesShowcase';
import { HowWeWork } from './components/HowWeWork';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ReviewsSection } from './components/ReviewsSection';
import { PricingCalculatorSection } from './components/PricingCalculatorSection';
import { FaqSection } from './components/FaqSection';
import { BottomCta } from './components/BottomCta';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DistrictModal } from './components/DistrictModal';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefillServiceId, setPrefillServiceId] = useState<string | undefined>(undefined);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const [isDistrictModalOpen, setIsDistrictModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setPrefillServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectDistrictFromModal = (districtName: string) => {
    // Scroll smoothly to the calculator section if desired
    const calculatorElem = document.getElementById('fiyat-hesapla');
    if (calculatorElem) {
      calculatorElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5fafe] text-[#171c1f] flex flex-col selection:bg-[#c3e8ff] selection:text-[#004c68]">
      {/* Fixed Header with Top Emergency & Trust Bar */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Body */}
      <main className="flex-1 pt-14 lg:pt-24">
        {/* 1. Hero Section with Headline, Badges, Visual, and Live Estimator */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenDistrictModal={() => setIsDistrictModalOpen(true)}
        />

        {/* 2. Proof & Trust Bar with Metrics and 4 Guarantees */}
        <ProofBar />

        {/* 3. All 20 Services Showcase with Category Tabs & Search */}
        <ServicesShowcase
          onSelectService={(srv) => setSelectedServiceForDetail(srv)}
          onOpenBooking={(srvTitle) => handleOpenBooking()}
        />

        {/* 4. How We Work: 4-Step Hygiene Protocol */}
        <HowWeWork />

        {/* 5. Interactive Before/After Comparison Slider & Dirty Water Tank Transparency */}
        <BeforeAfterSection />

        {/* 6. Comparison Matrix: Hira vs Ordinary Cleaners */}
        <ComparisonMatrix />

        {/* 7. Real Customer Testimonials & Google Ratings */}
        <ReviewsSection />

        {/* 8. Full 30-Second Dynamic Pricing Calculator & Booking Form */}
        <PricingCalculatorSection initialServiceId={prefillServiceId} />

        {/* 9. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 10. Bottom %15 Discount Banner */}
        <BottomCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Conversion Actions (WhatsApp & Call) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillServiceId={prefillServiceId}
      />

      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBook={(srvId) => {
          setSelectedServiceForDetail(null);
          handleOpenBooking(srvId);
        }}
      />

      <DistrictModal
        isOpen={isDistrictModalOpen}
        onClose={() => setIsDistrictModalOpen(false)}
        onSelectDistrict={handleSelectDistrictFromModal}
      />
    </div>
  );
}

