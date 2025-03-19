import Navbar from "./page/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm <span className="text-primary">Akindu</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
          Aspiring Computer Science Professional passionate about Web Development, Software Engineering, and Machine Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

