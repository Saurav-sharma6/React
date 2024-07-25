import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Component/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Relatedproducts from '../Component/Relatedproducts/Relatedproducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <Relatedproducts/>
      
    </div> 
  )
}

export default Product
