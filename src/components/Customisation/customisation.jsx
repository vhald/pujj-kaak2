import React from 'react';
import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Baktur from "../../images/Baktur.png"
import Kaen from "../../images/Kaen.png"
import Raan from "../../images/Raan.png"
import Legs from "../../images/Legs.png"
import Gardan from "../../images/Gardan.png"
import Chest from "../../images/Chest.png"
import Tail from "../../images/Tail.png"
import Chicken from "../../images/Chicken.png"
import Quality from "../../images/Quality.png"


const Customisation = () => {
  return (
    <>
    <hr/>
    <div className='custom-text'>
      <h1 className="heading2" style={{fontFamily: "cursive"}}  >For The </h1>
      <h1 className="heading2" >
Lovers Of Meat</h1>
<h1 className="heading2"  style={{color: 'red' }}>
Customisation Available</h1>
</div>
   
    <Carousel>
                <div>
                    <img src={Baktur} />
                    <p className="legend"> Baktur</p>
                </div>
                <div>
                    <img src={Kaen}/>
                    <p className="legend">Kaen</p>
                </div>
                <div>
                    <img src={Raan}/>
                    <p className="legend">Raan</p>
                </div>
                <div>
                    <img src={Tail}/>
                    <p className="legend">Tail</p>
                </div>
                <div>
                    <img src={Gardan}/>
                    <p className="legend">Gardan</p>
                </div>
            </Carousel>
            <hr/>

            <div className='custom-text'>
      <h1 style={{fontFamily: "cursive"}}  >For The </h1>
      <h1 className="heading3" >
Lovers Of Chicken</h1>
<h1 className="heading3"  style={{color: 'red' }}>
Customisation Available</h1>
</div>
<Carousel>
                <div>
                    <img src={Legs} />
                    <p className="legend"> Legs</p>
                </div>
                <div>
                    <img src={Chest}/>
                    <p className="legend">Chest</p>
                </div>
                <div>
                    <img src={Chicken}/>
                    <p className="legend">Chicken</p>
                </div>
            </Carousel>
            <div className='custom-text'>
            <img width={"40%"} src={Quality}/>
            </div>
    </>
  );
};

export default Customisation;