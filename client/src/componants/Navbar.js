import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Webtoon Library</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/favorites" className="text-white hover:text-gray-300">Favorites</Link></li>
          <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
          <li><Link to="/register" className="text-white hover:text-gray-300">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;