import React from 'react';
import './Home.scss';
import Header from '../../Component/Header/Header';
import NavManue from '../../Component/NavManue/NavManue';
import Feature from '../../Component/Feature/Feature';
import Story from '../../Component/Story/Story';
import Homes from '../../Component/Homes/Homes';
import Galary from '../../Component/Galary/Galary';
import Footer from '../../Component/Footer/Footer';

function Home() {
  return (
    <>
      <div id='container__main'>
        <div className='nav__manue-left'>
          <NavManue />
        </div>
        <div className='whole__body'>
          <Header />
          <Feature />
          <Story />
          <Homes />
          <Galary />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
