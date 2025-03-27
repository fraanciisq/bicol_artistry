import React from "react";
import { Layout } from "@/components/layout/Layout";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Pottery: A Timeless Tradition",
      excerpt: "Discover the intricate process and cultural significance behind Bicol's pottery craftsmanship.",
      image: "/images/blog/pottery.jpg",
      date: "October 10, 2023",
      author: "Maria Santos",
    },
    {
      id: 2,
      title: "Sustainable Crafting: How We Support the Environment",
      excerpt: "Learn about our commitment to sustainability and how our artisans embrace eco-friendly practices.",
      image: "/images/blog/sustainability.jpg",
      date: "September 25, 2023",
      author: "Sophia Mendoza",
    },
    {
      id: 3,
      title: "Meet the Artisans: Stories Behind the Craft",
      excerpt: "Get to know the talented individuals who bring Bicol's rich cultural heritage to life.",
      image: "/images/blog/artisans.jpg",
      date: "September 5, 2023",
      author: "Juan Reyes",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore stories, insights, and updates from the world of Bicol craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-terracotta-500 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
