

import React from 'react'
import { TvMinimal, TrendingUp, LayoutGrid } from 'lucide-react'
import service1 from '../assets/images/service1.png'
import service2 from '../assets/images/service2.png'
import service3 from '../assets/images/service3.png'

export default function ServicesSection() {

    const services = [
        {
            id: 1,
            image: service1,
            icon: TvMinimal,
            title: "WEB DEVELOPMENT",
            description: "Building high-performance websites that are fast, scalable, and built to convert. We focus on clean architecture and seamless user experience.",
            features: ["CUSTOM WEB SOLUTIONS", "PERFORMANCE OPTIMIZATION", "SCALABLE ARCHITECTURE"]
        },
        {
            id: 2,
            image: service2,
            icon:  LayoutGrid,
            title: "BRANDING & DESIGN",
            description: " Crafting distinctive brand identities that communicate clearly and leave a lasting impression. Built with strategy, consistency, and purpose..",
            features: ["VISUAL IDENTITY SYSTEMS", "BRAND STRATEGY", "CREATIVE DIRECTION"]
        },
        {
            id: 3,
            image: service3,
            icon: TrendingUp,
            title: "DIGITAL MARKETING",
            description: " Helping brands grow online with targeted campaigns and performance-focused marketing.",
            features: ["SEO & PERFORMANCE MARKETING", "SOCIAL MEDIA STRATEGY", "CONTENT MARKETING"]
        }
    ]
    return (
        <section className="font-head bg-[#131313]" id="services">
            <div className="max-w-425 mx-auto py-22 md:py-32 px-8 md:px-24   ">
                <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block" >02 / SERVICES</span>
                <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 md:mb-24 text-white" >SYSTEMS OF INFLUENCE</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-[#484848]/10">
                    {services?.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="relative group overflow-hidden bg-[#191919] ">
                                <div className="absolute inset-0 z-0">
                                    <img className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500 grayscale" src={service.image} />
                                </div>
                                <div className="p-8 relative z-10 hover:bg-[#1f1f1f]/50 transition-colors h-full">
                                    <Icon className="w-10 h-10 text-[#ff8e7d] mb-5" />

                                    <h3 className="font-headline text-2xl font-bold uppercase mb-5 text-white">{service.title}</h3>
                                    <p className="font-body  text-[#ababab] leading-relaxed mb-5">
                                        {service.description}

                                    </p>
                                    <ul className="space-y-4 font-headline text-xs font-bold tracking-widest text-[#ababab] group-hover:text-white transition-colors">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff8e7d]"></div> {service.features[0]}</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff8e7d]"></div> {service.features[1]}</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#ff8e7d]"></div> {service.features[2]}</li>
                                    </ul>
                                </div>
                            </div>

                        )
                    })}
                </div>

            </div>
        </section>
    )
}
