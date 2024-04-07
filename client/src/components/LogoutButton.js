
import React from 'react';

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
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
