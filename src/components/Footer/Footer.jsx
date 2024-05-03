import React from 'react';
import "./style.css"
import Scooty from "../../images/Scooty.png"
import Whatsapp from "../../images/Whatsapp.png"
import facebook from "../../images/facebook.png"
import insta from "../../images/insta.png"
import Call from "../../images/Call.png"
const Footer = () => {
  return (
    <>
   <div className='footer'>
        <img width={"10%"} src={Scooty}/>

    <div className='contact'>
        <div className='contact-whats'>
            <span className='deliver'>For <p>Home Delivery</p></span>
            <div className='deliver-text'> 
                <img width={"7%"} height={"36%"} src={Whatsapp}/>
                <span>9055414246</span>
            </div>

        </div>
        <div className='contact-whats'>
        <div className='deliver'>
            <span style={{width:"100%"}}>Call or Whatsapp at</span>
            <div className='deliver-text1'> 
                <img  width={"7%"} height={"36%"} src={Call}/>
                <span>9682510279</span>
            </div>
        </div>
        </div>
    </div>
    <div className='social-media'>
            <span>Follow Us On</span>
            <img width={"2%"} src={facebook}/>
            <img width={"2%"} src={insta}/>
            <span className='pujj-bold'>Pujj Kaak</span>
        </div>
        </div>
    </>
  );
};

export default Footer;