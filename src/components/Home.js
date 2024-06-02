import React from 'react';

const Home = () => {
  return (
    <div
      className="container-fluid p-0" // Use container-fluid to make it full-width and remove padding
      style={{
        backgroundImage: `url(${'https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <div className="jumbotron" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
        <h1 className="display-4">Welcome to Our Tourism Website!</h1>
        <p className="lead">Discover the best tours and experiences curated just for you. Whether you seek the serene beauty of
      tranquil landscapes, the thrill of adventure in the great outdoors, or the vibrant culture of bustling
      cities, our meticulously crafted tours promise to fulfill your every desire..</p>
        <hr className="my-4" />
        <p>Explore now and make unforgettable memories.</p>
      </div>
    </div>
  );
};

export default Home;
