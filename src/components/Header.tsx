import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, Headphones, Star, Package, HelpCircle, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDevicesDropdownOpen, setIsDevicesDropdownOpen] = useState(false);
  const [isMobileDevicesOpen, setIsMobileDevicesOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { label: 'Ana Sayfa', href: '#home' },
    { label: 'Hizmetlerimiz', href: '#services' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'İletişim', href: '#contact' },
  ];

  const megaMenuData = [
    {
      title: 'İşitme Cihazı Türleri',
      icon: Headphones,
      links: [
        { label: 'Kulak Arkası', href: '#products?type=bte' },
        { label: 'Kulak İçi', href: '#products?type=ite' },
        { label: 'Şarj Edilebilir Cihazlar', href: '#products?type=rechargeable' },
        { label: 'Görünmez Cihazlar', href: '#products?type=invisible' },
      ]
    },
    {
      title: 'Markalar',
      icon: Star,
      links: [
        { label: 'Oticon', href: '#products?brand=oticon' },
        { label: 'Phonak', href: '#products?brand=phonak' },
        { label: 'Signia', href: '#products?brand=signia' },
        { label: 'Widex', href: '#products?brand=widex' },
      ]
    },
    {
      title: 'Aksesuarlar',
      icon: Package,
      links: [
        { label: 'İşitme Cihazı Pilleri', href: '#accessories?type=batteries' },
        { label: 'Temizlik Kitleri', href: '#accessories?type=cleaning' },
        { label: 'TV Adaptörleri', href: '#accessories?type=tv-adapter' },
        { label: 'Yedek Parçalar', href: '#accessories?type=spare-parts' },
      ]
    },
    {
      title: 'Bilgi & Destek',
      icon: HelpCircle,
      links: [
        { label: 'SGK Ödemesi ve Desteği', href: '#/sgk-support' },
        { label: 'İşitme Testi Randevusu', href: '#appointment' },
        { label: 'Sıkça Sorulan Sorular', href: '#faq' },
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-b from-white/70 to-white/40 backdrop-blur-md py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="/logo-darica-ases.png"
              alt="Darıca Ases"
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'h-10' : 'h-12'
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-bold text-black hover:text-[#003366] transition-all duration-200 hover:scale-110"
              >
                {item.label}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setIsDevicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = window.setTimeout(() => {
                  setIsDevicesDropdownOpen(false);
                }, 500);
              }}
            >
              <button className="font-bold text-black hover:text-[#003366] transition-all duration-200 hover:scale-110 flex items-center space-x-1">
                <span>Ürünlerimiz</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDevicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDevicesDropdownOpen && (
                <div className="fixed left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-100 transition-opacity duration-300 ease-in-out opacity-0 animate-fadeIn">
                  <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {megaMenuData.map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <div key={section.title} className="space-y-4">
                            <div className="flex items-center space-x-3 mb-4">
                              <IconComponent size={24} className="text-[#E91E63]" />
                              <h3 className="text-lg font-bold text-[#E91E63]">{section.title}</h3>
                            </div>
                            <ul className="space-y-3">
                              {section.links.map((link) => (
                                <li key={link.label}>
                                  <a
                                    href={link.href}
                                    className="text-gray-700 hover:text-[#E91E63] hover:translate-x-1 transition-all duration-200 block font-medium"
                                  >
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/daricaasesisitme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#1877F2] transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/daricaasesisitme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#E4405F] transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/daricaases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#1DA1F2] transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>

            <div className="h-8 w-px bg-gray-300"></div>

            <a
              href="tel:+905013212774"
              className="flex items-center space-x-2 text-black font-bold hover:text-[#003366] transition-all duration-200 hover:scale-105"
            >
              <Phone size={18} />
              <span className="text-sm">0501 321 27 74</span>
            </a>
            <a
              href="#appointment"
              className="flex items-center space-x-2 bg-[#003366] text-white px-6 py-2.5 rounded-full hover:bg-[#004488] transition-all duration-200 hover:scale-105 shadow-lg font-bold"
            >
              <Calendar size={18} />
              <span>Randevu Al</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-black font-bold transition-colors hover:text-[#003366]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg mt-2 py-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black font-bold hover:text-[#003366] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div>
              <button
                onClick={() => setIsMobileDevicesOpen(!isMobileDevicesOpen)}
                className="text-black font-bold hover:text-[#003366] transition-colors py-2 flex items-center justify-between w-full"
              >
                <span>Ürünlerimiz</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileDevicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileDevicesOpen && (
                <div className="mt-4 space-y-6 animate-fadeIn">
                  {megaMenuData.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <div key={section.title} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <IconComponent size={20} className="text-[#E91E63]" />
                          <h4 className="font-bold text-[#E91E63]">{section.title}</h4>
                        </div>
                        <div className="ml-4 space-y-2">
                          {section.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="block text-gray-700 font-medium hover:text-[#E91E63] transition-colors py-2 pl-4 border-l-2 border-gray-200 hover:border-[#E91E63]"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileDevicesOpen(false);
                              }}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 py-3 border-t border-gray-200 mt-2 pt-4">
              <a
                href="https://www.facebook.com/daricaasesisitme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#1877F2] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/daricaasesisitme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#E4405F] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/daricaases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#1DA1F2] transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={22} strokeWidth={1.5} />
              </a>
            </div>

            <a
              href="tel:+905013212774"
              className="flex items-center space-x-2 text-black font-bold hover:text-[#003366] py-2"
            >
              <Phone size={18} />
              <span>0501 321 27 74</span>
            </a>
            <a
              href="#appointment"
              className="flex items-center justify-center space-x-2 bg-[#003366] text-white px-6 py-3 rounded-full hover:bg-[#004488] transition-all font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar size={18} />
              <span>Randevu Al</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
