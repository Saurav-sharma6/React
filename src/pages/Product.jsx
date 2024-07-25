import React, { useContext } from 'react'
import ShopContext from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Component/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      
    </div> 
  )
}

export default Product
