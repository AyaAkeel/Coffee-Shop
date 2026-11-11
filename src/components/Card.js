
import { useContext } from "react";
import { bag } from "../App";

function Card({ item }) {
  const { cart, setCart } = useContext(bag);

  const add = () => {
    setCart([...cart, item]);
  };

  return (
    <div className="item-card">
      <div className="card-img-container">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="card-info">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <span className="price">
          ${item.price.toFixed(2)}
        </span>

        <button onClick={add} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
