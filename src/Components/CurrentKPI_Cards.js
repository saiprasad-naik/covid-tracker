import React from "react";

import './Current-kpi-cards.css'

export default function CurrentKPI_Cards(props) {
  return (
    <div className="card">
      <div className="card-heading">
        <h3>{props.cardHeading}</h3>
      </div>

      <div className="card-content">
        <div className="card-left-content">
            <img src="" alt="" />
        </div>
        <div className="card-right-content">
            <p className="card-numbers">200000</p>
        </div>
      </div>
    </div>
  );
}
