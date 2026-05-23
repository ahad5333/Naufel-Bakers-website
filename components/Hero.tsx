import React from 'react';
import { WHATSAPP_URL } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingElement: React.FC<{ delay?: number; duration?: number; className?: string; children: React.ReactNode }> = ({ delay = 0, duration = 8, className, children }) => (
  <motion.div
    animate={{
      y: [0, -25, 0],
      x: [0, 15, -15, 0],
      rotate: [0, 15, -15, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute pointer-events-none select-none opacity-20 ${className}`}
  >
    {children}
  </motion.div>
);

const Hero: React.FC = () => {
  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById('menu');

    if (targetElement) {
      const headerOffset = 80; // Match header's offset for consistent scrolling
      const elementPosition = targetElement.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.18]);
  const opacityBg = useTransform(scrollY, [0, 800], [0.65, 0.45]);

  return (
    <section id="home" className="relative min-h-screen lg:h-screen flex items-center justify-start overflow-hidden bg-cream px-4 md:px-12 lg:px-24 py-24 lg:py-0">
      {/* Parallax background image and overlay */}
      <motion.img 
        src="/hero_bakery.png" 
        alt="Artisanal Bakery Showcase" 
        className="absolute inset-0 w-full h-full object-cover select-none"
        style={{ y: yBg, scale: scaleBg }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/5 z-0" 
      />
      
      {/* Floating Decorative Elements */}
      <FloatingElement className="top-1/4 left-1/12 w-12 h-12 text-accent" delay={0} duration={10}>
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8l-2-2 1.41-1.41L10 9.17l5.59-5.59L17 5l-7 7z" opacity="0.3"/><path d="M12 3c-1.2 0-2.4 1.1-3 2.5C8.4 4.1 7.2 3 6 3 3.8 3 2 4.8 2 7c0 4.2 4.3 7.8 10 13 5.7-5.2 10-8.8 10-13 0-2.2-1.8-4-4-4-1.2 0-2.4 1.1-3 2.5C14.4 4.1 13.2 3 12 3z"/></svg>
      </FloatingElement>
      <FloatingElement className="bottom-1/4 right-1/10 w-16 h-16 text-accent" delay={2} duration={12}>
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
      </FloatingElement>
      <FloatingElement className="top-1/5 right-1/6 w-10 h-10 text-accent" delay={4} duration={8}>
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M12 2L1 21h22L12 2zm0 4.87L19.13 19H4.87L12 6.87z"/></svg>
      </FloatingElement>

      <motion.div 
        initial={{ opacity: 0, x: -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.1 }}
        whileHover={{ y: -5, boxShadow: "0 30px 60px -15px rgba(12, 24, 58, 0.25)" }}
        className="relative z-10 p-8 md:p-10 max-w-xl rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl text-left text-brown-dark transition-all duration-300"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-3 text-brown-dark leading-tight"
        >
          Freshly Baked Happiness <span className="text-accent">♡</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl font-serif italic text-accent font-semibold"
        >
          Made with love, every day.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] bg-accent/40 my-4 rounded-full"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base mb-8 text-brown-light font-sans font-medium leading-relaxed"
        >
          At Naufel Bakers, we believe that the best moments in life are made sweeter with freshly baked treats.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-start gap-4"
        >
          <motion.a 
            href="#menu"
            onClick={handleMenuClick}
            whileHover={{ scale: 1.03, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brown-dark text-white hover:bg-accent hover:text-brown-dark px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
          >
            Discover Our Menu <span className="text-base">→</span>
          </motion.a>
          
          <motion.a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, translateY: -2, backgroundColor: "rgba(12, 24, 58, 0.06)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent border-2 border-brown-dark text-brown-dark px-6 py-3 rounded-full text-sm font-bold transition-all w-full sm:w-auto text-center flex items-center justify-center"
          >
            Order Online
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated Organic Waves (Multi-Layered & Fluid) */}
      {/* Layer 1: Slow Back Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] md:h-[90px] overflow-hidden leading-[0] z-10 pointer-events-none select-none">
        <div className="flex w-[200%] h-full animate-wave-left-slow">
          <svg className="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C300,10 900,110 1200,50 L1200,120 L0,120 Z" className="fill-pastel-pink/35"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C300,10 900,110 1200,50 L1200,120 L0,120 Z" className="fill-pastel-pink/35"></path>
          </svg>
        </div>
      </div>

      {/* Layer 2: Medium Middle Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[40px] md:h-[75px] overflow-hidden leading-[0] z-20 pointer-events-none select-none">
        <div className="flex w-[200%] h-full animate-wave-right-mid">
          <svg className="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,45 C300,110 900,10 1200,45 L1200,120 L0,120 Z" className="fill-pastel-pink/55"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,45 C300,110 900,10 1200,45 L1200,120 L0,120 Z" className="fill-pastel-pink/55"></path>
          </svg>
        </div>
      </div>

      {/* Layer 3: Solid Foreground Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[60px] overflow-hidden leading-[0] z-30 pointer-events-none select-none">
        <div className="flex w-[200%] h-full animate-wave-left-fast">
          <svg className="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C300,90 900,20 1200,50 L1200,120 L0,120 Z" className="fill-pastel-pink"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C300,90 900,20 1200,50 L1200,120 L0,120 Z" className="fill-pastel-pink"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
