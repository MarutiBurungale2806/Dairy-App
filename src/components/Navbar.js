import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaBars, FaBell, FaUser } from 'react-icons/fa';

const Navbar = ({ handleMenuToggle, isOpen }) => {
  return (
   <>
         <div className="navbar">
        {/* Hamburger icon */}
        {/* {!isOpen && ( */}
          <div className="hamburger-icon" onClick={handleMenuToggle}>
            <FaBars />
          </div>
        {/* )} */}
        {/* Logo */}
       
        <div className={`nav-items ${isOpen ? 'show-on-mobile' : 'hide-on-mobile'}`}>
          {/* Your nav items here */}
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
		
          {/* Profile icon */}
          {/* <div className="profile hide-on-mobile">
            <FaUser className="profile-icon" />
          </div> */}
        </div>
		<div className="notification-icon">
        <FaBell />
      </div>
      </div>
   </>
  );
};

export default Navbar;
