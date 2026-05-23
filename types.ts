
export enum MenuCategory {
  CoolCakes = 'Cool Cakes',
  SpecialCakes = 'Special Cakes'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceEgg: number;
  priceEggless: number;
  category: MenuCategory;
  image: string;
  alt: string;
  baseWeight: number; // The weight corresponding to the listed price (e.g., 0.5 for 1/2kg)
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedVariant: 'Egg' | 'Eggless';
  selectedWeight: number; // The specific weight selected by the user
  price: number; // The specific price for the chosen variant and weight
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  note: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface ReviewsData {
  overallRating: number;
  totalReviews: number;
  reviews: Review[];
}
