import  React, { useState } from 'react';
import './App.css';                         // imports style sheet
import Header from "./components/Header";   // imports header
import Footer from './components/Footer';   // imports footer
import Bio from './components/bio';             // imports bio page - about me
import Profile from './components/profile';     // imports profile - contact me
import Projects from './components/projects';   // imports projects
import Splash from './components/splash';       // imports splash page


function App() {

    const [choice, setChoice] = useState('');

    return (
        <>
            <div className='container-fluid '>
                <Header
                    renderSplash={() => setChoice('')}
                    renderBio={() => setChoice('bio')}
                    renderProfile={() => setChoice('profile')}
                    renderProjects={() => setChoice('projects')}
                    active={choice}
                />
                <div className='container'>
                    {choice === 'bio' ? (
                        <Bio />
                    ) : choice === 'profile' ? (
                        <Profile />
                    ) : choice === 'projects' ? (
                        <Projects />
                    ) : (<Splash />)}
                </div>
                <Footer />
            </div>
        </>

    )
}

export default App;