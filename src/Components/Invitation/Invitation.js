import React from 'react'
import './Invitation.css'
export default function Invitation() {
    return (
        <div className='invite'>
            <div className='invite-out'>
                <div className='invite-container' >
                    <h3 className='invite-title'>Invitation</h3>
                    <p className='invite-text'>To cooperate with us, first
                        fill out the form and then contact us by phone or
                        social networks and then send us your documents
                        in the form of an email.</p>
                    <p><button className='invite-btn'> Fill The Form </button></p>
                </div>
            </div>
        </div>
    )
}
