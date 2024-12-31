import React from 'react'
import ceo01 from '../assets/images/ceo01.jpg'
import trainer01 from '../assets/images/trainer01.png'
import trainer02 from '../assets/images/trainer02.png'
import trainer03 from '../assets/images/trainer03.png'

const Meettheteam = () => {
    return (
        <div className='meet-team'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-center'>Meet Our <span className='sec-heading-color'>Team</span></h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 mt-4 ps-0 pe-0'>
                        <div className='meet-box'>
                            <img src={ceo01} alt="ceo 01" />
                            <div className='description-box'>
                                <h5 className='text-white text-center'>"Challenges are <br />
                                    stepping stones <br />
                                    to greatness."</h5>
                                <h3 className='sec-heading-color text-center'>Aziz Mughal</h3>
                                <p className='text-white text-center'>CEO Desk Work Solution</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-4 ps-0 pe-0'>
                        <div className='meet-box'>
                            <img src={trainer01} alt="trainer 01" />
                            <div className='description-box'>
                                <h5 className='text-white text-center'>"Challenges are <br />
                                    stepping stones <br />
                                    to greatness."</h5>
                                <h3 className='sec-heading-color text-center'>Trainer</h3>
                                <p className='text-white text-center'>Desk Work Solution</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-4 ps-0 pe-0'>
                        <div className='meet-box'>
                            <img src={trainer02} alt="trainer 02" />
                            <div className='description-box'>
                                <h5 className='text-white text-center'>"Challenges are <br />
                                    stepping stones <br />
                                    to greatness."</h5>
                                <h3 className='sec-heading-color text-center'>Trainer</h3>
                                <p className='text-white text-center'>Desk Work Solution</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-4 ps-0 pe-0'>
                        <div className='meet-box'>
                            <img src={trainer03} alt="trainer 03" />
                            <div className='description-box'>
                                <h5 className='text-white text-center'>"Challenges are <br />
                                    stepping stones <br />
                                    to greatness."</h5>
                                <h3 className='sec-heading-color text-center'>Trainer</h3>
                                <p className='text-white text-center'>Desk Work Solution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meettheteam
