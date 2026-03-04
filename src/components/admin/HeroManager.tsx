import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Save } from 'lucide-react';

interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  cta_text: string;
  background_image: string;
  background_video?: string;
}

export default function HeroManager() {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

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
    setLoading(false);
  };

  const handleSave = async () => {
    if (!content) return;

    setSaving(true);
    const { error } = await supabase
      .from('hero_content')
      .update({
        title: content.title,
        subtitle: content.subtitle,
        cta_text: content.cta_text,
        background_image: content.background_image,
        background_video: content.background_video,
        updated_at: new Date().toISOString()
      })
      .eq('id', content.id);

    if (error) {
      setMessage('Hata oluştu!');
    } else {
      setMessage('Kaydedildi!');
    }

    setSaving(false);
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Ana Sayfa İçeriği</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Başlık
          </label>
          <input
            type="text"
            value={content?.title || ''}
            onChange={(e) => setContent(content ? { ...content, title: e.target.value } : null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alt Başlık
          </label>
          <input
            type="text"
            value={content?.subtitle || ''}
            onChange={(e) => setContent(content ? { ...content, subtitle: e.target.value } : null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buton Metni
          </label>
          <input
            type="text"
            value={content?.cta_text || ''}
            onChange={(e) => setContent(content ? { ...content, cta_text: e.target.value } : null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Arkaplan Resmi URL
          </label>
          <input
            type="text"
            value={content?.background_image || ''}
            onChange={(e) => setContent(content ? { ...content, background_image: e.target.value } : null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Arkaplan Video URL (Opsiyonel)
          </label>
          <input
            type="text"
            value={content?.background_video || ''}
            onChange={(e) => setContent(content ? { ...content, background_video: e.target.value } : null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Video URL'si girin (MP4 formatı)"
          />
          <p className="mt-1 text-sm text-gray-500">
            Video URL'si girilirse, resim yerine video oynatılır. Boş bırakırsanız resim kullanılır.
          </p>
        </div>

        {message && (
          <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg">
            {message}
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          <Save className="w-5 h-5" />
          <span>{saving ? 'Kaydediliyor...' : 'Kaydet'}</span>
        </button>
      </div>
    </div>
  );
}