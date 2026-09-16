import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#006689]/10" id="sikca-sorulanlar">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-3 py-1 rounded-full">
            Merak Edilenler
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171c1f] mt-3 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm sm:text-base text-[#3e484f] mt-2">
            Aklınıza takılan tüm soruların net, dürüst ve şeffaf cevapları.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#006689] bg-[#f5fafe] shadow-xs'
                    : 'border-[#dee3e7] bg-white hover:border-[#006689]/40'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#171c1f]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#006689] text-white' : 'bg-[#eff4f8] text-[#3e484f]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#3e484f] leading-relaxed border-t border-[#006689]/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Quick Ask Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-[#eff4f8] border border-[#006689]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#6ffbbe] text-[#006c49] flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#171c1f]">Başka bir sorunuz veya özel durumunuz mu var?</h4>
              <p className="text-xs text-[#3e484f]">Uzman ekibimiz 7/24 WhatsApp hattında sorularınızı bekliyor.</p>
            </div>
          </div>
          <a
            href="https://wa.me/908503080000?text=Merhaba,%20koltuk%20yikama%20hakkinda%20bir%20sorum%20var:"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#006c49] hover:bg-[#005236] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-sm transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp'tan Sor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
