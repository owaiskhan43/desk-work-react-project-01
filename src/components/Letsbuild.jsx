import React from 'react'
import idea from '../assets/images/idea.png'
import scientist from '../assets/images/scientist.png'
import Button from './Button';

const Letsbuild = () => {
    return (
        <div className='lets-build'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4'>
                        <div className='idea'>
                            <img src={idea} alt="idea" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='lets-head'>
                            <h2 className='text-center text-white'>Let’s Build <br />
                                Something Great <br />
                                <span>Together</span></h2>
                            <Button text="Contact Us" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='scientist'>
                            <img src={scientist} alt="scientist" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letsbuild
