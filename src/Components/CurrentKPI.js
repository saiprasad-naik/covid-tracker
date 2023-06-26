import React, { useEffect, useState } from "react";
import axios from "axios";
import FiguresCards from "./FiguresCards";
import "./CurrentKPI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirusCovid , faShieldVirus, faBedPulse, faBookSkull} from "@fortawesome/free-solid-svg-icons";

export default function CurrentKPI() {
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
    <div className="current-kpi-cont">
      <div className="cont-heading">
        <h2>Current KPI</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="current-kpi-cards">
        {data.length > 0}

        <FiguresCards cardHeading="Positive" icon={faVirusCovid} data={data[0]?.positive} />
        <FiguresCards cardHeading="Negative" icon={faShieldVirus} data={data[0]?.negative} />
        <FiguresCards
          cardHeading="Currently Hospitalized"
          icon={faBedPulse}

          data={data[0]?.hospitalizedCurrently}
        />
        <FiguresCards cardHeading="Death" icon={faBookSkull} data={data[0]?.death} />
      </div>
    </div>
  );
}
