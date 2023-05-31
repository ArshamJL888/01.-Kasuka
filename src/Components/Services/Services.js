import React from 'react'
import './Services.css'
import Service from './Service'

export default function Services() {
    let servicesInfo = [
        {
            img: './images/img/ServicesLogo/design.png',
            title: 'Design',
            details: "Designing any page according to the customer\'s order"
        },
        {
            img: './images/img/ServicesLogo/coding.png',
            title: 'Programming',
            details: 'Programming in every fields and frameworks'
        },
        {
            img: './images/img/ServicesLogo/SEO.png',
            title: 'SEO',
            details: 'Search Engine Optimization'
        },
        {
            img: './images/img/ServicesLogo/solution.png',
            title: 'Solution Providing',
            details: 'Provide solutions related to all areas of software development'
        },
        {
            img: './images/img/ServicesLogo/marketing.png',
            title: 'Marketing',
            details: 'Marketing for products on the case of customer request'
        },
        {
            img: './images/img/ServicesLogo/team.png',
            title: 'Team Work',
            details: 'Team Work with highest efficiency'
        },
    ]
  return (
    <div id='services-id'>
        <div className='service-section'>
        <h4>Servises</h4>
        <hr className='line'/>
        </div>
        <h2 className='services-title'>Check out our services</h2>
        <div className='services-container'>
        <Service {...servicesInfo[0]} />
        <Service {...servicesInfo[1]} />
        <Service {...servicesInfo[2]} />
        <Service {...servicesInfo[3]} />
        <Service {...servicesInfo[4]} />
        <Service {...servicesInfo[5]} />
        </div>
    </div>
  )
}
