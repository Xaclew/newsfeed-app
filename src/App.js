// import React, { useState, useEffect } from 'react';
// import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import NewsFeed from './components/NewsFeed';
// import Home from './components/Home'
// import About from './components/About'
// import Login from './components/Login';
// import Registration from './components/Registration';
// import Dashboard from './components/Dashboard';
// import { ThemeContext, availableThemes } from './context/ThemeContext';
// import { initializeApp } from 'firebase/app';
// import './styles/App.css';

// const firebaseConfig = {
//   apiKey: "AIzaSyCI6TjC_1a6pw81D8qoJgTcE1bvqHce3Cw",
//   authDomain: "newsfeedapp-c375d.firebaseapp.com",
//   databaseURL: "https://newsfeedapp-c375d-default-rtdb.firebaseio.com",
//   projectId: "newsfeedapp-c375d",
//   storageBucket: "newsfeedapp-c375d.appspot.com",
//   messagingSenderId: "998332375810",
//   appId: "1:998332375810:web:8924a97dabf75949da581b"
// };

// initializeApp(firebaseConfig);

// function App() {
//   const [theme, setTheme] = useState(availableThemes.light);

//   useEffect(() => {
//     // Load user preferences or default theme here
//     const preferredTheme = localStorage.getItem('theme');
//     if (preferredTheme) {
//       setTheme(JSON.parse(preferredTheme));
//     }
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === availableThemes.light ? availableThemes.dark : availableThemes.light);
//     localStorage.setItem('theme', JSON.stringify(theme));
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/news" element={<NewsFeed />} />  // Add a route for NewsFeed
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


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
import './styles/App.css';

// Firebase configuration (separated for clarity)
import { initializeApp } from 'firebase/app';

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
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

