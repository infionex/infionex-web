import React from 'react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <section className="font-head bg-[#0e0e0e]  " id='contact' >
            <div className='max-w-425 mx-auto py-22 px-8 md:px-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2  text-white'>
                <div>
                    <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">05 / COMMENCE</span>
                    <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-24 text-white" >LET'S BUILD<br />SOMETHING BOLD</h1>
                    {/* <div className='flex'>
                        <p><IoLocationSharp size={24}/></p> 
                        <p>123 Main Street, City, State 12345</p>
                    </div> */}

                    <div className='flex items-start '>
                        <span><IoLocationSharp  size={18} lg:size={24}Name color='red' /></span>
                        <div className='mx-3 text-md lg:text-lg'>
                            <h4 className='text-sm lg:text-lg'>COMMAND CENTERS</h4>
                            <p className='text-sm lg:text-lg'>123 Main Street, City, State 12345</p>
                        </div>
                    </div>
                    <div className='flex items-start my-5 '>
                        <span><MdEmail size={18} lg:size={24} color='red' /></span>
                        <div className='mx-3'>
                            <h4 className='text-sm lg:text-lg'>DIRECT TRANSMISSION</h4>
                            <p className='text-sm lg:text-lg'>infionex@gmail.com</p>
                        </div>
                    </div>
                </div>
                 
                <form className="space-y-12 bg-white/10 my-6 lg:mx-7 lg:m-5">
                    <div className="relative m-5 ">
                        <input className="peer w-full bg-transparent border-0 border-b   pt-6 pb-2 font-body text-lg outline-none transition-all" id="name" placeholder=" " type="text" />
                        <label className="absolute left-0 top-6 text-on-surface-variant uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-2 peer-focus:text-primary" for="name">IDENTIFIER / NAME</label>
                    </div>
                    <div className="relative m-5">
                        <input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary pt-6 pb-2 font-body text-lg outline-none transition-all" id="email" placeholder=" " type="email" />
                        <label className="absolute left-0 top-6 text-on-surface-variant uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-2 peer-focus:text-primary " for="email">TRANSMISSION / EMAIL</label>
                    </div>
                    <div className="relative m-5">
                        <textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary pt-6 pb-2 font-body text-lg outline-none transition-all resize-none" id="message" placeholder=" " rows="4"></textarea>
                        <label className="absolute left-0 top-6 text-on-surface-variant uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-2 peer-focus:text-primary " for="message">MISSION DETAILS</label>
                    </div>
                    <div className='m-5 '>
                        <button className="w-full bg-gradient-to-r from-[#f87171] to-[#ff0000] py-1 lg:py-5 border  text-black  font-bold text-lg lg:text-xl uppercase tracking-widest text-on-primary-fixed transition-transform active:scale-95" type="submit">
                        INITIATE PROTOCOL
                    </button>
                    </div>
                </form>
            </div>
            </div>
        </section>      
    )
}

export default ContactSection

