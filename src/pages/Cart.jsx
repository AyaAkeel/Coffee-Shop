
import { useContext } from 'react';
import { bag } from '../App.js';
import { useNavigate } from 'react-router-dom';

function Cart() {

    const { cart } = useContext(bag);
    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (sum, item) => sum + Number(item.price || 0),
        0
    );

    const handleSubmit = () => {
        navigate("/personal-info", {
            state: { totalPrice }
        });
    };

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div className="cart-container">

                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">

                                <img
                                    src={item.img}
                                    alt={item.name}
                                    width="50"
                                />

                                <div>
                                    <h4>{item.name}</h4>
                                    <p>
                                        ${Number(item.price || 0).toFixed(2)}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">

                        <h3>
                            Total: ${totalPrice.toFixed(2)}
                        </h3>

                        <button
                            onClick={handleSubmit}
                            className="submit-order-btn"
                        >
                            Submit Order
                        </button>

                    </div>

                </div>
            )}
        </div>
    );
}

export default Cart;

