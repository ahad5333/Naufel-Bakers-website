
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="bg-cream text-brown-dark font-sans">
        <Header />
        <CartDrawer />
        <main>
          <Hero />
          <About />
          <Services />
          <Menu />
          <Gallery />
          <Features />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
