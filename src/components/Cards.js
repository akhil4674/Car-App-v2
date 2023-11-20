import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Most Popular Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('./brake_image_1.jpg')}
              text='Play It safe '
              label='Brakes'
              path='/services'
            />
            <CardItem
              src={require('./engine_image_1.jpg')}
              text='Travel smooth ! '
              label='Diagnosis'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./tyre_image_1.jpg')}
              text='Make your Car fit for Winter!'
              label='Engine'
              path='/services'
            />
            <CardItem
              src={require('./electric_1.jpg')}
              text='Carefree Solution for your Electric Vehicle'
              label='Electric'
              path='/products'
            />
            <CardItem
              src={require('./red.jpg')}
              text='Accessories highlights and offers'
              label='Accessories'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;