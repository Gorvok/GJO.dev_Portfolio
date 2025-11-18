import { Link } from "react-router-dom";
import { ventures as VENTURES } from "../data/ventures";

export default function HomeStudioSection() {
    const featured = VENTURES.filter((v) => v.highlight).slice(0, 3);

    return (
        <section className="relative px-4 pb-20 pt-8 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-10 md:mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="flex-1">
                            {/* Section badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10
                                          px-4 py-1.5 ring-1 ring-white/10 mb-4">
                                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                                    Portfolio
                                </span>
                            </div>

                            {/* Title and description */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                                The{" "}
                                <span className="bg-gradient-to-r from-green-400 via-sky-400 to-purple-400
                                             bg-clip-text text-transparent">
                                    GJO Studio
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
                                One builder, multiple products. I run a small studio focused on
                                education, tooling, and long-term, maintainable systems that make a difference.
                            </p>
                        </div>

                        {/* View all button */}
                        <Link
                            to="/ventures"
                            className="group self-start inline-flex items-center gap-2 px-6 py-3
                                     rounded-xl ring-2 ring-white/20 text-white/90 font-semibold
                                     hover:bg-white/10 hover:ring-white/40 hover:scale-105
                                     transition-all duration-300"
                        >
                            <span>View All Ventures</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </header>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featured.length === 0 && (
                        <div className="col-span-full rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02]
                                      ring-1 ring-white/10 p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                                          bg-sky-500/10 ring-1 ring-sky-500/20 mb-4">
                                <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <p className="text-sm text-white/60">
                                Add ventures in <code className="px-2 py-1 rounded bg-white/5 text-sky-400 font-mono text-xs">
                                src/data/ventures.js</code> to feature them here.
                            </p>
                        </div>
                    )}

                    {featured.map((v, index) => (
                        <article
                            key={v.slug}
                            className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                                     ring-1 ring-white/10 p-6 md:p-7 flex flex-col
                                     hover:ring-sky-400/50 hover:from-white/[0.12] hover:to-white/[0.05]
                                     transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-green-500/0 via-sky-500/0 to-purple-500/0
                                          group-hover:from-green-500/20 group-hover:via-sky-500/20 group-hover:to-purple-500/20
                                          blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            {/* Content */}
                            <div className="relative flex flex-col h-full">
                                {/* Header with icon */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1
                                                     group-hover:text-transparent group-hover:bg-gradient-to-r
                                                     group-hover:from-green-400 group-hover:to-sky-400
                                                     group-hover:bg-clip-text transition-all duration-300">
                                            {v.title}
                                        </h3>
                                        {v.tagline && (
                                            <p className="text-sm font-medium text-green-400/90 group-hover:text-green-300
                                                        transition-colors duration-300">
                                                {v.tagline}
                                            </p>
                                        )}
                                    </div>

                                    {/* Icon/Badge */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20
                                                  ring-1 ring-white/10 flex items-center justify-center
                                                  group-hover:scale-110 group-hover:ring-sky-400/50 transition-all duration-300">
                                        <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1 mb-4
                                            group-hover:text-white/90 transition-colors duration-300">
                                    {v.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5
                                              group-hover:border-white/10 transition-colors duration-300">
                                    {v.stage && (
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                                            <span className="text-xs font-medium text-white/50 uppercase tracking-wide
                                                          group-hover:text-white/70 transition-colors duration-300">
                                                {v.stage}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-500/10 to-transparent
                                          rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </article>
                    ))}
                </div>

                {/* Bottom CTA or info section */}
                {featured.length > 0 && (
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 ring-1 ring-white/10">
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-white/70">
                                <span className="font-semibold text-white">{featured.length}</span> featured ventures
                                {VENTURES.length > featured.length && (
                                    <span className="text-white/50"> · {VENTURES.length - featured.length} more available</span>
                                )}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
