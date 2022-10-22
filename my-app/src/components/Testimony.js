import React from "react";
import '../style-sheets/Testimony.css';

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img
        className="img-testimony"
        src={require(`../img/testimony-${props.image}.png`)}
        alt="Emma"/>
      <div className="text-testimony-container">
        <p className="name-testimony">
            <strong>{props.name}</strong> in {props.country}</p>
        <p className="position-testimony">
            {props.position} at <strong> { props.business}</strong>
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
