import React from 'react'
<<<<<<< HEAD
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
=======
import Hero from '../components/home/Hero'
>>>>>>> 1300cf8edc478d1c34e883751e05e163be9b4b31
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
