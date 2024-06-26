// import { useState, useEffect } from 'react';
// import './index.css'

// function ProductList() {
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => setProducts(data));
//     }, []);
  
//     return (
//       <div className="product-list-container">
//         <h1 className="product-list-title">Products</h1>
//         <div className="product-list">
//           {products.map(product => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.title} className="product-image" />
//               <div className="product-info">
//                 <h3 className="product-title">{product.title}</h3>
//                 <p className="product-description">{product.description}</p>
//                 <p className="product-price">Price: ${product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default ProductList;

import React, { useState, useEffect } from 'react';
import './index.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;