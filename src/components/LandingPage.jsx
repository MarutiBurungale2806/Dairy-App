import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
   
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Our Website</h1>
        <Link exact to="/login">
        <button className='get-started-btn'>Get Started</button>
      </Link>
      </div>
    </div>
  );
};

export default LandingPage;
