import React, { useRef } from 'react';
import Hero from '../Component/hero/hero';
import Popular from '../Component/Popular/Popular';
import Offer from '../Component/Offers/offer';
import Newcollections from '../Component/NewCollections/newcollections';
import NewsLetter from '../Component/NewsLetter/NewsLetter';
import ContactUs from '../Component/Contactus/ContactUs';

const Shop = () => {
  const collectionRef = useRef(null);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero scrollToCollection={scrollToCollection} />
      <Popular />
      <Offer />
      <Newcollections ref={collectionRef} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
