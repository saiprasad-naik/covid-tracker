import React, { useEffect, useState } from "react";
import axios from "axios";
import FiguresCards from "./FiguresCards";
import "./CurrentKPI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";

export default function CurrentKPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/us/current.json"
      ); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current-kpi-cont">
      <div className="cont-heading">
        <h2>Current KPI</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="current-kpi-cards">
       
        <FiguresCards cardHeading="Positive" data={data.positive} />
        <FiguresCards cardHeading="Negative" />
        <FiguresCards cardHeading="Currently Hospitalized" />
        <FiguresCards cardHeading="Death" />
      </div>
    </div>
  );
}
