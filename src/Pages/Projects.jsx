import React from "react";
import Skillcard from "../components/Skillcard";
import Project1 from "../assets/projects/portfolio-using-react.png";

const Projects = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>Projects</h2>
      <div className="cards-container">
        <div>
          <Skillcard
            image={Project1}
            title="Personal Portfolio - React"
            cardInfo=""
          />
        </div>
        <div>
          <Skillcard
            image={Project1}
            title="Personal Portfolio - React"
            cardInfo=""
          />
        </div>
        <div>
          <Skillcard
            image={Project1}
            title="Personal Portfolio - React"
            cardInfo=""
          />
        </div>
        <div>
          <Skillcard
            image={Project1}
            title="Personal Portfolio - React"
            cardInfo=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
