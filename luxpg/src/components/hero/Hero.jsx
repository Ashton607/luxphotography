import React, { useState, useEffect, useRef } from "react";
import './Hero.css'
import macroImg from '../../assets/macro.jpg'
import {Link} from 'react-scroll'
import ContactExplore from "../contact-explore/ContactExplore";

const Hero = () => {
  const [activeTab, setActiveTab] = useState('24mm');
  
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
    <div className="preview-img img1">
      <div className="img-overlay">
        <span className="img-name">Ocean Serenity</span>
        <span className="img-year">2024</span>
      </div>
    </div>
    <div className="preview-img img2">
      <div className="img-overlay">
        <span className="img-name">Forest Mist</span>
        <span className="img-year">2024</span>
      </div>
    </div>
    <div className="preview-img img3">
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
    </div>



    </div>
  )
}

export default Hero