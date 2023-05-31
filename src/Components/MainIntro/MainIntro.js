import React from 'react'
import './MainIntro.css';
export default function MainIntro() {
    return (
        <div id='about-id'>
            <div className='intro-container'>
                <div className='intro -text'>
                    <h2 className='intro-title'>Our Company</h2>
                    <p className='intro-details'>
                        We are a dynamic team who works with full
                        transparency. Our passion is to build good
                        products and push them to the next level.
                        By offering the right consultancy and
                        technical services, we are not afraid to
                        challenge our clients to create better
                        things together. With our technical
                        expertise we offer product development,
                        POC, MVP, and will take care of your
                        project like it’s our own. Technology
                        can change the world. We will build
                        products for the most important
                        issues today: Improvements in Human
                        well being, robotics in food
                        provision and environmental
                        projects for the future.
                        Join us on this journey and
                        let’s share the experience.
                        Thinslices is the right partner
                        because we have an entrepreneurial
                        drive, which makes us very invested
                        in your success. Our team is stable
                        and delivers the same value
                        proposition in a repeatable
                        fashion and has, therefore,
                        developed economies of scale
                        which translate in higher
                        quality, more scope delivered,​ and
                        great communication.
                    </p>
                    <h4> Our values are: </h4>
                    <p className='intro-footer'>
                       Co-ownership&Partnership,
                        Cross-functionality, Diversexpertise,
                        Speed and efficiency and Transparency.
                    </p>
                    <p className='signture'>- Andres.B</p>
                </div>
            <img className='img-intro' src='./images/img/intro.jpeg' />
            </div>
        </div>
    )
}
