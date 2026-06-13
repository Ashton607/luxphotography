import React, { useState, useEffect } from "react";
import './Packages.css'

const packages = [
  {
    name: 'Essential',
    price: 'R299',
    description: 'Perfect for intimate moments and personal portraits.',
    features: [
      '2 Hour Session',
      '1 Location',
      '50 Edited Photos',
      'Online Gallery',
      'Print Release',
    ],
  },
  {
    name: 'Professional',
    price: 'R499',
    description: 'Ideal for weddings, events and editorial shoots.',
    features: [
      '6 Hour Session',
      '3 Locations',
      '200 Edited Photos',
      'Online Gallery',
      'Print Release',
      'Same Day Previews',
      'Engagement Shoot',
    ],
    featured: true,
  },
  {
    name: 'Prestige',
    price: 'R999',
    description: 'The ultimate luxury experience, tailored entirely to you.',
    features: [
      'Full Day Session',
      'Unlimited Locations',
      '500 Edited Photos',
      'Private Online Gallery',
      'Print Release',
      'Same Day Previews',
      'Engagement Shoot',
      'Album & Prints Included',
      'Dedicated Stylist',
    ],
  },
]

const Packages = () => {


      useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const h2 = entry.target.querySelector('.packages-title')
          const hr = entry.target.querySelector('.packages-divider');
          const p = entry.target.querySelector('.packages-subtitle');
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
    
      const Packages = document.querySelector('.packages');
      if (Packages) {
        observer.observe(Packages);
      }
    
      return () => observer.disconnect();
    }, []);

  return (
    <div className="packages">
      <div className="packages-header">
        <h2 className="packages-title">Choose your experience</h2>
        <hr className="packages-divider" />
        <p className="packages-subtitle">
          Every package is crafted to deliver timeless imagery<br />
          with an experience as beautiful as the photographs.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`pkg-card ${pkg.featured ? 'featured' : ''}`}>
            {pkg.featured && <span className="pkg-badge">Most Popular</span>}

            <div className="pkg-top">
              <h3 className="pkg-name">{pkg.name}</h3>
              <p className="pkg-desc">{pkg.description}</p>
              <div className="pkg-price">
                <span className="pkg-amount">{pkg.price}</span>
                <span className="pkg-per">/ session</span>
              </div>
            </div>

            <div className="pkg-divider" />

            <ul className="pkg-features">
              {pkg.features.map((feature) => (
                <li key={feature}>
                  <span className="pkg-check">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Packages