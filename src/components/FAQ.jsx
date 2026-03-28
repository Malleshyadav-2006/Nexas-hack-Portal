import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    { q: 'Who can participate?', a: 'Any student from any college across India is eligible to participate. We welcome beginners and pros alike!' },
    { q: 'What is the team size?', a: 'Teams must consist of 2 to 4 members. You can find teammates on our Discord or during the team formation phase.' },
    { q: 'Is it free to participate?', a: 'Yes, participation is completely free. We provide the platform, mentors, and prizes at no cost to you.' },
    { q: 'What should I bring?', a: 'Your laptop, charger, a water bottle, and your best ideas. We provide the snacks and the energy!' },
    { q: 'Will there be mentors?', a: 'Absolutely! Industry experts and senior developers will be available throughout the 48 hours to guide you.' }
  ]

  return (
    <section id="faq">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Got <span>Questions?</span>
        </motion.h2>

        {/* FAQ items — max 700px centered */}
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card"
                style={{ overflow: 'hidden', borderLeft: isOpen ? '3px solid #00F5D4' : '1px solid rgba(255,255,255,0.08)', transition: 'border 0.3s' }}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ flex: 1, fontSize: '1.05rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', textAlign: 'center' }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ fontSize: '1.5rem', color: '#00F5D4', lineHeight: 1, flexShrink: 0 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '0' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
