// NewCollections.jsx
import React from "react";
import "./newcollections.css";
import NewCollectionsData from "../Assests/new_collections";
import Item from "../Item/item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {NewCollectionsData.map((item, i) => (
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
};

export default NewCollections;
