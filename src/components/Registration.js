import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebaseConfig';
import bcryptjs from 'bcryptjs';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const sanitizedEmail = email.replace(/\./g, '');

      const userRef = ref(database, `users/${sanitizedEmail}`);

     
      const saltRounds = 10;
      const hashedPassword = await bcryptjs.hash(password, saltRounds);

      await set(userRef, {
        email,
        hashedPassword,
      });
      console.log('User registered:', email);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Registration error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Registration;

