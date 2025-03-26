import { useEffect } from "react";
import { Layout } from '@/components/layout/Layout';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ArtisanStory } from '@/components/home/ArtisanStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);

  return (
    <Layout>
      <FeaturedProducts />
      <ArtisanStory />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;
