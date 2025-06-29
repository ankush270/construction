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
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      company: "Metro Construction Ltd",
      quote: "The quality of work and attention to detail exceeded our expectations. Highly recommended for any major construction project.",
      image: "👨‍💼"
    },
    {
      name: "Lisa Rodriguez",
      role: "Operations Director",
      company: "GreenTech Solutions",
      quote: "Their environmental systems integration was flawless. ELGC truly understands sustainable construction practices.",
      image: "👩‍🔬"
    }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => {
      clearInterval(testimonialInterval)
    }
  }, [testimonials.length])

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-lg md:text-xl text-gray-600">What our clients say about our work</p>
        </motion.div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex-shrink-0"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div 
                    className="bg-gray-50 p-8 md:p-12 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-4xl md:text-6xl mb-4 md:mb-6"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {testimonials[currentTestimonial].image}
                    </motion.div>
                    <blockquote className="text-lg md:text-2xl text-gray-700 mb-6 md:mb-8 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600 text-sm md:text-base">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-orange-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 