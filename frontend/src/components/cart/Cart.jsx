import React from "react";
import { useUserContext } from "../../context/UserContext";
import './Cart.css';
import Header from "../../Pages/header/Header";
import Footer from "../footer/Footer";

const Cart = () => {
  const { cartItems } = useUserContext();

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image_url} alt={item.title} />
                  </div>
                  <div className="cart-item-details">
                    <p className="item-title">{item.title}</p>
                    <div className="quantity-price">
                      <span>Quantity: {item.quantity}</span>
                      <span>Price: ${item.price}</span>
                      <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            
            {/* Payment Options Section */}
            <div className="payment-options">
              <h3>Payment Options</h3>
              <div className="payment-methods">
                <div className="payment-method">
                  <input type="radio" id="creditCard" name="payment" value="creditCard" />
                  <label htmlFor="creditCard">Credit Card</label>
                </div>
                <div className="payment-method">
                  <input type="radio" id="paypal" name="payment" value="paypal" />
                  <label htmlFor="paypal">PayPal</label>
                </div>
                <div className="payment-method">
                  <input type="radio" id="cod" name="payment" value="cod" />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
