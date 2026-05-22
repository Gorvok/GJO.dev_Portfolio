export interface Service {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    features: string[];
    tech: string[];
    pricing?: {
        starting: string;
        note?: string;
    };
    icon: string; // Icon identifier for custom SVG icons
}

export const services: Service[] = [
    {
        slug: "web-development",
        title: "Web Development",
        tagline: "Modern web applications built to scale",
        description:
            "Custom web applications with modern frameworks, responsive design, and optimized performance.",
        longDescription:
            "I build high-quality web applications using the latest technologies like Next.js, React, and TypeScript. From landing pages to full-stack web apps, I focus on clean code, great UX, and performance. Whether you need a marketing site, SaaS platform, or e-commerce store, I'll create a solution tailored to your needs.",
        features: [
            "Responsive design for all devices",
            "SEO optimization",
            "Fast loading times",
            "Modern UI/UX design",
            "API integration",
            "Database design & setup",
            "Authentication & authorization",
            "Hosting & deployment",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Postgres"],
        pricing: {
            starting: "$2,000",
            note: "Starting price for basic projects. Custom quotes for complex applications.",
        },
        icon: "code",
    },
    {
        slug: "mobile-development",
        title: "Mobile App Development",
        tagline: "Cross-platform mobile apps",
        description:
            "Native-quality mobile applications for iOS and Android using modern cross-platform frameworks.",
        longDescription:
            "Build mobile applications that work seamlessly on both iOS and Android. Using Flutter and React Native, I create apps that feel native while sharing a single codebase. Perfect for startups and businesses looking to launch on multiple platforms efficiently.",
        features: [
            "iOS & Android support",
            "Native performance",
            "Push notifications",
            "Offline functionality",
            "App store submission",
            "Backend integration",
            "In-app purchases",
            "Analytics integration",
        ],
        tech: ["Flutter", "React Native", "Firebase", "TypeScript"],
        pricing: {
            starting: "$5,000",
            note: "Starting price for MVP. Full-featured apps quoted separately.",
        },
        icon: "mobile",
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        tagline: "Beautiful, user-centered interfaces",
        description:
            "User interface and experience design that puts your users first while maintaining your brand identity.",
        longDescription:
            "Great design is more than aesthetics,it's about creating intuitive experiences that users love. I design interfaces that are both beautiful and functional, with a focus on usability, accessibility, and conversion. From wireframes to high-fidelity prototypes, I'll help bring your vision to life.",
        features: [
            "User research & personas",
            "Wireframing & prototyping",
            "Visual design",
            "Design systems",
            "Responsive layouts",
            "Accessibility compliance",
            "Brand guidelines",
            "Usability testing",
        ],
        tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
        pricing: {
            starting: "$1,500",
            note: "Pricing varies based on project scope and deliverables.",
        },
        icon: "design",
    },
    {
        slug: "consulting",
        title: "Technical Consulting",
        tagline: "Strategic guidance for your projects",
        description:
            "Technical expertise and strategic advice to help you make informed decisions about your digital products.",
        longDescription:
            "Sometimes you need expert guidance more than hands-on development. I provide technical consulting to help you choose the right tech stack, plan your architecture, review code, or solve complex technical challenges. Great for teams who need direction or a second opinion.",
        features: [
            "Technology stack selection",
            "Architecture planning",
            "Code reviews",
            "Performance optimization",
            "Security audits",
            "Team training",
            "Project scoping",
            "Best practices guidance",
        ],
        tech: ["Various", "Based on project needs"],
        pricing: {
            starting: "$150/hour",
            note: "Hourly rate or project-based retainers available.",
        },
        icon: "consulting",
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((s) => s.slug === slug);
}
