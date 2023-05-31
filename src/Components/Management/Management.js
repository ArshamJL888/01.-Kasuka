import React from 'react'
import './Management.css'
export default function Management() {
    return (
        <div id='management-id'>
            <div className='management-out'>
                <div className='management-container' >
                    <img className='manager-img' src="./images/img/Employees/manage.jpg" alt="" />
                    <h4 className='manager-name'>Andres Branch</h4>
                    <h3 className='management-title'>Owner</h3>
                    <q className='management-text'>
                        With the experience I gained over the
                        course of many years, I founded my
                        company based on <span className='feature'>Friendship</span>,&nbsp;
                        <span className='feature'>Cooperation</span> and <span className='feature'>Teamwork</span>.
                    </q>
                </div>
            </div>
        </div>
    )
}
