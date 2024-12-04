import React from 'react';

const About = () => {
  return (
    <div className="bg-background text-text">
      <header className="hero-section relative h-screen">
        <img src="/path/to/about.jpg" alt="About Us Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Our Story</h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary">From humble beginnings to a global movement, learn about our journey.</p>
        </div>
      </header>
      <section className="our-mission py-16">
        <div className="container mx-auto px-4">
          <p className="text-lg text-secondary">At QueerLuxe Travel, our mission is to provide luxurious, safe, and inclusive travel experiences for the LGBTQ+ community. We believe in the power of hope and are committed to making the world a better, more accepting place.</p>
        </div>
      </section>
      <section className="our-team py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary">Our Team</h2>
          {/* Add team member cards here */}
        </div>
      </section>
      <section className="contact-us py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
          <p className="text-lg text-secondary mt-4">We'd love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out.</p>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-secondary">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-secondary">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-secondary">Message</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-primary transition duration-300">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
