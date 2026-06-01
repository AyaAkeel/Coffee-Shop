// pages/Home.js
import { colors } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Welcome to <span style={{color:"blue"}}>Coffee Time</span> Shop</h1>
        <p>Where you can taste the heaven.</p>
        <Link to="/menu" className="order-btn">Order Now</Link>
      </div> 
    </div>
  
  );
}

export default Home;