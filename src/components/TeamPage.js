import React from 'react';
import './TeamPage.css';
import LinkedInIcon from '../assets/Vector/linkedln.svg';

const TeamPage = ({ title, description, teamMembers }) => {
    return (
        <section className="teamsection">
            <div className="team-header">
                <h2 className="team-title">{title}</h2>
                <p className="team-description">{description}</p>
            </div>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index} data-aos="fade-up">
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <div className="team-overlay">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInIcon} alt="LinkedIn" className="linkedin-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamPage;
