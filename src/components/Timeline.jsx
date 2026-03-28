import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const events = [
    { date: 'April 10', title: 'Registrations Open', desc: 'Secure your spot in the national-level battle.' },
    { date: 'April 20', title: 'Team Formation Deadline', desc: 'Last day to finalize your squad of 2-4 members.' },
    { date: 'April 28', title: 'Problem Statements Released', desc: 'Choose your weapon (track) and start brainstorming.' },
    { date: 'May 3', title: 'Hackathon Begins', desc: '48 hours of non-stop building, coding, and innovation.' },
    { date: 'May 5', title: 'Results & Prizes', desc: 'Celebrating victory and distributing the ₹2L+ prize pool.' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.tl-card').forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Event <span>Timeline</span>
        </motion.h2>

        {/* Timeline container — full width of section-inner */}
        <div style={{ position: 'relative' }}>

          {/* Vertical center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, #00F5D4, #7B5EFF, #00F5D4)',
            zIndex: 0
          }} />

          {events.map((event, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', minHeight: '100px', position: 'relative', zIndex: 1 }}>

                {/* LEFT HALF */}
                <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' }}>
                  {isLeft && (
                    <div
                      className="tl-card glass-card"
                      style={{
                        opacity: 0,
                        transform: 'translateX(-40px)',
                        width: '100%',
                        maxWidth: '380px',
                        padding: '20px 24px',
                        borderLeft: '4px solid #00F5D4'
                      }}
                    >
                      <div style={{ color: '#00F5D4', fontFamily: 'Orbitron,sans-serif', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>{event.date}</div>
                      <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{event.title}</div>
                      <div style={{ color: '#a0a0b8', fontSize: '13px', lineHeight: 1.5 }}>{event.desc}</div>
                    </div>
                  )}
                </div>

                {/* DOT */}
                <div style={{
                  flexShrink: 0,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#00F5D4',
                  boxShadow: '0 0 14px rgba(0,245,212,0.8)',
                  zIndex: 2,
                  position: 'relative'
                }} className="animate-dot-pulse" />

                {/* RIGHT HALF */}
                <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '40px' }}>
                  {!isLeft && (
                    <div
                      className="tl-card glass-card"
                      style={{
                        opacity: 0,
                        transform: 'translateX(40px)',
                        width: '100%',
                        maxWidth: '380px',
                        padding: '20px 24px',
                        borderLeft: '4px solid #7B5EFF'
                      }}
                    >
                      <div style={{ color: '#00F5D4', fontFamily: 'Orbitron,sans-serif', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>{event.date}</div>
                      <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{event.title}</div>
                      <div style={{ color: '#a0a0b8', fontSize: '13px', lineHeight: 1.5 }}>{event.desc}</div>
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Timeline
