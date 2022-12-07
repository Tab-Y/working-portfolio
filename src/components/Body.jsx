import { React, useState } from 'react';
import Bio from './bio';
import Profile from './profile';
import Projects from './projects';
import Splash from './splash';
import './Body.css'

const Body = ({ currentPage, handlePageChange }) => {
    // Body will be the rendered page component use state change
    const [ choice, setChoice ] = useState('projects')
    switch (choice) {       // choice will be which button they press for state change
        case 'bio':

            return(
                <Bio />
            );

        case 'profile':

            return (
                <Profile />
            );

        case 'projects':

            return(
                <Projects />
            );
        default :

            return (
                <Splash />
            )
        
    }

}
export default Body;