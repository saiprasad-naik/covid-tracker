import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StateFigures from "./StateFigures";
import "./StateDetails.css";
import StateInfo from "./StateInfo";

export default function StateDetails() {
  const [stateData, setStateData] = useState({});

  const { stateName } = useParams();

  useEffect(() => {
    getStateData();
  }, []);

  const getStateData = async () => {
    try {
      const response = await axios.get(
        `https://api.covidtracking.com/v1/states/${stateName.toLowerCase()}/current.json`
      ); // Replace with your API endpoint
      setStateData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="state-detail-cont">
      <div className="state-name">
        <h3>State Name</h3>
        <p>{stateData?.state}</p>
      </div>

      <div className="state-detail-inner-cont">
        <div className="left-content">
          <div className="state-figures">
            <StateFigures
              heading="Positive Count"
              figures={stateData?.positive ? stateData?.positive : "-"}
            />
            <StateFigures
              heading="Negative Count"
              figures={stateData?.negative ? stateData?.negative : "-"}
            />
            <StateFigures
              heading="Recovered Count"
              figures={stateData?.recovered ? stateData?.recovered : "-"}
            />
            <StateFigures heading="Death Count" figures={stateData?.death ? stateData?.death : "-"} />
            <StateFigures
              heading="Hospitalized Count"
              figures={stateData?.hospitalized ? stateData?.hospitalized : "-"}
            />
            <StateFigures heading="Total Count" figures={stateData?.total ? stateData?.total : "-"} />
            <StateFigures
              heading="Positive Increase"
              figures={stateData?.positiveIncrease ? stateData?.positiveIncrease : '-'}
            />
            <StateFigures
              heading="Negative Increase"
              figures={stateData?.negativeIncrease ? stateData?.negativeIncrease : "-"}
            />
            <StateFigures
              heading="Fips"
              figures={stateData?.fips ? stateData?.fips : "-"}
            />
          </div>
        </div>

        <div className="right-content">
          <StateInfo
            heading="Date"
            figures={stateData?.date}
            className="pink-card"
          />
          <StateInfo
            heading="Last Update"
            figures={stateData?.lastUpdateEt}
            className="green-card"
          />
          <StateInfo
            heading="Total Test Results"
            figures={stateData?.totalTestResults}
            className="blue-card"
          />
          <StateInfo
            heading="Date"
            figures={stateData?.date}
            className="purple-card"
          />
        </div>
      </div>
    </div>
  );
}
