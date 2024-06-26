import React, { useState } from 'react';

function Checkout({ cart }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the order and redirect to a confirmation page
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="card-expiry">Expiry Date:</label>
          <input type="text" id="card-expiry" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="card-cvv">CVV:</label>
          <input type="text" id="card-cvv" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} required />
        </div>
        <div className="checkout-total">
          <p>Total: ${total.toFixed(2)}</p>
          <button type="submit" className="place-order-button">Place Order</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;