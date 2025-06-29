import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ scrollToSection }) => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/src/assets/logo2.png" alt="ELGC Logo" className="h-6 md:h-8 w-auto" />
              <span className="ml-2 text-lg md:text-xl font-bold">ELGC</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md text-sm md:text-base">
              Leading construction and engineering company specializing in infrastructure development, 
              environmental systems, and turnkey solutions with over 20 years of experience.
            </p>
            <div className="flex space-x-4">
              {['📱', '✉️', '💬'].map((icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-gray-300 hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Social Media</span>
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'services', 'projects', 'contact'].map((section, index) => (
                <li key={index}>
                  <motion.button 
                    onClick={() => scrollToSection(section)}
                    className="text-gray-300 hover:text-orange-600 transition-colors text-sm md:text-base"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300 text-sm md:text-base">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@elgc.com</p>
              <p>📍 123 Construction Ave, City, State 12345</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-300 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 ELGC Construction. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 