import Navbar from "../page/navbar";

export default function About() {
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mb-10">
          {[
            "Python",
            "Java",
            "React",
            "Node.js & Express",
            "APIs",
            "Databases",
            "Version Control",
            "Adaptability",
            "Team Collaboration",
            "Next.js",
            "UI/UX Design",
            "API Development",
            "Mobile App Development",
            "Web App Development",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
