import React from 'react';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import CarouselComponent from './Carousel';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CarouselComponent />
    </div>
  );
};

export default Home;