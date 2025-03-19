import Navbar from "../page/navbar";
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaCode, FaLaptopCode, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiFigma, SiPostman } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "Python", icon: <FaPython size={30} className="text-yellow-400" /> },
    { name: "Java", icon: <FaJava size={30} className="text-red-500" /> },
    { name: "React", icon: <FaReact size={30} className="text-blue-400" /> },
    { name: "Node.js & Express", icon: <FaNodeJs size={30} className="text-green-500" /> },
    { name: "APIs", icon: <FaServer size={30} className="text-gray-400" /> },
    { name: "Databases", icon: <FaDatabase size={30} className="text-purple-500" /> },
    { name: "Version Control", icon: <FaCode size={30} className="text-gray-300" /> },
    { name: "Adaptability", icon: <FaLaptopCode size={30} className="text-teal-400" /> },
    { name: "Team Collaboration", icon: <FaMobileAlt size={30} className="text-pink-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={30} className="text-white" /> },
    { name: "UI/UX Design", icon: <SiFigma size={30} className="text-purple-400" /> },
    { name: "API Development", icon: <SiPostman size={30} className="text-orange-500" /> },
    { name: "Mobile App Development", icon: <SiMongodb size={30} className="text-green-400" /> },
    { name: "Web App Development", icon: <SiTailwindcss size={30} className="text-blue-500" /> },
  ];

  return (
    <div>
      <div className="absolute w-full z-10">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl max-w-3xl text-center leading-relaxed mb-10">
          Hi, I'm <span className="text-emerald-400">Akindu Bandara</span>, a 20-year-old aspiring computer science professional with a passion for 
          problem-solving and innovation. I have a strong foundation in Python and experience with React, Node.js, and Java. 
          I strive to create impactful digital solutions and continuously improve my technical expertise.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-emerald-400">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center mb-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center"
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
