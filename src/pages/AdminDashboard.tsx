import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  MessageSquare,
  Package,
  Users,
  Settings,
  LogOut,
  Calendar,
  Star,
  Award,
  Image,
  Menu,
  X
} from 'lucide-react';
import ServicesManager from '../components/admin/ServicesManager';
import BrandsManager from '../components/admin/BrandsManager';
import TestimonialsManager from '../components/admin/TestimonialsManager';
import AppointmentsManager from '../components/admin/AppointmentsManager';
import HeroManager from '../components/admin/HeroManager';
import SiteSettingsManager from '../components/admin/SiteSettingsManager';
import ExpertsManager from '../components/admin/ExpertsManager';
import WhyUsManager from '../components/admin/WhyUsManager';

type Tab = 'hero' | 'services' | 'brands' | 'testimonials' | 'appointments' | 'experts' | 'whyus' | 'settings';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero' as Tab, label: 'Ana Sayfa', icon: Image },
    { id: 'services' as Tab, label: 'Hizmetler', icon: LayoutDashboard },
    { id: 'brands' as Tab, label: 'Markalar', icon: Package },
    { id: 'testimonials' as Tab, label: 'Yorumlar', icon: MessageSquare },
    { id: 'appointments' as Tab, label: 'Randevular', icon: Calendar },
    { id: 'experts' as Tab, label: 'Uzmanlar', icon: Users },
    { id: 'whyus' as Tab, label: 'Neden Biz', icon: Award },
    { id: 'settings' as Tab, label: 'Site Ayarları', icon: Settings },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="lg:hidden bg-white shadow-md p-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-xs text-gray-600">Bernaİşitme</p>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside className={`
        fixed lg:static inset-0 z-50 bg-white shadow-lg transform transition-transform duration-300 lg:transform-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 flex flex-col
      `}>
        <div className="hidden lg:block p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-600">Bernaİşitme</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">Çıkış Yap</span>
          </button>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {activeTab === 'hero' && <HeroManager />}
          {activeTab === 'services' && <ServicesManager />}
          {activeTab === 'brands' && <BrandsManager />}
          {activeTab === 'testimonials' && <TestimonialsManager />}
          {activeTab === 'appointments' && <AppointmentsManager />}
          {activeTab === 'experts' && <ExpertsManager />}
          {activeTab === 'whyus' && <WhyUsManager />}
          {activeTab === 'settings' && <SiteSettingsManager />}
        </div>
      </main>
    </div>
  );
}