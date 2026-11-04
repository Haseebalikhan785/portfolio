import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Trophy, Briefcase, Award, ExternalLink, Download, ZoomIn, Sun, Moon, FileDown } from './Icons';
import { VERIFIED_CREDENTIALS, PERSONAL_INFO } from '../data/portfolioData';
import { VerifiedCredential } from '../types';
import { CertificateModal } from './CertificateModal';

interface CredentialsPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onBack: () => void;
}

export const CredentialsPage: React.FC<CredentialsPageProps> = ({ darkMode, toggleDarkMode, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCred, setActiveModalCred] = useState<VerifiedCredential | null>(null);

  // Check URL params for deep-link: e.g. /credentials?cert=graviton-2026
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const certParam = params.get('cert');
    if (certParam) {
      const match = VERIFIED_CREDENTIALS.find(c => c.id === certParam);
      if (match) {
        setActiveModalCred(match);
      }
    }
  }, []);

  const categories = ['All', 'Hackathon & Awards', 'Internship', 'Certification'];

  const filteredCredentials = VERIFIED_CREDENTIALS.filter((cred) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Hackathon & Awards') return cred.category === 'Hackathon' || cred.category === 'Award';
    if (selectedCategory === 'Internship') return cred.category === 'Internship';
    if (selectedCategory === 'Certification') return cred.category === 'Certification';
    return true;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      
      {/* Subpage Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white transition shadow-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
              <span>Back to Portfolio</span>
            </button>
            <div className="hidden sm:block h-5 w-[1px] bg-slate-300 dark:bg-slate-700 mx-1" />
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Official Verification Registry
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Haseeb_Ali_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Subpage Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Cryptographically & Physically Validated</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Credentials & Certificates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            High-resolution physical certificates, state competition merit citations, and industrial software internship verifications awarded to <strong className="font-semibold text-slate-900 dark:text-white">Haseeb Ali</strong> (Lovely Professional University).
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCredentials.map((cred) => (
            <div
              key={cred.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Image Thumbnail Container */}
              <div
                className="relative h-64 sm:h-72 w-full bg-slate-100 dark:bg-slate-950/60 p-4 flex items-center justify-center cursor-pointer overflow-hidden border-b border-slate-200 dark:border-slate-800"
                onClick={() => setActiveModalCred(cred)}
              >
                <img
                  src={cred.imageSrc}
                  alt={cred.title}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Hover overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-xs font-bold shadow-lg">
                    <ZoomIn className="w-4 h-4 text-blue-500" />
                    Enlarge Certificate
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-sm border border-white/10 shadow-sm">
                    {cred.badgeText}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs mb-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {cred.issuer}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400">
                      {cred.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {cred.title}
                  </h3>

                  {cred.subtitle && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {cred.subtitle}
                    </p>
                  )}

                  {cred.credentialId && (
                    <div className="mt-2.5 inline-block px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {cred.credentialId}
                    </div>
                  )}

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cred.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cred.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalCred(cred)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View High-Res</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={cred.imageSrc}
                      download
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition"
                      title="Download Image"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                    {cred.verificationUrl && (
                      <a
                        href={cred.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
                      >
                        <span>Verify Source</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>

      {/* Interactive Lightbox Modal */}
      <CertificateModal
        credential={activeModalCred}
        onClose={() => setActiveModalCred(null)}
      />

    </div>
  );
};
