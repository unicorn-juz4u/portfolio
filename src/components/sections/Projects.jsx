import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import SectionHeading from '../common/SectionHeading';
import ProjectModal from '../common/ProjectModal';
import { projectsData } from '../../data/data';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'all'
    ? projectsData.projects
    : projectsData.projects.filter((p) => p.category === activeFilter);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Featured Works"
          title="Featured Projects"
          subtitle="Explore full-stack web products built with MERN architectures, secure authentication, payment gateway workflows, and conversion-focused interfaces."
        />

        {/* Filter Tabs - Horizontal Snap on Mobile & Wrap on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-12 pb-2 px-1 max-w-full">
          {projectsData.categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col rounded-2xl glass-card border border-slate-200/90 dark:border-dark-border overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-glow-violet hover:-translate-y-1.5"
              >
                {/* Project Image Banner */}
                <div
                  className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => handleOpenModal(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="600"
                    height="350"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/95 text-violet-300 border border-violet-500/40 backdrop-blur-md uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay with Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-violet-600/90 hover:bg-violet-600 shadow-lg shadow-violet-600/40">
                      <Eye className="w-4 h-4" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => handleOpenModal(project)}
                      className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white font-display group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* WCAG AA text contrast: > 7:1 */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 line-clamp-3 leading-relaxed font-normal">
                      {project.shortDesc}
                    </p>

                    {/* Tech Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-dark-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-dark-border">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons: High Contrast Text & Visible Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-dark-border/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(project)}
                      className="text-xs font-bold text-violet-700 dark:text-violet-400 hover:text-violet-900 dark:hover:text-violet-300 flex items-center gap-1 focus:outline-none focus:underline"
                    >
                      <span>Explore details</span>
                      &rarr;
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-slate-900 dark:text-slate-100 bg-white dark:bg-dark-surface border-2 border-slate-300 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-violet-500"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                        <span className="text-white font-bold">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
