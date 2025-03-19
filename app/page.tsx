import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "./page/navbar"
import samwe1 from "./images/mypic1.png"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar for navigation to other pages */}
      <div className="absolute w-full z-10">
        <Navbar />
      </div>

      {/* Split screen layout */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left side - Dark background with text */}
        <div className="w-full md:w-1/2 bg-[#1a1e23] text-white p-8 md:p-16 flex flex-col justify-center relative">
          <div className="mt-16 md:mt-0">
            <p className="text-emerald-400 mb-4">Hello Everyone.</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              I&apos;M AKINDU
              <br />
              BANDARA
            </h1>

            <div className="inline-block">
              <Link
                href="/projects"
                className="group flex items-center border-2 border-emerald-400 bg-transparent hover:bg-emerald-400 hover:text-[#1a1e23] transition-colors duration-300 py-3 px-6"
              >
                <span className="mr-4 font-medium">View more</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
            </div>
          </div>

          {/* Decorative dots pattern */}
          <div className="absolute bottom-8 left-8 grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-700"></div>
            ))}
          </div>
        </div>

        {/* Right side - Green background with image */}
        <div className="w-full md:w-1/2 bg-emerald-400 relative " style={{backgroundColor: "#23a481"}}>
          {/* Profile image */}
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src={samwe1}
              alt="Akindu Bandara"
              width={800}
              height={900}
              className="object-cover h-full md:h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}

