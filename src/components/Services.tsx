import { Ear, Baby, Shield, ArrowRight, Stethoscope, Settings, Headphones, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Ear,
      title: 'İleri Teknoloji İşitme Cihazları',
      description: 'En son teknolojiye sahip, kişiye özel programlanabilen işitme cihazları ile günlük yaşamınızı kolaylaştırın.',
      features: ['Bluetooth Bağlantı', 'Şarj Edilebilir', 'Su Geçirmez', 'Görünmez Tasarım'],
      link: '#products',
      linkText: 'Cihazları Keşfet',
      gradient: 'from-[#003366] to-[#004488]',
    },
    {
      icon: Stethoscope,
      title: 'Ücretsiz İşitme Testleri',
      description: 'Uzman kadromuz ile kapsamlı işitme testleri ve değerlendirmeleri. Odyometrik ölçümler ve detaylı analizler.',
      features: ['Tam Odyometri', 'Timpanometri', 'Konuşma Testleri', 'Ücretsiz Danışmanlık'],
      link: '#appointment',
      linkText: 'Hemen Randevu Al',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Baby,
      title: 'Pediatrik İşitme Çözümleri',
      description: 'Çocuklarınız için özel olarak tasarlanmış, güvenli ve etkili işitme çözümleri ile onların gelişimini destekleyin.',
      features: ['Özel Çocuk Cihazları', 'Renkli Tasarımlar', 'Dayanıklı Yapı', 'Aile Desteği'],
      link: '#appointment',
      linkText: 'Detaylı Bilgi Al',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Settings,
      title: 'Cihaz Bakım ve Ayarlama',
      description: 'İşitme cihazınızın düzenli bakımı, temizliği ve profesyonel ayarlamaları ile maksimum performans.',
      features: ['Ücretsiz Ayar', 'Temizlik Servisi', 'Yazılım Güncellemeleri', 'Teknik Destek'],
      link: '#contact',
      linkText: 'Servis Bilgisi',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Kişiye Özel Kulak Tıkaçları',
      description: 'Gürültüden korunma, yüzme veya uyku için özel olarak tasarlanmış, maksimum konfor sağlayan kulak tıkaçları.',
      features: ['Kişiye Özel Kalıp', 'Farklı Renkler', 'Yüzme/Uyku/Gürültü', 'Uzun Ömürlü'],
      link: '#appointment',
      linkText: 'Tıkaçları İncele',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: Headphones,
      title: 'İşitme Aksesuarları',
      description: 'TV adaptörleri, uzaktan kumandalar ve diğer aksesuarlar ile işitme deneyiminizi zenginleştirin.',
      features: ['TV Bağlantı Kiti', 'Uzaktan Kumanda', 'Şarj Üniteleri', 'Bakım Malzemeleri'],
      link: '#products',
      linkText: 'Aksesuarları Gör',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-[#003366] px-4 py-2 rounded-full text-sm font-semibold">
              HİZMETLERİMİZ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Size Nasıl <span className="text-[#003366]">Yardımcı Olabiliriz?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İşitme sağlığınız için kapsamlı ve profesyonel çözümler sunuyoruz. Her adımda yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="text-[#003366] mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-[#003366] font-semibold hover:text-[#004488] transition-all group-hover:translate-x-2"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
