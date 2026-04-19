import React from 'react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <section id='contact' className="font-head bg-[#131313] " >
            <div className='max-w-425 mx-auto py-10 md:py-20 px-8 md:px-24 '>
                <div className='grid grid-cols-1 lg:grid-cols-2  text-white'>
                    <div>
                        <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">05 / CONTACT</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 text-white" >LET'S BUILD<br />SOMETHING BOLD</h1>

                        <div className='flex items-start '>
                            <span><IoLocationSharp size={24} color='red' /></span>
                            <div className='mx-3'>
                                <h4>COMMAND CENTERS</h4>
                                <p>123 Main Street, City, State 12345</p>
                            </div>
                        </div>
                        <div className='flex items-start my-10 '>
                            <span><MdEmail size={24} color='red' /></span>
                            <div className='mx-3'>
                                <h4>DIRECT TRANSMISSION</h4>
                                <p>infionex.in@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#191919]  p-8 md:p-16 relative">
                        <div className="absolute top-0 right-0 w-2 h-16 bg-[#ff8e7d]"></div>

                        <form className="space-y-6">

                            <div className="relative">
                                <input
                                    className="peer w-full bg-transparent border-0 border-b border-[#484848] focus:ring-0 focus:border-[#ff8e7d] pt-6 pb-2 font-body text-lg outline-none transition-all"
                                    id="name"
                                    placeholder=" "
                                    type="text"
                                />
                                <label
                                    className="absolute left-0 top-6 text-[#ababab] uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-2 peer-focus:text-[#ff8e7d] peer-[:not(:placeholder-shown)]:-top-2"
                                    htmlFor="name"
                                >
                                    IDENTIFIER / NAME
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    className="peer w-full bg-transparent border-0 border-b border-[#484848] focus:ring-0 focus:border-[#ff8e7d] pt-6 pb-2 font-body text-lg outline-none transition-all"
                                    id="email"
                                    placeholder=" "
                                    type="email"
                                />
                                <label
                                    className="absolute left-0 top-6 text-[#ababab] uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-2 peer-focus:text-[#ff8e7d] peer-[:not(:placeholder-shown)]:-top-2"
                                    htmlFor="email"
                                >
                                    TRANSMISSION / EMAIL
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    className="peer w-full bg-transparent border-0 border-b border-[#484848] focus:ring-0 focus:border-[#ff8e7d] pt-6 pb-2 font-body text-lg outline-none transition-all resize-none"
                                    id="message"
                                    placeholder=" "
                                    rows="4"
                                ></textarea>
                                <label
                                    className="absolute left-0 top-6 text-[#ababab] uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-2 peer-focus:text-[#ff8e7d] peer-[:not(:placeholder-shown)]:-top-2"
                                    htmlFor="message"
                                >
                                    MISSION DETAILS
                                </label>
                            </div>

                            <button
                                className="w-full kinetic-gradient bg-linear-to-r from-third-color to-primary-color py-5 font-headline font-bold text-xl uppercase tracking-widest text-[#000000] transition-transform active:scale-95"
                                type="submit"
                            >
                                INITIATE PROTOCOL
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

