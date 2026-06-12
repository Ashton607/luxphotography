import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Landscape from './components/landscape/Landscape'
import Weddings from './components/weddings/Weddings'
import Portrait from './components/potrait/Potrait'
import Footer from './components/footer/Footer'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="landscape" element={<Landscape/>} />
        <Route path="weddings" element={<Weddings />} />
        <Route path="portraits" element={<Portrait />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App