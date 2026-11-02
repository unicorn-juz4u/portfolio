import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ArrowRight, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../../data/data';

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
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
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-sm h-full bg-white dark:bg-dark-card border-l border-slate-300 dark:border-dark-border shadow-2xl flex flex-col justify-between p-6 overflow-y-auto z-10"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-dark-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-display font-extrabold text-base shadow-md">
                    AK
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white font-display text-sm">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 flex flex-col gap-2" aria-label="Mobile Navigation Links">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold min-h-[48px] transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                        isActive
                          ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                          : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-dark-hover hover:text-violet-700 dark:hover:text-violet-400'
                      }`}
                    >
                      <span className="font-bold">{link.name}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1' : 'opacity-60'}`} />
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Socials */}
            <div className="pt-6 border-t border-slate-200 dark:border-dark-border space-y-4">
              <a
                href={personalInfo.resumeUrl}
                download="Abhey_Kumar_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-hover transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/30 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <Mail className="w-4 h-4 text-white" />
                <span className="text-white">Let's Talk</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
                  aria-label="Call Abhey Kumar"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
                  aria-label="Email Abhey Kumar"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
