import { MenuItem, MenuCategory, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Cakes
  { name: 'Chocolate Truffle Cake', description: 'A decadent and rich chocolate cake, a house specialty.', price: '₹700 (1/2kg)', category: MenuCategory.Cakes, image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg', alt: 'Decadent chocolate truffle cake with a glossy ganache topping.' },
  { name: 'Red Velvet Heart Cake', description: 'Classic red velvet with a rich cream cheese frosting, perfect for celebrations.', price: '₹750 (1/2kg)', category: MenuCategory.Cakes, image: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg', alt: 'Heart-shaped red velvet cake with creamy white frosting.' },
  { name: 'Black Forest Cake', description: 'Layers of chocolate sponge, whipped cream, and cherries.', price: '₹650 (1/2kg)', category: MenuCategory.Cakes, image: 'https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg', alt: 'Slice of black forest cake with layers of chocolate, cream, and cherries.' },
  { name: 'Butterscotch Cake', description: 'A sweet and crunchy cake with layers of butterscotch goodness.', price: '₹650 (1/2kg)', category: MenuCategory.Cakes, image: 'https://images.pexels.com/photos/14000007/pexels-photo-14000007.jpeg', alt: 'Creamy butterscotch cake topped with crunchy praline.' },
  
  // Pastries
  { name: 'Chocolate Pastry', description: 'A slice of heaven for chocolate lovers.', price: '₹90', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg', alt: 'A rich and moist chocolate pastry slice on a white plate.' },
  { name: 'Pineapple Pastry', description: 'Light, fruity, and refreshing pineapple cream pastry.', price: '₹80', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg', alt: 'Light and airy pineapple pastry slice with a cherry on top.' },
  { name: 'Butterscotch Pastry', description: 'Sweet and crunchy butterscotch bits in a creamy pastry.', price: '₹85', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg', alt: 'Creamy butterscotch pastry slice with crunchy butterscotch pieces.' },
  { name: 'Veg Puff', description: 'Flaky puff pastry filled with a savory vegetable mix.', price: '₹35', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/19565787/pexels-photo-19565787/free-photo-of-curry-puffs-on-a-plate.jpeg', alt: 'Golden-brown, flaky vegetable puff pastry.' },
  { name: 'Butter Croissant', description: 'A classic, flaky, and buttery French croissant, baked to golden perfection.', price: '₹70', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg', alt: 'A classic golden-brown, flaky, and buttery croissant.' },
  { name: 'Chocolate Eclair', description: 'Choux pastry filled with a rich cream and topped with a glossy chocolate glaze.', price: '₹100', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/8523528/pexels-photo-8523528.jpeg', alt: 'Chocolate eclair filled with cream and topped with glossy chocolate glaze.' },
  { name: 'Blueberry Muffin', description: 'A soft and moist muffin bursting with juicy blueberries, perfect for breakfast.', price: '₹95', category: MenuCategory.Pastries, image: 'https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg', alt: 'Soft blueberry muffin bursting with juicy blueberries.' },

  // Bread
  { name: 'Garlic Bread Sticks (4pcs)', description: 'Warm and savory bread sticks with a garlic butter glaze.', price: '₹119', category: MenuCategory.Bread, image: 'https://images.pexels.com/photos/3992453/pexels-photo-3992453.jpeg', alt: 'Four warm garlic bread sticks served with a dip.' },
  { name: 'Dinner Rolls (6pcs)', description: 'Soft, fluffy rolls perfect for any meal.', price: '₹100', category: MenuCategory.Bread, image: 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg', alt: 'A basket of six soft and fluffy dinner rolls.' },
  { name: 'Multigrain Loaf', description: 'A healthy and hearty loaf packed with wholesome grains.', price: '₹150', category: MenuCategory.Bread, image: 'https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg', alt: 'A healthy and hearty sliced multigrain bread loaf.' },

  // Cookies
  { name: 'Assorted Cookies Box', description: 'A delicious mix of our daily fresh-baked cookies.', price: '₹250', category: MenuCategory.Cookies, image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg', alt: 'A box filled with a delicious assortment of fresh-baked cookies.' },
  { name: 'Choco Chip Cookies', description: 'Classic cookies loaded with rich chocolate chips.', price: '₹35 per piece', category: MenuCategory.Cookies, image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg', alt: 'Classic chocolate chip cookies with rich, melted chocolate chips.' },
  { name: 'Osmania Biscuits', description: 'A local favorite, slightly sweet and salty.', price: '₹150 (box)', category: MenuCategory.Cookies, image: 'https://images.pexels.com/photos/2373507/pexels-photo-2373507.jpeg', alt: 'A plate of traditional Osmania biscuits, a local favorite.' },

  // Special Orders
  { name: 'Custom Designer Cakes', description: 'Beautifully crafted cakes for birthdays, anniversaries, and any occasion.', price: 'Contact for price', category: MenuCategory.Special, image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg', alt: 'An elegant, multi-tiered custom designer cake for a special occasion.' },
  { name: 'Photo Print Cakes', description: 'Personalize your cake with a memorable photo. Contact for details.', price: 'Contact for price', category: MenuCategory.Special, image: 'https://images.pexels.com/photos/745988/pexels-photo-745988.jpeg', alt: 'A rectangular cake personalized with an edible photo print on top.' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg', alt: 'Vibrant display of beautifully decorated cakes and cupcakes at Naufel Bakers.' },
  { id: 2, src: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg', alt: 'The modern and welcoming storefront of Naufel Bakers with large glass windows.' },
  { id: 4, src: 'https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg', alt: 'Delicious assortment of freshly baked pastries and croissants on display.' },
  { id: 6, src: 'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg', alt: 'Close-up of artisanal, freshly baked bread loaves with a golden, flour-dusted crust.' },
  { id: 8, src: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg', alt: 'Tempting collection of colorful frosted and sprinkled donuts on a tray.' },
  { id: 11, src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg', alt: 'Colorful stack of delicate French macarons in various pastel shades.' },
  { id: 12, src: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg', alt: 'Warm and inviting interior of Naufel Bakers with cozy wooden tables and chairs.' },
  { id: 13, src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg', alt: 'A perfectly crafted cup of coffee with latte art, next to a flaky pastry.' },
  { id: 14, src: 'https://images.pexels.com/photos/175606/pexels-photo-175606.jpeg', alt: "Close-up of a baker's hands skillfully kneading fresh, soft dough on a floured surface." },
  { id: 16, src: 'https://images.pexels.com/photos/6210953/pexels-photo-6210953.jpeg', alt: 'Talented baker meticulously decorating a beautiful custom wedding cake with white frosting.' },
  { id: 17, src: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg', alt: 'A cozy seating corner inside Naufel Bakers, ideal for enjoying a coffee and pastry.' },
  { id: 19, src: 'https://images.pexels.com/photos/2067405/pexels-photo-2067405.jpeg', alt: 'Close-up shot of delicious, gooey chocolate chip cookies fresh from the oven.' },
];