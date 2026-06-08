import React from 'react'
import './Weddings.css'

const Weddings = () => {
  return (
    <div className="weddings">

      {/*Ceremony*/}
      <section className="weddings-section">
      <h2 className="section-title">Ceremony</h2>
      <hr />
      <div className="card-grid">
       <div className="card ceremony-card-1">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>

       <div className="card ceremony-card-2">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
        </div>
       </div>

       <div className="card ceremony-card-3">
        <div className="card-overlay">
          <span className="card-name">James Lux</span>
          <p className="card-desc">City Lights, Timeless Love</p>
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
