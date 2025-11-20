'use client';

import Link from 'next/link';
import Image from 'next/image';
import Typewriter from '@/components/ui/Typewriter';

export default function HeroHeader() {
    return (
        <section className="relative min-h-screen flex items-center px-4 md:px-10 py-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow"
                    style={{ animationDelay: '1s' }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
                    {/* Left: Main content */}
                    <div className="text-center lg:text-left space-y-6">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 via-sky-500/10 to-purple-500/10 px-5 py-2 ring-1 ring-white/10 backdrop-blur-sm">
                            <div className="flex gap-1">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse-glow" />
                                <div
                                    className="h-2 w-2 rounded-full bg-sky-500 animate-pulse-glow"
                                    style={{ animationDelay: '0.2s' }}
                                />
                                <div
                                    className="h-2 w-2 rounded-full bg-purple-500 animate-pulse-glow"
                                    style={{ animationDelay: '0.4s' }}
                                />
                            </div>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                                Builder · Developer · Founder
                            </p>
                        </div>

                        {/* Main heading */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-3">
                                Hey{' '}
                                <span
                                    role="img"
                                    aria-label="Waving Hand"
                                    className="inline-block origin-[70%_70%] hover:animate-[wave_0.5s_ease-in-out] cursor-pointer"
                                >
                  👋
                </span>
                                <span className="text-white/40">,</span>
                            </h1>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]">
                                I&apos;m{' '}
                                <span className="inline-block relative">
                  <span className="gradient-text relative z-10">GJO</span>
                                    {/* Glow effect behind text */}
                                    <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-green-500 via-sky-500 to-purple-500 opacity-50" />
                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            <span className="text-white/80 font-medium">gjo.dev</span> is the home base for
                            everything I create: apps, tools, and digital experiences across web and mobile
                            platforms.
                        </p>

                        {/* Focus section */}
                        <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.03] px-6 py-5 ring-1 ring-white/10 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 rounded-lg bg-gradient-to-br from-green-500/20 to-sky-500/20 p-2 ring-1 ring-white/10">
                                    <svg
                                        className="w-5 h-5 text-sky-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs uppercase tracking-wide text-white/50 mb-2 font-medium">
                                        Currently Focused On
                                    </p>
                                    <div className="gradient-text hover:gradient-animate text-lg sm:text-xl md:text-2xl font-semibold min-h-[2rem]">
                                        <Typewriter
                                            strings={[
                                                'LumoraVerse · a homeschool ecosystem',
                                                'AI-powered tools for education',
                                                'High-performance web experiences',
                                                'Long-term, maintainable systems',
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={50}
                                            delay={2500}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start pt-2">
                            <Link
                                href="/ventures"
                                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Ventures
                  <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                                {/* Animated shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </Link>

                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl ring-2 ring-white/20 text-white/90 font-semibold hover:bg-white/10 hover:ring-white/40 hover:scale-105 transition-all duration-300"
                            >
                                Work With Me
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>

                        {/* Social proof / stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-white/60">Available for projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 text-sky-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-white/60">Based in USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Logo card */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="relative group max-w-md w-full">
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-sky-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-8 py-10 md:px-10 md:py-12 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 group-hover:ring-white/20 transition-all duration-300">
                                {/* Animated border gradient */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(56,189,248,0.1), rgba(168,85,247,0.1))',
                                    }}
                                />

                                <div className="relative flex flex-col items-center text-center space-y-4">
                                    {/* Logo with enhanced glow */}
                                    <div className="relative">
                                        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-green-500 via-sky-500 to-purple-500 opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
                                        <Image
                                            src="/images/gg-logo.png"
                                            alt="GJO Logo"
                                            width={176}
                                            height={44}
                                            className="relative w-32 md:w-40 lg:w-44 mb-2 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                    </div>

                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 ring-1 ring-white/10">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse-glow" />
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
                      Studio
                    </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                                        GJO · Builder Hub
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xs">
                                        One developer, many products.{' '}
                                        <span className="text-white/80 font-medium">gjo.dev</span> is the umbrella for
                                        everything I&apos;m building.
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

                                    {/* Quick stats */}
                                    <div className="flex items-center justify-center gap-6 text-sm">
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl font-bold text-white mb-1">5+</span>
                                            <span className="text-xs text-white/50">Projects</span>
                                        </div>
                                        <div className="w-px h-10 bg-white/10" />
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl font-bold text-white mb-1">10+</span>
                                            <span className="text-xs text-white/50">Years</span>
                                        </div>
                                        <div className="w-px h-10 bg-white/10" />
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl font-bold text-white mb-1">∞</span>
                                            <span className="text-xs text-white/50">Ideas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-white/40 uppercase tracking-wider">Scroll</span>
                <svg
                    className="w-5 h-5 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
