import React, { useState, useEffect } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to attempt login with stored credentials
  const attemptStoredLogin = async () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      await handleSubmit(null, storedUsername, storedPassword);
    }
  };

  useEffect(() => {
    attemptStoredLogin();
    // eslint-disable-next-line
  }, []); // Run once on component mount

  const handleSubmit = async (e, storedUsername, storedPassword) => {
    if (e) e.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: storedUsername || username,
        password: storedPassword || password,
      }),
    });

    if (response.ok) {
      const user = await response.json();
      setUser(user);
      window.alert('Login successful');
      // Clear stored credentials after successful login
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    } else {
      const errorData = await response.json();
      setError(errorData.error);
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-skyblue">
        <div className="w-4/5 md:w-2/3 lg:w-1/3 mx-auto p-8 bg-white rounded shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
