import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Ana Sayfa', href: '#home' },
    { label: 'Hizmetlerimiz', href: '#services' },
    { label: 'Cihazlar', href: '#products' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'İletişim', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Darıca Ases Logo"
                className="h-16 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              İşitme sağlığınız için en doğru çözümler. Her bireyin yaşam kalitesini artırmak için buradayız.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#003366] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#003366] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">İletişim</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Fevziçakmak+mah,+Dr.+Zeki+Acar+Cd.+No:75+D:2B,+41400+Darıca/Kocaeli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-[#003366] transition-colors"
                >
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <span>Fevziçakmak mah, Dr. Zeki Acar Cd. No:75 D:2B, 41400 Darıca/Kocaeli</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+905013212774"
                  className="flex items-center space-x-3 text-gray-400 hover:text-[#003366] transition-colors"
                >
                  <Phone size={20} />
                  <span>0501 321 27 74</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:daricaasesisitme@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-[#003366] transition-colors"
                >
                  <Mail size={20} />
                  <span>daricaasesisitme@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-white">Hafta İçi</p>
                  <p>09:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-white">Cumartesi</p>
                  <p>09:00 - 16:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-white">Pazar</p>
                  <p>Kapalı</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Darıca Ases. Tüm hakları saklıdır.</p>
            <p className="mt-2 md:mt-0">
              Tasarım:{' '}
              <a href="#" className="text-[#003366] hover:text-[#004488]">
                Ad Maxima
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
