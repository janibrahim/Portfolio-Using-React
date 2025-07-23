import React from "react";
import Html from "../assets/Skills/HTML.png";
import Css from "../assets/Skills/css.png";
import Javascript from "../assets/Skills/javascript.png";
import Bootstrap from "../assets/Skills/bootstrap.png";
import ReactImage from "../assets/Skills/react.png";
import Photoshop from "../assets/Skills/photoshop.png";
import Aftereffects from "../assets/Skills/after effects.png";
import Premierpro from "../assets/Skills/premier pro.png";
import Canva from "../assets/Skills/canva.png";
import Capcut from "../assets/Skills/capcut.png";
import Skillcard from "../components/Skillcard";

const Skills = () => {
  return (
    <div className="cards">
      <h2 style={{textDecoration :"underline"}}>Skills</h2>

      <div className="cards-container">

      <div>
        <Skillcard image={Html} title="Html 5" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Css} title="CSS 3" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Javascript} title="Javascript" cardInfo="" />
      </div>
      <div>
        <Skillcard image={ReactImage} title="React" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Bootstrap} title="BootStrap 5" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Photoshop} title="Adobe Photoshop" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Premierpro} title="Adobe Premier Pro" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Aftereffects} title="Adobe AfterEffects" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Canva} title="Canva" cardInfo="" />
      </div>
      <div>
        <Skillcard image={Capcut} title="CapCut" cardInfo="" />
      </div>


      </div>
    </div>
  );
};

export default Skills;
