import React from 'react';
import './SignupPage.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link exact to='/home'>
             <button className='signup-button' type="submit">Sign Up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
