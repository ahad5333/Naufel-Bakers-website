
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, WHATSAPP_URL } from '../constants';
import { useCart } from '../context/CartContext';
import { CartIcon } from './icons/CartIcon';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(NAV_LINKS[0].href);
  const { toggleCart, items } = useCart();

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Scroll Progress Bar Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handles smooth scrolling to the section
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Approximate height of the sticky header
      const elementPosition = targetElement.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      // Close mobile menu if it's open
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Logic for changing header background on scroll
      setIsScrolled(window.scrollY > 10);

      // Logic for highlighting the active navigation link
      const headerOffset = 90; // A bit more room
      let currentSectionHref = activeLink;

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - headerOffset) {
            currentSectionHref = link.href;
          }
        }
      }

      // If scrolled to the very bottom, ensure the last link is active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentSectionHref = NAV_LINKS[NAV_LINKS.length - 1].href;
      }
      
      if (activeLink !== currentSectionHref) {
        setActiveLink(currentSectionHref);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]); 

  return (
    <>
      {/* Physics-based Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />
      <header className="sticky top-0 z-50 bg-brown-dark shadow-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-serif font-bold text-accent cursor-pointer">
              Naufel Bakers
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                    activeLink === link.href ? 'text-accent font-bold scale-105' : 'text-gray-300 hover:text-white hover:font-medium'
                  } transition-all duration-200`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button 
                onClick={toggleCart}
                className="relative p-2 text-cream hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
                aria-label={`Open Cart, ${cartItemCount} items`}
            >
                <CartIcon className="w-6 h-6" />
                {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full">
                        {cartItemCount}
                    </span>
                )}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Order Online
            </a>
          </div>
          
          {/* Mobile Menu Button & Cart */}
          <div className="-mr-2 flex md:hidden items-center space-x-2">
             <button 
                onClick={toggleCart}
                className="relative p-2 text-cream hover:text-accent transition-colors mr-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
                aria-label={`Open Cart, ${cartItemCount} items`}
            >
                <CartIcon className="w-6 h-6" />
                {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full">
                        {cartItemCount}
                    </span>
                )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-cream hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brown-dark shadow-2xl border-t border-white/5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                    activeLink === link.href ? 'text-accent bg-white/5 font-bold' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                   <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    Order Online
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};

export default Header;
