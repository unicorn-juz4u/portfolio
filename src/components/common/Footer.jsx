import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../../data/data';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface/60 transition-colors py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-display font-extrabold text-sm shadow-md">
            AK
          </div>
          <div>
            <p className="text-sm font-bold text-slate-950 dark:text-white">
              Abhey Kumar &bull; MERN Stack Developer
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              &copy; {CURRENT_YEAR} All rights reserved. Crafted with precision &amp; care.
            </p>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
            aria-label="Email Abhey Kumar"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="p-2.5 rounded-xl border-2 border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
            aria-label="Phone Abhey Kumar"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top button */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-card border-2 border-slate-300 dark:border-dark-border hover:border-violet-500 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-slate-50 dark:hover:bg-dark-hover transition-all group focus:outline-none focus:ring-2 focus:ring-violet-500"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
