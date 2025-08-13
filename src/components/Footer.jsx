import { Link } from 'react-router-dom';
import LogoUrl from '../assets/img/GG LOGO.png?url';
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedinIn,
    FaDiscord,
} from 'react-icons/fa';

function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { name: 'Facebook', href: 'https://www.facebook.com/Gorvok/', Icon: FaFacebookF },
        { name: 'Instagram', href: 'https://instagram.com/gorvok_5', Icon: FaInstagram },
        { name: 'GitHub', href: 'https://github.com/Gorvok', Icon: FaGithub },
        { name: 'Twitter/X', href: 'https://twitter.com/gorvok_5', Icon: FaTwitter },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gjovanigorvokaj/', Icon: FaLinkedinIn },
        { name: 'Discord', href: 'https://discord.com/users/884621877232930848', Icon: FaDiscord },
    ];

    return (
        <footer className="mt-16 bg-gray-950 text-white">
            {/* Gradient divider */}
            <div className="h-px w-full bg-gradient-to-r from-green-500/60 via-white/10 to-sky-500/60" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid gap-8 md:grid-cols-3 items-start">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link to="/" aria-label="Go to home" className="inline-flex items-center">
                            <img
                                src={LogoUrl}
                                alt="GJO Logo"
                                width="180"
                                height="44"
                                className="h-11 w-[180px]"
                            />
                        </Link>
                        <p className="mt-3 text-sm text-white/70 max-w-sm">
                            Clean, fast, conversion-focused builds with clear communication.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <a
                            href="mailto:hello@gjo.dev"
                            className="mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-sky-400 hover:from-green-300 hover:to-sky-300 transition"
                        >
                            hello@gjo.dev
                        </a>
                        <p className="mt-2 text-sm text-white/60">USA</p>
                    </div>

                    {/* Socials */}
                    <div className="flex md:justify-end justify-center">
                        <div className="text-center md:text-right">
                            <h3 className="text-lg font-semibold">Connect</h3>
                            <div className="mt-3 flex flex-wrap justify-center md:justify-end gap-3">
                                {socials.map(({ name, href, Icon }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${name}`}
                                        title={name}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full
                               bg-white/5 ring-1 ring-white/10
                               hover:bg-white/10 hover:ring-white/20
                               transition"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
                    <p>© GJO {year}. All rights reserved.</p>
                    <a
                        href="#root"
                        className="inline-flex items-center gap-2 rounded-md px-3 py-1.5
                       ring-1 ring-white/10 hover:ring-white/20
                       bg-white/5 hover:bg-white/10 transition"
                        aria-label="Back to top"
                    >
                        Back to top
                        <span aria-hidden>↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
