import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bicol-accent to-white -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-bicol-dark mb-6">
              Our Story
            </h1>
            <p className="text-lg text-bicol-dark/80">
              Preserving tradition, embracing innovation, and supporting the artisans of the Bicol Region.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="/images/artisans/Bicol artisans at work.jpeg" 
                alt="Bicol artisans at work" 
                className="rounded-xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="inline-block px-3 py-1 bg-terracotta-500 text-white text-xs font-semibold rounded-full">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-bicol-dark">
                Preserving Cultural Heritage Through Craftsmanship
              </h2>
              <p className="text-lg text-bicol-dark/80">
                At Bicol Crafts, our mission is to preserve and celebrate the rich cultural heritage of the Bicol Region through exceptional craftsmanship. We strive to provide a platform for local artisans to showcase their talents and traditions, ensuring these time-honored skills continue to thrive in the modern world.
              </p>
              <p className="text-lg text-bicol-dark/80">
                We are committed to fair trade practices, sustainable sourcing, and empowering the communities behind these beautiful creations. Each product tells a story of cultural richness, exceptional skill, and dedication to quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bicol-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-terracotta-500 text-white text-xs font-semibold rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-bicol-dark mt-4">
              What Drives Us Forward
            </h2>
            <p className="mt-4 text-lg text-bicol-dark/70 max-w-3xl mx-auto">
              Our core values guide everything we do as we work to preserve tradition while embracing innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We are committed to environmentally responsible practices throughout our supply chain. From sourcing raw materials to packaging, we prioritize sustainability at every step.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Every product we offer is authentic, handcrafted by skilled artisans using traditional techniques passed down through generations. We celebrate the genuine character of Bicol craftsmanship.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We believe in empowering the communities behind our products. By providing fair compensation and supporting local initiatives, we help ensure these traditions continue to thrive.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-terracotta-500 text-white text-xs font-semibold rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-bicol-dark mt-4">
              From Tradition to Innovation
            </h2>
            <p className="mt-4 text-lg text-bicol-dark/70 max-w-3xl mx-auto">
              Our path from a small community initiative to a platform celebrating Bicol craftsmanship
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 text-center md:text-right">
                <h3 className="text-2xl font-medium text-bicol-dark">2015</h3>
                <p className="text-bicol font-medium">The Beginning</p>
              </div>
              <div className="hidden md:block w-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-bicol-accent -translate-x-1/2"></div>
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-black border-4 border-white -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                <p className="text-bicol-dark/80">Started as a small community initiative to showcase the craftsmanship of local artisans in the Bicol Region. Our founder visited remote villages to discover hidden talents and traditional techniques.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 text-center md:text-right">
                <h3 className="text-2xl font-medium text-bicol-dark">2018</h3>
                <p className="text-bicol font-medium">Growing Community</p>
              </div>
              <div className="hidden md:block w-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-bicol-accent -translate-x-1/2"></div>
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-black border-4 border-white -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                <p className="text-bicol-dark/80">Expanded our network to include over 50 artisans across the region. Established our first physical store in Legazpi City, creating a central hub for local crafts.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 text-center md:text-right">
                <h3 className="text-2xl font-medium text-bicol-dark">2021</h3>
                <p className="text-bicol font-medium">Digital Transformation</p>
              </div>
              <div className="hidden md:block w-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-bicol-accent -translate-x-1/2"></div>
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-black border-4 border-white -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                <p className="text-bicol-dark/80">Launched our online platform to bring Bicol craftsmanship to a global audience. Integrated sustainable practices throughout our supply chain and established artisan training programs.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 text-center md:text-right">
                <h3 className="text-2xl font-medium text-bicol-dark">Today</h3>
                <p className="text-bicol font-medium">Global Impact</p>
              </div>
              <div className="hidden md:block w-12 relative">
                <div className="absolute left-1/2 top-0 h-1/2 w-0.5 bg-bicol-accent -translate-x-1/2"></div>
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-black border-4 border-white -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                <p className="text-bicol-dark/80">Now proudly representing over 200 artisans, with products shipping to customers worldwide. Our commitment to sustainability, fair trade, and cultural preservation continues to grow stronger every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bicol-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-terracotta-500 text-white text-xs font-semibold rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-bicol-dark mt-4">
              The People Behind Bicol Crafts
            </h2>
            <p className="mt-4 text-lg text-bicol-dark/70 max-w-3xl mx-auto">
              Passionate individuals dedicated to preserving and promoting Bicol craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="Maria Santos" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-bicol-dark">Maria Santos</h3>
              <p className="text-bicol font-medium">Founder & CEO</p>
              <p className="mt-2 text-bicol-dark/70">Born and raised in Albay, Maria founded Bicol Crafts with a vision to preserve the region's rich cultural heritage.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="Juan Reyes" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-bicol-dark">Juan Reyes</h3>
              <p className="text-bicol font-medium">Head of Artisan Relations</p>
              <p className="mt-2 text-bicol-dark/70">With deep connections to local communities, Juan works directly with artisans to bring their creations to market.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="Sophia Mendoza" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-bicol-dark">Sophia Mendoza</h3>
              <p className="text-bicol font-medium">Sustainability Director</p>
              <p className="mt-2 text-bicol-dark/70">Dedicated to ensuring our practices are environmentally responsible and socially beneficial.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-terracotta-500 text-white text-xs font-semibold rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-bicol-dark mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do you ensure fair compensation for artisans?</AccordionTrigger>
              <AccordionContent>
                We work directly with artisans, eliminating middlemen whenever possible. Our pricing model ensures that creators receive a fair percentage of each sale, well above industry standards. We also provide training and resources to help artisans optimize their production processes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Are your products environmentally sustainable?</AccordionTrigger>
              <AccordionContent>
                Yes, sustainability is at the core of our mission. We use locally sourced, renewable materials whenever possible. Our packaging is made from recycled and biodegradable materials, and we continually work to reduce our environmental footprint throughout our supply chain.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries worldwide. International shipping times vary by location, typically ranging from 7-14 business days. Please note that customs duties and taxes may apply depending on your country's regulations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I learn more about the artisans?</AccordionTrigger>
              <AccordionContent>
                Each product page features information about the artisan or community that created it. We also regularly share artisan stories on our blog and social media channels. For those interested in a deeper connection, we occasionally organize virtual meet-the-maker sessions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer custom or personalized items?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer customization for many of our products. Please contact our customer service team with your specific requirements, and we'll work with our artisans to create something truly unique for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      
    </Layout>
  );
};

export default AboutPage;
