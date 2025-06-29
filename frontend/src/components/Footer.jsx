import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ scrollToSection }) => {
  const socialLinks = [
    { icon: "📱", label: "Phone", href: "tel:+97126727226" },
    { icon: "✉️", label: "Email", href: "mailto:emirates.link@elgc.ae" },
    { icon: "💬", label: "WhatsApp", href: "#" }
  ]

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ]

  const contactInfo = [
    { icon: "📞", text: "+971 2 6727226", href: "tel:+97126727226" },
    { icon: "✉️", text: "emirates.link@elgc.ae", href: "mailto:emirates.link@elgc.ae" },
    { icon: "📍", text: "P.O. Box 32799, Abu Dhabi, UAE", href: "#" }
  ]

  const floatingAnimation = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 40, 0],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/logo2.png" 
                alt="ELGC Logo" 
                className="h-8 md:h-10 w-auto drop-shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="ml-3 text-xl md:text-2xl font-bold"
                whileHover={{ color: "#f97316" }}
                transition={{ duration: 0.3 }}
              >
                ELGC
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 max-w-md text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Leading construction and engineering company specializing in infrastructure development, 
              environmental systems, and turnkey solutions with over 20 years of experience.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  className="group relative w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:bg-orange-600"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-lg md:text-xl font-semibold mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-2 h-2 bg-orange-500 rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm md:text-base flex items-center group"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="w-1 h-1 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-lg md:text-xl font-semibold mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-2 h-2 bg-orange-500 rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              Contact Info
            </motion.h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center text-gray-300 text-sm md:text-base group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.a
                    href={info.href}
                    className="flex items-center hover:text-orange-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span 
                      className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300"
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      {info.icon}
                    </motion.span>
                    <span>{info.text}</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm md:text-base">
            <motion.p 
              whileHover={{ color: "#f97316" }}
              transition={{ duration: 0.3 }}
            >
              &copy; 2024 ELGC Construction. All rights reserved.
            </motion.p>
            <motion.div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 