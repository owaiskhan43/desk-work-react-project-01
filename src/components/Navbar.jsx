import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'



const Navbar = () => {
    return (
        <div className='nav-sect'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-2'>
                        <div className='logo'>
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <nav>
                            <ul className='nav-links'>
                                <li> <Link to="/"> Home</Link> </li>
                                <li> <Link to="/About"> About us</Link> </li>
                                <li> <Link to="/Contact"> Services</Link> </li>
                                <li> <Link to="/Contact"> Technology</Link> </li>
                                <li> <Link to="/Contact"> Contact us</Link> </li>
                                <li> <Link to="/Contact"> Get a quote</Link> </li>
                                <li> <Link to="/Contact"> More</Link> </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-md-3'>
                        <div className='search-bar'>
                            <input type="search" placeholder='Search ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
