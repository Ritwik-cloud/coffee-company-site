import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { CupSoda } from 'lucide-react'

// Simplified Star component with fewer animation properties
const Star = ({ size, top, left, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top: `${top}%`,
        left: `${left}%`,
        boxShadow: `0 0 ${size}px rgba(255, 255, 255, 0.5)`
      }}
      animate={{
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Simplified cup animation variant 
const cupVariants = {
  animate: (custom) => ({
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: custom.duration,
        ease: "easeInOut",
      }
    }
  })
}

// Text animation variants
const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Special animation for the coffee title text
const coffeeTextVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    filter: ['hue-rotate(0deg)', 'hue-rotate(15deg)', 'hue-rotate(0deg)'],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function Hero() {
  // Reduce number of stars and use useMemo to prevent regeneration on each render
  const stars = useMemo(() => {
    const starsArray = [];
    // Reduce from 70 to 25 stars
    for (let i = 0; i < 25; i++) {
      starsArray.push({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 2
      });
    }
    return starsArray;
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <Star
            key={star.id}
            size={star.size}
            top={star.top}
            left={star.left}
            delay={star.delay}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        {/* Reduced to 2 cups instead of 3 */}
        <motion.div 
          className="absolute"
          style={{ top: '32%', right: '32%' }}
          custom={{ duration: 4 }}
          variants={cupVariants}
          animate="animate"
        >
          <CupSoda className="h-12 w-12 text-green-400/80" />
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ bottom: '30%', left: '25%' }}
          custom={{ duration: 3 }}
          variants={cupVariants}
          animate="animate"
        >
          <CupSoda className="h-14 w-14 text-green-300/60" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
          className="text-center max-w-2xl"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6"> 
            the Art of{" "}
            <motion.span 
              className="bg-gradient-to-r from-green-400 to-violet-500 bg-clip-text text-transparent bg-size-200"
              animate="animate"
              variants={coffeeTextVariants}
            >
              Coffee
            </motion.span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-200 text-lg md:text-xl mb-8">
            Experience the perfect blend of tradition and innovation with our carefully curated selection of premium coffee.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors duration-300"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
