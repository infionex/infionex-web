import React from 'react'
import Hero from '../components/home/Hero'
import WorkSection from '../components/WorkSection'
import AboutUs from '../components/home/AboutUs'
import ProcessSection from '../components/ProcessSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <WorkSection/>
        <ProcessSection/>
        <ContactSection/>
    </div>
  )
}
