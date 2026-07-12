import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Services from "./assets/pages/Services";
 import Newsandevents from "./assets/pages/Newsandevents";
 import Carrersupport from "./assets/pages/Carrersupport";
 import Fotter from "./Fotter";
 import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



 
 function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (


    <BrowserRouter>

      {/* Navbar */}
      <div className="navbar">

        <div className="logo">
         <img
  src="https://silveroakstp.com/images/logo.webp"
  alt="logo"
/>
        </div>
<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</div>



        <div className={`links ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/career">Career Support</Link>
          <Link to="/news">News & Events</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

   <Link to="/contact" className="get-started-link">
  <button className="get-started">
    Get Started →
  </button>
</Link>

      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Carrersupport />} />
          <Route path="/news" element={<Newsandevents />} />
           

      </Routes>

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
         <img src="https://silveroakstp.com/images/logo.webp" alt="" />
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
       <p><FaPhone /> Phone: +92 312 117 550 9</p>
  <p><FaEnvelope /> Email: mueed701@gmail.com</p>
  <p><FaMapMarkerAlt /> Location: Karachi, Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Silver Oaks Talent Partners. All Rights Reserved.</p>
      </div>

    </footer>
    </BrowserRouter>






)
;


}

export default App;