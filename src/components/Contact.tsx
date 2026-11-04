import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Github, Linkedin, ExternalLink, MessageSquare, AlertCircle } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    // Open default mailto with prefilled content
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Currently interviewing for Full-Stack, Backend, and Android engineering roles. Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition"
                  title="Copy email address"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-pulse">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Location & Notice
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location} · Immediate Joiner
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {PERSONAL_INFO.workMode}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition" />
              </a>
            </div>

          </div>

          {/* Right Column (7 cols): Validated Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out this form to connect directly. Typical response time is under 12 hours.
            </p>

            {formError && (
              <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {formSubmitted && (
              <div className="mb-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message dispatched! Opening your mail client to confirm delivery.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Miller"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Software Engineering Role / Project Discussion"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details about the role, team, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/25 transition flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
