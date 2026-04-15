import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ onFinish }) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);

            setTimeout(() => {
                onFinish && onFinish();
            }, 500);

        }, 3700);

        return () => clearTimeout(timer);
    }, [onFinish]);

    const text = "INFIONEX".split("");

    // TEXT ANIMATION
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

   const letter = {
        hidden: { opacity: 0,y:40, filter: "blur(10px)" },
        show: {
            opacity: 100,
           y: [ 0,-20,0 ],   // 🔥 bounce effect
        transition: {
            duration: 1,
            ease: "easeInOut"
        },
            
            filter: "blur(0px)",
            
        }
    };

    const exitAnim = {
        opacity: 0,
        scale: 1.2,
        filter: "blur(20px)",
        transition: { duration: 0.7 }
    };

    return (
        <AnimatePresence mode="wait">
            {!exit && (
                <motion.div
                    className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={exitAnim}
                >

                    {/* GLOW */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                        className="absolute w-96 h-96 bg-primary-color/10 rounded-full blur-3xl"
                    />

                    {/* TEXT */}
                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex text-label-color font-head text-4xl md:text-6xl font-bold tracking-[0.5em]"
                    >
                        {text.map((char, i) => (
                            <motion.span key={i} variants={letter} className="inline-block">
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* LOADING BAR */}
                    <div className="mt-10 w-64 md:w-96 h-[2px] bg-white/10 relative overflow-hidden rounded-full">

                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-color to-red-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.2, ease: "easeInOut" }}
                        />

                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}