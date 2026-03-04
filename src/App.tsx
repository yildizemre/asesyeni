import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Expert from './components/Expert';
import Products from './components/Products';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import SGKSupport from './pages/SGKSupport';

function AppContent() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (user && currentPath === '#/login') {
      window.location.hash = '#/admin';
    }
  }, [user, currentPath]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl text-gray-600">Yükleniyor...</div>
      </div>
    );
  }

  if (currentPath === '#/login') {
    return <Login />;
  }

  if (currentPath === '#/admin') {
    if (!user) {
      window.location.hash = '#/login';
      return null;
    }
    return <AdminDashboard />;
  }

  if (currentPath === '#/sgk-support') {
    return (
      <>
        <SGKSupport />
        <Footer />
        <WhatsAppWidget />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Expert />
        <Products />
        <Appointment />
        <Testimonials />
        <TrustBar />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
