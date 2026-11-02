import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import ParticleBackground from './components/common/ParticleBackground';
import Preloader from './components/common/Preloader';
import Toast from './components/common/Toast';
import NotFound from './components/common/NotFound';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Statistics from './components/sections/Statistics';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

const SECTION_IDS = [
  'hero',
  'about',
  'statistics',
  'projects',
  'skills',
  'experience',
  'contact'
];

export default function App() {
  const [toasts, setToasts] = useState([]);
  const [is404, setIs404] = useState(() => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname;
    return path !== '/' && path !== '/index.html' && path !== '';
  });
  const activeSection = useActiveSection(SECTION_IDS, 140);

  const addToast = (type, title, message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (is404) {
    return (
      <ThemeProvider>
        <NotFound onGoHome={() => {
          window.history.pushState({}, '', '/');
          setIs404(false);
        }} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
        {/* Initial Loading Screen */}
        <Preloader />

        {/* Ambient Canvas Particles */}
        <ParticleBackground />

        {/* Desktop-only custom glow follower cursor */}
        <CustomCursor />

        {/* Sticky Blurred Header */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections: Hero → About → Statistics → Projects → Skills → Experience → Contact */}
        <main id="main-content" tabIndex="-1">
          {/* 1. Hero */}
          <Hero />

          {/* 2. About Me / Profile */}
          <About />

          {/* 3. Professional Statistics */}
          <Statistics />

          {/* 4. Featured Projects */}
          <Projects />

          {/* 5. Modern Technologies & Engineering Tools */}
          <Skills />

          {/* 6. Professional Experience */}
          <Experience />

          {/* 7. Contact */}
          <Contact onShowToast={addToast} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Toast Notifications */}
        <Toast toasts={toasts} onDismiss={dismissToast} />
      </div>
    </ThemeProvider>
  );
}
