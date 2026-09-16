import React from 'react';
import { RotateCcw, Sparkles, ShieldCheck, Wind, Award, CheckCheck, Star } from 'lucide-react';

export const ProofBar: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 shadow-xs border-y border-[#006689]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Metrics Pill */}
        <div className="bg-[#eff4f8] rounded-2xl p-5 sm:p-6 mb-8 flex flex-wrap items-center justify-around gap-6 text-center border border-[#006689]/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#c3e8ff] flex items-center justify-center text-[#006689] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-[#171c1f]">12+ Yıl</div>
              <div className="text-xs text-[#3e484f] font-semibold">Sektör Tecrübesi</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#6ffbbe] flex items-center justify-center text-[#006c49] shrink-0">
              <CheckCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-[#171c1f]">18.500+</div>
              <div className="text-xs text-[#3e484f] font-semibold">Temizlenen Ev & Ofis</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Star className="w-6 h-6 fill-amber-500" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-[#171c1f]">4.9 / 5.0</div>
              <div className="text-xs text-[#3e484f] font-semibold">1.850+ Google Yorumu</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#c3e8ff] flex items-center justify-center text-[#006689] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-[#171c1f]">%100 Kurumsal</div>
              <div className="text-xs text-[#3e484f] font-semibold">Bakanlık & ISO Standartlı</div>
            </div>
          </div>
        </div>

        {/* 4 Core Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2.5 p-6 rounded-2xl bg-[#eff4f8] hover:bg-[#e4e9ed] transition-colors border border-transparent hover:border-[#006689]/20">
            <div className="w-12 h-12 rounded-xl bg-[#6ffbbe] flex items-center justify-center text-[#002113]">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#171c1f]">Beğenmezseniz Ücretsiz Tekrar</h4>
            <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
              Temizlik sonucundan tam memnun kalmazsanız hiçbir mazeret üretmeksizin ücretsiz yeniden yıkıyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 p-6 rounded-2xl bg-[#eff4f8] hover:bg-[#e4e9ed] transition-colors border border-transparent hover:border-[#006689]/20">
            <div className="w-12 h-12 rounded-xl bg-[#c3e8ff] flex items-center justify-center text-[#001e2c]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#171c1f]">Doku ve Renk Koruma</h4>
            <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
              Kumaş liflerine zarar veren sert fırçalar veya ağartıcılar kullanmıyoruz. Renkler ilk günkü parlaklığında kalır.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 p-6 rounded-2xl bg-[#eff4f8] hover:bg-[#e4e9ed] transition-colors border border-transparent hover:border-[#006689]/20">
            <div className="w-12 h-12 rounded-xl bg-[#6ffbbe] flex items-center justify-center text-[#002113]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#171c1f]">Astım & Alerji Dostu Bitkisel</h4>
            <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
              Bebekler ve evcil dostlarımız için güvenli, ağır kimyasal içermeyen Alman sertifikalı bitkisel deterjanlar.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 p-6 rounded-2xl bg-[#eff4f8] hover:bg-[#e4e9ed] transition-colors border border-transparent hover:border-[#006689]/20">
            <div className="w-12 h-12 rounded-xl bg-[#d5e3ff] flex items-center justify-center text-[#001c3b]">
              <Wind className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#171c1f]">3 Motorlu Güçlü Vakum</h4>
            <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
              Suyun %95'ini anında çeken endüstriyel vakumla koltuklarınız günlerce ıslak kalmaz, 3-5 saatte kurur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
