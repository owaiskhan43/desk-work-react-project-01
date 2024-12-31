import React from 'react'
import Blog1 from '../assets/images/blog1.png'
import Blog2 from '../assets/images/blog2.png'
import Blog3 from '../assets/images/blog3.png'
import { FaAngleRight } from "react-icons/fa6";

const Blogs = () => {
    return (
        <div className='blog-sect pt-4 pb-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center'>Explore Insights in <span className='sec-heading-color'>Our Blog</span></h2>
                        <p className='text-gray text-center'>Find lots of insights and information on our blog. Explore, learn, and get inspired today.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4 mb-4">
                        <div className='blog'>
                            <img src={Blog1} alt="blog 1" />
                            <p className='date mt-4 mb-2'>19 Jan 2023</p>
                            <h3 className='mb-2'>Understanding Smart Home Systems & Maintenance</h3>
                            <p>Discover the ultimate guide to troubleshooting common smart
                                home issues in our latest blog post. From connectivity problems
                                to device malfunctions, we provide step-by-step solutions to
                                help you restore the seamless functionality of your smart
                                home system. Gain expert insights, practical tips, and insider
                                advice to keep your home automation running smoothly.
                                Don't let technical glitches hinder your smart home
                                experience - empower yourself with the knowledge
                                to resolve issues and enjoy the convenience of your connected home.
                                Visit our blog now and become a troubleshooting pro!</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mb-4">
                        <div className='blog'>
                            <img src={Blog2} alt="blog 2" />
                            <p className='date mt-4 mb-2'>19 Jan 2023</p>
                            <h3 className='mb-2'>Understanding Smart Home Systems & Maintenance</h3>
                            <p>Discover the ultimate guide to troubleshooting common smart
                                home issues in our latest blog post. From connectivity problems
                                to device malfunctions, we provide step-by-step solutions to
                                help you restore the seamless functionality of your smart
                                home system. Gain expert insights, practical tips, and insider
                                advice to keep your home automation running smoothly.
                                Don't let technical glitches hinder your smart home
                                experience - empower yourself with the knowledge
                                to resolve issues and enjoy the convenience of your connected home.
                                Visit our blog now and become a troubleshooting pro!</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mb-4">
                        <div className='blog'>
                            <img src={Blog3} alt="blog 3" />
                            <p className='date mt-4 mb-2'>19 Jan 2023</p>
                            <h3 className='mb-2'>Understanding Smart Home Systems & Maintenance</h3>
                            <p>Discover the ultimate guide to troubleshooting common smart
                                home issues in our latest blog post. From connectivity problems
                                to device malfunctions, we provide step-by-step solutions to
                                help you restore the seamless functionality of your smart
                                home system. Gain expert insights, practical tips, and insider
                                advice to keep your home automation running smoothly.
                                Don't let technical glitches hinder your smart home
                                experience - empower yourself with the knowledge
                                to resolve issues and enjoy the convenience of your connected home.
                                Visit our blog now and become a troubleshooting pro!</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2 all-project">
                    <button className="btn">View More <FaAngleRight /></button>
                    </div>
            </div>

        </div>
    )
}

export default Blogs
