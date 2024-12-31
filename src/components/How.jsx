import React from 'react'
import desk from '../assets/images/desk.png'
import videoplaceholder1 from '../assets/images/videoplaceholder1.png'
import videoplaceholder2 from '../assets/images/videoplaceholder2.png'
import videoplaceholder3 from '../assets/images/videoplaceholder3.png'
import videoplaceholder4 from '../assets/images/videoplaceholder4.png'

const How = () => {
    return (
        <div className='how-make'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='how-heading'>
                            <h2>HOW WE MAKE IT <span>BETTER</span></h2>
                            <ul>
                                <li>  Observation, of the goal market and designed advertising &
                                    marketing approach format in accordance the requirement.</li>
                                <li>  Divide the fundamental goal into small goals, and comply
                                    with the calendar thus for intention achievement.</li>
                                <li>  Analysis of advertising and monitoring in the element for the
                                    ROI, create income funnel consequently and observe until
                                    achievement.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='desk'>
                            <img src={desk} alt="desk" />
                        </div>
                    </div>
                </div>
                <div className='row'> 
                    <div className='col-md-3'>
                        <div className='video-placeholder mt-5'>
                            <img src={videoplaceholder1} alt="videoplaceholder1" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='video-placeholder mt-5'>
                            <img src={videoplaceholder2} alt="videoplaceholder2" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='video-placeholder mt-5'>
                            <img src={videoplaceholder3} alt="videoplaceholder3" />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='video-placeholder mt-5'>
                            <img src={videoplaceholder4} alt="videoplaceholder4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How

