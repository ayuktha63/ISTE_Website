import React from "react";
import "./SecretPortfolio.css";

const SecretPortfolio = () => {
  return (
    <div className="secret-container">
      <div className="glitch-wrapper">
        <h1 className="glitch" data-text="AYUKTHA">AYUKTHA</h1>
      </div>
      <p className="quote">
        "Code is chaos tamed, AI is the whisper of the abyss."
      </p>
      <p className="intro">
        You’ve breached the veil. Welcome to the lair of an AI/ML sorcerer.
      </p>
      <div className="bio-section">
        <p className="bio-text">
          I’m Krishna Prasad, an adept at  Mar Baselios College of Engineering and Technology (Autonomous) , forging tools of the future with  Java ,  C ,  Python Django ,  Flask , and the dark arts of  AI/ML  and  Deep Learning .
        </p>
        <p className="bio-text">
          My creations?  Chatbots  that speak with forbidden knowledge,  AI Assistants  born from custom datasets, and  Smart Farmer Dashboards  that defy nature itself. I’ve mastered  API Integration (Gemini)  and sculpted models from the void.
        </p>
        <p className="bio-text">
          I wield power as an Execom Member of  IEEE SB MBCET ,  CSI ,  ISTE , and Mulearn—a shadow in the tech underworld.
        </p>
      </div>
      <div className="connect-section">
        <h3 className="connect-title">Summon Me:</h3>
        <p className="connect-links">
        <a href="https://linkedin.com/in/krishna-prasad63" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://instagram.com/_k.r.xna_" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="mailto:krishnaprasadsm63@gmail.com">krishnaprasadsm63@gmail.com</a> | 
        <a href="https://bio.link/krishnaprasadsm" target="_blank" rel="noopener noreferrer">Bio Link</a>
        </p>
      </div>
      <p className="mystery">
        The code hides secrets. Can you unravel the enigma?
      </p>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Krishna Prasad | Forged in the Crucible of Code</span>
      </footer>
    </div>
  );
};

export default SecretPortfolio;