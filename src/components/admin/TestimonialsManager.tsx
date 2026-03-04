import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  author_name: string;
  rating: number;
  comment: string;
  date: string;
  order_index: number;
}

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ author_name: '', rating: 5, comment: '', date: '', order_index: 0 });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('order_index');

    if (data) {
      setTestimonials(data);
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const { error } = await supabase
      .from('testimonials')
      .insert([formData]);

    if (!error) {
      loadTestimonials();
      setFormData({ author_name: '', rating: 5, comment: '', date: '', order_index: 0 });
      setIsAdding(false);
    }
  };

  const handleUpdate = async (id: string) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (!testimonial) return;

    const { error } = await supabase
      .from('testimonials')
      .update(testimonial)
      .eq('id', id);

    if (!error) {
      setEditingId(null);
      loadTestimonials();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (!error) {
      loadTestimonials();
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Müşteri Yorumları</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          <span>Yeni Ekle</span>
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-4">Yeni Yorum Ekle</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="İsim"
              value={formData.author_name}
              onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value={5}>5 Yıldız</option>
              <option value={4}>4 Yıldız</option>
              <option value={3}>3 Yıldız</option>
              <option value={2}>2 Yıldız</option>
              <option value={1}>1 Yıldız</option>
            </select>
            <textarea
              placeholder="Yorum"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={4}
            />
            <input
              type="text"
              placeholder="Tarih (örn: 2 gün önce)"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Sıra"
              value={formData.order_index}
              onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <div className="flex space-x-2">
              <button
                onClick={handleAdd}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <Save className="w-4 h-4" />
                <span>Kaydet</span>
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                <X className="w-4 h-4" />
                <span>İptal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 border border-gray-200 rounded-lg">
            {editingId === testimonial.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={testimonial.author_name}
                  onChange={(e) => setTestimonials(testimonials.map(t => t.id === testimonial.id ? { ...t, author_name: e.target.value } : t))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <select
                  value={testimonial.rating}
                  onChange={(e) => setTestimonials(testimonials.map(t => t.id === testimonial.id ? { ...t, rating: parseInt(e.target.value) } : t))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value={5}>5 Yıldız</option>
                  <option value={4}>4 Yıldız</option>
                  <option value={3}>3 Yıldız</option>
                  <option value={2}>2 Yıldız</option>
                  <option value={1}>1 Yıldız</option>
                </select>
                <textarea
                  value={testimonial.comment}
                  onChange={(e) => setTestimonials(testimonials.map(t => t.id === testimonial.id ? { ...t, comment: e.target.value } : t))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={4}
                />
                <input
                  type="text"
                  value={testimonial.date}
                  onChange={(e) => setTestimonials(testimonials.map(t => t.id === testimonial.id ? { ...t, date: e.target.value } : t))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(testimonial.id)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    <Save className="w-4 h-4" />
                    <span>Kaydet</span>
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    <X className="w-4 h-4" />
                    <span>İptal</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold">{testimonial.author_name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{testimonial.comment}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(testimonial.id)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}