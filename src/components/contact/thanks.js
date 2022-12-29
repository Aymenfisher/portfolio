import React from 'react';
import { Link } from 'react-router-dom';
import checkImage from '../../resources/check.svg'

export const ThanksMessage = () => {
    return(
        <div className='thanks-message'>
            <img className='thanks-image' src={checkImage} alt='Thanks'/>
            <h2 className='thanks-title'>Thank Youu!!</h2>
            <p className='thanks-text'>Your message is Sent! I'll respond ASAP!</p>
            <Link to='/'><button className='link-button'>Home Page</button></Link>
        </div>
    )
}