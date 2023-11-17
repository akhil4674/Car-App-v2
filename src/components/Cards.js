import React from 'react';

function Cards() {
  return (
    <div className='cards'>
    <h1>Check Out these Services!</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem />
            </ul>
        </div>
    </div>
    </div>
  );
}

export default Cards;