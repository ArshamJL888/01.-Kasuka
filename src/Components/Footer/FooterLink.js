import React from 'react'
import './FooterLink.css'
export default function FooterLink(props) {
  return (
    <div>
        <a href={'#' + props.text.toLowerCase() + '-id'} className='link'><span className='sign'> &gt; </span>{props.text}</a>
    </div>
  )
}
