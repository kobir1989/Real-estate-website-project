import React, { useState } from 'react';
import './NavManue.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
function NavManue() {
  const [nav, setNav] = useState(true);
  const showNavHandler = () => {
    setNav(!nav);
  };
  const closeHandler = () => {
    setNav(true);
  };
  return (
    <div className='nav__manue'>
      <GiHamburgerMenu className='nav__manue-icon' onClick={showNavHandler} />
      {!nav && (
        <div className='nav__manue-slider'>
          <span onClick={closeHandler}>X</span>
          <div className='nav__manue-links'>
            <a href='#'>Home</a>
            <a href='#'>Contract us</a>
            <a href='#'>About</a>
            <a href='#'>Find your Dream Home</a>
            <a href='#'>Submit your property</a>
            <a href='#'>Request Proposal</a>
          </div>
          <div className='nav__manue-buttons'>
            <button className='nav__manue-btn btn'>Log in </button>
            <button className='nav__manue-btn btn'>Sign in</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavManue;