import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  username: '',
  userData: null,
  setIsLoggedIn: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleLogin = async (userData) => {
    setIsLoggedIn(true);
    setUsername(userData.email);
    setUserData(userData);
    console.log(userData);

    // Simulate asynchronous operation (replace with your actual logic)
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setUserData(null);
  };

  useEffect(() => {
    // Check for initial login state (optional)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUsername(parsedUser.username);
      setUserData(parsedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, userData, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
