import React, { useEffect, useState } from 'react';
import './ListProduct.css';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4001/allproducts');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='list-product'>
      <hr />
      <h1>All Products</h1>

      <div className="listproduct-format-main listproduct-header">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      {allproducts.map((product, index) => (
        <div className="listproduct-format-main" key={index}>
          <img src={product.image} alt="product" width="50" height="50" />
          <p>{product.name}</p>
          <p>${product.old_price}</p>
          <p>${product.new_price}</p>
          <p>{product.category}</p>
          <button className="remove-btn">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
