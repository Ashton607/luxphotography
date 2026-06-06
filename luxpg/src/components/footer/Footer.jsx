import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
      </div>
      <p className="footer-credit">© {new Date().getFullYear()} Lux Studios. All rights reserved.</p>
    </footer>
  )
}

export default Footer