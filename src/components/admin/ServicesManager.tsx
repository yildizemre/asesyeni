import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  order_index: number;
}

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ icon: '', title: '', description: '', order_index: 0 });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('order_index');

    if (data) {
      setServices(data);
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const { error } = await supabase
      .from('services')
      .insert([formData]);

    if (!error) {
      loadServices();
      setFormData({ icon: '', title: '', description: '', order_index: 0 });
      setIsAdding(false);
    }
  };

  const handleUpdate = async (id: string) => {
    const service = services.find(s => s.id === id);
    if (!service) return;

    const { error } = await supabase
      .from('services')
      .update(service)
      .eq('id', id);

    if (!error) {
      setEditingId(null);
      loadServices();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (!error) {
      loadServices();
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Hizmetler</h2>
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
          <h3 className="font-semibold mb-4">Yeni Hizmet Ekle</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="İkon adı (örn: Stethoscope)"
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

      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="p-4 border border-gray-200 rounded-lg">
            {editingId === service.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={service.icon}
                  onChange={(e) => setServices(services.map(s => s.id === service.id ? { ...s, icon: e.target.value } : s))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => setServices(services.map(s => s.id === service.id ? { ...s, title: e.target.value } : s))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  value={service.description}
                  onChange={(e) => setServices(services.map(s => s.id === service.id ? { ...s, description: e.target.value } : s))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(service.id)}
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
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <p className="text-sm text-gray-500 mt-1">İkon: {service.icon}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(service.id)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
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