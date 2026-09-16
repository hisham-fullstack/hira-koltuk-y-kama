import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, Zap, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hizmetlerimiz', href: '#hizmetlerimiz' },
    { label: 'Neden Biz?', href: '#neden-biz' },
    { label: 'Fiyat Hesapla', href: '#fiyat-hesapla' },
    { label: 'Öncesi & Sonrası', href: '#oncesi-ve-sonrasi' },
    { label: 'Müşteri Yorumları', href: '#musteri-yorumlari' },
    { label: 'Sıkça Sorulanlar', href: '#sikca-sorulanlar' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#495f82] text-white hidden lg:block text-xs font-semibold">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#6ffbbe]">
              <Zap className="w-3.5 h-3.5 fill-[#6ffbbe]" />
              <span className="text-[#f5fafe]">Aynı Gün Ücretsiz Keşif & Servis</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span className="text-[#f5fafe]">Puan: 4.9/5 ★ (1.850+ Gerçek Müşteri Yorumu)</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="tel:08503080000" 
              className="flex items-center gap-1.5 text-[#f5fafe] hover:text-[#79d1ff] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hemen Ara: 0850 308 00 00</span>
            </a>
            <span className="text-[#bdc8d0]/60">|</span>
            <a 
              href="https://wa.me/908503080000?text=Merhaba,%20koltuk%20yikama%20hakkinda%20bilgi%20ve%20fiyat%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#6ffbbe] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Hızlı Destek</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 border-b border-[#006689]/10 ${
        scrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#006689] to-[#14afe8] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[24px]">cleaning_services</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#006689] tracking-tight leading-none">HİRA</span>
              <span className="text-[11px] font-bold text-[#495f82] uppercase tracking-wider mt-0.5">Koltuk Yıkama</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-[#3e484f] hover:text-[#006689] hover:bg-[#eff4f8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 bg-[#14afe8] hover:bg-[#006689] text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              <span>Hemen Fiyat Al & Randevu Oluştur</span>
            </button>

            <a
              href="tel:08503080000"
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#006689] text-white shadow-sm"
              title="Hemen Ara"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#3e484f] hover:bg-[#eff4f8] transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-[#dee3e7] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-semibold text-[#171c1f] hover:bg-[#eff4f8] hover:text-[#006689] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[#dee3e7] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#14afe8] hover:bg-[#006689] text-white font-bold text-center py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  <span>Fiyat Hesapla & Randevu Al</span>
                </button>
                <div className="flex items-center justify-between text-xs text-[#3e484f] px-1 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#006c49]" /> 12 Yıllık Kurumsal Güvence
                  </span>
                  <a href="tel:08503080000" className="font-bold text-[#006689]">
                    0850 308 00 00
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
