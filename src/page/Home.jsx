import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import WorkSection from '../components/WorkSection'
import AboutUs from '../components/AboutUs'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <WorkSection/>
        <ServicesSection/>
        <ProcessSection/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}
