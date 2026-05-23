
import { MenuItem, MenuCategory, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Philosophy', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

export const WHATSAPP_NUMBER = "917671073675";
export const WHATSAPP_MESSAGE = "Hello Naufel Bakers, I'd like to inquire about an order.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


export const MENU_ITEMS: MenuItem[] = [
  // --- Cool Cakes (Base Weight 0.5kg) ---
  { 
    id: 'cc1', 
    name: 'Pineapple Cake', 
    description: 'Fresh cream cake with tangy pineapple chunks.', 
    priceEgg: 450,
    priceEggless: 550, 
    category: MenuCategory.CoolCakes, 
    image: 'https://i.pinimg.com/736x/3b/e0/e3/3be0e304d677ee957d7858484fa15fb0.jpg', 
    alt: 'Fresh pineapple cake with yellow frosting',
    baseWeight: 0.5
  },
  { 
    id: 'cc2', 
    name: 'Butter Scotch', 
    description: 'Crunchy praline combined with smooth caramel cream.', 
    priceEgg: 500,
    priceEggless: 600,
    category: MenuCategory.CoolCakes, 
    image: 'https://i.pinimg.com/736x/17/12/d8/1712d8dd95bcbc4f293700f2faa81984.jpg', 
    alt: 'Butter scotch cake with caramel drizzle',
    baseWeight: 0.5
  },
  { 
    id: 'cc3', 
    name: 'Caramel Butter Scotch', 
    description: 'Rich caramel sauce layered with butterscotch crunch.', 
    priceEgg: 550,
    priceEggless: 650,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg', 
    alt: 'Rich caramel butterscotch cake',
    baseWeight: 0.5
  },
  { 
    id: 'cc4', 
    name: 'Strawberry Cake', 
    description: 'Sweet and fruity strawberry flavored fresh cream cake.', 
    priceEgg: 500,
    priceEggless: 600,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg', 
    alt: 'Pink strawberry cake with toppings',
    baseWeight: 0.5
  },
  { 
    id: 'cc5', 
    name: 'Black Forest', 
    description: 'Classic chocolate sponge with whipped cream and cherries.', 
    priceEgg: 550,
    priceEggless: 650, 
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg', 
    alt: 'Classic black forest cake with chocolate shavings',
    baseWeight: 0.5
  },
  { 
    id: 'cc6', 
    name: 'White Forest', 
    description: 'Vanilla sponge with white chocolate shavings and cherries.', 
    priceEgg: 550,
    priceEggless: 650,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg', 
    alt: 'Elegant white forest cake with white chocolate',
    baseWeight: 0.5
  },
  { 
    id: 'cc7', 
    name: 'Truffle Chocolate', 
    description: 'Rich and dense chocolate ganache cake.', 
    priceEgg: 650,
    priceEggless: 750,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg', 
    alt: 'Dark chocolate truffle cake',
    baseWeight: 0.5
  },
  { 
    id: 'cc8', 
    name: 'Vanilla Cake', 
    description: 'Simple, elegant, and soft classic vanilla cake.', 
    priceEgg: 600,
    priceEggless: 700,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg', 
    alt: 'Classic vanilla cake',
    baseWeight: 0.5
  },
  { 
    id: 'cc9', 
    name: 'Khowa Butter', 
    description: 'A rich traditional fusion flavor with khowa.', 
    priceEgg: 600,
    priceEggless: 700,
    category: MenuCategory.CoolCakes, 
    image: 'https://i.pinimg.com/736x/f9/04/da/f904da4afafcee028ec3a197f826f689.jpg', 
    alt: 'Rich khowa butter cake',
    baseWeight: 0.5
  },
  { 
    id: 'cc10', 
    name: 'Rasmalai Cake', 
    description: 'Fusion cake infused with saffron milk and cardamom.', 
    priceEgg: 700,
    priceEggless: 800,
    category: MenuCategory.CoolCakes, 
    image: 'https://i.pinimg.com/1200x/4e/0f/11/4e0f11b7c36f14ae2241a8df35fc9873.jpg', 
    alt: 'Rasmalai fusion cake with saffron tones',
    baseWeight: 0.5
  },
  { 
    id: 'cc11', 
    name: 'Almond Cake', 
    description: 'Nutty almond flavored cake with crunchy flakes.', 
    priceEgg: 600,
    priceEggless: 700,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg', 
    alt: 'Almond cake with roasted nuts',
    baseWeight: 0.5
  },
  { 
    id: 'cc12', 
    name: 'Pista Cake', 
    description: 'Delicate pistachio flavor with a green hue.', 
    priceEgg: 700,
    priceEggless: 750,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg', 
    alt: 'Pista flavored cake',
    baseWeight: 0.5
  },
  { 
    id: 'cc13', 
    name: 'Choco Vanilla', 
    description: 'The best of both worlds, chocolate and vanilla swirl.', 
    priceEgg: 600,
    priceEggless: 700,
    category: MenuCategory.CoolCakes, 
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg', 
    alt: 'Chocolate and vanilla combination cake',
    baseWeight: 0.5
  },
  { 
    id: 'cc14', 
    name: 'Oreo Cake', 
    description: 'Loaded with crushed Oreo cookies and cream.', 
    priceEgg: 750,
    priceEggless: 850,
    category: MenuCategory.CoolCakes, 
    image: 'https://i.pinimg.com/736x/24/33/22/243322512892302ac49896ccb6a3d706.jpg', 
    alt: 'Oreo cookie cake with chocolate drip',
    baseWeight: 0.5
  },

  // --- Special Cakes (Base Weight 1kg) ---
  { 
    id: 'sc1', 
    name: 'Fresh Fruit Cake', 
    description: 'Loaded with fresh seasonal exotic fruits.', 
    priceEgg: 849,
    priceEggless: 899,
    category: MenuCategory.SpecialCakes, 
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg', 
    alt: 'Fresh fruit cake topping',
    baseWeight: 1
  },
  { 
    id: 'sc2', 
    name: 'Dry Fruits Cake', 
    description: 'Rich cake embedded with premium dry fruits.', 
    priceEgg: 849,
    priceEggless: 899,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/1200x/0a/27/ac/0a27acd372042e6642ea996214fb1ed8.jpg', 
    alt: 'Rich dry fruit cake',
    baseWeight: 1
  },
  { 
    id: 'sc3', 
    name: 'Blueberry Cake', 
    description: 'Exotic blueberry filling with a violet hue.', 
    priceEgg: 799,
    priceEggless: 849,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/1200x/28/71/c1/2871c135d6f0dd51009787fb7f6a09e4.jpg', 
    alt: 'Blueberry cake with purple frosting',
    baseWeight: 1
  },
  { 
    id: 'sc4', 
    name: 'Rainbow Cake', 
    description: 'Seven colorful layers of joy.', 
    priceEgg: 699,
    priceEggless: 749,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/736x/2a/9a/58/2a9a588635a6e9028cb0379701f5911c.jpg', 
    alt: 'Rainbow layered cake',
    baseWeight: 1
  },
  { 
    id: 'sc5', 
    name: 'Total Chocolate', 
    description: 'For the ultimate chocolate lover.', 
    priceEgg: 899,
    priceEggless: 999,
    category: MenuCategory.SpecialCakes, 
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg', 
    alt: 'Total chocolate cake',
    baseWeight: 1
  },
  { 
    id: 'sc6', 
    name: 'Total Chocolate Silk', 
    description: 'Smooth, silky chocolate ganache finish.', 
    priceEgg: 1099,
    priceEggless: 1149,
    category: MenuCategory.SpecialCakes, 
    image: 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg', 
    alt: 'Chocolate silk cake',
    baseWeight: 1
  },
  { 
    id: 'sc7', 
    name: 'Belgian Chocolate', 
    description: 'Made with premium Belgian couverture chocolate.', 
    priceEgg: 899,
    priceEggless: 999,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/736x/50/98/4c/50984c9dd5563be459b1dad6bcc103c7.jpg', 
    alt: 'Belgian chocolate cake',
    baseWeight: 1
  },
  { 
    id: 'sc8', 
    name: 'Red Velvet', 
    description: 'Premium red velvet with authentic cream cheese frosting.', 
    priceEgg: 899,
    priceEggless: 949,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/736x/c2/37/cd/c237cd82be65cbe41f13e85f1c6a898f.jpg', 
    alt: 'Red velvet cake',
    baseWeight: 1
  },
  { 
    id: 'sc9', 
    name: 'Ferrero Rocher', 
    description: 'Hazelnut chocolate cake topped with Ferrero Rochers.', 
    priceEgg: 1499,
    priceEggless: 1499,
    category: MenuCategory.SpecialCakes, 
    image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg', 
    alt: 'Ferrero Rocher style chocolate cake',
    baseWeight: 1
  },
  { 
    id: 'sc10', 
    name: 'Kitkat Cake', 
    description: 'Surrounded by Kitkat bars and topped with gems/chocolate.', 
    priceEgg: 1399,
    priceEggless: 1399,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/736x/c2/d0/2f/c2d02f3a0e602d4cb9a1564771235477.jpg', 
    alt: 'Chocolate cake with kitkat style bars',
    baseWeight: 1
  },
  { 
    id: 'sc11', 
    name: 'Double Chocolate', 
    description: 'Extra rich double chocolate delight.', 
    priceEgg: 600,
    priceEggless: 650,
    category: MenuCategory.SpecialCakes, 
    image: 'https://i.pinimg.com/1200x/66/18/b8/6618b8c40f41e423d3d4e8e9e6059208.jpg', 
    alt: 'Double chocolate cake',
    baseWeight: 1
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: '/gallery_biscuits.png', alt: 'Premium traditional dry fruit Karachi biscuits stacked on a brass plate.' },
  { id: 2, src: '/gallery_puffs.png', alt: 'Flaky golden baked Indian veg puffs (paneer patties) fresh from the oven.' },
  { id: 3, src: '/gallery_plum_cake.png', alt: 'Traditional Indian plum cake sliced on a wooden board, loaded with fruits.' },
  { id: 4, src: '/gallery_rusks.png', alt: 'Crispy double-baked tea rusks stacked next to a glass of hot Masala Chai.' },
  { id: 5, src: '/gallery_rasmalai_cake.png', alt: 'Elegant Rasmalai fusion cream cake decorated with dry fruits and saffron.' },
  { id: 6, src: '/gallery_bun_maska.png', alt: 'Classic soft buttered Bun Maska served next to a steaming hot tea cup.' },
];
