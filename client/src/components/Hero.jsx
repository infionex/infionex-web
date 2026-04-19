import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

export default function Hero() {

    const [start, setStart] = useState(false);

    const scrollDown = () => {
        const section = document.getElementById("about")
        if (!section) return

        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        })
    }

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 50, },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setStart(true);
        }, 4000); // small delay ensures mount is ready

        return () => clearTimeout(timer);
    }, []);


    return (
        <section
            id='home'
            className='relative bg-fixed h-screen px-10 m:px-24 content-center text-white bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(/src/assets/images/hero-bg.jpg)] bg-center bg-cover'
        >

            {/* CONTENT */}
            <motion.div
                variants={container}
                initial="hidden"
                animate={start && "show"}
                className='text-center flex flex-col items-center gap-6'
            >

                {/* TITLE */}
                <motion.h1
                    variants={fadeUp}
                    className='font-head md:leading-21 text-5xl sm:text-7xl md:text-[100px] font-bold'
                >
                    ENGINEERING<br />
                    <span className='text-transparent [-webkit-text-stroke:1px_#ABABAB]'>
                        DIGITAL
                    </span><br />
                    DOMINANCE
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    variants={fadeUp}
                    className='max-w-xl text-xs sm:text-sm md:text-lg text-label-color font-extralight'
                >
                    We deliver scalable software solutions and data-driven marketing strategies, empowering businesses to accelerate growth.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    variants={fadeUp}
                    className='flex flex-col md:flex-row gap-3 py-3 font-head font-bold'
                >
                    <button className='bg-linear-to-r from-third-color to-primary-color text-black px-8 py-3 uppercase'>
                        Start Your Growth
                    </button>
                    <button className='border border-label-color/40 px-8 py-3 uppercase'>
                        Our Works
                    </button>
                </motion.div>

            </motion.div>

            {/* SCROLL DOWN */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                onClick={scrollDown}
                className='absolute bottom-5 md:right-5 flex items-center gap-2 text-label-color cursor-pointer'
            >
                <span className='animate-bounce'>scroll down</span>
                <ChevronDown className='h-5 animate-bounce' />
            </motion.div>

        </section>
    )
}