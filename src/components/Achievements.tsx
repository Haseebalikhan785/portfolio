import React from 'react';
import { Trophy, ExternalLink, Sparkles, Star } from './Icons';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitions & Awards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Honors & Achievements
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Competitive hackathon podium finishes, technical project awards, and university academic rankings.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.linkedinActivity}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>View Recent Activity & Proof</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {item.badgeText}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {item.organization} · {item.date}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.url && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition"
                  >
                    <span>View Official Post & Validation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
