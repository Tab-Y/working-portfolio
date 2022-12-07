import React from 'react';
import './Header.css';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className='row header'>
            <h1 className='titleHeader col align-middle'><a href='#home'>Taber Youmans</a></h1>
            <nav className='col'>
                <ul className='nav '>
                    <li className='nav-item mx-auto'>
                        <a href="#aboutMe" id='navAboutMe' className='navBtn active'>About Me</a>
                    </li>
                    <li className='nav-item mx-auto'>
                        <a href="#portfolio" id='navPortfolio' className='navBtn'>Portfolio</a>
                    </li>
                    <li className='nav-item mx-auto'>
                        <a href="#contact" id='navContact' className='navBtn'>Contact Me</a>
                    </li>
                    <li className='nav-item mx-auto'>
                        <a href="#resume" id='navResume' className='navBtn'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;