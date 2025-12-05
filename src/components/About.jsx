import { FaJs, FaReact, FaHtml5, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiDocker } from 'react-icons/si';

const About = () => {
  const skills = [
    { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-400' },
    { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: 'text-purple-400' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: <SiExpress />, name: 'Express.js', color: 'text-gray-300' },
    { icon: <SiDocker />, name: 'Docker', color: 'text-blue-400' },
  ];

  return (
    <section 
      id="about" 
      className="fixed-w-full flex justify-center items-center bg-gray-900 py-1"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div>
            <p className="text-lg font-medium text-amber-300 leading-relaxed bg-gradient-to-r from-orange-800 dark:from-orange-400 via-blue-800 dark:via-blue-400 to-green-800 dark:to-green-400  bg-clip-text bg-300% animate-gradient">
              I&apos;m a passionate Full-Stack MERN Developer (Fresher) eager to build dynamic and user-friendly web applications. Currently, I&apos;m exploring backend development with Node.js &amp; Express.js to enhance my full-stack expertise.
              <br /><br />
              💡 <strong>Key Skills:</strong> React.js, JavaScript, Tailwind CSS, MongoDB, Express.js, Node.js, Docker, REST APIs  
              🎯 <strong>Goal:</strong> Contribute to impactful projects, learn new technologies, and grow as a skilled developer.  
              🔍 <strong>Looking for Opportunities:</strong> Seeking roles to apply my skills and continue my learning journey.
            </p>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-4 border rounded-xl bg-gray-800 hover:bg-gray-700 transition transform hover:scale-110 hover:shadow-lg text-center"
              >
                <div className={`text-3xl ${skill.color} mb-2 transition duration-300 hover:text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-yellow-300 transition duration-300 hover:text-white">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
