import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingHeader from "./components/Header";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import "./App.css";
import VectorIcon from './assets/Vector/Default.svg';

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
        <FloatingHeader />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
