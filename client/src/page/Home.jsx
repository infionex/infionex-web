import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import AboutUs from '../components/AboutUs'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <ServicesSection/>
        <WorkSection/>
        <ProcessSection/>
        <ContactSection/>
    </div>
  )
}
