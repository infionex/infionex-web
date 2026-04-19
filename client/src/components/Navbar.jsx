import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import logo from '../assets/images/logo.png'
import { Menu, X } from 'lucide-react';

export default function Navbar() {

  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState("home")

  const navItems = ["home", "about", "services", "work", "contact"]

  const navRefs = useRef([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  // ✅ scroll with offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    const offset = 70

    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth"
    })

    setMenu(false)
  }

  // ✅ detect active section
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

  // 🔥 REAL FIX → useLayoutEffect (no initial glitch)
  useLayoutEffect(() => {
    const current = navRefs.current.find(el => el?.dataset.id === active)

    if (current && current.parentElement) {
      const parentRect = current.parentElement.getBoundingClientRect()
      const rect = current.getBoundingClientRect()

      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width
      })
    }
  }, [active])

  // ✅ force correct position on first load
  useLayoutEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [])

  // ✅ lock scroll when menu open
  useEffect(() => {
    document.body.style.overflowY = menu ? 'hidden' : ''
  }, [menu])

  // ✅ isolated screen overflow fix (only in this file)
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    const originalHtmlOverflowX = html.style.overflowX
    const originalBodyOverflowX = body.style.overflowX

    html.style.overflowX = 'hidden'
    body.style.overflowX = 'hidden'

    return () => {
      html.style.overflowX = originalHtmlOverflowX
      body.style.overflowX = originalBodyOverflowX
    }
  }, [])

  return (


    <>

      {/* ================= MOBILE MENU ================= */}
      {/* Overlay */}
      <div
        onClick={() => setMenu(false)}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300
          ${menu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-[300px] h-full bg-secondary-color z-50 md:hidden
          flex flex-col px-4 pt-5 pb-6 border-r border-white/10
          transition-transform duration-300 ease-in-out
          ${menu ? 'translate-x-0' : '-translate-x-full'}`}
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <img className="h-12 object-contain" src={logo} alt="logo" />
          <button
            onClick={() => setMenu(false)}
            className="w-10 h-10 rounded-lg bg-white/[0.07] border border-white/10
              flex items-center justify-center text-white/70
              hover:bg-white/[0.14] hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="h-px bg-white/10 mb-4" />

        {/* Nav Items */}
        <nav className="flex flex-col gap-3 flex-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative px-3 py-2.5 rounded-xl font-head font-semibold tracking-widest text-left
                transition-all duration-200
                ${active === item
                  ? 'bg-primary-color/10 text-third-color'
                  : 'text-white/70 hover:bg-primary-color/10 hover:text-third-color'
                }`}
            >
              <span
                className={`absolute left-0 top-[20%] bottom-[20%] w-0.5 bg-primary-color rounded-r
                  transition-transform duration-200
                  ${active === item ? 'scale-y-100' : 'scale-y-0'}`}
              />
              {item.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('contact')}
          className="w-full py-2.5 rounded-xl bg-primary-color text-black
            font-head font-bold tracking-widest
            hover:brightness-110 active:scale-95 transition"
        >
          LET'S TALK
        </button>
      </div>


      {/* ================= NAVBAR ================= */}
      <div className='bg-secondary-color/80 fixed top-0 left-0 z-40 text-white w-full px-5 md:px-10 py-2 flex justify-center backdrop-blur-md'>

        <div className='max-w-425 w-full flex justify-between items-center'>

          {/* Logo */}
          <img className='h-12 md:h-14 object-contain' src={logo} alt="logo" />

          {/* Desktop Nav */}
          <div className='hidden md:flex gap-10 text-md font-head relative overflow-hidden'>

            {navItems.map((item, index) => (
              <button
                key={item}
                data-id={item}
                ref={el => navRefs.current[index] = el}
                onClick={() => scrollToSection(item)}
                className={`py-1 transition duration-300
                ${active === item
                    ? "text-white"
                    : "text-label-color hover:text-third-color"}`}
              >
                {item.toUpperCase()}
              </button>
            ))}

            {/* Underline */}
            <span
              className="absolute bottom-0 h-[2px] bg-primary-color transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width
              }}
            />
          </div>

          {/* Right */}
          <div className='flex items-center gap-3'>

            <button
              onClick={() => scrollToSection("contact")}
              className='hidden md:flex bg-primary-color px-3 py-1.5 text-black font-bold rounded-md'
            >
              LET'S TALK
            </button>

            <button
              onClick={() => setMenu(true)}
              className="w-10 h-10 rounded-lg bg-white/[0.07] border border-white/10
              md:hidden flex items-center justify-center text-white/70
              hover:bg-white/[0.14] hover:text-white transition"
            >
              <Menu size={20} />
            </button>

          </div>

        </div>
      </div>
    </>
  )
}