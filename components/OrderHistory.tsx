
import React from 'react';
import { useCart } from '../context/CartContext';

const OrderHistory: React.FC = () => {
  const { orders } = useCart();

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (orders.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        <p className="text-brown-light text-lg">No past orders found.</p>
        <p className="text-sm text-gray-400 mt-2">Your order history will appear here after you place an order.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 pb-24">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
             <span className="text-xs text-gray-500 font-medium">{formatDate(order.date)}</span>
             <span className="text-sm font-bold text-accent">₹{order.total}</span>
          </div>
          <div className="p-4 space-y-3">
            {order.items.map((item, idx) => (
              <div key={`${order.id}-item-${idx}`} className="flex justify-between text-sm">
                <span className="text-brown-dark">
                  <span className="font-semibold">{item.quantity}x</span> {item.name} 
                  <span className="text-gray-400 text-xs ml-1">({item.selectedWeight}kg, {item.selectedVariant})</span>
                </span>
                <span className="text-gray-600">₹{item.price * item.quantity}</span>
              </div>
            ))}
            
            {order.note && (
                <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Note:</p>
                    <p className="text-sm text-brown-light italic">"{order.note}"</p>
                </div>
            )}
            
            <div className="mt-3 pt-2 border-t border-gray-100">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Sent via WhatsApp
                </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
