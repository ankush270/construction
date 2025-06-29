import React from 'react'
import { motion } from 'framer-motion'

const FloatingContactButton = () => {
  return (
    <motion.div 
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button 
        className="bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
      >
        💬
      </motion.button>
    </motion.div>
  )
}

export default FloatingContactButton 