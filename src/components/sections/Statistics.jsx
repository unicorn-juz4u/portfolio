import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { aboutStory } from '../../data/data';

function StatCard({ number, suffix = '', label, description }) {
  const [count, setCount] = useState(number);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = number / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <div
      ref={ref}
      className="p-5 sm:p-6 rounded-2xl glass-card border border-slate-200 dark:border-dark-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1 group"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
        {count}
        <span className="text-accent-violet">{suffix}</span>
      </div>
      <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-2">
        {label}
      </div>
      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
        {description}
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 relative" aria-label="Professional Statistics">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {aboutStory.stats.map((stat, idx) => (
            <StatCard
              key={idx}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
