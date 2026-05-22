// noinspection JSValidateTypes

import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/navbar.css';
import LogoUrl from '../assets/img/gg-logo.png?url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const drawerRef = useRef(null);
    const buttonRef = useRef(null);
    const location = useLocation();

    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'Ventures', link: '/ventures' },
        { label: 'Portfolio', link: '/portfolio' },
        { label: 'Services', link: '/services' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll while open
    useEffect(() => {
        const original = document.body.style.overflow;
        if (menuOpen) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, [menuOpen]);

    // Close on outside click
    const handleOutsideClick = useCallback(
        (event) => {
            if (!menuOpen) return;
            const drawer = drawerRef.current;
            const button = buttonRef.current;
            if (
                drawer &&
                !drawer.contains(event.target) &&
                button &&
                !button.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        },
        [menuOpen]
    );

    // Close on Escape, focus first focusable in drawer on open
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    useEffect(() => {
        if (menuOpen && drawerRef.current) {
            const firstLink = drawerRef.current.querySelector('a, button');
            firstLink?.focus();
        }
    }, [menuOpen]);

    /**
     * @param {{ label: string; link: string; external?: boolean; className?: string; onClick?: () => void }} props
     */
    const NavLink = ({ label, link, external = false, className, onClick }) => {
        const isHash = link.startsWith('#');
        const isActive = location.pathname === link;

        const linkClasses = `${className} ${isActive ? 'nav-link-active' : ''}`;

        if (external) {
            return (
                <a
                    href={link}
                    className={linkClasses}
                    onClick={onClick}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {label}
                </a>
            );
        }

        if (isHash) {
            return (
                <a href={link} className={linkClasses} onClick={onClick}>
                    {label}
                </a>
            );
        }

        return (
            <Link to={link} className={linkClasses} onClick={onClick}>
                {label}
            </Link>
        );
    };

    NavLink.propTypes = {
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        external: PropTypes.bool,
        className: PropTypes.string,
        onClick: PropTypes.func,
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-4'
        }`}>
            {/* Main navbar container */}
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300`}>
                <div className={`relative rounded-2xl transition-all duration-300 ${
                    scrolled
                        ? 'bg-gray-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 ring-1 ring-white/10'
                        : 'bg-gray-950/80 backdrop-blur-md'
                }`}>
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="group flex items-center">
                                <div className="relative">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 blur-xl bg-gradient-to-r from-green-500/20 via-sky-500/20 to-purple-500/20
                                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src={LogoUrl}
                                        alt="GJO Logo"
                                        className="relative h-6 w-auto group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav aria-label="Primary" className="hidden lg:block">
                            <ul className="flex items-center gap-1">
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.link;
                                    return (
                                        <li key={item.label}>
                                            <NavLink
                                                {...item}
                                                className={`group relative px-4 py-2 rounded-lg text-sm font-medium
                                                         transition-all duration-300
                                                         ${isActive
                                                    ? 'text-white bg-white/10'
                                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                                }`}
                                            />
                                            {isActive && (
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1
                                                              rounded-full bg-gradient-to-r from-green-400 to-sky-400" />
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center gap-2 px-5 py-2.5
                                         bg-gradient-to-r from-green-500 to-sky-500 rounded-lg
                                         font-semibold text-sm text-white shadow-lg shadow-sky-500/25
                                         hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105
                                         transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                              transition-transform duration-1000 bg-gradient-to-r from-transparent
                                              via-white/20 to-transparent skew-x-12" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            ref={buttonRef}
                            onClick={(e) => {
                                e.stopPropagation();
                                setMenuOpen((v) => !v);
                            }}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-drawer"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            className="lg:hidden relative inline-flex items-center justify-center w-10 h-10
                                     rounded-lg bg-white/5 ring-1 ring-white/10
                                     hover:bg-white/10 hover:ring-white/20
                                     transition-all duration-300"
                        >
                            <FontAwesomeIcon
                                icon={menuOpen ? faTimes : faBars}
                                className={`text-white transition-transform duration-300 ${
                                    menuOpen ? 'rotate-90' : 'rotate-0'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay + Drawer */}
            {menuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fade-in lg:hidden"
                        onClick={() => setMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <div
                        id="mobile-drawer"
                        ref={drawerRef}
                        role="dialog"
                        aria-modal="true"
                        className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw]
                                 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950
                                 shadow-2xl animate-slide-in-right lg:hidden"
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <img
                                    src={LogoUrl}
                                    alt="GJO Logo"
                                    className="h-6 w-auto"
                                />
                            </Link>
                            <button
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                                className="inline-flex items-center justify-center w-10 h-10
                                         rounded-lg bg-white/5 ring-1 ring-white/10
                                         hover:bg-white/10 hover:ring-white/20
                                         transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-white" />
                            </button>
                        </div>

                        {/* Drawer Navigation */}
                        <nav aria-label="Mobile Primary" className="p-6">
                            <ul className="space-y-2">
                                {navItems.map((item, index) => {
                                    const isActive = location.pathname === item.link;
                                    return (
                                        <li
                                            key={item.label}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                            className="animate-fade-in-up"
                                        >
                                            <NavLink
                                                {...item}
                                                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl
                                                         font-medium transition-all duration-300
                                                         ${isActive
                                                    ? 'text-white bg-gradient-to-r from-green-500/20 to-sky-500/20 ring-1 ring-white/20'
                                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                                }`}
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {isActive && (
                                                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-green-400 to-sky-400" />
                                                )}
                                                <span>{item.label}</span>
                                                <svg
                                                    className={`ml-auto w-4 h-4 transition-transform duration-300 ${
                                                        isActive ? 'translate-x-0' : 'translate-x-0 group-hover:translate-x-1'
                                                    }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M9 5l7 7-7 7" />
                                                </svg>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Drawer Footer CTA */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="group relative flex items-center justify-center gap-2 w-full px-6 py-4
                                         bg-gradient-to-r from-green-500 to-sky-500 rounded-xl
                                         font-semibold text-white shadow-lg shadow-sky-500/25
                                         hover:shadow-xl hover:shadow-sky-500/40 hover:scale-[1.02]
                                         transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <svg
                                    className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                              transition-transform duration-1000 bg-gradient-to-r from-transparent
                                              via-white/20 to-transparent skew-x-12" />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default Navbar;
