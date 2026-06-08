import React from 'react'
import './Weddings.css'

const Weddings = () => {
  return (
    <div className="weddings">
      {/*Using the same classNames from landscape.css allows for consistent styling since the css is global*/}

      {/*Ceremony*/}
      <section className="weddings-section">
      <h2 className="section-title">Ceremony</h2>
      <hr />
      <div className="card-grid">
       <div className="card ceremony-card-1">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">An elegant promise, sliding forever onto her finger.</p>
        </div>
       </div>

       <div className="card ceremony-card-2">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">Whispered vows captured in a single, breathless gaze.</p>
        </div>
       </div>

       <div className="card ceremony-card-3">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">Pure celebration, capturing their shared joy on our lens.</p>
        </div>
       </div>
      </div>
      </section>

      {/*Reception*/}
      <section className="weddings-section">
       <h2 className="section-title">Reception</h2>
       <hr />
        <div className="card-grid">
       <div className="card reception-card-1">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>

       <div className="card reception-card-2">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>

       <div className="card reception-card-3">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>
       </div>
      </section>

       {/*Potraits*/}
      <section className="weddings-section">
      <h2 className="section-title">Potraits</h2>
      <hr />
       <div className="card-grid">
       <div className="card potraits-card-1">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>

       <div className="card potraits-card-2">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>

       <div className="card potraits-card-3">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>
      </div>
      </section>



    </div>
  )
}

export default Weddings
