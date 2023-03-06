import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import Services from "../Services/Services.jsx";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Abhishek</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonial"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
