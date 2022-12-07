import React from 'react';
import './style.css'
import anime from './img/anime-tracker-splash.png'

const Projects = ({ currentPage, handlePageChange }) => {
    return (
        <div id='projects'>
            <div className='projectCard' id='featuredProject'>
            <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src={anime} alt="" /></a>
            </div>
            <div className='grid'>
                <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;