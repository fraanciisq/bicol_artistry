import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const blogPosts = [
  {
    id: 1,
    title: "Way For A Greener Future",
    excerpt: "Sustainability is no longer an optional endeavor for businesses.",
    image: "/images/blog/greener-future.jpg",
    date: "September 9, 2023",
    author: "Alex Green",
    category: "Ecology",
    content: `
      <p>Sustainable practices often lead to reduced energy and resource consumption, resulting in cost savings over time. Consumers increasingly prefer eco-friendly products and services, creating a growing market for sustainable businesses.</p>
      <h3>The Business Case For Sustainability:</h3>
      <p>Implement measures to reduce carbon emissions, conserve resources, and minimize waste. Assess and improve the sustainability of supply chains, from sourcing raw materials to distribution. Develop and promote products and services that have a minimal environmental footprint.</p>
      <h3>Corporate Social Responsibility (CSR):</h3>
      <p>Ensure that corporate policies and practices align with sustainability goals. Uphold ethical standards when dealing with employees, suppliers, and customers. Support environmental organizations and initiatives that contribute positively to sustainable development.</p>
      <h3>Sustainable Innovation:</h3>
      <p>Invest in green technologies and innovative solutions that reduce environmental impact. Embrace circular technologies and practices, such as renewable energy sources and energy-efficient systems.</p>
      <p>Conclusion: Sustainable business practices are not just a trend; they are a fundamental shift in the way companies operate. Adopting sustainability not only represents a choice but also a strategic one, as it enhances brand value, mitigates risks, nurtures competitiveness, and creates a positive impact on society and the environment.</p>
    `,
    authorImage: "/images/artisans/alex-green.jpg",
    authorBio: "Alex Green, an ardent Collaboration Advocate.",
  },
  {
    id: 2,
    title: "Sustainable Crafting: How We Support the Environment",
    excerpt: "Learn about our commitment to sustainability and how our artisans embrace eco-friendly practices.",
    image: "/images/blog/sustainability.jpg",
    date: "September 25, 2023",
    author: "Sophia Mendoza",
    category: "Sustainability",
    content: `
      <p>Our artisans are committed to using eco-friendly materials and sustainable practices in their craft. From sourcing renewable resources to minimizing waste, every step is taken with the environment in mind.</p>
      <h3>Eco-Friendly Materials:</h3>
      <p>We prioritize the use of natural, renewable materials such as abaca fibers, bamboo, and clay. These materials are not only sustainable but also showcase the beauty of Bicol's natural resources.</p>
      <h3>Reducing Waste:</h3>
      <p>Our production processes are designed to minimize waste. Leftover materials are often repurposed into new products, ensuring nothing goes to waste.</p>
      <p>By supporting our products, you contribute to a greener future while celebrating the artistry of Bicol's talented craftsmen.</p>
    `,
    authorImage: "/images/artisans/sophia-mendoza.jpg",
    authorBio: "Sophia Mendoza, Sustainability Advocate.",
  },
  {
    id: 3,
    title: "Meet the Artisans: Stories Behind the Craft",
    excerpt: "Get to know the talented individuals who bring Bicol's rich cultural heritage to life.",
    image: "/images/artisan-working.jpg",
    date: "September 5, 2023",
    author: "Juan Reyes",
    category: "Artisans",
    content: `
      <p>The artisans of Bicol are the heart and soul of our cultural heritage. Their dedication to preserving traditional craftsmanship is evident in every piece they create.</p>
      <h3>The Art of Weaving:</h3>
      <p>Weaving has been a cornerstone of Bicol's culture for centuries. Using natural fibers like abaca and pandan, artisans craft intricate patterns that tell stories of their ancestry.</p>
      <h3>Pottery and Clay Craft:</h3>
      <p>Bicol's pottery tradition is deeply rooted in its volcanic soil. Artisans shape and fire clay into beautiful, functional pieces that reflect the region's natural beauty.</p>
      <h3>Empowering Communities:</h3>
      <p>Through their craft, artisans not only preserve traditions but also support their families and communities. Each purchase helps sustain these livelihoods and keeps the culture alive.</p>
      <p>By celebrating the artisans of Bicol, we honor their skills, stories, and the cultural legacy they pass on to future generations.</p>
    `,
    authorImage: "/images/artisans/juan-reyes.jpg",
    authorBio: "Juan Reyes, Head of Artisan Relations.",
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(slug || "", 10));

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-lg text-gray-600">The blog post you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-terracotta-700 bg-terracotta-100 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-gray-600">{post.excerpt}</p>
            <p className="text-sm text-gray-500 mt-2">
              {post.date} &middot; {post.author}
            </p>
          </div>

          {post.image && (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <div className="mt-12 flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold">{post.author}</h4>
              <p className="text-sm text-gray-600">{post.authorBio}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
