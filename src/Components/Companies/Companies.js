import React from 'react';
import './Companies.css';
import Company from './Company';

export default function Companies() {
    let imgLinks=[
        './images/img/companies/client1.png',
        './images/img/companies/client2.png',
        './images/img/companies/client8.png',
        './images/img/companies/client4.png',
        './images/img/companies/client5.png',
        './images/img/companies/client6.png'
    ]

    return (
   <div>
         <div className='companies'>
            <Company img={imgLinks[0]}/>
            <Company img={imgLinks[1]}/>
            <Company img={imgLinks[2]}/>
            <Company img={imgLinks[3]}/>
            <Company img={imgLinks[4]}/>
            <Company img={imgLinks[5]}/>
        </div>
   </div>
    )
}
