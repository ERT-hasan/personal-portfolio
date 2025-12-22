import PortfolioImg from "../assets/wasim.jpg";
import CouponImg from "../assets/Coupon.jpg";
import currencyImg from "../assets/currency.jpg";

const Projects = () => {
  const projects = [
      {
  title: "MERN Airbnb Clone",
  description: (
    <div className="space-y-3 max-h-44 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {/* Subtle highlight */}
      <div className="rounded-lg border-l-4 border-emerald-500 bg-gray-800/60 p-4">
        <p className="text-sm text-emerald-300 font-medium">
          A full-stack Airbnb-style application built using the MERN stack with MVC architecture.
        </p>
      </div>

      <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
        <li>User authentication with secure login and authorization.</li>
        <li>Property listings with advanced search and filtering.</li>
        <li>End-to-end booking workflow.</li>
        <li>Secure image uploads using Multer and Cloudinary.</li>
      </ul>
    </div>
  ),
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Auth",
    "Bcrypt",
    "Multer",
    "Cloudinary",
    "REST APIs",
    "MVC Architecture",
    "EJS",
  ],
  image: PortfolioImg,
},

   {
  title: "Coupon Management",
  description: (
    <div className="space-y-3 max-h-44 overflow-y-auto pr-2">
      {/* Subtle highlight */}
      <div className="rounded-lg border-l-4 border-indigo-500 bg-gray-800/60 p-4">
        <p className="text-sm text-indigo-300 font-medium">
          A backend service to create and manage discount coupons for an e-commerce platform.
        </p>
      </div>

      <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
        <li>Built RESTful APIs to create, apply, and manage coupons.</li>
        <li>Implemented eligibility checks based on user and cart conditions.</li>
        <li>Supported flat and percentage discounts with proper validation rules.</li>
        <li>Applied maximum discount logic to automatically select the best coupon.</li>
        <li>Designed modular validation and reusable logic for scalability.</li>
      </ul>
    </div>
  ),

  tech: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JavaScript",
    "In-memory / JSON",
    "Postman",
    "Git",
    "GitHub",
  ],

  image: CouponImg,
},

   {
  title: "Currency Converter Web App",
  description: (
    <div className="space-y-3 max-h-44 overflow-y-auto pr-2">
      {/* Subtle highlight */}
      <div className="rounded-lg border-l-4 border-sky-500 bg-gray-800/60 p-4">
        <p className="text-sm text-sky-300 font-medium">
          A responsive web application that converts currencies using real-time exchange rates.
        </p>
      </div>

      <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
        <li>Integrated Fetch API to retrieve live currency exchange rates.</li>
        <li>Implemented input validation and error handling for invalid inputs and network issues.</li>
        <li>Focused on accuracy, usability, and smooth user experience.</li>
        <li>Designed a mobile-friendly layout for consistent performance across devices.</li>
        <li>Applied clean code practices for better readability and maintainability.</li>
      </ul>
    </div>
  ),

  tech: ["HTML", "CSS", "JavaScript", "Fetch API"],

  image: currencyImg,
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
