import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/landscape">Landscape</Link></li>
            <li><Link to="/weddings">Weddings</Link></li>
            <li><Link to="/portraits">Portraits</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
