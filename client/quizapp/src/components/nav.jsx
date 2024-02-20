// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-600 p-4">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">Quiz App</a>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
