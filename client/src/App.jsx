import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}
