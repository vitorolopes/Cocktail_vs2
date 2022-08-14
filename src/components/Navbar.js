import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-center">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="nav-links">
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar