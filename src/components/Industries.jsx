import React from 'react'
import ecomerce from '../assets/images/ecomerce.png'
import logistics from '../assets/images/logistics.png'
import banking from '../assets/images/banking.png'
import healthcare from '../assets/images/healthcare.png'
import manufacture from '../assets/images/manufacture.png'
import education from '../assets/images/education.png'


const Industries = () => {
    return (
        <div className='industries-sect'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='industries-head'>
                            <h2 className='text-center'>INDUSTRIES <span>WE WORK IN</span></h2>
                            <p className='text-center'>We significantly influence the daily operations of various industries.</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2 mt-4'>
                        <div className='industries-box'>
                            <img src={ecomerce} alt="ecomerce" />
                            <h4>E-commerce <br />
                                & Retail</h4>
                        </div>
                    </div>
                    <div className='col-md-2 mt-4'>
                        <div className='industries-box'>
                            <img src={logistics} alt="logistics" />
                            <h4>Logistics & <br />
                                Warehousing</h4>
                        </div>
                    </div>
                    <div className='col-md-2 mt-4'>
                        <div className='industries-box'>
                            <img src={banking} alt="banking" />
                            <h4>Banking & <br />
                                Finance</h4>
                        </div>
                    </div>
                    <div className='col-md-2 mt-4'>
                        <div className='industries-box'>
                            <img src={healthcare} alt="healthcare" />
                            <h4>healthcare <br />
                                & technology</h4>
                        </div>
                    </div>
                    <div className='col-md-2 mt-4'>
                        <div className='industries-box'>
                            <img src={manufacture} alt="manufacture" />
                            <h4>manufacturing <br />
                                & production</h4>
                        </div>
                    </div>
                    <div className='col-md-2 mt-4'>
                        <div className='industries-box'>
                            <img src={education} alt="education" />
                            <h4>Education <br />
                                & Learning</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries
