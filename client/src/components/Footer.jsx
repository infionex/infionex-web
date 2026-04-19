import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

import logo from '../assets/images/logo.png'

export default function Footer() {
    return (
        <div>
            <footer className="bg-secondary-color w-full border-t border-[#484848]/20" style={{ background: 'radial-gradient(at top, #191919, #0e0e0e)' }}>
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 sm:px-10 md:px-15 py-10 md:py-16 gap-6 md:gap-8 max-w-480 mx-auto">
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <img className='w-32 sm:w-40 md:w-45' src={logo} alt="Infionex Logo" />
                        <p className="font-['Manrope'] text-xs tracking-widest uppercase text-[#484848] text-center md:text-left">© 2026 INFIONEX. ALL RIGHTS RESERVED.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-['Manrope'] text-xs sm:text-sm tracking-widest uppercase">
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#hero">HERO</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#about">ABOUT</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#work">WORK</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#services">SERVICES</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#process">PROCESS</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#contact">CONTACT</a>
                    </nav>
                    <div className="flex gap-4 sm:gap-6">
                      <a href="https://www.instagram.com/infionex.in?igsh=MWc2ZjR3eTM2dGoycQ==" target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-third-color transition-colors"><IoLogoInstagram className='w-6 h-6 sm:w-7 sm:h-7' /></span>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-third-color transition-colors"><IoLogoFacebook className='w-6 h-6 sm:w-7 sm:h-7' /></span>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-third-color transition-colors">< FaXTwitter className='w-6 h-6 sm:w-7 sm:h-7' /></span>
                      </a>
                      <a href="https://www.linkedin.com/company/infionex" target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-third-color transition-colors">< FaLinkedin className='w-6 h-6 sm:w-7 sm:h-7' /></span>
                      </a>
                      
                    </div>
                </div>
            </footer>
        </div>
    )
}