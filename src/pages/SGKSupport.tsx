import { Phone, FileText, ClipboardCheck, Calendar, ArrowLeft } from 'lucide-react';

export default function SGKSupport() {
  const ageGroups = [
    {
      age: '0 - 4 Yaş',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      working: '7.725,33 ₺',
      retired: '9.156,60 ₺',
    },
    {
      age: '5 - 12 Yaş',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      working: '6.511,40 ₺',
      retired: '10.539,26 ₺',
    },
    {
      age: '13 - 18 Yaş',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      working: '6.104,45 ₺',
      retired: '7.630,56 ₺',
    },
    {
      age: '18+ Yaş',
      color: 'bg-[#003366]',
      hoverColor: 'hover:bg-[#004488]',
      working: '4.069,63 ₺',
      retired: '5.087,04 ₺',
    },
  ];

  const requiredDocuments = [
    'Kulak Burun Boğaz Uzmanı Reçetesi',
    'Odyoloji Raporu (İşitme Testi Sonuçları)',
    'SGK Provizyon Onayı',
    'Nüfus Cüzdanı Fotokopisi',
    'Vesikalık Fotoğraf (2 Adet)',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-[#003366] to-[#0055AA] text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <a
            href="#/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Ana Sayfaya Dön</span>
          </a>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                İŞİTME CİHAZLARINDA
                <br />
                <span className="text-[#E91E63]">SGK DESTEĞİ</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6">
                SGK sigortalıları işitme cihazı alımlarında devlet desteğinden yararlanabilir
              </p>
              <a
                href="tel:+905013212774"
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-white text-[#003366] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone size={20} className="flex-shrink-0" />
                <span className="whitespace-nowrap">DESTEK HATTI: 0501 321 27 74</span>
              </a>
            </div>

            <div className="flex-shrink-0">
              <img
                src="/packshot-phonak-audeo-p-rl-sreceiver-050-0773-p1-1920x1920.png"
                alt="İşitme Cihazı"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Yaş Gruplarına Göre SGK Destek Miktarları
          </h2>
          <p className="text-gray-600 text-lg">
            2024 yılı için güncel SGK ödeme tutarları
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${group.color} ${group.hoverColor} transition-colors p-4 sm:p-6 text-white text-center`}>
                <h3 className="text-xl sm:text-2xl font-bold">{group.age}</h3>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="border-b border-gray-200 pb-3 sm:pb-4">
                  <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Çalışan</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">{group.working}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Emekli</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">{group.retired}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
            <FileText size={28} className="text-[#E91E63] flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              SGK Desteğinden Yararlanmak İçin Gerekli Belgeler
            </h2>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {requiredDocuments.map((doc, index) => (
              <li
                key={index}
                className="flex items-start space-x-2 sm:space-x-3 text-gray-700 text-sm sm:text-base md:text-lg"
              >
                <ClipboardCheck size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#003366] to-[#0055AA] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Detaylı Bilgi ve Size Özel Ödeme Planı
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
            Uzman kadromuz size en uygun ödeme planını oluşturmak ve SGK sürecinizde
            yardımcı olmak için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <a
              href="tel:+905013212774"
              className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-[#003366] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone size={20} className="flex-shrink-0" />
              <span>Hemen Arayın</span>
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-[#E91E63] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-[#C2185B] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Calendar size={20} className="flex-shrink-0" />
              <span>Randevu Alın</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
