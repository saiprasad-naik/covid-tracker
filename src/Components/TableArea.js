import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TableArea.css";

export default function TableArea() {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await axios.get(
        "https://api.covidtracking.com/v1/states/current.json"
      ); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="tableArea-cont">
      <div className="cont-heading">
        <h2>Covid Figures in States</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="cont-table">
        <table>
          <thead>
            <tr>
              <th className="first-header-cell">State</th>
              <th>Positives</th>
              <th>Negatives</th>
              <th className="last-header-cell">Deaths</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.state} className="table-row">
                <td>{item.state}</td>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
                <td>{item.death}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
