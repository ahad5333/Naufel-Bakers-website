import React from 'react';
import { WheatIcon, ChefHatIcon, HeartHandIcon } from './icons/FeatureIcons';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const iconBackgroundVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.12, 
    rotate: [0, -10, 15, -5, 0],
    transition: { duration: 0.6 }
  }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">The Art of Baking</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
             We believe that the secret to happiness lies in the simple pleasure of a perfectly baked treat.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-12 md:grid-cols-3 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
           {/* Feature 1 */}
           <motion.div variants={featureVariants} whileHover="hover" className="flex flex-col items-center group cursor-default">
              <motion.div 
                variants={iconBackgroundVariants}
                className="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center text-brown-dark mb-6 shadow-lg border-4 border-white select-none relative z-10"
              >
                <WheatIcon className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-3">Premium Ingredients</h3>
              <p className="text-brown-light leading-relaxed px-4 text-base">
                We source only the finest flours, freshest dairy, and authentic chocolates to ensure every bite is pure perfection.
              </p>
           </motion.div>

           {/* Feature 2 */}
           <motion.div variants={featureVariants} whileHover="hover" className="flex flex-col items-center group cursor-default">
              <motion.div 
                variants={iconBackgroundVariants}
                className="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center text-brown-dark mb-6 shadow-lg border-4 border-white select-none relative z-10"
              >
                <ChefHatIcon className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-3">Master Craftsmanship</h3>
              <p className="text-brown-light leading-relaxed px-4 text-base">
                Our chefs combine traditional techniques with modern artistry, baking fresh batches in-house throughout the day.
              </p>
           </motion.div>

           {/* Feature 3 */}
           <motion.div variants={featureVariants} whileHover="hover" className="flex flex-col items-center group cursor-default">
               <motion.div 
                variants={iconBackgroundVariants}
                className="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center text-brown-dark mb-6 shadow-lg border-4 border-white select-none relative z-10"
              >
                <HeartHandIcon className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-brown-dark mb-3">Made with Love</h3>
              <p className="text-brown-light leading-relaxed px-4 text-base">
                More than just baking, we pour our heart into every creation, ensuring a taste that feels like a warm hug.
              </p>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
