import React from 'react'
import './Potrait.css'

const Potrait = () => {
  return (
    <div className="portrait">
    {/*Using the same classNames from landscape.css allows for consistent styling since the css is global*/}

    <section className="portrait-section">
    <h2 className="section-title">Studio</h2>
    <hr />
    <div className="card-grid">
      <div className="card studio-card-1">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Controlled studio light, engineered to capture your authentic brilliance.</p>
        </div>
       </div>
     
      <div className="card studio-card-2">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Capturing polished professionalism against a perfectly seamless backdrop.</p>
        </div>
       </div>

       <div className="card studio-card-3">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Professional headshot for your resume? We got you covered.</p>
        </div>
       </div>
       
    </div>
    </section>

    <section className="portrait-section">
    <h2 className="section-title">Outdoor</h2>
    <hr />
    <div className="card-grid">
      <div className="card outdoor-card-1">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Using dappled sunlight to capture organic, high-fashion portraiture.</p>
        </div>
       </div>

       <div className="card outdoor-card-2">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Capturing rich tones bathed in the perfect golden hour glow.</p>
        </div>
       </div>

       <div className="card outdoor-card-3">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Capturing a serene portrait amidst vibrant, natural pastel tones.</p>
        </div>
       </div>
    </div>
    </section>

    <section className="portrait-section">
    <h2 className="section-title">Editorial</h2>
    <hr />
    <div className="card-grid">
      <div className="card editorial-card-1">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Sculpted angles and avant-garde style, curated to capture the cover.</p>
        </div>
       </div>

       <div className="card editorial-card-2">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">Bold direction, capturing a striking, high-fashion editorial narrative.</p>
        </div>
       </div>

       <div className="card editorial-card-3">
        <div className="card-overlay">
          <span className="card-name">Lux Photography</span>
          <p className="card-desc">High-end creative direction, beautifully executed to capture raw sophistication.</p>
        </div>
       </div>
    </div>
    </section>
      
    </div>
  )
}

export default Potrait
