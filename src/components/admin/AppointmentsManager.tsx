import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Trash2, Calendar, User, Phone, Mail } from 'lucide-react';

interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  message: string;
  created_at: string;
}

export default function AppointmentsManager() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setAppointments(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase
      .from('appointments')
      .delete()
      .eq('id', id);

    if (!error) {
      loadAppointments();
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Randevular ({appointments.length})</h2>

      <div className="space-y-4">
        {appointments.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Henüz randevu bulunmuyor
          </div>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <span>{appointment.name}</span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(appointment.created_at).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                  title="Sil"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{appointment.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{appointment.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{appointment.date} - {appointment.time}</span>
                </div>
              </div>

              {appointment.message && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-1">Mesaj:</p>
                  <p className="text-gray-600">{appointment.message}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}