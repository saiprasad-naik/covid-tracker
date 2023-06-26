import React from "react";

import "./Current-kpi-cards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";

export default function FiguresCards(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <FontAwesomeIcon icon={faVirusCovid}/>
      </div>

      <div className="card-contents">
        <div className="card-heading">
          <h3>{props.cardHeading}</h3>
        </div>
        <div className="card-main-content">
          <p className="card-numbers">{props.data}</p>
        </div>
      </div>

    </div>
  );
}
