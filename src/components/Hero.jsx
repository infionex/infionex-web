import React from 'react'
import bg from '../assets/images/hero-bg.jpg'

export default function Hero() {
    return (
        <div className='h-screen px-20 content-center text-white  bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(\src\assets\images\hero-bg.jpg)] bg-center bg-cover'>
               <div className='max-w-425 mx-auto py-22 px-8 md:px-24 '>
            <div className='md:w-full text-center md:text-left md:items-center flex justify-center flex-col  gap-7 mt-20 md:mt-10'>
                <div>
                    <h1 className='font-head text-center text-5xl sm:text-7xl md:text-8xl font-bold transition-all duration-300 ease-in-out'>ENGINEERING<br/> DIGITAL<br/> DOMINANCE</h1>
                </div>
                <div className='max-w-xl text-center'>
                    <p className='text-xs sm:text-sm md:text-lg text-label-color font-extralight font-title'>We deliver scalable software solutions and data-driven marketing strategies, empowering businesses to accelerate growth, enhance visibility, and achieve consistent, measurable results.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-3 py-3 font-head font-bold'>
                    <button className='cursor-pointer bg-linear-to-r from-third-color to-primary-color text-black px-8 py-3  uppercase'>Start Your Growth</button>
                    <button className='cursor-pointer border border-label-color/40 px-8 py-3 uppercase'>Our Works</button>
                </div>
            </div>
               </div>
        </div>
    )
}
