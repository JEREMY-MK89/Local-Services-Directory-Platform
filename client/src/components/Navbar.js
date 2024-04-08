import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      onLogout(); // Call the onLogout function passed as props
      alert("Successfully logged out!");
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">Local Services Platform</Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/about" className="text-white">About</Link></li>
            <li><Link to="/signup" className="text-white">Sign Up</Link></li>
            <li><Link to="/login" className="text-white">Login</Link></li>
            <li><Link to="/add-service" className="text-white">Add New Service</Link></li>
            <li>
              <button onClick={handleLogout} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
