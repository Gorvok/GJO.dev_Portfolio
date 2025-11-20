'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, getAllCategories } from '@/data/projects';

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = getAllCategories(); // Already includes "All" from helper function

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                {/* Background */}
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

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Selected{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-green-400 bg-clip-text text-transparent">
              Projects
            </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12">
                        A showcase of web and mobile applications I&apos;ve built for clients and personal projects.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-500 to-sky-500 text-white shadow-lg shadow-sky-500/25'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white ring-1 ring-white/10 hover:ring-white/20'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Count */}
                    <div className="mb-8">
                        <p className="text-white/60">
                            Showing <span className="text-white font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                        </p>
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
                                {/* Glow effect */}
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/0 via-sky-500/0 to-green-500/0 group-hover:from-purple-500/20 group-hover:via-sky-500/20 group-hover:to-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                {/* Image Placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-sky-500/20 flex items-center justify-center relative overflow-hidden">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm ring-1 ring-white/10">
                                        <span className="text-xs font-medium text-white">{project.category}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((technology) => (
                                            <span
                                                key={technology}
                                                className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10"
                                            >
                        {technology}
                      </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60 ring-1 ring-white/10">
                        +{project.tech.length - 3}
                      </span>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <span className="text-xs text-white/50">{new Date(project.date).getFullYear()}</span>

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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
                            <p className="text-white/60 mb-6">Try selecting a different category</p>
                            <button
                                onClick={() => setSelectedCategory('All')}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-sky-500 text-white font-semibold hover:scale-105 transition-all duration-300"
                            >
                                View All Projects
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
