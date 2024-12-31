import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";

const Topbar = () => {
    return (
        <div className='top-bar'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='social-icons'>
                            <ul>
                                <li><a href="#" className='text-white'><FaInstagram /></a></li>
                                <li><a href="#" className='text-white'><FaFacebook /></a></li>
                                <li><a href="#" className='text-white'><FaTwitter /></a></li>
                                <li><a href="#" className='text-white'><FaPinterest /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='chat-icons'>
                            <ul>
                                <li className='text-white'><SiLivechat />
                                <span>Live chat</span>
                                </li>
                                <li className='text-white'><FaPhoneVolume />
                                <span>Call now</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar
