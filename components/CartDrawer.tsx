
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CloseIcon } from './icons/CloseIcon';
import { CartIcon } from './icons/CartIcon';
import { HistoryIcon } from './icons/HistoryIcon';
import { WHATSAPP_NUMBER } from '../constants';
import OrderHistory from './OrderHistory';
import { CartItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

type DrawerView = 'cart' | 'history';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (id: string, variant: 'Egg' | 'Eggless', weight: number, quantity: number) => void;
  onRemove: (id: string, variant: 'Egg' | 'Eggless', weight: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity < 1) {
      onRemove(item.id, item.selectedVariant, item.selectedWeight);
    } else {
      onUpdateQuantity(item.id, item.selectedVariant, item.selectedWeight, newQuantity);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -30, height: 0 }}
      animate={{ opacity: 1, x: 0, height: "auto" }}
      exit={{ opacity: 0, x: 50, height: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className="overflow-hidden"
    >
      <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm mb-4 border border-pastel-pink">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md select-none" />
        <div className="flex-1">
          <h3 className="text-brown-dark font-semibold text-sm">{item.name}</h3>
          <p className="text-xs text-gray-500 font-medium mb-1">
            {item.selectedVariant} • {item.selectedWeight} Kg
          </p>
          <p className="text-accent text-sm font-bold">₹{item.price}</p>

          <div className="flex items-center mt-2 space-x-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(-1)}
              className="w-6 h-6 rounded-full bg-gray-100 text-brown-dark flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent font-bold"
              aria-label="Decrease quantity"
            >
              -
            </motion.button>
            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(1)}
              className="w-6 h-6 rounded-full bg-gray-100 text-brown-dark flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent font-bold"
              aria-label="Increase quantity"
            >
              +
            </motion.button>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onRemove(item.id, item.selectedVariant, item.selectedWeight)}
          className="text-red-400 hover:text-red-600 text-sm font-medium focus:outline-none transition-colors"
          aria-label={`Remove ${item.name} from cart`}
        >
          Remove
        </motion.button>
      </div>
    </motion.div>
  );
};

const CartDrawer: React.FC = () => {
  const { items, isCartOpen, toggleCart, removeFromCart, updateQuantity, getCartTotal, addOrder } = useCart();
  const [orderNote, setOrderNote] = useState('');
  const [view, setView] = useState<DrawerView>('cart');

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "Hello Naufel Bakers, I'd like to place an order:\n\n";
    items.forEach(item => {
      message += `- ${item.name} (${item.selectedWeight}kg, ${item.selectedVariant}) - ₹${item.price} x ${item.quantity}\n`;
    });
    
    const total = getCartTotal();
    if (total > 0) {
      message += `\nTotal Estimated: ₹${total}`;
    } else {
        message += `\nTotal Estimated: To be confirmed`;
    }

    const noteToSend = orderNote.trim();
    if (noteToSend) {
      message += `\n\n*Special Request/Note:* ${noteToSend}`;
    }

    addOrder(noteToSend);
    setOrderNote('');
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setView('history');
  };

  const handleBrowseMenu = () => {
    toggleCart();
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      const headerOffset = 80;
      const elementPosition = menuElement.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleView = () => {
    setView(prev => prev === 'cart' ? 'history' : 'cart');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-[60] overflow-hidden" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="cart-title"
        >
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={toggleCart}
            aria-hidden="true"
          />
          
          {/* Drawer Panel */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            className="absolute inset-y-0 right-0 max-w-md w-full bg-cream shadow-xl flex flex-col h-full"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-pastel-pink flex-shrink-0">
              <div className="flex items-center space-x-3">
                 <h2 id="cart-title" className="text-xl font-serif font-bold text-brown-dark">
                   {view === 'cart' ? `Your Cart (${items.reduce((acc, i) => acc + i.quantity, 0)})` : 'Order History'}
                 </h2>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleView}
                    className="p-2 text-brown-dark hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
                    title={view === 'cart' ? "View Order History" : "Back to Cart"}
                >
                    {view === 'cart' ? <HistoryIcon className="w-6 h-6" /> : <CartIcon className="w-6 h-6" />}
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleCart} 
                    className="text-brown-dark hover:text-brown-light focus:outline-none focus:ring-2 focus:ring-brown-dark rounded p-1"
                    aria-label="Close cart"
                >
                    <CloseIcon className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-gray-50">
                {view === 'history' ? (
                    <OrderHistory />
                ) : (
                    /* Cart Items List */
                    <div className="p-6 h-full">
                        {items.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                <div className="bg-white p-6 rounded-full shadow-sm border border-pastel-pink">
                                    <CartIcon className="w-12 h-12 text-brown-light opacity-50" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-brown-dark mb-2">Your cart is empty</h3>
                                    <p className="text-brown-light max-w-xs mx-auto">Looks like you haven't added any delicious treats yet.</p>
                                </div>
                                <motion.button 
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={handleBrowseMenu}
                                  className="bg-accent text-brown-dark px-8 py-3 rounded-full font-bold hover:bg-opacity-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                                >
                                  Browse Our Menu
                                </motion.button>
                            </div>
                        ) : (
                            <motion.div layout>
                                <AnimatePresence initial={false} mode="popLayout">
                                    {items.map(item => (
                                        <CartItemRow 
                                            key={`${item.id}-${item.selectedVariant}-${item.selectedWeight}`}
                                            item={item}
                                            onUpdateQuantity={updateQuantity}
                                            onRemove={removeFromCart}
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>

            {/* Footer / Checkout (Only visible in Cart view and when items exist) */}
            {view === 'cart' && items.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-white flex-shrink-0">
                <div className="mb-4">
                  <label htmlFor="order-note" className="block text-sm font-semibold text-brown-dark mb-1">
                     Special Requests / Notes
                  </label>
                  <textarea
                     id="order-note"
                     rows={2}
                     className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none placeholder-gray-400 transition-all"
                     placeholder="E.g., Message on cake, delivery instructions..."
                     value={orderNote}
                     onChange={(e) => setOrderNote(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-serif font-bold text-brown-dark">Total Estimate</span>
                  <span className="text-xl font-bold text-accent">₹{getCartTotal()}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 text-center">Note: Final price may vary slightly based on weight or customization.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] text-white py-3 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Order on WhatsApp
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
