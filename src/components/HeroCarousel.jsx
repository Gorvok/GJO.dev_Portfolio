import { useState, useEffect } from 'react';
import HTMLIcon from '../assets/img/icons8-html.svg';
import CSSIcon from '../assets/img/icons8-css.svg';
import JSIcon from '../assets/img/icons8-js.svg';
import TailwindIcon from '../assets/img/icons8-tailwind-css.svg';
import BootstrapIcon from '../assets/img/icons8-bootstrap.svg';
import ReactIcon from '../assets/img/react.svg';
import ViteIcon from '../assets/img/vite.svg';
import GitHubIcon from '../assets/img/icons8-github.svg';
import FlutterIcon from '../assets/img/icons8-flutter.svg';
import FigmaIcon from '../assets/img/icons8-figma.svg';
import FirebaseIcon from '../assets/img/icons8-firebase.svg';
// Import other icons as time goes on...

const icons = [
    { name: 'HTML', icon: HTMLIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: CSSIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: JSIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Tailwind', icon: TailwindIcon, link: 'https://tailwindcss.com/' },
    { name: 'Bootstrap', icon: BootstrapIcon, link: 'https://getbootstrap.com/' },
    { name: 'React', icon: ReactIcon, link: 'https://reactjs.org/' },
    { name: 'Vite', icon: ViteIcon, link: 'https://vitejs.dev/' },
    { name: 'GitHub', icon: GitHubIcon, link: 'https://github.com/'},
    { name: 'Flutter', icon: FlutterIcon, link: 'https://flutter.dev/' },
    { name: 'Figma', icon: FigmaIcon, link: 'https://www.figma.com/' },
    { name: 'Firebase', icon: FirebaseIcon, link: 'https://firebase.google.com/' },
  // Add other icons as time goes on...
];

function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="bg-gray-950 p-4">
        <div className="flex items-center justify-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? 'opacity-100' : 'opacity-50'
              } transition-opacity duration-200`}
            >
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="carousel-icon m-4" 
                />
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
