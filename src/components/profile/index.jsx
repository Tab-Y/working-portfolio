import React from 'react';
import './style.css';

const Profile = ({ currentPage, handlePageChange }) => {
    return (
        <div>
            <h1 className='mx-auto text-center' id='contactMe'>Contact Me</h1>
        <div id='contactCard'>
            <h4 className='mx-auto text-center'>Please leave your information</h4>
            <div className='mb-3' >
                <label htmlFor="emailInput" className='form-label'>Please enter your Email</label>
                <input type="email" className='form-control' id='emailInputContact' placeholder='email@gmail.com' />
                <label htmlFor="nameInput" className='form-label'>Please enter your name</label>
                <input type="text" className='form-control' id='nameInputContact' placeholder='John Doe' />
                <label htmlFor="contactComment" className='form-label'>Comments</label>
                <input type="text" className='form-control' id='commentContact' placeholder='Any comments you may have' />
            </div>
            <h4 className='mx-auto text-center'>or reach out to me directly <span><a href='mailto:tlyoumans@gmail.com'>HERE</a></span> </h4>
        </div>
        </div>
    )
}

export default Profile;