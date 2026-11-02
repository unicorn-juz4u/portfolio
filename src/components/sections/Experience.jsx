import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { experienceData } from '../../data/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-dark-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="A track record of engineering scalable frontend architectures, optimizing high-traffic web applications, and delivering modern products."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Vertical Glowing Timeline Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-600 via-cyan-500 to-indigo-600 opacity-40"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Timeline Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-dark-card border-2 border-violet-500 shadow-glow-sm flex items-center justify-center text-violet-500">
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Card Content (Offset for vertical line) */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10' : 'sm:pr-10'
                    } w-[calc(100%-3rem)]`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-200/90 dark:border-dark-border hover:border-violet-500/40 transition-all duration-300 hover:shadow-glow-sm group">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                          <Building2 className="w-3.5 h-3.5" />
                          {item.company}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Location */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                        <span>&bull;</span>
                        <span className="text-violet-700 dark:text-violet-400 font-bold">{item.type}</span>
                      </div>

                      {/* Achievements List - WCAG AA Contrast: > 7:1 */}
                      <ul className="space-y-2.5 my-4">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      {item.tech && item.tech.length > 0 && (
                        <div className="pt-4 border-t border-slate-200 dark:border-dark-border/80 flex flex-wrap gap-1.5">
                          {item.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-dark-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
