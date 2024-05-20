import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Logo component
const Logo = () => (
  <div className="flex items-center">
    <Link to="/" className="flex items-center text-xl font-semibold text-gray-800">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-8 h-8 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
      <span>Real Estate</span>
    </Link>
  </div>
);

// NavLinks component
const NavLinks = () => (
  <div className="flex space-x-8">
    <Link to="/buy" className="nav-link text-gray-600 font-bold hover:text-indigo-500 transition-colors duration-300 relative">Comprar</Link>
    <Link to="/rent" className="nav-link text-gray-600 font-bold hover:text-indigo-500 transition-colors duration-300 relative">Rentar</Link>
    <Link to="/finance" className="nav-link text-gray-600 font-bold hover:text-indigo-500 transition-colors duration-300 relative">Financiar</Link>
  </div>
);

// UserMenu component
const UserMenu = ({ user }) => (
  <div className="flex items-center">
    {!user ? (
      <Link to="/login" className="btn-primary text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-md">Iniciar Sesión</Link>
    ) : (
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={user.profilePicture} alt="avatar" className="w-full h-full object-cover" />
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    )}
  </div>
);

// Navbar component
const Navbar = ({ user }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />
        <NavLinks />
        <UserMenu user={user} />
      </div>
    </header>
  );
};

export default Navbar;
