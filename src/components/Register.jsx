import React from 'react'
import { Instagram, Mail, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { UNSTOP_URL } from './Background'

const Register = () => {
  return (
    <section id="register" style={{ position: 'relative' }}>
      <div className="section-inner" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Join the <span>Battle</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.65)',
            textAlign: 'center',
            maxWidth: '540px',
            marginBottom: '48px',
            lineHeight: 1.8,
          }}
        >
          Ready to push your limits? Register now on Unstop and secure your place in the most awaited hackathon of 2026.
        </motion.p>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}
        >
          <motion.a
            href={UNSTOP_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shimmer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 52px',
              background: 'linear-gradient(135deg, #00E5C8 0%, #6C4FF7 100%)',
              color: '#060812',
              fontWeight: 800,
              fontSize: '1.1rem',
              borderRadius: '16px',
              textDecoration: 'none',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '1px',
              boxShadow: '0 8px 40px rgba(0,229,200,0.35), 0 2px 0 rgba(255,255,255,0.1) inset',
            }}
          >
            Register on Unstop <ExternalLink size={18} />
          </motion.a>
        </motion.div>

        {/* Glass card with email + info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card glow-pulse"
          style={{
            width: '100%',
            maxWidth: '580px',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* Email notification row */}
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textAlign: 'center', marginBottom: '4px' }}>
            Get event updates in your inbox
          </p>
          <div style={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: '1 1 200px',
                minWidth: 0,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '13px 18px',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#00E5C8'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                flexShrink: 0,
                padding: '13px 22px',
                background: 'rgba(0,229,200,0.12)',
                border: '1px solid rgba(0,229,200,0.3)',
                color: '#00E5C8',
                fontWeight: 700,
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,229,200,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,229,200,0.12)'}
            >
              Notify Me
            </motion.button>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
            Registration closes: <strong style={{ color: 'rgba(255,255,255,0.6)' }}>April 20th, 2026</strong>
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '28px',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          <a href="mailto:nexushack@ieee-mits.ac.in"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00E5C8'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <Mail size={16} color="#6C4FF7" /> nexushack@ieee-mits.ac.in
          </a>
          <a href="https://www.instagram.com/ieeecomputersocietymits/" target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E1306C'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <Instagram size={16} color="#E1306C" /> @ieeecomputersocietymits
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Register
