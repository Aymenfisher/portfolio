import React from 'react';
import './footerStyles.css'


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='social-links'>
                <a href='https://www.linkedin.com/in/aymen-boudabia' rel='noreferrer' target='_blank'><img className='social-link icon' src='https://svgshare.com/i/p5N.svg' alt='Linkedin' title='Linkedin' /></a>
                <a href='https://www.facebook.com/niratzouri' rel='noreferrer' target='_blank'><img className='social-link icon' src='https://svgshare.com/i/p60.svg' alt='Facebook' title='Facebook' /></a>
                <a href='https://www.github.com/aymenfisher' rel='noreferrer' target='_blank'><img className='social-link icon' src='https://svgshare.com/i/p54.svg' alt='Github' title='Github' /></a>
                <a href='https://www.codecademy.com/profiles/aymenfisher' rel='noreferrer' target='_blank'><img className='social-link icon' src='https://svgshare.com/i/p5W.svg' alt='Codecademy' title='Codecademy' /></a>
                <a href='mailto:fisheraymen@gmail.com' rel='noreferrer' target='_blank'><img className='social-link icon' src='https://svgshare.com/i/pBs.svg' alt='Email' title='Email' /></a>
            </div>
            <p className='credits'>Made in Algiers © {currentYear} Aymen Boudabia</p>
        </footer>
    )
}