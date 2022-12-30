import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div style={{width:'100vw',textAlign:'center'}}>
        <h1>404 - Not Found!</h1>
        <Link to='/'><button className='link-button'>Home Page</button></Link>
    </div>
);

export default NotFound;