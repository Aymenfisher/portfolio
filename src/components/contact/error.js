import React from 'react';
import {Link} from 'react-router-dom';

export const Error = () => {

    return (
        <div className='error'>
            <h1>{'(>_<)'}</h1>
            <p>There was an error Sending the form, probably from the service.</p>
            
            <a href="mailto:fisheraymen@gmail.com"><button className='link-button'>Try this 😅</button></a>
            <p>OR</p>
            <Link to='/'><button className='link-button'>Home Page</button></Link>
        </div>
    )
}