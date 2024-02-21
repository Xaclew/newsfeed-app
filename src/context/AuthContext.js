import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  username: '',
  setIsLoggedIn: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData.username);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider};
