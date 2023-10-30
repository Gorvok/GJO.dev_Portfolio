import Logo from '../assets/img/GG LOGO.png';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer p-4 bg-gray-950 rounded-md flex justify-between items-center text-white space-x-4">

            {/* Logo */}
            <div>
                <a href="#home">
                    <img src={Logo} alt="GJO Logo" className='h-10 w-50 ml-4 swing-animation'/>
                </a>
            </div>

            {/* Contact Info */}
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                {/* Making email clickable with the gradient hover */}
                <a href="mailto:hello@gjo.dev" className="text-white underline transition duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 mb-2">
                    hello@gjo.dev
                </a>
                <p>© GJO 2023</p>
            </div>

            {/* Social Links */}
            <div className="text-right">
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2">
                        {/* Adding links to social icons */}
                        <a href="https://www.facebook.com/Gorvok/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="cursor-pointer hover:text-sky-500"/>
                        </a>
                        <a href="https://instagram.com/gorvok_5" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="cursor-pointer hover:text-gray-500"/>
                        </a>
                        <a href="https://github.com/Gorvok" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="cursor-pointer hover:text-gray-500"/>
                        </a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a href="https://twitter.com/gorvok_5" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="cursor-pointer hover:text-sky-500"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gjovanigorvokaj/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="cursor-pointer hover:text-sky-500"/>
                        </a>
                        <a href="https://discord.com/users/884621877232930848" target="_blank" rel="noopener noreferrer">
                            <FaDiscord className="cursor-pointer hover:text-indigo-500"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
