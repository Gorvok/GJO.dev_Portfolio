// src/components/Ventures.jsx
import { ventures as VENTURES } from "../data/ventures";

function Ventures() {
    return (
        <section className="min-h-screen pt-24 pb-12 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Ventures & Products
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
                        gjo.dev is the umbrella for everything I build. These are the brands,
                        apps, and platforms I&apos;m actively working on under the GJO studio.
                    </p>
                </header>

                <div className="grid gap-6 md:grid-cols-2">
                    {VENTURES.map((v) => (
                        <article
                            key={v.slug}
                            className="group rounded-2xl bg-gradient-to-r from-green-500 to-sky-500 p-[1px] transition-shadow duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                        >
                            <div className="rounded-2xl bg-gray-950/95 p-5 h-full flex flex-col">
                                <header>
                                    <h2 className="text-lg md:text-xl font-semibold text-white">
                                        {v.title}
                                    </h2>

                                    {v.role && (
                                        <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                                            {v.role}
                                        </p>
                                    )}

                                    {v.tagline && (
                                        <p className="mt-1 text-xs text-emerald-400/80">
                                            {v.tagline}
                                        </p>
                                    )}
                                </header>

                                <p className="mt-3 text-sm text-white/75 flex-1">
                                    {v.description}
                                </p>

                                {v.tech && v.tech.length > 0 && (
                                    <ul className="mt-3 flex flex-wrap gap-2">
                                        {v.tech.map((t) => (
                                            <li
                                                key={String(t)}
                                                className="rounded-full bg-white/5 px-3 py-1 text-[0.7rem] text-white/80 ring-1 ring-white/10"
                                            >
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="mt-4 flex flex-wrap gap-3 items-center">
                                    {v.live && (
                                        <a
                                            href={v.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs md:text-sm
                              bg-gradient-to-r from-green-500 to-sky-500 text-black font-medium hover:brightness-110"
                                        >
                                            Visit site
                                        </a>
                                    )}
                                    {v.stage && (
                                        <p className="text-[0.7rem] text-white/50">
                                            {v.stage}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}

                    {VENTURES.length === 0 && (
                        <div className="col-span-full mt-8 rounded-xl bg-white/5 p-8 text-center ring-1 ring-white/10">
                            <p className="text-sm text-white/70">
                                No ventures added yet. Add some in{" "}
                                <code className="text-xs bg-black/40 px-1.5 py-0.5 rounded">
                                    src/data/ventures.js
                                </code>
                                .
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Ventures;
