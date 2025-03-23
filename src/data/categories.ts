
import { Category } from '@/types';

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

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};
