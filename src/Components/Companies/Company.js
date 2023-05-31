import React from 'react'
import './Company.css'

export default function Company(prop) {
    console.log(prop.img);
  return (
   <div>
        <img className='company-logo' src={prop.img} s/>
   </div>
  )
}
