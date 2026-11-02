import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
        isDark
          ? 'bg-dark-card/90 border-dark-border text-amber-300 hover:text-amber-200 hover:border-amber-400/50 hover:bg-dark-hover shadow-sm'
          : 'bg-white border-slate-300 text-slate-900 hover:text-violet-600 hover:border-violet-400 hover:bg-slate-50 shadow-xs'
      } ${className}`}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon className="w-5 h-5 text-slate-900" />
        )}
      </motion.div>
    </button>
  );
}
