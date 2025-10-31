import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from '../pages/Frontend'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Frontend />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes
