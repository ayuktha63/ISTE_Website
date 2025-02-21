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
import CustomCursor from './assets/cursor.cur'; // Custom cursor image

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffff',
        cursor: `url(${CustomCursor}), auto`
      }}>
        <img src={VectorIcon} alt="Loading Icon" className="loading-svg" style={{
          width: '100px',
          height: '100px',
          animation: 'rotate180 2s linear infinite' // Rotation animation
        }} />
      </div>
    );
  }

  return (
    <div style={{ cursor: `url(${CustomCursor}), auto` }}>
      <Router>
        <FloatingHeader />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Team />
              <Events /> {/* Events Section after Team */}
              <AboutUs /> {/* About Us Section after Events */}
              <Footer /> {/* Footer Section at the bottom */}
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
