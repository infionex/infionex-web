import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import AboutUs from '../components/AboutUs'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'
import WhyChooseUs from '../components/WhyChooseUs'

export default function Home() {
  
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <ServicesSection/>
        {/* <WorkSection/> */}
        <ProcessSection/>
        <WhyChooseUs/>
        <ContactSection/>
    </div>
  )
}
