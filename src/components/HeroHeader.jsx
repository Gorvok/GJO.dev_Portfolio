// noinspection JSValidateTypes

import Typewriter from './Typewriter';
// force a string URL for the image import (Vite)
import LogoUrl from '../assets/img/GG LOGO.png?url';
import '../assets/css/heroHeader.css';
import { Link } from 'react-router-dom';

function HeroHeader() {
    return (
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-center h-screen p-4 md:p-10">
            {/* Left Side */}
            <div className="flex flex-col items-center w-full md:w-auto mb-8 md:mb-0">
                <h1 className="lg:text-8xl md:text-6xl sm:text-4xl mb-8">
                    Hey <span role="img" aria-label="Waving Hand" className="waveEmoji">👋</span>, I&apos;m
                </h1>
                <img
                    src={LogoUrl}
                    alt="GJO Logo"
                    className="w-32 md:w-60 lg:w-72 pb-10"
                    /* if you really want ~168px width at some breakpoint:
                       className="w-32 md:w-[168px] lg:w-72 pb-10"
                    */
                />
            </div>

            {/* Right Side */}
            <div className="text-center md:text-left w-full max-w-md md:w-80">
            <h2 className="text-6xl mb-4 lg:text-6xl md:text-4xl sm:text-3xl">
                    I Am A
                </h2>
                <div className="gradient-text hover:gradient-animate text-3xl mb-4 lg:text-4xl md:text-3xl sm:text-2xl">
                    <Typewriter
                        strings={[
                            'Full Stack Developer',
                            'Mobile Developer',
                            'Continuous Learner',
                            'Blogger',
                            'Professional Nap Taker',
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        delay={2000}
                    />
                </div>
                <Link
                    to="/contact"
                    className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out"
                >
                    Let&apos;s Collab
                </Link>
            </div>
        </section>
    );
}

export default HeroHeader;
