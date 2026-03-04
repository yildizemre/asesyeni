import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Bluetooth, Zap, Volume2, Check, Tag, X, Shield, Headphones, Battery, Settings } from 'lucide-react';

interface Product {
  name: string;
  brand: string;
  feature: string;
  icon: typeof Eye;
  description: string;
  specs: string[];
  price: string;
  color: string;
  image?: string;
  detailedSpecs: {
    technology: string[];
    battery: string[];
    connectivity: string[];
    comfort: string[];
  };
  warranty: string;
  included: string[];
}

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      name: 'Mojo',
      brand: 'Coselgi',
      feature: 'Neredeyse Görünmez',
      icon: Eye,
      description: 'Ultra küçük tasarımı ile gözlerden uzak, kulakta maksimum konfor. CIC (Completely In Canal) teknolojisi ile tamamen kulak kanalına yerleşen tasarım.',
      specs: ['CIC Teknoloji', '16 Kanal', '4 Program', 'Dijital Gürültü Azaltma'],
      price: 'Uygun Fiyat',
      color: 'from-blue-500 to-blue-600',
      image: '/mojo.png',
      detailedSpecs: {
        technology: [
          '16 kanal dijital sinyal işleme',
          'Adaptif yön mikrofonu',
          'Geri besleme önleme sistemi',
          'Otomatik ortam algılama'
        ],
        battery: [
          'Pil tipi: 10A',
          'Ortalama kullanım: 3-5 gün',
          'Kolay değiştirilebilir pil',
          'Düşük pil uyarısı'
        ],
        connectivity: [
          'Kablosuz aksesuar desteği',
          'Telefon adaptörü uyumlu',
          'TV bağlantı aparatı desteği'
        ],
        comfort: [
          'Özel kulak kalıbı ile tam uyum',
          'Hafif ve ergonomik tasarım',
          'IP57 su ve toz geçirmez',
          'Nem direnci'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Taşıma Kutusu', 'Temizlik Seti', 'Pil Paketi', 'Kullanım Kılavuzu']
    },
    {
      name: 'Audéo™ Paradise',
      brand: 'Phonak',
      feature: 'Bluetooth Uyumlu',
      icon: Bluetooth,
      description: 'Tüm cihazlarınıza kablosuz bağlantı, kristal netliğinde ses kalitesi. iOS ve Android uyumlu, çoklu cihaz bağlantısı.',
      specs: ['Bluetooth 5.0', 'Şarj Edilebilir', 'Su Geçirmez (IP68)', 'Akıllı Ses İşleme'],
      price: 'Premium Sınıf',
      color: 'from-emerald-500 to-emerald-600',
      image: '/packshot-phonak-audeo-p-rl-sreceiver-050-0773-p1-1920x1920.png',
      detailedSpecs: {
        technology: [
          'PRISM™ ses işleme platformu',
          'Motion Sensor Hearing',
          'StereoZoom 2.0 teknolojisi',
          'Dynamic Noise Cancellation'
        ],
        battery: [
          'Şarj edilebilir lityum-iyon pil',
          'Tam şarj süresi: 3 saat',
          'Kullanım süresi: 24+ saat',
          'Hızlı şarj: 30 dk = 6 saat kullanım'
        ],
        connectivity: [
          'Bluetooth 5.0 - iOS ve Android',
          '8 cihaza eşzamanlı bağlantı',
          'TV Connector uyumlu',
          'myPhonak uygulaması desteği'
        ],
        comfort: [
          'RIC (Receiver-In-Canal) tasarım',
          'IP68 su ve toz koruma',
          'Otomatik program değiştirme',
          'Konuşma netliği artırma'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Şarj Cihazı', 'Kulak Kalıpları', 'Temizlik Kiti', 'Taşıma Çantası', 'Kullanım Kılavuzu']
    },
    {
      name: 'Audéo Marvel – M-312',
      brand: 'Phonak',
      feature: 'Akıllı Bağlantı',
      icon: Bluetooth,
      description: 'Marvel teknolojisi ile üstün ses kalitesi. 312 pil ile uzun kullanım süresi. Otomatik ortam algılama ve uyum sağlama.',
      specs: ['Marvel Platform', '312 Pil', 'Bluetooth', 'AutoSense OS'],
      price: 'Orta Segment',
      color: 'from-teal-500 to-teal-600',
      detailedSpecs: {
        technology: [
          'AutoSense OS 3.0',
          'Binaural VoiceStream™',
          'RogerDirect™ desteği',
          'Ses tanıma teknolojisi'
        ],
        battery: [
          'Pil tipi: 312',
          'Ortalama kullanım: 5-7 gün',
          'Değiştirilebilir pil',
          'Pil göstergesi'
        ],
        connectivity: [
          'Bluetooth Classic',
          'iOS ve Android uyumlu',
          'TV Connector',
          'Çift telefon bağlantısı'
        ],
        comfort: [
          'RIC tasarım',
          'Hafif ve dayanıklı',
          'Nem dirençli',
          'Konforlu kubbe seçenekleri'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Pil Paketi', 'Kubbeler', 'Temizlik Seti', 'Kullanım Kılavuzu']
    },
    {
      name: 'More™ miniRITE R',
      brand: 'Oticon',
      feature: 'Derin Sinir Ağı',
      icon: Settings,
      description: 'Derin Sinir Ağı teknolojisi ile beyin dostu işitme. Şarj edilebilir miniRITE tasarım.',
      specs: ['Deep Neural Network', 'Şarj Edilebilir', 'MoreSound Intelligence', 'Bluetooth'],
      price: 'Premium Sınıf',
      color: 'from-sky-500 to-sky-600',
      detailedSpecs: {
        technology: [
          'Deep Neural Network (DNN)',
          'MoreSound Intelligence™',
          'MoreSound Amplifier™',
          'Polaris™ platform'
        ],
        battery: [
          'Li-ion şarj edilebilir',
          'Tam şarj: 3 saat',
          'Kullanım: 24 saat',
          'Hızlı şarj özelliği'
        ],
        connectivity: [
          'Bluetooth LE Audio',
          'iOS ve Android',
          'Oticon ON App',
          'Çift cihaz bağlantısı'
        ],
        comfort: [
          'miniRITE-R tasarım',
          'IP68 koruma',
          'Hafif ve konforlu',
          'Doğal ses deneyimi'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Şarj İstasyonu', 'Kubbeler', 'Temizlik Seti', 'Kullanım Kılavuzu']
    },
    {
      name: 'Real™ miniRITE R',
      brand: 'Oticon',
      feature: 'En Popüler Model',
      icon: Bluetooth,
      description: 'En çok tercih edilen model. RealSound teknolojisi, şarj edilebilir RIC tasarım.',
      specs: ['RealSound Technology', 'Şarj Edilebilir', 'miniRITE', 'Bluetooth 5.0'],
      price: 'Premium Sınıf',
      color: 'from-amber-500 to-amber-600',
      detailedSpecs: {
        technology: [
          'RealSound Technology',
          'Deep Neural Network 2.0',
          'MoreSound Intelligence',
          'Sudden Sound Stabilizer'
        ],
        battery: [
          'Li-ion şarj edilebilir',
          'Tam şarj: 3 saat',
          'Kullanım: 24 saat',
          'Hızlı şarj desteği'
        ],
        connectivity: [
          'Bluetooth 5.0 LE Audio',
          'iOS ve Android',
          'Oticon Companion App',
          'TV Adapter'
        ],
        comfort: [
          'miniRITE-R tasarım',
          'IP68 koruma',
          'Ultra hafif',
          'Doğal kulak deneyimi'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Şarj Cihazı', 'Kubbeler', 'Temizlik Kiti', 'USB Kablo', 'Kullanım Kılavuzu']
    },
    {
      name: 'ReSound ONE',
      brand: 'ReSound',
      feature: 'Doğal Ses Deneyimi',
      icon: Volume2,
      description: 'Kulak kanalınıza özel mikrofon yerleşimi ile en doğal ses. M&RIE (Microphone & Receiver-In-Ear) teknolojisi.',
      specs: ['M&RIE Teknoloji', 'Tinnitus Desteği', 'Akıllı Uygulama', '30 Saat Pil Ömrü'],
      price: 'Premium Sınıf',
      color: 'from-rose-500 to-rose-600',
      detailedSpecs: {
        technology: [
          'M&RIE mikrofon teknolojisi',
          'Ultra Focus yön mikrofonu',
          'All Access Directionality',
          'Organic Hearing™ deneyimi'
        ],
        battery: [
          'Şarj edilebilir lityum-iyon',
          'Tam şarj: 3 saat',
          'Kullanım: 30 saat',
          'Taşınabilir şarj kutusu dahil'
        ],
        connectivity: [
          'Bluetooth Low Energy',
          'iPhone ve Android uyumlu',
          'ReSound Smart 3D uygulaması',
          'Doğrudan ses akışı'
        ],
        comfort: [
          'Kulağa özel ses deneyimi',
          'Tinnitus rahatlatma özellikleri',
          'IP68 koruma standardı',
          'Ultra hafif RIC tasarım'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Premium Şarj İstasyonu', 'Yedek Kubbeler', 'Kurutma Kiti', 'Kullanım Kılavuzu']
    },
    {
      name: 'Signia Silk X',
      brand: 'Signia',
      feature: 'Anında Kullanım',
      icon: Zap,
      description: 'Özel ölçü almadan hemen kullanmaya başlayın, tam uyum garantisi. Click Sleeve teknolojisi ile anında takılıp çıkarılabilir.',
      specs: ['Click Sleeve', 'Anında Kullanım', 'Bluetooth Bağlantı', 'Kompakt Tasarım'],
      price: 'Ekonomik',
      color: 'from-cyan-500 to-cyan-600',
      detailedSpecs: {
        technology: [
          'Xperience chip platformu',
          'Akustik-Hareket sensörleri',
          'Doğal ses işleme',
          'Otomatik uyum ayarlama'
        ],
        battery: [
          'Pil tipi: 312',
          'Ortalama kullanım: 4-6 gün',
          'Pil değiştirme kolaylığı',
          'Düşük pil göstergesi'
        ],
        connectivity: [
          'Bluetooth LE Audio',
          'iOS ve Android uyumlu',
          'Signia App kontrolü',
          'StreamLine TV desteği'
        ],
        comfort: [
          'Click Sleeve™ anında uyum',
          'Ölçüye gerek yok',
          'Hafif CIC tasarım',
          'IP68 su ve toz koruması'
        ]
      },
      warranty: '2 Yıl Garanti',
      included: ['İşitme Cihazı', 'Click Sleeve Setleri', 'Pil Paketi', 'Temizlik Fırçası', 'Taşıma Kutusu']
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="products" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Öne Çıkan <span className="text-white">Ürünlerimiz</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dünya lideri markalardan seçtiğimiz en popüler işitme cihazları
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-slate-800 rounded-3xl p-8 md:p-12 hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${product.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                              <Icon size={18} />
                              <span>{product.feature}</span>
                            </div>
                            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                              <Tag size={16} />
                              <span>{product.price}</span>
                            </div>
                          </div>

                          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                            {product.name}
                          </h3>
                          <p className="text-lg sm:text-xl text-gray-400 font-semibold mb-4 sm:mb-6">{product.brand}</p>
                          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                            {product.description}
                          </p>

                          <div className="mb-6 sm:mb-8">
                            <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Öne Çıkan Özellikler</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {product.specs.map((spec, idx) => (
                                <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-300">
                                  <Check className="text-[#003366] mr-2 flex-shrink-0" size={16} />
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            onClick={() => openModal(product)}
                            className="bg-gradient-to-r from-[#003366] to-[#004488] hover:from-[#004488] hover:to-[#005599] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all hover:scale-105 shadow-lg"
                          >
                            Detaylı Bilgi Al
                          </button>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform`}>
                            <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain relative z-10 filter drop-shadow-2xl"
                              />
                            ) : (
                              <div className="text-white text-6xl sm:text-7xl md:text-9xl filter drop-shadow-2xl relative z-10">🎧</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all"
          >
            <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all"
          >
            <ChevronRight size={20} className="sm:w-7 sm:h-7" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#003366] w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative bg-gradient-to-r ${selectedProduct.color} text-white p-6 md:p-8 rounded-t-3xl`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-32 h-32 object-contain"
                  />
                ) : (
                  <div className="text-6xl">🎧</div>
                )}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-1">{selectedProduct.name}</h3>
                  <p className="text-lg opacity-90">{selectedProduct.brand}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield size={18} />
                  <span className="text-sm font-semibold">{selectedProduct.warranty}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Tag size={18} />
                  <span className="text-sm font-semibold">{selectedProduct.price}</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 text-slate-800">
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="bg-blue-50 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Settings className="text-blue-600" size={20} />
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">Teknoloji</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedProduct.detailedSpecs.technology.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <Check className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Battery className="text-green-600" size={20} />
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">Pil ve Şarj</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedProduct.detailedSpecs.battery.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <Check className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Bluetooth className="text-purple-600" size={20} />
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">Bağlantı</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedProduct.detailedSpecs.connectivity.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <Check className="text-purple-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Headphones className="text-[#003366]" size={20} />
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800">Konfor</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedProduct.detailedSpecs.comfort.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <Check className="text-[#003366] mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4 sm:p-6 mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Paket İçeriği</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                  {selectedProduct.included.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white rounded-lg px-3 sm:px-4 py-2">
                      <Check className="text-[#003366] flex-shrink-0" size={16} />
                      <span className="text-xs sm:text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="flex-1 text-center bg-gradient-to-r from-[#003366] to-[#004488] hover:from-[#004488] hover:to-[#005599] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Ücretsiz Danışmanlık Al
                </a>
                <a
                  href="tel:+902626530353"
                  onClick={closeModal}
                  className="flex-1 text-center bg-slate-200 hover:bg-slate-300 text-slate-800 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
