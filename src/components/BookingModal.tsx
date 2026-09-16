import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/servicesData';
import { BURSA_DISTRICTS } from '../data/districtsData';
import { X, Calendar, CheckCircle2, Phone, Sparkles, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, prefillServiceId }) => {
  const [serviceId, setServiceId] = useState(prefillServiceId || 'koltuk-yikama');
  const [district, setDistrict] = useState('Nilüfer');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('bugun-acil');
  const [isDone, setIsDone] = useState(false);
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  const currentService = ALL_SERVICES.find((s) => s.id === serviceId) || ALL_SERVICES[0];
  const selectedDistrictInfo = BURSA_DISTRICTS.find((d) => d.name === district) || BURSA_DISTRICTS[0];

  const discountedPrice = Math.round(currentService.basePrice * 0.85);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert('Lütfen telefon numaranızı giriniz.');
      return;
    }
    const tracking = 'HR-' + Math.floor(100000 + Math.random() * 900000);
    setCode(tracking);
    setIsDone(true);
  };

  const createWhatsAppUrl = () => {
    const text = `Merhaba Hira Koltuk Yıkama, web sitenizden randevu oluşturdum:\n\nTakip Kodu: ${code}\nİsim: ${name || 'Müşteri'}\nTelefon: ${phone}\nİlçe: ${district}\nHizmet: ${currentService.title}\nTutar: ₺${discountedPrice}\nRandevu Tercihi: ${preferredTime}`;
    return `https://wa.me/908503080000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#006689]/20 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#3e484f] hover:bg-[#eff4f8] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-[#6ffbbe] text-[#006c49] mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#171c1f]">
              Randevunuz Alındı!
            </h3>
            <p className="text-xs sm:text-sm text-[#3e484f] mt-2 leading-relaxed">
              Sayın <strong className="text-[#171c1f]">{name || 'Müşterimiz'}</strong>, {district} bölgesindeki mobil ekibimiz birkaç dakika içinde sizi arayarak randevu saatini teyit edecektir.
            </p>

            <div className="my-5 p-4 rounded-xl bg-[#eff4f8] text-left text-xs space-y-2 border border-[#dee3e7]">
              <div className="flex justify-between">
                <span className="text-[#3e484f]">Takip No:</span>
                <span className="font-mono font-bold text-[#006689]">{code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3e484f]">Hizmet:</span>
                <span className="font-semibold text-[#171c1f]">{currentService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3e484f]">İndirimli Tutar:</span>
                <span className="font-bold text-[#006c49]">₺{discountedPrice} (Servis Ücretsiz)</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#006c49] hover:bg-[#005236] text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>WhatsApp'ta Aç & Hızlı Teyit Et</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="w-full bg-[#eff4f8] hover:bg-[#dee3e7] text-[#171c1f] font-bold py-3 rounded-xl text-xs transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>%15 Web Randevu İndirimi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#171c1f]">
                Hızlı Randevu & Fiyat Talebi
              </h3>
              <p className="text-xs text-[#3e484f] mt-1">
                Aynı gün ücretsiz servis, %100 memnuniyet garantisi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1">
                  Hizmet Seçimi
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-2.5 text-xs sm:text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                >
                  {ALL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.priceFormatted})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-[#3e484f] uppercase tracking-wider">
                    Bursa İlçesi
                  </label>
                  <span className="text-[11px] text-[#006c49] font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {selectedDistrictInfo.activeCrews} Ekip Bölgede
                  </span>
                </div>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-2.5 text-xs sm:text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                >
                  {BURSA_DISTRICTS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name} ({d.estimatedArrival})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Mehmet Öz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-2.5 text-xs sm:text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-2.5 text-xs sm:text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e484f] uppercase tracking-wider mb-1">
                  Randevu Zamanı
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-[#f5fafe] border border-[#006689]/20 rounded-xl p-2.5 text-xs sm:text-sm text-[#171c1f] outline-none focus:ring-2 focus:ring-[#14afe8]"
                >
                  <option value="bugun-acil">Aynı Gün Hızlı Servis (Hemen Bugün)</option>
                  <option value="yarin-sabah">Yarın Sabah (09:00 - 13:00)</option>
                  <option value="yarin-ogleden-sonra">Yarın Öğleden Sonra (13:00 - 18:00)</option>
                  <option value="hafta-sonu">Hafta Sonu</option>
                </select>
              </div>

              {/* Price Callout */}
              <div className="p-3 bg-[#eff4f8] rounded-xl flex items-center justify-between text-xs border border-[#006689]/15">
                <div>
                  <div className="text-[11px] text-[#3e484f]">Tahmini Tutar:</div>
                  <div className="font-extrabold text-[#006689] text-base">₺{discountedPrice}</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#006c49] font-bold block">%15 İndirim Uygulandı</span>
                  <span className="text-[10px] text-[#3e484f]">Servis & Keşif Ücretsiz</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#006689] hover:bg-[#004c68] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Oluştur</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#3e484f] text-center">
                <ShieldCheck className="w-4 h-4 text-[#006c49]" />
                <span>Ödeme kapıda, temizlikten tam onay verdikten sonra alınır.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
