// // 



// import React, { useState } from 'react';
// import { ref, get, child } from 'firebase/database';
// import { database } from '../firebaseConfig'; // Assuming firebaseConfig.js is named correctly
// import bcryptjs from 'bcryptjs';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const userRef = ref(database, `users/${email}`);
//       const userSnapshot = await get(userRef);

//       if (!userSnapshot.exists()) {
//         setError('Invalid email or password.');
//         return;
//       }

//       const userData = userSnapshot.val();
//       const storedPassword = userData.hashedPassword;

//       const passwordMatch = await bcryptjs.compare(password, storedPassword);

//       if (passwordMatch) {
//         console.log('User logged in:', email);
//         // Handle successful login (e.g., redirect to dashboard)
//       } else {
//         setError('Invalid email or password.');
//       }
//     } catch (error) {
//       console.error('Login error:', error.message);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { ref, get, child } from 'firebase/database';
import { database } from '../firebaseConfig'; // Assuming correct filename
import bcryptjs from 'bcryptjs';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sanitize email address (optional)
      const sanitizedEmail = email.replace(/\./g, ''); // Replace periods with another character

      const userRef = ref(database, `users/${sanitizedEmail}`);
      const userSnapshot = await get(userRef);

      if (!userSnapshot.exists()) {
        setError('Invalid email or password.');
        return;
      }

      const userData = userSnapshot.val();
      const storedPassword = userData.hashedPassword;

      const passwordMatch = await bcryptjs.compare(password, storedPassword);

      if (passwordMatch) {
        console.log('User logged in:', email);
        // Handle successful login (e.g., redirect to dashboard)
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
    }
  };

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

