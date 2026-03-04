import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface WhyUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  order_index: number;
}

export default function WhyUsManager() {
  const [items, setItems] = useState<WhyUsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ icon: '', title: '', description: '', order_index: 0 });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const { data } = await supabase
      .from('why_us_items')
      .select('*')
      .order('order_index');

    if (data) {
      setItems(data);
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const { error } = await supabase
      .from('why_us_items')
      .insert([formData]);

    if (!error) {
      loadItems();
      setFormData({ icon: '', title: '', description: '', order_index: 0 });
      setIsAdding(false);
    }
  };

  const handleUpdate = async (id: string) => {
    const item = items.find(i => i.id === id);
    if (!item) return;

    const { error } = await supabase
      .from('why_us_items')
      .update(item)
      .eq('id', id);

    if (!error) {
      setEditingId(null);
      loadItems();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase
      .from('why_us_items')
      .delete()
      .eq('id', id);

    if (!error) {
      loadItems();
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Neden Biz?</h2>
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
          <h3 className="font-semibold mb-4">Yeni Özellik Ekle</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="İkon adı (örn: Award)"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Başlık"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Açıklama"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
            {editingId === item.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={item.icon}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, icon: e.target.value } : i))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, title: e.target.value } : i))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  value={item.description}
                  onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, description: e.target.value } : i))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(item.id)}
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
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-1">İkon: {item.icon}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(item.id)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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