import React from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { useHistory, useNavigate } from 'react-router-dom';

const Header = (prop) => {
  const navigate = useNavigate();

  // Your collection data here
  const handleGoBack = () => {
    // Replace "/home" with the desired route you want to redirect to
    navigate('/home');
  }
  // Function to handle redirection to the form for adding a new collection
  const handleAddCollection = () => {
    navigate('/add-collection');
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', position:'sticky', top: '0', zIndex: '10' }}>
  {/* Back button */}
  <div className="navbar-item" style={{ cursor: 'pointer'}} onClick={handleGoBack}>
    <FaArrowLeft  style={{height: '30px', width2: '30px' }}/> 
  </div>

  <div>{prop.tabName}</div>

  {/* Add Collection button */}
  <div className="navbar-item" style={{ cursor: 'pointer', height: '25px', width2: '25px' }} onClick={handleAddCollection}>
    <FaPlus style={{height: '30px', width2: '30px' }}/>
  </div>

  {/* Display collection data */}
  {/* Your code to display the collection data in cards or any other format */}
</div>

  );
};

export default Header;
