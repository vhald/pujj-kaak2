import React from 'react';
import Header from './components/Header/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import chicken from "./images/Chicken.png"
import meat from "./images/Meat.png"
import Customisation from './components/Customisation/customisation';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
     <Header />
     <Carousel>
                <div>
                    <img src={chicken} />
                    <p className="legend"> Chicken</p>
                </div>
                <div>
                    <img src={meat}/>
                    <p className="legend">Meat</p>
                </div>
                <hr/>
            </Carousel>
<Customisation/>
<Footer/>
    </div>
  );
};

export default App;