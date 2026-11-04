import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, TrendingUp, Sparkles } from './Icons';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Work History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Work Experience
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Professional engineering contributions, dataset automation pipelines, and production systems.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.linkedinExperience}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Verify on LinkedIn Experience</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/20 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition shadow-sm hover:shadow-lg">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2 border border-emerald-500/20">
                      Software Engineering Internship
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* STAR Method Bullet Points */}
                <div className="space-y-3 mt-5">
                  <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5 shrink-0">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <p className="leading-relaxed">
                      Engineered automated data-cleaning and transformation scripts in Python, reducing manual dataset preparation time by <strong className="font-bold text-slate-900 dark:text-white underline decoration-emerald-500 decoration-2 underline-offset-2">~40%</strong>.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="p-1 rounded-full bg-blue-500/10 text-blue-500 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="leading-relaxed">
                      Processed, sanitized, and validated <strong className="font-bold text-slate-900 dark:text-white">1,000+ data records</strong> across 30 days maintaining a <strong className="font-bold text-slate-900 dark:text-white">99.5% accuracy</strong> threshold.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="p-1 rounded-full bg-indigo-500/10 text-indigo-500 mt-0.5 shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <p className="leading-relaxed">
                      Constructed standardized JupyterLab analysis workflows for team-wide exploratory data pipelines, boosting developer velocity and reproducible data quality checks.
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                    Technologies:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
