import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo_mbcet from "../assets/logo_mbcet.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when main menu toggles
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo">
          <img src={logo_mbcet} alt="Logo" className="logo-image" />
        </div>
        <span className="logo-text">
          ISTE <span className="highlight">MBCET</span>
        </span>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/AboutUs" className="nav-link" onClick={toggleMenu}>
          About Us
        </Link>

        {/* Team Dropdown */}
        <div className={`dropdown ${isDropdownOpen ? "active" : ""}`}>
          <span className="nav-link dropdown-toggle" onClick={toggleDropdown}>
            Team
          </span>
          <div className="dropdown-menu">
            <Link to="/Mentors" className="dropdown-item" onClick={toggleMenu}>
              Mentors & Faculty
            </Link>
            <Link to="/CoreTeam" className="dropdown-item" onClick={toggleMenu}>
              Core Team
            </Link>
            <Link to="/TechTeam" className="dropdown-item" onClick={toggleMenu}>
              Tech Team
            </Link>
            <Link
              to="/EventManagement"
              className="dropdown-item"
              onClick={toggleMenu}
            >
              Event Management
            </Link>
            <Link to="/SheTeam" className="dropdown-item" onClick={toggleMenu}>
              She Team
            </Link>
            <Link to="/DesignTeam" className="dropdown-item" onClick={toggleMenu}>
              Design Team
            </Link>
            <Link to="/ContentTeam" className="dropdown-item" onClick={toggleMenu}>
              Content Team
            </Link>
            {/* ✅ PR & Media Team added below */}
            <Link
              to="/PrAndMediaTeam"
              className="dropdown-item"
              onClick={toggleMenu}
            >
              PR & Media Team
            </Link>
          </div>
        </div>

        <button
          className="join-button"
          onClick={() => {
            window.location.href = "https://forms.gle/Gi8bT6Z9vbW2nXte8";
            toggleMenu();
          }}
        >
          <span className="join-text">JOIN</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
