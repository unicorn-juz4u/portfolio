import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { personalInfo } from '../../data/data';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export default function Hero() {
  const typedRole = useTypingEffect(personalInfo.typingRoles, 80, 40, 1800);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden mesh-gradient"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-violet-600/15 blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/95 dark:bg-dark-card/95 border border-slate-700/60 dark:border-white/10 text-xs font-semibold text-slate-100 backdrop-blur-md shadow-lg shadow-black/20 mb-8 max-w-full"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-slate-100 truncate">{personalInfo.availability}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-slate-950 dark:text-white max-w-4xl leading-[1.15] break-words"
        >
          Hi, I'm <span className="text-gradient">Abhey</span> — I build{' '}
          <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
            scalable web products
          </span>
        </motion.h1>

        {/* Typing Role Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-3xl font-display font-semibold text-slate-800 dark:text-slate-200"
        >
          <span className="text-slate-400 font-mono text-base sm:text-xl">&lt;</span>
          <span className="text-violet-600 dark:text-violet-400 font-bold min-h-[1.4em]">
            {typedRole}
          </span>
          <span className="inline-block w-0.5 h-6 bg-violet-500 animate-pulse" />
          <span className="text-slate-400 font-mono text-base sm:text-xl">/&gt;</span>
        </motion.div>

        {/* Hero Paragraph (WCAG AA Contrast: > 7:1) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-2xl text-sm sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons with Sharp Visible Text & High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: View Projects */}
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <span className="text-white font-bold">View Projects</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA: Download Resume */}
          <a
            href={personalInfo.resumeUrl}
            download="Abhey_Kumar_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-card border-2 border-slate-300 dark:border-dark-border hover:border-violet-600 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-slate-50 dark:hover:bg-dark-hover transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <Download className="w-4 h-4 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Download Resume</span>
          </a>
        </motion.div>

        {/* Hero Tech Pills - Consistent Flex-Wrap with Equal Gaps, Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-slate-200/80 dark:border-white/5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full max-w-xl mx-auto"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
            <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>React 18</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
            <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Node.js &amp; Express</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
            <Database className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            <span>MongoDB</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
