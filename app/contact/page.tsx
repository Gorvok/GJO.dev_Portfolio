'use client';

import React, { useState } from 'react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mpzvbzkl', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                Get in Touch
              </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Let&apos;s Work{' '}
                            <span className="bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                Together
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? I&apos;m always open to discussing new opportunities, creative ideas, or partnerships.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">
                        <div className="space-y-6">
                            <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                                <div className="space-y-4">
                                    <a
                                        href="mailto:hello@gjo.dev"
                                        className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/5 hover:bg-white/10 hover:ring-white/10 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white/50 mb-1">Email</p>
                                            <p className="text-white font-medium break-all group-hover:text-sky-400 transition-colors duration-300">
                                                hello@gjo.dev
                                            </p>
                                        </div>
                                        <svg className="w-5 h-5 text-white/30 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://github.com/Gorvok"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/5 hover:bg-white/10 hover:ring-white/10 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white/50 mb-1">GitHub</p>
                                            <p className="text-white font-medium break-all group-hover:text-sky-400 transition-colors duration-300">
                                                github.com/Gorvok
                                            </p>
                                        </div>
                                        <svg className="w-5 h-5 text-white/30 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/gjovanigorvokaj/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/5 hover:bg-white/10 hover:ring-white/10 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white/50 mb-1">LinkedIn</p>
                                            <p className="text-white font-medium break-all group-hover:text-sky-400 transition-colors duration-300">
                                                gjovanigorvokaj
                                            </p>
                                        </div>
                                        <svg className="w-5 h-5 text-white/30 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-sky-500/20 ring-1 ring-white/10 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-glow" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">Currently Available</h3>
                                        <p className="text-sm text-white/60 leading-relaxed">
                                            I&apos;m available for freelance projects and collaborations. Typical response time: 1-2 business days.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8">
                                <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://x.com/gorvok_5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm font-medium ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 transition-all duration-300"
                                    >
                                        X
                                    </a>
                                    <a
                                        href="https://instagram.com/gorvok_5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm font-medium ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 transition-all duration-300"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://discord.com/users/884621877232930848"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-lg bg-white/5 text-white/70 text-sm font-medium ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 transition-all duration-300"
                                    >
                                        Discord
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                            {isSubmitted && (
                                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-sky-500/20 ring-1 ring-green-500/20 animate-fade-in">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-white font-medium">Message sent successfully!</p>
                                            <p className="text-sm text-white/60">I&apos;ll get back to you soon.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="_subject" value="New message from gjo.dev" />

                                <div className="hidden" aria-hidden="true">
                                    <label>
                                        Do not fill this out if you are human:
                                        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                        Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your name"
                                        required
                                        autoComplete="name"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        required
                                        autoComplete="email"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="What's this about?"
                                        autoComplete="off"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={6}
                                        placeholder="Tell me about your project..."
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                                    {!isSubmitting && (
                                        <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    )}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                </button>

                                <p className="text-xs text-white/50 text-center">
                                    By submitting this form, you agree to be contacted via email.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-white/60">Quick answers to common questions</p>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300">
                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-white">What is your typical response time?</h3>
                                <svg className="w-5 h-5 text-white/50 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-white/60 leading-relaxed">
                                I usually respond within 1-2 business days. For urgent inquiries, please mention it in your message.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300">
                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-white">Do you work with international clients?</h3>
                                <svg className="w-5 h-5 text-white/50 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-white/60 leading-relaxed">
                                Yes! I work with clients from all over the world. I am based in Michigan, USA (EST timezone).
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300">
                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-white">What types of projects do you take on?</h3>
                                <svg className="w-5 h-5 text-white/50 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-white/60 leading-relaxed">
                                I specialize in web and mobile development, UI/UX design, and technical consulting. I work on everything from MVPs to full-scale applications.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300">
                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-white">How do you handle payments?</h3>
                                <svg className="w-5 h-5 text-white/50 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-white/60 leading-relaxed">
                                I typically work with milestone-based payments. We will discuss payment terms during our initial consultation.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}
