import React, { useContext, useState } from "react";
import "./CartItems.css";
import remove_icon from "../Assests/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart, decreaseCartQuantity } =
    useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handlePromoSubmit = () => {
    const total = getTotalCartAmount();
    if (promoCode.toLowerCase() === "react" && !discountApplied) {
      const discount = total * 0.10;
      setDiscountAmount(discount);
      setDiscountApplied(true);
      alert("Promo code applied! 10% discount");
    } else if (discountApplied) {
      alert("Promo code already applied.");
    } else {
      alert("Invalid promo code.");
    }
  };

  const rawTotal = getTotalCartAmount();
const finalAmount = Math.max(0, rawTotal - discountAmount); // 💡 never below 0


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
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            {discountApplied && (
              <div className="cartitems-total-item">
                <p>Discount (10%)</p>
                <p>-${discountAmount.toFixed(2)}</p>
              </div>
            )}
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${finalAmount.toFixed(2)}</h3>
            </div>
            <button
  className="proceed"
  disabled={finalAmount <= 0}
  style={{
    backgroundColor: finalAmount <= 0 ? '#ccc' : '#4CAF50',
    cursor: finalAmount <= 0 ? 'not-allowed' : 'pointer'
  }}
>
  <Link to="/checkout" style={{ pointerEvents: finalAmount <= 0 ? 'none' : 'auto', color: 'white', textDecoration: 'none' }}>
    Proceed to checkout
  </Link>
</button>

          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, enter it here</p>
          <div>
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromoSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
