import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './page/Home'
import Footer from './components/Footer'
import Loading from './components/Loading'

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />

      {loading && (<Loading onFinish={() => setLoading(false)} />)}

    </div>
  )
}