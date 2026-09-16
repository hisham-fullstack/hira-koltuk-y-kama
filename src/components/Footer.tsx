import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#171c1f] text-white pt-14 pb-8 border-t border-[#dee3e7]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#6ffbbe] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Güvenli ve Organik Hijyen</h4>
              <p className="text-xs text-[#dee3e7] mt-0.5">Sağlık Bakanlığı onaylı bitkisel formül ve antialerjik şampuanlar.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#79d1ff] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">10 Dakikada Geri Dönüş</h4>
              <p className="text-xs text-[#dee3e7] mt-0.5">Randevu taleplerinize en geç 10 dakika içinde dönüş garantisi.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#6ffbbe] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Koşulsuz Memnuniyet Sözü</h4>
              <p className="text-xs text-[#dee3e7] mt-0.5">Beğenmezseniz ücretsiz tekrar yıkama ve kapıda kontrol imkanı.</p>
            </div>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#006689] to-[#14afe8] flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]">cleaning_services</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">HİRA</span>
                <span className="text-[11px] font-bold text-[#79d1ff] uppercase tracking-wider mt-0.5">Koltuk Yıkama</span>
              </div>
            </div>
            <p className="text-xs text-[#dee3e7] leading-relaxed">
              Bursa genelinde 12 yıldır ev, ofis ve kurumsal mekanlar için yerinde koltuk, halı, yatak ve perde yıkama hizmeti sunuyoruz.
            </p>
            <div className="text-xs text-[#dee3e7]/80 space-y-1">
              <div>VKN: 4620891230</div>
              <div>Bursa Ticaret ve Sanayi Odası (BTSO) Kayıtlı</div>
            </div>
          </div>

          {/* Quick Services Links */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Öne Çıkan Hizmetler
            </h5>
            <ul className="space-y-2.5 text-xs text-[#dee3e7]">
              <li><a href="#hizmetlerimiz" className="hover:text-[#79d1ff] transition-colors">Yerinde Koltuk Yıkama</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#79d1ff] transition-colors">Hassas Kadife Koltuk Yıkama</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#79d1ff] transition-colors">Antibakteriyel Yatak Yıkama</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#79d1ff] transition-colors">Adresten Alımlı Halı Yıkama</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#79d1ff] transition-colors">Araç Detaylı Koltuk Yıkama</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#79d1ff] transition-colors">Cafe & Ofis Koltuk Yıkama</a></li>
            </ul>
          </div>

          {/* Bursa Coverage */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Hizmet Bölgelerimiz
            </h5>
            <p className="text-xs text-[#dee3e7] mb-3 leading-relaxed">
              Bursa'nın tüm 17 ilçesine <strong className="text-white">ücretsiz servisimiz</strong> mevcuttur:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-[#dee3e7]">
              <span className="bg-white/10 px-2 py-0.5 rounded">Nilüfer</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Osmangazi</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Yıldırım</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Mudanya</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Gemlik</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">İnegöl</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Gürsu</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Kestel</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Karacabey</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">+8 İlçe</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              İletişim & Adres
            </h5>
            <div className="space-y-3 text-xs text-[#dee3e7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#79d1ff] shrink-0 mt-0.5" />
                <span>Merkez: İhsaniye Mah. Fatih Sultan Mehmet Bulvarı No:68 Nilüfer / Bursa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#79d1ff] shrink-0" />
                <a href="tel:08503080000" className="hover:text-white font-bold">0850 308 00 00</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#79d1ff] shrink-0" />
                <a href="mailto:info@hirakoltukyikama.com" className="hover:text-white">info@hirakoltukyikama.com</a>
              </div>
              <div className="text-[11px] text-[#dee3e7]/70 pt-2 border-t border-white/10">
                Çalışma Saatleri: Haftanın 7 Günü 08:30 - 21:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dee3e7]/60">
          <div>
            © 2026 Hira Koltuk Yıkama San. ve Tic. Ltd. Şti. Tüm Hakları Saklıdır.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">KVKK Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
