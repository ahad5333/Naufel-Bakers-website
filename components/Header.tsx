import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(NAV_LINKS[0].href);

  const whatsappMessage = "Hello Naufel Bakers, I'd like to inquire about an order.";
  const whatsappUrl = `https://wa.me/919154786835?text=${encodeURIComponent(whatsappMessage)}`;

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
  }, [activeLink]); // Dependency ensures `activeLink` is not stale inside the handler

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-serif font-bold text-brown-dark cursor-pointer">
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
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeLink === link.href ? 'text-brown-dark font-semibold' : 'text-brown-light hover:text-brown-dark'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm"
            >
              Order Online
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-cream inline-flex items-center justify-center p-2 rounded-md text-brown-dark hover:text-brown-light focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
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

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream shadow-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeLink === link.href ? 'text-brown-dark bg-pastel-pink font-semibold' : 'text-brown-light hover:text-brown-dark'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-2">
                 <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm"
                >
                  Order Online
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;