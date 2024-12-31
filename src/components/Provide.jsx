import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from '../assets/images/web.png';
import mob from '../assets/images/mob.png';
import desig from '../assets/images/desig.png';


const Provide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='provide-sect'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2>We Provide Awesome <span>Technologies</span></h2>
                        <p>We're skilled in both design and development, allowing us to create complex and customized web solutions for you.</p>
                    </div>
                    <div className='col-md-8'>
                        <div className='slider-sect'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className="slider-box">
                                        <div className="slider-inner">
                                            <img src={web} alt="web" />
                                            <p>Website <br /> Development</p>
                                        </div>
                                    </div>
                                    <div className="slider-box">
                                        <div className="slider-inner">
                                            <img src={mob} alt="mob" />
                                            <p>Mobile <br /> Development</p>
                                        </div>
                                    </div>
                                    <div className="slider-box">
                                        <div className="slider-inner">
                                            <img src={desig} alt="desig" />
                                            <p>Graphic <br />
                                                Designing</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Provide;
