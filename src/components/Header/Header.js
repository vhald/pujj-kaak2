import React from 'react';
import './Header.css';
import steps from "../../images/Patchwith text.png"
const Header = () => {
  return (
    <>
    <div className="sticky-header">
      <h1 className='heading'>PUJJ KAAK</h1>
      <h1 className='heading1'>Fresh Only</h1>
    </div>
    <div className='hero-section'>
      <img width={"50%"} src={steps}/>
      <div className='steps'>
        <span className='step-counts'>
 <p >1</p>    OPEN 
        </span>
        <span className='step-counts'>
    <p>2</p> WASH     
        </span>
        <span className='step-counts'>
         <p>3</p>   COOK  
          </span>
      </div>
    </div>
    </>
  );
};

export default Header;