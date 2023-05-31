import React from 'react'
import './Footer.css'
import FooterLink from './FooterLink'
import SocialMedia from '../SocialMedia/SocialMedia'
export default function Footer() {
    let mainLinks = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Services' },
        { id: 4, text: 'Portfolio' },
        { id: 5, text: 'Statistics' },
        { id: 7, text: 'Management' },
        { id: 8, text: 'Team' },
        { id: 9, text: 'Contact' }
    ]
    let MainServices = [
        { id: 1, text: 'Designing' },
        { id: 2, text: 'Programming' },
        { id: 3, text: 'SEO' },
        { id: 4, text: 'Solution Providing' },
        { id: 5, text: 'Marketing' },
        { id: 7, text: 'Teamwork' }
    ];

    let icons = [
        {id:1, link: 'https://www.instagram.com', icon: 'fa fa-linkedin'},
        {id:1, link: 'https://www.instagram.com', icon: 'fa fa-instagram'},
        {id:1, link: 'https://www.instagram.com', icon: 'fa fa-facebook-f'},
        {id:1, link: 'https://www.instagram.com', icon: 'fa fa-twitter'},
        {id:1, link: 'https://www.instagram.com', icon: 'fa fa-skype'},
    ]
    return (
        <div>
            <div className='footer-all'>
                <div className='footer-top'>
                    <div className='general-footer'>
                        <div className='logo-section'>
                            <img className='logo-img' src="images/logo/logo.png" />
                            <span className='text-logo'>KASUKA</span>
                        </div>
                        <p className='contact-info'> Adress: Yount St. Toronto, Ontario, Canada</p>
                        <p className='contact-info'> e-mail: webDevelopment@gmail.com</p>
                        <p className='contact-info'> Phone: +1-(647)-853-9645</p>
                        <div className='icons-box'>
                        {icons.map((icon) => (
                            <div key={icon.id}>
                                <SocialMedia {...icon} />
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className='footer-main-links'>
                        <h6 className='main-link'>Main Links</h6>
                        {mainLinks.map((link) => (
                            <div key={link.id}>
                                <FooterLink {...link} />
                            </div>
                        ))}
                    </div>

                    <div className='footer-main-links serive-links'>
                        <h6 className='main-link'>Services</h6>
                        {MainServices.map((service) => (
                            <div key={service.id}>
                                <FooterLink {...service} />
                            </div>
                        ))}
                    </div>
                    <div className='footer-news'>
                        <h6 className='news-title'>Newsletter</h6>
                        <p className='news-text'>Be informed of our latest news as soon as possible</p>
                        <div className='input-section'>
                            <input placeholder='Email...' type="email" className='news-input' />
                            <button className='input-btn'>Submit</button>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p className='rights'>All Rights Reserved By KASUKA</p>
                    <p className='development'>Developed By <span className='developer'>Arsham</span></p>
                </div>
            </div>
        </div>
    )
}
