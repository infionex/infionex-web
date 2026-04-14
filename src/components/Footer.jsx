import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

export default function Footer() {
    return (
        <div>
            <footer className="bg-[#0e0e0e] w-full border-t border-[#484848]/20" style={{ background: 'radial-gradient(at top, #191919, #0e0e0e)' }}>
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-15 py-16 gap-8 max-w-[1920px] mx-auto">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold text-white font-['Space_Grotesk'] uppercase tracking-tighter">INFIONEX VANGUARD</span>
                        <p className="font-['Manrope'] text-sm tracking-widest uppercase text-[#484848]">© 2024 INFIONEX VANGUARD. ALL RIGHTS RESERVED.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-8 font-['Manrope'] text-sm tracking-widest uppercase">
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#hero">HERO</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#about">ABOUT</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#work">WORK</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#services">SERVICES</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#process">PROCESS</a>
                        <a className="text-[#484848] hover:text-white transition-colors underline-offset-4 hover:underline" href="#contact">CONTACT</a>
                    </nav>
                    <div className="flex gap-6">
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-[#ff8e7d] transition-colors"><IoLogoInstagram /></span>
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-[#ff8e7d] transition-colors"><IoLogoFacebook /></span>
                        <span className="material-symbols-outlined text-[#484848] cursor-pointer hover:text-[#ff8e7d] transition-colors"><IoLogoTwitter />  </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
