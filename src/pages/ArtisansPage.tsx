import { useEffect, useState } from 'react';
import { Artisan } from '@/types';
import { artisans } from '@/data';
import { Layout } from '@/components/layout/Layout';

const ArtisansPage = () => {
  const [artisanList, setArtisanList] = useState<Artisan[]>([]);

  useEffect(() => {
    setArtisanList(artisans);
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-display font-semibold mb-8">Our Artisans</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisanList.map((artisan) => (
              <div key={artisan.id} className="bg-white dark:bg-bicolartistry-900 rounded-lg shadow-lg p-6">
                <img src={artisan.image} alt={artisan.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2">{artisan.name}</h2>
                <p className="text-bicolartistry-600 dark:text-bicolartistry-300">{artisan.bio}</p>
                <p className="text-bicolartistry-500 dark:text-bicolartistry-400 mt-2">{artisan.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtisansPage;
