import { Link } from "react-router-dom";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center px-4 py-6 mt-14"
            aria-labelledby="about-title"
        >
            <article className="w-full max-w-4xl bg-gray-950 rounded-lg shadow-xl p-6 md:p-8 ring-1 ring-white/10">
                <h1 id="about-title" className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                    About Me
                </h1>

                <div className="space-y-4 text-gray-200/80 text-base md:text-lg">
                    <p>
                        Hey, I&apos;m Gjo, a Full Stack Developer based in Metro Detroit, Michigan. I started
                        tinkering with code as a kid and came back to it full force in 2022. Since then I&apos;ve been
                        building clean, fast, conversion-focused products with a bias for shipping.
                    </p>

                    <p>
                        I completed my Bachelor&apos;s in Web Development at Full Sail University. By day, I&apos;m a Website
                        Administrator / Web Developer at Mopec; nights and weekends I build tools, apps, write, and
                        explore new stacks.
                    </p>

                    <p>
                        My toolkit spans front-end and back-end: React/Next.js, TypeScript, Tailwind, Node/Express,
                        MongoDB, Firebase, and more. I love turning fuzzy ideas into clear, maintainable systems—
                        with solid DX, accessible UX, and measurable outcomes.
                    </p>

                    <ul className="grid gap-2 md:grid-cols-3 text-sm md:text-base pt-2">
                        <li className="rounded-md bg-gray-900/60 px-3 py-2">Performance-minded builds</li>
                        <li className="rounded-md bg-gray-900/60 px-3 py-2">Conversion-focused UX</li>
                        <li className="rounded-md bg-gray-900/60 px-3 py-2">Clean, scalable architecture</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-white pt-4">Open to Collaboration</h2>
                    <p>
                        I’m open to select freelance work and collaborations, especially projects that mix product
                        thinking with practical engineering. If you need a fast, reliable build with clear
                        communication, let&apos;s chat.
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-green-500 to-sky-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-gradient-to-br transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                        Let&apos;s Collab
                    </Link>
                </div>
            </article>
        </section>
    );
}

export default About;
