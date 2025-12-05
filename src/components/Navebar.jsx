import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            let currentSection = 'home';

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        
                        <h1 className="bg-gradient-to-r from-orange-800 dark:from-orange-400 via-blue-800 dark:via-blue-400 to-green-800 dark:to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                            Hi MD WASIM HASAN
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'projects', 'contact'].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`${
                                    activeSection === section
                                        ? 'text-pink-400 border-b-2 border-blue-400'
                                        : 'text-gray-300 hover:text-white'
                                } transition duration-300 pb-1`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? (
                            <XIcon className="h-6 w-6 text-white" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        {['home', 'about', 'projects', 'contact'].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={() => setIsOpen(false)}
                                className={`block ${
                                    activeSection === section ? 'text-yellow-400' : 'text-white'
                                } hover:text-yellow-400 transition duration-300`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
