import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <section className="font-head bg-black max-w-425 mx-auto py-22 px-8 md:px-24" >
            <div className='grid grid-cols-1 lg:grid-cols-2  text-white'>
                <div>
                    <span className="text-[#ff8e7d] font-headline font-bold tracking-[0.2em] uppercase text-sm mb-4 block">05 / COMMENCE</span>
                    <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-24 text-white" >LET'S BUILD<br />SOMETHING BOLD</h1>
                    {/* <div className='flex'>
                        <p><IoLocationSharp size={24}/></p> 
                        <p>123 Main Street, City, State 12345</p>
                    </div> */}

                    <div className='flex items-start '>
                        <span><IoLocationSharp size={24} color='red'/></span>
                        <div className='mx-3'>
                            <h4>COMMAND CENTERS</h4>
                            <p>123 Main Street, City, State 12345</p>
                        </div>
                    </div>
                    <div className='flex items-start my-5 '>
                        <span><MdEmail size={24} color='red'/></span>
                        <div className='mx-3'>
                            <h4>DIRECT TRANSMISSION</h4>
                            <p>infionex@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white/10 w-full lg:w-4/5 h-full text-start p-10 mx-auto '>
                    <div>
                        <input type="text" placeholder='Name' py-2 className='w-full'/>
                        <hr className=''/>
                    </div>
                      <div className='my-20'>
                        <input type="text" placeholder='Name'  className=''/>
                        <hr className=''/>
                    </div>
                      <div>
                        <input type="text" placeholder='Name' />
                        <hr />
                    </div>
                    <button className='bg-[#ff8e7d] text-black font-bold py-3 px-6 mt-10 w-full'>SEND</button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection