import { Quote, Award, Heart, Users, GraduationCap, Star, CheckCircle } from 'lucide-react';

export default function Expert() {
  const achievements = [
    { icon: Award, text: '7 Yıllık Deneyim', color: 'from-amber-500 to-orange-500' },
    { icon: Heart, text: '5000+ Mutlu Hasta', color: 'from-rose-500 to-pink-500' },
    { icon: GraduationCap, text: 'Uzman Kadro', color: 'from-blue-500 to-indigo-500' },
    { icon: Star, text: '%100 Memnuniyet', color: 'from-[#003366] to-[#004488]' },
  ];

  const qualifications = [
    'Dispanser Kulak Teknisyeni (DKT)',
    'İşitme Cihazı Uygulamaları Uzmanı',
    '7 Yıllık Klinik Deneyim',
    'Uluslararası Sertifikalar',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-[#003366] px-4 py-2 rounded-full text-sm font-semibold">
              UZMAN KADROMUZ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            <span className="text-[#003366]">Uzmanlarımız</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <div className="relative px-4 sm:px-8 lg:px-0">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#003366] via-[#004488] to-blue-600 p-1 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-3xl relative overflow-hidden">
                  <img
                    src="/kadro.png"
                    alt="Uzman Ekibimiz"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 sm:p-6">
                    <p className="text-lg sm:text-xl font-bold text-white">Ases Ekip</p>
                    <p className="text-xs sm:text-sm text-blue-300">DKT Esma Gündöner & DKT Asiye Tuncer Ketenci</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-gradient-to-br from-[#003366] to-[#004488] text-white p-6 rounded-2xl shadow-2xl max-w-xs">
                <Quote className="mb-2 text-blue-200" size={24} />
                <p className="text-sm italic leading-relaxed">
                  "Amacımız, teknolojiyi uzmanlıkla birleştirerek her hastamız için en doğru işitme çözümünü bulmaktır."
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-[#003366]">DKT Esma Gündöner</strong> ve <strong className="text-[#003366]">DKT Asiye Tuncer Ketenci</strong>, işitme sağlığı alanında uzman Dispanser Kulak Teknisyenleri olarak 7 yıllık deneyime sahiptir. İşitme kaybı yaşayan her bireyin yaşam kalitesini artırmayı misyon edinmişlerdir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Her hastaya özel, bütünsel bir yaklaşım benimseyen uzman ekibimiz, en son teknolojileri hastalarının ihtiyaçlarıyla harmanlayarak en etkili çözümleri sunar. Empati, profesyonellik ve sürekli gelişim çalışma prensiplerinin temelini oluşturur.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                  <GraduationCap className="mr-2 text-[#003366]" size={24} />
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#003366] mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {achievement.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
