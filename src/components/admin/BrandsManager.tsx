import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  logo_url: string;
  description: string;
  order_index: number;
}

export default function BrandsManager() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', logo_url: '', description: '', order_index: 0 });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    const { data } = await supabase
      .from('brands')
      .select('*')
      .order('order_index');

    if (data) {
      setBrands(data);
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const { error } = await supabase
      .from('brands')
      .insert([formData]);

    if (!error) {
      loadBrands();
      setFormData({ name: '', logo_url: '', description: '', order_index: 0 });
      setIsAdding(false);
    }
  };

  const handleUpdate = async (id: string) => {
    const brand = brands.find(b => b.id === id);
    if (!brand) return;

    const { error } = await supabase
      .from('brands')
      .update(brand)
      .eq('id', id);

    if (!error) {
      setEditingId(null);
      loadBrands();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase
      .from('brands')
      .delete()
      .eq('id', id);

    if (!error) {
      loadBrands();
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Markalar</h2>
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
          <h3 className="font-semibold mb-4">Yeni Marka Ekle</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Marka Adı"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Logo URL"
              value={formData.logo_url}
              onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
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
        {brands.map((brand) => (
          <div key={brand.id} className="p-4 border border-gray-200 rounded-lg">
            {editingId === brand.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={brand.name}
                  onChange={(e) => setBrands(brands.map(b => b.id === brand.id ? { ...b, name: e.target.value } : b))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={brand.logo_url}
                  onChange={(e) => setBrands(brands.map(b => b.id === brand.id ? { ...b, logo_url: e.target.value } : b))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  value={brand.description}
                  onChange={(e) => setBrands(brands.map(b => b.id === brand.id ? { ...b, description: e.target.value } : b))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(brand.id)}
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
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{brand.name}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingId(brand.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(brand.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <img src={brand.logo_url} alt={brand.name} className="h-16 object-contain mb-2" />
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}