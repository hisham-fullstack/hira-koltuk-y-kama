import React from 'react';
import { Check, X, ShieldCheck, AlertTriangle } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonPoints = [
    {
      feature: 'Temizlik Şampuanı & Solüsyon',
      hira: 'Sağlık Bakanlığı onaylı, organik bitkisel antialerjik formül (bebek & pati dostu)',
      others: 'Ağır kimyasal, kostik veya çamaşır suyu bazlı kalitesiz deterjanlar',
    },
    {
      feature: 'Vakum & Emiş Gücü',
      hira: '3 Motorlu Alman endüstriyel vakum (suyun %95\'ini çeker, 3-5 saatte tam kuruma)',
      others: 'Tek motorlu yetersiz emiş (günlerce ıslak kalır, süngerde küf ve koku yapar)',
    },
    {
      feature: 'Leke Çıkarma Garantisi',
      hira: '%100 Koşulsuz Memnuniyet Sözü — Beğenmezseniz ücretsiz tekrar yıkanır',
      others: 'Garantisiz işlem — leke çıkmayınca "kumaşın yapısı böyle" bahanesi',
    },
    {
      feature: 'Fiyat Politikası',
      hira: 'Net Sabit Fiyat Sözü + Tüm Bursa\'ya %100 Ücretsiz Servis',
      others: 'Kapıda "koltuğunuz çok kirliymiş" denilerek sürpriz fiyat artışları',
    },
    {
      feature: 'Personel ve Güvence',
      hira: '12 Yıllık kurumsal firma, üniformalı ve galoşlu profesyonel kadro',
      others: 'Günübirlik seyyar çalışanlar, ulaşılamayan iletişim numaraları',
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#006689]/10" id="neden-biz">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-3 py-1 rounded-full">
            Bilinçli Tercih
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171c1f] mt-3 tracking-tight">
            Neden Sıradan Yıkamacılar Değil de Hira?
          </h2>
          <p className="text-sm sm:text-base text-[#3e484f] mt-2">
            Kumaş ömrünü uzatan profesyonel standartlar ile sıradan temizliğin belirleyici farkları.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#006689]/15 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#eff4f8]">
                <th className="p-4 lg:p-5 text-sm font-bold text-[#3e484f] w-1/3">Kriter</th>
                <th className="p-4 lg:p-5 text-sm font-extrabold text-[#006689] bg-[#c3e8ff]/40 w-1/3 border-x border-[#006689]/15">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#006689]" />
                    <span>Hira Koltuk Yıkama Standartları</span>
                  </div>
                </th>
                <th className="p-4 lg:p-5 text-sm font-bold text-[#ba1a1a] w-1/3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#ba1a1a]" />
                    <span>Sıradan / Seyyar Yıkamacılar</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dee3e7]">
              {comparisonPoints.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#f5fafe] transition-colors">
                  <td className="p-4 lg:p-5 text-xs sm:text-sm font-bold text-[#171c1f]">
                    {item.feature}
                  </td>
                  <td className="p-4 lg:p-5 text-xs sm:text-sm text-[#001e2c] font-medium bg-[#c3e8ff]/15 border-x border-[#006689]/15">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#006c49] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item.hira}</span>
                    </div>
                  </td>
                  <td className="p-4 lg:p-5 text-xs sm:text-sm text-[#3e484f]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#ba1a1a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {comparisonPoints.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#eff4f8] border border-[#006689]/15 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#171c1f] uppercase tracking-wide">
                {item.feature}
              </span>
              <div className="p-3 rounded-xl bg-white border border-[#006c49]/20 flex items-start gap-2 text-xs text-[#171c1f] font-semibold">
                <Check className="w-4 h-4 text-[#006c49] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#006689] block mb-0.5">Hira:</strong>
                  {item.hira}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#ba1a1a]/20 flex items-start gap-2 text-xs text-[#3e484f]">
                <X className="w-4 h-4 text-[#ba1a1a] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#ba1a1a] block mb-0.5">Diğerleri:</strong>
                  {item.others}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
