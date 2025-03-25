import { Layout } from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-display font-semibold mb-8">About Us</h1>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6">
            Welcome to Bicol Artistry! We are dedicated to preserving and celebrating the rich cultural heritage of Bicol through authentic handcrafted products made by skilled local artisans.
          </p>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300 mb-6">
            Our mission is to provide sustainable livelihoods to local communities by showcasing their unique crafts to the world. Each piece tells a story of tradition, creativity, and passion.
          </p>
          <p className="text-bicolartistry-600 dark:text-bicolartistry-300">
            Thank you for supporting our artisans and helping us keep the Bicol culture alive.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
