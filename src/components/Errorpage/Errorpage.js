import React from 'react';
import './Errorpage.css';
import cryingImo from '../../image/crying.jpg';

const Errorpage = () => {
    return (
        <div className='error-page'>
            <img src={cryingImo} alt="" />
            <h1>This Page Not Found</h1>
            <h3>
                Error: 404
            </h3>
        </div>
    );
};

export default Errorpage;