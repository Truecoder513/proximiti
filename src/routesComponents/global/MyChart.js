import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { DotsThree } from "../../assets/icons/Icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = ({ chartData, chartTitle }) => {
  const [date, setDate] = useState("2022-03");

  return (
    <div className="chart">
      <h3>{chartTitle}</h3>
      <div className="chartFilter">
        <div>
          <input
            type="month"
            name=""
            id=""
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <DotsThree />
        </div>
      </div>
      <>
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </>
    </div>
  );
};

export default MyChart;
