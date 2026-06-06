import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="#" target="_blank" rel="noopener noreferrer" onClick={()=> window.open('https://www.instagram.com/ashton.b_jordan', '_blank')}>Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer" onClick={() => window.open('mailto:portmanashton4@gmail.com', '_blank')}>Email</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer" onClick={() => window.open('https://wa.me/27788825777', '_blank')}>WhatsApp</a>
      </div>
      <p className="footer-credit">© {new Date().getFullYear()} Lux Studios. All rights reserved.</p>
      <p className="footer-credit">Made with Lux</p>
    </footer>
  )
}

export default Footer