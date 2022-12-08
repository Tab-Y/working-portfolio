import React from 'react';
import './Footer.css'

const Footer = () => {
    const additionalProfile = (e) => {
        e.preventDefault();
        alert(`Sorry. I don't have another professional profile currently.\nHopefully I'll create a StackOverflow account soon.`)
    }
    return (
        <footer className='footer fixed-bottom'>
            <ul className='nav justify-content-center align-center'>
                <li className='nav-item '>
                    <a target='_blank' href="https://github.com/Tab-Y" className='nav-link footerBtn'>github</a>
                </li>
                <li className='nav-item'>
                    <a target='_blank' href="https://www.linkedin.com/in/taber-youmans-500587131/" className='nav-link footerBtn'>linkedIn</a>
                </li>
                <li className='nav-item'>
                    <a onClick={additionalProfile} className='nav-link footerBtn'>Another Profile</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;