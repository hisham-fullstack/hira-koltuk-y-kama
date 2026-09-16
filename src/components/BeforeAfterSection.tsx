import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Droplets, Check, AlertCircle, ShieldCheck } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="w-full bg-[#f5fafe] py-16 lg:py-24" id="oncesi-ve-sonrasi">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Slider Preview */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#006689] uppercase tracking-wider bg-[#c3e8ff]/60 px-3 py-1 rounded-full">
                  Gözle Görülür Fark
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171c1f] mt-2 tracking-tight">
                  Öncesi & Sonrası Karşılaştırması
                </h2>
              </div>
              <span className="text-xs bg-[#e4e9ed] text-[#171c1f] px-3 py-1.5 rounded-full font-semibold hidden sm:inline-block">
                Kaydırarak İnceleyin
              </span>
            </div>

            {/* Comparison Canvas */}
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-[#006689]/15"
            >
              {/* After (Clean) Image Layer - Full Background */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiHhJG73-syxP_YSMXPlLWeGrkFiouCVj3FT3WfvMTzn4CRGxhCsH-ZlNmM9_akdrAPTllM-AvSdY-3vn2ERSNLXTYGiPf8mahlAVnObAQ9oGrF1s1mbwVXthH9iLI9g-DjO9aVLKIPc9g718igIK-zra6zYtXReuJA9NPH16NHqUFpje2ELR9RlNc3JtmE_LZZmmjBhBD8cLYNaoR398HCa7ZEGT3gSjuGhN3kePfcbrr-UoZixo-"
                  alt="Hira Koltuk Temizliği Sonrası Tertemiz Kumaş"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-[#006c49] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Sonrası (Hira Hijyeni)</span>
                </div>
              </div>

              {/* Before (Dirty) Image Layer - Clipped width */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-[1000px] sm:w-[1200px] h-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCleql7j2XjTkD4AUktHZoEmPpQciVa3wRSQxWpa7ZLsb6RQO1ksMwmnouZp14b6dOFZZxIEHjuULvZQL3a8VHSrh6TDCKPIqLSmdwVJUL6Nh2ZQqiCOkFInzUUSnkmw_WOxToJR5FCeHHC6FUHqgW7FDZzXNOHfI2x3hNA6g7uBQ3f-qtEWksx7lV_4r9ABLVaFpUasMe5s_NCKCSlMP5KtL6Bp6DCz0iv1jJw3pFHYki4_eprHusG"
                    alt="Temizlik Öncesi Lekeli Koltuk Kumaşı"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#2c3134] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Öncesi (Lekeli & Kirli)</span>
                </div>
              </div>

              {/* Draggable Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#14afe8] cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#14afe8] text-white shadow-xl flex items-center justify-center border-2 border-white pointer-events-auto cursor-grab active:cursor-grabbing">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#3e484f] italic text-center">
              * Gerçek müşteri evinde yapılan kahve lekesi ve birikmiş kir ekstraksiyon işlemi.
            </p>
          </div>

          {/* Right Box: Dirty Water Tank Transparency */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-7 rounded-3xl shadow-lg border border-[#006689]/15 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#c3e8ff] flex items-center justify-center text-[#006689]">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#171c1f]">Kirli Su Haznesi Şeffaflığı</h3>
                  <span className="text-xs text-[#006689] font-bold">Gözlerinize İnanamayacaksınız</span>
                </div>
              </div>

              <p className="text-sm text-[#3e484f] leading-relaxed">
                Her işlem bitiminde endüstriyel makinemizin <strong className="text-[#171c1f]">şeffaf kirli su haznesini</strong> size gösteriyoruz. Temiz sandığınız kumaşın içinden çıkan siyah tortu ve mayt kalıntıları derin hijyenin en somut kanıtıdır.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#eff4f8] p-4 rounded-xl text-center border border-[#006689]/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#ba1a1a]">9 Milyon+</div>
                  <div className="text-xs text-[#3e484f] mt-1 font-medium">Ortalama Koltuk Maytı</div>
                </div>
                <div className="bg-[#eff4f8] p-4 rounded-xl text-center border border-[#006689]/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#006c49]">%99.8</div>
                  <div className="text-xs text-[#3e484f] mt-1 font-medium">Arındırma Oranı</div>
                </div>
              </div>

              <div className="bg-[#eff4f8] p-4 rounded-xl flex items-center gap-3 border border-[#006689]/10">
                <ShieldCheck className="w-6 h-6 text-[#006689] shrink-0" />
                <p className="text-xs text-[#171c1f] font-medium leading-normal">
                  Evinizde çocuk veya alerjik birey varsa yılda en az 2 kez profesyonel ekstraksiyon tavsiye edilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
