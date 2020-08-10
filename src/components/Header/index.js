import React from 'react';
import './index.css';
import Logo from '../../images/logo1.png'
import SearchBar from '../SearchBar';

const Header = () => {
    return (
        <div className="navigation-bar">
            <div id="navigation-container">
                <img src={Logo} alt='Logo'/>
                <div className='SearchBar'>
                <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default Header;