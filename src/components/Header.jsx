import React from 'react';
import './Header.css';

// resume btn needs to download current resume
// each btn needs to change page

const Header = ({ renderSplash, renderBio, renderProfile, renderProjects, active }) => {
    return (
        <header className='row header'>
            <h1 className='titleHeader col align-middle'><a onClick={renderSplash} className={active === '' ? 'active' : ''}>Taber Youmans</a></h1>
            <nav className='col'>
                <ul className='nav '>
                    <li className='nav-item mx-auto'>
                        <a onClick={renderBio} id='navAboutMe' className={active === 'bio' ? 'navBtn active' : 'navBtn'}>About Me</a>
                    </li>
                    <li className='nav-item mx-auto'>
                        <a onClick={renderProjects} id='navPortfolio' className={active === 'projects' ? 'navBtn active' : 'navBtn'}>Portfolio</a>
                    </li>
                    <li className='nav-item mx-auto'>
                        <a onClick={renderProfile} id='navContact' className={active === 'profile' ? 'navBtn active' : 'navBtn'}>Contact Me</a>
                    </li>
                    <li className='nav-item mx-auto'>
                        <a href="#resume" id='navResume' className={active === 'resume' ? 'navBtn active' : 'navBtn'}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;