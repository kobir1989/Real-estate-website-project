import React from 'react';
import './Button.scss';
function Buttton(props) {
  return (
    <>
      <button className='btn'>{props.children}</button>
    </>
  );
}

export default Buttton;
