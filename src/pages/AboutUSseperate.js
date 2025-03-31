import React, { useEffect, useState } from "react";
import "./AboutUSseperate.css";

const timelineData = [
  { year: "2005", event: "MBCET becomes an institutional member of ISTE" },
  { year: "2013", event: "ISTE MBCET Student Chapter inaugurated by Dr. Sukesh" },
  { year: "2013", event: "Won special prize for maximum new membership (519 students)" },
  { year: "2016", event: "Hosted ISTE GRANDMASTER QUIZ with 87 teams" },
  { year: "2023", event: "Celebrated 10 years of ISTE MBCET Student Chapter" },
];

const photoLinks = [
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-17.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-768x562.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-19.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-15.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-11-768x462.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-5-768x579.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-1-768x577.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-3-768x506.jpeg",
  "https://mbcet.ac.in/wp-content/uploads/2024/12/ISTE-12.jpeg",
];

const AboutUs = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".iste-about-timeline-item").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const openPhotoModal = (photo) => setSelectedPhoto(photo);
  const closePhotoModal = () => setSelectedPhoto(null);

  return (
    <div className="iste-about-page">
      <header className="iste-about-header">
        <h1 className="iste-about-header-title">About ISTE MBCET</h1>
        <p className="iste-about-header-subtitle">Empowering Technical Excellence Since 2005</p>
      </header>

      <section className="iste-about-what-section">
        <div className="iste-about-what-content">
          <h2 className="iste-about-section-title">What is ISTE?</h2>
          <p>
            The Indian Society for Technical Education (ISTE) is a national, professional, non-profit society registered under the Societies Registration Act of 1860. Established in 1976, ISTE is dedicated to improving the quality of technical education across India. At MBCET, ISTE has been an institutional member since 2005, with over 700 student members and 100 faculty members.
          </p>
          <p>
            <strong>Objectives:</strong>
            <ul>
              <li>Provide quality training programs for teachers and administrators.</li>
              <li>Produce top-quality professional engineers and technicians.</li>
              <li>Guide students to enhance learning skills and personality development.</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="iste-about-timeline-section">
        <h2 className="iste-about-section-title">Our Journey</h2>
        <div className="iste-about-timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`iste-about-timeline-item ${visibleItems.includes(index) ? "visible" : ""}`}
            >
              <div className="iste-about-timeline-dot"></div>
              <div className="iste-about-timeline-content">
                <h3>{item.year}</h3>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="iste-about-achievements-section">
        <h2 className="iste-about-section-title">Our Achievements</h2>
        <div className="iste-about-achievements-grid">
          <div className="iste-about-achievement-card">
            <h3>2013</h3>
            <p>Special Prize for Maximum New Membership (519 students)</p>
          </div>
          <div className="iste-about-achievement-card">
            <h3>2014</h3>
            <p>Hosted Qurencia 14 - ISTE Kerala Section Annual Convention</p>
          </div>
          <div className="iste-about-achievement-card">
            <h3>2016</h3>
            <p>Organized ISTE GRANDMASTER QUIZ with 87 teams</p>
          </div>
        </div>
      </section>

      <section className="iste-about-activities-section">
        <h2 className="iste-about-section-title">What ISTE MBCET Has Done</h2>
        <div className="iste-about-activities-content">
          <h3>Faculty Leadership</h3>
          <ul>
            <li>Ms Asha S, Associate Professor, CS - Chairman</li>
            <li>Ms Sheenu P, Assistant Professor, EEE - Secretary</li>
            <li>Dr. Nidhi M B, Associate Professor, ME - Mentor</li>
            {/* Truncated for brevity */}
          </ul>

          <h3>Key Activities (2013-2017)</h3>
          <div className="iste-about-activities-grid">
            <div className="iste-about-activity-card">
              <h4>2016-17 Highlights</h4>
              <p>ISTE GRANDMASTER QUIZ - 87 teams</p>
              <p>Workshop on Robotics - 24 students</p>
            </div>
            <div className="iste-about-activity-card">
              <h4>2013-15 Highlights</h4>
              <p>Qurencia 14 - 500 attendees</p>
              <p>Environment Day Sapling Planting</p>
            </div>
          </div>

          <h3>Photo Gallery</h3>
          <div className="iste-about-photo-gallery">
            {photoLinks.map((link, index) => (
              <img
                key={index}
                src={link}
                alt={`ISTE MBCET Event ${index + 1}`}
                className="iste-about-photo"
                onClick={() => openPhotoModal(link)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div className="iste-photo-modal" onClick={closePhotoModal}>
          <img src={selectedPhoto} alt="Selected ISTE Event" className="iste-modal-image" />
          <button className="iste-modal-close" onClick={closePhotoModal}>✕</button>
        </div>
      )}
    </div>
  );
};

export default AboutUs;