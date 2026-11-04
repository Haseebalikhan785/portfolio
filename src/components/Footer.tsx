import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Status */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                Haseeb Ali
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-mono text-slate-500">
                Portfolio 2026
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Architecting resilient backends, cloud applications, and high-performance Android systems.
            </p>
          </div>

          {/* Center: Tech Stack Attribution */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Code2 className="w-4 h-4 text-blue-500" />
            <span>React 19 · TypeScript · Tailwind CSS · Vite</span>
          </div>

          {/* Right: Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Haseeb Ali. All rights reserved. Recruiter-ready portfolio deployed on AWS.</p>
        </div>
      </div>
    </footer>
  );
};
