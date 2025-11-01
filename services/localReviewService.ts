import { ReviewsData } from "../types";

const sampleReviews: ReviewsData = {
  overallRating: 4.7,
  totalReviews: 124,
  reviews: [
    {
      name: "Fatima Khan",
      rating: 5,
      comment: "Absolutely delicious pastries! The red velvet cupcake melted in my mouth. Highly recommend Naufel Bakers.",
    },
    {
      name: "Rohan Das",
      rating: 4,
      comment: "Good quality and very fresh. The chocolate truffle cake was just perfect, not too sweet!",
    },
    {
      name: "Sara Ahmed",
      rating: 5,
      comment: "Beautifully presented desserts and great taste. Their staff is polite and helpful too!",
    },
    {
      name: "Imran Shaikh",
      rating: 4,
      comment: "Really liked the butter croissant and coffee combo. Slightly pricey but worth it.",
    },
    {
      name: "Priya Mehta",
      rating: 5,
      comment: "Best bakery in town! I ordered a custom birthday cake and it looked exactly how I wanted.",
    },
    {
      name: "Ali Rahman",
      rating: 5,
      comment: "The aroma of freshly baked cookies when you enter is irresistible. Loved every bite!",
    },
    {
      name: "Sneha Kapoor",
      rating: 4,
      comment: "Lovely ambience and tasty treats. The strawberry cheesecake was amazing!",
    },
    {
      name: "Yusuf Patel",
      rating: 5,
      comment: "Fast service, friendly staff, and fantastic quality. Naufel Bakers never disappoints.",
    },
  ],
};

export const fetchReviews = async (): Promise<ReviewsData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const shuffled = [...sampleReviews.reviews].sort(() => 0.5 - Math.random());
  const randomSubset = shuffled.slice(0, 6);
  return { ...sampleReviews, reviews: randomSubset };
};
