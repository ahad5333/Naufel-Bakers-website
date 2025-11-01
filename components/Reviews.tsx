import React, { useEffect, useState } from "react";
import { StarIcon } from "./icons/StarIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Tailwind Heroicons

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<Review> = ({ name, rating, comment }) => (
  <div className="bg-cream p-6 rounded-lg shadow-md border border-pastel-pink transition-transform duration-500 hover:scale-105">
    <div className="flex items-center mb-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <h3 className="ml-3 font-semibold text-brown-dark">{name}</h3>
    </div>
    <p className="text-brown-light italic">"{comment}"</p>
  </div>
);

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallRating, setOverallRating] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sampleReviews: Review[] = [
      { name: "Ayesha Khan", rating: 5, comment: "Best bakery in town! Their cakes are always fresh and delicious." },
      { name: "Rizwan Ahmed", rating: 4, comment: "Good quality and friendly service. A must-try in the area." },
      { name: "Sana Fatima", rating: 5, comment: "Absolutely loved their pastries! So soft and flavorful." },
      { name: "Imran Malik", rating: 4, comment: "Nice place for evening snacks. The samosas are really good!" },
      { name: "Zoya Ali", rating: 5, comment: "Perfect for birthday cakes! Always on time and beautifully decorated." },
      { name: "Naveed Shaikh", rating: 4, comment: "Affordable and tasty. The chocolate mousse is my favorite." },
      { name: "Fatima Noor", rating: 5, comment: "The red velvet cupcakes were divine! Melted in my mouth instantly." },
      { name: "Arjun Verma", rating: 4, comment: "Their croissants are flaky and buttery — a perfect morning treat." },
      { name: "Hiba Siddiqui", rating: 5, comment: "Every visit feels special. The staff remember your preferences!" },
      { name: "Sameer Patel", rating: 4, comment: "Lovely ambience, friendly staff, and good quality desserts." },
      { name: "Priya Mehta", rating: 5, comment: "Ordered a custom cake and it looked exactly how I imagined. Tasted even better!" },
      { name: "Ali Rahman", rating: 5, comment: "The aroma of freshly baked cookies is irresistible. Naufel Bakers never disappoints." },
    ];

    const shuffled = sampleReviews.sort(() => 0.5 - Math.random());
    setReviews(shuffled);
    const avg = sampleReviews.reduce((sum, r) => sum + r.rating, 0) / sampleReviews.length;
    setOverallRating(avg);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 3, reviews.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 3, 0));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section id="reviews" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brown-dark sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
            We love our customers, and they love our baking!
          </p>
        </div>

        {/* Ratings Overview */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-brown-dark">
            Google Ratings & Reviews
          </h3>
          <div className="flex items-center justify-center mt-2">
            <span className="text-4xl font-bold text-accent mr-2">
              {overallRating.toFixed(1)}
            </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-7 h-7 ${i < Math.round(overallRating) ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-brown-light mt-1">
            Based on {reviews.length} customer reviews
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-3 transition-transform duration-500 ease-in-out">
            {visibleReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-accent hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + 3 >= reviews.length}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-accent hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
