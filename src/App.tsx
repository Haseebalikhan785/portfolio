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

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode for modern high-contrast developer aesthetic
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <SkillsMatrix />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
