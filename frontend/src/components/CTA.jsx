import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <motion.div 
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Have a Project in Mind? Let's Build Together.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
          Get in touch with our team for a free consultation and project assessment
        </p>
        <motion.button 
          className="bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-orange-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Free Consultation
        </motion.button>
      </motion.div>
    </section>
  )
}

export default CTA 