import React from 'react'
import './Feature.css'

export default function Feature(prop) {
    console.log(prop);
    return (
        <div>
            <div className='feature-container'>
            <img className='feature-img' src={prop.img} />
            <h3 className='feature-title'>{prop.title}</h3>
            <p className='feature-details'>{prop.details}</p>
            </div>
        </div>
    )
}
