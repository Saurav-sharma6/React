import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assests/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart, decreaseCartQuantity } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  className="carticon-product-icon"
                  src={e.image}
                  alt={e.name}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="quantity-control">
                  <button type="button" onClick={() => decreaseCartQuantity(e.id)}>-</button>
                  <span>{cartItems[e.id]}</span>
                  <button type="button" onClick={() => addToCart(e.id)}>+</button>
                </div>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="check">
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button className="proceed">
              <Link to="/checkout">Proceed to checkout</Link>
            </button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, enter it here</p>
          <div>
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;