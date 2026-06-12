import React, { useState, useEffect, useRef } from "react";
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sofia Delgado',
    role: 'Bride, 2024',
    text: 'Every single photo felt like a painting. Lux Studios captured emotions we did not even know we were feeling. Our wedding album is something we will treasure forever.',
  },
  {
    name: 'Marcus & Leila',
    role: 'Couple Portrait Session',
    text: 'We were nervous in front of the camera but the team made us feel so comfortable. The results were breathtaking — natural, intimate, and timeless.',
  },
  {
    name: 'Priya Nair',
    role: 'Editorial Client',
    text: 'The attention to light and detail is unmatched. My editorial shoot exceeded every expectation. These are not just photographs, they are works of art.',
  },
  {
    name: 'James Okonkwo',
    role: 'Corporate Portrait',
    text: 'Professional, creative, and incredibly talented. The portraits elevated my entire brand. I have received more compliments on my headshots than anything else.',
  },
  {
    name: 'Amara Liu',
    role: 'Wedding Client, 2023',
    text: 'From the first consultation to the final delivery, every step felt personal and thoughtful. Lux Studios truly understands how to tell a story through images.',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === testimonials.length - 1 ? 0 : i + 1))

  const getIndex = (offset) => (current + offset + testimonials.length) % testimonials.length

   {/*Testimonials*/}
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const h2 = entry.target.querySelector('.testimonials-title')
        const hr = entry.target.querySelector('.testimonials-divider')
        const p = entry.target.querySelector('.t-card.center .t-text')
        const span = entry.target.querySelector('.t-name')
        
        if (entry.isIntersecting) {
          h2.classList.add('animate-in');
          hr.classList.add('animate-in');
          p.classList.add('animate-in');
          span.classList.add('animate-in');
        } else {
          h2.classList.remove('animate-in');
          hr.classList.remove('animate-in');
          p.classList.remove('animate-in');
          span.classList.remove('animate-in');
        }
      });
    }, { threshold: 0.1 });
  
    const Testimonials = document.querySelector('.testimonials');
    if (Testimonials) {
      observer.observe(Testimonials);
    }
  
    return () => observer.disconnect();
  }, []);

  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Words from our clients</h2>
        <hr className="testimonials-divider" />
      </div>

      <div className="testimonials-carousel">

        <div className="t-card side left">
          <p className="t-text">"{testimonials[getIndex(-1)].text}"</p>
          <div className="t-author">
            <span className="t-name">{testimonials[getIndex(-1)].name}</span>
            <span className="t-role">{testimonials[getIndex(-1)].role}</span>
          </div>
        </div>

        <div className="t-card center">
          <div className="t-quote">❝</div>
          <p className="t-text">"{testimonials[current].text}"</p>
          <div className="t-author">
            <span className="t-name">{testimonials[current].name}</span>
            <span className="t-role">{testimonials[current].role}</span>
          </div>
        </div>

        <div className="t-card side right">
          <p className="t-text">"{testimonials[getIndex(1)].text}"</p>
          <div className="t-author">
            <span className="t-name">{testimonials[getIndex(1)].name}</span>
            <span className="t-role">{testimonials[getIndex(1)].role}</span>
          </div>
        </div>

      </div>

      <div className="testimonials-controls">
        <button className="t-btn" onClick={prev}>&#8592;</button>
        <div className="t-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`t-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button className="t-btn" onClick={next}>&#8594;</button>
      </div>
    </div>
  )
}

export default Testimonials