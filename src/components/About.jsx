import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ endValue, suffix = "", prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let frameId
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let startTime = null
        const tick = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(ease * endValue))
          if (progress < 1) frameId = requestAnimationFrame(tick)
        }
        frameId = requestAnimationFrame(tick)
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => { observer.disconnect(); if (frameId) cancelAnimationFrame(frameId) }
  }, [endValue, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const About = () => {
  const stats = [
    { number: 500, suffix: '+', prefix: '', label: 'Participants' },
    { number: 48, suffix: ' Hrs', prefix: '', label: 'Duration' },
    { number: 2, suffix: 'L+', prefix: '₹', label: 'Prize Pool' }
  ]

  return (
    <section id="about">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Why <span>NEXUS HACK?</span>
        </motion.h2>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, staggerChildren: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '64px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card"
              style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderBottom: '4px solid #7B5EFF' }}
            >
              <h3 style={{ fontSize: '3.5rem', fontWeight: 900, fontFamily: 'Orbitron,sans-serif', marginBottom: '12px', color: '#fff' }}>
                <AnimatedCounter endValue={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              <p style={{ fontSize: '1rem', color: '#00F5D4', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Text + Box Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
              NEXUS HACK 2K26 is more than just a competition; it's a collaborative ecosystem where minds from all over the country converge to solve real-world problems. Organized by the <strong style={{ color: '#fff' }}>IEEE Computer Society MITS Gwalior</strong>, we aim to push the boundaries of technology and innovation.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Whether you are a seasoned developer or a curious beginner, this stage welcomes your vision. Join us for an exhilarating 48-hour journey of building, learning, and networking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            style={{ minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', background: 'linear-gradient(135deg, rgba(0,245,212,0.08), rgba(123,94,255,0.12))' }}
          >
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: '64px', marginBottom: '16px' }}
              >🚀</motion.div>
              <h4 style={{ fontFamily: 'Orbitron,sans-serif', fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>IEEE CS MITS</h4>
              <p style={{ color: '#00F5D4', fontSize: '0.95rem' }}>Innovation Hub</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
