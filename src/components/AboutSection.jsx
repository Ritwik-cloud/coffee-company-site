import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Fade in animation for section title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  // Fade in animation for content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Item variants for staggered children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Image hover animation
  const imageHoverVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="px-4 py-10 md:py-20 max-h-screen mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Grid with staggered fade-in */}
        <motion.div
          className="grid grid-cols-2 grid-rows-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={contentVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="row-span-2 overflow-hidden rounded-lg"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
              alt="coffee being stirred"
              className="w-full h-full object-cover"
              loading="lazy"
              variants={imageHoverVariants}
            />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="row-span-1 overflow-hidden rounded-lg"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
              alt="coffee being stirred"
              className="w-full h-full object-cover"
              loading="lazy"
              variants={imageHoverVariants}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="overflow-hidden rounded-lg"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
              alt="Pouring coffee"
              className="w-full h-full object-cover"
              loading="lazy"
              variants={imageHoverVariants}
            />
          </motion.div>
        </motion.div>

        {/* Text Content with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={titleVariants}>
            <p className="text-green-600 text-lg font-semibold mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              The success history of Coffee House in 25 years
            </h2>
            <hr className="border-t-2 border-green-500 w-24 mb-8" />
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={contentVariants}
          >
            {/* First Row */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 items-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover="hover"
                className="overflow-hidden rounded-md"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
                  alt="Loose leaf coffee"
                  className="w-full md:w-32 h-24 object-cover"
                  loading="lazy"
                  variants={imageHoverVariants}
                />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Our coffee is one of the most popular drinks in the world
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                </p>
              </div>
            </motion.div>

            {/* Second Row */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse gap-4 items-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover="hover"
                className="overflow-hidden rounded-md"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
                  alt="Glass coffee pot"
                  className="w-full md:w-32 h-24 object-cover"
                  loading="lazy"
                  variants={imageHoverVariants}
                />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Daily use of a cup of coffee is good for your health
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
