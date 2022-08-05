import React from 'react';
import './Galary.scss';
import galaryData from './galaryData';

function Galary() {
  return (
    <div className='galary__container'>
      {galaryData.map((item) => {
        return (
          <div key={item.id} className='galary__container-grid' id={item.id}>
            <img
              src={item.imageUrl}
              alt='house.jpeg'
              className='galary__container-img'
            />
          </div>
        );
      })}
    </div>
  );
}

export default Galary;
