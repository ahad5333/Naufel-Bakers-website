
export enum MenuCategory {
  Cakes = 'Cakes',
  Pastries = 'Pastries',
  Bread = 'Bread',
  Cookies = 'Cookies',
  Special = 'Special Orders'
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  alt: string;
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

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}