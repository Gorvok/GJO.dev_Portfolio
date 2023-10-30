import { useState, useEffect, useCallback } from 'react';
import Resume from '../assets/img/Resume Dev.pdf';
import '../assets/css/navbar.css';
import Logo from '../assets/img/GG LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Portfolio", link: "#portfolio" },
        { label: "Resume", link: Resume, external: true },
        { label: "Services", link: "#services" },
        { label: "Contact", link: "#contact" }
    ];
    const handleOutsideClick = useCallback((event) => {
        if (menuOpen && !event.target.closest('.side-drawer')) {
            setMenuOpen(false);
        }
    }, [menuOpen]);
    

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [menuOpen, handleOutsideClick]);
    

    return (
        <div className="fixed top-0 left-0 w-full z-10 flex items-center p-4">

            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="#home">
                    <img src={Logo} alt="GJO Logo" className='h-5 w-50 ml-4 swing-animation logo-glow'/>
                </a>
            </div>

            {/* Navbar for desktop */}
            <div className="mx-auto hidden md:block">
                <nav className='bg-gray-950 p-4'>
                    <ul className="flex justify-center">
                        {navItems.map(item => (
                            <li key={item.label} className="gradient-text hover:gradient-animate">
                                <a 
                                    className="text-white ml-5" 
                                    href={item.link}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Hamburger menu for tablet/mobile */}
            <div className="md:hidden ml-auto">
                <button onClick={(e) => {
                    e.stopPropagation(); // prevent event from bubbling up
                    console.log('Hamburger clicked');
                    setMenuOpen(!menuOpen);
                }}>
                    <FontAwesomeIcon icon={faBars} className="text-white"/>
                </button>
            </div>

            {/* Side drawer for tablet/mobile */}
            {menuOpen && (
                <div className="side-drawer open">
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className="text-white cursor-pointer mb-4" 
                        onClick={() => setMenuOpen(false)}
                    />
                    <nav>
                        <ul>
                            {navItems.map(item => (
                                <li key={item.label} className="gradient-text hover:gradient-animate">
                                    <a 
                                        className="text-white ml-5" 
                                        href={item.link}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}

        </div>
    )
}

export default Navbar;
