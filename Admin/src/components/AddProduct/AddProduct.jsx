import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
  return (
          <>
    <div className='add-product-container'> {/* Single parent div */}
      <div className='add-product'>
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input type="text" name='name' placeholder='Type' />
        </div>
      </div>
      
      <div className='addproduct-price'>
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name='old_price' placeholder='Type' />
        </div>
      </div>

      <div className='addproduct-price'>
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name='new_price' placeholder='Type' />
        </div>
      </div>

    </div>
    </>
  );
}

export default AddProduct;
