import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-center md:text-left text-sm 
            bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 
            text-transparent bg-clip-text animate-gradient"
          >
            © 2025 E-R-T Hasan. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            
            {/* GitHub */}
            <a 
              href="https://github.com/ERT-hasan" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <FaGithub size={26} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/md-wasim-hasan-0175342a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={26} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
