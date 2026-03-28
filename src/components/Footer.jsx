import React from 'react'
import { Instagram, Linkedin, Twitter, Mail, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { UNSTOP_URL } from './Background'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Register', href: '#register' },
  ]

  const socialLinks = [
    {
      Icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/ieeecomputersocietymits/',
      color: '#E1306C'
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ieee-computer-society-mits-gwalior',
      color: '#0A66C2'
    },
    {
      Icon: Twitter,
      label: 'Twitter / X',
      href: 'https://twitter.com/ieeecompsocmits',
      color: '#1DA1F2'
    },
    {
      Icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ieee-cs-mits',
      color: '#ffffff'
    },
  ]

  return (
    <footer style={{
      background: 'linear-gradient(to bottom, #060812, #030508)',
      borderTop: '1px solid rgba(0,229,200,0.10)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 40px' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
          alignItems: 'start',
        }}>

          {/* Brand + description */}
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: '2rem',
              letterSpacing: '-1px',
              marginBottom: '16px',
              lineHeight: 1
            }}>
              <span style={{ color: '#fff' }}>NEXUS</span>
              <span style={{ color: '#00E5C8', textShadow: '0 0 14px rgba(0,229,200,0.7)', marginLeft: '6px' }}>HACK</span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              maxWidth: '240px',
              marginBottom: '20px'
            }}>
              A national-level hackathon by <strong style={{ color: 'rgba(255,255,255,0.8)' }}>IEEE Computer Society</strong>, MITS Gwalior.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'rgba(0,229,200,0.08)',
              border: '1px solid rgba(0,229,200,0.2)',
              borderRadius: '20px',
              fontSize: '0.75rem',
              color: '#00E5C8',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '1px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E5C8', boxShadow: '0 0 8px #00E5C8', flexShrink: 0 }} />
              REGISTRATION OPEN
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#00E5C8'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="mailto:nexushack@ieee-mits.ac.in"
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem',
                  textDecoration: 'none', transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#00E5C8'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <Mail size={15} color="#6C4FF7" style={{ flexShrink: 0 }} />
                nexushack@ieee-mits.ac.in
              </a>
              <a
                href="https://www.instagram.com/ieeecomputersocietymits/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem',
                  textDecoration: 'none', transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#E1306C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <Instagram size={15} color="#E1306C" style={{ flexShrink: 0 }} />
                @ieeecomputersocietymits
              </a>
              <a
                href={UNSTOP_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem',
                  textDecoration: 'none', transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#00E5C8'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <ExternalLink size={15} color="#00E5C8" style={{ flexShrink: 0 }} />
                Register on Unstop
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socialLinks.map(({ Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem',
                    textDecoration: 'none', transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = color}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  <div style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={16} />
                  </div>
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
            © 2026 NEXUS HACK — All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00E5C8'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
            >Privacy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00E5C8'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
            >Terms</a>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
              Made with ❤️ by <span style={{ color: '#00E5C8' }}>IEEE CS MITS Gwalior</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
