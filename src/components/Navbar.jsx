// noinspection JSValidateTypes

import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/navbar.css';
import LogoUrl from '../assets/img/GG LOGO.png?url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const buttonRef = useRef(null);
    const location = useLocation();

    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Portfolio', link: '/portfolio' },
        { label: 'Services', link: '/services' },
        { label: 'Contact', link: '/contact' },
    ];

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
            // Try to focus the first link for accessibility
            const firstLink = drawerRef.current.querySelector('a, button');
            firstLink?.focus();
        }
    }, [menuOpen]);

    // Helper: render Link for routes, <a> for hashes/external
    /**
     * @typedef {{ label: string; link: string; external?: boolean }} NavItem
     */

    /**
     * @param {{ label: string; link: string; external?: boolean; className?: string; onClick?: () => void }} props
     */
    const NavLink = ({ label, link, external = false, className, onClick }) => {
        const isHash = link.startsWith('#');

        if (external) {
            // Render only when external=true so `target`/`rel` are always strings (no {} vs string issue)
            return (
                <a
                    href={link}
                    className={className}
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
                <a href={link} className={className} onClick={onClick}>
                    {label}
                </a>
            );
        }

        return (
            <Link to={link} className={className} onClick={onClick}>
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
        <header className="fixed top-0 left-0 w-full z-20">
            {/* Top bar */}
            <div className="flex items-center p-4 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            src={LogoUrl}
                            alt="GJO Logo"
                            className="h-5 w-50 ml-4 swing-animation logo-glow"
                        />
                    </Link>
                </div>

                {/* Desktop nav */}
                <div className="mx-auto hidden md:block">
                    <nav aria-label="Primary" className="p-2">
                        <ul className="flex justify-center">
                            {navItems.map((item) => (
                                <li
                                    key={item.label}
                                    className="gradient-text hover:gradient-animate"
                                >
                                    <NavLink
                                        {...item}
                                        className="text-white ml-5"
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Hamburger */}
                <div className="md:hidden ml-auto">
                    <button
                        ref={buttonRef}
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen((v) => !v);
                        }}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-drawer"
                        aria-label="Open menu"
                        className="p-2"
                    >
                        <FontAwesomeIcon icon={faBars} className="text-white" />
                    </button>
                </div>
            </div>

            {/* Overlay + Drawer */}
            {menuOpen && (
                <>
                    {/* Clickable overlay to close */}
                    <button
                        className="fixed inset-0 z-30 bg-black/50"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    />
                    {/* Drawer */}
                    <div
                        id="mobile-drawer"
                        ref={drawerRef}
                        role="dialog"
                        aria-modal="true"
                        className="side-drawer open fixed top-0 right-0 z-40 h-full w-72 bg-gray-950 p-4 shadow-2xl focus:outline-none"
                    >
                        <button
                            className="text-white cursor-pointer mb-4 p-2"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <nav aria-label="Mobile Primary">
                            <ul className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <li
                                        key={item.label}
                                        className="gradient-text hover:gradient-animate"
                                    >
                                        <NavLink
                                            {...item}
                                            className="text-white ml-1 block py-2"
                                            onClick={() => setMenuOpen(false)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
}

export default Navbar;
