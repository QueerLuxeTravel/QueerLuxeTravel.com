import React from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn} className="bg-background text-text">
      <header className="hero-section relative h-screen">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/path/to/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Welcome to QueerLuxe Travel</h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary">Where Every Journey is a Celebration of You</p>
          <button className="mt-8 px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-primary transition duration-300">Start Your Adventure</button>
        </div>
      </header>
      <section className="introduction-section py-16 bg-secondary text-background">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-2xl">Oh, honey, let me tell you, we've come a long way since those bricks were thrown at Stonewall...</p>
          <img src="/path/to/collage.jpg" alt="Historical LGBTQ+ Figures" className="mt-8 mx-auto" />
        </div>
      </section>
      {/* Add more sections as needed */}
    </animated.div>
  );
};

export default Home;
