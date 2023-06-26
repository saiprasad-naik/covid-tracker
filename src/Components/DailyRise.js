import React, { useEffect, useState } from "react";
import axios from "axios";
import FiguresCards from "./FiguresCards";
import "./CurrentKPI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViruses , faVirusCovidSlash, faHouseMedicalCircleExclamation, faPersonCircleXmark} from "@fortawesome/free-solid-svg-icons";


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
        <FiguresCards cardHeading="Positve Increase" icon={faViruses} data={data[0]?.positiveIncrease}   />
        <FiguresCards cardHeading="Negative Increase" icon={faVirusCovidSlash} data={data[0]?.negativeIncrease}/>
        <FiguresCards cardHeading="Hopitalised Increase" icon={faHouseMedicalCircleExclamation} data={data[0]?.hospitalizedIncrease}/>
        <FiguresCards cardHeading="Death Increase" icon={faPersonCircleXmark} data={data[0]?.deathIncrease}/>
      </div>
    </div>
    </div>
  )
}
