
// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Mentors from "./pages/Mentors";
import CoreTeam from "./pages/CoreTeam";
import TechTeam from "./pages/TechTeam";
import EventManagement from "./pages/EventManagement";
import "./App.css";
import VectorIcon from './assets/Vector/Default.svg';
import DesignTeam from "./pages/DesignTeam";
import SheTeam from "./pages/SheTeam";
import ContentTeam from "./pages/ContentTeam";
import SecretPortfolio from "./pages/SecretPortfolio";
import AboutUSseperate from "./pages/AboutUSseperate";

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffff'
      }}>
        <img src={VectorIcon} alt="Loading Icon" className="loading-svg" style={{
          width: '100px',
          height: '100px',
          animation: 'rotate180 2s linear infinite'
        }} />
      </div>
    );
  }

  return (
    <div>
      {/* Custom cursor effect */}
      <div className="cursor-dot" style={{
        position: 'fixed',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'black',
        boxShadow: '0 0 10px white',
        pointerEvents: 'none',
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}></div>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Team />
              <Events data-aos="fade-up" />
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/Mentors" element={<Mentors />} />
          <Route path="/CoreTeam" element={<CoreTeam />} />
          <Route path="/TechTeam" element={<TechTeam />} />
          <Route path="/EventManagement" element={<EventManagement />} />
          <Route path="/DesignTeam" element={<DesignTeam />} />
          <Route path="/SheTeam" element={<SheTeam />} />
          <Route path="/ContentTeam" element={<ContentTeam />} />
          <Route path="/ayuktha" element={<SecretPortfolio />} />
          <Route path="/AboutUS" element={<AboutUSseperate/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
