// App.js
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import PersonalInfo from './pages/PersonalInfo';
import './App.css';

export const bag =createContext();

function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <bag.Provider value={{cart, setCart}}>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/Coffee-Shop" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/personal-info" element={<PersonalInfo />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </bag.Provider>
    
  );
}

export default App;