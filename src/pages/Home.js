import React from 'react';
import './Home.css';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import rightImage from '../assets/bulb.png';
import Squares from '../blocks/Backgrounds/Squares/Squares';

function Home() {
  return (
    <div className="home-container" id="Home">
      <div className="background-layer">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='none'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <h2 className="title-heading">MBCET Presents</h2>
      <h1 className="main-title">
        ISTE <span>SB</span>
      </h1>
      <p className="description">
        Advancing technical education since 1976, ISTE MBCET fosters innovation, skill development, and professional growth for students and educators.
      </p>
      <div className="image-section">
        <div className="image-card" data-aos="fade-left">
          <img src={img1} alt="Event 1" className="image" />
          <div className="image-overlay">
            <p className="overlay-text">Event 1: E-Football</p>
          </div>
        </div>
        <div className="image-card" data-aos="zoom-in">
          <img src={img2} alt="Event 2" className="image" />
          <div className="image-overlay">
            <p className="overlay-text">Event 2: Theme Concept Challenge</p>
          </div>
        </div>
        <div className="image-card" data-aos="fade-right">
          <img src={img3} alt="Event 3" className="image" />
          <div className="image-overlay">
            <p className="overlay-text">Event 3: Food Spot Contest</p>
          </div>
        </div>
      </div>
      <div className="right-image-container">
        <img src={rightImage} alt="RightSideImage" className="right-image" />
      </div>
    </div>
  );
}

export default Home;