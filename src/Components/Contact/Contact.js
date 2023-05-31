import React from 'react'
import './Contact.css'
import ContactSection from './ContactSection'
export default function Contact() {

  let contactInformation = [
    {
      img: './images/img/contactLogo/location.png',
      title: 'Location',
      text: 'Yount St. Toronto, Ontario, Canada'
    },
    {
      img: './images/img/contactLogo/mail.png',
      title: 'Email',
      text: 'webDevelopment@gmail.com'
    },
    {
      img: './images/img/contactLogo/phone.png',
      title: 'Phone',
      text: '+1-(647)-853-9645'
    }
  ]

  return (
    <div>
      <div id='contact-id'>
        <div className='contact-section'>
          <h4>Contact us</h4>
          <hr className='line' />
        </div>
        <h2 className='contact-title'>Be in contact with us</h2>
          <div className='contact-info'>
            <ContactSection {...contactInformation[0]} />
            <ContactSection {...contactInformation[1]} />
            <ContactSection {...contactInformation[2]} />
        </div>
      </div>
    </div>
  )
}
