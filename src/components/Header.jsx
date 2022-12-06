import React from 'react';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header>
        <h1>Title</h1>
        <nav>
            <ul>
                <li><a href="#aboutMe">about me</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a href="#resume">resume</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;