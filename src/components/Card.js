// components/Card.js
import React from 'react';

function Card({ item, addToCart }) {
  return (
    <div className="item-card">
      <div className="card-img-container">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="card-info">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span className="price">${item.price.toFixed(2)}</span>
        <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;