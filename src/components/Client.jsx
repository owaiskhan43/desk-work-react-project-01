import React from 'react'
import awards from '../assets/images/awards.png'
import clients from '../assets/images/clients.png'
import group from '../assets/images/group.png'
import projects from '../assets/images/projects.png'

const Client = () => {
    return (
        <div className='client-sect'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 mt-2'>
                        <div className='client-col text-center'>
                            <img src={clients} alt="clients" />
                            <h3>1000+</h3>
                            <p>happy clients</p>
                        </div>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <div className='client-col text-center'>
                            <img src={projects} alt="projects" />
                            <h3>900+</h3>
                            <p>happy clients</p>
                        </div>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <div className='client-col text-center'>
                            <img src={awards} alt="awards" />
                            <h3>15+</h3>
                            <p>happy clients</p>
                        </div>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <div className='client-col text-center'>
                            <img src={group} alt="group" />
                            <h3>200+</h3>
                            <p>happy clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client
