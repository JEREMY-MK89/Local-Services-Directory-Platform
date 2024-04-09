import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'DELETE',
      });
      if (response.ok) {
        // Perform actions on successful logout (e.g., clear user session)
        onLogout();
      } else {
        // Handle logout error
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <Link to="/" onClick={handleLogout} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
      Logout
    </Link>
  );
};

export default LogoutButton;
