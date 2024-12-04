import React from 'react';

const Community = () => {
  return (
    <div className="bg-background text-text">
      <header className="hero-section relative h-screen">
        <img src="/path/to/community.jpg" alt="Community Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Making a Difference</h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary">We're committed to supporting LGBTQ+ causes around the world.</p>
        </div>
      </header>
      <section className="community-initiatives py-16">
        <div className="container mx-auto px-4">
          {/* Add community initiatives here */}
        </div>
      </section>
      <section className="donate-section py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary">Support Our Cause</h2>
          <p className="text-lg text-secondary mt-4">Your donations help us make a difference in the lives of LGBTQ+ individuals around the world.</p>
          <button className="mt-8 px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-primary transition duration-300">Donate Now</button>
        </div>
      </section>
    </div>
  );
};

export default Community;
