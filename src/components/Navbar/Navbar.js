import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../image/mealdb-logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='lg-navbar'>
                <img src={logo} alt="mealdb-logo" />
                <nav>
                    <Link to={'/home'}><i className="fa-solid fa-house-chimney"></i> Home</Link>
                    <Link to={'/credit'}><i className="fa-solid fa-credit-card"></i> Credit</Link>
                    <Link to={'/about'}><i className="fa-solid fa-address-card"></i> About</Link>
                    <Link to={'/profile'}><i className="fa-solid fa-user"></i> Profile</Link>
                </nav>
            </div>

            <div className='sm-navbar-container'>
                <nav className='sm-navbar'>
                    <Link to={'/home'}><i className="fa-solid fa-house-chimney"></i></Link>
                    <Link to={'/credit'}><i className="fa-solid fa-credit-card"></i></Link>
                    <Link to={'/about'}><i className="fa-solid fa-address-card"></i></Link>
                    <Link to={'/profile'}><i className="fa-solid fa-user"></i></Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;