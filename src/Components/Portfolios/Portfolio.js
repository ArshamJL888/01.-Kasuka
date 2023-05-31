import React from 'react'
import './Portfolio.css'
export default function Portfolio(prop) {
  return (
    <div>
        <figure className='portfolio-main'>
            <img className='portfolio-img' src={prop.img} />
        </figure>
    </div>
  )
}
