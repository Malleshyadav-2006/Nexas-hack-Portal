import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tracks from './components/Tracks'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import FAQ from './components/FAQ'
import Register from './components/Register'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { StaticStars, ShootingStars, FloatingOrbs, Aurora, GridLines } from './components/Background'

function App() {
  return (
    <div className="app-container">
      {/* ── Global Background Layers (fixed, behind everything) ── */}
      <StaticStars />
      <Aurora />
      <FloatingOrbs />
      <GridLines />
      <ShootingStars />

      {/* ── Custom Line / Ribbon Cursor (topmost) ── */}
      <CustomCursor />

      {/* ── App Content ── */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <FAQ />
        <Register />
      </main>
      <Footer />
    </div>
  )
}

export default App
