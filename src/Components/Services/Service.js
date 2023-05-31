import React from 'react'
import './Service.css'
export default function Service(prop) {
  return (
    <div>
        <div className='service-container'>
            <img className='service-img' src={prop.img} />
            <h3 className='service-title'>{prop.title}</h3>
            <p className='service-text'>{prop.details}</p>
        </div>
    </div>
  )
}
