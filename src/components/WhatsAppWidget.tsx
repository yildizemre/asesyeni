import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '905013212774';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 max-w-[calc(100vw-3rem)] animate-fadeIn">
          <div className="bg-[#25D366] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle size={24} />
              <span className="font-bold">WhatsApp Destek</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Nasıl Yardımcı Olabiliriz? 👋
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Size en kısa sürede yanıt vereceğiz, bir mesaj başlatın:
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Sohbete Başla</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all flex items-center justify-center hover:scale-110 transform"
        aria-label="WhatsApp ile iletişime geç"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} />
        )}
      </button>
    </div>
  );
}
