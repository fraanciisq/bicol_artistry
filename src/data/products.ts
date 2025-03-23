
import { Product, Category, Artisan } from '@/types';

export const artisans: Artisan[] = [
  {
    id: '1',
    name: 'Maria Santos',
    bio: 'Maria has been crafting traditional Bicol pottery for over 20 years, passing down techniques from her grandmother.',
    location: 'Albay, Bicol',
    image: '/images/artisans/maria-santos.jpg'
  },
  {
    id: '2',
    name: 'Juan Reyes',
    bio: 'Juan specializes in abaca weaving, creating intricate patterns inspired by Bicol\'s natural landscapes.',
    location: 'Sorsogon, Bicol',
    image: '/images/artisans/juan-reyes.jpg'
  },
  {
    id: '3',
    name: 'Elena Cruz',
    bio: 'Elena is known for her stunning shell craft creations, using sustainably sourced materials from local beaches.',
    location: 'Catanduanes, Bicol',
    image: '/images/artisans/elena-cruz.jpg'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Pottery',
    description: 'Traditional clay pottery showcasing Bicol\'s rich cultural heritage',
    image: '/images/categories/pottery.jpg',
    slug: 'pottery'
  },
  {
    id: '2',
    name: 'Textiles',
    description: 'Handwoven fabrics and textiles made from locally sourced materials',
    image: '/images/categories/textiles.jpg',
    slug: 'textiles'
  },
  {
    id: '3',
    name: 'Baskets',
    description: 'Intricately woven baskets using traditional Bicol techniques',
    image: '/images/categories/baskets.jpg',
    slug: 'baskets'
  },
  {
    id: '4',
    name: 'Shell Craft',
    description: 'Beautiful creations crafted from locally sourced shells',
    image: '/images/categories/shell-craft.jpg',
    slug: 'shell-craft'
  },
  {
    id: '5',
    name: 'Wood Carvings',
    description: 'Exquisite wood sculptures handcrafted by master artisans',
    image: '/images/categories/wood-carvings.jpg',
    slug: 'wood-carvings'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Abaca Fiber Hand Bag',
    description: 'Handcrafted bag made from natural abaca fibers. Each piece showcases the intricate weaving techniques passed down through generations of Bicol artisans. Durable, eco-friendly, and uniquely stylish.',
    price: 1200,
    images: ['/images/products/abaca-bag-1.jpg', '/images/products/abaca-bag-2.jpg', '/images/products/abaca-bag-3.jpg'],
    category: 'Textiles',
    featured: true,
    inStock: true,
    rating: 4.8,
    artisan: artisans[1],
    material: 'Abaca fiber',
    dimensions: '30cm x 25cm x 15cm',
    weight: '400g',
    createdAt: '2023-10-15T10:00:00Z',
    updatedAt: '2023-10-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Traditional Clay Pot',
    description: 'Authentic clay pot made using traditional Bicol pottery techniques. Each pot is individually shaped, fired, and detailed by hand, making every piece unique. Perfect for both decorative use and cooking traditional dishes.',
    price: 850,
    images: ['/images/products/clay-pot-1.jpg', '/images/products/clay-pot-2.jpg'],
    category: 'Pottery',
    featured: true,
    inStock: true,
    rating: 4.5,
    artisan: artisans[0],
    material: 'Natural clay',
    dimensions: '20cm height, 15cm diameter',
    weight: '1.2kg',
    createdAt: '2023-09-20T14:30:00Z',
    updatedAt: '2023-09-20T14:30:00Z'
  },
  {
    id: '3',
    name: 'Shell Craft Wind Chime',
    description: 'Beautiful wind chime crafted from locally sourced shells. The gentle sounds evoke the coastal breezes of Bicol\'s pristine beaches. Each shell is carefully selected, cleaned, and arranged to create a harmonious sound.',
    price: 650,
    images: ['/images/products/shell-chime-1.jpg', '/images/products/shell-chime-2.jpg'],
    category: 'Shell Craft',
    featured: false,
    inStock: true,
    rating: 4.7,
    artisan: artisans[2],
    material: 'Natural shells, abaca string',
    dimensions: '45cm length',
    weight: '300g',
    createdAt: '2023-11-05T09:15:00Z',
    updatedAt: '2023-11-05T09:15:00Z'
  },
  {
    id: '4',
    name: 'Handwoven Pandan Mat',
    description: 'Traditional sleeping mat (banig) handwoven from pandan leaves. These colorful mats feature intricate patterns unique to the Bicol region. Cool to the touch and perfect for hot tropical nights.',
    price: 1500,
    images: ['/images/products/pandan-mat-1.jpg', '/images/products/pandan-mat-2.jpg'],
    category: 'Textiles',
    featured: true,
    inStock: true,
    rating: 4.6,
    artisan: artisans[1],
    material: 'Pandan leaves',
    dimensions: '180cm x 90cm',
    weight: '800g',
    createdAt: '2023-08-12T11:45:00Z',
    updatedAt: '2023-08-12T11:45:00Z'
  },
  {
    id: '5',
    name: 'Abaca Woven Basket',
    description: 'Sturdy and elegant basket handwoven from abaca fibers. Features traditional Bicol patterns and intricate weaving techniques. Perfect for storage or as a decorative piece in your home.',
    price: 950,
    images: ['/images/products/abaca-basket-1.jpg', '/images/products/abaca-basket-2.jpg'],
    category: 'Baskets',
    featured: false,
    inStock: true,
    rating: 4.8,
    artisan: artisans[1],
    material: 'Abaca fiber',
    dimensions: '35cm diameter, 25cm height',
    weight: '600g',
    createdAt: '2023-07-28T16:20:00Z',
    updatedAt: '2023-07-28T16:20:00Z'
  },
  {
    id: '6',
    name: 'Handcarved Wooden Mayon Volcano',
    description: 'Exquisite wooden sculpture of the iconic Mayon Volcano, hand-carved by master artisans in Bicol. Each piece captures the perfect cone shape and majestic presence of this natural wonder.',
    price: 2500,
    images: ['/images/products/wooden-mayon-1.jpg', '/images/products/wooden-mayon-2.jpg'],
    category: 'Wood Carvings',
    featured: true,
    inStock: true,
    rating: 4.9,
    material: 'Locally sourced hardwood',
    dimensions: '25cm height, 15cm base diameter',
    weight: '1.5kg',
    createdAt: '2023-10-02T13:10:00Z',
    updatedAt: '2023-10-02T13:10:00Z'
  },
  {
    id: '7',
    name: 'Shell Craft Picture Frame',
    description: 'Beautiful picture frame adorned with intricate shell designs. Each shell is carefully selected and arranged to create a stunning frame that brings a piece of Bicol\'s beaches into your home.',
    price: 750,
    images: ['/images/products/shell-frame-1.jpg', '/images/products/shell-frame-2.jpg'],
    category: 'Shell Craft',
    featured: false,
    inStock: true,
    rating: 4.6,
    artisan: artisans[2],
    material: 'Wood, natural shells',
    dimensions: '25cm x 20cm (fits 15cm x 10cm photo)',
    weight: '400g',
    createdAt: '2023-09-14T10:30:00Z',
    updatedAt: '2023-09-14T10:30:00Z'
  },
  {
    id: '8',
    name: 'Traditional Bicol Hat',
    description: 'Handwoven hat made from natural fibers, designed to provide protection from the sun while working in the fields. This traditional Bicol accessory now serves as both a functional item and a beautiful cultural piece.',
    price: 580,
    images: ['/images/products/bicol-hat-1.jpg', '/images/products/bicol-hat-2.jpg'],
    category: 'Textiles',
    featured: false,
    inStock: true,
    rating: 4.7,
    artisan: artisans[1],
    material: 'Abaca and bamboo',
    dimensions: '40cm diameter',
    weight: '200g',
    createdAt: '2023-11-20T08:45:00Z',
    updatedAt: '2023-11-20T08:45:00Z'
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, limit = 4): Product[] => {
  const currentProduct = getProductById(id);
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.id !== id && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};
