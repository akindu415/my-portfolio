import Image from "next/image";
import Navbar from "../page/navbar";
import research from "../images/research data.webp"
import ticketing from "../images/Ticket system.webp"
import property from "../images/property finder.webp"
import student from "../images/student-management-system.png"
import trail from "../images/trailguard.png"
import portfolio from "../images/portfolio.png"

export default function Projects() {
  const projects = [
    {
      title: "Research Manager - 2024",
      description: "A Python project to manage research data.",
      link: "https://github.com/akindu415/Research-Manager",
      image: research, 
    },
    {
      title: "Real-Time Ticketing System - 2024",
      description: "Automated a synchronized ticketing platform using Angular and Spring Boot, enhancing reliability with advanced OOP concepts.",
      link: "https://github.com/akindu415/real_time_ticketing_system",
      image: ticketing, 
    },
    {
      title: "Property Finder Website - 2024",
      description: "Developed a Property Finder Web Application using React JS, integrating real-time property listings, search filters, and dynamic maps for improved user experiences.",
      link: "https://github.com/akindu415/property-finder",
      image: property, 
    },
    {
      title: "Student Management System - 2024",
      description: "A management system to efficiently handle student records.",
      link: "https://github.com/akindu415/Student-management-system",
      image: student, 
    },
    {
      title: "TrailGuard - 2024",
      description: "Developed an app to help outdoor enthusiasts stay on track in the wilderness, including an AI plant identifier.",
      link: "https://trail-guard-marketing-website-v79n.vercel.app",
      image: trail, 
    },
    {
      title: "Portfolio - 2024",
      description: "A portfolio designed using HTML and CSS to showcase all my projects.",
      link: "https://github.com/akindu415/Portfolio",
      image: portfolio, 
    },
  ];

  return (
    <>
      <div className="absolute w-full z-10">
        <Navbar />
      </div>

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-6">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition transform hover:scale-105 flex flex-col items-center"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-emerald-400">{project.title}</h2>
              <p className="mt-2 text-gray-300 text-center">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
