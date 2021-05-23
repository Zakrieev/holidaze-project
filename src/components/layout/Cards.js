import React from 'react';
import CardItem from './CardItem';
import "../../sass/style.scss";

function Cards() {
  return (
    <div className='cards'>
      <h1 className="header-featured">We select the best deals for you</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/hotels.jpeg'
              label='HOTEL'
              path='/accommodations?filter=Hotel'
            />
            <CardItem
              src='assets/bandb.jpeg'
              label='B&B'
              path='/accommodations?filter=B and B'
            />
            <CardItem
              src='assets/guest.jpeg'
              label='GUESTHOUSE'
              path='/accommodations?filter=Guesthouse'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
