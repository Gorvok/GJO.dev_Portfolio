'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectsSortedByDate, getAllCategories, getAllYears } from '@/data/projects';

const allProjects = getProjectsSortedByDate();

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [search, setSearch] = useState<string>('');

    const categories = getAllCategories();
    const years = getAllYears();

    const filteredProjects = allProjects.filter((p) => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesYear = selectedYear === null || new Date(p.date).getFullYear() === selectedYear;
        const q = search.toLowerCase();
        const matchesSearch =
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tech.some((t) => t.toLowerCase().includes(q));
        return matchesCategory && matchesYear && matchesSearch;
    });

    const hasActiveFilters = selectedCategory !== 'All' || selectedYear !== null || search !== '';

    function clearFilters() {
        setSelectedCategory('All');
        setSelectedYear(null);
        setSearch('');
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-7xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                            Portfolio & Work
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Selected{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-green-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
                        A showcase of web and mobile applications I&apos;ve built for clients and personal projects.
                    </p>

                    {/* Search */}
                    <div className="max-w-xl mx-auto mb-8">
                        <div className="relative">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search projects, tech, keywords…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-sky-400/50 transition-all duration-300 text-sm"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                                    aria-label="Clear search"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-500 to-sky-500 text-white shadow-lg shadow-sky-500/25'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white ring-1 ring-white/10 hover:ring-white/20'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Year Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="text-xs text-white/30 uppercase tracking-widest mr-1">Year</span>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-300 ${
                                    selectedYear === year
                                        ? 'bg-green-500/20 text-green-300 ring-1 ring-green-400/40'
                                        : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white ring-1 ring-white/10'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Count + clear */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-white/60 text-sm">
                            Showing <span className="text-white font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                            {hasActiveFilters && <span className="text-white/40">, filtered</span>}
                        </p>
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="text-xs text-white/40 hover:text-white/80 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear filters
                            </button>
                        )}
                    </div>

                    {/* Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <Link
                                key={project.slug}
                                href={`/portfolio/${project.slug}`}
                                className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 overflow-hidden hover:ring-sky-400/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/0 via-sky-500/0 to-green-500/0 group-hover:from-purple-500/20 group-hover:via-sky-500/20 group-hover:to-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-sky-500/20 flex items-center justify-center relative overflow-hidden">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    ) : (
                                        <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm ring-1 ring-white/10">
                                        <span className="text-xs font-medium text-white">{project.category}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((technology) => (
                                            <span key={technology} className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10">
                                                {technology}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <span className="text-xs text-white/50 font-mono">{new Date(project.date).getFullYear()}</span>
                                        <div className="flex items-center gap-1 text-xs font-medium text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <span>View Project</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-500/10 ring-1 ring-sky-500/20 mb-6">
                                <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
                            <p className="text-white/60 mb-6">Try adjusting your search or filters</p>
                            <button
                                onClick={clearFilters}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-sky-500 text-white font-semibold hover:scale-105 transition-all duration-300"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
