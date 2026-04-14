import React, { useState } from 'react'
import logo from '../assets/images/infionex-logo.png'
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom'
import { X } from 'lucide-react';

export default function Navbar() {

  const [menu,setMenu]=useState(false)

  return (
    <div>
      {/* responsive menu */}

      <div className={`fixed w-3/4 flex flex-row-reverse justify-between gap-10 px-10 py-10 h-full bg-secondary-color z-90 md:hidden transition-all duration-600 ${menu?'translate-x-0':'-translate-x-full'}`}>

        <X onClick={()=>setMenu(!menu)} className='text-white h-10 w-10'/>
        <div className=' text-white flex flex-col pt-10 gap-10 text-2xl font-head'>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >HOME</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >ABOUT</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >WORK</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >SERVICES</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >CONTACTS</Link>
        </div>

      </div>
      <div className='bg-secondary-color/80 z-30 fixed text-white w-screen flex justify-between px-10 py-3 items-center drop-shadow-lg drop-shadow-black'>

        {/* navbar */}

        <div className=' flex'>
          <img className='h-10' src={logo} alt="" />
          {/* <h1 className='font-head font-bold pt-1.5 text-3xl uppercase'>Infionex</h1> */}
        </div>
        <div className='hidden md:flex gap-10 text-sm font-head'>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >HOME</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >ABOUT</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >WORK</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >SERVICES</Link>
          <Link className='hover:text-third-color hover:border-b hover:border-primary-color transition-all duration-300 ease-[] py-1 ' >CONTACTS</Link>
        </div>
        <div className='font-head flex items-center gap-3'>
          <button className='bg-primary-color px-3 py-2 text-black font-bold'>LET'S TALK</button>
          <button onClick={()=>setMenu(!menu)} className='md:hidden'><Menu className='h-10 w-10 ' /></button>
        </div>
      </div>
    </div>
  )
}
