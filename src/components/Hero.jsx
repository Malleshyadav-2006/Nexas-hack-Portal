import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { UNSTOP_URL } from './Background'

/* ── Particle canvas ── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const N = 80
    const particles = Array.from({ length: N }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      r: 1.4,
      color: i < N * 0.3 ? '#00E5C8' : i < N * 0.6 ? '#6C4FF7' : '#ffffff'
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,229,200,${0.12 * (1 - dist / 110)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.55 }} />
}

/* ── Hero ── */
const Hero = () => {
  /* Countdown */
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const target = new Date(); target.setDate(target.getDate() + 30)
    const t = setInterval(() => {
      const d = target - Date.now()
      if (d < 0) return clearInterval(t)
      setTimeLeft({
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  /* Headline scramble */
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'
  const WORDS = ['BUILD', 'THE', 'FUTURE']
  const [headline, setHeadline] = useState(['', '', ''])
  useEffect(() => {
    const start = Date.now(); let raf
    const tick = () => {
      const elapsed = Date.now() - start
      if (elapsed > 1400) { setHeadline(WORDS); return }
      setHeadline(WORDS.map((word, wi) =>
        word.split('').map((ch, ci) => {
          const offset = [0, 5, 8][wi]
          return elapsed > (offset + ci) * 80 ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      ))
      setTimeout(() => { raf = requestAnimationFrame(tick) }, 50)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  /* Typewriter */
  const phrases = ['48 Hours. Unlimited Ideas. One Stage.', 'Build. Design. Dominate.', 'Code Your Legacy.']
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const full = phrases[phraseIdx]
    let t
    if (deleting) {
      if (typed.length > 0) t = setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 28)
      else { setDeleting(false); setPhraseIdx(p => (p + 1) % phrases.length) }
    } else {
      if (typed.length < full.length) t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 58)
      else t = setTimeout(() => setDeleting(true), 2200)
    }
    return () => clearTimeout(t)
  }, [typed, deleting, phraseIdx])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '100px',
      overflow: 'hidden',
      padding: '100px 24px 60px',
    }}>
      <ParticleCanvas />

      {/* Radial glow behind headline */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(108,79,247,0.14) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

        {/* IEEE badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px',
            background: 'rgba(108,79,247,0.12)',
            border: '1px solid rgba(108,79,247,0.3)',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontFamily: 'Orbitron, sans-serif',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '2px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E5C8', boxShadow: '0 0 8px #00E5C8' }} />
          IEEE COMPUTER SOCIETY · MITS GWALIOR
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(3rem, 10vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-1px',
            textShadow: '0 0 50px rgba(0,229,200,0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 20px',
          }}
        >
          <span style={{ color: '#fff' }}>{headline[0]}</span>
          <span style={{ color: '#fff' }}>{headline[1]}</span>
          <span style={{
            background: 'linear-gradient(90deg, #00E5C8, #6C4FF7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{headline[2]}</span>
        </motion.h1>

        {/* Typewriter subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {typed}
          <span style={{ display: 'inline-block', width: '2px', height: '22px', background: '#00E5C8', marginLeft: '4px', animation: 'pulseBorder 1s ease-in-out infinite' }} />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}
        >
          <a
            href={UNSTOP_URL}
            className="btn-shimmer"
            style={{
              padding: '14px 40px',
              background: 'linear-gradient(135deg, #00E5C8 0%, #6C4FF7 100%)',
              color: '#060812',
              fontWeight: 800,
              fontSize: '1rem',
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,229,200,0.3)',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '1px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,229,200,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,229,200,0.3)' }}
          >
            Register Now →
          </a>
          <a
            href="#about"
            style={{
              padding: '14px 40px',
              background: 'transparent',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '14px',
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.2)',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '1px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#6C4FF7'; e.currentTarget.style.color = '#6C4FF7'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', width: '100%', maxWidth: '520px' }}
        >
          {Object.entries(timeLeft).map(([label, val]) => (
            <div
              key={label}
              className="glass-card animate-pulse-border"
              style={{ padding: '20px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 900, fontFamily: 'Orbitron, sans-serif', color: '#00E5C8', lineHeight: 1 }}>
                {String(val).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '6px' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* NEXUS HACK 2K26 label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'Orbitron, sans-serif' }}
        >
          NEXUS HACK 2K26 · MAY 3–5, 2026
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
