
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, CartItem, Order } from '../types';

interface CartContextType {
  items: CartItem[];
  orders: Order[];
  isCartOpen: boolean;
  addToCart: (item: MenuItem, variant: 'Egg' | 'Eggless', price: number, weight: number) => void;
  removeFromCart: (id: string, variant: 'Egg' | 'Eggless', weight: number) => void;
  updateQuantity: (id: string, variant: 'Egg' | 'Eggless', weight: number, quantity: number) => void;
  toggleCart: () => void;
  getCartTotal: () => number;
  clearCart: () => void;
  addOrder: (note: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'naufel-bakers-cart';
const HISTORY_STORAGE_KEY = 'naufel-bakers-order-history';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Cart Items State
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const storedItems = localStorage.getItem(CART_STORAGE_KEY);
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  // Order History State
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const storedOrders = localStorage.getItem(HISTORY_STORAGE_KEY);
      return storedOrders ? JSON.parse(storedOrders) : [];
    } catch (error) {
      console.error("Error loading history from localStorage:", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persist Cart Items
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [items]);

  // Persist Order History
  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {
      console.error("Error saving history to localStorage:", error);
    }
  }, [orders]);

  const addToCart = (item: MenuItem, variant: 'Egg' | 'Eggless', price: number, weight: number) => {
    setItems(prevItems => {
      // Check if item with same ID AND same variant AND same weight exists
      const existingItem = prevItems.find(i => i.id === item.id && i.selectedVariant === variant && i.selectedWeight === weight);
      
      if (existingItem) {
        return prevItems.map(i =>
          (i.id === item.id && i.selectedVariant === variant && i.selectedWeight === weight) 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      // Add new item with selected variant, price, and weight
      return [...prevItems, { ...item, quantity: 1, selectedVariant: variant, price: price, selectedWeight: weight }];
    });
    setIsCartOpen(true); // Open cart when adding item
  };

  const removeFromCart = (id: string, variant: 'Egg' | 'Eggless', weight: number) => {
    setItems(prevItems => prevItems.filter(item => !(item.id === id && item.selectedVariant === variant && item.selectedWeight === weight)));
  };

  const updateQuantity = (id: string, variant: 'Egg' | 'Eggless', weight: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id, variant, weight);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        (item.id === id && item.selectedVariant === variant && item.selectedWeight === weight) ? { ...item, quantity } : item
      )
    );
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const addOrder = (note: string) => {
    const newOrder: Order = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      items: [...items],
      total: getCartTotal(),
      note: note
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ items, orders, isCartOpen, addToCart, removeFromCart, updateQuantity, toggleCart, getCartTotal, clearCart, addOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
