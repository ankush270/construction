import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Director",
      company: "City Development Corp",
      quote: "ELGC delivered our infrastructure project on time and within budget. Their expertise in environmental systems is unmatched.",
      image: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      company: "Metro Construction Ltd",
      quote: "The quality of work and attention to detail exceeded our expectations. Highly recommended for any major construction project.",
      image: "👨‍💼",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Operations Director",
      company: "GreenTech Solutions",
      quote: "Their environmental systems integration was flawless. ELGC truly understands sustainable construction practices.",
      image: "👩‍🔬",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "CEO",
      company: "Industrial Solutions Inc",
      quote: "Outstanding project management and technical expertise. ELGC consistently delivers exceptional results.",
      image: "👨‍💻",
      rating: 5
    }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      clearInterval(testimonialInterval)
    }
  }, [testimonials.length])

  const floatingAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-6 md:py-8 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20"
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
          className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-15"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-200 rounded-full opacity-10"
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
        <motion.div 
          className="text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Client Testimonials</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with ELGC
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full flex-shrink-0"
              >
                <div className="max-w-2xl lg:max-w-3xl mx-auto">
                  <motion.div 
                    className="bg-white p-4 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Pattern */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 180]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <motion.div 
                        className="text-3xl md:text-4xl mb-2 md:mb-3 text-orange-200"
                        variants={floatingAnimation}
                        animate="animate"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        "
                      </motion.div>

                      {/* Testimonial Content */}
                      <blockquote className="text-sm md:text-base text-gray-700 mb-4 md:mb-5 italic leading-relaxed">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>

                      {/* Rating Stars */}
                      <motion.div 
                        className="flex justify-center mb-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      >
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                          <motion.svg
                            key={index}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>

                      {/* Client Info */}
                      <div className="flex items-center justify-center space-x-2">
                        <motion.div 
                          className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-lg shadow-lg"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 360,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {testimonials[currentTestimonial].image}
                        </motion.div>
                        <div className="text-left">
                          <motion.h4 
                            className="text-sm md:text-base font-semibold text-gray-900"
                            whileHover={{ x: 5 }}
                          >
                            {testimonials[currentTestimonial].name}
                          </motion.h4>
                          <p className="text-gray-600 text-xs">
                            {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-2 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-orange-600 scale-125' : 'bg-gray-300 hover:bg-orange-300'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-2 max-w-md mx-auto">
            <motion.div
              className="h-1 bg-gray-200 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: "linear" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={() => {
                  setTimeout(() => {
                    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
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

export default Testimonials 