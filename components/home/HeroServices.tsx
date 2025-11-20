'use client';

import {JSX} from "react";

interface Service {
    name: string;
    description: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
    const iconMap: Record<string, JSX.Element> = {
        'Web & App Development': (
            <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        ),
        'UI × UX': (
            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
            </svg>
        ),
    };

    return (
        <div className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-sky-500 to-purple-500
                    rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative rounded-3xl bg-gradient-to-r from-green-500 to-sky-500 p-[2px]
                    transition-all duration-300 group-hover:scale-[1.02]">
                <div className="rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950
                      h-full p-8 md:p-10 flex flex-col items-center text-center
                      group-hover:from-gray-900 group-hover:to-gray-950 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-sky-500/20 to-purple-500/20
                        ring-1 ring-white/10 flex items-center justify-center mb-6
                        group-hover:scale-110 group-hover:ring-sky-400/50 transition-all duration-300">
                        {iconMap[service.name] || (
                            <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3
                       group-hover:text-transparent group-hover:bg-gradient-to-r
                       group-hover:from-green-400 group-hover:to-sky-400
                       group-hover:bg-clip-text transition-all duration-300">
                        {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md
                      group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-sky-500/5 to-transparent
                        rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-green-500/5 to-transparent
                        rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
        </div>
    );
}

export default function HeroServices() {
    const services: Service[] = [
        {
            name: 'Web & App Development',
            description: 'Custom web and mobile application development services to suit your needs.',
        },
        {
            name: 'UI × UX',
            description:
                'User-focused interface and experience design to enhance satisfaction and engagement.',
        },
    ];

    return (
        <section id="services" aria-labelledby="top-services" className="relative px-4 pb-20 pt-8 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-12 md:mb-16 text-center">
                    {/* Section badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10
                        px-4 py-1.5 ring-1 ring-white/10 mb-6">
                        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">Services</span>
                    </div>

                    {/* Title */}
                    <h2 id="top-services" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        What I{' '}
                        <span className="bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Offer
            </span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Specialized services to bring your digital products to life with modern technology and thoughtful
                        design.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-12">
                    {services.map((service, index) => (
                        <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="/services"
                            className="group relative inline-flex items-center gap-2 px-8 py-4
                       bg-gradient-to-r from-green-500 to-sky-500 rounded-xl
                       font-semibold text-white shadow-lg shadow-sky-500/25
                       hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105
                       transition-all duration-300 overflow-hidden"
                        >
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                            transition-transform duration-1000 bg-gradient-to-r from-transparent
                            via-white/20 to-transparent skew-x-12" />
                        </Link>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-8 py-4
                       rounded-xl ring-2 ring-white/20 text-white/90 font-semibold
                       hover:bg-white/10 hover:ring-white/40 hover:scale-105
                       transition-all duration-300"
                        >
                            Get Started
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Additional info */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/50">
                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p>Available for new projects · Fast turnaround</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Missing import
import Link from 'next/link';
