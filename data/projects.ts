export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    longDescription?: string;
    image?: string;
    tech: string[];
    date: string;
    client?: string;
    live?: string | null;
    repo?: string | null;
    kind: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        slug: "spotify-autosave-app",
        title: "Spotify Autosave App",
        image: "/images/projects/spotify-autosave.png",
        category: "Experiment",
        description:
            "Automatically save an artist's entire library to your Spotify account with a Flask-powered tool.",
        longDescription:
            "A Python Flask application that integrates with the Spotify API to automatically save all songs from your favorite artists to your library. Built to solve the problem of manually adding hundreds of tracks, this tool authenticates with Spotify and processes bulk saves efficiently.",
        tech: ["Python", "Flask", "Spotify API"],
        date: "2024-05-01",
        live: null,
        repo: "https://github.com/Gorvok/spotify_autosave_app",
        kind: "experiment",
        featured: true,
    },
    {
        slug: "tiny-farm-web-game",
        title: "Tiny Farm Web Game",
        image: "/images/projects/tiny-farm-game.png",
        category: "Experiment",
        description:
            "A lightweight browser-based clicker game built with HTML Canvas.",
        longDescription:
            "A fun incremental clicker game built entirely with vanilla JavaScript and HTML5 Canvas. Features include resource management, upgrades, and a simple farming mechanic. No frameworks needed - just pure JavaScript goodness.",
        tech: ["HTML5", "JavaScript", "Canvas"],
        date: "2023-08-12",
        live: "https://gorvok.github.io/tiny-farm-game/",
        repo: "https://github.com/Gorvok/tiny-farm-game",
        kind: "experiment",
        featured: true,
    },
    // Venture-related projects
    {
        slug: "lumoraverse-platform",
        title: "LumoraVerse Platform",
        image: "/images/projects/lumoraverse-img.png",
        category: "Web Development",
        description:
            "Full homeschool ecosystem with AI-powered planner and educational resources.",
        longDescription:
            "A comprehensive homeschool management platform designed for Christian families. Features include an AI-powered lesson planner, curriculum tracking, resource library, and progress analytics. Built with modern web technologies for a seamless experience across devices.",
        tech: ["Next.js", "TypeScript", "AI", "Tailwind CSS"],
        date: "2024-01-01",
        live: "https://www.lumoraverse.com",
        repo: null,
        kind: "venture",
        featured: true,
    },
    {
        slug: "jayobe",
        title: "Jayobe",
        image: "/images/projects/jayobe-img.png",
        category: "Web Development",
        description:
            "The smarter way to find local jobs — verified opportunities from real businesses, apply in seconds.",
        longDescription:
            "Jayobe is a verified local job discovery platform built for job seekers and employers. Every business is verified, applications take seconds, and it's 100% free for job seekers. Built on a modern full-stack: Next.js + TypeScript frontend, Bun with Elysia on the backend, Supabase for database/auth/storage, Stripe for payments, Mapbox for location-aware job listings, and Resend for transactional email. Currently launching in Michigan with hundreds on the waitlist.",
        tech: ["Next.js", "TypeScript", "Bun", "Elysia", "Supabase", "Stripe", "Mapbox", "Resend", "Shadcn/ui", "Railway", "Vercel"],
        date: "2026-03-23",
        live: "https://www.jayobe.io",
        repo: null,
        kind: "venture",
        featured: true,
    },
    {
        slug: "nautitrail-app",
        title: "NautiTrail",
        image: "/images/projects/nautitrail-img.png",
        category: "Web Development",
        description:
            "Outdoor discovery platform for trail exploration and eco-tourism planning.",
        longDescription:
            "A lightweight trail and route discovery application for outdoor adventurers. Features interactive maps, route planning, and trail information. Built for clarity and speed with a focus on the essentials.",
        tech: ["Next.js", "Maps API", "TypeScript"],
        date: "2024-03-01",
        live: "https://www.nautitrail.com",
        repo: null,
        kind: "venture",
        featured: true,
    },
    {
        slug: "secrts-app",
        title: "Secrts",
        image: "/images/projects/secrts-img.png",
        category: "Web Development",
        description:
            "Private sharing and collaboration app for couples.",
        longDescription:
            "A modern application focused on private sharing and simple, secure collaboration for couples. Built with privacy and simplicity in mind.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        date: "2024-02-01",
        live: "https://secrts.com",
        repo: null,
        kind: "venture",
        featured: false,
    },
];

// Helper functions
export function getFeaturedProjects() {
    return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string) {
    if (category === 'All') return projects;
    return projects.filter((p) => p.category === category);
}

export function getProjectsByKind(kind: string) {
    return projects.filter((p) => p.kind === kind);
}

export function getAllCategories() {
    const categories = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...categories];
}

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
