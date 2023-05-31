import React from 'react'
import './Portfolios.css'
import Portfolio from './Portfolio'
export default function Portfolios() {

    let portfolioImg = [
        {
            img: './images/img/portfolio-1.jpg'
        },
        {
            img: './images/img/portfolio-2.jpg'
        },
        {
            img: './images/img/portfolio-3.jpg'
        },
        {
            img: './images/img/portfolio-4.jpg'
        },
        {
            img: './images/img/portfolio-5.jpg'
        },
        {
            img: './images/img/portfolio-6.jpg'
        },
        {
            img: './images/img/portfolio-7.jpg'
        },
        {
            img: './images/img/portfolio-8.jpg'
        },
        {
            img: './images/img/portfolio-9.jpg'
        },
    ]
    return (
        <div id='portfolio-id'>
            <div className='portfolio-section'>
                <h4>Portfolio</h4>
                <hr className='line' />
            </div>
            <h2 className='portfolio-title'>Check out our Portfolio</h2>
            <div className='btns'>
                <ul className='btn-group'>
                    <li><a className='category' href=''>All</a></li>
                    <li><a className='category' href=''>Business</a></li>
                    <li><a className='category' href=''>Shop</a></li>
                    <li><a className='category' href=''>Official</a></li>
                </ul>
            </div>
            <div className='portfolio-container'>
                <Portfolio {...portfolioImg[0]} />
                <Portfolio {...portfolioImg[1]} />
                <Portfolio {...portfolioImg[2]} />
                <Portfolio {...portfolioImg[3]} />
                <Portfolio {...portfolioImg[4]} />
                <Portfolio {...portfolioImg[5]} />
                <Portfolio {...portfolioImg[6]} />
                <Portfolio {...portfolioImg[7]} />
                <Portfolio {...portfolioImg[8]} />
            </div>
        </div>
    )
}
