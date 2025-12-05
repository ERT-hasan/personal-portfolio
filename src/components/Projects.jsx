import PortfolioImg from "../assets/wasim.jpg";
import CalculatorImg from "../assets/calcu.jpg";
import EcommerceImg from "../assets/ecom.jpg";

const Projects = () => {
  const projects = [
    {
      title: "MERN Airbnb Clone",
      description: `
      A full-stack Airbnb-style application built using the MERN stack with MVC architecture.
      Features include user authentication, property listings, advanced search & filtering,
      booking workflow, and secure image uploads using Multer + Cloudinary.
      `,
      tech: [
        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Bcrypt",
        "Multer", "Cloudinary", "REST APIs", "MVC Architecture", "EJS"
      ],
      image: PortfolioImg,
    },
    {
      title: "Calculator",
      description: `
      A simple calculator built using HTML, CSS, and JavaScript.
      Supports basic arithmetic operations and uses a clean, responsive UI.
      Includes event listeners for interactive button clicks and mobile-friendly layout.
      `,
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: CalculatorImg,
    },
    {
      title: "E-commerce Platform",
      description: `
      A modern and responsive mini e-commerce frontend.
      Uses product cards, navbar, hover animations, and mobile-friendly layout.
      Built with HTML, CSS (Flexbox + Grid), and JavaScript.
      `,
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: EcommerceImg,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 
          bg-gradient-to-r from-orange-500 via-blue-500 to-green-500
          text-transparent bg-clip-text animate-gradient"
        >
          My Projects
        </h2>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden 
              hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 
                  bg-gradient-to-r from-orange-500 via-blue-500 to-green-500
                  text-transparent bg-clip-text"
                >
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md text-xs font-semibold 
                      bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400
                      text-gray-900 shadow"
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
  );
};

export default Projects;
