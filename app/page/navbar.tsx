"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"


interface NavLink {
  path: string
  label: string
}

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const pathname = usePathname()

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

