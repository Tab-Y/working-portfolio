import React, { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

const Profile = () => {

    const [ email, setEmail ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        }   else if (inputType === 'userName') {
            setUserName(inputValue);
        }   else {
            setMessage(inputValue);
        }
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or Name is invalid. Please enter a valid Email and Name');
            return;
        }
        alert(`Thank you for submitting a comment ${userName}`);

        setEmail('');
        setUserName('');
        setMessage('');
    }

    return (
        <div>
            <h1 className='mx-auto text-center' id='contactMe'>Contact Me</h1>
            <div id='contactCard'>
                <h4 className='mx-auto text-center'>Please leave your information</h4>
                <div className='mb-3' >
                    <label htmlFor="emailInput" className='form-label'>Please enter your Email</label>
                    <input 
                    type="email" 
                    value={email} 
                    name='email'
                    onChange={handleInputChange}
                    className='form-control' 
                    id='emailInputContact' 
                    placeholder='email@gmail.com' 
                    />

                    <label htmlFor="nameInput" className='form-label'>Please enter your name</label>
                    <input 
                    type="text" 
                    value={userName} 
                    name='userName'
                    onChange={handleInputChange}
                    className='form-control' 
                    id='nameInputContact' 
                    placeholder='John Doe  or  Jane Doe' 
                    />

                    <label htmlFor="contactComment" className='form-label'>Comments</label>
                    <input 
                    type="message" 
                    value={message} 
                    name='message'
                    onChange={handleInputChange}
                    className='form-control' 
                    id='commentContact' 
                    placeholder='Any comments you may have' 
                    />
                    <button type='button' onClick={handleContactSubmit} className='mx-auto my-3 d-block' id='submitBtn'>Submit</button>  
                    {errorMessage && (
                        <p className='errorText'>{errorMessage}</p>
                    )}
                </div>
                <h4 className='mx-auto text-center'>or reach out to me directly <span><a href='mailto:tlyoumans@gmail.com'>HERE</a></span> </h4>
            </div>
        </div>
    )
}

export default Profile;