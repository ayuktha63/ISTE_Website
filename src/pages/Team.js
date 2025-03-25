import React from 'react';
import './Team.css';
import teamMember1 from '../assets/yash.png';
import teamMember2 from '../assets/krishna_core.jpg';
import teamMember3 from '../assets/kiran.jpg';
import teampng from '../assets/team.png';
import LinkedInIcon from '../assets/Vector/linkedln.svg';

function Team() {
    return (
        <section id="Team" className="team-section">
            <div className="team-header">
                <h2 className="team-title">
                    <img src={teampng} alt="Team Icon" className="team" />
                    Meet Our Team
                </h2>
            </div>
            <div className="team-grid">
                <div className="team-card" data-aos="fade-up">
                    <img src={teamMember1} alt="Team Member 1" className="team-image" />
                    <h3 className="team-name">Yash Chalhotre</h3>
                    <p className="team-role">Chairperson</p>
                    <div className="team-overlay">
                        <a href="https://www.linkedin.com/in/cdt-yash-chhalotre-55090b24b/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                    </div>
                </div>
                <div className="team-card" data-aos="fade-up">
                    <img src={teamMember2} alt="Team Member 2" className="team-image" />
                    <h3 className="team-name">Krishna Prashanth</h3>
                    <p className="team-role">Vice Chairperson</p>
                    <div className="team-overlay">
                        <a href="https://www.linkedin.com/in/krishna-prasanth-2121b61b3/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                    </div>
                </div> 
                <div className="team-card" data-aos="fade-up">
                    <img src={teamMember3} alt="Team Member 3" className="team-image" />
                    <h3 className="team-name">Kiran Biju</h3>
                    <p className="team-role">Joint Secretary</p>
                    <div className="team-overlay">
                        <a href="https://www.linkedin.com/in/kiran-biju" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Team;
