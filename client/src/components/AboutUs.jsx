import React from 'react'
import img from '../assets/images/about1.png'
import { motion } from "framer-motion";

export default function AboutUs() {

    return (
        <section id='about' className='bg-secondary-color'>
            <div className='flex flex-col md:flex-row items-center max-w-425 mx-auto py-20 md:py-32 px-5 md:px-10 lg:px-24 gap-10 md:gap-12 lg:gap-20'>

                <div className='flex flex-col gap-8 md:gap-10 md:w-[60%] justify-center'>
                    <div className='flex flex-col gap-4 md:gap-6'>
                        <motion.p
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className='text-third-color font-head font-bold tracking-[0.2em] uppercase text-xs sm:text-sm'>
                            01 / ABOUT US
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='font-head text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white leading-tight'>
                            WE BREAK <span className='text-transparent [-webkit-text-stroke:1px_#ff8e7d]'>LIMITS</span> TO BUILD LEGENDS
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='font-title text-label-color flex flex-col gap-5 md:gap-8'>
                        <p className='text-sm sm:text-base leading-relaxed'>Infionex is not a service provider. We are a vanguard for the digital age. Our mission is to strip away the noise of generic templates and safe aesthetics to reveal the raw power of your brand's core identity.</p>
                        <p className='text-sm sm:text-base leading-relaxed'>Every project is treated as an architectural endeavor. We don't just "design websites"—we construct digital monoliths that command attention, provoke emotion, and drive undeniable dominance in the market.</p>
                    </motion.div>
                </div>

                <div className="w-full md:w-[40%]  flex justify-center items-center px-4 md:px-0 mt-8 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-secondary-color border-8 border-label-color/30" />
                        <img
                            src={img}
                            alt="about image"
                            className="relative w-full max-w-sm md:max-w-md lg:max-w-xl translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}