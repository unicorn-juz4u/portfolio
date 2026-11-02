import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import SkillIcon from '../common/SkillIcon';
import { skillsData } from '../../data/data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Tech Stack & Skills"
          title="Modern Technologies & Engineering Tools"
          subtitle="Specialized in building full-stack JavaScript architectures with scalable APIs, clean state management, and accessible interfaces."
        />

        {/* Skill Tabs: Horizontally Scrollable Row with Snap & Hidden Scrollbar on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-10 pb-2 px-1 max-w-full">
          {skillsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 snap-start px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 border border-violet-500'
                    : 'text-slate-900 dark:text-slate-200 bg-white dark:bg-dark-card border-2 border-slate-300 dark:border-dark-border hover:text-violet-700 dark:hover:text-white hover:border-violet-500 shadow-xs'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Technology Grid on Mobile, Scaling to Tablet and Desktop */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="group p-3.5 sm:p-4 rounded-xl glass-card border border-slate-200 dark:border-dark-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1 flex flex-col justify-between items-center text-center gap-2"
              >
                {/* Header: Icon & Level Badge */}
                <div className="w-full flex items-center justify-between gap-1">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center p-2 bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border group-hover:scale-110 transition-transform duration-300 shadow-xs shrink-0"
                    style={{ color: skill.color }}
                  >
                    <SkillIcon iconName={skill.icon} className="w-4 h-4" color={skill.color} />
                  </div>

                  {skill.level && (
                    <span
                      className={`px-2 py-0.5 rounded-md text-[9px] font-bold border ${
                        skill.level === 'Expert'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
                          : skill.level === 'Advanced'
                          ? 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20'
                          : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20'
                      }`}
                    >
                      {skill.level}
                    </span>
                  )}
                </div>

                {/* Name & Category Label */}
                <div className="w-full text-left sm:text-center mt-1">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-display truncate">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mt-0.5">
                    {skill.category}
                  </span>
                </div>

                {/* Proficiency Indicator (where data supports it) */}
                {skill.proficiency && (
                  <div className="w-full mt-1.5 pt-2 border-t border-slate-200/80 dark:border-dark-border/80 text-left">
                    <div className="flex justify-between items-center text-[10px] font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      <span>Proficiency</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-dark-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
