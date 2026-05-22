import type { Metadata } from 'next';
import Link from 'next/link';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
    title: 'Ventures',
    description: 'Explore all ventures from GJO Studio — LumoraVerse, Jayobe, NautiTrail, Secrts, and more. Digital products across web, mobile, and AI.',
    keywords: ['GJO Ventures', 'LumoraVerse', 'Jayobe', 'NautiTrail', 'Secrts', 'Digital Products', 'Startups', 'Indie Developer'],
    alternates: { canonical: 'https://gjo.dev/ventures' },
    openGraph: {
        title: 'Ventures | GJO Studio',
        description: 'LumoraVerse, Jayobe, NautiTrail, Secrts — digital products built by GJO across web, mobile, and AI.',
        url: 'https://gjo.dev/ventures',
        images: [{ url: '/images/gg-logo.png', width: 1200, height: 630, alt: 'GJO Studio Ventures' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ventures | GJO Studio',
        description: 'LumoraVerse, Jayobe, NautiTrail, Secrts — digital products built by GJO.',
        images: ['/images/gg-logo.png'],
    },
};

export default function VenturesPage() {
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
              Ventures & Projects
            </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Building the{' '}
                        <span className="bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Future
            </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        A collection of digital products, tools, and platforms I&apos;m building to solve real problems and create lasting value.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-1">{ventures.length}</span>
                            <span className="text-sm text-white/50">Total Ventures</span>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                {ventures.filter(v => v.stage?.toLowerCase().includes('active')).length}
              </span>
                            <span className="text-sm text-white/50">Active Projects</span>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-1">∞</span>
                            <span className="text-sm text-white/50">Ideas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ventures Grid */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {ventures.map((venture, index) => (
                            <Link
                                key={venture.slug}
                                href={`/ventures/${venture.slug}`}
                                className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 md:p-7 flex flex-col hover:ring-sky-400/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-green-500/0 via-sky-500/0 to-purple-500/0 group-hover:from-green-500/20 group-hover:via-sky-500/20 group-hover:to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                {/* Content */}
                                <div className="relative flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                                                {venture.title}
                                            </h3>
                                            <p className="text-sm font-medium text-green-400/90 group-hover:text-green-300 transition-colors duration-300">
                                                {venture.tagline}
                                            </p>
                                        </div>

                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center group-hover:scale-110 group-hover:ring-sky-400/50 transition-all duration-300">
                                            <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1 mb-4 group-hover:text-white/90 transition-colors duration-300">
                                        {venture.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse-glow" />
                                            <span className="text-xs font-medium text-white/50 uppercase tracking-wide group-hover:text-white/70 transition-colors duration-300">
                        {venture.stage}
                      </span>
                                        </div>

                                        {/* Arrow */}
                                        <div className="ml-auto flex items-center gap-1 text-xs font-medium text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <span>View Details</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {ventures.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-500/10 ring-1 ring-sky-500/20 mb-6">
                                <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Ventures Yet</h3>
                            <p className="text-white/60">Check back soon for exciting new projects!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
