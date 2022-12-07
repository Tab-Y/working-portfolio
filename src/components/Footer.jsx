import React from 'react';
import './Footer.css'

const Footer = ({ currentPage, handlePageChange }) => {
    return (
        <footer className='footer'>
            <ul className='nav justify-content-center align-center'>
                <li className='nav-item '>
                    <a href="#" className='nav-link footerBtn'>github</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link footerBtn'>linkedIn</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link footerBtn'>Another Profile</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;