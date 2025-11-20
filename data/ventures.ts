export interface Venture {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    tech: string[];
    live?: string;
    repo?: string | null;
    role: string;
    stage: string;
    highlight: boolean;
}

export const ventures: Venture[] = [
    {
        slug: "lumoraverse",
        title: "LumoraVerse",
        tagline: "A homeschool ecosystem for Christian families.",
        description:
            "A full homeschool ecosystem with an AI-powered planner, resources, and a long-term vision to make high-quality education accessible.",
        tech: ["Next.js", "TypeScript", "AI"],
        live: "https://www.lumoraverse.com",
        role: "Founder · Lead Developer",
        stage: "In active development",
        highlight: true,
    },
    {
        slug: "gjo-dev-studio",
        title: "GJO Dev Studio",
        tagline: "Digital product studio.",
        description:
            "The umbrella for all my ventures and projects. Building apps, tools, and digital experiences across web and mobile platforms.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        role: "Founder · Developer",
        stage: "Active",
        highlight: true,
    },
    {
        slug: "nautitrail",
        title: "NautiTrail",
        tagline: "Outdoor discovery and eco-tourism planning.",
        description:
            "A lightweight trail/route experience for the outdoor adventurer for clarity and speed.",
        tech: ["Next.js", "Maps"],
        live: "https://www.nautitrail.com",
        role: "Founder",
        stage: "Concept / early build",
        highlight: false,
    },
    {
        slug: "secrts",
        title: "Secrts",
        tagline: "Cute little couples app...",
        description:
            "A modern app focused on private sharing and simple, secure collaboration.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        live: "https://secrts.com",
        repo: null,
        role: "Founder",
        stage: "Concept / early build",
        highlight: false,
    },
    {
        slug: "portfolio-projects",
        title: "Portfolio Projects",
        tagline: "Client work & custom solutions.",
        description:
            "Custom web and mobile applications for clients across various industries. From e-commerce to SaaS platforms.",
        tech: ["Next.js", "React", "TypeScript", "Flutter"],
        role: "Developer · Consultant",
        stage: "Ongoing",
        highlight: true,
    },
];
