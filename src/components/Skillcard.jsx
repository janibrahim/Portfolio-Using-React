import React from "react";

const Skillcard = ({title, image, cardInfo}) => {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img" alt=""/>
        <p className="card-title">{title}</p>
        <p className="card-info">{cardInfo}</p>
      </div>
    </div>
  );
};

export default Skillcard;
