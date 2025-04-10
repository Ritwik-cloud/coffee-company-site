import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShoppingBag, Menu, X, User } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      if (!scrolled) setScrolled(true);
    } else {
      if (scrolled) setScrolled(false);
    }
  }, [scrolled]);

  // Track scroll position with debounced scroll handler
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Background and text colors based on scroll position
  const bgColor = scrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-black/50 backdrop-blur-sm";
  const textColor = scrolled ? "text-gray-600" : "text-white";
  const brandColor = scrolled ? "text-gray-800" : "text-white";
  const borderColor = scrolled ? "border-gray-300" : "border-gray-700";

  // Logo animation variant
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  // Navigation links animation variants with stagger effect
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // Scroll transition animation for the entire navbar
  const navbarVariants = {
    initial: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: { duration: 0.4 }
    },
    notScrolled: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      boxShadow: "none",
      transition: { duration: 0.4 }
    }
  };

  return (
    <div>
      <motion.nav 
        className={`fixed w-full z-50 transition-colors duration-300`}
        initial="initial"
        animate={scrolled ? "scrolled" : "notScrolled"}
        variants={navbarVariants}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              variants={logoVariants}
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className={`text-2xl font-semibold ${brandColor}`}>CoffeeHaven</span>
            </motion.div>
            
            {/* Desktop Menu */}
            <motion.div 
              className="hidden md:flex space-x-8"
              initial="hidden"
              animate="visible"
              variants={navContainerVariants}
            >
              <motion.a 
                href="#" 
                className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
              >
                Home
              </motion.a>
              <motion.a 
                href="#products" 
                className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
              >
                Products
              </motion.a>
              <motion.a 
                href="#about" 
                className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#contact" 
                className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
              >
                Contact
              </motion.a>
            </motion.div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button 
                className={`hidden md:flex items-center space-x-2 ${textColor} hover:text-green-600 transition-colors duration-300`}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </motion.button>
              <motion.button 
                className="hidden md:flex bg-green-600 text-white px-6 py-2 rounded-full items-center space-x-2 hover:bg-green-700 transition-colors duration-300"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Enquiry</span>
              </motion.button>
              <motion.button 
                onClick={toggleMenu}
                className={`md:hidden ${textColor} hover:text-green-600 transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? 
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div> 
                  : 
                  <Menu className="h-6 w-6" />
                }
              </motion.button>
            </div>
          </div>
        </div>
   
        {/* Mobile Menu - Only animate height for better performance */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${scrolled ? "bg-white" : "bg-black/90"} border-t`}
            >
              <motion.div 
                className="container mx-auto px-4 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="flex flex-col space-y-4"
                  variants={navContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.a 
                    href="#" 
                    onClick={toggleMenu} 
                    className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                    variants={navItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    Home
                  </motion.a>
                  <motion.a 
                    href="#products" 
                    onClick={toggleMenu} 
                    className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                    variants={navItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    Products
                  </motion.a>
                  <motion.a 
                    href="#about" 
                    onClick={toggleMenu} 
                    className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                    variants={navItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    About
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    onClick={toggleMenu} 
                    className={`${textColor} hover:text-green-600 transition-colors duration-300`}
                    variants={navItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    Contact
                  </motion.a>
                  <motion.button 
                    className={`border ${borderColor} ${textColor} px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100/10 transition-colors duration-300`}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </motion.button>
                  <motion.button 
                    className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Enquiry</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar