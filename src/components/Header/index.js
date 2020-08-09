import React from 'react';
import './index.css';
import Logo from '../../images/logo1.png'

const Header = () => {
    return (
        <div className="navigation-bar">
            <div id="navigation-container">
            <img src={Logo} alt='Logo'/>

            <ul>
                {/* <li><a >Home</a></li>
                <li><a >Projects</a></li>
                <li><a >About</a></li>
                <li><a >Services</a></li>
                <li><a >Get in Touch</a></li> */}
            </ul>
            {/*      */}
            </div>
        </div>
    );
}

export default Header;