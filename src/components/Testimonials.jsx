import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from '../assets/images/testimonial.png'
import Button from './Button';
import playstore from '../assets/images/playstore.png'
import appstore from '../assets/images/appstore.png'
import { FaPlay } from "react-icons/fa";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Ensure only one slide is shown
    slidesToScroll: 1
  };

  return (
    <div className='testimonial-sect'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='testimonial-slider'>
              <div className="testmonial-slide">
                <Slider {...settings}>
                  <div className='testimonial-inner'>
                    <img src={testimonial} alt="testimonail slider" />
                    <div className='play-button'>
                      <FaPlay />
                    </div>
                  </div>
                  <div className='testimonial-inner'>
                    <img src={testimonial} alt="testimonail slider" />
                    <div className='play-button'>
                      <FaPlay />
                    </div>
                  </div>
                  <div className='testimonial-inner'>
                    <img src={testimonial} alt="testimonail slider" />
                    <div className='play-button'>
                      <FaPlay />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='testimonial-heading'>
              <h2 className='text-white mb-3'>Testimonials That <br /> Speak to <span>Our Results</span></h2>
              <p className='mt-2 text-white mb-4'>Project Name:  Ezee Solution <br />
                provide: Website & Application</p>
              <Button text="Visit The Website" />
              <ul className='app-btn mt-4'>
                <li>
                  <a href="#">
                    <img src={playstore} alt="playstore " />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={appstore} alt="appstore " />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
