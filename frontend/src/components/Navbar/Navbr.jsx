import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbr = ({ setshowLogiin }) => {
  const [menu, setmenu] = useState('Home');

  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setmenu("Home")} className={menu === "Home" ? "active" : ""}>
          Home
        </Link>
        <Link to="#explore-menu" onClick={() => setmenu("Menu")} className={menu === "Menu" ? "active" : ""}>
          Menu
        </Link>
        <Link to="#footer" onClick={() => setmenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>
          Contact us
        </Link>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button onClick={() =>{setshowLogiin(true)}}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbr;
