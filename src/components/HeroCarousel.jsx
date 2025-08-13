import { useState, useEffect } from 'react';
// Force string URLs for all icons (Vite)
import HTMLIcon from '../assets/img/icons8-html.svg?url';
import CSSIcon from '../assets/img/icons8-css.svg?url';
import JSIcon from '../assets/img/icons8-js.svg?url';
import TSIcon from '../assets/img/icons8-typescript.svg?url';
import NextIcon from '../assets/img/nextjs-icon-dark-background.svg?url';
import TailwindIcon from '../assets/img/icons8-tailwind-css.svg?url';
import BootstrapIcon from '../assets/img/icons8-bootstrap.svg?url';
import ReactIcon from '../assets/img/react.svg?url';
import ViteIcon from '../assets/img/vite.svg?url';
import ChakraIcon from '../assets/img/icons8-chakra-ui.svg?url';
import GitHubIcon from '../assets/img/icons8-github.svg?url';
import FlutterIcon from '../assets/img/icons8-flutter.svg?url';
import FigmaIcon from '../assets/img/icons8-figma.svg?url';
import FirebaseIcon from '../assets/img/icons8-firebase.svg?url';
import NodeIcon from '../assets/img/icons8-nodejs.svg?url';
import ExpressIcon from '../assets/img/icons8-express-js.svg?url';
import PHPIcon from '../assets/img/new-php-logo.svg?url';
import LaravelIcon from '../assets/img/Laravel-Logo.wine.svg?url';
import MongoDBIcon from '../assets/img/MongoDB_Logomark_SpringGreen.svg?url';
import MySQLIcon from '../assets/img/icons8-mysql.svg?url';
import DockerIcon from '../assets/img/docker-mark-blue.svg?url';
import PythonIcon from '../assets/img/icons8-python.svg?url';

const icons = [
    { name: 'HTML', icon: HTMLIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: CSSIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: JSIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: TSIcon, link: 'https://www.typescriptlang.org/' },
    { name: 'Next.js', icon: NextIcon, link: 'https://nextjs.org/' },
    { name: 'Tailwind', icon: TailwindIcon, link: 'https://tailwindcss.com/' },
    { name: 'Bootstrap', icon: BootstrapIcon, link: 'https://getbootstrap.com/' },
    { name: 'React', icon: ReactIcon, link: 'https://react.dev/' },
    { name: 'Vite', icon: ViteIcon, link: 'https://vitejs.dev/' },
    { name: 'Chakra UI', icon: ChakraIcon, link: 'https://chakra-ui.com/' },
    { name: 'GitHub', icon: GitHubIcon, link: 'https://github.com/' },
    { name: 'Flutter', icon: FlutterIcon, link: 'https://flutter.dev/' },
    { name: 'Figma', icon: FigmaIcon, link: 'https://www.figma.com/' },
    { name: 'Firebase', icon: FirebaseIcon, link: 'https://firebase.google.com/' },
    { name: 'Node.js', icon: NodeIcon, link: 'https://nodejs.org/en' },
    // Apply a white filter just for Express (since the SVG is black)
    { name: 'Express', icon: ExpressIcon, link: 'https://expressjs.com/', tw: 'filter invert' },
    { name: 'PHP', icon: PHPIcon, link: 'https://www.php.net/' },
    { name: 'Laravel', icon: LaravelIcon, link: 'https://laravel.com/' },
    { name: 'MongoDB', icon: MongoDBIcon, link: 'https://www.mongodb.com/' },
    { name: 'MySQL', icon: MySQLIcon, link: 'https://www.mysql.com/' },
    { name: 'Docker', icon: DockerIcon, link: 'https://www.docker.com/' },
    { name: 'Python', icon: PythonIcon, link: 'https://www.python.org/' },
];

function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const id = window.setInterval(() => {
            setActiveIndex((i) => (i + 1) % icons.length);
        }, 2000);
        return () => window.clearInterval(id);
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="bg-gray-950 p-4">
            <div className="flex items-center justify-center gap-6">
                {icons.map((icon, index) => (
                    <a
                        key={icon.name}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={icon.name}
                        className={`transition-opacity duration-300 ${
                            activeIndex === index && !isHovered ? 'opacity-100' : 'opacity-50'
                        } hover:opacity-100`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={icon.icon}
                            alt={icon.name}
                            width="64"
                            height="64"
                            className={`w-16 h-16 ${icon.tw ?? ''}`}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default HeroCarousel;
