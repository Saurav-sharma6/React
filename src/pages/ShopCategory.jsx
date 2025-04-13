import React, { useContext, useState } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Component/Assests/dropdown_icon.png";
import Item from "../Component/Item/item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = all_product.filter((item) =>
    item.category === props.category &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop-category">
      {/* Search Bar */}
      <div className="shopcategory-searchbar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {filteredProducts.length}</span> items in this category
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="shopcategory-noresult">No products found.</p>
        )}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
