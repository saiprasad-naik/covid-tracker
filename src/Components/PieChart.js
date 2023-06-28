import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./PieChartArea.css";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

export default function PieChart() {
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],

        backgroundColor: ["red", "blue", "yellow"],
      },
    ],

    labels: ["Red", "Yellow", "Blue"],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.covidtracking.com/v1/states/current.json")
        .then((data) => {
          const res = data.json();

          return res;
        })

        .then((res) => {
          console.log("resss", res);

          const label = [];

          const data = [];

          for (var i of res) {
            label.push(i.state);

            data.push(i.death);
          }

          setData({
            datasets: [
              {
                data: data,

                backgroundColor: [
                  "red",
                  "blue",
                  "yellow",
                  "orange",
                  "pink",
                  "green",
                  "teal",
                  "maroon",
                ],
              },
            ],

            labels: label,
          });
        })

        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="PieChartArea-cont">
      <div className="cont-heading">
        <h2>Deaths in each state</h2>
        <div className="heading-underline"></div>
      </div>
      <Doughnut data={data} />
    </div>
  );
}
