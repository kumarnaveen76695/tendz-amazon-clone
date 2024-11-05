import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Payment from './components/Payment';
import Products from './components/Products'; 
import { CartProvider } from './context/cartContext'; 
import Cart from './components/Cart';

const App = () => (
  <CartProvider>
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
