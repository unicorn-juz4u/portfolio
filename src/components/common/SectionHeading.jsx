import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCentered ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 border transition-colors ${
            isCentered ? 'mx-auto' : ''
          } bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20 backdrop-blur-md`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
