import { useState, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HeroContent {
  title: string;
  subtitle: string;
  cta_text: string;
  background_image: string;
  background_video?: string;
}

export default function Hero() {
  const [content, setContent] = useState<HeroContent>({
    title: 'Darıca Ases İşitme Cihazları ile Ritmi Yakala',
    subtitle: 'Seslerin eşsiz ahengiyle hayat tam da olması gerektiği gibi.\n\nSizlere son teknoloji işitme cihazlarımız ve profesyonel ekibimizle kusursuz bir işitme deneyimi yaşatabilmek için buradayız.',
    cta_text: 'Ücretsiz Randevu Alın',
    background_image: '/arkaplan.jpg'
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const { data } = await supabase
      .from('hero_content')
      .select('*')
      .maybeSingle();

    if (data) {
      setContent(data);
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {content.background_video ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={(e) => {
              const video = e.target as HTMLVideoElement;
              video.play().catch(console.error);
            }}
          >
            <source src={content.background_video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 via-white/20 to-[#003366]/20" />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(135deg,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(255, 255, 255, 0.85) 30%,
                rgba(255, 255, 255, 0.5) 60%,
                rgba(0, 51, 102, 0.3) 100%
              ),
              url(${content.background_image})
            `
          }}
        />
      )}

      <div className="relative z-20 w-full py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight animate-fadeInUp tracking-tight">
              <span className="font-light text-white">
                {content.title.split('ile')[0]}
              </span>
              <span className="block font-semibold text-[#003366] mt-1 sm:mt-2">
                ile Ritmi Yakala
              </span>
            </h1>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light">
                Seslerin eşsiz ahengiyle hayat tam da olması gerektiği gibi.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl">
                Sizlere son teknoloji işitme cihazlarımız ve profesyonel ekibimizle kusursuz bir işitme deneyimi yaşatabilmek için buradayız.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <a
                href="#appointment"
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-[#003366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#004488] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <Calendar size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>{content.cta_text}</span>
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-white hover:border-[#003366]/30 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <span>Hizmetlerimizi Keşfedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#brands"
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-[#003366] hover:text-[#004488] transition-all animate-bounce cursor-pointer"
      >
        <ChevronDown size={24} className="sm:w-7 sm:h-7" strokeWidth={1.5} />
      </a>
    </section>
  );
}
