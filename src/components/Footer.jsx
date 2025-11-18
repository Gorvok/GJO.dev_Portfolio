import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoUrl from "../assets/img/GG LOGO.png?url";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedinIn,
    FaDiscord,
} from "react-icons/fa";

function SocialLink({ name, href, Icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name}`}
            title={name}
            className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl
                     bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                     ring-1 ring-white/10
                     hover:from-white/[0.15] hover:to-white/[0.08]
                     hover:ring-sky-400/50 hover:scale-110
                     transition-all duration-300"
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-sky-500/0 to-purple-500/0
                          group-hover:from-green-500/20 group-hover:via-sky-500/20 group-hover:to-purple-500/20
                          blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <Icon className="relative z-10 text-white/70 group-hover:text-white transition-colors duration-300" size={18} />
        </a>
    );
}

SocialLink.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
};

function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { name: "Facebook", href: "https://www.facebook.com/Gorvok/", Icon: FaFacebookF },
        { name: "Instagram", href: "https://instagram.com/gorvok_5", Icon: FaInstagram },
        { name: "GitHub", href: "https://github.com/Gorvok", Icon: FaGithub },
        { name: "Twitter/X", href: "https://twitter.com/gorvok_5", Icon: FaTwitter },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/gjovanigorvokaj/", Icon: FaLinkedinIn },
        { name: "Discord", href: "https://discord.com/users/884621877232930848", Icon: FaDiscord },
    ];

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Ventures", to: "/ventures" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "Services", to: "/services" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ];

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative mt-20 bg-gray-950 text-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
            </div>

            {/* Enhanced gradient divider with animation */}
            <div className="relative h-[2px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/60 to-transparent animate-pulse" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main footer content */}
                <div className="grid gap-10 md:gap-12 lg:grid-cols-12 items-start mb-12">
                    {/* Brand / Studio - Takes up more space */}
                    <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link
                            to="/"
                            aria-label="Go to home"
                            className="group inline-flex items-center mb-4"
                        >
                            <div className="relative">
                                {/* Glow effect behind logo */}
                                <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-green-500/20 via-sky-500/20 to-purple-500/20
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={LogoUrl}
                                    alt="GJO Logo"
                                    width="180"
                                    height="44"
                                    className="relative h-11 w-[180px] group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </Link>

                        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-6">
                            <span className="font-semibold text-white/90">GJO Studio</span> · the home base for the apps,
                            tools, and platforms I&apos;m building across web, mobile, and AI.
                        </p>

                        {/* Quick stats or badges */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs">
                            <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-white/70">Active Projects</span>
                            </div>
                            <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                                <svg className="w-3 h-3 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-white/70">Michigan, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Site Navigation */}
                    <div className="lg:col-span-3 text-center md:text-left">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4 flex items-center justify-center md:justify-start gap-2">
                            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Explore
                        </h3>
                        <nav>
                            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2.5 text-sm">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.to}
                                            className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
                                        >
                                            <span className="h-px w-0 bg-gradient-to-r from-green-400 to-sky-400 group-hover:w-4 transition-all duration-300" />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact + Socials */}
                    <div className="lg:col-span-4 text-center md:text-left">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4 flex items-center justify-center md:justify-start gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Let&apos;s Connect
                        </h3>

                        {/* Email with enhanced styling */}
                        <a
                            href="mailto:hello@gjo.dev"
                            className="group inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-xl
                                     bg-gradient-to-r from-white/5 to-white/[0.02] ring-1 ring-white/10
                                     hover:from-white/10 hover:to-white/5 hover:ring-sky-400/50
                                     transition-all duration-300"
                        >
                            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-400
                                           group-hover:from-green-300 group-hover:to-sky-300 font-medium transition-all duration-300">
                                hello@gjo.dev
                            </span>
                        </a>

                        {/* Social links with improved styling */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-4">
                            {socials.map((social) => (
                                <SocialLink key={social.name} {...social} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom bar with enhanced styling */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-xs sm:text-sm text-white/60">
                        <p className="flex items-center gap-2">
                            © {year} <span className="text-white/80 font-medium">GJO · gjo.dev Studio</span>
                        </p>
                        <span className="hidden sm:inline text-white/30">•</span>
                        <p className="text-white/50">Built with intent, shipped with care.</p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-2 rounded-xl px-4 py-2
                                 ring-1 ring-white/10 hover:ring-white/30
                                 bg-white/5 hover:bg-white/10
                                 text-sm text-white/70 hover:text-white
                                 transition-all duration-300 hover:scale-105"
                        aria-label="Back to top"
                    >
                        Back to top
                        <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
