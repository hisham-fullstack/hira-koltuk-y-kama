import React, { useState, useMemo } from 'react';
import { BURSA_DISTRICTS } from '../data/districtsData';
import { ALL_SERVICES } from '../data/servicesData';
import { Calculator, CheckCircle2, Phone, Calendar, Clock, MapPin, UploadCloud, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingCalculatorSectionProps {
  initialServiceId?: string;
}

export const PricingCalculatorSection: React.FC<PricingCalculatorSectionProps> = ({ initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || 'koltuk-yikama');
  const [selectedDistrict, setSelectedDistrict] = useState('Nilüfer');
  const [fabricType, setFabricType] = useState('standart');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('bugun-acil');
  const [notes, setNotes] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  // Selected district info
  const districtInfo = useMemo(() => {
    return BURSA_DISTRICTS.find((d) => d.name === selectedDistrict) || BURSA_DISTRICTS[0];
  }, [selectedDistrict]);

  // Selected service info
  const currentService = useMemo(() => {
    return ALL_SERVICES.find((s) => s.id === selectedServiceId) || ALL_SERVICES[0];
  }, [selectedServiceId]);

  // Dynamic price calculation
  const priceData = useMemo(() => {
    let multiplier = 1.0;
    if (fabricType === 'yogun') multiplier = 1.25;
    if (fabricType === 'kadife-ipek') multiplier = 1.3;

    const originalPrice = Math.round(currentService.basePrice * multiplier);
    const discountedPrice = Math.round(originalPrice * 0.85); // 15% web discount
    const savings = originalPrice - discountedPrice;

    return {
      originalPrice,
      discountedPrice,
      savings
    };
  }, [currentService, fabricType]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert('Lütfen randevu teyidi için telefon numaranızı giriniz.');
      return;
    }
    const code = 'HR-' + Math.floor(100000 + Math.random() * 900000);
    setTrackingCode(code);
    setIsSubmitted(true);
  };

  const createWhatsAppUrl = () => {
    const text = `Merhaba Hira Koltuk Yıkama, web sitenizden randevu oluşturdum:\n\nTakip Kodu: ${trackingCode}\nİsim: ${fullName || 'Müşteri'}\nTelefon: ${phone}\nİlçe: ${selectedDistrict}\nHizmet: ${currentService.title}\nKumaş Durumu: ${fabricType}\nTahmini Tutar: ₺${priceData.discountedPrice}\nRandevu Tercihi: ${preferredDate}`;
    return `https://wa.me/908503080000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="w-full bg-[#eff4f8] py-16 lg:py-24 border-y border-[#006689]/10" id="fiyat-hesapla">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff] px-3.5 py-1 rounded-full">
            Net Sabit Fiyat Sözü
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171c1f] mt-3 tracking-tight">
            30 Saniyede Fiyat Hesapla & Randevu Al
          </h2>
          <p className="text-sm sm:text-base text-[#3e484f] mt-2">
            Sürpriz yok, gizli ücret yok! İlçenizi ve hizmetinizi seçin, anında şeffaf fiyatınızı görüp randevunuzu teyit edin.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#006c49]/30 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#6ffbbe] text-[#006c49] mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold text-[#006c49] uppercase tracking-wider bg-[#6ffbbe]/40 px-3 py-1 rounded-full">
              Randevu Talebiniz Alındı
            </span>
            <h3 className="text-2xl font-black text-[#171c1f] mt-3">
              Teşekkür Ederiz, {fullName || 'Değerli Müşterimiz'}!
            </h3>
            <p className="text-sm text-[#3e484f] mt-2">
              <strong className="text-[#171c1f]">{selectedDistrict}</strong> bölgesindeki mobil ekibimiz en geç <strong>10 dakika içinde</strong> sizinle telefon üzerinden iletişime geçerek saat teyidi yapacaktır.
            </p>

            <div className="my-6 p-4 rounded-xl bg-[#eff4f8] text-left text-xs sm:text-sm space-y-2 border border-[#dee3e7]">
              <div className="flex justify-between">
                <span className="text-[#3e484f]">Takip Kodu:</span>
                <span className="font-mono font-bold text-[#006689]">{trackingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3e484f]">Hizmet:</span>
                <span className="font-semibold text-[#171c1f]">{currentService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3e484f]">Bölge:</span>
                <span className="font-semibold text-[#171c1f]">{selectedDistrict} ({districtInfo.estimatedArrival})</span>
              </div>
              <div className="flex justify-between border-t border-[#dee3e7] pt-2">
                <span className="text-[#3e484f]">İndirimli Tutar:</span>
                <span className="font-black text-[#006689] text-base">₺{priceData.discountedPrice}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#006c49] hover:bg-[#005236] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>WhatsApp'a Aktar & Hızlı Onayla</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-[#eff4f8] hover:bg-[#dee3e7] text-[#171c1f] font-bold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                Yeni Hesaplama Yap
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#006689]/15">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Form: Service and District Selection */}
              <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#dee3e7]">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 rounded-lg bg-[#006689] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <h3 className="text-lg font-bold text-[#171c1f]">Hizmet ve Bölgenizi Seçin</h3>
                </div>

                <div className="space-y-5">
                  {/* Service selector */}
                  <div>
                    <label htmlFor="service-select" className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-2">
                      Hizmet Seçimi
                    </label>
                    <select
                      id="service-select"
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-3 text-sm text-[#171c1f] font-medium outline-none focus:ring-2 focus:ring-[#14afe8]"
                    >
                      {ALL_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title} ({srv.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="district-select" className="text-xs font-bold text-[#3e484f] uppercase tracking-wider">
                        Bursa İlçesi
                      </label>
                      <span className="text-[11px] font-bold text-[#006c49] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{districtInfo.activeCrews} Mobil Araç Aktif ({districtInfo.estimatedArrival})</span>
                      </span>
                    </div>
                    <select
                      id="district-select"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-3 text-sm text-[#171c1f] font-medium outline-none focus:ring-2 focus:ring-[#14afe8]"
                    >
                      {BURSA_DISTRICTS.map((dist) => (
                        <option key={dist.name} value={dist.name}>
                          {dist.name} ({dist.activeCrews} Araç Bölgede)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Fabric / Stain selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-2">
                      Kumaş & Leke Durumu
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFabricType('standart')}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          fabricType === 'standart'
                            ? 'bg-[#c3e8ff] text-[#004c68] border-[#006689]'
                            : 'bg-[#f5fafe] text-[#3e484f] border-[#dee3e7]'
                        }`}
                      >
                        Standart Hijyen
                      </button>
                      <button
                        type="button"
                        onClick={() => setFabricType('yogun')}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          fabricType === 'yogun'
                            ? 'bg-[#c3e8ff] text-[#004c68] border-[#006689]'
                            : 'bg-[#f5fafe] text-[#3e484f] border-[#dee3e7]'
                        }`}
                      >
                        İnatçı / Yağ Lekesi
                      </button>
                      <button
                        type="button"
                        onClick={() => setFabricType('kadife-ipek')}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          fabricType === 'kadife-ipek'
                            ? 'bg-[#c3e8ff] text-[#004c68] border-[#006689]'
                            : 'bg-[#f5fafe] text-[#3e484f] border-[#dee3e7]'
                        }`}
                      >
                        Hassas / Kadife
                      </button>
                    </div>
                  </div>

                  {/* Real-time Calculation Summary Box */}
                  <div className="bg-[#f5fafe] p-4 rounded-2xl border border-[#006689]/15 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-[#3e484f]">
                      <span>Standart Tarife:</span>
                      <span className="line-through text-[#6e7980]">₺{priceData.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#006c49]">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Web Rezervasyon İndirimi (%15):
                      </span>
                      <span>- ₺{priceData.savings}</span>
                    </div>
                    <div className="border-t border-[#006689]/15 pt-2 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-[#3e484f] font-semibold">Ödenecek Net Tutar:</div>
                        <div className="text-2xl font-black text-[#006689]">₺{priceData.discountedPrice}</div>
                      </div>
                      <span className="text-xs bg-[#6ffbbe] text-[#002113] font-bold px-3 py-1 rounded-full">
                        Servis Ücretsizdir
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form: Customer Details & Submission */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-7 h-7 rounded-lg bg-[#006689] text-white flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h3 className="text-lg font-bold text-[#171c1f]">Randevu Bilgilerinizi Girin</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full-name" className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1.5">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        placeholder="Örn: Ayşe Yılmaz"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-3 text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone-number" className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1.5">
                        Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        id="phone-number"
                        placeholder="05XX XXX XX XX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-3 text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferred-time-select" className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1.5">
                      Randevu Tercihi
                    </label>
                    <select
                      id="preferred-time-select"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-3 text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                    >
                      <option value="bugun-acil">Aynı Gün Hızlı Servis (Hemen Bugün)</option>
                      <option value="yarin-sabah">Yarın Sabah (09:00 - 13:00)</option>
                      <option value="yarin-ogleden-sonra">Yarın Öğleden Sonra (13:00 - 18:00)</option>
                      <option value="hafta-sonu">Hafta Sonu Uygun Saatte</option>
                    </select>
                  </div>

                  {/* Photo upload option */}
                  <div>
                    <label className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1.5">
                      Leke / Koltuk Fotoğrafı (İsteğe Bağlı)
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-[#f5fafe] border border-dashed border-[#006689]/30 rounded-xl cursor-pointer hover:bg-[#eff4f8] transition-colors">
                      <UploadCloud className="w-5 h-5 text-[#006689]" />
                      <span className="text-xs text-[#3e484f] truncate">
                        {uploadedFileName ? `Fotoğraf: ${uploadedFileName}` : 'Fotoğraf seç veya buraya sürükle'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="appointment-notes" className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1.5">
                      Ek Açıklama / Adres Detayı
                    </label>
                    <input
                      type="text"
                      id="appointment-notes"
                      placeholder="Örn: Açık gri keten koltuk, vişne suyu lekesi var..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-3 text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#006689] hover:bg-[#004c68] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Randevu Talebini Gönder (Ücretsiz Servis)</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#3e484f] pt-1 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#006c49]" />
                    <span>Ödeme temizlik bittikten ve siz onay verdikten sonra kapıda alınır.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
