import React from "react";

import "./FigureCards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FiguresCards(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <FontAwesomeIcon icon={props.icon}/>
      </div>

      <div className="card-contents">
        <div className="card-heading">
          <h4>{props.cardHeading}</h4>
        </div>
        <div className="card-main-content">
          <p className="card-numbers">{props.data}</p>
        </div>
      </div>

    </div>
  );
}
