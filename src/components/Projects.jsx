import React from 'react';
import PortfolioImg from "../assets/wasim.jpg"
import CalculatorImg from "../assets/calcu.jpg"
import EcommerceImg from "../assets/ecom.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Built a sleek personal portfolio using React & Tailwind CSS, showcasing my projects, skills, and experience with a responsive and modern UI. Integrated framer-motion for smooth animations and dynamic components for better interactivity. Optimized for performance & accessibility, ensuring a seamless user experience. Implemented dark mode support and mobile-friendly design." ,
      tech: ["1. React", "2. Tailwind CSS", "3. CSS", "4. Bootstrap"],
      image: PortfolioImg
    },
    {
      title: "Calculator",
      description: "Created a simple calculator using HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations. Designed a clean and responsive UI with CSS for a smooth experience. Used JavaScript functions to handle user input and calculations efficiently. Added event listeners for interactive button clicks. Ensured mobile-friendly design for easy use on any device.",
      tech: ["1. HTML", "2. CSS", "3. JavaScript", "4. Bootstrap"],
      image: CalculatorImg
    },
    {
      title: "E-commerce Platform",
      description: "Developed a responsive E-commerce platform using HTML, CSS, and JavaScript, featuring a modern and user-friendly design. Styled with CSS Flexbox & Grid for a structured layout. Implemented product cards, navbar, and cart UI for seamless navigation. Used hover effects and animations for an engaging experience. Ensured mobile responsiveness for smooth shopping on all devices. 🛒✨",
      tech: ["1. HTML", "2. CSS", "3. JavaScript", "4. Bootstrap"],
      image: EcommerceImg
    }
  ]

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient shadow-lg">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-1 py-1 rounded text-xs font-semibold text-gray-800 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
