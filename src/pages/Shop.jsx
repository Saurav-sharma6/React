import React from 'react'
import Hero from '../Component/hero/hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offers/offer'
import Newcollections from '../Component/NewCollections/newcollections'

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollections/>
    </div>
  )
}

export default shop
