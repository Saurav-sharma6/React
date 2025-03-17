// Hero.jsx
import React from 'react'
import './hero.css'
import heroHandIcon from '../Assests/hand_icon.png'
import arrowIcon from '../Assests/arrow.png'
import heroImage from '../Assests/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-title">
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={heroHandIcon} alt="Hand icon" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <p>Latest Collection</p>
          <img src={arrowIcon} alt="Arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero
