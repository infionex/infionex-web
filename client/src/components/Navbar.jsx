import React, { useState, useEffect, useRef } from 'react'
// import logo from '../assets/images/infionex-logo.png'
import logo from '../assets/images/logo.png'
import { Menu, X } from 'lucide-react';
import AboutUs from './AboutUs';

export default function Navbar() {

  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState("home")

  const navItems = ["home", "about",  "services", "work","contact"]

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

  // detect active section on scroll
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

  return (
    <div>

      {/* MOBILE MENU */}
      <div className={`fixed w-3/4 flex flex-row-reverse justify-between gap-10 px-10 py-10 h-full bg-secondary-color z-50 md:hidden transition-all duration-500 ${menu ? 'translate-x-0' : '-translate-x-full'}`}>

        <X onClick={() => setMenu(false)} className='text-white h-10 w-10' />

        <div className='text-white flex flex-col pt-10 gap-10 text-2xl font-head'>
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-left py-1 transition-all duration-300 
              ${active === item 
                ? "text-third-color border-b border-primary-color" 
                : "hover:text-third-color hover:border-b hover:border-primary-color"}`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* NAVBAR */}
      <div className='bg-secondary-color/80 fixed top-0 left-0 z-40 text-white w-full px-10 py-3 flex justify-center backdrop-blur-md'>

        <div className='max-w-425 w-full flex justify-between items-center'>

          {/* LOGO */}
          <div>
            <img className='h-17 object-contain ' src={logo} alt="logo" />
          </div>

          {/* DESKTOP NAV */}
          <div className='hidden md:flex gap-10 text-sm font-head relative'>

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
          <div className='flex items-center gap-3 font-head'>
            <button onClick={()=>scrollToSection("contact")} className='bg-primary-color cursor-pointer  px-3 py-1.5 text-black font-bold rounded-md'>
              LET'S TALK
            </button>

            <button onClick={() => setMenu(true)} className='md:hidden'>
              <Menu className='h-10 w-10' />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}