// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import './App.css';

function App() {
  // storing items added to cart
  const [cart, setCart] = useState([]);

  // adding to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  // clearing cart after submit the order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Coffee-Shop" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/*" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;