import { useRef, useEffect } from 'react'
import './ContactExplore.css'
import contact from '../../assets/contact.png'

const ContactExplore = () => {

  return (
   <div className="contact-section">
    <h2  className="contact-explore-title">Get In Touch</h2>
  <div className="contact-left">
    <div  className="contact-divider" />
    <p  className="contact-explore-subtitle">
      Get in touch to discuss your photography needs<br />
      and bring your vision to life.
    </p>
    <button  className="contact-btn">Book a Session</button>
  </div>

  <div className="contact-right">
    <img  src={contact} className="contact-img" alt="contact" />
  </div>

</div>
  )
}

export default ContactExplore