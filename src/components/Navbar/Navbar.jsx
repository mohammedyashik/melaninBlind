import React, { useState, useEffect } from "react";
import "./Navbar.css";
import melaninLogo from "../../assets/melanin.png";
import Partner from "../partner/Partner";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>

      <div className="nav-apply">
        <p>
          Now accepting clinical pilot partners in India 
            <span className="apply-text" onClick={() => handleScrollTo("partner")} >
              Apply for Pre-Incubation at HTIC IIT Madras →
            </span>
        </p>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => handleScrollTo("about")}>
        <img src={melaninLogo} alt="MelaninBlind Logo" />
            <span className="logo-text">
              Melanin<span>Blind</span>
            </span>
          </div>
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li onClick={() => handleScrollTo("howitworks")}>
              How it Works
            </li>
            <li onClick={() => handleScrollTo("science")}>
              The Science
            </li>
            <li onClick={() => handleScrollTo("who-its-for")}>
              Who It's For
            </li>
            <li onClick={() => handleScrollTo("partners")}>
              Clinical Pilot
            </li>
            <li onClick={() => handleScrollTo("About")}>
              About
            </li>
            <li  onClick={() => handleScrollTo("partner")}>
              <button className="cta-btn">
                Partner With Us
                </button>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;