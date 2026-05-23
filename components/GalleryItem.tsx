
import React, { useRef } from 'react';
import { GalleryImage } from '../types';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } }
};

const textVariants = {
  initial: { y: 20, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Set rotation angles mapped from coordinates
  const rotateX = useTransform(mouseY, [-200, 200], [8, -8]);
  const rotateY = useTransform(mouseX, [-200, 200], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
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
    <motion.div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-accent h-full w-full border border-pastel-pink/50 bg-white"
      onClick={() => onClick(image)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(image);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View larger image for ${image.alt}`}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="w-full h-full relative"
      >
        {/* Glow border overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-xl transition-all duration-300 pointer-events-none z-20" />

        {/* Diagonal shine sweep effect */}
        <motion.div
          variants={{
            initial: { x: "-100%", y: "-100%" },
            hover: { 
              x: "100%", 
              y: "100%",
              transition: { duration: 0.8, ease: "easeInOut" }
            }
          }}
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-10"
        />

        <motion.img
          src={image.src}
          alt={image.alt}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover select-none"
        />
        <motion.div 
          variants={overlayVariants}
          initial="initial"
          className="absolute inset-0 bg-black bg-opacity-45 flex items-end p-6 z-10"
        >
          <motion.p 
            variants={textVariants}
            className="text-white text-lg font-serif font-bold text-left drop-shadow-md"
          >
            {image.alt}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryItem;
