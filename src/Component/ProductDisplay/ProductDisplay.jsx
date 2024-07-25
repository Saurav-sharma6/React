import React from 'react'
import Product from '../../pages/Product'

const ProductDisplay = (props) => {
  return (
    <div className='productdisplay'>
        <div className="productdisplayleft">
            <div className="productdisplay-img-list">
                <img src={props.img} alt="" />
                <img src={props.img} alt="" />
                <img src={props.img} alt="" />
                <img src={props.img} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={props.img} alt="" />
            </div>

        </div>
        <div className="productdisplayright">
            <h1>{props.name}</h1>
            <div className="productdisplay-right-star">
                <img src="" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default ProductDisplay
