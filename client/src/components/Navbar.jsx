import React from 'react'
import logo from '../assets/infionex-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-[#0e0e0e] fixed text-white w-screen flex justify-between px-10 py-3 items-center drop-shadow-2xl drop-shadow-black'>
      <div className=''>
        <img className='h-10' src={logo} alt="" />
      </div>
      <div className='flex gap-10 text-sm font-head'>
        <Link>HOME</Link>
        <Link>ABOUT</Link>
        <Link>WORK</Link>
        <Link>SERVICES</Link>
        <Link>CONTACTS</Link>
      </div>
      <div >
        <button className='bg-[#db0404] px-3 py-2 text-black font-bold'>LET'S TALK</button>
      </div>
    </div>
  )
}
