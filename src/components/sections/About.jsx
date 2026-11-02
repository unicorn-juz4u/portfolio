import React from 'react';
import { Award, Layers, Server, Zap, Users } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { personalInfo, aboutStory } from '../../data/data';

const highlightIcons = {
  Layers: Layers,
  Server: Server,
  Zap: Zap,
  Users: Users
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="About Me"
          title="Engineering with Scalability & User Empathy"
          subtitle="A full-stack developer committed to crafting resilient web applications, intuitive interfaces, and scalable backend architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Styled Profile Photo (Capped at 320px on mobile, Non-overlapping) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/30 blur-xl -z-10 animate-pulse-slow" />

              {/* Card Container */}
              <div className="p-3.5 rounded-3xl glass-card border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col">
                {/* Photo frame: Capped at 320px on mobile */}
                <div className="overflow-hidden rounded-2xl relative h-[280px] sm:h-[320px] md:h-[360px] w-full bg-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="400"
                    height="500"
                  />

                  {/* Experience Badge: Placed neatly at top-right so it never collides with name */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white border border-white/15 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent-violet" />
                    <span className="text-xs font-bold font-display">3+ Years Exp</span>
                  </div>
                </div>

                {/* Name & Title Label below image - fully visible with text wrapping */}
                <div className="mt-3.5 p-3 rounded-xl bg-slate-100/95 dark:bg-dark-surface/95 border border-slate-200 dark:border-dark-border text-center">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-950 dark:text-white break-words">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-bold text-violet-600 dark:text-violet-400 mt-0.5 break-words">
                    {personalInfo.title}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Story & Feature Rows */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Bio Story */}
            <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base md:text-lg font-normal">
              {aboutStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Feature Rows with Icons & Descriptions (from ref1) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {aboutStory.highlights.map((highlight, idx) => {
                const IconComponent = highlightIcons[highlight.icon] || Layers;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-card border border-slate-200 dark:border-dark-border hover:border-violet-500/40 transition-all flex items-start gap-3.5 group shadow-xs hover:-translate-y-0.5"
                  >
                    <div className="p-2 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 border border-violet-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed font-normal">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
