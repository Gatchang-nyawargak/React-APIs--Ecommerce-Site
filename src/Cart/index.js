import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Cart({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-items">
        {cart.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-title">{product.title}</h3>
              <p className="cart-item-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;