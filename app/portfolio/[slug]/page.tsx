import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects, getProjectBySlug } from '@/data/projects';

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    const ogImage = project.image
        ? { url: project.image, width: 1200, height: 630, alt: project.title }
        : { url: '/images/gg-logo.png', width: 1200, height: 630, alt: 'GJO Studio' };

    return {
        title: project.title,
        description: project.longDescription ?? project.description,
        keywords: [project.title, project.category, ...project.tech, 'GJO Studio', 'Portfolio'],
        alternates: { canonical: `https://gjo.dev/portfolio/${project.slug}` },
        openGraph: {
            title: `${project.title} | GJO Studio`,
            description: project.description,
            url: `https://gjo.dev/portfolio/${project.slug}`,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | GJO Studio`,
            description: project.description,
            images: [ogImage.url],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Get related projects (same category, excluding current)
    const relatedProjects = projects
        .filter((p) => p.category === project.category && p.slug !== project.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>

                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Left: Info */}
                        <div>
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                  {project.category}
                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                {project.title}
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-white/60 leading-relaxed mb-6">
                                {project.longDescription || project.description}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="rounded-xl bg-white/5 p-4">
                                    <h3 className="text-sm font-medium text-white/50 mb-1">Date</h3>
                                    <p className="text-lg font-semibold text-white">{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                                </div>

                                {project.client && (
                                    <div className="rounded-xl bg-white/5 p-4">
                                        <h3 className="text-sm font-medium text-white/50 mb-1">Client</h3>
                                        <p className="text-lg font-semibold text-white">{project.client}</p>
                                    </div>
                                )}

                                <div className="rounded-xl bg-white/5 p-4">
                                    <h3 className="text-sm font-medium text-white/50 mb-1">Type</h3>
                                    <p className="text-lg font-semibold text-white capitalize">{project.kind}</p>
                                </div>

                                <div className="rounded-xl bg-white/5 p-4">
                                    <h3 className="text-sm font-medium text-white/50 mb-1">Category</h3>
                                    <p className="text-lg font-semibold text-white">{project.category}</p>
                                </div>

                                <div className="rounded-xl bg-white/5 p-4 col-span-2">
                                    <h3 className="text-sm font-medium text-white/50 mb-2">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((technology) => (
                                            <span
                                                key={technology}
                                                className="px-3 py-1 text-sm rounded-lg bg-white/5 text-white/80 ring-1 ring-white/10"
                                            >
                        {technology}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                                    >
                    <span className="relative z-10 flex items-center gap-2">
                      View Live Site
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                    </a>
                                )}

                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl ring-2 ring-white/20 text-white/90 font-semibold hover:bg-white/10 hover:ring-white/40 hover:scale-105 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        View Code
                                    </a>
                                )}

                                {!project.live && !project.repo && (
                                    <Link
                                        href="/contact"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                                    >
                                        <span className="relative z-10">Inquire About Project</span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="sticky top-24">
                                <div className="aspect-video rounded-3xl bg-gradient-to-br from-purple-500/20 to-sky-500/20 flex items-center justify-center overflow-hidden ring-1 ring-white/10 relative">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <svg className="w-20 h-20 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="px-4 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                More from {project.category}
                            </h2>
                            <p className="text-white/60">Check out similar projects</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {relatedProjects.map((relatedProject) => (
                                <Link
                                    key={relatedProject.slug}
                                    href={`/portfolio/${relatedProject.slug}`}
                                    className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 overflow-hidden hover:ring-sky-400/50 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-sky-500/20 flex items-center justify-center relative">
                                        {relatedProject.image ? (
                                            <Image
                                                src={relatedProject.image}
                                                alt={relatedProject.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{relatedProject.title}</h3>
                                        <p className="text-sm text-white/70">{relatedProject.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
