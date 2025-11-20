import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import {JSX} from "react";

export const metadata: Metadata = {
    title: 'Services',
    description: 'Professional web development, mobile development, UI/UX design, and technical consulting services from GJO Studio.',
};

// Icon component mapper
function ServiceIcon({ icon }: { icon: string }) {
    const icons: Record<string, JSX.Element> = {
        code: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        mobile: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        design: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        consulting: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    };

    return icons[icon] || icons.code;
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-7xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
              Services & Offerings
            </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        How I Can{' '}
                        <span className="bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Help You
            </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-8">
                        From concept to launch, I provide end-to-end development services to bring your digital products to life.
                    </p>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300"
                    >
                        Get Started
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-6 md:grid-cols-2">
                        {services.map((service, index) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8 md:p-10 flex flex-col hover:ring-sky-400/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-green-500/0 via-sky-500/0 to-purple-500/0 group-hover:from-green-500/20 group-hover:via-sky-500/20 group-hover:to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 group-hover:ring-sky-400/50 transition-all duration-300">
                                    <ServiceIcon icon={service.icon} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-green-400/90 font-medium mb-4 group-hover:text-green-300 transition-colors duration-300">
                                        {service.tagline}
                                    </p>

                                    <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    {/* Features Preview */}
                                    <div className="mb-6">
                                        <p className="text-xs uppercase tracking-wider text-white/50 mb-3 font-medium">Key Features</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.slice(0, 4).map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 text-xs rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10"
                                                >
                          {feature}
                        </span>
                                            ))}
                                            {service.features.length > 4 && (
                                                <span className="px-3 py-1 text-xs rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10">
                          +{service.features.length - 4} more
                        </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    {service.pricing && (
                                        <div className="pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-white/50">Starting at</span>
                                                <span className="text-2xl font-bold text-white">{service.pricing.starting}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Arrow */}
                                <div className="flex items-center gap-1 text-sm font-medium text-sky-400 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-12 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and how I can help bring your ideas to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Contact Me</span>
                                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </Link>

                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl ring-2 ring-white/20 text-white/90 font-semibold hover:bg-white/10 hover:ring-white/40 hover:scale-105 transition-all duration-300"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
