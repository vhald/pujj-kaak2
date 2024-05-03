import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import meatPhoto from '../images/Meat.png'
import chickenPhoto from '../images/Chicken.png'

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src={meatPhoto} alt="Meat Photo" />
      </div>
      <div>
        <img src={chickenPhoto} alt="Chicken Photo" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;