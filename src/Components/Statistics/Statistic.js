import React from 'react'
import './Statistic.css'

export default function Statistic(prop) {
  return (
    <div>
      <div className='statistic'>
        <div className='title'>
          <img src={prop.img} />
          <p className='amount'>{prop.amount}</p>
        </div>
        <p className='text'>{prop.text}</p>
      </div>
    </div>
  )
}
