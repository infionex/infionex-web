import React from 'react'
import Hero from '../components/home/Hero'
import ServicesSection from '../components/ServicesSection'
import WorkSection from '../components/WorkSection'
import AboutUs from '../components/home/AboutUs'

export default function Home() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <WorkSection/>
        <ServicesSection/>
    </div>
  )
}
