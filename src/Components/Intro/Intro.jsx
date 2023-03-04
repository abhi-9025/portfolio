import React from "react";
import "./Intro.css";
import GithHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floating from "../Floating/Floating";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am </span>
          <span>Abhishek bharti</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            doloremque, laborum reprehenderit explicabo quidem hic expedita .
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/abhi-9025" target="_blank">
            <img src={GithHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-bharti-937467197/" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/abhi_.25/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img src={boy}/>
        <img src={glassesimoji} />
        <div style={{ top: "-4%", left: "68%" }}>
          <Floating image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <Floating image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blured  */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div className="blur" style={{ background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem' }}></div>

      </div>
    </div>
  );
};

export default Intro;
