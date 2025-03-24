import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "./page/navbar"
import samwe1 from "./images/mypic1.png"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar for navigation to other pages */}
      <div className="absolute w-full z-10">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-screen px-4">
        {/* Profile image in circle */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-12 animate-fadeIn">
          <div className="absolute inset-0 rounded-full border border-gray-700"></div>
          <div className="absolute -inset-2 rounded-full border border-gray-800 opacity-50"></div>
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-400">
            <Image src={samwe1} alt="Akindu Bandara" priority />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center max-w-2xl">
          <p className="text-emerald-400 mb-4 text-lg font-medium animate-fadeIn">Hello Everyone.</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-slideUp">
            I&apos;M <span className="text-emerald-400">AKINDU</span>
            <br />
            BANDARA
          </h1>

          <p className="text-white mb-10 text-lg md:text-xl animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            An aspiring 20-year-old computer science professional driven by a passion for problem-solving and
            innovation. Strong foundation in Python with experience in React, Node.js, and Java. I aim to secure a job
            at a reputable company where I can contribute to real-world solutions and deepen my technical expertise.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/projects"
              className="group flex items-center border-2 border-emerald-400 bg-transparent hover:bg-emerald-400 hover:text-black transition-colors duration-300 py-3 px-6 w-full sm:w-auto justify-center"
            >
              <span className="mr-4 font-medium">View my work</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Link>

            
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top right decorative circle */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-gray-800"></div>

          {/* Bottom left decorative circle */}
          <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border border-gray-800"></div>

          {/* Decorative dots pattern */}
          <div className="absolute bottom-8 left-8 grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-800"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

