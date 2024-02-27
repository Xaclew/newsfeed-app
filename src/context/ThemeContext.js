import React, { createContext, useState } from 'react';

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#222',
    color: '#fff',
  },
};

const defaultTheme = themes.light;

export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const availableThemes = themes;
