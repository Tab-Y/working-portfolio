import React from "react";
import './style.css';
import res from './docs/dec-2022-Youmans-Taber-Resume.docx';

const Resume = () => {
    return (
        <div className="my-3" id="resumeCard">
            <h1 className="mx-auto text-center" id="resumeTitle">Resume</h1>
            <p className="mx-auto text-center">click <a href={res} download>HERE</a> to download my resume</p>
                <h2 className="mx-auto text-center subTitle">Web Development Proficiencies</h2>
            <div className="mx-auto text-center" id="proficienciesList">
                {/* proficiencies */}
                <div id="general">
                    <h3>General</h3>
                    <ul>
                        <li>
                            Code Orginization
                        </li>
                        <li>
                            Professional Communication
                        </li>
                        <li>
                            Accepting criticism
                        </li>
                        <li>
                            Seeking advice when needed
                        </li>
                        <li>
                            Improving from errors
                        </li>
                        <li>
                            Resource Usage
                        </li>
                        <li>
                            Reading Documentaion
                        </li>
                        <li>
                            Full-Stack MERN development
                        </li>
                    </ul>
                </div>
                <div id="frontEnd">
                    <h3>Front-End</h3>
                    <ul>
                        <li>
                            HTML5
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            jquery
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Page Design / Wireframes
                        </li>
                        <li>
                            Accessible DOM structuring
                        </li>
                        <li>
                            Handlebars
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            API calls and JSON reading
                        </li>
                        <li>
                            Object Orientated Programing
                        </li>
                    </ul>
                </div>
                <div id="backEnd">
                    <h3>Back-End</h3>
                    <ul>
                        <li>
                            Node.js
                        </li>
                        <li>
                            express.js
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Routing
                        </li>
                        <li>
                            mySQL
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            API calling and JSON reading
                        </li>
                        <li>
                            File orginization
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;