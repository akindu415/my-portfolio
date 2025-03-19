import Navbar from "../page/navbar";

export default function About() {
  return (
    <div>
      <div className="absolute w-full z-10">
        <Navbar />
      </div>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl max-w-3xl text-center leading-relaxed">
          Hi, I'm <span className="text-emerald-400">Akindu Bandara</span>, a 20-year-old aspiring computer science professional with a passion for 
          problem-solving and innovation. I have a strong foundation in Python and experience with React, Node.js, and Java. 
          I strive to create impactful digital solutions and continuously improve my technical expertise.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4 text-emerald-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Python</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Java</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">React</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Node.js & Express</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">APIs</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Databases</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Version Control</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Adaptability</div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">Team Collaboration</div>
        </div>
      </div>
    </div>
  );
}
