import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <p>All Rights Reserved | Md. Shamim Sarker | 2022</p>
            <div className='social-icon'>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
        </div>
    );
};

export default Footer;