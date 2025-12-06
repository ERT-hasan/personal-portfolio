import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const sections = ["home", "projects","about", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Live Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setCurrentTime(now.toLocaleTimeString("en-IN", options) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Spy + Shrink on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleNavClick = (e, section) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? "py-2 bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-700" : "py-4 bg-gray-900/40 backdrop-blur-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-semibold 
          bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 
          text-transparent bg-clip-text animate-gradient cursor-pointer">
          Hasan Portfolio
        </h1>

        {/* TIME (Desktop) */}
        <div className="hidden md:block text-yellow-300 font-semibold text-sm tracking-wide">
          🕒 {currentTime}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 relative">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className={`relative text-sm tracking-wide transition-all duration-300 
                ${
                  activeSection === section
                    ? "text-pink-400"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {section.toUpperCase()}
              {activeSection === section && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1 rounded"
        >
          {isOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700 px-6 py-4 space-y-3">
          
          {/* Mobile Time */}
          <p className="text-center text-yellow-300 font-semibold">🕒 {currentTime}</p>

          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className={`block text-lg ${
                activeSection === section
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300"
              } hover:text-yellow-300 transition`}
            >
              {section.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
