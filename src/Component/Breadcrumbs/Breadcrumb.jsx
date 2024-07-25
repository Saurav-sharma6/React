import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='Breadcrumb '>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category}
      <img src={arrow_icon} alt="" />{product.Name}
    </div>
  )
}

export default Breadcrumb
