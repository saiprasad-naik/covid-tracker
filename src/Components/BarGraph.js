import React, { useEffect, useState } from "react";
import "./BarGraphArea.css";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Covid DATA Charts",
    },
  },
};

const VerticalChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Positive",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
      {
        label: "Negative",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.covidtracking.com/v1/states/current.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const labelSet = [];
        const dataSet1 = [];
        const dataSet2 = [];
        for (const val of data) {
          dataSet1.push(val.positive);
          dataSet2.push(val.negative);
          labelSet.push(val.state);
        }
        const codeArray = labelSet.map((label) => label.slice(0, 2));
        setData({
          labels: codeArray,
          datasets: [
            {
              label: "Positive",
              data: dataSet1,
              borderColor: "rgb(255, 0, 0)",
              backgroundColor: "rgba(255, 0, 0)",
            },
            {
              label: "Negative",
              data: dataSet2,
              borderColor: "rgb(0, 255, 0)",
              backgroundColor: "rgba(0, 255, 0)",
            },
          ],
        });
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="BarGraphArea-cont">
      <div className="cont-heading">
        <h2>Covid Figures in States with Negativity / Positivity Rates</h2>
        <div className="heading-underline"></div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalChart;
