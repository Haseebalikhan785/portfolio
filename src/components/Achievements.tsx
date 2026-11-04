import React from 'react';
import { Trophy, ExternalLink, ShieldCheck, ZoomIn, Eye } from './Icons';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

interface AchievementsProps {
  onViewCertificate?: (id: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onViewCertificate }) => {
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
              Competitive hackathon podium finishes, technical project awards, and physical certificate verifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/credentials"
              onClick={(e) => {
                if (window.location.pathname !== '/credentials') {
                  // Let router or pushState handle it smoothly
                }
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold transition"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>All Verified Certificates (Registry)</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinActivity}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>LinkedIn Activity</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
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

                {/* Certificate Preview Thumbnail if available */}
                {item.certificateImage && (
                  <div
                    onClick={() => onViewCertificate ? onViewCertificate(item.id) : window.location.assign(`/credentials?cert=${item.id}`)}
                    className="mt-4 p-2 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 cursor-pointer group/thumb transition"
                  >
                    <div className="relative h-28 w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <img
                        src={item.certificateImage}
                        alt={`${item.title} Certificate`}
                        className="h-full w-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center gap-1.5 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                        <span className="text-xs font-bold">Enlarge</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                {item.certificateImage && (
                  <a
                    href={`/credentials?cert=${item.id}`}
                    onClick={(e) => {
                      if (onViewCertificate) {
                        e.preventDefault();
                        onViewCertificate(item.id);
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold transition"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>View Verified Certificate</span>
                    <Eye className="w-3.5 h-3.5 ml-auto" />
                  </a>
                )}

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition"
                  >
                    <span>View Official Post & Validation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
