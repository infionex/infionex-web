import React, { useState, useEffect, useRef } from 'react'
// import logo from '../assets/images/infionex-logo.png'
import logo from '../assets/images/logo.png'
import { Menu, X } from 'lucide-react';
import AboutUs from './AboutUs';

export default function Navbar() {

  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState("home")

  const navItems = ["home", "about", "services", "work", "contact"]

  // refs for underline
  const navRefs = useRef([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  // scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth"
    })

    setMenu(false)
  }


  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // move underline
  useEffect(() => {
    const current = navRefs.current.find(el => el?.dataset.id === active)

    if (current) {
      setUnderlineStyle({
        left: current.offsetLeft,
        width: current.offsetWidth
      })
    }
  }, [active])
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
  }, [menu])

  return (
    <div>

      {/* MOBILE MENU */}
      <>


        <div
          onClick={() => setMenu(false)}
          className={`fixed inset-0 bg-black/45 z-40 md:hidden transition-opacity duration-400
          ${menu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        />

        <div className={`fixed top-0 left-0 w-3/4 h-full bg-secondary-color z-50 md:hidden
        flex flex-col px-4 pt-5 pb-6
        border-r border-white/10
        transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        ${menu ? 'translate-x-0' : '-translate-x-[105%]'}`}
        >

          <div className="flex items-center justify-between mb-5">
            <img className="h-12 object-contain" src={logo} alt="logo" />
            <button
              onClick={() => setMenu(false)}
              className="w-10 h-10 rounded-lg bg-white/[0.07] border border-white/10
              flex items-center justify-center text-white/70
              hover:bg-white/[0.14] hover:text-white transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-4" />

          {/* Nav Items */}
          <nav className="flex flex-col gap-3  flex-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => { scrollToSection(item); setMenu(false); }}
                style={{
                  animation: menu
                    ? `slideIn 0.38s ease ${i * 60 + 80}ms forwards`
                    : 'none',
                  opacity: menu ? undefined : 0,
                  transform: menu ? undefined : 'translateX(-20px)',
                }}
                className={`relative flex items-center gap-2.5 px-3 py-2.5
                rounded-xl font-head  font-semibold tracking-widest text-left
                transition-all duration-[250ms]
                ${active === item
                    ? 'bg-primary-color/10 text-third-color'
                    : 'text-white/70 hover:bg-primary-color/10 hover:text-third-color hover:translate-x-0.5'
                  }`}
              >
                {/* Active indicator bar */}
                <span
                  className={`absolute left-0 top-[20%] bottom-[20%] w-0.5
                  bg-primary-color rounded-r transition-transform duration-200 origin-center
                  ${active === item ? 'scale-y-100' : 'scale-y-0'}`}
                />
                {item.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* LET'S TALK button */}
          <div
            className={`transition-all duration-[400ms] delay-500
            ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          >
            <button
              onClick={() => { scrollToSection('contact'); setMenu(false); }}
              className="w-full py-2.5 rounded-xl bg-primary-color text-black
              font-head  font-bold tracking-widest
              hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              LET'S TALK
            </button>
          </div>
        </div>
      </>


      {/* NAVBAR */}
      <div className='bg-secondary-color/80 fixed top-0 left- z-40 text-white w-screen px-10 py-2 flex justify-center drop-shadow-2xl drop-shadow-black/60 backdrop-blur-md'>

        <div className='max-w-425 w-full flex justify-between items-center'>

          {/* LOGO */}
          <div>
            <img className='h-12 md:h-15 object-contain ' src={logo} alt="logo" />
          </div>

          {/* DESKTOP NAV */}
          <div className='hidden md:flex gap-10 text-md font-head relative'>

            {navItems.map((item, index) => (
              <button
                key={item}
                data-id={item}
                ref={el => navRefs.current[index] = el}
                onClick={() => scrollToSection(item)}
                className={`py-1 transition-all cursor-pointer duration-300 
                ${active === item
                    ? "text-white"
                    : "text-label-color hover:text-third-color"}`}
              >
                {item.toUpperCase()}
              </button>
            ))}

            <span
              className="absolute bottom-0 h-[2px] bg-primary-color transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width
              }}
            />

          </div>

          {/* RIGHT SIDE */}
          <div className='flex items-center  gap-3 font-head'>
            <button onClick={() => scrollToSection("contact")} className='hidden md:flex bg-primary-color cursor-pointer  px-3 py-1.5 text-black font-bold rounded-md'>
              LET'S TALK
            </button>

            <button
              onClick={() => setMenu(true)}
              className="w-10 h-10 rounded-lg  bg-white/[0.07] border border-white/10
              md:hidden flex items-center justify-center text-white/70
              hover:bg-white/[0.14] hover:text-white transition-all duration-200"
            >
              <Menu size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}