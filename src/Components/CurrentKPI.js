import React from "react";
import CurrentKPI_Cards from "./CurrentKPI_Cards";
import "./CurrentKPI.css";

export default function CurrentKPI() {
  return (
    <div className="current-kpi-cont">
      <div className="cont-heading">
        <h2>Current KPI</h2>
      </div>
      <div className="current-kpi-cards">
        <CurrentKPI_Cards cardHeading="Positive" />
        <CurrentKPI_Cards cardHeading="Negative" />
        <CurrentKPI_Cards cardHeading="Currently Hospitalized" />
        <CurrentKPI_Cards cardHeading="Death" />
      </div>
    </div>
  );
}
