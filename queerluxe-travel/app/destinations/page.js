import React, { useEffect, useState } from 'react';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Make the API call when the component mounts
    fetch('/api/destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error('Error fetching destinations:', error));
  }, []);

  return (
    <div className="bg-background text-text">
      <header className="hero-section relative h-screen">
        <img src="/path/to/destination.jpg" alt="Luxurious Travel Destination" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Explore the World in Style</h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary">From the Champs-Élysées to the canals of Venice, discover the most fabulous destinations.</p>
        </div>
      </header>
      <section className="destination-cards py-16">
        <div className="container mx-auto px-4">
          {destinations.map(destination => (
            <div key={destination._id} className="mb-8">
              <h2 className="text-2xl font-bold text-primary">{destination.name}</h2>
              <p className="text-lg text-secondary">{destination.description}</p>
              <img src={destination.imageUrl} alt={destination.name} className="mt-4 rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations