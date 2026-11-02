import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts, onDismiss }) {
  return (
    <div 
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4"
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`pointer-events-auto p-4 rounded-xl shadow-2xl backdrop-blur-xl border flex items-start gap-3 text-sm font-medium ${
                isSuccess
                  ? 'bg-slate-900/90 text-emerald-300 border-emerald-500/40 shadow-emerald-950/40 dark:bg-dark-card/95'
                  : isError
                  ? 'bg-slate-900/90 text-rose-300 border-rose-500/40 shadow-rose-950/40 dark:bg-dark-card/95'
                  : 'bg-slate-900/90 text-violet-300 border-violet-500/40 shadow-violet-950/40 dark:bg-dark-card/95'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
                {!isSuccess && !isError && <Info className="w-5 h-5 text-violet-400" />}
              </div>

              <div className="flex-1 pr-2">
                {toast.title && <div className="font-semibold text-white mb-0.5">{toast.title}</div>}
                <div className="text-slate-300 text-xs leading-relaxed">{toast.message}</div>
              </div>

              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="shrink-0 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
