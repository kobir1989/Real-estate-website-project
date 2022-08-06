import React from 'react';
import './Story.scss';
import Button from '../Layout/Buttton';
import storyImage from '../../Assets/story-1.jpeg';
import storyImage2 from '../../Assets/story-2.jpeg';
function Story() {
  return (
    <div className='story__container'>
      <div className='story__container-images'>
        <img
          className='story__container-images-img-md'
          src={storyImage}
          alt='bg-img.jpg'
        />
        <img
          className='story__container-images-img-sm'
          src={storyImage2}
          alt='bg-img.jpg'
        />
      </div>
      <div className='story__container-text'>
        <h4>HAPPY CUSTOMERS</h4>
        <h2>“The best decision of our lives”</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nisi
          eius! Repellat, sunt eos distinctio error rem voluptate unde quia!
        </p>
        <Button>FIND YOUR OWN HOME</Button>
      </div>
    </div>
  );
}

export default Story;
