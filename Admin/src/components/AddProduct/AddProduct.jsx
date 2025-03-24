import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    image: "",
    category: "women", // Changed to lowercase for consistency
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const Add_Product = async () => {
    setIsLoading(true);
    
    try {
      // Basic validation
      if (!productDetails.id || isNaN(productDetails.id)) {
        alert("Please enter a valid numeric ID");
        return;
      }
      if (!productDetails.name.trim()) {
        alert("Product name is required");
        return;
      }
      if (!image) {
        alert("Please upload an image");
        return;
      }

      // 1. First upload the image
      const formData = new FormData();
      formData.append('product', image);

      const uploadResponse = await fetch('http://localhost:4001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Image upload failed');
      }

      const uploadData = await uploadResponse.json();

      // 2. Then create the product with all details including ID
      const productResponse = await fetch('http://localhost:4001/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Number(productDetails.id),
          name: productDetails.name,
          image: uploadData.image_url,
          category: productDetails.category,
          new_price: productDetails.new_price,
          old_price: productDetails.old_price
        }),
      });

      const productData = await productResponse.json();

      if (productData.success) {
        alert("Product Added Successfully!");
        // Reset form
        setImage(null);
        setProductDetails({
          id: "",
          name: "",
          image: "",
          category: "women",
          new_price: "",
          old_price: ""
        });
      } else {
        throw new Error(productData.message || 'Failed to add product');
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='add-product-container'>
      <div className='add-product'>
        <div className="addproduct-itemfield">
          <p>ID</p>
          <input 
            value={productDetails.id} 
            onChange={changeHandler} 
            type="number" 
            name='id' 
            placeholder='Enter product ID' 
            required
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input 
            value={productDetails.name} 
            onChange={changeHandler} 
            type="text" 
            name='name' 
            placeholder='Enter product name' 
            required
          />
        </div>
      
        <div className='addproduct-price'>
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input 
              value={productDetails.old_price} 
              onChange={changeHandler} 
              type="number" 
              name='old_price' 
              placeholder='Enter price' 
              min="0"
              step="0.01"
              required
            />
          </div>
    
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input 
              value={productDetails.new_price} 
              onChange={changeHandler} 
              type="number" 
              name='new_price' 
              placeholder='Enter offer price' 
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select 
            value={productDetails.category} 
            onChange={changeHandler} 
            name="category" 
            className='add-product-selector'
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img 
              src={image ? URL.createObjectURL(image) : upload_area} 
              className='addproduct-thumbnail-img' 
              alt="Product preview" 
            />
          </label>
          <input 
            onChange={imageHandler} 
            type="file" 
            name='image' 
            id='file-input' 
            accept="image/*"
            hidden 
          />
        </div>

        <button 
          onClick={Add_Product} 
          className='addproduct-button'
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Product'}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;