import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

 const Footer=() =>{
  return (
    <footer className="bg-gray-800 text-gray-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-purple bg-gradient-to-r from-orange-800 dark:from-orange-400 via-blue-800 dark:via-blue-400 to-green-800 dark:to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">© 2025 E-R-T HASAN. All rights reserved</p>
          <div className="flex space-x-6">
            <a href="https://github.com/ERT-hasan/MERN-FULL-STACK08" className="hover:text-accent transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/md-wasim-hasan-0175342a9/" className="hover:text-accent transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/explore/" className="hover:text-accent transition ">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;