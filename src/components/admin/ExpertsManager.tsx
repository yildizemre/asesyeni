import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  title: string;
  image_url: string;
}

export default function ExpertsManager() {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', title: '', image_url: '' });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadExperts();
  }, []);

  const loadExperts = async () => {
    const { data } = await supabase
      .from('experts')
      .select('*')
      .order('created_at');

    if (data) {
      setExperts(data);
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const { error } = await supabase
      .from('experts')
      .insert([formData]);

    if (!error) {
      loadExperts();
      setFormData({ name: '', title: '', image_url: '' });
      setIsAdding(false);
    }
  };

  const handleUpdate = async (id: string) => {
    const expert = experts.find(e => e.id === id);
    if (!expert) return;

    const { error } = await supabase
      .from('experts')
      .update(expert)
      .eq('id', id);

    if (!error) {
      setEditingId(null);
      loadExperts();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase
      .from('experts')
      .delete()
      .eq('id', id);

    if (!error) {
      loadExperts();
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Uzman Kadro</h2>
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
          <h3 className="font-semibold mb-4">Yeni Uzman Ekle</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="İsim"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Ünvan"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Resim URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {experts.map((expert) => (
          <div key={expert.id} className="p-4 border border-gray-200 rounded-lg">
            {editingId === expert.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={expert.name}
                  onChange={(e) => setExperts(experts.map(exp => exp.id === expert.id ? { ...exp, name: e.target.value } : exp))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={expert.title}
                  onChange={(e) => setExperts(experts.map(exp => exp.id === expert.id ? { ...exp, title: e.target.value } : exp))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={expert.image_url}
                  onChange={(e) => setExperts(experts.map(exp => exp.id === expert.id ? { ...exp, image_url: e.target.value } : exp))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(expert.id)}
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
                <div className="flex justify-end space-x-2 mb-3">
                  <button
                    onClick={() => setEditingId(expert.id)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(expert.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <img
                  src={expert.image_url}
                  alt={expert.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-center">{expert.name}</h3>
                <p className="text-gray-600 text-sm text-center">{expert.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}