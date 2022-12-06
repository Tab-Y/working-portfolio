import { React, useState } from 'react';
import Bio from './bio';
import Profile from './profile';
import Projects from './projects';
import Splash from './splash'

const Body = ({ currentPage, handlePageChange }) => {
    // Body will be the rendered page component use state change
    const [ choice, setChoice ] = useState('')
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