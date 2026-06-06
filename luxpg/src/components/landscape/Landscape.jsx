import React from 'react'
import './Landscape.css'

const Landscape = () => {
  return (
    <div className="landscape">

      {/* City */}
      <section className="landscape-section">
        <h2 className="section-title">City</h2>
        <div className="card-grid">
        <div className="card city-card-1">
          <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">Golden hour in the city of LA</p>
        </div>
          </div>

          <div className="card city-card-2">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Night time in New York</p>
            </div>
          </div>

          <div className="card city-card-3">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Flowers in Amsterdam</p>
            </div>
          </div>

        </div>
      </section>

      {/* Nature */}
      <section className="landscape-section">
        <h2 className="section-title">Nature</h2>
        <div className="card-grid">
          <div className="card nature-card-1">
            <div className="card-overlay">
              <span className="card-name">Ashton Lux</span>
              <p className="card-desc">Forest at dusk</p>
            </div>
          </div>
          <div className="card nature-card-2">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Urban landscape at dusk</p>
            </div>
          </div>
          <div className="card nature-card-3">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Urban landscape at dusk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sea */}
      <section className="landscape-section">
        <h2 className="section-title">Sea</h2>
        <div className="card-grid">
          <div className="card sea-card-1">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Urban landscape at dusk</p>
            </div>
          </div>
          <div className="card sea-card-2">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Urban landscape at dusk</p>
            </div>
          </div>
          <div className="card sea-card-3">
            <div className="card-overlay">
              <span className="card-name">James Lux</span>
              <p className="card-desc">Urban landscape at dusk</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Landscape