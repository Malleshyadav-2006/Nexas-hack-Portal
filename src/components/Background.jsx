import React, { useEffect, useRef } from 'react'

const UNSTOP_URL = 'https://unstop.com/o/w6x83Dd?lb=4ektQRcb&utm_medium=Share&utm_source=hackathons&utm_campaign=Malleshk7945'

/* ─── Shooting Stars Canvas ─── */
const ShootingStars = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = []
    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.6,
      len: Math.random() * 180 + 80,
      speed: Math.random() * 14 + 8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      opacity: 0,
      phase: 'in',
      tail: [],
      color: Math.random() > 0.6 ? '#00E5C8' : '#ffffff',
      width: Math.random() * 1.5 + 0.5,
    })

    for (let i = 0; i < 6; i++) {
      const s = createStar()
      s.x = Math.random() * canvas.width
      s.opacity = Math.random()
      stars.push(s)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Spawn new star randomly
      if (Math.random() < 0.018 && stars.length < 10) {
        stars.push(createStar())
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i]
        s.tail.unshift({ x: s.x, y: s.y })
        if (s.tail.length > 30) s.tail.pop()

        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed

        if (s.phase === 'in') {
          s.opacity = Math.min(s.opacity + 0.08, 1)
          if (s.opacity >= 1) s.phase = 'out'
        } else {
          s.opacity = Math.max(s.opacity - 0.025, 0)
        }

        if (s.opacity <= 0 || s.x > canvas.width + 200 || s.y > canvas.height + 200) {
          stars.splice(i, 1)
          continue
        }

        // Draw tail gradient
        const grad = ctx.createLinearGradient(
          s.tail[s.tail.length - 1]?.x ?? s.x, s.tail[s.tail.length - 1]?.y ?? s.y,
          s.x, s.y
        )
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(1, s.color)

        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = s.width
        ctx.globalAlpha = s.opacity * 0.85
        ctx.moveTo(s.tail[s.tail.length - 1]?.x ?? s.x, s.tail[s.tail.length - 1]?.y ?? s.y)
        s.tail.forEach(pt => ctx.lineTo(pt.x, pt.y))
        ctx.lineTo(s.x, s.y)
        ctx.stroke()

        // Bright head
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.width + 0.5, 0, Math.PI * 2)
        ctx.fillStyle = '#fff'
        ctx.globalAlpha = s.opacity
        ctx.shadowBlur = 12
        ctx.shadowColor = s.color
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.65,
      }}
    />
  )
}

/* ─── Floating Orbs ─── */
const FloatingOrbs = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
    {/* Top-left violet */}
    <div style={{
      position: 'absolute',
      top: '-10%', left: '-5%',
      width: '600px', height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(108,79,247,0.18) 0%, transparent 70%)',
      animation: 'orbFloat1 18s ease-in-out infinite',
      filter: 'blur(40px)',
    }} />
    {/* Bottom-right cyan */}
    <div style={{
      position: 'absolute',
      bottom: '-15%', right: '-8%',
      width: '700px', height: '700px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,229,200,0.13) 0%, transparent 70%)',
      animation: 'orbFloat2 22s ease-in-out infinite',
      filter: 'blur(50px)',
    }} />
    {/* Center pink accent */}
    <div style={{
      position: 'absolute',
      top: '40%', left: '60%',
      width: '350px', height: '350px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)',
      animation: 'orbFloat3 14s ease-in-out infinite',
      filter: 'blur(30px)',
    }} />
    {/* Top-right small cyan */}
    <div style={{
      position: 'absolute',
      top: '10%', right: '15%',
      width: '250px', height: '250px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,229,200,0.10) 0%, transparent 70%)',
      animation: 'orbFloat4 16s ease-in-out infinite',
      filter: 'blur(25px)',
    }} />
  </div>
)

/* ─── Aurora Bands ─── */
const Aurora = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', opacity: 0.4 }}>
    <div style={{
      position: 'absolute',
      top: '-30%', left: '-20%',
      width: '140%', height: '80%',
      background: 'conic-gradient(from 180deg at 50% 70%, rgba(0,229,200,0.15), rgba(108,79,247,0.18), rgba(255,45,120,0.08), rgba(0,229,200,0.12), transparent)',
      borderRadius: '50%',
      animation: 'auroraRotate 30s linear infinite',
      filter: 'blur(60px)',
      transformOrigin: '50% 60%',
    }} />
  </div>
)

/* ─── Grid Lines ─── */
const GridLines = () => (
  <div style={{
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(rgba(0,229,200,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,229,200,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 75%)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 75%)',
  }} />
)

/* ─── Main Background component ─── */
export { ShootingStars, FloatingOrbs, Aurora, GridLines, UNSTOP_URL }
