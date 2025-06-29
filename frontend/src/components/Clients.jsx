import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const clients = [
    {
      name: 'ABC Industries',
      logo: '/client1.png',
      description: 'Leading manufacturer with state-of-the-art environmental systems',
      category: 'Manufacturing',
      testimonial: 'Exceptional quality and professional service throughout the project.'
    },
    {
      name: 'XYZ Corporation',
      logo: '/client2.png',
      description: 'Multinational company with advanced wastewater treatment facilities',
      category: 'Technology',
      testimonial: 'The team delivered beyond our expectations with innovative solutions.'
    },
    {
      name: 'Green Energy Ltd',
      logo: '/client3.png',
      description: 'Renewable energy company with sustainable infrastructure',
      category: 'Energy',
      testimonial: 'Outstanding expertise in sustainable construction practices.'
    },
    {
      name: 'Metro City Council',
      logo: '/client4.png',
      description: 'Municipal water treatment and infrastructure development',
      category: 'Government',
      testimonial: 'Reliable partner for critical infrastructure projects.'
    },
    {
      name: 'Steel Works Inc',
      logo: '/client5.png',
      description: 'Industrial steel manufacturing with complex piping systems',
      category: 'Manufacturing',
      testimonial: 'Professional team that understands industrial requirements.'
    },
    {
      name: 'Tech Solutions Co',
      logo: '/client6.png',
      description: 'Technology campus with integrated environmental systems',
      category: 'Technology',
      testimonial: 'Innovative approach to modern facility construction.'
    }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 2))
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [clients.length])

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

  // Create slides with 2 clients each
  const slides = []
  for (let i = 0; i < clients.length; i += 2) {
    slides.push(clients.slice(i, i + 2))
  }

  return (
    <section id="clients" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We've successfully delivered projects for leading companies across various industries
          </p>
        </motion.div>

        {/* Clients Carousel */}
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
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {slides[currentSlide].map((client, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      variants={fadeInUp}
                      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-6">
                        <motion.div 
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={client.logo} 
                            alt={client.name}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white p-2 rounded-lg shadow-sm"
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{client.name}</h3>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                              {client.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                            {client.description}
                          </p>
                          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 text-sm md:text-base">
                            "{client.testimonial}"
                          </blockquote>
                        </div>
                      </div>
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
              transition={{ duration: 4, ease: "linear" }}
            >
              <motion.div
                className="h-full bg-orange-600"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: "linear" }}
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

        {/* Stats Section */}
        <motion.div 
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              50+
            </motion.div>
            <p className="text-gray-600 font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              200+
            </motion.div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              15+
            </motion.div>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              98%
            </motion.div>
            <p className="text-gray-600 font-medium">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients 