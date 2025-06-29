import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import FloatingContactButton from '../components/FloatingContactButton'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Clients />
      <Testimonials />
      <CTA />
      <Footer scrollToSection={scrollToSection} />
      <FloatingContactButton />
    </div>
  )
}

export default Home
