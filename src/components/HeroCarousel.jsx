import { useState, useEffect } from 'react';
import HTMLIcon from '../assets/img/icons8-html.svg';
import CSSIcon from '../assets/img/icons8-css.svg';
import JSIcon from '../assets/img/icons8-js.svg';
import NextIcon from '../assets/img/nextjs-icon-dark-background.svg';
import TailwindIcon from '../assets/img/icons8-tailwind-css.svg';
import BootstrapIcon from '../assets/img/icons8-bootstrap.svg';
import ReactIcon from '../assets/img/react.svg';
import ViteIcon from '../assets/img/vite.svg';
import ChakraIcon from '../assets/img/icons8-chakra-ui.svg';
import GitHubIcon from '../assets/img/icons8-github.svg';
import FlutterIcon from '../assets/img/icons8-flutter.svg';
import FigmaIcon from '../assets/img/icons8-figma.svg';
import FirebaseIcon from '../assets/img/icons8-firebase.svg';
import NodeIcon from '../assets/img/icons8-nodejs.svg';
import ExpressIcon from '../assets/img/icons8-express-js.svg';
import PHPIcon from '../assets/img/new-php-logo.svg';
import LaravelIcon from '../assets/img/Laravel-Logo.wine.svg';
import MongoDBIcon from '../assets/img/MongoDB_Logomark_SpringGreen.svg';
import MySQLIcon from '../assets/img/icons8-mysql.svg';
import DockerIcon from '../assets/img/docker-mark-blue.svg';
import PythonIcon from '../assets/img/icons8-python.svg';

const icons = [
    { name: 'HTML', icon: HTMLIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: CSSIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: JSIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Next.JS', icon: NextIcon, link: 'https://nextjs.org/' },
    { name: 'Tailwind', icon: TailwindIcon, link: 'https://tailwindcss.com/' },
    { name: 'Bootstrap', icon: BootstrapIcon, link: 'https://getbootstrap.com/' },
    { name: 'React', icon: ReactIcon, link: 'https://reactjs.org/' },
    { name: 'Vite', icon: ViteIcon, link: 'https://vitejs.dev/' },
    { name: 'Chakra UI', icon: ChakraIcon, link: 'https://www.chakra-ui.com/'},
    { name: 'GitHub', icon: GitHubIcon, link: 'https://github.com/' },
    { name: 'Flutter', icon: FlutterIcon, link: 'https://flutter.dev/' },
    { name: 'Figma', icon: FigmaIcon, link: 'https://www.figma.com/' },
    { name: 'Firebase', icon: FirebaseIcon, link: 'https://firebase.google.com/' },
    { name: 'Node.JS', icon: NodeIcon, link: 'https://nodejs.org/en' },
    { name: 'Express.JS', icon: ExpressIcon, link: 'https://expressjs.com/' },
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
        if (isHovered) return; // Pause animation on hover
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="bg-gray-950 p-4">
            <div className="flex items-center justify-center space-x-6">
                {icons.map((icon, index) => (
                    <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-opacity duration-300 ${
                            activeIndex === index && !isHovered ? 'opacity-100' : 'opacity-50'
                        } hover:opacity-100`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={icon.icon} alt={icon.name} className="w-16 h-16" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default HeroCarousel;
