// AboutUs.js
import React from 'react';
import './AboutUs.css';
import VectorIcon from '../assets/Vector/Default.svg';

function AboutUs() {
    return (
        <section className="about-section" id="AboutUs">
            <h2 className="about-title">
                <img src={VectorIcon} alt="Team Icon" className="team-svg" />
                About Us</h2>
            <p className="about-description">
                The Indian Society for Technical Education (ISTE) is a national, non-profit organization dedicated to enhancing technical education in India since 1976.
            </p>
            <p className="about-description">
                At Mar Baselios College of Engineering and Technology (MBCET), the ISTE chapter has been active since 2005, with over 700 student members and 100 faculty members. The chapter focuses on skill development, professional growth, and bridging the gap between academics and industry through workshops, training programs, and innovative initiatives.
            </p>
        </section>
    );
}

export default AboutUs;
