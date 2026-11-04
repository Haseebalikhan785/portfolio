import React from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from './Icons';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications & Accreditations
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Externally validated technical certifications covering advanced algorithms, computer organization, and production Python.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {cert.issuer} {cert.duration ? `· ${cert.duration}` : ''}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verified Credential</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700/60 transition group"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
