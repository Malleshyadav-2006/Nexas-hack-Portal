import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { UNSTOP_URL } from './Background'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    sections.forEach(s => obs.observe(s))
    return () => sections.forEach(s => obs.unobserve(s))
  }, [])

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: isScrolled ? '12px 0' : '20px 0',
          background: isScrolled
            ? 'rgba(6,8,18,0.85)'
            : 'linear-gradient(to bottom, rgba(6,8,18,0.7), transparent)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(0,229,200,0.12)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1px' }}>
              <span style={{ color: '#fff' }}>NEXUS</span>
              <span style={{
                color: '#00E5C8',
                textShadow: '0 0 16px rgba(0,229,200,0.7)',
                marginLeft: '6px'
              }}>HACK</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden-mobile">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: isActive ? '#00E5C8' : 'rgba(255,255,255,0.7)',
                    background: isActive ? 'rgba(0,229,200,0.08)' : 'transparent',
                    border: isActive ? '1px solid rgba(0,229,200,0.2)' : '1px solid transparent',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {link.name}
                </a>
              )
            })}

            {/* CTA Register Button */}
            <a
              href={UNSTOP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer"
              style={{
                marginLeft: '8px',
                padding: '9px 22px',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#060812',
                background: 'linear-gradient(135deg, #00E5C8 0%, #6C4FF7 100%)',
                boxShadow: '0 4px 20px rgba(0,229,200,0.25)',
                transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,229,200,0.5)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,229,200,0.25)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              ✦ Register
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{
              background: 'none', border: 'none', color: '#fff',
              padding: '8px', cursor: 'none', zIndex: 1010,
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(6,8,18,0.97)',
              backdropFilter: 'blur(24px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {[...links, { name: 'Register', href: '#register' }].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: link.name === 'Register' ? '#00E5C8' : '#fff',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
