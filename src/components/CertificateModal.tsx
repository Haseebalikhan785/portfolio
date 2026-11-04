import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, ShieldCheck, ZoomIn, Award } from './Icons';
import { VerifiedCredential } from '../types';

interface CertificateModalProps {
  credential: VerifiedCredential | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ credential, onClose }) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (credential) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [credential, onClose]);

  if (!credential) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {credential.verificationType}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {credential.date}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                {credential.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomed(!zoomed)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              title={zoomed ? 'Fit to screen' : 'Zoom 100%'}
            >
              <ZoomIn className={`w-4 h-4 ${zoomed ? 'text-blue-600 dark:text-blue-400' : ''}`} />
            </button>
            <a
              href={credential.imageSrc}
              download
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              title="Download Original Image"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Certificate Image & Info */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/60 flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-center">
          
          {/* Certificate Image Canvas */}
          <div className="flex-1 w-full flex items-center justify-center bg-white dark:bg-slate-900/60 p-2 sm:p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-inner overflow-auto min-h-[300px]">
            <img
              src={credential.imageSrc}
              alt={credential.title}
              className={`rounded-lg object-contain transition-all duration-300 cursor-zoom-in ${
                zoomed ? 'max-w-none w-full shadow-2xl' : 'max-h-[60vh] w-auto shadow-md'
              }`}
              onClick={() => setZoomed(!zoomed)}
            />
          </div>

          {/* Details Sidebar / Drawer */}
          <div className="w-full lg:w-80 shrink-0 space-y-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                Verification Details
              </span>

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Issuing Body</span>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  {credential.issuer}
                </p>
              </div>

              {credential.venue && (
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Venue / Authority</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {credential.venue}
                  </p>
                </div>
              )}

              {credential.credentialId && (
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Credential ID / Reg No.</span>
                  <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 break-all">
                    {credential.credentialId}
                  </p>
                </div>
              )}

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Summary</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                  {credential.description}
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1.5">Associated Skills</span>
                <div className="flex flex-wrap gap-1.5">
                  {credential.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <a
                href={credential.imageSrc}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Raw High-Res Image</span>
              </a>

              {credential.verificationUrl && (
                <a
                  href={credential.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Project / Online Verification</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
