import React, { createContext, useContext } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Cold from '../menuComponent/Cold.js';
import Hot from '../menuComponent/Hot.js';
import Dessert from '../menuComponent/Dessert.js';
import { bag } from '../App.js';


export const addtocart = createContext()

function Menu() {

const {cart, setCart} = useContext(bag)

const add = (item) => {
    setCart([...cart, item]);
  };

  return (
    <addtocart.Provider value={add}>
       <div className="menu-page">
      <div className="menu-nav">
        <Link className='menu-link' to="/menu">Hot Drinks</Link>
        <Link className='menu-link' to="/menu/cold">Cold Drinks</Link>
        <Link className='menu-link' to="/menu/desserts">Desserts</Link>
      </div>

      <div className="menu-content">
        <Routes>
          <Route path="/" element={<Hot />} />
          <Route path="cold" element={<Cold />} />
          <Route path="desserts" element={<Dessert />} />
        </Routes>
      </div>
    </div>
    </addtocart.Provider>
  );
}

export default Menu;
