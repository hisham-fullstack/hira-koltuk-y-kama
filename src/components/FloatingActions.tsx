import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp and Call buttons on desktop / tablet */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#3e484f] shadow-lg border border-[#006689]/20 flex items-center justify-center hover:bg-[#eff4f8] transition-all cursor-pointer"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href="https://wa.me/908503080000?text=Merhaba,%20koltuk%20yikama%20hakkinda%20hizli%20fiyat%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center bg-[#006c49] hover:bg-[#005236] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6ffbbe] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6ffbbe]"></span>
            </span>
          </div>
          <span className="hidden sm:inline-block ml-2.5 font-bold text-xs">
            WhatsApp Hızlı Fiyat
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#dee3e7] p-2.5 px-4 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:08503080000"
          className="flex-1 bg-[#eff4f8] hover:bg-[#dee3e7] text-[#171c1f] font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 border border-[#006689]/15"
        >
          <Phone className="w-4 h-4 text-[#006689]" />
          <span>Hemen Ara</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 bg-[#006689] hover:bg-[#004c68] text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">calculate</span>
          <span>Fiyat Hesapla</span>
        </button>

        <a
          href="https://wa.me/908503080000?text=Merhaba,%20koltuk%20yikama%20hakkinda%20hizli%20fiyat%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-11 bg-[#006c49] text-white rounded-xl flex items-center justify-center shadow-sm shrink-0"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};
