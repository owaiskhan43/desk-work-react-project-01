import React from 'react'
import fotlogo from '../assets/images/fotlogo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='foter-sect bg-dark mt-4'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <div className='footer-logo'>
                            <img src={fotlogo} alt="footer logo" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h3 className='text-orange mb-4'>About the company</h3>
                            <p className='text-white pe-4'>An ultimate platform for all your business ideas and growth. We believes in high quality work therefore we provide 24/7 support throughout to our global customers.</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="quick-links">
                            <h3 className='text-orange mb-4'>Get Started</h3>
                            <ul>
                                <li className='text-white'>Home</li>
                                <li className='text-white'>About Us</li>
                                <li className='text-white'>Technologies</li>
                                <li className='text-white'>Portfolio</li>
                                <li className='text-white'>Industries</li>
                                <li className='text-white'>Contact Us</li>
                                <li className='text-white'>Blog</li>
                                <li className='text-white'>Get a Quote</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="quick-links">
                            <h3 className='text-orange mb-4'>Services</h3>
                            <ul>
                                <li className='text-white'>Website Development</li>
                                <li className='text-white'>Mobile Application</li>
                                <li className='text-white'>Graphics Designing</li>
                                <li className='text-white'>Video Animation</li>
                                <li className='text-white'>Digital Marketing</li>
                                <li className='text-white'>Content Writing</li>
                                <li className='text-white'>Domain And Hosting</li>
                                <li className='text-white'>Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="quick-links">
                            <h3 className='text-orange mb-4'>Contact</h3>
                            <ul>
                                <li className='text-white'>
                                    <a href="#" className='text-white'>
                                    <span> <FaWhatsapp /></span>
                                    +1 234 529-3853</a>
                                </li>
                                <li className='text-white'>
                                    <a href="#" className='text-white'>
                                        <span><FaFacebookF /></span>
                                        /deskworksol</a>
                                </li>
                                <li className='text-white'>
                                    <a href="#" className='text-white'>
                                        <span><FaYoutube /></span>
                                        /deskworksol</a>
                                </li>
                                <li className='text-white'>
                                    <a href="#" className='text-white'>
                                        <span><FaLinkedin /></span>
                                        /deskworksol</a>
                                </li>
                                <li className='text-white'>
                                    <a href="#" className='text-white'>
                                    <span><FaInstagram /></span>
                                    /deskworksol</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
