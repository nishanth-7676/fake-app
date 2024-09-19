import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import React, { useState } from 'react';
import './App.css';
function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find(item => item.id === product.id);
      if (itemInCart) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => prevCart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  }
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProductList addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
    </Routes>
  </Router>
  );
}

export default App;
