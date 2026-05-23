import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Set rotation angles mapped from coordinates
  const rotateX = useTransform(mouseY, [-200, 200], [12, -12]);
  const rotateY = useTransform(mouseX, [-200, 200], [-12, 12]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relativeX = event.clientX - centerX;
    const relativeY = event.clientY - centerY;
    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-24 bg-pastel-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg text-brown-dark leading-relaxed font-sans">
              Naufel Bakers began with a simple passion: to share the joy of traditional baking with our community. Founded in a small kitchen, our dream was to create a place where the aroma of fresh bread and the taste of a warm pastry could bring a smile to anyone's face.
            </p>
            <p className="mt-4 text-lg text-brown-dark leading-relaxed font-sans">
              Today, we continue that tradition, using only the finest ingredients and time-honored recipes passed down through generations. Every loaf, cake, and cookie is a piece of our heart, baked with dedication and a commitment to quality. We believe in baking happiness, one delicious treat at a time.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: 1000 }}
              className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] flex items-center justify-center select-none"
            >
              {/* Rotating outer decorative golden dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-accent rounded-full opacity-40 pointer-events-none"
              />
              
              {/* Pulsing inner gradient blur */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 bg-gradient-to-tr from-accent to-cream rounded-full filter blur-md pointer-events-none"
              />

              {/* 3D Tilting rounded image container */}
              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="w-[88%] h-[88%] relative z-10 cursor-pointer"
              >
                <img 
                  className="rounded-full shadow-2xl object-cover w-full h-full border-4 border-white pointer-events-none"
                  src="/baker_boy.png" 
                  alt="Lead Indian Baker at Naufel Bakers" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
