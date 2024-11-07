import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-600 text-white p-4'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-2xl font-bold'
        >
          TechnoMart
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <Link
            to='/'
            className='hover:text-gray-300'
          >
            Home
          </Link>
          <Link
            to='/products'
            className='hover:text-gray-300'
          >
            Products
          </Link>
          <Link
            to='/about'
            className='hover:text-gray-300'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='hover:text-gray-300'
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden focus:outline-none'
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden mt-4 space-y-2'>
          <Link
            to='/'
            className='block hover:bg-blue-700 p-2'
          >
            Home
          </Link>
          <Link
            to='/products'
            className='block hover:bg-blue-700 p-2'
          >
            Products
          </Link>
          <Link
            to='/about'
            className='block hover:bg-blue-700 p-2'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='block hover:bg-blue-700 p-2'
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
