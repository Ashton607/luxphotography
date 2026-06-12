import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav ref={navRef}>
      <ul className={menuOpen ? 'show-mobile-menu' : ''}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/landscape" onClick={closeMenu}>Landscape</Link></li>
        <li><Link to="/weddings" onClick={closeMenu}>Weddings</Link></li>
        <li><Link to="/portraits" onClick={closeMenu}>Portraits</Link></li>
      </ul>

      <div
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;