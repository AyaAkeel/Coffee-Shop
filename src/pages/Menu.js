import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Cold from '../menuComponent/Cold.js';
import Hot from '../menuComponent/Hot.js';
import Dessert from '../menuComponent/Dessert.js';

function Menu({ addToCart }) {
  return (
    <div className="menu-page">
      <div className="menu-nav">
        <Link to="/menu">Hot Drinks</Link>
        <Link to="/menu/cold">Cold Drinks</Link>
        <Link to="/menu/desserts">Desserts</Link>
      </div>

      <div className="menu-content">
        <Routes>
          <Route path="/" element={<Hot addToCart={addToCart} />} />
          <Route path="cold" element={<Cold addToCart={addToCart} />} />
          <Route path="desserts" element={<Dessert addToCart={addToCart} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Menu;
