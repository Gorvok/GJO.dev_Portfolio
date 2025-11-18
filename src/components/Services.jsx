// noinspection JSValidateTypes

import { Link } from "react-router-dom";

export default function Services() {
    const offerings = [
        {
            title: "Product & Platform Builds",
            blurb:
                "Designing and building web apps, tools, and platforms with a focus on long-term maintainability.",
            points: [
                "MVPs and v1 launches",
                "Account systems, auth, and forms",
                "Dashboards, planners, internal tools",
            ],
        },
        {
            title: "Web Experiences & Marketing Sites",
            blurb:
                "Fast, clear, conversion-focused sites that actually support your product instead of getting in the way.",
            points: [
                "Next.js + TypeScript frontends",
                "CMS wiring and content flows",
                "Performance and UX refinement",
            ],
        },
        {
            title: "Systems, Integrations & Cleanup",
            blurb:
                "Fixing the glue: integrations, performance issues, and architecture pain that slow teams down.",
            points: [
                "APIs, webhooks, automation",
                "Config / quote flows & forms",
                "Audits, refactors, technical planning",
            ],
        },
    ];

    const packages = [
        {
            name: "Focused Build",
            price: "$800+",
            description: "Ideal for landing pages, small tools, or a tightly scoped feature.",
            includes: ["1–3 core views/pages", "Basic CMS or content wiring", "Deploy + basic analytics"],
        },
        {
            name: "Product Sprint",
            price: "$2,500+",
            description: "For early-stage products, planners, or internal tools that need to actually ship.",
            includes: ["4–8 views or flows", "Auth, forms, email integration", "Performance + UX pass"],
            featured: true,
        },
        {
            name: "Studio Partner",
            price: "Let’s chat",
            description: "Ongoing collaboration for teams that want a builder in their corner.",
            includes: ["Discovery + roadmap", "Milestones & check-ins", "Continuous iteration & support"],
        },
    ];

    const steps = [
        { label: "Discover", text: "Goals, constraints, and what success looks like in real terms." },
        { label: "Design", text: "Flows, components, and content paths mapped out before we overbuild." },
        { label: "Build", text: "Implementation in small, reviewable chunks with previews along the way." },
        { label: "Launch", text: "Deploy, monitor, and clean up rough edges that show up in the real world." },
        { label: "Iterate", text: "Adjust based on data, feedback, and what’s actually working." },
    ];

    const faqs = [
        {
            q: "What stacks do you use?",
            a: "Primarily React/Next.js, TypeScript, Tailwind, Node/Express, and MongoDB/Firebase. I’m also comfortable working with existing PHP/Laravel or WordPress setups when it makes sense.",
        },
        {
            q: "Do you work hourly or fixed-price?",
            a: "For well-defined scopes, fixed-price works best. For ongoing work, experimentation, or long-term partnerships, a retainer or hourly structure makes more sense.",
        },
        {
            q: "Can you work with my existing site or app instead of rebuilding?",
            a: "Yes. Audits, performance improvements, UX fixes, and incremental refactors are often the smartest way to move forward.",
        },
    ];

    return (
        <section
            id="services"
            aria-labelledby="services-title"
            className="min-h-screen px-4 pt-24 pb-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* Hero */}
                <header className="text-center max-w-3xl mx-auto">
                    <h1
                        id="services-title"
                        className="text-3xl md:text-4xl font-bold text-white"
                    >
                        How I Work With Teams
                    </h1>
                    <p className="mt-3 text-white/70">
                        I run a small studio out of gjo.dev, partnering with founders and teams
                        to design, build, and ship products, tools, and web experiences that
                        actually get used.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/contact"
                            className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Start a project
                        </Link>
                    </div>
                </header>

                {/* Offerings */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {offerings.map((o) => (
                        <article
                            key={o.title}
                            className="group rounded-xl bg-gradient-to-r from-green-500 to-sky-500 p-[1px] transition-shadow duration-200 hover:shadow-lg"
                        >
                            <div className="rounded-xl bg-gray-950 h-full p-5">
                                <h3 className="text-lg font-semibold text-white">{o.title}</h3>
                                <p className="mt-2 text-sm text-gray-200/80">{o.blurb}</p>
                                <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                                    {o.points.map((p) => (
                                        <li key={p} className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-green-500 to-sky-500" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Packages */}
                <h2 className="mt-14 text-center text-2xl font-bold text-white">
                    Ways to Work Together
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {packages.map((p) => (
                        <article
                            key={p.name}
                            className={`rounded-2xl p-[1px] bg-gradient-to-r from-green-500 to-sky-500 ${
                                p.featured ? "shadow-lg" : "opacity-90"
                            }`}
                        >
                            <div className="rounded-2xl bg-gray-950 h-full p-6 ring-1 ring-white/10">
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                                    <span className="text-white/80">{p.price}</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-200/80">{p.description}</p>
                                <ul className="mt-4 space-y-2 text-sm text-white/80">
                                    {p.includes.map((i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-green-500 to-sky-500" />
                                            <span>{i}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        to="/contact"
                                        className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                    >
                                        Get started
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Process */}
                <h2 className="mt-14 text-center text-2xl font-bold text-white">Process</h2>
                <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {steps.map((s, idx) => (
                        <li
                            key={s.label}
                            className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 text-center"
                        >
                            <div
                                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full
                                  bg-gradient-to-r from-green-500 to-sky-500 text-black font-semibold"
                            >
                                {idx + 1}
                            </div>
                            <h3 className="mt-3 font-semibold text-white">{s.label}</h3>
                            <p className="mt-1 text-sm text-gray-200/80">{s.text}</p>
                        </li>
                    ))}
                </ol>

                {/* FAQs */}
                <h2 className="mt-14 text-center text-2xl font-bold text-white">FAQ</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {faqs.map(({ q, a }) => (
                        <details
                            key={q}
                            className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 open:shadow"
                        >
                            <summary className="cursor-pointer select-none text-white">
                                {q}
                            </summary>
                            <p className="mt-2 text-sm text-gray-200/80">{a}</p>
                        </details>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 rounded-2xl p-[1px] bg-gradient-to-r from-green-500 to-sky-500">
                    <div className="rounded-2xl bg-gray-950 p-6 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Have a product, tool, or idea?
                        </h3>
                        <p className="mt-1 text-white/70 pb-5">
                            Share where you&apos;re at and where you want to go. I&apos;ll respond
                            with a practical way we can move it forward.
                        </p>
                        <Link
                            to="/contact"
                            className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Let’s talk
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
