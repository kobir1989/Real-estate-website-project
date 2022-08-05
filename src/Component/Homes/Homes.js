import React from 'react';
import './Homes.scss';
import homesData from './homesData';
import Button from '../Layout/Buttton';
function Homes() {
  return (
    <div className='homes__container'>
      {homesData.map((item) => {
        return (
          <div className='homes__container-card'>
            <div className='homes__container-card-img'>
              <img src={item.imageUrl} alt='home.jpeg' />
            </div>
            <div className='homes__container-card-banner'>
              <h4>{item.banner}</h4>
            </div>
            <div className='homes__container-card-text'>
              <p>{item.country}</p>
              <p>{item.rooms}</p>
              <p>
                {item.size} m<sup>2</sup>
              </p>
              <p>{item.price}</p>
            </div>
            <div className='homes__container-card-btn'>
              <Button>VIEW DETAILS</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Homes;
