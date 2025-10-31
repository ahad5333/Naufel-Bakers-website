
import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../services/geminiService';
import { ReviewsData } from '../types';
import { StarIcon } from './icons/StarIcon';

const ReviewCard: React.FC<{ name: string; rating: number; comment: string }> = ({ name, rating, comment }) => (
  <div className="bg-cream p-6 rounded-lg shadow-md border border-pastel-pink">
    <div className="flex items-center mb-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
      <h3 className="ml-3 font-semibold text-brown-dark">{name}</h3>
    </div>
    <p className="text-brown-light italic">"{comment}"</p>
  </div>
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
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
          <p className="ml-4 text-brown-light">Fetching fresh reviews...</p>
        </div>
      );
    }

    if (error || !reviewsData) {
      return <p className="text-center text-red-500">Could not load reviews. {error}</p>;
    }

    return (
      <>
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brown-dark">Google Ratings & Reviews</h3>
            <div className="flex items-center justify-center mt-2">
                <span className="text-4xl font-bold text-accent mr-2">{reviewsData.overallRating.toFixed(1)}</span>
                <div className="flex">
                 {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`w-7 h-7 ${i < Math.round(reviewsData.overallRating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                 ))}
                </div>
            </div>
            <p className="text-brown-light mt-1">Based on {reviewsData.totalReviews} reviews</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData.reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            We love our customers, and they love our baking!
          </p>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default Reviews;
