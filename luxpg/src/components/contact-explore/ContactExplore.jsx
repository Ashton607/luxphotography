import { useRef, useEffect } from 'react'
import './ContactExplore.css'
import contact from '../../assets/contact.png'

const ContactExplore = () => {

  {/*Contact Section*/}
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const left = entry.target.querySelector('.contact-left')
      const h2 = entry.target.querySelector('.contact-explore-title')
      const hr = entry.target.querySelector('.contact-divider')
      const p = entry.target.querySelector('.contact-explore-subtitle')
      const btn = entry.target.querySelector('.contact-btn')
      const img = entry.target.querySelector('.contact-right')
      
      if (entry.isIntersecting) {
        left.classList.add('animate-in');
        h2.classList.add('animate-in');
        hr.classList.add('animate-in');
        p.classList.add('animate-in');
        btn.classList.add('animate-in');
        img.classList.add('animate-in');
      } else {
        left.classList.remove('animate-in');
        h2.classList.remove('animate-in');
        hr.classList.remove('animate-in');
        p.classList.remove('animate-in');
        btn.classList.remove('animate-in');
        img.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.1 });

  const ContactSection = document.querySelector('.contact-section');
  if (ContactSection) {
    observer.observe(ContactSection);
  }

  return () => observer.disconnect();
}, []);

  return (
  <div className="contact-section">
  
  <div className="contact-left">
    <h2  className="contact-explore-title">Get In Touch</h2>
    <hr className="contact-divider" />
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