
import React, { useEffect } from 'react';
import { GalleryImage } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { motion } from 'framer-motion';

interface GalleryModalProps {
  image: GalleryImage;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 p-4 cursor-zoom-out"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Image Gallery View"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 350, damping: 26 }}
        className="relative bg-cream rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-2 text-right">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="inline-block p-2 text-brown-dark hover:text-accent transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close image view"
          >
            <CloseIcon className="w-7 h-7" />
          </motion.button>
        </div>
        
        <div className="flex-grow overflow-auto p-6 pt-0 text-center">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-contain max-h-[65vh] rounded shadow-sm select-none"
          />
          <p className="mt-4 text-xl font-serif font-bold text-brown-dark">{image.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryModal;
