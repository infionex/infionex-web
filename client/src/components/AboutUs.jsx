import React from 'react'
import img from '../assets/images/about1.png'
import { motion } from "framer-motion";
export default function AboutUs() {

    const fadeUp = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 2.8, ease: "easeOut" }
        }
    }

    return (
        <section id='about' className=' h-screen max-w-425 px-10 md:px-0 bg-secondary-color content-center'>
            <div className='flex max-w-425 mx-auto md:py-32 px-8 md:px-24'>
                <div className='content-center flex flex-col gap-10 md:w-[50%] bg-green600 justify-center'>
                    <div className='flex flex-col gap-6'>
                        <motion.p
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className='text-third-color font-head font-bold tracking-[0.2em] uppercase text-sm'>01/ABOUT US</motion.p>
                        <motion.h1
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='font-head text-4xl md:text-6xl font-black tracking-tighter uppercase text-white'> WE BREAK <span className=' text-transparent [-webkit-text-stroke:1px_#ff8e7d]'>LIMITS</span> TO BUILD LEGENDS</motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='font-title text-label-color flex flex-col gap-10'>
                        <p>Infionex is not a service provider. We are a vanguard for the digital age. Our mission is to strip away the noise of generic templates and safe aesthetics to reveal the raw power of your brand's core identity.</p>
                        <p>Every project is treated as an architectural endeavor. We don't just "design websites"—we construct digital monoliths that command attention, provoke emotion, and drive undeniable dominance in the market.</p>
                    </motion.div>
                </div>
                <div className="w-full hidden md:w-1/2 md:flex justify-center items-center px-6 md:px-10">
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                        className="relative">
                        <div className="absolute inset-0 bg-secondary-color border-20 border-label-color/30" />
                        <img src={img} alt="about image" className=" relative w-full max-w-md translate-x-4 translate-y-4 md:translate-x-10 md:translate-y-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
