import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
      <span>Real Estate</span>
    </Link>
  </div>
);

const NavLinks = () => (
  <div className="nav-links">
    <Link to="/buy" className="nav-link">Comprar</Link>
    <Link to="/rent" className="nav-link">Rentar</Link>
    <Link to="/finance" className="nav-link">Financiar</Link>
  </div>
);

const UserMenu = ({ user }) => (
  <div className="user-menu">
    {!user ? (
      <Link to="/login" className="login-button">Iniciar Sesión</Link>
    ) : (
      <div className="logged-in">
        <div className="avatar">
          <img src={user.profilePicture} alt="avatar" className="avatar-img" />
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="menu-icon"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    )}
  </div>
);

const Navbar = ({ user }) => (
  <header className="navbar">
    <Logo />
    <NavLinks />
    <UserMenu user={user} />
  </header>
);

export default Navbar;
