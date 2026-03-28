import React from 'react'
import { Trophy, Award, Medal } from 'lucide-react'
import { motion } from 'framer-motion'

const Prizes = () => {
  const prizeData = [
    {
      title: '2nd Place',
      amount: '₹40,000',
      icon: <Award size={64} className="text-[#C0C0C0]" />,
      accent: '#C0C0C0',
      shadow: '0 0 30px rgba(192, 192, 192, 0.2)'
    },
    {
      title: '1st Place',
      amount: '₹75,000',
      icon: <Trophy size={80} className="text-[#FFD700]" />,
      accent: '#FFD700',
      shadow: '0 0 50px rgba(255, 215, 0, 0.4)',
      highlight: true
    },
    {
      title: '3rd Place',
      amount: '₹20,000',
      icon: <Medal size={64} className="text-[#CD7F32]" />,
      accent: '#CD7F32',
      shadow: '0 0 30px rgba(205, 127, 50, 0.2)'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  }

  return (
    <motion.section 
      id="prizes" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 
        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
        className="section-title"
      >
        Win <span>Big</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-20">
        {prizeData.map((prize, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            className={`glass-card p-10 flex flex-col items-center text-center relative overflow-hidden group ${prize.highlight ? 'md:py-16 border-t-8 border-t-[#FFD700] ring-4 ring-[#FFD700]/10' : 'border-t-4 border-t-white/10 opacity-80'}`}
          >
            {prize.highlight && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-pulse"></div>
            )}
            
            <motion.div 
              whileHover={{ rotateY: 180, transition: { duration: 0.6 } }}
              className="mb-6 transform group-hover:scale-110 transition-transform duration-500"
            >
              {prize.icon}
            </motion.div>
            
            <h3 className="text-2xl font-bold font-heading mb-2 text-white/70">
              {prize.title}
            </h3>
            
            <p className="text-4xl md:text-5xl font-black font-heading text-white">
              {prize.amount}
            </p>
            
            <div className="mt-8 flex flex-col gap-2 w-full text-sm text-white/50">
              <div className="h-px bg-white/10 w-full mb-4"></div>
              <span>Exclusive Trophy</span>
              <span>Premium Swag Kit</span>
              <span>Internship Opportunities</span>
            </div>

            {prize.highlight && (
              <div className="mt-8 px-6 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FFD700]/20 transition-colors">
                Top Recognition
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Prizes
