import { useMemo } from "react";
import PropTypes from "prop-types";
// Force string URLs for all icons (Vite)
import HTMLIcon from "../assets/img/icons8-html.svg?url";
import CSSIcon from "../assets/img/icons8-css.svg?url";
import JSIcon from "../assets/img/icons8-js.svg?url";
import TSIcon from "../assets/img/icons8-typescript.svg?url";
import NextIcon from "../assets/img/nextjs-icon-dark-background.svg?url";
import TailwindIcon from "../assets/img/icons8-tailwind-css.svg?url";
import BootstrapIcon from "../assets/img/icons8-bootstrap.svg?url";
import ReactIcon from "../assets/img/react.svg?url";
import ViteIcon from "../assets/img/vite.svg?url";
import ChakraIcon from "../assets/img/icons8-chakra-ui.svg?url";
import GitHubIcon from "../assets/img/icons8-github.svg?url";
import FlutterIcon from "../assets/img/icons8-flutter.svg?url";
import FigmaIcon from "../assets/img/icons8-figma.svg?url";
import FirebaseIcon from "../assets/img/icons8-firebase.svg?url";
import NodeIcon from "../assets/img/icons8-nodejs.svg?url";
import ExpressIcon from "../assets/img/icons8-express-js.svg?url";
import PHPIcon from "../assets/img/new-php-logo.svg?url";
import LaravelIcon from "../assets/img/Laravel-Logo.wine.svg?url";
import MongoDBIcon from "../assets/img/MongoDB_Logomark_SpringGreen.svg?url";
import MySQLIcon from "../assets/img/icons8-mysql.svg?url";
import DockerIcon from "../assets/img/docker-mark-blue.svg?url";
import PythonIcon from "../assets/img/icons8-python.svg?url";

const icons = [
    { name: "HTML", icon: HTMLIcon, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: CSSIcon, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: JSIcon, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: TSIcon, link: "https://www.typescriptlang.org/" },
    { name: "Next.js", icon: NextIcon, link: "https://nextjs.org/" },
    { name: "Tailwind", icon: TailwindIcon, link: "https://tailwindcss.com/" },
    { name: "Bootstrap", icon: BootstrapIcon, link: "https://getbootstrap.com/" },
    { name: "React", icon: ReactIcon, link: "https://react.dev/" },
    { name: "Vite", icon: ViteIcon, link: "https://vitejs.dev/" },
    { name: "Chakra UI", icon: ChakraIcon, link: "https://chakra-ui.com/" },
    { name: "GitHub", icon: GitHubIcon, link: "https://github.com/" },
    { name: "Flutter", icon: FlutterIcon, link: "https://flutter.dev/" },
    { name: "Figma", icon: FigmaIcon, link: "https://www.figma.com/" },
    { name: "Firebase", icon: FirebaseIcon, link: "https://firebase.google.com/" },
    { name: "Node.js", icon: NodeIcon, link: "https://nodejs.org/en" },
    { name: "Express", icon: ExpressIcon, link: "https://expressjs.com/", tw: "filter invert" },
    { name: "PHP", icon: PHPIcon, link: "https://www.php.net/" },
    { name: "Laravel", icon: LaravelIcon, link: "https://laravel.com/" },
    { name: "MongoDB", icon: MongoDBIcon, link: "https://www.mongodb.com/" },
    { name: "MySQL", icon: MySQLIcon, link: "https://www.mysql.com/" },
    { name: "Docker", icon: DockerIcon, link: "https://www.docker.com/" },
    { name: "Python", icon: PythonIcon, link: "https://www.python.org/" },
];

function TechRow({ icons, reverse = false }) {
    // Triple the icons for smoother infinite loop
    const loopIcons = useMemo(() => [...icons, ...icons, ...icons], [icons]);

    return (
        <div
            className={`flex gap-4 md:gap-6 min-w-max items-center ${
                reverse ? "animate-marquee-reverse" : "animate-marquee"
            }`}
        >
            {loopIcons.map((icon, idx) => (
                <a
                    key={`${icon.name}-${idx}`}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.name}
                    className="group relative inline-flex items-center justify-center rounded-2xl
                             bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                             px-4 py-3 backdrop-blur-sm
                             ring-1 ring-white/[0.08]
                             hover:from-white/[0.15] hover:to-white/[0.08]
                             hover:ring-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20
                             transition-all duration-300 hover:scale-105"
                >
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                  bg-gradient-to-r from-green-500/20 via-sky-500/20 to-purple-500/20
                                  blur-xl transition-opacity duration-300" />

                    <div className="relative flex items-center gap-2">
                        <img
                            src={icon.icon}
                            alt={icon.name}
                            width="40"
                            height="40"
                            className={`w-9 h-9 md:w-11 md:h-11 transition-transform duration-300 
                                      group-hover:scale-110 ${icon.tw ?? ""}`}
                        />
                        <span className="hidden text-sm font-semibold text-white/80
                                       md:inline-block group-hover:text-white transition-colors duration-300">
                            {icon.name}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}

TechRow.propTypes = {
    icons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            tw: PropTypes.string,
        })
    ).isRequired,
    reverse: PropTypes.bool,
};

function HeroCarousel() {
    const half = Math.ceil(icons.length / 2);
    const topRow = icons.slice(0, half);
    const bottomRow = icons.slice(half);

    return (
        <section className="px-4 pb-20 pt-8">
            <div className="mx-auto max-w-7xl hero-carousel relative">
                {/* Enhanced glow effects */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -inset-x-20 top-0 h-40 bg-gradient-to-r from-green-500/30 via-sky-500/20 to-purple-500/30 blur-3xl animate-pulse" />
                    <div className="absolute inset-x-20 bottom-0 h-32 bg-gradient-to-t from-sky-500/20 to-transparent blur-3xl" />
                </div>

                {/* Outer gradient border */}
                <div className="rounded-3xl bg-gradient-to-br from-green-500 via-sky-500 to-purple-600 p-[2px] shadow-2xl shadow-sky-500/25">
                    <div className="rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-8 md:px-10 md:py-10">
                        {/* Header Section */}
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-8">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-sky-500/10
                                              px-4 py-1.5 ring-1 ring-white/10 mb-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                                        TECH STACK
                                    </p>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white to-white/70
                                             bg-clip-text text-transparent leading-tight">
                                    Tools I Ship With
                                </h2>
                                <p className="mt-2 text-sm md:text-base text-white/60 max-w-xl">
                                    Cutting-edge technologies for web, mobile & cloud platforms
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
                                    <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-xs font-medium text-white/70">
                                        {icons.length} Technologies
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Marquee Container */}
                        <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm
                                      px-4 py-6 md:px-6 md:py-8 ring-1 ring-white/5">
                            {/* Gradient fade edges - more prominent */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32
                                          bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32
                                          bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                                    backgroundSize: '32px 32px'
                                }} />
                            </div>

                            {/* Marquee rows */}
                            <div className="space-y-6 relative">
                                <TechRow icons={topRow} />
                                <TechRow icons={bottomRow} reverse />
                            </div>
                        </div>

                        {/* Footer note */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>Click on any technology to learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroCarousel;
