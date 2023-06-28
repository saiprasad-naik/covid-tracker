import React from "react";
import CurrentKPI from "./CurrentKPI";
import DailyRise from "./DailyRise";
import TableArea from "./TableArea";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";

export default function Dashboard() {
  return (
    <div>
      <CurrentKPI />
      <DailyRise />
      <TableArea />
      <BarGraph />
      <PieChart />
    </div>
  );
}
