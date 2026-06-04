import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-badge">Luxury Photography Studio</span>
        <h1 className="hero-title">Every moment<br />deserves to last forever.</h1>
        <p className="hero-subtitle">
          We capture life's most precious moments with elegance,<br />
          emotion, and an eye for timeless beauty.
        </p>
        <button className="hero-btn">View Our Work</button>
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
    </div>
  )
}

export default Hero