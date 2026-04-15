import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ onFinish }) {
    const [exit, setExit] = useState(false);
    const [progress, setProgress] = useState(0);

    const text = "INFIONEX";

    useEffect(() => {
        let start = 0;

        const interval = setInterval(() => {
            start += 1;
            setProgress(start);

            if (start >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    setExit(true);

                    setTimeout(() => {
                        onFinish && onFinish();
                    }, 500);

                }, 300);
            }
        }, 32);

        return () => clearInterval(interval);
    }, [onFinish]);

    const exitAnim = {
        opacity: 30,
        scale: 1.2,
        height: -100,
        // filter: "blur(20px)",
        transition: { duration: 0.6 }
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
                        className="absolute w-96 h-96 bg-white/30 rounded-full blur-3xl"
                    />

                    {/* NAME AS PROGRESS REVEAL */}
                    <div className="relative font-head text-4xl md:text-5xl font-bold tracking-[0.5em] text-white/20">

                        {/* BACK TEXT (BASE) */}
                        <span>{text}</span>

                        {/* FRONT TEXT (REVEAL MASK) */}
                        <motion.span
                            className="absolute left-0 top-0 text-label-color overflow-hidden whitespace-nowrap"
                            style={{
                                width: `${progress}%`,
                            }}
                        >
                            {text}
                        </motion.span>

                    </div>

                    {/* LOADING BAR */}
                    <div className="mt-10 w-64 md:w-96 h-0.5 bg-white/10 relative overflow-hidden rounded-full">
                        <motion.div
                            className="h-full bg-linear-to-r from-primary-color to-red-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}