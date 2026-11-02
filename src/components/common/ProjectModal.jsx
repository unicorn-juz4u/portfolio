import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectModal({ project, isOpen, onClose }) {
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

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl my-8 z-10 rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-2xl max-h-[90vh] flex flex-col"
          >
            {/* Header Image / Banner */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-black/90 transition-all border border-white/20 backdrop-blur-md"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-violet-600 text-white backdrop-blur-sm uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Subtitle / Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 mb-1.5">
                  Architecture &amp; Overview
                </h4>
                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  {project.fullDesc || project.shortDesc}
                </p>
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-100 dark:bg-dark-surface/80 border border-slate-200 dark:border-dark-border">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide font-bold">
                        {metric.label}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-1">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Features List */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    Key Engineering Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Technologies &amp; Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-dark-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 hidden sm:block">
                Press <kbd className="px-2 py-0.5 rounded bg-slate-200 dark:bg-dark-card border border-slate-300 dark:border-dark-border text-[10px] font-mono font-bold">ESC</kbd> to close
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-card border-2 border-slate-300 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors shadow-xs"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-600/25"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span className="text-white">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
