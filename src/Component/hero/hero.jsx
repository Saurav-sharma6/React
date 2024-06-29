import React from 'react'
import './hero.css'
import heroHandIcon from '../Assests/hand_icon.png'
import arrowIcon from '../Assests/arrow.png'
import heroImage from '../Assests/hero_image.png'

const hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={heroHandIcon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                </div>
            <div className="hero-latest-btn">
                <p>Latest Collection</p>
                    <div>
                        <img src={arrowIcon} alt="" />
                    </div>
            </div>

            </div>
            <div className="hero-right">
                <img src={heroImage} alt="" />

            </div>
        </div>
      
    </div>
  )
}

export default hero
