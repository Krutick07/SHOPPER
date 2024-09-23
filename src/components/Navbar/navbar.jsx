import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../Assets/shoppingbag.png';
import carticon from '../Assets/cart.png';

export const Nav = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("Shop") }}>
          <Link to='/' style={{textDecoration: 'none'}}>shop</Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Men") }}>
          <Link to='/men' style={{textDecoration: 'none'}}>Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Women") }}>
          <Link to='/women' style={{textDecoration: 'none'}}>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Kids") }}>
          <Link to='/kid' style={{textDecoration: 'none'}}>Kids</Link>
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Log in</button>
        </Link>
        <Link to='/Cart'>
          <img src={carticon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
