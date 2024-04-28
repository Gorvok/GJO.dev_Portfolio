import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 mt-14">
            <div className="max-w-4xl bg-gray-950 rounded-lg shadow-xl p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-300 mb-4">About Me</h1>
                <p className="text-gray-400 text-base md:text-lg text-justify">
                    Hello! I&apos;m Gjo, a passionate Full Stack Developer and a lifelong learner based in Florida. My adventure in coding began when I was just 12, fueled by a boundless curiosity about how technology could transform ideas into reality. Though my early interest in tech was momentarily sidetracked by my love for soccer, I fully embraced my passion for development in 2022.
                    I&apos;m currently deepening my expertise by pursuing a Bachelor of Science in Web Development at Full Sail University, alongside managing a full-time job. This balance between work, study, and personal life is a challenge I tackle daily with a can-do attitude and a resilient spirit.
                    My journey through various coding courses and university studies has equipped me with a robust toolkit. From HTML to Python, I have honed my skills across a wide range of technologies. More importantly, I&apos;ve learned that the true essence of being a developer lies in continuous learning and applying knowledge to solve real-world problems.
                    When I&apos;m not coding, you might find me on the soccer field, where I bring the same enthusiasm and teamwork skills as I do to my development projects. I believe that whether it’s sports or software, teamwork and perseverance lead to success.
                    Through my portfolio, I hope to showcase my growth as a developer and the diverse projects that have shaped my career so far.
                    Thank you for visiting my site. I look forward to connecting and exploring how we can create something amazing together!
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-300 mb-4 mt-6">Open to Work</h3>
                <p className="text-gray-400 text-base md:text-lg text-justify">
                    If you&apos;re on the hunt for someone who’s not just a coder but a creator, you&apos;ve hit the jackpot. I&apos;m on the lookout for cool open source projects and exciting collaboration opportunities. Got a website that needs jazzing up or an app that could use some of Gjo magic? Let’s talk!
                    I&apos;m all about web design and development, application crafting, and pretty much anything that lets me throw a bit of code around in interesting ways. I love projects that make me think outside the box and push tech boundaries just a bit further.
                    Bringing a mix of tech chops, a dash of creativity, and a whole lot of enthusiasm, I&apos;m here to turn your big ideas into reality. I thrive on teamwork and I’m all about making projects not just functional, but fun and engaging too.
                    Got a project in mind? Need a hand with something awesome? Drop me a line. Let’s make something amazing together!
                </p>
                <div className="mt-6 text-center">
                    <Link to="/contact" className="inline-block bg-gradient-to-r from-green-500 to-sky-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-gradient-to-br transition duration-300 ease-in-out">
                        Let&apos;s Collab
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;