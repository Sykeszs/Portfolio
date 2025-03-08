import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext<any>(null);

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider to manage the theme state
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  // Toggle dark mode and save it to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode.toString()); // Save the mode to localStorage
      return newMode;
    });
  };

  // Apply the dark mode class globally to the root element (or body)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // Add dark class to the root element
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class if light mode
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
