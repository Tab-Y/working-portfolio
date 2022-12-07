import React from 'react';
import './style.css'

const Splash = ({ currentPage, handlePageChange }) => {
    return (
        <div className='card mx-auto' >
            <h2 className='card-title text-center'>
                Welcome to my website
            </h2>
            <p className='card-text text-center'>This website is a working and everchanging digital portfolio of my work. Thank you for visiting!</p>
        </div>
    )
}

export default Splash;