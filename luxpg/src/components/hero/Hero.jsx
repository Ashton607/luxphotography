import React, { useState, useEffect, useRef } from "react";
import './Hero.css'
import macroImg from '../../assets/macro.jpg'
import {Link} from 'react-scroll'
import ContactExplore from "../contact-explore/ContactExplore";
import Testimonials from "../testimonial/Testimonials";

const Hero = () => {
  const [activeTab, setActiveTab] = useState('24mm');

  {/*Title*/}
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const span = entry.target.querySelector('.hero-badge')
      const line1 = entry.target.querySelector('.line1');
      const line2 = entry.target.querySelector('.line2');
      const p = entry.target.querySelector('.hero-subtitle');
      const button = entry.target.querySelector('.hero-btn')
      
      if (entry.isIntersecting) {
        span.classList.add('animate-in');
        line1.classList.add('animate-in');
        line2.classList.add('animate-in');
        p.classList.add('animate-in');
        button.classList.add('animate-in');
      } else {
        span.classList.remove('animate-in');
        line1.classList.remove('animate-in');
        line2.classList.remove('animate-in');
        p.classList.remove('animate-in');
        button.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.1 });

  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    observer.observe(heroContent);
  }

  return () => observer.disconnect();
}, []);


  {/*Preview cards*/}
const img1Ref = useRef(null)
const img2Ref = useRef(null)
const img3Ref = useRef(null)

useEffect(() => {
  const imgs = [img1Ref, img2Ref, img3Ref]

  const observer = new IntersectionObserver(
    ([entry]) => {
      imgs.forEach(ref => {
        if (ref.current) {
          if (entry.isIntersecting) {
            ref.current.classList.add('visible')
          } else {
            ref.current.classList.remove('visible')
          }
        }
      })
    },
    { threshold: 0.2 }
  )

  if (img1Ref.current) observer.observe(img1Ref.current)
  return () => observer.disconnect()
}, []);


 {/*Active Tabs*/}
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const ul = entry.target.querySelector('.hero-tabs ul')
      
      if (entry.isIntersecting) {
        ul.classList.add('animate-in');
      } else {
        ul.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.1 });

  const heroTabs = document.querySelector('.hero-tabs');
  if (heroTabs) {
    observer.observe(heroTabs);
  }

  return () => observer.disconnect();
}, []);


 {/*Explore*/}
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const h2 = entry.target.querySelector('.hero-explore-title')
      const p = entry.target.querySelector('.hero-explore-subtitle')

      if (entry.isIntersecting) {
        h2.classList.add('animate-in');
        p.classList.add('animate-in')
      } else {
        h2.classList.remove('animate-in');
        p.classList.remove('animate-in')
      }
    });
  }, { threshold: 0.1 });

  const heroExplore = document.querySelector('.hero-explore');
  if (heroExplore) {
    observer.observe(heroExplore);
  }

  return () => observer.disconnect();
}, []);
  
  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-badge">Luxury Photography Studio</span>
        <h1 className="hero-title">
          <span className="line1">Every moment</span>
          <span className="line2">deserves to last forever.</span>
        </h1>
        <p className="hero-subtitle">
          We capture life's most precious moments with elegance,<br />
          emotion, and an eye for timeless beauty.
        </p>
        <button className="hero-btn"><Link to="zoom-content" smooth={true} offset={-20} duration={500}>View more</Link></button>
      </div>

      <div className="hero-preview">
     <div className="preview-card">
    <div ref={img1Ref} className="preview-img img1">
      <div className="img-overlay">
        <span className="img-name">Ocean Serenity</span>
        <span className="img-year">2024</span>
      </div>
    </div>
    <div ref={img2Ref} className="preview-img img2">
      <div className="img-overlay">
        <span className="img-name">Forest Mist</span>
        <span className="img-year">2024</span>
      </div>
    </div>
    <div ref={img3Ref} className="preview-img img3">
      <div className="img-overlay">
        <span className="img-name">Golden Hour</span>
        <span className="img-year">2023</span>
      </div>
    </div>
  </div>
</div>



     <div className="zoom-content">
      {/* 200mm */}
      {activeTab === '200mm' && (
      <div className="img200mm">

      </div>
      )}

      {/* 48mm */}
      {activeTab === '48mm' && (
      <div className="img48mm">

      </div>
      )}

      {/* 24mm */}
      {activeTab === '24mm' && (
      <div className="img24mm">

      </div>
      )}


      {/* 13mm */}
      {activeTab === '13mm' && (
      <div className="img13mm">

      </div>
      )}


      {/* Macro */}
      {activeTab === 'Macro' && (
      <div className="imgMacro">
      <div className="imgMacro" style={{ backgroundImage: `url(${macroImg})` }}/>
      </div>
      )}
      </div>


    <div className="hero-tabs">
    <ul>
    <li data-tooltip="Telephoto — 8x" className={activeTab === '200mm' ? 'active' : ''} onClick={() => setActiveTab('200mm')}>200mm</li>
    <li data-tooltip="2x" className={activeTab === '48mm' ? 'active' : ''} onClick={() => setActiveTab('48mm')}>48mm</li>
    <li data-tooltip="Wide — 1x" className={activeTab === '24mm' ? 'active' : ''} onClick={() => setActiveTab('24mm')}>24mm</li>
    <li data-tooltip="Ultra wide — .5x" className={activeTab === '13mm' ? 'active' : ''} onClick={() => setActiveTab('13mm')}>13mm</li>
    <li data-tooltip="Macro — extreme close-up, reveals hidden details" className={activeTab === 'Macro' ? 'active' : ''} onClick={() => setActiveTab('Macro')}>Macro</li>
    </ul>
    </div>


    <div className="hero-explore">
    <h2 className="hero-explore-title">Discover More</h2>
    <hr />
    <p className="hero-explore-subtitle">Explore our services and learn more about what we offer</p>

    <ContactExplore/>
    <Testimonials/>
    </div>



    </div>
  )
}

export default Hero