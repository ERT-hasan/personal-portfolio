import React, { useState } from "react";
import { motion } from "framer-motion";
import hasan from "../assets/wasim.jpg";

const Hero = () => {
  const [showPhoto] = useState(true);
  const [currentPhoto] = useState(hasan);

  // 📌 Make sure to use full path for GitHub Pages deployment
  const resumeURL = "/personal-portfolio/MD-WASIM-HASAN13.pdf";

  return (
    <section
      id="home"
      className="pt-2 md:pt-24 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image Section */}
        <div className="relative">
          {showPhoto && (
            <figure className="flex items-center justify-center w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]">
              <img
                className="w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-lg"
                src={currentPhoto}
                alt="wasim"
              />
            </figure>
          )}
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text mb-4"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Frontend Developer
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            My name is <span className="text-green-400 font-semibold">Md Wasim Hasan</span>. I
            completed my <span className="text-blue-400 font-semibold">MCA in 2024</span>, and I
            am a{" "}
            <span className="text-orange-400 font-semibold">
              Full-Stack MERN Developer
            </span>
            . I have built projects using{" "}
            <span className="text-purple-400">React & Node.js</span>, including my
            personal portfolio. I also completed training at{" "}
            <span className="text-pink-400">Pantech e-Learning</span>, where I
            worked on a Real Estate Management System. I enjoy problem-solving and
            working on web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 justify-center md:justify-start">
            <a href={resumeURL} target="_blank" rel="noopener noreferrer" download>
              <button className="bg-blue-500 shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 cursor-pointer px-8 py-3 rounded-lg transition">
                Open CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
