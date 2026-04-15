import React, { useEffect, useState } from "react";

export default function Loading({ onFinish }) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);

            setTimeout(() => {
                onFinish && onFinish();
            }, 700);

        }, 2200);

        return () => clearTimeout(timer);
    }, [onFinish]);

    const text = "INFIONEX".split("");

    return (
        <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden transition-all duration-1000 ${exit ? "opacity-0 scale-110 blur-xl" : "opacity-100"}`}>
            <div className="absolute w-100 h-100 bg-primary-color/5 rounded-full blur-3xl animate-pulse" />

            <h1 className="flex text-label-color/90 font-head text-4xl md:text-6xl font-bold tracking-[0.5em]">
                {text.map((char, i) => (
                    <span key={i} className="opacity-0 animate-[fadeUp_0.8s_forwards]" style={{ animationDelay: `${i * 0.12}s`, transform: exit ? "scale(1.2)" : "scale(1)" }}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>

        </div>
    );
}