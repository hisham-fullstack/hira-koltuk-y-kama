import React, { useState } from 'react';
import { BURSA_DISTRICTS } from '../data/districtsData';
import { X, MapPin, Search, CheckCircle2, Phone } from 'lucide-react';

interface DistrictModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDistrict: (districtName: string) => void;
}

export const DistrictModal: React.FC<DistrictModalProps> = ({ isOpen, onClose, onSelectDistrict }) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredDistricts = BURSA_DISTRICTS.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#006689]/20 relative max-h-[85vh] flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#3e484f] hover:bg-[#eff4f8] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-3 py-1 rounded-full mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bursa Geneli Canlı Bölge Servis Durumu</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#171c1f]">
            İlçenizde Aktif Mobil Ekipler
          </h3>
          <p className="text-xs sm:text-sm text-[#3e484f] mt-1">
            Bursa'nın tüm 17 ilçesine servisimiz ücretsizdir. İlçenizi seçerek hemen tahmini varış süresini görün:
          </p>
        </div>

        {/* Search input */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 text-[#6e7980] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="İlçe adı yazın (örn: Nilüfer, Osmangazi, Mudanya, Yıldırım)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#f5fafe] rounded-xl border border-[#006689]/20 text-[#171c1f] focus:outline-none focus:ring-2 focus:ring-[#14afe8]"
          />
        </div>

        {/* Districts list */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-2">
          {filteredDistricts.map((dist) => (
            <div
              key={dist.name}
              onClick={() => {
                onSelectDistrict(dist.name);
                onClose();
              }}
              className="p-3.5 rounded-xl bg-[#eff4f8] hover:bg-[#c3e8ff]/50 border border-transparent hover:border-[#006689]/30 transition-all flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#006689] shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171c1f] group-hover:text-[#006689]">
                    {dist.name}
                  </h4>
                  <span className="text-[11px] text-[#3e484f]">Tahmini Varış: {dist.estimatedArrival}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#006c49] bg-[#6ffbbe] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006c49] animate-pulse"></span>
                  {dist.activeCrews} Ekip Aktif
                </span>
              </div>
            </div>
          ))}

          {filteredDistricts.length === 0 && (
            <div className="text-center py-8 text-xs text-[#3e484f]">
              İlçe bulunamadı. Lütfen yazımı kontrol ediniz.
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[#dee3e7] text-center">
          <p className="text-xs text-[#3e484f]">
            Acil servis talebi için doğrudan arayabilirsiniz:{' '}
            <a href="tel:08503080000" className="font-bold text-[#006689] underline">
              0850 308 00 00
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
