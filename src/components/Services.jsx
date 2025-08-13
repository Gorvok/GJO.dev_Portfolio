// noinspection JSValidateTypes

import { Link } from "react-router-dom";

export default function Services() {
    // Data-driven so it’s easy to edit later
    const offerings = [
        {
            title: "Web & App Development",
            blurb:
                "Fast, accessible, conversion-focused builds for marketing sites, apps, and internal tools.",
            points: ["React/Next.js + TypeScript", "Node/Express APIs", "Auth, forms, dashboards"],
        },
        {
            title: "UI × UX",
            blurb:
                "Clear, beautiful, and usable interfaces—from wireframes to production-ready components.",
            points: ["Design systems", "Responsive layouts", "Accessibility (WCAG)"],
        },
        {
            title: "Performance & SEO",
            blurb:
                "Ship pages that feel instant and rank well. Measure, optimize, and iterate.",
            points: ["Lighthouse/CLS fixes", "Meta/OG/Schema", "Image/CDN strategy"],
        },
    ];

    const packages = [
        {
            name: "Starter",
            price: "$800+",
            description: "Great for landing pages & small sites.",
            includes: ["1–3 pages", "Basic CMS/Content edits", "Deploy + Analytics"],
        },
        {
            name: "Pro",
            price: "$2,500+",
            description: "Best for product sites or small apps.",
            includes: ["4–8 pages or app views", "Auth/Forms/Email", "Performance pass"],
            featured: true,
        },
        {
            name: "Custom",
            price: "Let’s chat",
            description: "Tailored scope for larger builds.",
            includes: ["Discovery workshop", "Roadmap + Milestones", "Ongoing iteration"],
        },
    ];

    const steps = [
        { label: "Discover", text: "Goals, requirements, and success metrics." },
        { label: "Design", text: "Wireframes, components, and content plan." },
        { label: "Build", text: "Implementation with reviews and previews." },
        { label: "Launch", text: "Deploy, monitor, and polish." },
        { label: "Iterate", text: "A/B, analytics, and continuous improvements." },
    ];

    const faqs = [
        {
            q: "What stacks do you use?",
            a: "React/Next.js, TypeScript, Tailwind, Node/Express, MongoDB/Firebase. Also comfortable with PHP/Laravel when needed.",
        },
        {
            q: "Do you work hourly or fixed-price?",
            a: "Both. For well-defined scopes, fixed-price is common. For ongoing work or R&D, hourly/retainer works well.",
        },
        {
            q: "Can you improve my existing site instead of rebuilding?",
            a: "Absolutely. I can audit, fix performance/UX issues, and add features without a full rewrite.",
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
                    <h1 id="services-title" className="text-3xl md:text-4xl font-bold text-white">
                        Services
                    </h1>
                    <p className="mt-3 text-white/70">
                        Clean, fast builds with measurable outcomes. I focus on practical engineering,
                        accessible UX, and shipping.
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
                <h2 className="mt-14 text-center text-2xl font-bold text-white">Packages</h2>
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
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full
                              bg-gradient-to-r from-green-500 to-sky-500 text-black font-semibold">
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
                        <h3 className="text-xl font-semibold text-white">Have a project in mind?</h3>
                        <p className="mt-1 text-white/70 pb-5">
                            Tell me about your goals—I&apos;ll propose the fastest path to value.
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
