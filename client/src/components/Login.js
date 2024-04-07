import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/login", {
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
      const user = await response.json();
      setUser(user); // Set user state
      window.alert('Login successful'); // Display success message as window alert
    } else {
      const errorData = await response.json();
      setError(errorData.error); // Display error message
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
