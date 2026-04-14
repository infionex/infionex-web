import React from 'react'
import Hero from '../components/home/Hero'
import ServicesSection from '../components/ServicesSection'
import WorkSection from '../components/WorkSection'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div>
        <Hero/>
        <ServicesSection/>
        <WorkSection/>
        <ProcessSection/>
        <ContactSection/>
    </div>
  )
}
