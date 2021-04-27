import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Directory</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='image/landingsm.jpg'
              text='Construction Placeholder'
              label='Hardscaping'
              path='/services'
            />
            <CardItem
              src='image/patio1.jpg'
              text='Placeholder'
              label='Walls and Patios'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='image/curbappeal.jpg'
              text='Landscaping to include planting and laying mulch'
              label='Landscaping'
              path='/services'
            />
            <CardItem
              src='image/wash2.jpg'
              text='Professional pressure washing of your deck, boat, driveway, fence! '
              label='Pressure Washing'
              path='/services'
            />
            <CardItem
              src='image/demo.jpg'
              text='Demo and remove your old unfinished projects and crumbling patios'
              label='Demolition'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
