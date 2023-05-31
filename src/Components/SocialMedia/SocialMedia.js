import React from 'react'
import './SocialMedia.css'
export default function SocialMedia(prop) {
  return (
    <div>
        <div className='media-container'>
            <i className={'icon ' + prop.icon}></i>
        </div>
    </div>
  )
}
