import React from 'react'
import NavBar from './NavBar'
import './Header.css'
import HeaderBox from './HeaderBox'
function Header() {

    let boxesObject = [
        {
            img: './images/img/BoxLogo/database.png',
            text: 'Demo Text'
        },
        {
            img: './images/img/BoxLogo/output.png',
            text: 'Portfolio'
        },
        {
            img: './images/img/BoxLogo/model.png',
            text: 'Charts'
        },
        {
            img: './images/img/BoxLogo/chart.png',
            text: 'Final Actions'
        },
        {
            img: './images/img/BoxLogo/text.png',
            text: 'Saved Information'
        }
    ]

    return (
        <div id='home-id' className='header-container'>
            <div className='header-main'>
                <NavBar />
                <h1 className='header-head'>
                    Strong Digital Solution with&nbsp;
                    <span className='gold'>"KASUKA"</span>
                </h1>

                <h4 className='text-team'>
                    We are a team of briliant digital market experts
                </h4>

                <div className='header-boxes'>
                    <HeaderBox {...boxesObject[0]} />
                    <HeaderBox {...boxesObject[1]} />
                    <HeaderBox {...boxesObject[2]} />
                    <HeaderBox {...boxesObject[3]} />
                    <HeaderBox {...boxesObject[4]} />
                </div>
            </div>
        </div>
    )
}

export default Header;