import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CredentialsPage } from './components/CredentialsPage';
import { CertificateModal } from './components/CertificateModal';
import { VERIFIED_CREDENTIALS } from './data/portfolioData';
import { VerifiedCredential } from './types';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode for modern high-contrast developer aesthetic
  });

  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname;
  });

  const [selectedCred, setSelectedCred] = useState<VerifiedCredential | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  // Handle browser back/forward and initial URL query params
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      const params = new URLSearchParams(window.location.search);
      const certId = params.get('cert');
      if (certId && window.location.pathname === '/') {
        const found = VERIFIED_CREDENTIALS.find((c) => c.id === certId);
        if (found) setSelectedCred(found);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    // Initial check
    handleLocationChange();

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCertificate = (id: string) => {
    const found = VERIFIED_CREDENTIALS.find((c) => c.id === id);
    if (found) {
      setSelectedCred(found);
      // Optional: update query string without reload
      const url = new URL(window.location.href);
      url.searchParams.set('cert', id);
      window.history.replaceState(null, '', url.toString());
    }
  };

  const handleCloseModal = () => {
    setSelectedCred(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('cert');
    window.history.replaceState(null, '', url.toString());
  };

  // Dedicated Subpage check
  const isCredentialsSubpage = currentPath === '/credentials' || currentPath === '/certificates';

  if (isCredentialsSubpage) {
    return (
      <CredentialsPage
        darkMode={darkMode}
        toggleDarkMode={toggleTheme}
        onBack={() => navigateTo('/')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} onNavigate={navigateTo} />
      <main>
        <Hero />
        <Experience onViewCertificate={handleOpenCertificate} />
        <Projects />
        <SkillsMatrix />
        <Education />
        <Achievements onViewCertificate={handleOpenCertificate} />
        <Certifications onViewCertificate={handleOpenCertificate} />
        <Contact />
      </main>
      <Footer />

      {/* Interactive Lightbox on main page */}
      <CertificateModal
        credential={selectedCred}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
