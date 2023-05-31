import React from 'react'
import './Team.css'
import Member from './Member'
export default function Team() {
    let membersInfo = [
        {
            name: 'James Anderson',
            post: 'CEO',
            img: './images/img/Employees/team-1.jpg'
        },
        {
            name: 'Sara Martin',
            post: 'CTO',
            img: './images/img/Employees/team-2.jpg'
        },
        {
            name: 'William Morton',
            post: 'Project Manager',
            img: './images/img/Employees/team-3.jpg'
        },
        {
            name: 'Alexander Murphy',
            post: 'Senior Software Developer',
            img: './images/img/Employees/team-5.jpg'
        },
    ]
  return (
    <div id='team-id'>
       <div className='team-section'>
        <h4>Team members</h4>
        <hr className='line'/>
        </div>
        <h2 className='team-title'>Check out our services</h2>
        <div className='team-container'>
            <Member {...membersInfo[0]} />
            <Member {...membersInfo[1]} />
            <Member {...membersInfo[2]} />
            <Member {...membersInfo[3]} />
        </div>
    </div>
  )
}
