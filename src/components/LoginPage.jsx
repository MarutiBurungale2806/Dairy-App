import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link exact to="/home">
            <button className='login-button' type="submit">Login</button>
          </Link>
          <div className='signup-link'>

          <p1>Get Registered ?</p1>
          <h4><Link exact to="/signup">Sign up</Link></h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
