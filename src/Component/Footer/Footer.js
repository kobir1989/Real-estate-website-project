import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__container-links'>
        <div className='footer__container-links-bg'>
          <a href='#'>FIND YOUR DREAM HOME</a>
        </div>
        <div className='footer__container-links-bg'>
          <a href='#'>REQUEST PROPOSAL</a>
        </div>
        <div className='footer__container-links-bg'>
          <a href='#'>DOWNLOAD HOME PLANNER</a>
        </div>

        <div className='footer__container-links-bg'>
          <a href='#'>CONTACT US</a>
        </div>
        <div className='footer__container-links-bg'>
          <a href='#'>SUBMIT YOUR PROPERTY</a>
        </div>
        <div className='footer__container-links-bg'>
          <a href='#'>COME WORK WITH US!</a>
        </div>
      </div>
      <div className='footer__container-copyright'>
        <p>© Copyright 2022 by Kabir Hossain</p>
      </div>
    </div>
  );
}

export default Footer;
