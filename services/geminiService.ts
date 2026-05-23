import { GoogleGenAI, Type } from '@google/genai';
import { ReviewsData } from '../types';

// High-quality fallback reviews in case the API key is not configured or fails
const MOCK_REVIEWS: ReviewsData = {
  overallRating: 4.8,
  totalReviews: 124,
  reviews: [
    {
      name: "Aarav Sharma",
      rating: 5,
      comment: "Absolutely love the chocolate truffle cake from Naufel Bakers! It was incredibly moist and rich. The service was also top-notch."
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Their red velvet cake is the best in Mahabubnagar. The cream cheese frosting is perfect. Highly recommend for any special occasion!"
    },
    {
      name: "Rohan Das",
      rating: 4,
      comment: "Very fresh pastries and clean ambience. The staff is polite. Will definitely visit again to try their bread items."
    },
    {
      name: "Ananya Reddy",
      rating: 5,
      comment: "Ordered a custom designer cake for my daughter's birthday. It looked beautiful and tasted amazing. Thank you Naufel Bakers!"
    },
    {
      name: "Vikram Malhotra",
      rating: 5,
      comment: "Great experience ordering online via WhatsApp. The delivery was on time and the cake was in perfect condition. 5 stars!"
    }
  ]
};

export async function fetchReviews(): Promise<ReviewsData> {
  let apiKey: string | undefined = undefined;

  // 1. Try to get key from Vite environment variables
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  }

  // 2. Try to get key from process.env if available (safely packaged)
  if (!apiKey) {
    try {
      if (typeof process !== 'undefined' && process.env) {
        apiKey = process.env.API_KEY || process.env.VITE_GEMINI_API_KEY;
      }
    } catch {
      // Ignored - process might not be defined in browser environment
    }
  }

  // If no API key is provided, return mock data directly
  if (!apiKey) {
    console.warn("Gemini API key not found. Using high-quality mock reviews.");
    // Simulate a brief network delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));
    return MOCK_REVIEWS;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a realistic set of 5 Google reviews for a beloved local bakery in Mahabubnagar, India, called 'Naufel Bakers'. The bakery is known for its delicious designer cakes like chocolate truffle and red velvet, fresh pastries, and friendly service. Include a mix of ratings from 4 to 5 stars. Provide the output in a JSON object.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallRating: {
              type: Type.NUMBER,
              description: "The average rating, calculated from the reviews, rounded to one decimal place."
            },
            totalReviews: {
              type: Type.INTEGER,
              description: "The total number of reviews, a realistic number like 87 or 112."
            },
            reviews: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "A realistic-sounding Indian customer name." },
                  rating: { type: Type.INTEGER, description: "An integer rating between 4 and 5." },
                  comment: { type: Type.STRING, description: "A short, authentic-sounding review comment of 1-3 sentences." },
                },
                required: ["name", "rating", "comment"],
              },
            },
          },
          required: ["overallRating", "totalReviews", "reviews"],
        },
      },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);
    
    if (parsedData && Array.isArray(parsedData.reviews)) {
      return parsedData as ReviewsData;
    } else {
      throw new Error("Invalid data structure received from API.");
    }

  } catch (error) {
    console.error("Error fetching reviews from Gemini API, falling back to mock reviews:", error);
    return MOCK_REVIEWS;
  }
}