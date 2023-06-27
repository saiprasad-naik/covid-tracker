import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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

const Horizontalchart = () => {
  const [data, setData] = useState({
    labels: ["AK", "AL", "AR", "AS", "AZ", "CA", "CO"],
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
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("ressss", res);
          for (const val of res) {
            dataSet1.push(val.positive);
            dataSet2.push(val.negative);
            // labelSet.push(val.name)
          }
          setData({
            labels: ["AK", "AL", "AR", "AS", "AZ", "CA", "CO"],
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
          console.log("arrData", dataSet1, dataSet2);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: "60%", height: "50%",}}>
      <Bar data={data} options={options} />
    </div>
  );
};
export default Horizontalchart;
