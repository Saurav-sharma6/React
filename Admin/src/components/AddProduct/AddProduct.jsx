import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
          const [image,setimage] = useState(false);
          const [productdetails,setproductdetails] = useState({
                    name :"",
                    image:"",
                    category:"Women",
                    new_price:"",
                    old_price:""                    

       
          })
          const imageHandler =(e) =>{
                    setimage(e.target.files[0]);
          }
          const changeHandler =(e)=>{
                    setproductdetails({...productdetails,[e.target.name]:e.target.value})
          }
const Add_Product = async () => {
    try {
        console.log(productdetails);

        // Ensure productdetails and image are defined before proceeding
//         if (!productdetails || !image) {
//             console.error("Missing product details or image");
//             return;
//         }

        let responseData;
        let product = productdetails ; // Copy object to avoid direct mutation
        let formData = new FormData();

        formData.append('product', image); // Ensure API expects 'image' as the key

        const response = await fetch('http://localhost:4001/images', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        responseData = await response.json(); // Convert response to JSON

        if (response.ok && responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
        } else {
            console.error("Upload failed:", responseData);
        }
    } catch (error) {
        console.error("Error uploading product: " + error.message);
    }
};

  return (
          <>
    <div className='add-product-container'> {/* Single parent div */}
      <div className='add-product'>
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input value={productdetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type' />
        </div>
      </div>
      
      <div className='addproduct-price'>
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productdetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type' />
        </div>
 
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productdetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type' />
        </div>
      </div>

      <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select value={productdetails.category} onChange={changeHandler} name="category" id="" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Kid">Kid</option>

          </select>
      </div>

      <div className="addproduct-itemfield">
          <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
          </label>
          <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={Add_Product} className='addproduct-button'>Add</button>

    </div>
    
    </>
  );
}

export default AddProduct;
