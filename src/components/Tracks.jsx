import React from 'react'
import { Brain, Database, Activity, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const Tracks = () => {
  const tracks = [
    {
      title: 'AI & Machine Learning',
      desc: 'Build intelligent systems that learn and adapt to solve complex human challenges.',
      icon: <Brain className="text-[#00F5D4]" size={40} />
    },
    {
      title: 'Web3 & Blockchain',
      desc: 'Decentralize the world with smart contracts, dApps, and secure digital identities.',
      icon: <Database className="text-[#7B5EFF]" size={40} />
    },
    {
      title: 'HealthTech',
      desc: 'Innovate at the intersection of medicine and technology to save lives and improve care.',
      icon: <Activity className="text-[#00F5D4]" size={40} />
    },
    {
      title: 'Sustainability',
      desc: 'Create green solutions for climate change, energy efficiency, and a cleaner planet.',
      icon: <Globe className="text-[#7B5EFF]" size={40} />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  }

  return (
    <motion.section 
      id="tracks" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }} 
        className="section-title"
      >
        Explore <span>Tracks</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {tracks.map((track, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            className="glass-card p-10 flex flex-col items-start group"
          >
            <div className="p-4 rounded-xl bg-white/5 mb-6 group-hover:bg-[#00F5D4]/10 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] transition-all duration-300">
              <motion.div
                whileHover={{ rotate: 360, transition: { duration: 0.8, ease: "easeInOut" } }}
              >
                {track.icon}
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#00F5D4] transition-colors">
              {track.title}
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              {track.desc}
            </p>
            <div className="mt-8 h-1 w-0 bg-gradient-to-r from-[#00F5D4] to-[#7B5EFF] group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Tracks
