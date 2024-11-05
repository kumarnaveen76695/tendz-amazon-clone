import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  // Add item to the cart, or increase its quantity if already in the cart
  const addToCart = (product) => {
    const existingProduct = cartList.find(item => item.id === product.id);
    if (existingProduct) {
      setCartList(cartList.map(item => 
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    } else {
      setCartList([...cartList, { ...product, quantity: 1 }]);
    }
  };

  // Remove an item from the cart entirely
  const removeFromCart = (productId) => {
    setCartList(cartList.filter(item => item.id !== productId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartList([]);
  };

  // Update the quantity of a specific item in the cart
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Optional: Prevent quantities less than 1
    setCartList(cartList.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
