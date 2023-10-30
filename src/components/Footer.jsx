import Logo from '../assets/img/GG LOGO.png';
import '../assets/css/footer.css';
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer p-4 bg-gray-950 rounded-md flex justify-between items-center text-white space-x-4">

            {/* Logo */}
            <div>
            <a href="#home">
                    <img src={Logo} alt="GJO Logo" className='h-10 w-50 ml-4 swing-animation logo-glow'/>
                </a>
            </div>

            {/* Contact Info */}
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="mb-2">hello@gjo.dev</p>
                <p>© GJO 2023</p>
            </div>

            {/* Social Links */}
            <div className="text-right">
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2">
                        <FaFacebookF className="cursor-pointer hover:text-gray-500"/>
                        <FaInstagram className="cursor-pointer hover:text-gray-500"/>
                        <FaGithub className="cursor-pointer hover:text-gray-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <FaTwitter className="cursor-pointer hover:text-gray-500"/>
                        <FaLinkedinIn className="cursor-pointer hover:text-gray-500"/>
                        <FaDiscord className="cursor-pointer hover:text-gray-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
