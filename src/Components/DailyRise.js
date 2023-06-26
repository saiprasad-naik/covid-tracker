import React, { useEffect, useState } from "react";
import axios from "axios";
import FiguresCards from "./FiguresCards";
import "./CurrentKPI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";


export default function DailyRise() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/us/current.json"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="current-daily-cont">
      <div className="cont-heading">
        <h2>Daily Rise</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="current-kpi-cards">
        {data.length > 0}
        <FiguresCards cardHeading="Positve Increase" data={data[0]?.positiveIncrease}   />
        <FiguresCards cardHeading="Negative Increase" data={data[0]?.negativeIncrease}/>
        <FiguresCards cardHeading="Hopitalised Increase" data={data[0]?.hospitalizedIncrease}/>
        <FiguresCards cardHeading="Death Increase" data={data[0]?.deathIncrease}/>
      </div>
    </div>
    </div>
  )
}
