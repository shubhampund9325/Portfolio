import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing icons

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle

  // Toggle dark mode on or off
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode); // Toggle the "dark" class on the body element
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 backdrop-filter backdrop-blur-md bg-transparent z-50 rounded-full shadow-lg font-sf-pro ${darkMode ? 'bg-gray-800' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <ul className="flex space-x-6 text-sm text-white">
        <li className="relative group">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Dark/Light mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="text-white p-2 rounded-full hover:bg-cyan-400 transition-all"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-400" />
        )}
      </button>
    </motion.nav>
  );
}