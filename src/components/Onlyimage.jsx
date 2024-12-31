import React from 'react';
import image from '../assets/images/image.jpg';

const Onlyimage = () => {
  return (
    <div className='figure-sect'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <img src={image} alt="image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Onlyimage;


