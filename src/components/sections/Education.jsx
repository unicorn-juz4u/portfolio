import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Foundations"
          title="Education & Continuous Learning"
          subtitle="Combining intensive computer science bootcamp training with human-centered social sciences to build software with both technical rigor and empathetic design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-7 sm:p-8 rounded-2xl glass-card border border-slate-200/80 dark:border-dark-border hover:border-violet-500/40 transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                    <Award className="w-3.5 h-3.5" />
                    {edu.badge}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-violet-500" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1 mb-4">
                  <GraduationCap className="w-4 h-4 text-violet-500 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Key Pillars / Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
                    Core Learnings &amp; Pillars
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
