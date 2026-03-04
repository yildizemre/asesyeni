import { useState } from 'react';
import { Calendar, User, Phone, Mail, MessageSquare, Check, AlertCircle } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    preferredDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        preferredDate: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
      setErrorMessage('Randevu talebiniz gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-3 sm:mb-4">
              Randevu <span className="text-[#003366]">Alın</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Size özel işitme çözümleri için uzmanlarımızla görüşme talep edin. En kısa sürede size geri dönüş yapacağız.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            {submitStatus === 'success' && (
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 border-2 border-green-200 rounded-xl flex items-start space-x-3 sm:space-x-4">
                <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                  <Check size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-green-900 mb-1">
                    Randevu Talebiniz Alındı!
                  </h3>
                  <p className="text-sm sm:text-base text-green-700">
                    Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 border-2 border-red-200 rounded-xl flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                  <AlertCircle size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-red-900 mb-1">
                    Bir Hata Oluştu
                  </h3>
                  <p className="text-sm sm:text-base text-red-700">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <User className="inline mr-2" size={18} />
                    Adınız *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <User className="inline mr-2" size={18} />
                    Soyadınız *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Phone className="inline mr-2" size={18} />
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                    placeholder="0555 123 45 67"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Mail className="inline mr-2" size={18} />
                    E-posta *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <Calendar className="inline mr-2" size={18} />
                  Tercih Ettiğiniz Tarih ve Saat
                </label>
                <input
                  type="datetime-local"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  disabled={isSubmitting}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <MessageSquare className="inline mr-2" size={18} />
                  Mesajınız
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all resize-none"
                  rows={4}
                  disabled={isSubmitting}
                  placeholder="Randevu sebebiniz veya eklemek istediğiniz notlar..."
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold">* Zorunlu alanlar</span>
                  <br />
                  Kişisel verileriniz KVKK kapsamında güvenle saklanmakta ve yalnızca size hizmet sunmak amacıyla kullanılmaktadır.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#003366] hover:bg-[#004488] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2 sm:space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <Check size={20} className="sm:w-6 sm:h-6" />
                    <span>Randevu Talebi Gönder</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
