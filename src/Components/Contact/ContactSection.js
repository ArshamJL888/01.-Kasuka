import React from 'react'
import './ContactSection.css'
export default function ContactSection(prop) {
    return (
        <div>
            <div className='contact-section'>
                <img className='contact-img' src={prop.img} alt="image" />
                <div className='contact-main'>
                    <h5 className='contact-title'>{prop.title}:</h5>
                    <p className='contact-text'>{prop.text}</p>
                </div>
            </div>
        </div>
    )
}
