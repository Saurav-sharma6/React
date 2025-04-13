import React, { useEffect, useState, forwardRef } from "react";
import "./newcollections.css";
import Item from "../Item/item";

const NewCollections = forwardRef((props, ref) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewCollections = async () => {
      try {
        const response = await fetch("http://localhost:4001/allproducts");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchNewCollections();
  }, []);

  return (
    <div ref={ref} className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {products.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
});

export default NewCollections;
