import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaBell, FaHome, FaUser } from 'react-icons/fa';
import './HomePage.css';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from './Card';
import Footer from './Footer';

const HomePage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuToggle = () => {
		setIsOpen(!isOpen);
	  };

  return (
	<>
		<div>
			<Navbar handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
		<Sidebar isOpen={isOpen} />
		<Card/>
		<Footer/>
		</div>
	</>
  );
};

export default HomePage;
