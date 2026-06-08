import React from 'react'
import './Landscape.css'

const Landscape = () => {
  return (
    <div className="landscape">

      {/* City */}
      <section className="landscape-section">
        <h2 className="section-title">City</h2>
        <hr />
        <div className="card-grid">
        <div className="card city-card-1">
          <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
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
        <hr />
        <div className="card-grid">
          <div className="card nature-card-1">
            <div className="card-overlay">
              <span className="card-name">Ashton.B_Jordan</span>
              <p className="card-desc">A quiet moment beneath the trees.</p>
            </div>
          </div>
          <div className="card nature-card-2">
            <div className="card-overlay">
              <span className="card-name">Ashton.B_Jordan</span>
              <p className="card-desc">Together Beneath Nature's Embrace</p>
            </div>
          </div>
          <div className="card nature-card-3">
            <div className="card-overlay">
              <span className="card-name">Ashton.B_Jordan</span>
              <p className="card-desc">A photographer's eye, a sunset's glow, and a lakeside stillness woven into a single unforgettable scene.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sea */}
      <section className="landscape-section">
        <h2 className="section-title">Sea</h2>
        <hr />
        <div className="card-grid">
          <div className="card sea-card-1">
            <div className="card-overlay">
              <span className="card-name">Ashton.B_Jordan</span>
              <p className="card-desc">Serene elegance by the shore.</p>
            </div>
          </div>
          <div className="card sea-card-2">
            <div className="card-overlay">
              <span className="card-name">Ashton.B_Jordan</span>
              <p className="card-desc">We capture every moment.</p>
            </div>
          </div>
          <div className="card sea-card-3">
            <div className="card-overlay">
              <span className="card-name">Ashton.B_Jordan</span>
              <p className="card-desc">We always capture your smile.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Landscape