import React from "react";
import Toggle from "../Toggle/Toggle";
import  './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Abhishek</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:"none"}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button n-button">
           Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
