import React, { useState } from 'react';
import { FileDown, Mail, ArrowRight, Github, Linkedin, ExternalLink, Terminal, Check, Copy } from './Icons';
import { PERSONAL_INFO, QUICK_FACTS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Recruiter Hook & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>.
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Executive Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Computer Science engineer with an exceptional <strong className="text-slate-900 dark:text-white">9.17 / 10 CGPA</strong> from Lovely Professional University. Experienced in architecting robust <strong className="text-slate-900 dark:text-white">Android applications</strong>, scalable <strong className="text-slate-900 dark:text-white">FastAPI/Flask backends</strong>, and cloud-hosted platforms from national hackathons to production AWS infrastructure.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Haseeb_Ali_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition flex items-center gap-2.5 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Link Row */}
            <div className="pt-2 flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Recruiter Bento (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Interactive Terminal Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl text-left font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>developer@haseeb:~$</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-emerald-400">$</span> <span className="text-blue-400">haseeb</span> --status
                </p>
                <p className="text-slate-400">
                  » Target: <span className="text-white font-bold">Full-Stack / Android SDE</span>
                </p>
                <p className="text-slate-400">
                  » University: <span className="text-white">LPU (CGPA: <strong className="text-emerald-400">9.17 / 10</strong>)</span>
                </p>
                <p className="text-slate-400">
                  » Production: <span className="text-white">CitizenAssist AI (AWS), BuildMart (APK)</span>
                </p>
                <p className="text-slate-400">
                  » Notice: <span className="text-emerald-400 font-bold">{PERSONAL_INFO.noticePeriod}</span>
                </p>
                <p className="text-slate-400">
                  » Relocation: <span className="text-white">{PERSONAL_INFO.workMode}</span>
                </p>
                <p className="pt-2 text-[11px] text-blue-400 flex items-center gap-1">
                  <span>✔ All verified projects and live ports active</span>
                </p>
              </div>
            </div>

            {/* Recruiter Quick-Facts Bento Grid */}
            <div className="grid grid-cols-2 gap-3">
              {QUICK_FACTS.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-500/40 transition group"
                >
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    {fact.label}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5 block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {fact.value}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block mt-0.5">
                    {fact.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
