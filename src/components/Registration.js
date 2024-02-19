// import React, { useState } from 'react';
// import { ref, set } from 'firebase/database';
// import { database } from '../firebaseConfig'; // Assuming your config file is named firebaseConfig.js
// const bcrypt = require('bcryptjs');
// function Registration() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
  


//   const handleRegister = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Sanitize email address (optional)
//       const sanitizedEmail = email.replace(/\./g, ''); // Replace periods with another character
  
//       const userRef = ref(database, `users/${sanitizedEmail}`);
  
//       // Use a secure hashing algorithm for password storage (replace with your chosen algorithm)
//       const hashedPassword = await bcryptjs.hash(password, 10);
  
//       await set(userRef, {
//         email,
//         hashedPassword, // Store hashed password instead of plain text
//       });
  
//       // Handle successful registration (e.g., redirect to login page)
//       console.log('User registered:', email);
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error('Registration error:', error.message);
//       setError(error.message); // Display error message to user
//     }
//   };
  

//   return (
//     <div className="register">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Register</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Registration;


import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebaseConfig'; // Assuming your config file is named firebaseConfig.js
import bcryptjs from 'bcryptjs'; // Assuming bcryptjs is installed

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Sanitize email address (optional)
      const sanitizedEmail = email.replace(/\./g, ''); // Replace periods with another character

      const userRef = ref(database, `users/${sanitizedEmail}`);

      // Generate secure hash for password
      const saltRounds = 10; // Adjust as needed
      const hashedPassword = await bcryptjs.hash(password, saltRounds);

      await set(userRef, {
        email,
        hashedPassword,
      });

      // Handle successful registration (e.g., redirect to login page)
      console.log('User registered:', email);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Registration error:', error.message);
      setError(error.message); // Display error message to user
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

