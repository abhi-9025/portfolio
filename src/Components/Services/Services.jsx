import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../../Abhishek_Bharti_CV.pdf'

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
          enim 
          <br />
          fugiat alias fuga illum corrupti. Sed iste libero commodi nisi, ullam
          sapiente!
        </span>
        <a href={Resume}  download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>
      </div>
      <div className="cards">
         <div style={{left:'14rem'}}>
            <Card emoji={HeartEmoji}
                  heading={'Design'}
                  details={"Figma,Sketch,Adobe,Adobe xd"}/>
         </div>
         <div style={{top:'12rem',left:'-4rem'}}>
         <Card emoji={Glasses}
                  heading={'Developer'}
                  details={"html,css,jabvacript,c++"}/>
         </div>
         <div style={{top:'19rem',left:'12rem'}}>
         <Card emoji={Humble}
                  heading={'UI/UX'}
                  details={"html,css,jabvacript,c++"}/>
         </div>
         <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>

    </div>
  );
};

export default Services;
