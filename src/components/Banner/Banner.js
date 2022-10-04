import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h1 style={{color: "var(--tomato)"}}>Food & Drink</h1>
                <h5>Curated by Boxed Water Is Better</h5>
                <h5>Warning: don’t look at this topic if you’re hungry! Welcome to the world of culinary photography — with shots of ice-cold beverages, home-cooked meals and more.</h5>
                <button>Learn More Here <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Banner;