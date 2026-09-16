import React, { useState, useMemo } from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Clock, Phone, Camera, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (prefillService?: string) => void;
  onOpenDistrictModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenDistrictModal }) => {
  const [selectedService, setSelectedService] = useState('koltuk');
  const [selectedCondition, setSelectedCondition] = useState('standart');

  const calculatedPrice = useMemo(() => {
    const baseRates: Record<string, { min: number; max: number }> = {
      koltuk: { min: 850, max: 1100 },
      'l-koltuk': { min: 1100, max: 1450 },
      yatak: { min: 650, max: 900 },
      hali: { min: 450, max: 700 },
      arac: { min: 950, max: 1300 },
      sandalye: { min: 480, max: 720 },
    };

    const conditionMultiplier: Record<string, number> = {
      standart: 1.0,
      yogun: 1.25,
      hassas: 1.2,
    };

    const base = baseRates[selectedService] || { min: 850, max: 1100 };
    const mult = conditionMultiplier[selectedCondition] || 1.0;

    const minVal = Math.round(base.min * mult);
    const maxVal = Math.round(base.max * mult);

    return `₺${minVal.toLocaleString('tr-TR')} - ₺${maxVal.toLocaleString('tr-TR')}`;
  }, [selectedService, selectedCondition]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f5fafe] pt-6 pb-14 lg:py-16">
      {/* Background soft ambient water glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c3e8ff]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#6ffbbe]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Guarantee Tag */}
            <div className="inline-flex items-center gap-2 self-start bg-[#d5e3ff] text-[#001c3b] px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-[#006689]">verified</span>
              <span className="text-xs uppercase tracking-wider font-bold">Bursa Geneli 12 Yıllık Kurumsal Güvence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] leading-tight tracking-tight">
              Koltuk ve Halılarınızda{' '}
              <span className="text-[#006689] relative inline-block">
                İlk Günkü Ferahlık
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#14afe8]/30 -z-10 rounded-sm"></span>
              </span>{' '}
              ve Derin Hijyen
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#3e484f] leading-relaxed max-w-2xl font-normal">
              Bakteri, mayt ve inatçı lekelere son! Kumaşa zarar vermeyen organik antialerjik şampuanlar ve yüksek vakumlu Alman teknolojisi ile yerinde profesyonel temizlik.
            </p>

            {/* 4 Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-xs border border-[#006689]/10">
                <CheckCircle2 className="w-5 h-5 text-[#006c49] shrink-0" />
                <span className="text-xs sm:text-sm text-[#171c1f] font-semibold">Aynı Gün Hızlı Servis</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-xs border border-[#006689]/10">
                <ShieldCheck className="w-5 h-5 text-[#006c49] shrink-0" />
                <span className="text-xs sm:text-sm text-[#171c1f] font-semibold">%100 Memnuniyet Garantisi</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-xs border border-[#006689]/10">
                <HeartHandshake className="w-5 h-5 text-[#006c49] shrink-0" />
                <span className="text-xs sm:text-sm text-[#171c1f] font-semibold">Bebek & Evcil Hayvan Dostu</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-xs border border-[#006689]/10">
                <Clock className="w-5 h-5 text-[#006c49] shrink-0" />
                <span className="text-xs sm:text-sm text-[#171c1f] font-semibold">4 Saatte Tam Kuruma</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenBooking(selectedService)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#006689] hover:bg-[#004c68] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-[20px]">calculate</span>
                <span>Hemen Fiyat Teklifi Al (30 Sn)</span>
              </button>

              <a
                href="https://wa.me/908503080000?text=Merhaba,%20koltuklarımın%20fotografini%20paylasip%20hizli%20fiyat%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#006c49] hover:bg-[#005236] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Camera className="w-5 h-5" />
                <span>WhatsApp'tan Fotoğraf At & Fiyat Al</span>
              </a>
            </div>

            {/* Live active dispatch crew pill */}
            <div className="flex items-center gap-3 pt-1">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13ba82] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#006c49]"></span>
              </span>
              <span className="text-xs sm:text-sm text-[#3e484f]">
                Şu an bölgenizde <strong className="text-[#171c1f]">3 mobil servis ekibimiz</strong> aktif görevde.{' '}
                <button
                  onClick={onOpenDistrictModal}
                  className="text-[#006689] underline font-semibold hover:text-[#004c68] ml-1"
                >
                  İlçenizi Sorgulayın
                </button>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual & Mini Calculator Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-[#006689]/10">
              {/* Living room hero image */}
              <div className="h-60 sm:h-64 w-full relative overflow-hidden group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq1tDjb4JC3He1uCMx2JP6rOY3djts0ESGhTzjbqvhTumfB_41dTNtsoXkJtAF0C8XXm-oHibhle6eQ_J_NBeLAVb8C3Y7IBhcUUCVQPL3sEzinfpVmdvaK6l6qBjgL-U5XVrStG9_uBHwfh1XqaGio-iqswrq-OziDpqkzrSyrCENwJWT2pDQB6YQVoblDFD2ip8J7-PgvNlCv3hDRL2uGdn43ZHv3TbHzvPfKUmOvBe7MdBJ79lV"
                  alt="Tertemiz ferah oturma odası ve koltuk takımı"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                    <Sparkles className="w-4 h-4 text-[#006c49]" />
                    <span className="text-xs text-[#171c1f] font-bold">18.500+ Evde Kusursuz Temizlik</span>
                  </div>
                </div>
              </div>

              {/* Instant Interactive Mini Calculator */}
              <div className="p-5 sm:p-6 bg-white flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#dee3e7]">
                  <h3 className="text-base font-bold text-[#171c1f] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006689] text-[20px]">price_change</span>
                    <span>Hızlı Fiyat Tahmini</span>
                  </h3>
                  <span className="text-xs font-bold text-[#006c49] bg-[#6ffbbe] px-2.5 py-0.5 rounded-full">
                    %15 İndirimli
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-service-select" className="text-xs font-semibold text-[#3e484f]">
                      Hizmet Türü
                    </label>
                    <select
                      id="hero-service-select"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="bg-[#eff4f8] text-[#171c1f] text-xs sm:text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#14afe8] border border-transparent"
                    >
                      <option value="koltuk">Koltuk Takımı (3+3+1+1)</option>
                      <option value="l-koltuk">L Köşe Koltuk</option>
                      <option value="yatak">Çift Kişilik Yatak</option>
                      <option value="hali">El Dokuma / Makine Halısı</option>
                      <option value="arac">Araç Detaylı Koltuk Yıkama</option>
                      <option value="sandalye">Sandalye Takımı (6 Adet)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="hero-condition-select" className="text-xs font-semibold text-[#3e484f]">
                      Leke & Kumaş Durumu
                    </label>
                    <select
                      id="hero-condition-select"
                      value={selectedCondition}
                      onChange={(e) => setSelectedCondition(e.target.value)}
                      className="bg-[#eff4f8] text-[#171c1f] text-xs sm:text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#14afe8] border border-transparent"
                    >
                      <option value="standart">Standart Hijyen Bakımı</option>
                      <option value="yogun">Yoğun Leke & Evcil Hayvan</option>
                      <option value="hassas">Hassas Kumaş (Kadife/Keten)</option>
                    </select>
                  </div>
                </div>

                {/* Price Display & Callout */}
                <div className="bg-[#eff4f8] p-3.5 rounded-xl flex items-center justify-between mt-1">
                  <div>
                    <div className="text-[11px] text-[#3e484f] font-medium">Tahmini İndirimli Tutar:</div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#006689]">{calculatedPrice}</div>
                  </div>
                  <button
                    onClick={() => onOpenBooking(selectedService)}
                    className="bg-[#14afe8] hover:bg-[#006689] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Bu Fiyatla Çağır</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
