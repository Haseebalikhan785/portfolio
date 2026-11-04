import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, ExternalLink, CheckCircle } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java & C++)',
    'Database Management Systems (MySQL)',
    'Computer Architecture & Organization',
    'Operating Systems & Linux Kernel',
    'Computer Networks & Protocols',
    'Full-Stack Web Development',
    'Software Engineering Methodologies',
  ];

  return (
    <section id="education" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education & Honors
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Strong theoretical foundation in computer science and top-tier academic performance.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.linkedinEducation}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Verify on LinkedIn Education</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Education Bento Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Degree & Institute */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Higher Education
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  CGPA: 9.17 / 10
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Diploma in Computer Science & Engineering (CSE)
                </h3>
                <p className="mt-1 text-lg font-bold text-blue-600 dark:text-blue-400">
                  Lovely Professional University (LPU)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  2024 – 2027 (Expected)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Punjab, India
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                Pursuing an intensive Computer Science engineering curriculum with a consistent academic distinction of <strong className="text-slate-900 dark:text-white">9.17 CGPA</strong>. Actively applying classroom rigor to real-world software architecture, hackathon engineering, and cloud deployment pipelines.
              </p>
            </div>

            {/* Right 5 cols: Relevant Coursework */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Core Engineering Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coursework.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
