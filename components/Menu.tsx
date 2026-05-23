
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory, MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

type DietVariant = 'Egg' | 'Eggless';

const FSSAIMark: React.FC<{ isEggless: boolean }> = ({ isEggless }) => (
  <div 
    className={`inline-flex items-center justify-center border-2 w-5 h-5 rounded-sm p-[2px] ${
      isEggless ? 'border-green-600' : 'border-amber-800'
    }`}
    title={isEggless ? 'Eggless (Vegetarian)' : 'Contains Egg (Non-Vegetarian)'}
  >
    <div className={`w-2 h-2 rounded-full ${isEggless ? 'bg-green-600' : 'bg-amber-800'}`} />
  </div>
);

const StarRating: React.FC = () => (
  <div className="flex space-x-0.5 mt-1.5">
    {[...Array(5)].map((_, i) => (
      <motion.svg 
        key={i} 
        initial={{ opacity: 0.8, scale: 0.9 }}
        whileHover={{ opacity: 1, scale: 1.1, rotate: 15 }}
        className="w-4 h-4 text-amber-500 fill-current cursor-pointer" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>
);

const MenuItemCard: React.FC<{ item: MenuItem; diet: DietVariant }> = ({ item, diet }) => {
  const { addToCart } = useCart();
  const [weight, setWeight] = useState(item.baseWeight);
  const [isAdded, setIsAdded] = useState(false);

  const basePrice = diet === 'Egg' ? item.priceEgg : item.priceEggless;
  
  // Calculate price proportional to weight: (Selected Weight / Base Weight) * Base Price
  const price = Math.round((weight / item.baseWeight) * basePrice);

  // Define available weights based on item category/baseWeight
  const availableWeights = item.baseWeight === 0.5 
    ? [0.5, 1, 2, 3] 
    : [1, 2, 3];

  const handleAddToCart = () => {
    addToCart(item, diet, price, weight);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div 
      whileHover={{ y: -10, boxShadow: "0 25px 35px -10px rgba(44, 30, 26, 0.18)" }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="bg-cream rounded-xl shadow-lg overflow-hidden group flex flex-col h-full border border-pastel-pink relative"
    >
      {/* Golden Highlight Border on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-xl transition-all duration-300 pointer-events-none z-20" />

      <div className="relative overflow-hidden h-80">
        <motion.img 
          className="w-full h-full object-cover object-center select-none" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={item.image} 
          alt={item.alt} 
        />
        {/* Authentic Indian FSSAI dietary indicator badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-1.5 rounded-lg shadow-md z-10 flex items-center gap-1.5 border border-pastel-pink">
          <FSSAIMark isEggless={diet === 'Eggless'} />
          <span className="text-[10px] font-bold text-brown-dark tracking-wide uppercase">
            {diet === 'Eggless' ? 'Eggless' : 'With Egg'}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-white relative">
        <div className="flex flex-col mb-2">
            <h3 className="text-xl font-serif font-bold text-brown-dark tracking-tight">{item.name}</h3>
            <StarRating />
        </div>
        <p className="mt-2 text-brown-light text-sm leading-relaxed flex-grow">{item.description}</p>
        
        {/* Weight Selector with smooth capsule slide */}
        <div className="mt-5">
            <label className="text-[10px] font-bold text-brown-light uppercase tracking-wider block mb-2">Select Weight</label>
            <div className="flex flex-wrap gap-2">
                {availableWeights.map((w) => (
                    <button
                        key={w}
                        onClick={() => setWeight(w)}
                        className={`relative px-4 py-1.5 text-xs font-bold rounded-full border transition-all duration-300 focus:outline-none ${
                            weight === w 
                            ? 'text-white border-transparent' 
                            : 'bg-cream text-brown-dark border-pastel-pink hover:border-accent'
                        }`}
                    >
                        <span className="relative z-10">{w} Kg</span>
                        {weight === w && (
                          <motion.div
                            layoutId={`weightHighlight-${item.id}`}
                            className="absolute inset-0 bg-brown-dark rounded-full z-0"
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          />
                        )}
                    </button>
                ))}
            </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
             <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Estimated Price</span>
                  <span className="text-2xl font-black text-accent">₹{price}</span>
             </div>
             
             <AnimatePresence mode="wait">
               {isAdded ? (
                 <motion.button 
                    key="added"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="bg-green-600 text-white text-sm px-5 py-2.5 rounded-full font-bold shadow-md flex items-center gap-1.5 cursor-default"
                 >
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Added!
                 </motion.button>
               ) : (
                 <motion.button 
                    key="add"
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className="bg-brown-dark text-white text-sm px-5 py-2.5 rounded-full hover:bg-accent hover:text-brown-dark transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent font-bold"
                    aria-label={`Add ${item.name} (${weight}kg, ${diet}) to cart for ₹${price}`}
                 >
                    Add to Cart
                 </motion.button>
               )}
             </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.CoolCakes);
  const [dietPreference, setDietPreference] = useState<DietVariant>('Egg');

  const categories = Object.values(MenuCategory);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-cream" aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 id="menu-heading" className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">Our Menu</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            Choose your preference, select size, and explore our delicious cakes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div role="tablist" aria-label="Menu Categories" className="mt-10 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map(category => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`panel-${category.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 text-sm md:text-base font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-300 ${
                activeCategory === category ? 'text-white' : 'text-brown-dark bg-pastel-pink hover:bg-opacity-80'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-accent rounded-full z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Diet Toggle (Egg / Eggless) */}
        <div className="mt-8 flex justify-center">
            <div className="bg-gray-200 p-1 rounded-full inline-flex shadow-inner" role="group" aria-label="Dietary Preference">
                <button
                    aria-pressed={dietPreference === 'Egg'}
                    onClick={() => setDietPreference('Egg')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brown-dark ${
                        dietPreference === 'Egg' 
                        ? 'bg-white text-brown-dark shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    With Egg
                </button>
                <button
                    aria-pressed={dietPreference === 'Eggless'}
                    onClick={() => setDietPreference('Eggless')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-700 ${
                        dietPreference === 'Eggless' 
                        ? 'bg-white text-green-700 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Eggless
                </button>
            </div>
        </div>

        <motion.div 
            id={`panel-${activeCategory.replace(/\s+/g, '-').toLowerCase()}`}
            role="tabpanel"
            aria-live="polite"
            layout
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
              >
                <MenuItemCard item={item} diet={dietPreference} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Info Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 bg-brown-dark rounded-lg p-8 text-center shadow-xl"
        >
            <h3 className="text-2xl font-serif font-bold text-accent mb-2">Custom Orders</h3>
            <p className="text-cream text-lg">Designer Cakes & Fondant Cakes Available</p>
            <p className="text-cream/70 mt-2 text-sm">Contact us for pricing and customization options.</p>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu;
