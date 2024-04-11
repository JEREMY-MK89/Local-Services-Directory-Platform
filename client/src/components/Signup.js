// Signup.jsx

import React, { useState } from 'react';

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirmation match
    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // Call setUser with the user data
        window.alert(`Sign up successful. Welcome, ${userData.username}!`); // Display success message including the username
      } else {
        const errorData = await response.json();
        if (response.status === 400 && errorData.error === 'Username already exists') {
          // Display window prompt for existing username
          window.alert('Username already exists. Please choose a different username.');
        } else {
          setError(errorData.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-skyblue">
        <div className="w-4/5 md:w-2/3 lg:w-1/3 mx-auto p-8 bg-white rounded shadow-md mt-20">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full mb-2 p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full mb-2 p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="block w-full mb-2 p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
