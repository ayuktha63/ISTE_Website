import React from 'react';
import './Header.css';
import logo_mbcet from '../assets/logo_mbcet.png';

function FloatingHeader() {
    return (
        <header className="floating-header">
            <div className="logo-section">
                <div className="logo">
                    <img src={logo_mbcet} alt="Logo" className="logo-image" />
                </div>
                <span className="logo-text">
                    ISTE <span className="highlight">MBCET</span>
                </span>
            </div>
            <div className="nav-links">
                <a href="#Home" className="nav-link">Home</a>
                <a href="#AboutUs" className="nav-link">About Us</a>
                <a href="#Events" className="nav-link">Events</a>
                <button className="join-button" onClick={() => window.location.href = 'https://forms.gle/Gi8bT6Z9vbW2nXte8'}>
                    <span className="join-text">JOIN</span>
                </button>

            </div>
        </header>
    );
}

export default FloatingHeader;
