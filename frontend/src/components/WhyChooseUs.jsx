import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const strengths = [
    { title: "20+ Years Experience", desc: "Decades of expertise in construction and engineering" },
    { title: "100+ Completed Projects", desc: "Successfully delivered projects across various sectors" },
    { title: "Turnkey Environmental Systems", desc: "Complete environmental solutions from design to implementation" },
    { title: "Certified Quality & Safety Standards", desc: "ISO certified processes and safety protocols" }
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

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src="/src/assets/Construction-amico.svg" alt="ELGC Team" className="w-full h-auto max-w-md mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose ELGC?</h2>
            <motion.div 
              className="space-y-3 md:space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {strengths.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={fadeInLeft}
                >
                  <motion.div 
                    className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-xs md:text-sm">✓</span>
                  </motion.div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 