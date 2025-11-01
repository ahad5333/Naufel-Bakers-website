import { MenuItem, MenuCategory, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const WHATSAPP_MESSAGE = "Hello Naufel Bakers, I'd like to inquire about an order.";
export const WHATSAPP_URL = `https://wa.me/917671073675?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;




export const MENU_ITEMS: MenuItem[] = [
  // --- CAKES: Half Kg (from WhatsApp Image 2025-10-31 at 22.23.14_f1b64865.jpg) ---
  
  { 
    name: 'Pineapple Cake', 
    description: 'Light and tangy pineapple cake.', 
    price: '₹300 (Egg) / ₹350 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: "https://i.pinimg.com/1200x/e2/da/1f/e2da1f11b66943852a11fbc96674b8ce.jpg",
    alt: 'Light and tangy Pineapple Cake' 
  },
  { 
    name: 'Butter Scotch Cake', 
    description: 'Sweet and crunchy cake with butterscotch goodness.', 
    price: '₹300 (Egg) / ₹350 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/df/1d/c4/df1dc40132c0d047d00bf079b2bb3b36.jpg', 
    alt: 'Sweet and crunchy Butter Scotch Cake' 
  },
{ 
  name: 'Strawberry Cake', 
  description: 'Layers of soft sponge and fresh strawberry cream.', 
  price: '₹300 (Egg) / ₹350 (Eggless)', 
  category: MenuCategory.Cakes, 
  image: 'https://i.pinimg.com/1200x/87/3a/1a/873a1af7adbf58f91a8ff157064e1215.jpg', 
  alt: 'Layers of soft sponge and fresh Strawberry cream' 
}
,
  { 
    name: 'Black Forest Cake', 
    description: 'Classic chocolate sponge, cream, and cherry filling.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/736x/35/00/b2/3500b2bd94fa6cdb987767fc3794caea.jpg', 
    alt: 'Classic Black Forest chocolate sponge, cream, and cherry filling' 
  },
  { 
    name: 'Truffle Chocolate Cake', 
    description: 'Rich, dark, and decadent chocolate truffle.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/32/0d/75/320d756c6209ac841a8f229e78f394f8.jpg', 
    alt: 'Rich, dark, and decadent Chocolate Truffle Cake' 
  },
  { 
    name: 'Almond Cake', 
    description: 'Moist cake with a rich almond flavor.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/f4/2f/e6/f42fe60f1befa92a20fa2d9567b9e227.jpg', 
    alt: 'Moist cake with a rich almond flavor' 
  },
  { 
    name: 'Khowa Butter Cake', 
    description: 'Traditional cake with rich khowa (reduced milk solids) and butter.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/736x/f6/aa/6f/f6aa6fa58e2178409058f04a2a4bd90b.jpg', 
    alt: 'Traditional Khowa Butter Cake' 
  },
  { 
    name: 'Vanilla Cake', 
    description: 'A classic, simple, and light vanilla cake.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/b0/54/f4/b054f46da36a7fc98fe62f0e18b4b5b0.jpg', 
    alt: 'A classic, simple, and light Vanilla Cake' 
  },
  { 
    name: 'White Forest Cake', 
    description: 'Layers of vanilla sponge, white chocolate, and cream.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/e0/3d/49/e03d4997ee2c6922a9629cc958c84d2c.jpg', 
    alt: 'White Forest Cake with layers of vanilla sponge, white chocolate, and cream' 
  },
  { 
    name: 'Oreo Cake', 
    description: 'Creamy cake packed with crushed Oreo cookies.', 
    price: '₹350 (Egg) / ₹400 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/d1/a2/da/d1a2daaa561dd1a578a14f68ad742f9e.jpg', 
    alt: 'Creamy Oreo Cake packed with crushed Oreo cookies' 
  },


  // --- Total Chocolate Half Kg ---
  { 
    name: 'Total Chocolate Half Kg', 
    description: 'A small, intense chocolate fix (1/2 Kg).', 
    price: '₹550 (Egg) / ₹600 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg', 
    alt: 'Total chocolate cake half kg with rich dark chocolate layers.' 
  },
  { 
    name: 'Belgian Chocolate Half Kg', 
    description: 'Small premium Belgian chocolate cake (1/2 Kg).', 
    price: '₹550 (Egg) / ₹600 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/736x/84/3a/3e/843a3ed3e14624267eb3cbb244a64c1f.jpg', 
    alt: 'Belgian chocolate cake half kg with silky texture.' 
  },
  { 
    name: 'Total Chocolate Silk Half Kg', 
    description: 'Silky smooth Total Chocolate cake (1/2 Kg).', 
    price: '₹750 (Egg) / ₹800 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/da/38/6f/da386f7c8773c1fb003cf4f72ba325b2.jpg', 
    alt: 'Total chocolate silk cake half kg with glossy ganache.' 
  },
  { 
    name: 'Double Chocolate Half Kg', 
    description: 'An extra dose of chocolate (1/2 Kg).', 
    price: '₹600 (Egg) / ₹650 (Eggless)', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/34/a6/64/34a6644ab8f031d9007ba635bfe15664.jpg', 
    alt: 'Double chocolate cake half kg with chocolate layers and toppings.' 
  },

  // --- Cool Cakes (1/2 Kg) ---

  { 
    name: 'Rasmalai Cake', 
    description: 'Fusion cake with the flavor of Rasmalai (Indian sweet).', 
    price: '₹700 (Egg) / ₹800 (Eggless) - *Price is for 1/2 Kg*', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/4e/0f/11/4e0f11b7c36f14ae2241a8df35fc9873.jpg', 
    alt: 'Rasmalai fusion cake half kg with Indian sweet flavor.' 
  },
  { 
    name: 'Almond Cool Cake', 
    description: 'Moist almond cake with a cooling cream.', 
    price: '₹600 (Egg) / ₹700 (Eggless) - *Price is for 1/2 Kg*', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/b6/2e/ff/b62efffab27c3c2970c743888caaa13e.jpg', 
    alt: 'Almond cool cake half kg with almond cream topping.' 
  },
  { 
    name: 'Pista Cake', 
    description: 'Delicious cake with a distinct pistachio (Pista) flavor.', 
    price: '₹700 (Egg) / ₹750 (Eggless) - *Price is for 1/2 Kg*', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/1200x/f3/53/49/f35349d26e5f84ea23bee8c39d1d6136.jpg', 
    alt: 'Pistachio (Pista) cake half kg with pistachio topping.' 
  },
  { 
    name: 'Choco Vanilla Cake', 
    description: 'A perfect blend of chocolate and vanilla flavors.', 
    price: '₹600 (Egg) / ₹700 (Eggless) - *Price is for 1/2 Kg*', 
    category: MenuCategory.Cakes, 
    image: 'https://i.pinimg.com/736x/0b/7b/25/0b7b25e48258ddd399b24ec6fa42fc54.jpg', 
    alt: 'Choco vanilla cake half kg with chocolate and vanilla layers.' 
  },
    // --- Special / Premium Cakes (1 Kg) ---
  { 
    name: 'Fresh Fruit Cake', 
    description: 'Cake loaded with fresh seasonal fruits.', 
    price: '₹849 (Egg) / ₹899 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/1200x/bb/d8/8c/bbd88cb0927ce316de124434714e8219.jpg', 
    alt: 'Fresh fruit cake 1kg topped with assorted seasonal fruits.' 
  },


  
  { 
    name: 'Dry Fruits Cake', 
    description: 'Rich cake with a mix of high‑quality dry fruits.', 
    price: '₹849 (Egg) / ₹899 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/1200x/91/76/2d/91762d2b590592c99998d338b26025f0.jpg', 
    alt: 'Dry fruits cake 1kg with assorted dry fruits and cream.' 
  },
  { 
    name: 'Blueberry Cake', 
    description: 'Soft sponge with luscious blueberry filling.', 
    price: '₹799 (Egg) / ₹849 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/1200x/28/71/c1/2871c135d6f0dd51009787fb7f6a09e4.jpg', 
    alt: 'Blueberry cake 1kg with blueberry filling and topping.' 
  },
  { 
    name: 'Rainbow Cake', 
    description: 'Fun layered cake with vibrant colors.', 
    price: '₹699 (Egg) / ₹749 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/736x/2a/9a/58/2a9a588635a6e9028cb0379701f5911c.jpg', 
    alt: 'Rainbow layered cake 1kg with vibrant color layers.' 
  },
  
  { 
    name: 'Red Velvet Cake', 
    description: 'Classic red velvet with rich cream cheese frosting.', 
    price: '₹899 (Egg) / ₹949 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/736x/16/3e/2e/163e2ecf77d82f71430361fd1a3c2ad2.jpg', 
    alt: 'Red velvet cake 1kg with cream cheese frosting.' 
  },
  { 
    name: 'Ferrero Rocher Cake', 
    description: 'Cake inspired by the famous hazelnut chocolate.', 
    price: '₹1499 (Egg) / ₹1499 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/736x/55/41/37/5541377b69c5fedd320f89d9f3077871.jpg', 
    alt: 'Ferrero Rocher cake 1kg with hazelnut chocolate topping.' 
  },
  { 
    name: 'Kitkat Cake', 
    description: 'Cake wrapped with Kitkat bars and M&Ms (or similar).', 
    price: '₹1399 (Egg) / ₹1399 (Eggless) - *1 Kg*', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/736x/f0/0a/db/f00adb9ccf2da2030dd28a3cd6616be1.jpg', 
    alt: 'Kitkat cake 1kg surrounded by Kitkat bars and chocolate topping.' 
  },

  // --- Designer Cakes & Pastries ---
  { 
    name: 'Custom Designer & Fondant Cakes', 
    description: 'Beautifully crafted custom cakes for any occasion.', 
    price: 'Contact for price', 
    category: MenuCategory.Special, 
    image: 'https://i.pinimg.com/1200x/f2/72/dd/f272dd54f242b7bfbe3eb33213d26e31.jpg', 
    alt: 'Custom designer fondant cake with custom decorations.' 
  },
  { 
    name: 'Pineapple Pastry', 
    description: 'Soft sponge pastry topped with fresh pineapple and cream.', 
    price: '₹80 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/1200x/1a/6b/28/1a6b282e0fc595ffb9d4eb7be43eec49.jpg', 
    alt: 'Pineapple pastry topped with fresh pineapple and cream.' 
  },
  { 
    name: 'Butter Scotch Pastry', 
    description: 'Rich butterscotch flavored sponge pastry with creamy frosting.', 
    price: '₹80 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/1200x/cb/f2/03/cbf20340e81eab2cd188966b350caf40.jpg', 
    alt: 'Butterscotch pastry with creamy butterscotch topping.' 
  },
  { 
    name: 'Chocolate Pastry', 
    description: 'Decadent chocolate sponge with chocolate cream and toppings.', 
    price: '₹90 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/1200x/c7/ec/24/c7ec243a96e34800cf4b7ace44fabeaa.jpg', 
    alt: 'Chocolate pastry with chocolate sponge and cream topping.' 
  },
  { 
    name: 'White Chocolate Pastry', 
    description: 'Soft sponge pastry with white chocolate cream and garnish.', 
    price: '₹90 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/1200x/3f/02/d0/3f02d0bc8dbc70f5ba498c8009c8d2ea.jpg', 
    alt: 'White chocolate pastry topped with white chocolate garnish.' 
  },
  { 
    name: 'Strawberry Pastry', 
    description: 'Fresh strawberry and cream layered on soft sponge pastry.', 
    price: '₹85 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/1200x/63/2d/67/632d675ec1399c9f5faafeb360a5001a.jpg', 
    alt: 'Strawberry pastry with fresh strawberries and cream.' 
  },
  { 
    name: 'Black Forest Pastry', 
    description: 'Classic chocolate sponge with cherry and cream.', 
    price: '₹90 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/1200x/ad/03/37/ad033786a93e22dec047f7f81d272aa4.jpg', 
    alt: 'Black Forest pastry with cherry and cream topping.' 
  },
  { 
    name: 'Almond Pastry', 
    description: 'Delicate almond‑flavored sponge pastry with cream topping.', 
    price: '₹85 each', 
    category: MenuCategory.Pastries, 
    image: 'https://i.pinimg.com/736x/7a/cf/8f/7acf8fa9bb8d637b05ead07c9f16ca92.jpg', 
    alt: 'Almond pastry topped with almond flakes and cream.' 
  },

  // --- BREADS ---
  { 
    name: 'White Bread', 
    description: 'Soft, fluffy white bread loaf, perfect for sandwiches.', 
    price: '₹50 per loaf', 
    category: MenuCategory.Bread, 
    image: 'https://i.pinimg.com/1200x/56/85/d5/5685d50407613553703fce3b6c35ac6f.jpg', 
    alt: 'White bread loaf sliced ready for sandwiches.' 
  },
  { 
    name: 'Bun Bread', 
    description: 'Healthy and wholesome Bun bread loaf.', 
    price: '₹60 per loaf', 
    category: MenuCategory.Bread, 
    image: 'https://i.pinimg.com/1200x/ca/12/6e/ca126e6fba83b7f7f6f9199ef6d31b0d.jpg', 
    alt: 'Bun bread loaf rich in whole grains.' 
  },
  
  

  // --- BISCUITS/Cookies ---
  { 
    name: 'Butter Biscuit', 
    description: 'Crunchy and buttery biscuits, perfect with tea.', 
    price: '₹40 per 100g', 
    category: MenuCategory.Cookies, 
    image: 'https://i.pinimg.com/1200x/17/96/6e/17966e168c38a501a575b2aa7badbf2c.jpg', 
    alt: 'Crunchy buttery biscuits served with tea.' 
  },
  { 
    name: 'Chocolate Biscuit', 
    description: 'Delicious biscuits coated with chocolate.', 
    price: '₹50 per 100g', 
    category: MenuCategory.Cookies, 
    image: 'https://i.pinimg.com/736x/56/bf/cb/56bfcb752f3014609f7f8714b4d403f9.jpg', 
    alt: 'Chocolate‑coated biscuits stacked on a tray.' 
  },
  { 
    name: 'Almond Biscuit', 
    description: 'Crunchy biscuits with almond flavor.', 
    price: '₹55 per 100g', 
    category: MenuCategory.Cookies, 
    image: 'https://i.pinimg.com/1200x/76/c4/2a/76c42ad68c9eb25f19596e437362e6ac.jpg', 
    alt: 'Almond flavored biscuits with almond topping.' 
  },
  { 
    name: 'Osmania Biscuit', 
    description: 'Osmania biscuits with ghee flavor.', 
    price: '₹55 per 100g', 
    category: MenuCategory.Cookies, 
    image: 'https://i.pinimg.com/736x/91/24/be/9124beccb76726ce3612c30c54c46609.jpg', 
    alt: 'osmania biscuits.' 
  },
  
];


export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg', alt: 'Vibrant display of beautifully decorated cakes and cupcakes at Naufel Bakers.' },
  { id: 2, src: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg', alt: 'The modern and welcoming storefront of Naufel Bakers with large glass windows.' },
  { id: 4, src: 'https://i.pinimg.com/736x/ba/71/50/ba7150e11b77907dee611124897ebee5.jpg', alt: 'Delicious assortment of freshly baked pastries and croissants on display.' },
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