import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Prosucts</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='header-info'>
                <h1>This Is MY Personal Web Designing Website</h1>
                <h2>I'm MD Nurul Amin</h2>
                <h3>And I'M A Junior Web Designer || Front End Developer</h3>
            </div>
        </div>
    );
};

export default Header;