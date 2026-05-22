import { Link } from "react-router-dom";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center px-4 py-6 mt-14"
            aria-labelledby="about-title"
        >
            <article className="w-full max-w-4xl bg-gray-950 rounded-lg shadow-xl p-6 md:p-8 ring-1 ring-white/10">
                <h1
                    id="about-title"
                    className="text-2xl md:text-3xl font-bold text-center text-white mb-6"
                >
                    About GJO
                </h1>

                <div className="space-y-4 text-gray-200/80 text-base md:text-lg">
                    <p>
                        I&apos;m Gjo, a full stack developer and builder based in Michigan.{" "}
                        gjo.dev is my studio: the central home for the apps, tools, and
                        platforms I&apos;m building across web, mobile, and AI.
                    </p>

                    <p>
                        I earned my Bachelor&apos;s in Web Development from Full Sail University
                        and work as a Website Administrator / Web Developer at Mopec, where
                        I focus on real-world problems like configurators, integrations, and
                        performance at scale. Outside of that, I pour my time into products
                        like LumoraVerse and other long-term ventures under the GJO umbrella.
                    </p>

                    <p>
                        My toolkit spans front-end and back-end: React/Next.js, TypeScript,
                        Tailwind, Node/Express, MongoDB, Firebase, and modern tooling around
                        CI/CD and DX. I care about taking fuzzy ideas and turning them into
                        systems that are maintainable, fast, and a joy to use.
                    </p>

                    <ul className="grid gap-2 md:grid-cols-3 text-sm md:text-base pt-2">
                        <li className="rounded-md bg-gray-900/60 px-3 py-2">
                            Long-term, maintainable builds
                        </li>
                        <li className="rounded-md bg-gray-900/60 px-3 py-2">
                            Practical UX over flashy noise
                        </li>
                        <li className="rounded-md bg-gray-900/60 px-3 py-2">
                            Clear communication & ownership
                        </li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-white pt-4">
                        How I work with people
                    </h2>
                    <p>
                        I like partnering with founders, teams, and businesses who want to
                        ship real things, not just talk about them. That might mean a focused
                        MVP, a critical internal tool, or improving an existing product so it
                        actually performs the way it should.
                    </p>

                    <p>
                        If you&apos;re looking for a builder who can think about product,
                        architecture, and execution at the same time, we&apos;ll probably get
                        along.
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-green-500 to-sky-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-gradient-to-br transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                        Tell me what you&apos;re building
                    </Link>
                </div>
            </article>
        </section>
    );
}

export default About;
