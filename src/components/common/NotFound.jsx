import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#080c14] text-white relative overflow-hidden">
      <div className="absolute w-96 h-96 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center relative z-10 p-8 rounded-2xl glass-card border border-white/10 shadow-2xl"
      >
        <span className="text-7xl font-extrabold font-display text-gradient mb-4 block">
          404
        </span>
        <h1 className="text-2xl font-bold font-display text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-200 mb-8 leading-relaxed font-normal">
          The requested page or view doesn't exist or has been relocated within the portfolio.
        </p>
        <button
          type="button"
          onClick={onGoHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/30"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </button>
      </motion.div>
    </div>
  );
}
