// import React, { useEffect, useState } from 'react'
// import './ListProduct.css'

// const ListProduct = () => {

//    const [allproducts,setAllProducts] = useState([]);
//    const fetchInfo = async ()=>{
//     await fetch ('http://localhost:4000/allproducts').then((res)=>res.json())
//     .then((data)=>{
//     setAllProducts(data)
//     })
//    }

//    useEffect(()=>{
//     fetchInfo();
//    },[])

//   return (
//     <div className='list-product'>
//       <hr />
//       {allproducts.map((product,map))}
//       <h1>All Products</h1>
//       <div className="listproduct-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Removed</p>

//       </div>
//     </div>
//   )
// }

// export default ListProduct
