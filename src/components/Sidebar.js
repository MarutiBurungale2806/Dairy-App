import React, { useState } from 'react';
import { IoIosChatbubbles } from 'react-icons/io';
import { FiX } from 'react-icons/fi';
import './Sidebar.css'; // Import your custom CSS styles for the sidebar
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaUser } from 'react-icons/fa';
const Sidebar = ({ isOpen }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          {/* Profile icon in Sidebar */}
          <div className="profile-sidebar">
            <FaUser className="profile-icon-sidebar" />
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
