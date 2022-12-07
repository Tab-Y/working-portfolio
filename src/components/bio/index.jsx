import React from 'react';
import './style.css';
import selfie from './img/selfie.jpg';

const Bio = ({ currentPage, handlePageChange }) => {
    return (
        <>
        <img src={selfie} alt="Photo of Taber Youmans" id='selfie' className='mx-auto d-block'/>
            <h1 className='card-title text-center' id='aboutMeTitle'>About Me</h1>
        <div className='card mx-auto' id='aboutMe'>
                <p className='card-text text-center'>
                    Taber Youmans is an American born person who has worked in many types of fields. Ranging from
                    moving, military, warehouse backroom, retail, customer service, sales, sanitation and
                    hospitality. Taber earned a Bachelor of Fine Art from Metropolitan State University of Denver,
                    where he studied printmaking.
                </p>
                <p className='card-text text-center'>
                    Through working these various types of jobs, he has developed a wide list of skills. This skills
                    have helped shape the way he thinks and approaches lifes many issues with the mentality that
                    there is always a source of information and a way to solve the issues. There is an easy way, and
                    there is a right way and there is a safe way. Sometimes they overlap, and sometimes additional
                    information is needed.
                </p>
        </div>
        </>
    )
}

export default Bio;