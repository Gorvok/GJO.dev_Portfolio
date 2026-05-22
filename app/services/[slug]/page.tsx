import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/data/services';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.title,
        description: service.description,
        keywords: [service.title, 'Web Development Services', 'GJO Studio', 'Freelance Developer Michigan'],
        alternates: { canonical: `https://gjo.dev/services/${service.slug}` },
        openGraph: {
            title: `${service.title} | GJO Studio`,
            description: service.description,
            url: `https://gjo.dev/services/${service.slug}`,
            images: [{ url: '/images/gg-logo.png', width: 1200, height: 630, alt: service.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | GJO Studio`,
            description: service.description,
            images: ['/images/gg-logo.png'],
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // Get other services for related section
    const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Services
                    </Link>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
              Service
            </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {service.title}
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-green-400/90 font-medium mb-6">
                        {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
                        {service.longDescription}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
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
            </section>

            {/* Features Section */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What&apos;s Included</h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            {service.features.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 ring-1 ring-white/5 hover:bg-white/10 hover:ring-white/10 transition-all duration-300"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500/20 to-sky-500/20 ring-1 ring-white/10 flex items-center justify-center mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack & Pricing */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Tech Stack */}
                        <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {service.tech.map((technology) => (
                                    <span
                                        key={technology}
                                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/10 to-sky-500/10 text-white ring-1 ring-white/10 font-medium"
                                    >
                    {technology}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Pricing */}
                        {service.pricing && (
                            <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Pricing</h3>
                                <div className="mb-4">
                                    <p className="text-sm text-white/50 mb-2">Starting at</p>
                                    <p className="text-4xl font-bold text-white mb-2">{service.pricing.starting}</p>
                                    {service.pricing.note && (
                                        <p className="text-sm text-white/60 leading-relaxed">{service.pricing.note}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">How It Works</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    step: '01',
                                    title: 'Discovery Call',
                                    description: 'We discuss your project goals, requirements, and timeline.',
                                },
                                {
                                    step: '02',
                                    title: 'Proposal & Planning',
                                    description: 'I provide a detailed proposal with scope, timeline, and pricing.',
                                },
                                {
                                    step: '03',
                                    title: 'Design & Development',
                                    description: 'I build your project with regular updates and feedback loops.',
                                },
                                {
                                    step: '04',
                                    title: 'Testing & Launch',
                                    description: 'Thorough testing, deployment, and handoff with documentation.',
                                },
                            ].map((phase, index) => (
                                <div
                                    key={phase.step}
                                    className="flex gap-6 p-6 rounded-xl bg-white/5 ring-1 ring-white/5 hover:bg-white/10 hover:ring-white/10 transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center">
                                            <span className="text-lg font-bold text-sky-400">{phase.step}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                                        <p className="text-white/60">{phase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            {otherServices.length > 0 && (
                <section className="px-4 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Other Services
                            </h2>
                            <p className="text-white/60">Explore what else I can help you with</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {otherServices.map((otherService) => (
                                <Link
                                    key={otherService.slug}
                                    href={`/services/${otherService.slug}`}
                                    className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 flex flex-col hover:ring-sky-400/50 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-sm text-white/70 mb-4">{otherService.description}</p>
                                    {otherService.pricing && (
                                        <p className="text-sm text-white/50 mt-auto">
                                            From <span className="text-white font-semibold">{otherService.pricing.starting}</span>
                                        </p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                            Ready to start your project? Get in touch for a free consultation.
                        </p>

                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Get Started</span>
                            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
