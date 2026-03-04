import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  author_name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('order_index');

    if (data && data.length > 0) {
      setTestimonials(data);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Hastalarımız <span className="text-[#003366]">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Binlerce mutlu hastamızdan bazılarının deneyimleri
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 relative border-2 border-blue-100 shadow-xl">
                    <Quote className="absolute top-8 right-8 text-blue-200" size={64} />

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="text-7xl mr-6 bg-white rounded-2xl p-4 shadow-md">⭐</div>
                        <div className="flex-1">
                          <h4 className="text-2xl md:text-3xl font-bold text-slate-800">
                            {testimonial.author_name}
                          </h4>
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="fill-amber-400 text-amber-400" size={18} />
                              ))}
                            </div>
                            {testimonial.date && (
                              <p className="text-sm text-gray-500">{testimonial.date}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#003366] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
