import React from 'react';
import './style.css';
import anime from './img/anime-tracker-splash.png';
import weather from './img/weather-app-Screenshot.png';
import surfer from './img/surfer_screenshot.png';
import rps from './img/rps_preview.png';
import notetaker from './img/index-screenshot.png';

// add a carousel for featured project to cycle a few
// dynamically create cards in future update with json data

const Projects = () => {
    return (
        <>
        <h1 className='card-title text-center' id='portfolioTitle'>Portfolio</h1>
        <div id='projects'>
            <div className='projectCard' id='featuredProject'>
            <h4 className='over-img'>Anime Tracker<p>Node.js, MySQL, Handlebars, Bootstrap, JavaScript, CSS</p></h4>
                    <a href="https://anime-tracker-11-2022.herokuapp.com/"><img src={anime} alt="screenshot of Anime Tracker website" /></a>
            </div>
            <div className='grid'>
                <div className='projectCard'>
                    <h4 className='over-img'>Weather Dashboard<p>HTML, JavaScript, CSS</p></h4>
                    <a href="https://tab-y.github.io/weather-dashboard/"><img src={weather} alt="Weather forecast screenshot" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Surfer Forecast<p>HTML, CSS, JavaScript, Tailwind</p></h4>
                    <a href="https://MariaYConstanza.github.io/beach-day/"><img src={surfer} alt="screenshot of Surfer Forecast" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Rock, Paper, Scissors, Lizard, Spock<p>HTML, JavaScript, CSS</p></h4>
                    <a href="https://tab-y.github.io/rock-paper-scissors/"><img src={rps} alt="Rock, Paper, Scissors website game" /></a>
                </div>
                <div className='projectCard'>
                    <h4 className='over-img'>Note Taker<p>HTML, CSS, JavaScript, Node.js, Express</p></h4>
                    <a href="https://creepy-demon-68174.herokuapp.com/"><img src={notetaker} alt="Image of screen shot for Note Taker" /></a>
                </div>
                {/* <div className='projectCard'>
                    <h4 className='over-img'>Title of work <p>details of work</p></h4>
                    <a href=""><img src="" alt="" /></a>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Projects;