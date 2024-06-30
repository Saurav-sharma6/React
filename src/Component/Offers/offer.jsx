import React from 'react'
import './offer.css'
import exclusive_image from '../Assests/exclusive_image.png'

const offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="" />
        </div>

      
    </div>
  )
}

export default offer
