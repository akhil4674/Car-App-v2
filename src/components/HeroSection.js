import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import CarPartsLifespan from './CarPartsLifespan';




function HeroSection() {
  return (
    <div className='hero-container'>
    <video src={require('./video-2.mp4')} autoPlay loop muted />
    <h1>Maintainance Awaits</h1>
    <p>What are you waiting for ?</p>
    <div className='hero-btns'>
        <Button
         to="/CarPartsLifespan"
         className="btns"
         buttonStyle="btn--outline"
         buttonSize='btn--large'
         >
         Get Started 
         </Button>
          <Button
         className="btns"
         buttonStyle="btn--primary"
         buttonSize='btn--large'
         > Book Your Appointment  <i className='far fa-play-circle'/>
          </Button>



    </div>
    
    </div>
  )
}

export default HeroSection