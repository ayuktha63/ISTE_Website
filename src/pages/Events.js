import React from 'react';
import './Events.css';
import event1 from '../assets/image1.png';
import event2 from '../assets/image2.png';
import event3 from '../assets/image3.png';
import pastEvent1 from '../assets/image1.png'; //past1.png
import pastEvent2 from '../assets/image2.png';
import pastEvent3 from '../assets/image3.png';
import events from '../assets/Vector/events.svg';
function Events() {
  return (
    <section className="events-section" id="Events">
      {/* Upcoming Events Section */}
      <h2 className="events-title">
        <img src={events} alt="Event Icon" className="events" />
        Upcoming Events</h2>
      <div className="events-grid">
        <div className="event-card" data-aos="flip-left">
          <img src={event1} alt="Event 1" className="event-image" />
          <h3 className="event-name">Hackathon 2024</h3>
          <p className="event-description">Showcase your coding skills and win exciting prizes.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card" data-aos="flip-left">
          <img src={event2} alt="Event 2" className="event-image" />
          <h3 className="event-name">AI Workshop</h3>
          <p className="event-description">Hands-on workshop to learn cutting-edge AI tools.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card" data-aos="flip-left">
          <img src={event3} alt="Event 3" className="event-image" />
          <h3 className="event-name">Tech Talk Series</h3>
          <p className="event-description">Join industry experts to discuss future technologies.</p>
          <button className="register-button">Register</button>
        </div>
      </div>

      {/* Divider for Past Events */}

      {/* Past Events Section */}
      <h2 className="events-title">Events</h2>
      <div className="events-grid">
        <div className="event-card" data-aos="flip-right">
          <img src={pastEvent1} alt="Past Event 1" className="event-image" />
          <h3 className="event-name">Coding Marathon 2023</h3>
          <p className="event-description">A thrilling 24-hour coding event with amazing projects.</p>
        </div>
        <div className="event-card" data-aos="flip-right">
          <img src={pastEvent2} alt="Past Event 2" className="event-image" />
          <h3 className="event-name">Robotics Expo</h3>
          <p className="event-description">Showcased innovative robotics projects by students.</p>
        </div>
        <div className="event-card" data-aos="flip-right">
          <img src={pastEvent3} alt="Past Event 3" className="event-image" />
          <h3 className="event-name">Cybersecurity Seminar</h3>
          <p className="event-description">Insightful sessions on modern cybersecurity trends.</p>
        </div>
      </div>
    </section>
  );
}

export default Events;
