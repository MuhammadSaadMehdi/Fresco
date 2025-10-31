import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'

const Frontend = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Frontend
