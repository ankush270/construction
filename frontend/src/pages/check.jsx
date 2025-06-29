import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Building Tomorrow's
              <span className="block text-yellow-400">Infrastructure Today</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              ELGC is your trusted partner for comprehensive construction and engineering solutions. 
              From design to completion, we deliver excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/src/assets/Construction-bro.svg" 
              alt="Construction" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 