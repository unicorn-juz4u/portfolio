import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, FileText, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { navLinks, personalInfo } from '../../data/data';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-cyan-400 to-emerald-400 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl p-1"
            aria-label="Abhey Kumar - Back to Top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-display font-extrabold text-base shadow-md shadow-violet-500/25 group-hover:scale-105 transition-transform duration-300">
              AK
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Abhey Kumar
              </span>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 tracking-wider uppercase -mt-0.5">
                MERN Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-100/90 dark:bg-dark-surface/90 border border-slate-300/80 dark:border-white/10 backdrop-blur-md shadow-xs"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-800 dark:text-slate-200 hover:text-violet-700 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-600/30"
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle, Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Abhey_Kumar_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-card border-2 border-slate-300 dark:border-dark-border hover:border-violet-600 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-slate-50 dark:hover:bg-dark-hover transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Download Abhey Kumar's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>Resume</span>
            </a>

            {/* Let's Talk CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-md shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <span className="text-white font-bold">Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>

            {/* Mobile Hamburger Button (44px min touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
