import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text }) => {
  return (
    <div className='btn-txt'>
       <button>
        {text} <span><FaArrowRight /></span>
      </button>
    </div>
  )
}

export default Button
