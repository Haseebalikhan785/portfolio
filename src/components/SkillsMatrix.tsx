import React, { useState } from 'react';
import { Cpu, ExternalLink, Code2, Globe, Smartphone, Database, Wrench, CheckCircle } from './Icons';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'Web & Frameworks':
        return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Mobile Development':
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      case 'Databases & Cloud':
        return <Database className="w-5 h-5 text-cyan-500" />;
      case 'Developer Tools':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-500" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Architecture Matrix
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Battle-tested technical competencies across systems programming, cloud infrastructure, and mobile applications.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.linkedinSkills}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Verify 20+ Skills on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedCategory === cat.name
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {category.skills.length} competencies
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.level === 'Expert'
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
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
