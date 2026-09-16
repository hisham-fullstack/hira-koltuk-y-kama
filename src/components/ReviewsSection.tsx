import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'koltuk' | 'yatak' | 'kurumsal'>('all');

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'koltuk') return r.service.toLowerCase().includes('koltuk');
    if (filter === 'yatak') return r.service.toLowerCase().includes('yatak');
    if (filter === 'kurumsal') return r.service.toLowerCase().includes('cafe') || r.service.toLowerCase().includes('halıflex');
    return true;
  });

  return (
    <section className="w-full bg-[#f5fafe] py-16 lg:py-24" id="musteri-yorumlari">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#006689] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Gerçek Müşteri Deneyimleri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171c1f] tracking-tight">
              18.500+ Aile Koltuklarını Bize Emanet Etti
            </h2>
          </div>

          {/* Google Review Badge */}
          <div className="bg-white px-5 py-3 rounded-2xl shadow-xs border border-[#006689]/10 flex items-center gap-3.5 self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-sm font-black text-[#171c1f] ml-1">4.9 / 5.0</span>
              </div>
              <div className="text-xs text-[#3e484f] font-medium">1.850+ Doğrulanmış Google Yorumu</div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#006689] text-white'
                : 'bg-white text-[#3e484f] border border-[#006689]/15 hover:bg-[#eff4f8]'
            }`}
          >
            Tüm Yorumlar
          </button>
          <button
            onClick={() => setFilter('koltuk')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'koltuk'
                ? 'bg-[#006689] text-white'
                : 'bg-white text-[#3e484f] border border-[#006689]/15 hover:bg-[#eff4f8]'
            }`}
          >
            Koltuk Yıkama
          </button>
          <button
            onClick={() => setFilter('yatak')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'yatak'
                ? 'bg-[#006689] text-white'
                : 'bg-white text-[#3e484f] border border-[#006689]/15 hover:bg-[#eff4f8]'
            }`}
          >
            Yatak & Hijyen
          </button>
          <button
            onClick={() => setFilter('kurumsal')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              filter === 'kurumsal'
                ? 'bg-[#006689] text-white'
                : 'bg-white text-[#3e484f] border border-[#006689]/15 hover:bg-[#eff4f8]'
            }`}
          >
            Kurumsal & Cafe
          </button>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow border border-[#006689]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm ${review.colorClass}`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#171c1f]">{review.name}</h4>
                      <span className="text-[11px] text-[#6e7980]">{review.location}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#6e7980]">{review.timeAgo}</span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#dee3e7]/60 flex items-center justify-between text-xs">
                <span className="bg-[#eff4f8] text-[#006689] font-semibold px-2.5 py-1 rounded-lg">
                  {review.service}
                </span>
                <span className="flex items-center gap-1 text-[#006c49] font-medium text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Doğrulanmış Müşteri
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
