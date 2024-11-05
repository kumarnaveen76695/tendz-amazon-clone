import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CartContext from '../../context/cartContext';
import products from '../../data/Products';
import './index.css'; // Create a separate CSS file for styling

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  const handleBuyNow = (product) => {
    addToCart(product); // Optional: Add to cart before navigating
    navigate('/payment'); // Navigate to the payment page
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to home
  };

  return (
    <div className="products-container">
      <button className="back-button" onClick={handleBack}>
        Back to Home
      </button>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="buy-now-button" onClick={() => handleBuyNow(product)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
