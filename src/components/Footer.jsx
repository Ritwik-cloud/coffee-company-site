import React from 'react'
import { Leaf, CupSoda as Cup, ShoppingBag, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  // Fade in animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Staggered children animation for social icons
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      <motion.footer 
        className="bg-gray-900 text-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div variants={fadeIn}>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-xl font-semibold">CoffeeHaven</span>
              </div>
              <p className="text-gray-400">Bringing you the finest coffees from around the world.</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Coffee Street</li>
                <li>Coffee City, TC 12345</li>
                <li>contact@teahaven.com</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <motion.div 
                className="flex space-x-4"
                variants={container}
              >
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  variants={item}
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  variants={item}
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  variants={item}
                  whileHover={{ scale: 1.2 }}
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
            variants={fadeIn}
            custom={1}
          >
            <p>&copy; 2024 CoffeeHaven. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

export default Footer