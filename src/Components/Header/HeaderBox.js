import React from 'react';
import './HeaderBox.css';

export default function HeaderBox(prop) {
  return (
    <div className='box-container'>
        <img src={prop.img} />
        <p className='box-text'>{prop.text}</p>
    </div>
  )
}
