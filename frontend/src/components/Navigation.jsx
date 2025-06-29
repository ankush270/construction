import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#whychooseus' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <motion.img
            src="/logo2.png"
            alt="ELGC Logo"
            className="h-10 w-auto drop-shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <span className="font-extrabold text-xl md:text-2xl text-gray-900 tracking-tight">ELGC</span>
          <motion.span
            className="ml-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow hover:from-orange-600 hover:to-orange-700 transition-colors duration-300"
          >
            Get a Quote
          </a>
        </div>
        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 px-2 text-gray-700 font-medium rounded hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </a>
              <div className="mt-4 text-sm text-gray-500 text-center">
                <div>Call us: <a href="tel:+911234567890" className="text-orange-600 font-semibold">+91 12345 67890</a></div>
                <div>Email: <a href="mailto:info@elgc.com" className="text-orange-600 font-semibold">info@elgc.com</a></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 