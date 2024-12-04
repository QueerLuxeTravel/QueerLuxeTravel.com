import React from 'react';

const Blog = () => {
  return (
    <div className="bg-background text-text">
      <header className="hero-section relative h-screen">
        <img src="/path/to/blog.jpg" alt="Blog Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Stories from Around the World</h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary">Read about the latest travel trends, destination guides, and community stories.</p>
        </div>
      </header>
      <section className="blog-posts py-16">
        <div className="container mx-auto px-4">
          {/* Add blog post cards here */}
        </div>
      </section>
      <section className="subscribe-section py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary">Stay Connected</h2>
          <p className="text-lg text-secondary mt-4">Subscribe to our newsletter for the latest travel tips, destination guides, and community stories.</p>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-secondary">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-primary transition duration-300">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
