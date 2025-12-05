import { FaJs, FaReact, FaHtml5, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiDocker } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-400" },
    { icon: <FaReact />, name: "React", color: "text-blue-400" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
    { icon: <SiDocker />, name: "Docker", color: "text-blue-400" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-gray-900 scroll-py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-center 
          bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 
          text-transparent bg-clip-text animate-gradient"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* About Text */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate 
              <span className="text-green-400 font-semibold"> Backend Developer (Fresher)</span> 
              who loves building clean, interactive, and user-friendly web applications.
              <br /><br />
              I’m actively learning 
              <span className="text-blue-400"> Node.js</span>, 
              <span className="text-gray-300"> Express.js</span>, and 
              <span className="text-green-300"> backend architecture</span> 
              to become a complete Backend developer.
              <br /><br />
              🎯 <strong className="text-yellow-400">Goal:</strong>  
              Build impactful products & grow as a developer.
              <br />
              🔍 <strong className="text-yellow-400">Looking for:</strong>  
              Opportunities to learn, contribute & create meaningful applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 border border-gray-700 rounded-xl bg-gray-800 
                hover:bg-gray-700 transition transform hover:scale-105 hover:shadow-xl text-center"
              >
                <div className={`text-3xl ${skill.color} mb-2`}>
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-200">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
