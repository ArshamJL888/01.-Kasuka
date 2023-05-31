import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
   <div className='nav-container'>
     <div className='navbar'>
        <nav className='nav'>
            <div className='logo-section'>
            <img className='logo-img' src="images/logo/logo.png" />
            <span className='text-logo'>KASUKA</span>
            </div>
            <ul className='menu'>
                <li><a href='#home-id'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services-id'>Services</a></li>
                <li><a href='#portfolio-id'>Portfolio</a></li>
                <li><a href='#statistics-id'>Statistics</a></li>
                <li><a href='#management-id'>Management</a></li>
                <li><a href='#team-id'>Team</a></li>
                <li><a href='#contact-id'>Contact us</a></li>
            </ul>
            <p><button className="start-btn">Start</button></p>
        </nav>
    </div>
   </div>
  )
}
