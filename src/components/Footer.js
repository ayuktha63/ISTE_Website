import React from 'react';
import './Footer.css';
import instagramIcon from '../assets/Vector/instagram.svg';
import facebookIcon from '../assets/Vector/facebook.svg';
import linkedinIcon from '../assets/Vector/linkedln.svg';

function Footer() {
    return (
        <>
            <div className="footer-container">
                {/* Big Footer Section */}
                <div className="big-footer">
                    <div className="footer-contact">
                        <p className="footer-title">Get in touch</p>
                        <a href="mailto:iste@mbcet.ac.in">
                            <p className="footer-email">iste@mbcet.ac.in</p>
                        </a>
                    </div>

                    {/* Social Icons with Hover Effect */}
                    <div className="footer-socials">
                        <div className="icon-wrapper">
                            <a href="https://www.instagram.com/istembcet/" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" className="  
    
    social-icon" />
                            </a>
                        </div>
                        <div className="icon-wrapper">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebookIcon} alt="Facebook" className="social-icon" />
                            </a>
                        </div>
                        <div className="icon-wrapper">
                            <a href="https://www.linkedin.com/company/istescmbcet/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Small Footer Sections */}
                <div className="small-footer">
                    <a href="#Home" className="footer-link">Home</a>
                    <a href="#Team" className="footer-link">Team</a>
                    <a href="#AboutUs" className="footer-link">About Us</a>
                </div>
                <div className="small-footer">
                    <a href="#Home" className="footer-link">Home</a>
                    <a href="#Team" className="footer-link">Team</a>
                    <a href="#AboutUs" className="footer-link">About Us</a>
                </div>
                <div className="small-footer">
                    <a href="#Home" className="footer-link">Home</a>
                    <a href="#Team" className="footer-link">Team</a>
                    <a href="#AboutUs" className="footer-link">About Us</a>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="bottom-footer">
                <span className="bottom-footer-text">@2025-ISTE MBCET</span>
                <span className="bottom-footer-text">Designed and Developed by Krishna Prasad</span>
            </div>
        </>
    );
}

export default Footer;