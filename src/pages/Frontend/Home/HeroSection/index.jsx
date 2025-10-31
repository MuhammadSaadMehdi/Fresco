import React from 'react'
import './herosection.css'
import heroBg from '../../../../assets/HeroImage.jpg'
import fork from '../../../../assets/Fork.png'
import knife from '../../../../assets/Knife.png'

const HeroSection = () => {
  return (
    <div>
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
      
        <img src={fork} alt="Fork" className="fork-img" />

        
        <div className="hero-content">
          <h1>Fresco.</h1>
          <h3>Italian Specialities</h3>
          <p>Good Food | Good Wine</p>
        </div>

        
        <img src={knife} alt="Knife" className="knife-img" />
      </section>
    </div>
  )
}

export default HeroSection
