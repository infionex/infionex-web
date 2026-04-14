import React from 'react'
<<<<<<< HEAD:client/src/components/Hero.jsx
import bg from '../assets/hero-bg.jpg'

export default function Hero() {
    return (
        <div className='h-screen px-20 content-center text-white  bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(\src\assets\hero-bg.jpg)] bg-center bg-cover'>
               <div className='max-w-425 mx-auto py-22 px-8 md:px-24 '>
            <div className='md:w-full text-center md:text-left md:items-center flex justify-center flex-col  gap-7 mt-20 md:mt-10'>
                <div>
                    <h1 className='font-head text-center text-5xl sm:text-7xl md:text-8xl font-bold transition-all duration-300 ease-in-out'>ENGINEERING<br/> DIGITAL<br/> DOMINANCE</h1>
=======
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <div className='relative h-screen px-10 m:px-24 content-center text-white  bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(\src\assets\images\hero-bg.jpg)] bg-center bg-cover'>
            <div className='   text-center  flex flex-col items-center gap-6 mt-15 md:mt-20'>
                <div>
                    <h1 className='font-head md:leading-21 text-5xl sm:text-7xl md:text-[100px] tracking-wi font-bold transition-all duration-300 ease-in-out'>ENGINEERING<br /><span className='text-transparent [-webkit-text-stroke:1px_#ABABAB]'>DIGITAL</span><br /> DOMINANCE</h1>
>>>>>>> 1300cf8edc478d1c34e883751e05e163be9b4b31:client/src/components/home/Hero.jsx
                </div>
                <div className='max-w-xl text-center'>
                    <p className='text-xs sm:text-sm md:text-lg text-label-color font-extralight font-title'>We deliver scalable software solutions and data-driven marketing strategies, empowering businesses to accelerate growth, enhance visibility, and achieve consistent, measurable results.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-3 py-3 font-head font-bold'>
                    <button className='cursor-pointer bg-linear-to-r from-third-color to-primary-color text-black px-8 py-3  uppercase'>Start Your Growth</button>
                    <button className='cursor-pointer border border-label-color/40 px-8 py-3 uppercase'>Our Works</button>
                </div>
            </div>
<<<<<<< HEAD:client/src/components/Hero.jsx
               </div>
=======
            <div className='absolute font-head animate-bounce [animation-delay:100ms] text-label-color cursor-pointer bottom-1 md:right-5 flex items-center'>
                <button className='cursor-pointer'>scroll down</button>
                <ChevronDown className='h-5'/>

            </div>
>>>>>>> 1300cf8edc478d1c34e883751e05e163be9b4b31:client/src/components/home/Hero.jsx
        </div>
    )
}
