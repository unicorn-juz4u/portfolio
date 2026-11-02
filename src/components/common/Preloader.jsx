import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (isDone) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete, isDone]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080c14] text-white"
        >
          {/* Ambient background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-violet-600/15 blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

          {/* Logo Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-display font-extrabold text-3xl shadow-glow-violet">
              AK
            </div>
            <span className="absolute -inset-1 rounded-2xl border border-violet-500/40 animate-ping opacity-30" />
          </motion.div>

          {/* Title & Progress */}
          <div className="w-64 max-w-xs flex flex-col items-center">
            <div className="flex justify-between w-full text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              <span>Initializing</span>
              <span className="text-violet-400">{progress}%</span>
            </div>

            {/* Progress track */}
            <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <p className="mt-4 text-xs font-medium text-slate-500 tracking-wider">
              Abhey Kumar &bull; MERN Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
