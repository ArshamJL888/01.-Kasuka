import React from 'react'
import './Features.css'
import Feature from './Feature'
export default function Features() {

    let featuresInfo = [
        {
            img: './images/img/featuresLogo/terms.png',
            title: 'Any Plan',
            details: 'We will accomplish any plan you want to have.'
        },
        {
            img: './images/img/featuresLogo/cube.png',
            title: 'Which one of these',
            details: 'Those who lust for blacks do not see, they are guilty of abandoning their services.'
        },
        {
            img: './images/img/featuresLogo/gallery.png',
            title: 'Maybe they are blind',
            details: 'Either accepts or when no one avoids all. All the pains that make them worse.'
        },
        {
            img: './images/img/featuresLogo/protect.png',
            title: 'Happy Truth!',
            details: 'They follow nothing without bearing the truth in the praise of life.'
        },
    ]

    return (
        <div>
            <div className='features-container'>
                <img className='features-img' src='./images/img/intro2.webp' />
                <div className='features-main'>
                    <Feature {...featuresInfo[0]} />
                    <Feature {...featuresInfo[1]} />
                    <Feature {...featuresInfo[2]} />
                    <Feature {...featuresInfo[3]} />
                </div>
            </div>
        </div>
    )
}
