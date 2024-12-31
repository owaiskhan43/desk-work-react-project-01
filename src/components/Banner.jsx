import React from 'react'
import Button from './Button';

const Banner = () => {
    return (
        <div className='baner-sect'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center text-white'>Desk Work Solution</h1>
                        <p className='text-center text-white'>Limitless Approach to Digital Business.<br/>From Planning to Execution Achievement is The Guaranteed.</p>
                        <Button text="Request a Quote" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
