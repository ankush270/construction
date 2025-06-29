import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: 'Turnkey Environmental Systems',
      description: 'Design and implementation of complete environmental solutions for industries and municipalities.',
      icon: '/services1.svg',
    },
    {
      title: 'Water & Wastewater Treatment',
      description: 'Advanced treatment plants for water purification and wastewater management.',
      icon: '/services2.svg',
    },
    {
      title: 'Industrial Piping & Pumping',
      description: 'Robust piping and pumping systems for industrial applications.',
      icon: '/services3.svg',
    },
    {
      title: 'Civil & Structural Works',
      description: 'Comprehensive civil construction and structural engineering services.',
      icon: '/services4.svg',
    },
    {
      title: 'Electrical & Instrumentation',
      description: 'Complete electrical systems and instrumentation for automation and control.',
      icon: '/services5.svg',
    },
    {
      title: 'Operation & Maintenance',
      description: 'Ongoing operation and maintenance services for all installed systems.',
      icon: '/services6.svg',
    },
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 3))
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [services.length])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Create slides with 3 services each
  const slides = []
  for (let i = 0; i < services.length; i += 3) {
    slides.push(services.slice(i, i + 3))
  }

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and engineering solutions tailored to your project needs
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="w-full flex-shrink-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {slides[currentSlide].map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                      variants={fadeInUp}
                      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className="mb-4 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={service.icon} 
                          alt={service.title}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed text-center">{service.description}</p>
                      <motion.a 
                        href="#" 
                        className="text-orange-600 font-medium hover:text-orange-700 transition-colors text-sm md:text-base inline-flex items-center justify-center w-full"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More →
                      </motion.a>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-md mx-auto">
            <motion.div
              className="h-1 bg-gray-200 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: "linear" }}
            >
              <motion.div
                className="h-full bg-orange-600"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: "linear" }}
                onAnimationComplete={() => {
                  // Reset animation when complete
                  setTimeout(() => {
                    setCurrentSlide((prev) => (prev + 1) % slides.length)
                  }, 100)
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 