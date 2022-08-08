import React from 'react';
import NavManue from '../../Component/NavManue/NavManue';
import { useParams } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { GiFamilyHouse } from 'react-icons/gi';
import { FcSalesPerformance } from 'react-icons/fc';
import homesData from '../../Component/Homes/homesData';
import galaryData from '../../Component/Galary/galaryData';
import './Houses.scss';
function Houses() {
  const { id } = useParams();
  return (
    <div className='products__container'>
      <div className='products__container-nav'>
        <NavManue />
      </div>
      <div className='products__container-sub'>
        <div className='products__container-sub-img'>
          <img
            className='bg'
            src={homesData[id - 1].imageUrl}
            alt='house.jpeg'
          />
          <img className='sm' src={galaryData[id].imageUrl} alt='' />
          <img className='sm' src={galaryData[id - 1].imageUrl} alt='' />
          <img className='sm' src={galaryData[id].imageUrl} alt='' />
        </div>
        <div className='products__container-sub-text'>
          <h2 className='products__container-sub-text-bg'>
            {homesData[id - 1].banner}
          </h2>
          <h3 className='products__container-sub-text-md'>
            <FcSalesPerformance />
            Open for sale
          </h3>
          <p className='products__container-sub-text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptas, perferendis recusandae, delectus impedit
            voluptatem alias nihil placeat ipsum cum eveniet totam iusto culpa
            eius qui quos excepturi ab asperiores.
          </p>
          <h3 className='products__container-sub-text-md'>
            <GoLocation /> {homesData[id - 1].country}
          </h3>
          <h3 className='products__container-sub-text-md'>
            <GiFamilyHouse /> {homesData[id - 1].size} m<sup>2</sup>
          </h3>
          <h3 className='products__container-sub-text-md'>
            {homesData[id - 1].rooms}
          </h3>
          <h3 className='products__container-sub-text-md'>
            Price: {homesData[id - 1].price}
          </h3>
          <button className='btn'>Talk to Realtor</button>
        </div>
      </div>
    </div>
  );
}

export default Houses;
