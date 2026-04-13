import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'
export default function WorkSection() {
    const works = [{
        id: 1,
        image: work1,
        title: "Vortex Nexus",
        category: "AI Ecosystem"
    },
    {
        id: 2,
        image: work3,
        title: "cloud infrastructure",
        category: "aether core",
        style: "mt-20"
        
    },
    {
        id: 3,
        image: work2,
        title: "Data visualization",
        category: "odsidian lab"
    }]
    return (

        <section className="font-head bg-black max-w-425 mx-auto py-22 px-8 md:px-24">
            <div className=" mb-20  flex justify-between  ">
                <div>
                    <span className="text-[#ff8e7d] font-headline font-bold  tracking-[0.2em] uppercase text-sm block">
                        02 / PORTFOLIO
                    </span>

                    <h2 className="font-headline mt-5 text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white">
                        SELECTED ARTIFACTS
                    </h2>
                </div>
                <div className='hidden md:block mt-12'>
                    <button className="font-headline text-xs text-white font-bold tracking-widest uppercase border-b-2 border-[#ff8e7d] pb-2 hover:text-[#ff6b5c] transition-colors" >VIEW ALL WORK</button>
                </div>
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 text-white">
                {works?.map((item) => (
                    <div key={item.id} className={`group relative overflow-hidden  bg-[#191919] aspect-3/4 ${item.style || ''}`} >
                        <img
                            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                            src={item.image}
                            alt={item.title}
                        />
                            
                   <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90 "></div>
                    <div className="absolute bottom-10 left-10">
                        <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase mb-2 block" >{item.category}</span>
                        <h3 className="font-headline text-3xl font-black uppercase" >{item.title}</h3>
                    </div>
                    <div className="absolute inset-0 bg-[#ff8e7d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-[#000000]" ><ArrowUpRight size={35} /></span>
                    </div>
                </div>
                ))}
            </div>

        </section >



    )
}
