import React, { useState, useEffect, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { availableThemes } from './context/ThemeContext';
import NewsFeed from './components/NewsFeed';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './styles/App.css';
import {AuthProvider} from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';



// Theme context
export const ThemeContext = createContext();

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
      <AuthProvider>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}

export default App;

