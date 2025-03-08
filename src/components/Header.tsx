import React, { useState } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../ThemeContext'; // Import the custom hook

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Get darkMode and toggle function from context
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = (href: string) => {
  setIsDropdownOpen(false); // Close the menu
  window.location.href = href; // Navigate to the section
};

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 ${
        darkMode ? 'bg-CD text-CA' : 'bg-CA text-CD'
      }`}
    >
      {/* Hamburger Icon (Dropdown Button) */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`p-2 rounded-md focus:outline-none ${darkMode ? 'text-CB' : 'text-CD'}`}
        >
          <FaBars size={24} />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul
            className={`absolute left-0 mt-2 w-48 border rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
            }`}
          >
            <li
    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
    onClick={() => handleLinkClick('#skills')} // Correct usage
  >
    Skills
  </li>
  <li
    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
    onClick={() => handleLinkClick('#projects')}
  >
    Projects
  </li>
  <li
    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
    onClick={() => handleLinkClick('#contact')}
  >
    Contact
  </li>
          </ul>
        )}
      </div>

      {/* Dark Mode Toggle on the Right */}
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-lg focus:outline-none ${darkMode ? 'text-CB' : 'text-CD'}`}
      >
        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </header>
  );
};

export default Header;
