import { Eye, Wifi, Battery, DollarSign } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: Eye,
      title: 'Görünmez Konfor',
      description: 'Şaşırtıcı derecede küçük ve estetik tasarımlar. Kimse işitme cihazınızı fark etmez, siz de doğal bir konfor yaşarsınız.',
    },
    {
      icon: Wifi,
      title: 'Akıllı Bağlantı',
      description: 'Bluetooth teknolojisi ile akıllı telefonunuza, TV\'nize ve diğer cihazlarınıza doğrudan bağlanın. Müziği, aramaları ve daha fazlasını doğrudan cihazınızdan dinleyin.',
    },
    {
      icon: Battery,
      title: 'Kesintisiz Enerji',
      description: 'Uzun ömürlü piller ve hızlı şarj teknolojisi ile gün boyu kesintisiz kullanım. Şık şarj üniteleri sayesinde cihazlarınız her zaman hazır.',
    },
    {
      icon: DollarSign,
      title: 'Bütçe Dostu Çözümler',
      description: 'Premium kaliteden ekonomik seçeneklere kadar geniş bir yelpaze. Her bütçeye uygun, işitme sağlığınızdan ödün vermeden çözümler sunuyoruz.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Neden Darıca <span className="text-[#003366]">Ases</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern teknoloji ve uzman bakımı bir arada. İşitme deneyiminizi yeniden tanımlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#004488] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
