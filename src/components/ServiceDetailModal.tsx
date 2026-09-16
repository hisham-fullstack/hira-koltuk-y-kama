import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Clock, Sparkles, Phone, MessageCircle } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

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

        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-[#c3e8ff] text-[#006689] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[30px]">{service.icon}</span>
          </div>
          <div>
            <span className="text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-2.5 py-0.5 rounded-full">
              {service.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#171c1f] mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#3e484f] leading-relaxed mb-5">
          {service.longDesc}
        </p>

        {/* Feature checks */}
        <div className="bg-[#eff4f8] rounded-2xl p-4 mb-6 border border-[#006689]/10">
          <h4 className="text-xs font-bold text-[#171c1f] uppercase tracking-wider mb-3">
            Hizmet Standartları & Özellikler
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#171c1f]">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#006c49] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Details and pricing bar */}
        <div className="flex items-center justify-between py-3 border-y border-[#dee3e7] mb-6">
          <div className="flex items-center gap-2 text-xs text-[#3e484f]">
            <Clock className="w-4 h-4 text-[#006689]" />
            <span>Ortalama Süre: <strong>{service.duration}</strong></span>
          </div>
          <div>
            <div className="text-[11px] text-[#3e484f] text-right">Başlangıç:</div>
            <div className="text-lg font-black text-[#006689]">{service.priceFormatted}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onBook(service.id);
            }}
            className="w-full bg-[#006689] hover:bg-[#004c68] text-white font-bold py-3.5 px-5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Bu Hizmet İçin Randevu Al</span>
          </button>

          <a
            href={`https://wa.me/908503080000?text=${encodeURIComponent(`Merhaba, ${service.title} hizmeti için bilgi ve randevu almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#006c49] hover:bg-[#005236] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
