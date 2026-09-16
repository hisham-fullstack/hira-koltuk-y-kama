import React, { useState, useMemo } from 'react';
import { ALL_SERVICES } from '../data/servicesData';
import { ServiceItem, ServiceCategory } from '../types';
import { Search, ArrowRight, Check } from 'lucide-react';

interface ServicesShowcaseProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((srv) => {
      const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
      const matchesSearch =
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: 'all' as ServiceCategory, label: 'Tümü (20 Hizmet)' },
    { id: 'ev' as ServiceCategory, label: 'Ev Hizmetleri (7)' },
    { id: 'ozel' as ServiceCategory, label: 'Özel Kumaş & Hassas (6)' },
    { id: 'kurumsal' as ServiceCategory, label: 'Kurumsal & Ticari (7)' },
  ];

  const getIconColorBg = (cat: 'ev' | 'ozel' | 'kurumsal') => {
    switch (cat) {
      case 'ev':
        return 'bg-[#c3e8ff] text-[#006689]';
      case 'ozel':
        return 'bg-[#6ffbbe] text-[#006c49]';
      case 'kurumsal':
        return 'bg-[#d5e3ff] text-[#004c68]';
      default:
        return 'bg-[#c3e8ff] text-[#006689]';
    }
  };

  return (
    <section className="w-full bg-[#f5fafe] py-16 lg:py-24" id="hizmetlerimiz">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#006689] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[18px]">cleaning_services</span>
              <span>Tüm Hijyen Çözümlerimiz (20 Hizmet)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171c1f] tracking-tight">
              Kumaş ve Mekana Özel Profesyonel Hizmet Yelpazesi
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#3e484f] max-w-md">
            Evinizden iş yerinize, hassas kadifeden sinema salonlarına kadar yüksek basınçlı ve antibakteriyel derinlemesine bakım.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#006689] text-white shadow-sm'
                    : 'bg-white text-[#3e484f] hover:bg-[#eff4f8] border border-[#006689]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#3e484f] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Hizmet ara (örn: kadife, yatak)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white rounded-full border border-[#006689]/15 text-[#171c1f] placeholder:text-[#6e7980] focus:outline-none focus:ring-2 focus:ring-[#14afe8]"
            />
          </div>
        </div>

        {/* Service Cards Grid (All 20 services rendered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-[#006689]/10 hover:border-[#006689]/30 group"
            >
              <div className="flex flex-col gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColorBg(service.category)} group-hover:scale-105 transition-transform`}>
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171c1f] group-hover:text-[#006689] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3e484f] leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#dee3e7]/60 flex items-center justify-between">
                <span className="text-xs font-bold text-[#006689] bg-[#c3e8ff]/50 px-2.5 py-1 rounded-full">
                  {service.badge}
                </span>
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-[#006689] hover:text-[#004c68] flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Detay & Fiyat</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#dee3e7]">
            <p className="text-sm text-[#3e484f]">Aramanızla eşleşen hizmet bulunamadı.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#006689] underline"
            >
              Tüm hizmetleri görüntüle
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
