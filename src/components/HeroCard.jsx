import '../assets/css/heroCard.css';
import { Link } from 'react-router-dom';

// Import logos as string URLs (Vite)
import PythonLogo from '../assets/img/icons8-python.svg?url';
import FlaskLogo from '../assets/img/icons8-flask-white.svg?url';
import SpotifyLogo from '../assets/img/icons8-spotify.svg?url';
import NextJsLogo from '../assets/img/nextjs-icon-dark-background.svg?url';
import TypeScriptLogo from '../assets/img/icons8-typescript.svg?url';
import GoogleDriveLogo from '../assets/img/icons8-google-drive.svg?url';
import HTMLLogo from '../assets/img/icons8-html.svg?url';
import JavaScriptLogo from '../assets/img/icons8-js.svg?url';

function HeroCard() {
    const projects = [
        {
            name: 'Spotify Autosave App',
            description:
                "Automatically save an artist's entire library to your Spotify account with this Flask-powered app.",
            link: 'https://github.com/Gorvok/spotify_autosave_app',
            tech: [
                { name: 'Python', logo: PythonLogo },
                { name: 'Flask', logo: FlaskLogo },
                { name: 'Spotify API', logo: SpotifyLogo },
            ],
        },
        {
            name: 'Homeschool Resource Hub',
            description:
                'A Next.js and TypeScript-based platform offering curated homeschooling resources with Google Drive API integration.',
            link: 'https://github.com/Gorvok/homeschool-resource-hub',
            tech: [
                { name: 'Next.js', logo: NextJsLogo },
                { name: 'TypeScript', logo: TypeScriptLogo },
                { name: 'Google Drive API', logo: GoogleDriveLogo },
            ],
        },
        {
            name: 'Tiny Farm Web Game',
            description:
                'A simple browser-based clicker game built with HTML Canvas and JavaScript, perfect for showcasing interactive gameplay.',
            link: 'https://gorvok.github.io/tiny-farm-game/',
            tech: [
                { name: 'HTML5', logo: HTMLLogo },
                { name: 'JavaScript', logo: JavaScriptLogo },
            ],
        },
    ];

    return (
        <section
            aria-labelledby="featured-work"
            className="hero-card p-4 rounded-md shadow-md flex flex-col items-center space-y-4"
        >
            <h2 id="featured-work" className="sr-only">
                Featured Work
            </h2>

            {projects.map((project) => (
                <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} — open project`}
                    className="w-full group focus:outline-none"
                >
                    <div className="project p-[1px] rounded-lg bg-gradient-to-r from-green-500 to-sky-500 transition-shadow duration-200 hover:shadow-lg">
                        <div className="inner bg-gray-950 rounded-lg w-full h-full p-4">
                            <h3 className="text-xl font-semibold mb-2 text-center text-white">
                                {project.name}
                            </h3>
                            <p className="text-center text-gray-200/80">
                                {project.description}
                            </p>

                            <div className="tech-stack flex justify-center gap-4 mt-3">
                                {project.tech.map((tech) => (
                                    <img
                                        key={tech.name}
                                        src={tech.logo}
                                        alt={tech.name}
                                        title={tech.name}
                                        width="32"
                                        height="32"
                                        loading="lazy"
                                        className="w-8 h-8"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            ))}

            <Link className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" to="/portfolio">Full Portfolio</Link>
        </section>
    );
}

export default HeroCard;
