import { GoogleGenAI, Type } from '@google/genai';
import { ReviewsData } from '../types';

export async function fetchReviews(): Promise<ReviewsData> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
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
    
    // Basic validation to ensure the structure matches ReviewsData
    if (parsedData && Array.isArray(parsedData.reviews)) {
      return parsedData as ReviewsData;
    } else {
      throw new Error("Invalid data structure received from API.");
    }

  } catch (error) {
    console.error("Error fetching reviews from Gemini API:", error);
    throw new Error("Could not fetch reviews. Please try again later.");
  }
}