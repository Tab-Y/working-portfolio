import React from 'react';

const Footer = ({ currentPage, handlePageChange }) => {
    return (
        <footer>
            <ul>
                <li><a href="#">github</a></li>
                <li><a href="#">linkedIn</a></li>
                <li><a href="#">Another Profile</a></li>
            </ul>
        </footer>
    )
}

export default Footer;