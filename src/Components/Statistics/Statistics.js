import React from 'react'
import './Statistics.css'
import Statistic from './Statistic'
export default function Statistics() {
  let statisticInfo = [
    {
      img: './images/img/statisticsLogo/satisfy.png',
      amount: 83,
      text: 'Projects had full consent from the customer.'
    },
    {
      img: './images/img/statisticsLogo/project.png',
      amount: 86,
      text: 'Projects that have been carried out from A to Z by our company.'
    },
    {
      img: './images/img/statisticsLogo/timer.png',
      amount: 2,
      text: 'Years of experience in implementing various software projects.'
    },
    {
      img: './images/img/statisticsLogo/prize.png',
      amount: 8,
      text: 'Award in all software fields.'
    },
  ]

  return (
    <div id='statistics-id'>
        <div className='statistic-container'>
        <div className='statistic-all'>
        <h3 className='statistics-title'>Statistics</h3>
        <hr className='line' />
        <div className='statistic-main'>
            <Statistic {...statisticInfo[0]} />
            <Statistic {...statisticInfo[1]} />
            <Statistic {...statisticInfo[2]} />
            <Statistic {...statisticInfo[3]} />
        </div>
        </div>
        <img  className='statistic-img' src='./images/img/intro.jpg' />
        </div>
    </div>
  )
}
