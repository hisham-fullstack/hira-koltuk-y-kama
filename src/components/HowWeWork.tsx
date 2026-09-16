import React from 'react';
import { MessageCircle, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '1',
      bigNum: '01',
      title: 'Randevu & Fotoğraf',
      desc: "Koltuğunuzun durumunu bildirin veya WhatsApp'tan fotoğraf atın; anında net, sabit fiyat verelim. Sürpriz ek masraf yok!",
      tag: 'WhatsApp ile 1 Dakika',
      icon: MessageCircle,
      tagColor: 'text-[#006689]'
    },
    {
      num: '2',
      bigNum: '02',
      title: 'Kapınıza Geliyoruz',
      desc: 'Belirlenen gün ve randevu saatinde, profesyonel ekipmanlarla donatılmış ekibimiz galoş ve hijyen önlemleriyle kapınızda.',
      tag: 'Tam Zamanında Varış',
      icon: Clock,
      tagColor: 'text-[#006c49]'
    },
    {
      num: '3',
      bigNum: '03',
      title: 'Vakum & Derin Yıkama',
      desc: 'Bitkisel solüsyon püskürtülür, döner fırça ile lekeler yumuşatılır ve 3 motorlu Alman vakumu ile kir kökten çekilir.',
      tag: 'Organik ve Güçlü Vakum',
      icon: Sparkles,
      tagColor: 'text-[#006689]'
    },
    {
      num: '4',
      bigNum: '04',
      title: 'Kontrol & %100 Onay',
      desc: 'Temizlenen yüzeyi sizinle birlikte inceliyoruz. Siz tam memnun kalıp onay vermeden hiçbir ödeme talep etmiyoruz!',
      tag: 'Koşulsuz Memnuniyet',
      icon: ShieldCheck,
      tagColor: 'text-[#006c49]'
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#006689]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-3 py-1 rounded-full">
            Şeffaf & Kusursuz Süreç
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171c1f] mt-3 tracking-tight">
            Nasıl Çalışıyoruz? 4 Adımda Zahmetsiz Hijyen
          </h2>
          <p className="text-sm sm:text-base text-[#3e484f] mt-3">
            Evinizin konforunu bozmadan, hiçbir gizli ücret veya karmaşa olmadan temizliği kapınıza getiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="flex flex-col items-start gap-4 p-6 bg-[#eff4f8] rounded-2xl relative overflow-hidden group hover:bg-[#e4e9ed] transition-colors border border-[#006689]/10"
              >
                <span className="text-4xl font-black text-[#14afe8]/20 absolute right-4 top-3 select-none pointer-events-none">
                  {step.bigNum}
                </span>
                
                <div className="w-12 h-12 rounded-xl bg-[#006689] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  {step.num}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#171c1f]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
                  {step.desc}
                </p>

                <div className={`mt-auto pt-3 flex items-center gap-1.5 font-bold text-xs ${step.tagColor}`}>
                  <IconComponent className="w-4 h-4" />
                  <span>{step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
