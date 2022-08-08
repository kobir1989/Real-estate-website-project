import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Layout/Buttton';
import mainLogo from '../../Assets/logo/mainLogo.png';
import bbcLogo from '../../Assets/logo/logo-bbc.png';
import busnessInsider from '../../Assets/logo/logo-bi.png';
import forbes from '../../Assets/logo/logo-forbes.png';
import techCrunch from '../../Assets/logo/logo-techcrunch.png';
import person1 from '../../Assets/realtor-1.jpeg';
import person2 from '../../Assets/realtor-2.jpeg';
import person3 from '../../Assets/realtor-3.jpeg';
function Header() {
  return (
    <div className='header__container'>
      <div className='header__container-hero'>
        <div className='header__container-hero-logo'>
          <img src={mainLogo} alt='logo.png' />
          <h4>Homes</h4>
        </div>
        <div className='header__container-hero-heading'>
          <p>your own home</p>
          <h1>The ultimate personal freedom</h1>
          <div className='header__container-hero-btn'>
            <Link to='/homes'>
              <Button>Vew our properties</Button>
            </Link>
          </div>
        </div>
        <div>
          <div className='seen-on'>
            <p>Seen on</p>
          </div>
          <div className='header__container-sponser'>
            <div className='header__container-sponser-logo'>
              <img src={bbcLogo} alt='bbc.png' />
            </div>
            <div className='header__container-sponser-logo'>
              <img src={busnessInsider} alt='bi.png' />
            </div>
            <div className='header__container-sponser-logo'>
              <img src={forbes} alt='forbes.png' />
            </div>
            <div className='header__container-sponser-logo'>
              <img src={techCrunch} alt='tech.png' />
            </div>
          </div>
        </div>
      </div>

      <div className='seals-team'>
        <h4 className='seals-team-heading'>TOP-3 REALTORS</h4>

        <div className='seals-team-info'>
          <img src={person1} alt='person.jpeg' />
          <div>
            <h3>Erik Feinman</h3>
            <p>245 House sold</p>
          </div>
        </div>
        <div className='seals-team-info'>
          <img src={person2} alt='person.jpeg' />
          <div>
            <h3>Kim Brown</h3>
            <p>212 House sold</p>
          </div>
        </div>
        <div className='seals-team-info'>
          <img src={person3} alt='person.jpeg' />
          <div>
            <h3>Toby Ramsey</h3>
            <p>198 House sold</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
