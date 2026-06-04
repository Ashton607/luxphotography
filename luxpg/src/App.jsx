import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import PageTitles from './components/activetab/PageTitles'
import Hero from './components/hero/Hero'
import Landscape from './components/landscape/Landscape'
import Weddings from './components/weddings/Weddings'
import Portrait from './components/potrait/Potrait'

function App() {

  return (
    <Router>
       <Navbar/>
        <PageTitles/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="landscape" element={<Landscape/>} />
        <Route path="weddings" element={<Weddings />} />
        <Route path="portrait" element={<Portrait />} />
      </Routes>
    </Router>
  )
}

export default App
