import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about GJO - a full-stack developer building digital products across web, mobile, and AI platforms.',
};

export default function AboutPage() {
    const skills = [
        { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
        { category: 'Backend', items: ['Node.js', 'Python', 'Flask', 'PostgreSQL', 'MongoDB'] },
        { category: 'Mobile', items: ['Flutter', 'React Native', 'iOS', 'Android'] },
        { category: 'Tools & Other', items: ['Git', 'Docker', 'Figma', 'Firebase', 'AI/ML'] },
    ];

    const experience = [
        {
            year: '2024',
            title: 'Founder & Lead Developer',
            company: 'LumoraVerse',
            description: 'Building a comprehensive homeschool ecosystem with AI-powered tools for Christian families.',
        },
        {
            year: '2023',
            title: 'Founder',
            company: 'GJO Dev Studio',
            description: 'Established a digital product studio focused on web and mobile development.',
        },
        {
            year: '2023',
            title: 'Full Stack Developer',
            company: 'Freelance',
            description: 'Developed custom web and mobile applications for clients across various industries.',
        },
        {
            year: '2014+',
            title: 'Software Development Journey',
            company: 'Self-taught',
            description: 'Started learning programming and building projects, evolving from simple scripts to full-stack applications.',
        },
    ];

    const values = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Quality First',
            description: 'Every project deserves attention to detail and clean, maintainable code.',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'User-Centered',
            description: 'Building products that people actually want to use and enjoy.',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Long-term Thinking',
            description: 'Creating solutions that scale and stand the test of time.',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Continuous Learning',
            description: 'Always exploring new technologies and improving my craft.',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 py-20 md:py-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
                        {/* Left: Image/Avatar */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative group">
                                {/* Glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-sky-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                                {/* Avatar container */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder - replace with your actual image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-sky-500/20" />
                                    <div className="relative text-8xl font-bold text-white/20">GJO</div>

                                    {/* Or use an actual image: */}
                                    {/* <Image
                    src="/images/profile.jpg"
                    alt="GJO"
                    fill
                    className="object-cover"
                  /> */}
                                </div>

                                {/* Status badge */}
                                <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-sm px-4 py-2 ring-1 ring-white/10">
                                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse-glow" />
                                    <span className="text-xs font-medium text-white">Available for work</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10 px-4 py-1.5 ring-1 ring-white/10 mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                  About Me
                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Hey, I&apos;m{' '}
                                <span className="bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                  GJO
                </span>
                            </h1>

                            {/* Description */}
                            <div className="space-y-4 text-base md:text-lg text-white/70 leading-relaxed mb-8">
                                <p>
                                    I&apos;m a <span className="text-white font-medium">full-stack developer</span> building digital products that solve real problems. From web apps to mobile experiences, I focus on creating tools that are both powerful and easy to use.
                                </p>
                                <p>
                                    Currently, I&apos;m working on <span className="text-white font-medium">LumoraVerse</span>, a homeschool ecosystem for Christian families, alongside other ventures through my studio, <span className="text-white font-medium">GJO Dev Studio</span>.
                                </p>
                                <p>
                                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, experimenting with AI tools, or planning the next big project.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">Work With Me</span>
                                    <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
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
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            A selection of tools and technologies I work with regularly
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={skillGroup.category}
                                className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h3>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                                            <span className="text-sm">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Experience
                        </h2>
                        <p className="text-white/60">My journey in software development</p>
                    </div>

                    <div className="space-y-6">
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 md:p-8 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-sky-500 to-purple-500 ring-4 ring-gray-950 hidden md:block" />

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-green-400 font-medium">{item.company}</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 self-start">
                                        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm text-white/70 font-medium">{item.year}</span>
                                    </div>
                                </div>
                                <p className="text-white/60 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            What I Value
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            The principles that guide my work and approach to building products
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-6 hover:from-white/[0.12] hover:to-white/[0.05] hover:scale-[1.02] transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 ring-1 ring-white/10 flex items-center justify-center text-sky-400 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-12 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Let&apos;s Build Something Together
                        </h2>
                        <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                            Have a project in mind? I&apos;m always open to discussing new opportunities and interesting ideas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-sky-500 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl ring-2 ring-white/20 text-white/90 font-semibold hover:bg-white/10 hover:ring-white/40 hover:scale-105 transition-all duration-300"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
