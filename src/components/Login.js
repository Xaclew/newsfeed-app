import React, { useState } from 'react';
import { ref, get, child } from 'firebase/database';
import { database } from '../firebaseConfig'; // Assuming correct filename
import bcryptjs from 'bcryptjs';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { handleLogin } = useContext(AuthContext); // Access context function





  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
