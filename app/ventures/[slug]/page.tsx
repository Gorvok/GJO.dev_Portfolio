import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ventures } from '@/data/ventures';

interface VenturePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all ventures
export async function generateStaticParams() {
    return ventures.map((venture) => ({
        slug: venture.slug,
    }));
}

// Generate metadata for each venture
export async function generateMetadata({ params }: VenturePageProps): Promise<Metadata> {
    const { slug } = await params;
    const venture = ventures.find((v) => v.slug === slug);

    if (!venture) {
        return {
            title: 'Venture Not Found',
        };
    }

    return {
        title: venture.title,
        description: venture.description,
        keywords: [venture.title, ...venture.tech, 'GJO Studio', 'Venture', 'Digital Product'],
        alternates: { canonical: `https://gjo.dev/ventures/${venture.slug}` },
        openGraph: {
            title: `${venture.title} | GJO Studio`,
            description: venture.description,
            url: `https://gjo.dev/ventures/${venture.slug}`,
            images: [{ url: '/images/gg-logo.png', width: 1200, height: 630, alt: venture.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${venture.title} | GJO Studio`,
            description: venture.description,
            images: ['/images/gg-logo.png'],
        },
    };
}

export default async function VenturePage({ params }: VenturePageProps) {
    const { slug } = await params;
    const venture = ventures.find((v) => v.slug === slug);

    if (!venture) {
        notFound();
    }

    // Get related ventures (other ventures, max 3)
    const relatedVentures = ventures
        .filter((v) => v.slug !== venture.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/ventures"
                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Ventures
                    </Link>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse-glow" />
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
              {venture.stage}
            </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {venture.title}
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-green-400/90 font-medium mb-6">
                        {venture.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                        {venture.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {venture.live ? (
                            <a
                                href={venture.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                <span className="relative z-10 flex items-center gap-2">
                  Visit Website
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </a>
                        ) : (
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </Link>
                        )}

                        <Link
                            href="/ventures"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl ring-2 ring-white/20 text-white/90 font-semibold hover:bg-white/10 hover:ring-white/40 hover:scale-105 transition-all duration-300"
                        >
                            View All Ventures
                        </Link>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About This Venture</h2>

                        <div className="space-y-6 text-white/70 leading-relaxed">
                            <p className="text-lg">
                                {venture.description}
                            </p>

                            {/* Details Grid */}
                            <div className="grid gap-4 md:grid-cols-2 mt-8">
                                <div className="rounded-xl bg-white/5 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
                                    <p className="text-white/60">{venture.stage}</p>
                                </div>

                                <div className="rounded-xl bg-white/5 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">Role</h3>
                                    <p className="text-white/60">{venture.role}</p>
                                </div>

                                <div className="rounded-xl bg-white/5 p-6 md:col-span-2">
                                    <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {venture.tech.map((technology) => (
                                            <span
                                                key={technology}
                                                className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-green-500/10 to-sky-500/10 text-white ring-1 ring-white/10"
                                            >
                        {technology}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Ventures */}
            {relatedVentures.length > 0 && (
                <section className="px-4 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                More Ventures
                            </h2>
                            <p className="text-white/60">Explore other projects from GJO Studio</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {relatedVentures.map((relatedVenture, index) => (
                                <Link
                                    key={relatedVenture.slug}
                                    href={`/ventures/${relatedVenture.slug}`}
                                    className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 flex flex-col hover:ring-sky-400/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-green-500/0 via-sky-500/0 to-purple-500/0 group-hover:from-green-500/20 group-hover:via-sky-500/20 group-hover:to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                                        {relatedVenture.title}
                                    </h3>

                                    <p className="text-sm text-green-400/90 mb-3">{relatedVenture.tagline}</p>

                                    <p className="text-sm text-white/70 leading-relaxed">
                                        {relatedVenture.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
