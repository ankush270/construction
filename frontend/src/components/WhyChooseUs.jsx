import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const strengths = [
    { 
      title: "20+ Years Experience", 
      desc: "Decades of expertise in construction and engineering",
      icon: "🏗️"
    },
    { 
      title: "100+ Completed Projects", 
      desc: "Successfully delivered projects across various sectors",
      icon: "📊"
    },
    { 
      title: "Turnkey Environmental Systems", 
      desc: "Complete environmental solutions from design to implementation",
      icon: "🌱"
    },
    { 
      title: "Certified Quality & Safety Standards", 
      desc: "ISO certified processes and safety protocols",
      icon: "🏆"
    }
  ]

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative py-6 md:py-8 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-orange-100 rounded-full opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 40, 0],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-100 rounded-full opacity-10"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10 lg:gap-16">
          <motion.div
            className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img src="/Construction-amico.svg" alt="Why Choose Us" className="w-64 md:w-80 lg:w-96 h-auto" loading="lazy" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Why Choose <span className="text-orange-600">ELGC?</span>
            </h2>
            <motion.div 
              className="space-y-4 md:space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {strengths.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group flex items-start p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer"
                  variants={fadeInLeft}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-base">{item.icon}</span>
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-base md:text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-3"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-3 md:mt-4">
              <a
                href="#about"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-colors duration-300 text-base md:text-lg"
              >
                Learn More About Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 