import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import { ThemeContext, availableThemes } from './context/ThemeContext';
import { initializeApp } from 'firebase/app';
import './styles/App.css';

const firebaseConfig = {
  apiKey: "AIzaSyCI6TjC_1a6pw81D8qoJgTcE1bvqHce3Cw",
  authDomain: "newsfeedapp-c375d.firebaseapp.com",
  databaseURL: "https://newsfeedapp-c375d-default-rtdb.firebaseio.com",
  projectId: "newsfeedapp-c375d",
  storageBucket: "newsfeedapp-c375d.appspot.com",
  messagingSenderId: "998332375810",
  appId: "1:998332375810:web:8924a97dabf75949da581b"
};

initializeApp(firebaseConfig);

function App() {
  const [theme, setTheme] = useState(availableThemes.light);

  useEffect(() => {
    // Load user preferences or default theme here
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme) {
      setTheme(JSON.parse(preferredTheme));
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === availableThemes.light ? availableThemes.dark : availableThemes.light);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
        <div className="App">
          <Routes>
            <Route path="/" element={<NewsFeed themes={availableThemes} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      
    </ThemeContext.Provider>
  );
}

export default App;
