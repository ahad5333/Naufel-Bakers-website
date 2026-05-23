
import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../services/geminiService';
import { ReviewsData } from '../types';
import { StarIcon } from './icons/StarIcon';
import { motion, AnimatePresence } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const ReviewCard: React.FC<{ name: string; rating: number; comment: string }> = ({ name, rating, comment }) => (
  <motion.div 
    variants={cardVariants}
    whileHover={{ y: -6, boxShadow: "0 15px 30px -10px rgba(44, 30, 26, 0.15)" }}
    className="bg-white p-6 rounded-lg shadow-md border border-pastel-pink"
  >
    <div className="flex items-center mb-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
      <h3 className="ml-3 font-semibold text-brown-dark">{name}</h3>
    </div>
    <p className="text-brown-light italic text-sm">"{comment}"</p>
  </motion.div>
);

const Reviews: React.FC = () => {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchReviews();
        setReviewsData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <motion.div 
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col justify-center items-center h-40"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
          <p className="mt-4 text-brown-light font-medium">Fetching fresh reviews...</p>
        </motion.div>
      );
    }

    if (error || !reviewsData) {
      return (
        <motion.p 
          key="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-red-500 font-medium"
        >
          Could not load reviews. {error}
        </motion.p>
      );
    }

    return (
      <motion.div
        key="content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-12 bg-white max-w-md mx-auto p-6 rounded-xl border border-pastel-pink shadow-sm"
        >
            <h3 className="text-xl font-bold text-brown-dark font-serif">Google Ratings & Reviews</h3>
            <div className="flex items-center justify-center mt-3">
                <span className="text-5xl font-extrabold text-accent mr-3">{reviewsData.overallRating.toFixed(1)}</span>
                <div className="flex flex-col items-start">
                  <div className="flex">
                   {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-6 h-6 ${i < Math.round(reviewsData.overallRating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                   ))}
                  </div>
                  <p className="text-brown-light text-sm mt-1">Based on {reviewsData.totalReviews} reviews</p>
                </div>
            </div>
        </motion.div>
        
        <div className="relative w-full overflow-hidden py-8">
          {/* Shadow Overlays to fade edges left & right */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-cream via-cream/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }} // Scrolls from left to right!
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {/* Duplicate the array of cards to make it seamless on wide screens */}
            {[...reviewsData.reviews, ...reviewsData.reviews, ...reviewsData.reviews, ...reviewsData.reviews].map((review, index) => (
              <div key={index} className="w-[360px] flex-shrink-0">
                <ReviewCard {...review} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            We love our customers, and they love our baking!
          </p>
        </motion.div>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Reviews;
