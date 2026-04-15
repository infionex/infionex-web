import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'

export default function WorkSection() {
    const works = [
        {
            id: 1,
            image: work1,
            title: "Vortex Nexus",
            category: "AI Ecosystem"
        },
        {
            id: 2,
            image: work3,
            title: "Cloud Infrastructure",
            category: "Aether Core",
            style: "lg:mt-20"
        },
        {
            id: 3,
            image: work2,
            title: "Data Visualization",
            category: "Obsidian Lab"
        }
    ]

    return (
        <section id='work' className="font-head bg-[#0e0e0e]">
            <div className='max-w-7xl mx-auto py-16 md:py-24 px-8 sm:px-8 md:px-12 lg:px-24'>

                <div className="mb-12 md:mb-20 flex justify-between items-start">
                    <div>
                        <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block">
                            02 / PORTFOLIO
                        </span>
                        <h2 className="font-headline mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-white leading-tight">
                            SELECTED ARTIFACTS
                        </h2>
                    </div>
                    <div className='hidden md:block mt-10 md:mt-12 shrink-0 ml-6'>
                        <button className="font-headline text-xs text-white font-bold tracking-widest uppercase border-b-2 border-[#ff8e7d] pb-2 hover:text-[#ff6b5c] transition-colors">
                            VIEW ALL WORK
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 text-white">
                    {works?.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden bg-[#191919] aspect-[3/4] ${item.style || ''}`}
                        >
                            <img
                                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-7">
                                <span className="text-[#ff8e7d] font-headline text-xs sm:text-sm font-bold tracking-widest uppercase mb-1 md:mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="font-headline text-xl sm:text-2xl md:text-2xl font-black uppercase leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="absolute inset-0 bg-[#ff8e7d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ArrowUpRight size={35} className="text-black" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}