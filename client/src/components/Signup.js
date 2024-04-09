import React, { useState } from 'react';

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError("Username and password are required");
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
        }),
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        window.alert(`Sign up successful. Welcome, ${userData.name}!`);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "An error occurred. Please try again later.");
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
