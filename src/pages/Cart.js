// pages/Cart.js
import React from 'react';

function Cart({ cart, clearCart }) {
  // calculating the total average
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Ordered Successfully! 🎉 Your coffee is on the way.");
    clearCart(); // To clear the cart
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Go add some delicious coffee!</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} width="50" />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handleSubmit} className="submit-order-btn">Submit Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;