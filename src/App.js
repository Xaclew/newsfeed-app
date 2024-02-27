import React, { useState, useEffect, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { availableThemes } from './context/ThemeContext';
import NewsFeed from './components/NewsFeed';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './styles/App.css';
import {AuthProvider} from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticleProvider } from './context/ArticleContext';



export const ThemeContext = createContext();

function App() {

const [theme, setTheme] = useState(availableThemes.light);

  useEffect(() => {
    
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
        <ArticleProvider>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
            <Route path="/news" element={<NewsFeed />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer/>
      </BrowserRouter></ArticleProvider>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}

export default App;

