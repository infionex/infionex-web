

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
            title: "DIGITAL MARKETING",
            description: "Weaponizing data to target high-intent audiences with surgical precision. We don't just generate traffic; we orchestrate conversions.",
            features: ["PERFORMANCE AUDITS", "ALGORITHMIC GROWTH", "PRECISION RETARGETING"]
        },
        {
            id: 2,
            image: service2,
            icon: TrendingUp,
            title: "BRANDING",
            description: "  Forging visceral identities that exist beyond trends. We create visual languages that resonate at a frequency of luxury and power.",
            features: ["VISUAL IDENTITY SYSTEMS", "EDITORIAL DESIGN", "CORE BRAND MANIFESTO"]
        },
        {
            id: 3,
            image: service3,
            icon: LayoutGrid,
            title: "UI/UX DESIGN",
            description: "  Architecting frictionless interfaces that feel inevitable. High-fidelity prototypes that bridge the gap between human and machine.",
            features: ["HAPTIC INTERFACES", "MOTION SYSTEMS", "USER PSYCHOLOGY"]
        }
    ]
    return (
        <section className="font-head bg-[#131313]" id="services">
            <div className="max-w-425 mx-auto py-22 md:py-32 px-8 md:px-24   ">
                <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block" >03 / SERVICES</span>
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
