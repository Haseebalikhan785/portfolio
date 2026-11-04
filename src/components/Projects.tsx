import React, { useState } from 'react';
import { ExternalLink, Github, Download, Sparkles, Trophy, ArrowUpRight, CheckCircle2, Layers } from './Icons';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Cloud & AI', 'Android', 'Full-Stack', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Production & Competition Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              End-to-end applications designed, built, and deployed to live production cloud infrastructure and native Android devices.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                {/* Header row with badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                    {project.badge?.includes('Winner') || project.badge?.includes('Finalist') ? (
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    )}
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics / Impacts */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Key Highlights & Impact
                  </p>
                  <ul className="space-y-1.5">
                    {project.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition hover:-translate-y-0.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition hover:-translate-y-0.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download APK</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700 transition hover:-translate-y-0.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                <a
                  href={project.githubUrl || project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  title="Open Project"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-transparent border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Looking for more repositories & open source code?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Explore all public repositories, algorithms, and architectural experiments on GitHub.
              </p>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.githubRepos}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:opacity-90 transition flex items-center gap-2"
          >
            <span>Browse All Repositories</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
