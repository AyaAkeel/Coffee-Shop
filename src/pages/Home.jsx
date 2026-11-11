
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {//hol lazm hotlon img back ground w7ykono 3l left ll sora
        }
        <h4>Welcome to </h4>
        <h1>Coffee Time Shop</h1>
        <p>More than coffee...it's a daily ritual</p>
        <Link to="/menu">Explore Our Menu </Link>
      </div> 
      <div className='features'>
        <ul className="features-list">
          <li className="feature-item">
            <span className="icon">☕</span>
            <span>Premium Quality Coffee</span>
        </li>
        <li className="feature-item">
            <span className="icon">☕</span>
            <span>Cozy Atmosphere</span>
        </li>
        <li className="feature-item">
            <span className="icon">🍰</span>
            <span>Delicious Desserts</span>
        </li>
        <li className="feature-item">
            <span className="icon">🛵</span>
            <span>Fast Delivery</span>
        </li>
        </ul>
      </div>
      <div className="our-menu">
        <div className="menu-card">
        {//r7 ykon 3nde image wt7ta hl link
        }
          <Link to='/menu'>Hot Drinks<span>→</span></Link>
        </div>
        <div className="menu-card">
          <Link to='/menu/cold'>Cold Drinks<span>→</span></Link>
        </div>
        <div className="menu-card">
          <Link to='/menu/desserts'>Desserts<span>→</span></Link>
        </div>
      </div>
      <div className='home-footer'>
        {//color 2w img k background
        }
      </div>
    </div>
  
  );
}