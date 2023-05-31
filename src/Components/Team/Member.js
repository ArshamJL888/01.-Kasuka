import React from 'react'
import './Member.css'
export default function Member(prop) {
  return (
    <div>
        <div className='member-container'>
            <img className='member-photo' src={prop.img} alt="member" />
        <div className='member-info'>
            <h3 className='member-name'>{prop.name}</h3>
            <p className='member-post'>{prop.post}</p>
        </div>
        </div>
    </div>
  )
}
