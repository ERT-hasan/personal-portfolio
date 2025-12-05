import { useState } from "react";
import { motion } from "framer-motion";
import hasan from "../assets/wasim1.jpg";

const Hero = () => {
  const [showPhoto] = useState(true);
  const [currentPhoto] = useState(hasan);

  // Resume will auto-load correctly from GitHub Pages & Local
  const resumeURL = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section
      id="home"
      className="pt-2 md:pt-40 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 h-full flex flex-col md:flex-row items-center gap-7">

        {/* Profile Image */}
        <div className="relative">
          {showPhoto && (
            <figure className="flex items-center justify-center w-[180px] h-[180px] sm:w-[250px] sm:h-[240px]">
              <img
                className="w-full h-full rounded-full object-cover border-3 border-purple-500 shadow-lg"
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
            </span>.
            I have built projects using <span className="text-purple-400">React & Node.js</span>,
            including my personal portfolio. I also completed training at{" "}
            <span className="text-pink-400">Pantech e-Learning</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 justify-center md:justify-start">
            <a href={resumeURL} download="resume.pdf">
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
