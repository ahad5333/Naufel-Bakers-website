import React from 'react';

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

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      {/* A darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <img src="https://images.pexels.com/photos/8963453/pexels-photo-8963453.jpeg" alt="Baker's hands carefully dusting flour over fresh dough on a dark, rustic surface" className="absolute inset-0 w-full h-full object-cover"/>
      
      <div className="relative z-10 p-4 text-cream">
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.5)]">
          Baking Happiness Every Day
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 [text-shadow:_1px_1px_4px_rgba(0,0,0,0.4)]">
          Experience the warmth and delight of handcrafted pastries, breads, and cakes made with love.
        </p>
        <a 
          href="#menu"
          onClick={handleMenuClick}
          className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;