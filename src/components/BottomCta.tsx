import React from 'react';
import { Calendar, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface BottomCtaProps {
  onOpenBooking: () => void;
}

export const BottomCta: React.FC<BottomCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full bg-gradient-to-r from-[#004c68] via-[#006689] to-[#004c68] text-white py-16 lg:py-20 relative overflow-hidden">
      {/* Background soft water ripple circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#14afe8]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#6ffbbe] text-[#002113] text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>İlk Siparişinize Özel %15 İndirim Fırsatı</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Koltuklarınız ve Halılarınız Yeniden Pırıl Pırıl Olsun!
        </h2>

        <p className="text-base sm:text-lg text-[#dee3e7] max-w-2xl mx-auto mb-8 font-normal">
          Aynı gün ücretsiz keşif ve servis, %100 koşulsuz memnuniyet garantisi ve bebek dostu bitkisel hijyen formülüyle tanışın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#14afe8] hover:bg-white hover:text-[#006689] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Hemen Randevu Oluştur</span>
          </button>

          <a
            href="https://wa.me/908503080000?text=Merhaba,%20%15%20indirimli%20fiyat%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#006c49] hover:bg-[#005236] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp'tan Fiyat Al</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-[#dee3e7]">
          <span>Müşteri Hizmetleri & Çağrı Merkezi:</span>
          <a href="tel:08503080000" className="font-extrabold text-white underline hover:text-[#6ffbbe]">
            0850 308 00 00
          </a>
          <span className="text-white/40">|</span>
          <span>Haftanın 7 Günü 08:30 - 21:00</span>
        </div>
      </div>
    </section>
  );
};
