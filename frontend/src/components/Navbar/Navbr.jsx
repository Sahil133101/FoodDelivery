import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Navbr = ({ setshowLogiin }) => {
  const [menu, setmenu] = useState('Home');
const{gettotalcartAmount} = useContext(StoreContext);
  return (
    <div className='Navbar'>
       <Link to='/' > <img src={assets.logo} alt="Logo" className='logo' /> </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setmenu("Home")} className={menu === "Home" ? "active" : ""}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setmenu("Menu")} className={menu === "Menu" ? "active" : ""}>
          Menu
        </a>
        <a href="#footer" onClick={() => setmenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
        <Link to='/cart'> 
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className={gettotalcartAmount()===0 ? "" : "dot"}></div>
        </div>
        <button onClick={() =>{setshowLogiin(true)}}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbr;
