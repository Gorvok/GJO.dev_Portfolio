import '../assets/css/heroCard.css';

// Import logos
import PythonLogo from '../assets/img/icons8-python.svg';
import FlaskLogo from '../assets/img/icons8-flask-white.svg';
import SpotifyLogo from '../assets/img/icons8-spotify.svg';
import NextJsLogo from '../assets/img/nextjs-icon-dark-background.svg';
import TypeScriptLogo from '../assets/img/icons8-typescript.svg';
import GoogleDriveLogo from '../assets/img/icons8-google-drive.svg';
import HTMLLogo from '../assets/img/icons8-html.svg';
import JavaScriptLogo from '../assets/img/icons8-js.svg';

function HeroCard() {
    const projects = [
        {
            name: "Spotify Autosave App",
            description: "Automatically save an artist's entire library to your Spotify account with this Flask-powered app.",
            link: "https://github.com/Gorvok/spotify_autosave_app", // Add your project link here
            tech: [
                { name: "Python", logo: PythonLogo },
                { name: "Flask", logo: FlaskLogo },
                { name: "Spotify API", logo: SpotifyLogo },
            ],
        },
        {
            name: "Homeschool Resource Hub",
            description: "A Next.js and TypeScript-based platform offering curated homeschooling resources with Google Drive API integration.",
            link: "https://github.com/Gorvok/homeschool-resource-hub", // Add your project link here
            tech: [
                { name: "Next.js", logo: NextJsLogo },
                { name: "TypeScript", logo: TypeScriptLogo },
                { name: "Google Drive API", logo: GoogleDriveLogo },
            ],
        },
        {
            name: "Tiny Farm Web Game",
            description: "A simple browser-based clicker game built with HTML Canvas and JavaScript, perfect for showcasing interactive gameplay.",
            link: "https://gorvok.github.io/tiny-farm-game/", // Add your project link here
            tech: [
                { name: "HTML5", logo: HTMLLogo },
                { name: "JavaScript", logo: JavaScriptLogo },
            ],
        },
    ];

    return (
        <div className="hero-card p-4 rounded-md shadow-md flex flex-col items-center space-y-4">
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <div
                        className="project p-1 bg-gray-950 rounded-lg shadow transition-shadow duration-200 flex flex-col justify-center items-center w-full hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500"
                    >
                        <div className="inner bg-gray-950 w-full h-full">
                            <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
                            <p className="text-gray-700 text-center">{project.description}</p>
                            <div className="tech-stack flex justify-center space-x-4 mt-2">
                                {project.tech.map((tech, i) => (
                                    <img
                                        key={i}
                                        src={tech.logo}
                                        alt={tech.name}
                                        title={tech.name}
                                        className="w-8 h-8"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            ))}
            <button className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out">
                Full Portfolio
            </button>
        </div>
    );
}

export default HeroCard;
