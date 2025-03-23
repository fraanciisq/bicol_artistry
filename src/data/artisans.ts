
import { Artisan } from '@/types';

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

export const getArtisanById = (id: string): Artisan | undefined => {
  return artisans.find(artisan => artisan.id === id);
};
