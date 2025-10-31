import React from 'react'
import Navbar from '../../../components/Navbar'
import HeroSection from './HeroSection'
import Welcome from './WelcomeSection'
import Menu from './MenuSection'
import Clients from './ClientsSection'
import Footer from '../../../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Welcome/>
      <Menu/>
      <Clients/>
      <Footer/>
      
    </div>
  )
}

export default Home
