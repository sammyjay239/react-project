import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/samdev.PNG';
import { Menu, X, Search, Bookmark, User } from "lucide-react"; // Lucide icons
import { BiBookmark } from 'react-icons/bi';
import Dashboard from '../Dashboard/Dashboard';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="w-full mx-auto text-white px-6 py-4 flex items-center justify-between bg-blue-900 transition fixed top-0 left-0 z-[9999] h-25">
      {/* Logo */}
      <Link to='/'>
        <div className="flex items-center space-x-2">
          <img src={Logo} className='w-24 h-auto ml-10' alt="Logo" />
        </div>
      </Link>

      {/* Hamburger button (Lucide) */}
      <button
        className="lg:hidden text-3xl ml-4 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium text-white mr-20">
        <li className="hover:text-blue-400 text-lg cursor-pointer">
          <Link to='/'> <i className="bi bi-house-door-fill mr-1"></i>Home</Link>
        </li>
        <li className="hover:text-blue-400 text-lg cursor-pointer">
          <Link to='/Categories'><i className="bi bi-list-ul mr-1"></i>Categories</Link>
        </li>
        <li className="hover:text-blue-400 text-lg cursor-pointer">
          <Link to='/Latestpost'><i className="bi bi-clock-history mr-1"></i>Latest post</Link>
        </li>
        <li className="hover:text-blue-400 text-lg cursor-pointer">
          <Link to='/Tags'><i className="bi bi-tags-fill mr-1"></i>Tags</Link>
        </li>
        <li className="hover:text-blue-400 text-lg cursor-pointer">
          <Link to='/History'><i className="bi bi-archive mr-1"></i>History</Link>
        </li>
        <li className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 py-1 rounded text-black"
          />
          <Search className="ml-2 cursor-pointer" />
        </li>

        <li>
         <Link to="/users"> <User className="text-white cursor-pointer" /></Link>
        </li>
        <li>
         <Link to="/Dashboard"> <Bookmark className="text-white cursor-pointer" /></Link>
        </li>

        <li>
          <Link to="/Auth" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400 transition">
            Register
          </Link>
        </li>
      </ul>


      {/* Mobile Menu (Lucide icons) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-900 text-white flex flex-col items-center py-6 space-y-4 lg:hidden">
          {/* Search */}
          <div className="flex items-center w-10/12 border-b border-gray-400 pb-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-2 py-1 rounded text-black"
            />
            <Search className="ml-2 cursor-pointer" />
          </div>

          {/* Links */}
          <Link to='/' className="py-2 hover:text-blue-400">Home</Link>
          <Link to='/Categories' className="py-2 hover:text-blue-400">Categories</Link>
          <Link to='/Latestpost' className="py-2 hover:text-blue-400">Latest post</Link>
          <Link to='/Tags' className="py-2 hover:text-blue-400">Tags</Link>
          <Link to='/History' className="py-2 hover:text-blue-400">History</Link>

          {/* Profile & Bookmark */}
          <div className="flex space-x-6 mt-4">
            <User className="text-2xl cursor-pointer" />
            <BiBookmark className="text-2xl cursor-pointer" />
          </div>

          {/* Register */}
          <Link to="/Auth" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400 transition">
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Nav;
