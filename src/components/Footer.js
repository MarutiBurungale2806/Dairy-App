import React from 'react';
import { FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="home-button">
        <FaHome />
        <a href="#">Home</a>
      </div>
    </footer>
  );
};

export default Footer;
